// stores menu items for filtering
var allMenuItems = [];

// loads menu when page is ready
window.addEventListener("load", function () {
    var menuGrid = document.getElementById("menu-grid");
    if (menuGrid) {
        loadMenu();
    }
});

// fetches menu data from text file
function loadMenu() {
    fetch("../assets/menu_data/menu.txt")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to load menu file.");
            }
            return response.text();
        })
        .then(function (text) {
            allMenuItems = parseMenuText(text);
            populateFilters(allMenuItems);
            renderMenu(allMenuItems);

            var btnFilter = document.getElementById("btn-filter");
            if (btnFilter) {
                btnFilter.onclick = applyFilters;
            }

            var searchInput = document.getElementById("search-input");
            if (searchInput) {
                searchInput.oninput = applyFilters;
            }
        })
        .catch(function (error) {
            document.getElementById("menu-grid").innerHTML =
                '<div class="empty-state">' + error.message + "</div>";
        });
}

// parses text blocks into objects
function parseMenuText(text) {
    var items = [];
    var blocks = text.split(/\n\s*\n/);

    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i].trim();
        if (block === "") {
            continue; 
        }

        var lines = block.split("\n");
        var item = {};

        for (var j = 0; j < lines.length; j++) {
            var line = lines[j];
            var colonIndex = line.indexOf(":");
            if (colonIndex !== -1) {
                var key = line.substring(0, colonIndex).trim();
                var value = line.substring(colonIndex + 1).trim();
                item[key] = value;
            }
        }

        if (item["Title"]) {
            items.push(item);
        }
    }

    return items;
}

// fills dropdowns with unique categories
function populateFilters(items) {
    var categories = [];
    var diets = [];
    var spices = [];

    for (var i = 0; i < items.length; i++) {
        if (items[i].Category && categories.indexOf(items[i].Category) === -1) {
            categories.push(items[i].Category);
        }
        if (items[i].Diet && diets.indexOf(items[i].Diet) === -1) {
            diets.push(items[i].Diet);
        }
        if (items[i].Spice && spices.indexOf(items[i].Spice) === -1) {
            spices.push(items[i].Spice);
        }
    }

    var catSelect = document.getElementById("filter-category");
    if (catSelect) {
        for (var i = 0; i < categories.length; i++) {
            var option = document.createElement("option");
            option.value = categories[i];
            option.textContent = categories[i];
            catSelect.appendChild(option);
        }
    }

    var dietSelect = document.getElementById("filter-diet");
    if (dietSelect) {
        for (var i = 0; i < diets.length; i++) {
            var option = document.createElement("option");
            option.value = diets[i];
            option.textContent = diets[i];
            dietSelect.appendChild(option);
        }
    }

    var spiceSelect = document.getElementById("filter-spice");
    if (spiceSelect) {
        for (var i = 0; i < spices.length; i++) {
            var option = document.createElement("option");
            option.value = spices[i];
            option.textContent = spices[i];
            spiceSelect.appendChild(option);
        }
    }
}

// applies current filters and updates grid
function applyFilters() {
    var search = document.getElementById("search-input").value.toLowerCase();
    var category = document.getElementById("filter-category").value;
    var diet = document.getElementById("filter-diet").value;
    var spice = document.getElementById("filter-spice").value;

    var filtered = [];

    for (var i = 0; i < allMenuItems.length; i++) {
        var item = allMenuItems[i];

        var matchSearch = true;
        if (search !== "") {
            var title = (item.Title || "").toLowerCase();
            var desc = (item.Description || "").toLowerCase();
            if (title.indexOf(search) === -1 && desc.indexOf(search) === -1) {
                matchSearch = false;
            }
        }

        var matchCategory = true;
        if (category !== "" && item.Category !== category) {
            matchCategory = false;
        }

        var matchDiet = true;
        if (diet !== "" && item.Diet !== diet) {
            matchDiet = false;
        }

        var matchSpice = true;
        if (spice !== "" && item.Spice !== spice) {
            matchSpice = false;
        }

        if (matchSearch && matchCategory && matchDiet && matchSpice) {
            filtered.push(item);
        }
    }

    renderMenu(filtered);
}

// displays menu items as html cards
function renderMenu(items) {
    var grid = document.getElementById("menu-grid");
    var stats = document.getElementById("filter-stats");

    if (stats) {
        stats.textContent = items.length + " items found";
    }

    if (items.length === 0) {
        grid.innerHTML = '<div class="empty-state">No menu items match your filters.</div>';
        return;
    }

    var html = "";

    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        html += '<div class="menu-card">';
        html += '  <div class="card-header">';
        html += '    <div class="card-title">' + (item.Title || "Unknown Item") + "</div>";
        html += '    <div class="card-price">' + (item.Price || "") + "</div>";
        html += "  </div>";
        html += '  <div class="card-desc">' + (item.Description || "") + "</div>";
        html += '  <div class="card-tags">';

        if (item.Category) {
            html += '    <span class="tag">' + item.Category + "</span>";
        }
        if (item.Diet) {
            html += '    <span class="tag">' + item.Diet + "</span>";
        }
        if (item.Spice) {
            html += '    <span class="tag">' + item.Spice + "</span>";
        }

        html += "  </div>";
        html += "</div>";
    }

    grid.innerHTML = html;
}

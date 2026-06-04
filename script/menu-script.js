// script/menu-script.js

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the menu page
    const menuGrid = document.getElementById('menu-grid');
    if (menuGrid) {
        loadMenu();
    }
});

let allMenuItems = [];

// Load the menu from the text file
async function loadMenu() {
    try {
        const response = await fetch('../assets/menu_data/menu.txt');
        if (!response.ok) {
            throw new Error('Failed to load menu. Note: CORS might block file:// protocols.');
        }
        const text = await response.text();
        allMenuItems = parseMenuText(text);
        
        populateFilters(allMenuItems);
        renderMenu(allMenuItems);
        
        // Listeners for filters
        const btnFilter = document.getElementById('btn-filter');
        if (btnFilter) btnFilter.addEventListener('click', applyFilters);
        
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.addEventListener('input', applyFilters);
        
    } catch (error) {
        document.getElementById('menu-grid').innerHTML = `<div class="empty-state">${error.message}</div>`;
    }
}

// Parse text blocks into objects
function parseMenuText(text) {
    const items = [];
    const blocks = text.split(/\n\s*\n/);
    
    for (const block of blocks) {
        if (!block.trim()) continue;
        const lines = block.split('\n');
        const item = {};
        for (const line of lines) {
            const colonIndex = line.indexOf(':');
            if (colonIndex !== -1) {
                const key = line.substring(0, colonIndex).trim();
                const value = line.substring(colonIndex + 1).trim();
                item[key] = value;
            }
        }
        if (item['Title']) {
            items.push(item);
        }
    }
    return items;
}

// Populate the dropdown filters dynamically
function populateFilters(items) {
    const categories = new Set();
    const diets = new Set();
    const spices = new Set();
    
    items.forEach(item => {
        if (item.Category) categories.add(item.Category);
        if (item.Diet) diets.add(item.Diet);
        if (item.Spice) spices.add(item.Spice);
    });
    
    const catSelect = document.getElementById('filter-category');
    if (catSelect) categories.forEach(c => catSelect.add(new Option(c, c)));
    
    const dietSelect = document.getElementById('filter-diet');
    if (dietSelect) diets.forEach(d => dietSelect.add(new Option(d, d)));
    
    const spiceSelect = document.getElementById('filter-spice');
    if (spiceSelect) spices.forEach(s => spiceSelect.add(new Option(s, s)));
}

// Apply selected filters
function applyFilters() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('filter-category').value;
    const diet = document.getElementById('filter-diet').value;
    const spice = document.getElementById('filter-spice').value;
    
    const filtered = allMenuItems.filter(item => {
        const matchSearch = !search || 
            (item.Title && item.Title.toLowerCase().includes(search)) || 
            (item.Description && item.Description.toLowerCase().includes(search));
        const matchCategory = !category || item.Category === category;
        const matchDiet = !diet || item.Diet === diet;
        const matchSpice = !spice || item.Spice === spice;
        
        return matchSearch && matchCategory && matchDiet && matchSpice;
    });
    
    renderMenu(filtered);
}

// Render the HTML for menu items
function renderMenu(items) {
    const grid = document.getElementById('menu-grid');
    const stats = document.getElementById('menu-stats');
    
    if (stats) stats.textContent = `${items.length} items found`;
    
    if (items.length === 0) {
        grid.innerHTML = '<div class="empty-state">No menu items match your filters.</div>';
        return;
    }
    
    grid.innerHTML = items.map(item => `
        <div class="menu-card">
            <div class="menu-card-header">
                <div class="menu-card-title">${item.Title || 'Unknown Item'}</div>
                <div class="menu-card-price">${item.Price || ''}</div>
            </div>
            <div class="menu-card-desc">${item.Description || ''}</div>
            <div class="menu-tags">
                ${item.Category ? `<span class="menu-tag">${item.Category}</span>` : ''}
                ${item.Diet ? `<span class="menu-tag">${item.Diet}</span>` : ''}
                ${item.Spice ? `<span class="menu-tag">${item.Spice}</span>` : ''}
            </div>
        </div>
    `).join('');
}

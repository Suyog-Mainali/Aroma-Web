
        /* filters the item according to the users choice */
        const filterBtns = document.querySelectorAll('.filter-btn');
        const allItems   = document.querySelectorAll('.gallery-item');
        const sections   = {
            dish:  { grid: document.getElementById('grid-dish'),  label: document.getElementById('label-dish')  },
            drink: { grid: document.getElementById('grid-drink'), label: document.getElementById('label-drink') },
            bev:   { grid: document.getElementById('grid-bev'),   label: document.getElementById('label-bev')   },
            juice: { grid: document.getElementById('grid-juice'), label: document.getElementById('label-juice') },
            combo: { grid: document.getElementById('grid-combo'), label: document.getElementById('label-combo') },
        };

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const f = btn.dataset.filter;

                allItems.forEach(item => {
                    item.classList.toggle('hidden', f !== 'all' && item.dataset.cat !== f);
                });

                Object.entries(sections).forEach(([cat, els]) => {
                    const show = f === 'all' || f === cat;
                    els.grid.style.display  = show ? 'grid'  : 'none';
                    els.label.style.display = show ? 'flex'  : 'none';
                });
            });
        });

        /* Pops up the images and shows the info */
        const lightbox = document.getElementById('lightbox');
        const lbImg    = document.getElementById('lb-img');
        const lbName   = document.getElementById('lb-name');
        const lbDesc   = document.getElementById('lb-desc');

        allItems.forEach(item => {
            item.addEventListener('click', () => {
                lbImg.src            = item.querySelector('img').src;
                lbImg.alt            = item.dataset.name;
                lbName.textContent   = item.dataset.name;
                lbDesc.textContent   = item.dataset.desc;
                lightbox.classList.add('open');
            });
        });

        document.getElementById('lightbox-close').addEventListener('click', () => {
            lightbox.classList.remove('open');
        });
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) lightbox.classList.remove('open');
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') lightbox.classList.remove('open');
        });
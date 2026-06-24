document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('categoryNav');
    const content = document.getElementById('content');
    const searchInput = document.getElementById('searchInput');
    const backToTop = document.getElementById('backToTop');

    // 生成分类导航
    industryData.forEach((section, index) => {
        const btn = document.createElement('button');
        // 去掉序号前缀，只保留分类名
        btn.textContent = section.title.replace(/^[一二三四五六七八九十]+、/, '');
        btn.dataset.target = section.category;
        if (index === 0) btn.classList.add('active');
        nav.appendChild(btn);
    });

    // 渲染内容
    function renderContent(filterText = '') {
        content.innerHTML = '';
        industryData.forEach(section => {
            const filteredItems = section.items.filter(item =>
                item.name.toLowerCase().includes(filterText.toLowerCase()) ||
                (item.abbr && item.abbr.toLowerCase().includes(filterText.toLowerCase())) ||
                (item.desc && item.desc.toLowerCase().includes(filterText.toLowerCase()))
            );

            if (filteredItems.length === 0) return;

            const sectionEl = document.createElement('section');
            sectionEl.className = 'content-section';
            sectionEl.id = section.category;

            let cardsHTML = '<div class="card-grid">';
            filteredItems.forEach(item => {
                const codeTag = item.code ? `<span class="code">${item.code}</span>` : '';
                const marketCapTag = item.marketCap ? `<span class="market-cap">${item.marketCap}</span>` : '';
                const meta = (item.code || item.marketCap) ? `
                    <div class="meta">
                        ${codeTag}
                        ${marketCapTag}
                    </div>
                ` : '';

                cardsHTML += `
                    <div class="card">
                        <h3><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a></h3>
                        ${item.abbr ? `<span class="abbr">[${item.abbr}]</span>` : ''}
                        <p class="desc">${item.desc || ''}</p>
                        ${meta}
                    </div>
                `;
            });
            cardsHTML += '</div>';

            sectionEl.innerHTML = `<h2 class="section-title">${section.title}</h2>${cardsHTML}`;
            content.appendChild(sectionEl);
        });
    }

    // 初始渲染
    renderContent();

    // 搜索事件（防抖处理）
    let debounceTimer;
    searchInput.addEventListener('input', function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            renderContent(this.value.trim());
        }, 200);
    });

    // 导航点击事件
    nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            nav.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const targetId = e.target.dataset.target;
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // 返回顶部按钮（修复：移除重复声明）
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
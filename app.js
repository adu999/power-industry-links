// ===== 电力产业链全景图谱 - 主应用逻辑 =====

(function () {
  "use strict";

  const mainContent = document.getElementById("mainContent");
  const searchInput = document.getElementById("searchInput");
  const categoryNav = document.getElementById("categoryNav");
  const backToTop = document.getElementById("backToTop");

  let currentCategory = "all";
  let currentSearch = "";

  // ===== 渲染主内容 =====
  function render() {
    let totalCount = 0;
    let filteredData = filterData();

    if (filteredData.length === 0) {
      mainContent.innerHTML = `
        <div class="empty-state">
          <div class="emoji">🔍</div>
          <p>没有找到匹配的机构</p>
          <p style="margin-top:8px;font-size:0.85rem;">试试其他关键词吧</p>
        </div>
      `;
      return;
    }

    let html = "";

    // 统计栏
    html += renderStats(filteredData);

    filteredData.forEach((section) => {
      const sectionItems = collectItems(section);
      totalCount += sectionItems.length;

      html += `<section class="section" data-cat="${section.category || ""}">`;
      html += `<h2 class="section-title"><span class="icon">${getSectionIcon(section.category)}</span>${section.section}</h2>`;

      if (section.subsections) {
        section.subsections.forEach((sub) => {
          html += `<div class="sub-section">`;
          html += `<h3 class="sub-title">${sub.subtitle}</h3>`;
          html += renderCardGrid(sub.items);
          html += `</div>`;
        });
      } else if (section.items) {
        html += renderCardGrid(section.items);
      }

      html += `</section>`;
    });

    // 替换统计栏中的总数
    html = html.replace("{{TOTAL}}", totalCount);

    mainContent.innerHTML = html;

    // 绑定卡片点击（新标签页打开）
    bindCardLinks();
  }

  function renderStats(filteredData) {
    let total = 0;
    filteredData.forEach((s) => {
      total += collectItems(s).length;
    });

    const catCounts = {};
    DATA.forEach((s) => {
      const cat = s.category || "other";
      if (!catCounts[cat]) catCounts[cat] = 0;
      catCounts[cat] += collectItems(s).length;
    });

    let statsHtml = `<div class="stats-bar">`;
    statsHtml += `<div class="stat-item"><span class="stat-num">{{TOTAL}}</span><span class="stat-label">家机构</span></div>`;

    const catLabels = {
      regulator: "监管机构",
      grid: "两网",
      "power-group": "五大六小",
      "province-energy": "省能源国企",
      association: "行业协会",
      "design-construction": "设计施工",
      "province-gov": "各省能源局",
      exchange: "电力交易",
      "carbon-green": "碳交易/绿证",
      media: "行业媒体",
      equipment: "设备供应商",
      "data-price": "数据/价格",
      procurement: "采购/招聘",
      research: "科研院所",
      other: "其他",
    };

    if (currentCategory !== "all") {
      const label = catLabels[currentCategory] || currentCategory;
      const count = catCounts[currentCategory] || 0;
      statsHtml += `<div class="stat-item"><span class="stat-num">${count}</span><span class="stat-label">${label}</span></div>`;
    } else {
      // 显示前5大分类
      const sorted = Object.entries(catCounts).sort((a, b) => b[1] - a[1]);
      sorted.slice(0, 6).forEach(([cat, count]) => {
        const label = catLabels[cat] || cat;
        statsHtml += `<div class="stat-item"><span class="stat-num">${count}</span><span class="stat-label">${label}</span></div>`;
      });
    }

    statsHtml += `</div>`;
    return statsHtml;
  }

  function renderCardGrid(items) {
    let html = `<div class="card-grid">`;
    items.forEach((item) => {
      const searchLower = currentSearch.toLowerCase();
      const name = highlightMatch(item.name, searchLower);
      const abbr = item.abbr ? highlightMatch(item.abbr, searchLower) : "";
      const url = item.url || "";
      const code = item.code
        ? `<span class="card-code">📊 ${item.code}</span>`
        : "";
      const market = item.marketCap
        ? `<span class="card-market">💰 ${item.marketCap}</span>`
        : "";
      const org = item.orgStructure
        ? `<span class="card-desc">🏗️ 组织架构：${item.orgStructure}</span>`
        : "";
      const desc = item.desc
        ? `<span class="card-desc">${highlightMatch(item.desc, searchLower)}</span>`
        : "";

      html += `
        <div class="card">
          <div class="card-name">${name}</div>
          ${abbr ? `<div class="card-abbr">${abbr}</div>` : ""}
          ${code}${market ? " " + market : ""}
          <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>
          ${org}
          ${desc}
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }

  // ===== 数据过滤 =====
  function filterData() {
    return DATA.filter((section) => {
      // 分类过滤
      if (currentCategory !== "all" && section.category !== currentCategory) {
        return false;
      }

      // 搜索过滤
      if (currentSearch) {
        const items = collectItems(section);
        return items.some(
          (item) =>
            item.name.toLowerCase().includes(currentSearch) ||
            (item.abbr && item.abbr.toLowerCase().includes(currentSearch)) ||
            (item.url && item.url.toLowerCase().includes(currentSearch)) ||
            (item.desc && item.desc.toLowerCase().includes(currentSearch)) ||
            (item.code && item.code.toLowerCase().includes(currentSearch))
        );
      }

      return true;
    }).map((section) => {
      // 深拷贝并过滤子项
      const clone = { ...section };
      if (currentSearch) {
        if (clone.subsections) {
          clone.subsections = clone.subsections
            .map((sub) => ({
              ...sub,
              items: sub.items.filter(
                (item) =>
                  item.name.toLowerCase().includes(currentSearch) ||
                  (item.abbr &&
                    item.abbr.toLowerCase().includes(currentSearch)) ||
                  (item.url &&
                    item.url.toLowerCase().includes(currentSearch)) ||
                  (item.desc &&
                    item.desc.toLowerCase().includes(currentSearch)) ||
                  (item.code &&
                    item.code.toLowerCase().includes(currentSearch))
              ),
            }))
            .filter((sub) => sub.items.length > 0);
        } else if (clone.items) {
          clone.items = clone.items.filter(
            (item) =>
              item.name.toLowerCase().includes(currentSearch) ||
              (item.abbr &&
                item.abbr.toLowerCase().includes(currentSearch)) ||
              (item.url &&
                item.url.toLowerCase().includes(currentSearch)) ||
              (item.desc &&
                item.desc.toLowerCase().includes(currentSearch)) ||
              (item.code &&
                item.code.toLowerCase().includes(currentSearch))
          );
        }
      }
      return clone;
    });
  }

  function collectItems(section) {
    let items = [];
    if (section.subsections) {
      section.subsections.forEach((sub) => {
        items = items.concat(sub.items || []);
      });
    } else if (section.items) {
      items = items.concat(section.items);
    }
    return items;
  }

  // ===== 搜索高亮 =====
  function highlightMatch(text, search) {
    if (!search || !text) return text || "";
    const idx = text.toLowerCase().indexOf(search);
    if (idx === -1) return text;
    return (
      text.substring(0, idx) +
      `<span class="highlight">${text.substring(idx, idx + search.length)}</span>` +
      text.substring(idx + search.length)
    );
  }

  // ===== 分类图标 =====
  function getSectionIcon(category) {
    const icons = {
      regulator: "🏛️",
      grid: "⚡",
      "power-group": "🏭",
      "province-energy": "🏢",
      association: "🤝",
      "design-construction": "📐",
      "province-gov": "🏛️",
      exchange: "💱",
      "carbon-green": "🌿",
      media: "📰",
      equipment: "⚙️",
      "data-price": "📊",
      procurement: "🛒",
      research: "🔬",
      other: "📋",
    };
    return icons[category] || "📋";
  }

  // ===== 事件绑定 =====

  // 搜索（防抖）
  let searchTimer;
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      currentSearch = this.value.trim().toLowerCase();
      render();
    }, 200);
  });

  // 分类导航
  categoryNav.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-btn")) {
      document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.dataset.category;
      render();
    }
  });

  // 回到顶部
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 绑定卡片链接 - 使用事件委托
  function bindCardLinks() {
    // 卡片内a标签自带target="_blank"，无需额外处理
  }

  // ===== 初始化 =====
  render();
})();

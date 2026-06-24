# 中国电力产业链全景图谱

一个静态网页，收录中国电力行业全产业链的官方网站链接，涵盖 **15大分类、200+ 机构**。

## 📋 内容覆盖

| 序号 | 分类 | 内容 |
|:---:|------|------|
| 1 | 监管机构 | 国家能源局、发改委、国资委、生态环境部、统计局 |
| 2 | 电网企业 | 国家电网、南方电网、蒙西电网 |
| 3 | 发电集团 | 五大（华能/大唐/华电/国电投/国家能源）+ 六小（三峡/中广核/中核/华润/中节能/国投） |
| 4 | 核心上市公司 | 中国神华、长江电力、华能国际、龙源电力、中节能太阳能等 |
| 5 | 各省能源国企 | 31省/直辖市能源电力国企 |
| 6 | 各省能源局 | 31省/直辖市能源主管部门 |
| 7 | 电力交易中心 | 北京、广州及各省电力交易中心 |
| 8 | 设计院与施工 | 中国电建、中国能建、各大勘测设计院 |
| 9 | 设备供应商 | 风电整机、光伏制造、逆变器、变压器GIS、储能电芯 |
| 10 | 行业协会 | 中电联、核能协会、煤炭协会、光伏协会、风能协会 |
| 11 | 科研院所与高校 | 怀柔实验室、华北电力大学、长沙理工、上海电力大学等 |
| 12 | 碳交易与绿证 | 全国碳市场、绿证交易平台、价格指数 |
| 13 | 行业媒体 | 中国电力报、北极星、能见、财新等 |
| 14 | 采购与招聘 | 国网ECP、南网供应链、国聘网等 |
| 15 | 售电公司 | 五大六小旗下售电业务 |

## 🚀 部署到 GitHub Pages

### 第一步：创建仓库
1. 登录 [GitHub](https://github.com/) → 点击右上角 `+` → `New repository`
2. 仓库名：`power-industry-links`
3. 选择 **Public** → 勾选 `Add a README file` → 创建

### 第二步：上传文件
**方式A：网页上传（推荐）**
1. 进入仓库 → `Add file` → `Upload files`
2. 将本项目的 **5个文件** 直接拖入（不要嵌套文件夹）：
   - `index.html`
   - `style.css`
   - `data.js`
   - `app.js`
   - `README.md`
3. Commit message 写 `Initial commit` → `Commit changes`

**方式B：Git 命令**
```bash
git init
git add .
git commit -m "Initial commit: 电力产业链全景图谱"
git remote add origin https://github.com/你的用户名/power-industry-links.git
git branch -M main
git push -u origin main
```

### 第三步：开启 GitHub Pages
1. 仓库 → `Settings` → 左侧 `Pages`
2. `Source` 选择 **`main`** 分支 → `Save`
3. 等待 1~2 分钟，访问：
   > 🎉 `https://你的用户名.github.io/power-industry-links/`

## 🛠️ 后期维护

### 添加/修改机构
编辑 **`data.js`** 文件，找到对应分类的 `items` 数组，按以下格式添加：
```javascript
{ name: "机构全称", abbr: "简称", url: "https://www.example.com", desc: "一句话描述", code: "SH600xxx", marketCap: "约xxx亿" }
```
> `abbr`、`code`、`marketCap` 为非必填字段，按需使用。

### 添加新分类
1. 在 `data.js` 中新增一个 section 对象
2. 在 `app.js` 中无需额外修改（导航会自动生成）

### 更新市值
直接编辑 `data.js` 中对应条目的 `marketCap` 字段。

### 推送更新
```bash
git add data.js
git commit -m "更新：新增XX机构"
git push
```
推送后 **30秒内自动生效**。

## 📁 文件说明

| 文件 | 作用 |
|------|------|
| `index.html` | 主页面结构 |
| `style.css` | 样式（响应式设计，支持手机/PC） |
| `data.js` | 全部机构数据（15大分类） |
| `app.js` | 搜索、筛选、导航渲染逻辑 |
| `README.md` | 本说明文档 |

## ⚡ 网页功能

- 🔍 **实时模糊搜索**：输入关键词即时过滤
- 📂 **15大分类导航**：点击快速跳转
- 📈 **上市公司信息**：股票代码 + 最新市值
- 📱 **响应式布局**：手机/平板/电脑完美适配
- ⬆️ **回到顶部按钮**：滚动自动出现

---

*数据持续更新中 | 最后更新：2026年6月*

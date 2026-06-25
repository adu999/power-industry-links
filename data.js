const industryData = [
    // --- 1. 监管机构 ---
    {
        category: "regulators",
        title: "一、监管机构与政府主管",
        items: [
            { name: "国家能源局", abbr: "NEA", url: "https://www.nea.gov.cn/", desc: "电力行业最高主管部门" },
            { name: "国家发展和改革委员会", abbr: "NDRC", url: "https://www.ndrc.gov.cn/", desc: "宏观政策、电价核定" },
            { name: "国务院国有资产监督管理委员会", abbr: "SASAC", url: "https://www.sasac.gov.cn/", desc: "央企监管" },
            { name: "生态环境部", abbr: "MEE", url: "https://www.mee.gov.cn/", desc: "碳市场、环保政策" },
            { name: "国家统计局", abbr: "NBS", url: "https://www.stats.gov.cn/", desc: "电力运行统计数据" }
        ]
    },
    // --- 2. 电网企业（两网） ---
    {
        category: "grids",
        title: "二、电网企业（两网+蒙西）",
        items: [
            { name: "国家电网有限公司", abbr: "SGCC", url: "http://www.sgcc.com.cn/", desc: "全球最大公用事业企业，营收超3.8万亿", code: "SH600131", marketCap: "约2.1万亿" },
            { name: "中国南方电网有限责任公司", abbr: "CSG", url: "https://www.csg.cn/", desc: "南方五省区电网运营" },
            { name: "内蒙古电力（集团）有限责任公司", abbr: "IMP", url: "http://www.impc.com.cn/", desc: "蒙西电网，独立于两大电网" }
        ]
    },
    // --- 3. 发电集团（五大六小，按装机规模排序）---
    {
        category: "generators",
        title: "三、发电集团（五大六小，按装机规模排序）",
        items: [
            // 五大（按2026年装机容量排序）
            { name: "国家能源投资集团有限责任公司", abbr: "CHN Energy", url: "https://www.chnenergy.com.cn/", desc: "总装机超4亿千瓦，全球第一；火电、风电双冠，可再生能源占比超41%", code: "SH601088", marketCap: "约7800亿(中国神华)" },
            { name: "中国华能集团有限公司", abbr: "CHNG", url: "https://www.chng.com.cn/", desc: "总装机近3.1亿千瓦，全球第二；清洁能源占比超57%", code: "SH600011", marketCap: "约1800亿(华能国际)" },
            { name: "中国华电集团有限公司", abbr: "CHD", url: "http://www.chd.com.cn/", desc: "总装机约2.81亿千瓦，清洁能源占比持续提升", code: "SH600930", marketCap: "约2942亿(华电新能)" },
            { name: "国家电力投资集团有限公司", abbr: "SPIC", url: "https://www.spic.com.cn/", desc: "总装机约2.88亿千瓦，清洁能源占比74.23%，全球最大清洁能源企业", code: "SH600021", marketCap: "约1300亿(上海电力)" },
            { name: "中国大唐集团有限公司", abbr: "CDT", url: "http://www.china-cdt.com/", desc: "总装机超2.14亿千瓦，资产分布全国31省区", code: "HK0991", marketCap: "约1700亿(大唐发电)" },
            // 六小（按装机规模排序）
            { name: "中国长江三峡集团有限公司", abbr: "CTG", url: "https://www.ctg.com.cn/", desc: "总装机1.68亿千瓦，清洁能源占比96%；水电全球第一", code: "SH600900", marketCap: "约5800亿(长江电力)" },
            { name: "中国广核集团有限公司", abbr: "CGN", url: "http://www.cgnpc.com.cn/", desc: "在运核电机组30台，核电装机3424.8万千瓦；控股风光储超4000万千瓦", code: "HK01816", marketCap: "约1200亿" },
            { name: "中国核工业集团有限公司", abbr: "CNNC", url: "https://www.cnnc.com.cn/", desc: "在运核电装机2621万千瓦，在建及核准待建2065万千瓦；新能源装机4157万千瓦", code: "SH601985", marketCap: "约1500亿(中国核电)" },
            { name: "华润电力控股有限公司", abbr: "CRP", url: "https://www.cr-power.com/", desc: "可再生能源权益装机44851兆瓦(占比50%)，运营205座风电场、174座光伏电站", code: "HK00836", marketCap: "约900亿" },
            { name: "中国节能环保集团有限公司", abbr: "CECEP", url: "http://www.cecep.cn/", desc: "光伏运营龙头之一，2026年在运+在建+拟建总规模力争超13.3GW", code: "SZ000591", marketCap: "约180亿(中节能太阳能)" },
            { name: "国投电力控股股份有限公司", abbr: "SDIC Power", url: "http://www.sdicpower.com/", desc: "已投产控股装机4719.56万千瓦，水电2130万千瓦(国内第三大水电上市公司)", code: "SH600886", marketCap: "约900亿" }
        ]
    },
    // --- 4. 核心上市公司（五大六小旗下，含装机与利润）---
    {
        category: "listed_companies",
        title: "四、核心上市公司（代码、市值、装机与利润）",
        items: [
            // 煤炭龙头
            { name: "中国神华", abbr: "神华", url: "https://www.csec.com/", desc: "2026Q1净利107亿(同比-10.7%)，商品煤产量8050万吨；电力装机超1亿千瓦", code: "SH601088", marketCap: "约7800亿" },
            // 水电龙头
            { name: "长江电力", abbr: "长电", url: "http://www.cypc.com.cn/", desc: "控股装机7170万千瓦(六库联调)，2026Q1归母净利约90亿，全球最大水电上市公司", code: "SH600900", marketCap: "约5800亿" },
            // 华能系
            { name: "华能国际", abbr: "华能国际", url: "https://www.hpi.com.cn/", desc: "可控装机15696MW，2026Q1新增1102MW；利润增长受益于煤价下行", code: "SH600011", marketCap: "约1800亿" },
            // 大唐系
            { name: "大唐发电", abbr: "大唐发电", url: "https://www.dtpower.com/", desc: "总装机8580万千瓦(煤电4873万+燃机948万+水电920万+风电1120万+光伏719万)", code: "SH601991", marketCap: "约1700亿" },
            // 华电系
            { name: "华电国际", abbr: "华电国际", url: "https://www.hdpi.com.cn/", desc: "华电集团核心上市平台，火电为主，新能源占比持续提升", code: "SH600027", marketCap: "约600亿" },
            { name: "华电新能源", abbr: "华电新能", url: "http://www.chdne.com.cn/", desc: "华电集团新能源唯一整合平台，2025年7月A股上市，首日涨125%", code: "SH600930", marketCap: "约2942亿" },
            // 国家电投系
            { name: "上海电力", abbr: "上海电力", url: "https://www.shdianli.com.cn/", desc: "国家电投华东区域核心平台，新能源占比超60%", code: "SH600021", marketCap: "约1300亿" },
            { name: "中国电力", abbr: "中国电力", url: "https://www.clp.com.cn/", desc: "国家电投港股上市平台，综合电力资产", code: "HK02380", marketCap: "约400亿" },
            // 国电系
            { name: "国电电力", abbr: "国电电力", url: "http://www.gdpower.com.cn/", desc: "国家能源集团核心上市平台，火电+新能源双轮驱动", code: "SH600795", marketCap: "约850亿" },
            // 龙源电力
            { name: "龙源电力", abbr: "龙源", url: "https://www.clypg.com.cn/", desc: "控股装机46274MW(风电32370MW+光伏13897MW)，全球最大风电运营商", code: "HK00916", marketCap: "约1500亿" },
            // 中节能
            { name: "中节能太阳能", abbr: "太阳能", url: "http://www.solar-energy.com.cn/", desc: "在运光伏约8.5GW，2026年1-4月新增588MW；在建+拟建超13.3GW", code: "SZ000591", marketCap: "约180亿" },
            // 桂冠电力
            { name: "桂冠电力", abbr: "桂冠电力", url: "https://www.ggep.com.cn/", desc: "总装机1263万千瓦(水电1023万+火电133万+风电77.5万+光伏30万)，清洁能源占比89.5%", code: "SH600236", marketCap: "约200亿" },
            // 华润电力
            { name: "华润电力", abbr: "华润电力", url: "https://www.cr-power.com/", desc: "2025年可再生能源权益装机44851MW(占比50%)，2026年计划新增风光545万千瓦", code: "HK00836", marketCap: "约900亿" }
        ]
    },
    // --- 5. 各省能源电力国企 ---
    {
        category: "provincial_soe",
        title: "五、各省能源电力国企",
        items: [
            { name: "京能集团", abbr: "京能", url: "http://www.powerbeijing.com/", desc: "北京最大能源国企，控股装机超2000万千瓦" },
            { name: "广东能源集团", abbr: "粤电", url: "https://www.geg.com.cn/", desc: "广东最大能源国企，控股装机超4000万千瓦" },
            { name: "浙能集团", abbr: "浙能", url: "http://www.zjenergy.com.cn/", desc: "浙江最大能源国企，控股装机超3000万千瓦" },
            { name: "江苏国信", abbr: "苏国信", url: "http://www.jsgx.net/", desc: "江苏省级能源投资平台，控股装机超2000万千瓦" },
            { name: "申能集团", abbr: "申能", url: "https://www.shenergy.com.cn/", desc: "上海最大能源国企，控股装机超1500万千瓦" },
            { name: "皖能集团", abbr: "皖能", url: "http://www.wenergy.com.cn/", desc: "安徽省级能源国企，控股装机超1000万千瓦" },
            { name: "赣能股份", abbr: "赣能", url: "http://www.gnfd.com.cn/", desc: "江西省属电力上市平台，控股装机超500万千瓦" },
            { name: "湖北能源", abbr: "鄂能", url: "http://www.hbny.com.cn/", desc: "湖北省级能源国企，控股装机超1000万千瓦" },
            { name: "湖南能源集团", abbr: "湘能", url: "https://www.hnnyjt.com/", desc: "湖南省级能源国企，控股装机超800万千瓦" },
            { name: "晋能控股", abbr: "晋能", url: "https://www.jnkgjtnews.com/", desc: "山西最大能源国企，煤电+新能源综合" },
            { name: "陕煤集团", abbr: "陕煤", url: "https://www.shccig.com/", desc: "陕西最大能源国企，煤炭产能超2亿吨/年" },
            { name: "山东能源集团", abbr: "山能", url: "https://www.snjt.com/", desc: "山东最大能源国企，控股装机超2000万千瓦" },
            { name: "河北建投", abbr: "冀建投", url: "https://www.hecic.com.cn/", desc: "河北省级能源投资平台，控股装机超1000万千瓦" },
            { name: "河南能源", abbr: "豫能", url: "http://www.hnecg.com/", desc: "河南省级能源国企，控股装机超1000万千瓦" },
            { name: "云南能投", abbr: "云能投", url: "https://www.cnyeig.com/", desc: "云南最大能源国企，控股装机超1500万千瓦" },
            { name: "贵州能源", abbr: "黔能", url: "https://www.gznyjt.com/", desc: "贵州省级能源国企，控股装机超1000万千瓦" },
            { name: "四川能投", abbr: "川能投", url: "https://www.scnyw.com/", desc: "四川省级能源国企，控股装机超800万千瓦" },
            { name: "重庆能源", abbr: "渝能", url: "https://www.cqny.cc/", desc: "重庆市级能源国企" },
            { name: "辽宁能源", abbr: "辽能", url: "http://www.lnny.cc/", desc: "辽宁省属能源国企" },
            { name: "吉电股份", abbr: "吉电", url: "http://www.jldl.com.cn/", desc: "吉林省属电力上市平台，国家电投旗下" },
            { name: "黑龙江辰能", abbr: "黑能", url: "http://www.hljcn.com/", desc: "黑龙江省属能源国企" },
            { name: "甘肃电投", abbr: "甘电投", url: "http://www.gsdt.com.cn/", desc: "甘肃省属能源国企，控股装机超500万千瓦" },
            { name: "青海能源", abbr: "青能", url: "http://www.qhnytz.com/", desc: "青海省属能源国企" },
            { name: "宁夏电力", abbr: "宁电", url: "http://www.nxdl.com.cn/", desc: "宁夏省属电力国企" },
            { name: "新疆能源", abbr: "新能", url: "http://www.xjnyjt.com/", desc: "新疆自治区属能源国企" },
            { name: "内蒙古能源集团", abbr: "蒙能", url: "http://www.nmgdl.com.cn/", desc: "内蒙古自治区属能源国企" },
            { name: "广西能源", abbr: "桂能", url: "http://www.gxdl.com.cn/", desc: "广西省级能源国企" },
            { name: "海南发展控股", abbr: "海控", url: "https://www.hnhdc.com.cn/", desc: "海南省级综合投资平台" },
            { name: "天津能源", abbr: "津能", url: "http://www.tjenergy.com.cn/", desc: "天津市级能源国企" },
            { name: "福建能源", abbr: "闽能", url: "https://www.fjenergy.com.cn/", desc: "福建省属能源国企" },
            { name: "西藏开发投资", abbr: "藏投", url: "http://www.xzkt.com.cn/", desc: "西藏省级能源投资平台" }
        ]
    },
    // --- 6. 各省能源局 ---
    {
        category: "provincial_energy_bureau",
        title: "六、各省能源局",
        items: [
            { name: "北京市发展和改革委员会（能源处）", url: "https://fgw.beijing.gov.cn/" },
            { name: "上海市发展和改革委员会（能源处）", url: "https://fgw.sh.gov.cn/" },
            { name: "天津市发展和改革委员会（能源处）", url: "https://fzgg.tj.gov.cn/" },
            { name: "重庆市能源局", url: "http://fzggw.cq.gov.cn/" },
            { name: "河北省能源局", url: "http://hbdrc.hebei.gov.cn/" },
            { name: "山西省能源局", url: "http://nyj.shanxi.gov.cn/" },
            { name: "辽宁省发展和改革委员会（能源处）", url: "https://www.ln.gov.cn/" },
            { name: "吉林省能源局", url: "http://nyj.jl.gov.cn/" },
            { name: "黑龙江省发展和改革委员会（能源处）", url: "https://drc.hlj.gov.cn/" },
            { name: "江苏省能源局", url: "http://fzggw.jiangsu.gov.cn/" },
            { name: "浙江省能源局", url: "http://fzggw.zj.gov.cn/" },
            { name: "安徽省能源局", url: "http://fzggw.ah.gov.cn/" },
            { name: "福建省发展和改革委员会（能源处）", url: "http://fgw.fujian.gov.cn/" },
            { name: "江西省能源局", url: "http://drc.jiangxi.gov.cn/" },
            { name: "山东省能源局", url: "http://nyj.shandong.gov.cn/" },
            { name: "河南省能源局", url: "http://fgw.henan.gov.cn/" },
            { name: "湖北省能源局", url: "http://fzggw.hubei.gov.cn/" },
            { name: "湖南省能源局", url: "http://fgw.hunan.gov.cn/" },
            { name: "广东省能源局", url: "http://drc.gd.gov.cn/" },
            { name: "海南省发展和改革委员会（能源处）", url: "https://plan.hainan.gov.cn/" },
            { name: "四川省能源局", url: "http://fgw.sc.gov.cn/" },
            { name: "贵州省能源局", url: "http://nyj.guizhou.gov.cn/" },
            { name: "云南省能源局", url: "http://nyj.yn.gov.cn/" },
            { name: "陕西省能源局", url: "http://sndrc.shaanxi.gov.cn/" },
            { name: "甘肃省能源局", url: "http://fzgg.gansu.gov.cn/" },
            { name: "青海省能源局", url: "http://fzggw.qinghai.gov.cn/" },
            { name: "内蒙古自治区能源局", url: "http://nyj.nmg.gov.cn/" },
            { name: "广西壮族自治区能源局", url: "http://fgw.gxzf.cn/" },
            { name: "西藏自治区能源局", url: "http://drc.xizang.gov.cn/" },
            { name: "宁夏回族自治区能源局", url: "http://fzggw.nx.gov.cn/" },
            { name: "新疆维吾尔自治区能源局", url: "http://xjdrc.xinjiang.gov.cn/" }
        ]
    },
    // --- 7. 电力交易中心 ---
    {
        category: "trading_centers",
        title: "七、电力交易中心",
        items: [
            { name: "北京电力交易中心", url: "https://pmos.bj.sgcc.com.cn/" },
            { name: "广州电力交易中心（南方区域）", url: "https://www.gzpec.cn/" },
            { name: "山西电力交易中心", url: "https://pmos.sx.sgcc.com.cn/" },
            { name: "山东电力交易中心", url: "https://pmos.sd.sgcc.com.cn/" },
            { name: "江苏电力交易中心", url: "https://pmos.js.sgcc.com.cn/" },
            { name: "浙江电力交易中心", url: "https://pmos.zj.sgcc.com.cn/" },
            { name: "安徽电力交易中心", url: "https://pmos.ah.sgcc.com.cn/" },
            { name: "福建电力交易中心", url: "https://pmos.fj.sgcc.com.cn/" },
            { name: "湖北电力交易中心", url: "https://pmos.hb.sgcc.com.cn/" },
            { name: "湖南电力交易中心", url: "https://pmos.hn.sgcc.com.cn/" },
            { name: "河南电力交易中心", url: "https://pmos.ha.sgcc.com.cn/" },
            { name: "四川电力交易中心", url: "https://pmos.sc.sgcc.com.cn/" },
            { name: "重庆电力交易中心", url: "https://pmos.cq.sgcc.com.cn/" },
            { name: "辽宁电力交易中心", url: "https://pmos.ln.sgcc.com.cn/" },
            { name: "吉林电力交易中心", url: "https://pmos.jl.sgcc.com.cn/" },
            { name: "黑龙江电力交易中心", url: "https://pmos.hl.sgcc.com.cn/" },
            { name: "蒙东电力交易中心", url: "https://pmos.md.sgcc.com.cn/" },
            { name: "蒙西电力交易中心", url: "https://www.imptc.com/" },
            { name: "陕西电力交易中心", url: "https://pmos.sn.sgcc.com.cn/" },
            { name: "甘肃电力交易中心", url: "https://pmos.gs.sgcc.com.cn/" },
            { name: "青海电力交易中心", url: "https://pmos.qh.sgcc.com.cn/" },
            { name: "宁夏电力交易中心", url: "https://pmos.nx.sgcc.com.cn/" },
            { name: "新疆电力交易中心", url: "https://pmos.xj.sgcc.com.cn/" },
            { name: "广东电力交易中心", url: "https://pm.gd.csg.cn/" },
            { name: "广西电力交易中心", url: "https://pm.gx.csg.cn/" },
            { name: "云南电力交易中心", url: "https://pm.yn.csg.cn/" },
            { name: "贵州电力交易中心", url: "https://pm.gz.csg.cn/" },
            { name: "海南电力交易中心", url: "https://pm.hn.csg.cn/" }
        ]
    },
    // --- 8. 设计院与施工单位 ---
    {
        category: "design_construction",
        title: "八、设计院与施工单位",
        items: [
            { name: "中国电力建设集团有限公司", abbr: "PowerChina", url: "https://www.powerchina.cn/", desc: "全球水利水电建设巨头" },
            { name: "中国能源建设集团有限公司", abbr: "Energy China", url: "https://www.ceec.net.cn/", desc: "电力规划设计与施工" },
            { name: "中国电力工程顾问集团", abbr: "CPECC", url: "https://www.cpecc.net/", desc: "电力规划设计总院体系" },
            { name: "中国水电建设集团", abbr: "Sinohydro", url: "https://www.sinohydro.com/", desc: "水电施工" },
            { name: "中国葛洲坝集团", abbr: "CGGC", url: "http://www.cggc.cn/", desc: "大型基础设施投资建设" },
            { name: "水利部水利水电规划设计总院", abbr: "水规总院", url: "https://www.giwp.org.cn/", desc: "国家水利水电规划最高咨询机构" },
            { name: "电力规划设计总院", abbr: "电规总院", url: "https://www.eppei.com/", desc: "国家能源电力规划研究国家队" },
            { name: "华东勘测设计研究院", abbr: "HDEC", url: "https://www.hdec.com/", desc: "抽水蓄能与新能源" },
            { name: "西北勘测设计研究院", abbr: "NWSD", url: "https://www.nwsu.com.cn/", desc: "西北区域勘测设计" },
            { name: "中南勘测设计研究院", abbr: "CIDP", url: "https://www.msdi.cn/", desc: "中南区域勘测设计" },
            { name: "广东省电力设计研究院", abbr: "GEDI", url: "https://www.gedi.com.cn/", desc: "南方电网旗下设计龙头" }
        ]
    },
    // --- 9. 设备供应商（风光水火储）---
    {
        category: "equipment_manufacturers",
        title: "九、风光水火储上游设备供应商",
        items: [
            // 风电整机
            { name: "金风科技", abbr: "Goldwind", url: "https://www.goldwind.com.cn/", desc: "风电整机龙头", code: "SZ002202", marketCap: "约400亿" },
            { name: "远景能源", abbr: "Envision", url: "https://www.envision-group.com/", desc: "智慧风电与储能" },
            { name: "明阳智能", abbr: "MySE", url: "https://www.my-se.com.cn/", desc: "海上风电龙头", code: "SH601615", marketCap: "约250亿" },
            { name: "运达股份", abbr: "Windey", url: "https://www.chinawindey.com/", desc: "风电整机", code: "SZ300772", marketCap: "约80亿" },
            { name: "电气风电", abbr: "SEWP", url: "https://www.aerogenerator.com.cn/", desc: "上海电气旗下风电", code: "SH688660", marketCap: "约100亿" },
            // 光伏制造
            { name: "隆基绿能", abbr: "LONGi", url: "https://www.longi.com/", desc: "光伏硅片与组件", code: "SH601012", marketCap: "约1500亿" },
            { name: "通威股份", abbr: "Tongwei", url: "https://www.tongwei.com.cn/", desc: "硅料与电池片", code: "SH600438", marketCap: "约1100亿" },
            { name: "晶科能源", abbr: "Jinko", url: "https://www.jinkosolar.com/", desc: "光伏组件", code: "SH688223", marketCap: "约700亿" },
            { name: "天合光能", abbr: "Trina", url: "https://www.trinasolar.com/", desc: "光伏组件与跟踪支架", code: "SH688599", marketCap: "约500亿" },
            { name: "TCL中环", abbr: "Zhonghuan", url: "https://www.tjsemi.com/", desc: "光伏硅片", code: "SZ002129", marketCap: "约600亿" },
            // 逆变器与变流器
            { name: "华为数字能源", abbr: "Huawei Digital Power", url: "https://digitalpower.huawei.com/", desc: "全球逆变器龙头" },
            { name: "阳光电源", abbr: "Sungrow", url: "https://www.sungrowpower.com/", desc: "光伏逆变器与储能", code: "SZ300274", marketCap: "约1600亿" },
            { name: "锦浪科技", abbr: "Ginlong", url: "https://www.ginlong.com/", desc: "组串式逆变器", code: "SZ300763", marketCap: "约200亿" },
            { name: "固德威", abbr: "GoodWe", url: "https://www.goodwe.com/", desc: "光伏逆变器", code: "SH688390", marketCap: "约150亿" },
            // 变压器与高压设备（含GIS）
            { name: "特变电工", abbr: "TBEA", url: "https://www.tbea.com.cn/", desc: "变压器与输变电设备", code: "SH600089", marketCap: "约750亿" },
            { name: "正泰电器", abbr: "CHINT", url: "https://www.chint.com/", desc: "低压电器与户用光伏", code: "SH601877", marketCap: "约500亿" },
            { name: "中国西电", abbr: "XD", url: "http://www.c-x-d.com/", desc: "高压开关与变压器", code: "SH601179", marketCap: "约350亿" },
            { name: "思源电气", abbr: "Sieyuan", url: "https://www.sieyuan.com/", desc: "GIS与输配电设备", code: "SZ002028", marketCap: "约450亿" },
            { name: "平高电气", abbr: "Pinggao", url: "http://www.pg.com.cn/", desc: "高压开关/GIS", code: "SH600312", marketCap: "约150亿" },
            { name: "许继电气", abbr: "XJ Electric", url: "http://www.xjgc.com/", desc: "继电保护与智能电网", code: "SZ000400", marketCap: "约200亿" },
            // 储能电芯与系统
            { name: "宁德时代", abbr: "CATL", url: "https://www.catl.com/", desc: "储能电芯龙头", code: "SZ300750", marketCap: "约9000亿" },
            { name: "比亚迪电子", abbr: "BYD", url: "https://www.byd.com/", desc: "储能系统与电池", code: "SZ002594", marketCap: "约7000亿" },
            { name: "亿纬锂能", abbr: "EVE", url: "https://www.evebattery.com/", desc: "储能电芯", code: "SZ300014", marketCap: "约900亿" },
            { name: "大连融科储能", abbr: "RKP", url: "http://www.rongkepower.com/", desc: "全钒液流电池龙头，全球最大全钒液流电池产业链" },
            { name: "海博思创", abbr: "HyperStrong", url: "https://www.hyperstrong.com.cn/", desc: "储能系统解决方案供应商，科创板上市", code: "SH688411", marketCap: "约300亿" }
        ]
    },
    // --- 10. 行业协会 ---
    {
        category: "industry_associations",
        title: "十、行业协会",
        items: [
            { name: "中国电力企业联合会", abbr: "CEC", url: "https://www.cec.org.cn/", desc: "电力行业权威协会" },
            { name: "中国核能行业协会", abbr: "CNEA", url: "https://www.china-nea.com/", desc: "核能行业自律组织" },
            { name: "中国煤炭工业协会", abbr: "CCTA", url: "https://www.coalchina.org.cn/", desc: "煤炭行业权威协会" },
            { name: "中国可再生能源学会", abbr: "CRES", url: "https://www.cres.org.cn/", desc: "可再生能源学术组织" },
            { name: "中国光伏行业协会", abbr: "CPIA", url: "https://www.chinapv.org.cn/", desc: "光伏行业权威协会" },
            { name: "中国风能协会", abbr: "CWEA", url: "https://www.cwea.org.cn/", desc: "风能行业权威协会" },
            { name: "中国电力规划设计协会", abbr: "CEPPEA", url: "https://www.ceppea.org.cn/", desc: "电力设计行业自律组织" }
        ]
    },
    // --- 11. 科研院所与高校 ---
    {
        category: "research_institutes",
        title: "十一、科研院所与高校",
        items: [
            { name: "怀柔实验室", abbr: "HRL", url: "https://www.hrl.ac.cn/", desc: "国家级能源实验室" },
            { name: "中国电力科学研究院", abbr: "EPRI", url: "http://www.epri.sgcc.com.cn/", desc: "国家电网直属科研" },
            { name: "西安热工研究院", abbr: "TPRI", url: "https://www.tpri.com.cn/", desc: "清洁煤电与火电技术" },
            { name: "南网科学研究院", abbr: "CSGRI", url: "https://www.csg.cn/ri/", desc: "南方电网直属科研" },
            { name: "厦门大学中国能源政策研究院", abbr: "XMU CEPP", url: "https://cepp.xmu.edu.cn/", desc: "能源政策研究" },
            { name: "清华四川能源互联网研究院", abbr: "THU EEI", url: "https://www.tsinghua-eei.org.cn/", desc: "能源互联网研究" },
            { name: "华北电力大学", abbr: "NCEPU", url: "https://www.ncepu.edu.cn/", desc: "电力黄埔军校" },
            { name: "长沙理工大学", abbr: "CSUST", url: "https://www.csust.edu.cn/", desc: "原长沙电力学院" },
            { name: "上海电力大学", abbr: "SHIEPU", url: "https://www.shiep.edu.cn/", desc: "原上海电力学院" },
            { name: "东北电力大学", abbr: "NEEPU", url: "https://www.neepu.edu.cn/", desc: "原吉林电力学院" },
            { name: "三峡大学", abbr: "CTGU", url: "https://www.ctgu.edu.cn/", desc: "原葛洲坝水电工程学院" },
            { name: "南京工程学院", abbr: "NJIT", url: "https://www.njit.edu.cn/", desc: "原南京电力高专" },
            { name: "保定电力职业技术学院", abbr: "保定电校", url: "https://www.bdcec.com/", desc: "华北电力专科名校" },
            { name: "武汉电力职业技术学院", abbr: "武汉电院", url: "https://www.whetc.com/", desc: "华中电力专科名校" },
            { name: "郑州电力高等专科学校", abbr: "郑州电专", url: "https://www.zepc.edu.cn/", desc: "河南电力专科名校" },
            { name: "西安电力高等专科学校", abbr: "西安电专", url: "https://www.xaepi.edu.cn/", desc: "西北电力专科名校" },
            { name: "山东电力高等专科学校", abbr: "山东电专", url: "https://www.sepc.edu.cn/", desc: "山东电力专科名校" },
            { name: "重庆电力高等专科学校", abbr: "重庆电专", url: "https://www.cqepc.com.cn/", desc: "西南电力专科名校" },
            { name: "哈尔滨电力职业技术学院", abbr: "哈电院", url: "https://www.hdlgc.com/", desc: "黑龙江电力专科名校" },
            { name: "沈阳工程学院", abbr: "沈工程", url: "https://www.sie.edu.cn/", desc: "原沈阳电力高专" },
            { name: "福建电力职业技术学院", abbr: "福建电院", url: "https://www.fjdlzy.com/", desc: "福建电力专科名校" },
            { name: "广西电力职业技术学院", abbr: "广西电院", url: "https://www.gxdldz.com/", desc: "广西电力专科名校" },
            { name: "江西电力职业技术学院", abbr: "江西电院", url: "https://www.jxdlxy.net/", desc: "江西电力专科名校" }
        ]
    },
    // --- 12. 碳交易、绿证与市场数据 ---
    {
        category: "market_data",
        title: "十二、碳交易、绿证与市场数据",
        items: [
            { name: "全国碳市场信息网", url: "https://www.cets.org.cn/", desc: "碳排放权注册登记与交易" },
            { name: "中国绿色电力证书交易平台", url: "https://www.greenenergy.org.cn/", desc: "绿证核发与交易" },
            { name: "中国煤炭市场网", url: "https://www.cctd.com.cn/", desc: "煤炭价格指数" },
            { name: "中国电力企业联合会", url: "https://www.cec.org.cn/", desc: "行业统计与发布" },
            { name: "国家统计局", url: "https://www.stats.gov.cn/", desc: "电力运行统计数据" }
        ]
    },
    // --- 13. 行业媒体 ---
    {
        category: "media",
        title: "十三、行业官方媒体、民营媒体及自媒体",
        items: [
            { name: "中国电力报", abbr: "中电传媒", url: "https://www.cpnn.com.cn/", desc: "国家能源局指导的行业权威媒体" },
            { name: "国家电网报", abbr: "国网传媒", url: "http://www.sgcc.com.cn/", desc: "国家电网旗下媒体矩阵" },
            { name: "南方电网报", abbr: "南网传媒", url: "https://www.csg.cn/", desc: "南方电网旗下媒体矩阵" },
            { name: "北极星电力网", abbr: "北极星", url: "https://news.bjx.com.cn/", desc: "行业资讯与招聘" },
            { name: "能见", abbr: "Eknower", url: "https://www.nengjian.com/", desc: "深度能源报道" },
            { name: "财新", abbr: "财新", url: "https://www.caixin.com/", desc: "市场化深度能源报道" },
            { name: "能源杂志", abbr: "能源", url: "http://www.cnenergy.org/", desc: "能源行业深度报道" },
            { name: "光伏们", abbr: "光伏们", url: "https://www.pvmen.com/", desc: "光伏行业自媒体" },
            { name: "风电之音", abbr: "风电之音", url: "https://www.windnews.cn/", desc: "风电行业自媒体" }
        ]
    },
    // --- 14. 采购平台与招聘平台 ---
    {
        category: "procurement_hr",
        title: "十四、采购平台与招聘平台",
        items: [
            // 两网采购
            { name: "国家电网电子商务平台", abbr: "国网ECP", url: "https://ecp.sgcc.com.cn/", desc: "国网招标采购" },
            { name: "南方电网供应链统一服务平台", abbr: "南网供应链", url: "https://www.bidding.csg.cn/", desc: "南网招标采购" },
            // 五大六小采购
            { name: "中国电力建设集团采购平台", abbr: "中电建采购", url: "https://www.powerchina.cn/bid/", desc: "中电建招标采购" },
            { name: "中国能源建设集团采购平台", abbr: "中能建采购", url: "https://www.ceec.net.cn/bid/", desc: "中能建招标采购" },
            { name: "华能集团招标采购平台", abbr: "华能采购", url: "https://www.chng.com.cn/", desc: "华能集团官网→招投标入口" },
            { name: "国家电投招标采购平台", abbr: "国电投采购", url: "https://www.spic.com.cn/", desc: "国家电投官网→招标采购" },
            { name: "华电集团招标采购平台", abbr: "华电采购", url: "http://www.chd.com.cn/", desc: "华电集团官网→招标采购" },
            { name: "大唐集团招标采购平台", abbr: "大唐采购", url: "http://www.china-cdt.com/", desc: "大唐集团官网→招标采购" },
            { name: "国家能源集团招标采购平台", abbr: "国能采购", url: "https://www.chnenergy.com.cn/", desc: "国家能源集团官网→招投标" },
            // 招聘平台
            { name: "国聘网", abbr: "国聘", url: "https://www.gjzph.cn/", desc: "央企招聘官方平台" },
            { name: "中国电力人才网", abbr: "电力人才", url: "https://www.chinapowerjob.com/", desc: "电力行业招聘" },
            { name: "国务院国资委", abbr: "SASAC", url: "https://www.sasac.gov.cn/", desc: "央企监管与招聘信息" }
        ]
    },
    // --- 15. 售电公司 ---
    {
        category: "retailers",
        title: "十五、售电公司",
        items: [
            // 发电集团系
            { name: "华能售电", abbr: "华能售电", url: "https://hnsd.chng.com.cn/", desc: "华能集团旗下售电平台" },
            { name: "华润售电云平台", abbr: "华润售电", url: "https://www.crplx.com/office/", desc: "华润电力旗下，25家省级售电公司" },
            // 省能源国企系
            { name: "广东粤电电力销售有限公司", abbr: "粤电售电", url: "https://www.geg.com.cn/", desc: "广东能源集团旗下，广东首批售电SD01" },
            { name: "甘肃电投陇原电力有限公司", abbr: "陇原电力", url: "http://ly.gepic.cn", desc: "甘肃电投旗下，智慧购售电管理平台" },
            { name: "湖南湘投售电有限公司", abbr: "湘投售电", url: "http://hnxtsd.com", desc: "湖南能源集团旗下" },
            { name: "四川川投售电有限责任公司", abbr: "川投售电", url: "http://www.scctsd.com.cn", desc: "川投集团旗下" },
            { name: "陕西能源售电有限责任公司", abbr: "陕能售电", url: "http://www.segcsd.com", desc: "陕投集团旗下" },
            // 独立 / 民营头部
            { name: "深圳市深国电售电有限公司", abbr: "深国电", url: "http://www.sgdpower.cn/", desc: "深圳国资系，光储充售一体化" },
            { name: "鹏峰售电有限公司", abbr: "鹏峰售电", url: "https://pf.sscgeg.com/", desc: "湾区→全国布局，虚拟电厂" },
            { name: "广东新巨能能源科技有限公司", abbr: "新巨能", url: "https://www.szhangan.net/", desc: "三峡水利核心成员，广东售电SD123" }
        ]
    }
];

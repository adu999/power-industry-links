// ===== 电力产业链全景数据 =====
const DATA = [
  // ==================== 一、监管机构 ====================
  {
    category: "regulator",
    section: "一、监管机构与政府部门",
    items: [
      { name: "国家能源局", abbr: "NEA", url: "https://www.nea.gov.cn/", desc: "电力行业主管部门" },
      { name: "国家发展和改革委员会", abbr: "NDRC", url: "https://www.ndrc.gov.cn/", desc: "宏观经济与能源价格管理" },
      { name: "国务院国有资产监督管理委员会", abbr: "SASAC", url: "https://www.sasac.gov.cn/", desc: "央企监管" },
      { name: "生态环境部", abbr: "MEE", url: "https://www.mee.gov.cn/", desc: "碳市场政策与减排管理" },
      { name: "国家统计局", abbr: "NBS", url: "https://www.stats.gov.cn/", desc: "能源电力统计口径" },
      { name: "自然资源部", abbr: "MNR", url: "https://www.mnr.gov.cn/", desc: "矿产资源管理" },
      { name: "应急管理部", abbr: "MEM", url: "https://www.mem.gov.cn/", desc: "安全生产监管" },
      { name: "国家矿山安全监察局", abbr: "NMSA", url: "https://www.chinamine-safety.gov.cn/", desc: "矿山安全监察" },
    ]
  },

  // ==================== 二、两网 ====================
  {
    category: "grid",
    section: "二、两网（国家电网 & 南方电网）",
    subsections: [
      {
        subtitle: "国家电网",
        items: [
          { name: "国家电网有限公司", abbr: "SGCC", url: "http://www.sgcc.com.cn/", desc: "全球最大公用事业企业", orgStructure: "总部→27家省级电力公司→市县供电公司" },
          { name: "国网北京市电力公司", abbr: "", url: "https://www.bj.sgcc.com.cn/", desc: "国网北京" },
          { name: "国网天津市电力公司", abbr: "", url: "https://www.tj.sgcc.com.cn/", desc: "国网天津" },
          { name: "国网河北省电力有限公司", abbr: "", url: "https://www.he.sgcc.com.cn/", desc: "国网河北" },
          { name: "国网冀北电力有限公司", abbr: "", url: "https://www.jibei.sgcc.com.cn/", desc: "国网冀北（唐山/秦皇岛/承德/张家口/廊坊）" },
          { name: "国网山西省电力公司", abbr: "", url: "https://www.sx.sgcc.com.cn/", desc: "国网山西" },
          { name: "国网山东省电力公司", abbr: "", url: "https://www.sd.sgcc.com.cn/", desc: "国网山东" },
          { name: "国网上海市电力公司", abbr: "", url: "https://www.sh.sgcc.com.cn/", desc: "国网上海" },
          { name: "国网江苏省电力有限公司", abbr: "", url: "https://www.js.sgcc.com.cn/", desc: "国网江苏" },
          { name: "国网浙江省电力有限公司", abbr: "", url: "https://www.zj.sgcc.com.cn/", desc: "国网浙江" },
          { name: "国网安徽省电力有限公司", abbr: "", url: "https://www.ah.sgcc.com.cn/", desc: "国网安徽" },
          { name: "国网福建省电力有限公司", abbr: "", url: "https://www.fj.sgcc.com.cn/", desc: "国网福建" },
          { name: "国网湖北省电力有限公司", abbr: "", url: "https://www.hb.sgcc.com.cn/", desc: "国网湖北" },
          { name: "国网湖南省电力有限公司", abbr: "", url: "https://www.hn.sgcc.com.cn/", desc: "国网湖南" },
          { name: "国网河南省电力有限公司", abbr: "", url: "https://www.ha.sgcc.com.cn/", desc: "国网河南" },
          { name: "国网江西省电力有限公司", abbr: "", url: "https://www.jx.sgcc.com.cn/", desc: "国网江西" },
          { name: "国网四川省电力有限公司", abbr: "", url: "https://www.sc.sgcc.com.cn/", desc: "国网四川" },
          { name: "国网重庆市电力有限公司", abbr: "", url: "https://www.cq.sgcc.com.cn/", desc: "国网重庆" },
          { name: "国网辽宁省电力有限公司", abbr: "", url: "https://www.ln.sgcc.com.cn/", desc: "国网辽宁" },
          { name: "国网吉林省电力有限公司", abbr: "", url: "https://www.jl.sgcc.com.cn/", desc: "国网吉林" },
          { name: "国网黑龙江省电力有限公司", abbr: "", url: "https://www.hl.sgcc.com.cn/", desc: "国网黑龙江" },
          { name: "国网内蒙古东部电力有限公司", abbr: "", url: "https://www.ml.sgcc.com.cn/", desc: "国网蒙东" },
          { name: "国网陕西省电力有限公司", abbr: "", url: "https://www.sn.sgcc.com.cn/", desc: "国网陕西" },
          { name: "国网甘肃省电力公司", abbr: "", url: "https://www.gs.sgcc.com.cn/", desc: "国网甘肃" },
          { name: "国网青海省电力公司", abbr: "", url: "https://www.qh.sgcc.com.cn/", desc: "国网青海" },
          { name: "国网宁夏电力有限公司", abbr: "", url: "https://www.nx.sgcc.com.cn/", desc: "国网宁夏" },
          { name: "国网新疆电力有限公司", abbr: "", url: "https://www.xj.sgcc.com.cn/", desc: "国网新疆" },
          { name: "国网西藏电力有限公司", abbr: "", url: "https://www.xz.sgcc.com.cn/", desc: "国网西藏" },
          { name: "国网国际发展有限公司", abbr: "", url: "https://www.sgiholding.com/", desc: "国网海外投资平台" },
          { name: "国网电子商务有限公司", abbr: "国网电商", url: "https://www.esgcc.com.cn/", desc: "国网旗下电商/采购平台" },
        ]
      },
      {
        subtitle: "南方电网",
        items: [
          { name: "中国南方电网有限责任公司", abbr: "CSG", url: "https://csg.cn/", desc: "南方五省区电网运营", orgStructure: "总部→广东/广西/云南/贵州/海南电网公司" },
          { name: "广东电网有限责任公司", abbr: "", url: "https://www.gd.csg.cn/", desc: "南网广东" },
          { name: "广西电网有限责任公司", abbr: "", url: "https://www.gx.csg.cn/", desc: "南网广西" },
          { name: "云南电网有限责任公司", abbr: "", url: "https://www.yn.csg.cn/", desc: "南网云南" },
          { name: "贵州电网有限责任公司", abbr: "", url: "https://www.gz.csg.cn/", desc: "南网贵州" },
          { name: "海南电网有限责任公司", abbr: "", url: "https://www.hn.csg.cn/", desc: "南网海南" },
          { name: "南方电网数字电网研究院", abbr: "", url: "https://www.digitalgrid.com.cn/", desc: "南网数字化技术支撑" },
          { name: "南方电网能源发展研究院", abbr: "", url: "https://www.csg.cn/", desc: "南网能源战略研究（入口在南网主站）" },
        ]
      }
    ]
  },

  // ==================== 三、五大六小 ====================
  {
    category: "power-group",
    section: "三、五大六小发电集团及上市公司",
    subsections: [
      {
        subtitle: "五大发电集团",
        items: [
          { name: "中国华能集团有限公司", abbr: "CHNG", url: "https://www.chng.com.cn/", desc: "五大之首，火电+新能源", orgStructure: "总部→区域分公司/子公司→基层电厂" },
          { name: "华能国际电力股份有限公司", abbr: "华能国际", url: "https://www.hpi.com.cn/", code: "SH600011 / HK00902", marketCap: "约1200亿人民币", desc: "华能旗下核心上市平台" },
          { name: "华能水电", abbr: "", url: "http://www.hnlcj.cn/", code: "SH600025", marketCap: "约1500亿人民币", desc: "澜沧江流域水电开发" },
          { name: "中国大唐集团有限公司", abbr: "CDT", url: "http://www.china-cdt.com/", desc: "五大之一，火电+新能源", orgStructure: "总部→分子公司→基层企业" },
          { name: "大唐国际发电股份有限公司", abbr: "大唐发电", url: "http://www.dtpower.com/", code: "SH601991 / HK00991", marketCap: "约500亿人民币", desc: "大唐核心上市平台" },
          { name: "中国华电集团有限公司", abbr: "CHD", url: "http://www.chd.com.cn/", desc: "五大之一，燃气+煤电+新能源", orgStructure: "总部→区域公司→基层企业" },
          { name: "华电国际电力股份有限公司", abbr: "华电国际", url: "https://www.hdpi.com.cn/", code: "SH600027 / HK01071", marketCap: "约400亿人民币", desc: "华电核心上市平台" },
          { name: "国家电力投资集团有限公司", abbr: "SPIC", url: "https://www.spic.com.cn/", desc: "五大之一，核电+新能源", orgStructure: "总部→二级单位→基层企业" },
          { name: "中国电力国际发展有限公司", abbr: "中国电力", url: "https://www.chinapower.hk/", code: "HK02380", marketCap: "约300亿港币", desc: "国家电投核心港股上市平台" },
          { name: "上海电力股份有限公司", abbr: "上海电力", url: "http://www.shanghai-electric-power.com/", code: "SH600021", marketCap: "约300亿人民币", desc: "国家电投旗下上市平台" },
          { name: "国家能源集团", abbr: "CHN Energy", url: "https://www.chnenergy.com.cn/", desc: "全球最大煤炭+电力一体化企业", orgStructure: "总部→子分公司→基层企业" },
          { name: "国电电力发展股份有限公司", abbr: "国电电力", url: "https://www.gdpl.com.cn/", code: "SH600795", marketCap: "约800亿人民币", desc: "国家能源集团核心上市平台" },
          { name: "龙源电力集团股份有限公司", abbr: "龙源电力", url: "https://www.clypg.com.cn/", code: "HK00916 / SZ301298", marketCap: "约500亿人民币", desc: "全球最大风电运营商，国家能源集团控股" },
        ]
      },
      {
        subtitle: "六小发电集团",
        items: [
          { name: "中国长江三峡集团有限公司", abbr: "CTG", url: "https://www.ctg.com.cn/", desc: "全球最大水电开发运营企业", orgStructure: "总部→流域公司→基层单位" },
          { name: "中国长江电力股份有限公司", abbr: "长江电力", url: "https://www.cypc.com.cn/", code: "SH600900", marketCap: "约5800亿人民币", desc: "全球最大水电上市公司（三峡/葛洲坝/溪洛渡/向家坝）" },
          { name: "华润电力控股有限公司", abbr: "华润电力", url: "https://www.cr-power.com/", code: "HK00836", marketCap: "约800亿港币", desc: "华润集团旗下综合能源旗舰" },
          { name: "中国广核集团有限公司", abbr: "CGN", url: "http://www.cgnpc.com.cn/", desc: "核电+新能源", orgStructure: "总部→二级公司→基层企业" },
          { name: "中国广核电力股份有限公司", abbr: "中广核电力", url: "https://www.cgnp.com.cn/", code: "HK01816 / SZ003816", marketCap: "约1200亿人民币", desc: "中广核核心核电上市平台" },
          { name: "中国核工业集团有限公司", abbr: "CNNC", url: "https://www.cnnc.com.cn/", desc: "核工业全产业链", orgStructure: "总部→专业化公司→成员单位" },
          { name: "中国核能电力股份有限公司", abbr: "中国核电", url: "https://www.cnnp.com.cn/", code: "SH601985", marketCap: "约1200亿人民币", desc: "中核旗下核电运营上市平台" },
          { name: "中节能太阳能股份有限公司", abbr: "太阳能", url: "https://www.cecste.com/", code: "SZ000591", marketCap: "约200亿人民币", desc: "中节能集团旗下光伏运营上市平台" },
          { name: "国投电力控股股份有限公司", abbr: "国投电力", url: "https://www.sdicpower.com/", code: "SH600886", marketCap: "约800亿人民币", desc: "国投集团旗下电力上市平台" },
        ]
      },
      {
        subtitle: "其他重要电力央企/国企",
        items: [
          { name: "中国电力建设集团有限公司", abbr: "PowerChina", url: "https://www.powerchina.cn/", desc: "全球最大电力建设/EPC企业", orgStructure: "总部→子企业→工程项目部" },
          { name: "中国能源建设集团有限公司", abbr: "CEEC", url: "https://www.ceec.net.cn/", desc: "电力勘测设计/施工/装备制造", orgStructure: "总部→子企业→工程项目部" },
          { name: "中国节能环保集团有限公司", abbr: "CECEP", url: "https://www.cecep.cn/", desc: "节能环保/新能源" },
          { name: "华润集团", abbr: "华润", url: "https://www.crc.com.hk/", desc: "综合央企，华润电力为能源板块" },
        ]
      }
    ]
  },

  // ==================== 四、各省能源电力国企 ====================
  {
    category: "province-energy",
    section: "四、各省（市/区）能源电力国企",
    subsections: [
      {
        subtitle: "华北地区",
        items: [
          { name: "北京能源集团有限责任公司", abbr: "京能集团", url: "http://www.powerbeijing.com/", desc: "北京综合能源国企" },
          { name: "北京京能电力股份有限公司", abbr: "京能电力", url: "http://www.jnrd.com.cn/", code: "SH600578", marketCap: "约300亿人民币", desc: "京能集团旗下上市平台" },
          { name: "天津能源投资集团有限公司", abbr: "天津能源", url: "https://www.tjenergy.com.cn/", desc: "天津综合能源国企" },
          { name: "河北省建投能源投资股份有限公司", abbr: "建投能源", url: "http://www.jtny.com.cn/", code: "SZ000600", marketCap: "约150亿人民币", desc: "河北建投旗下能源上市平台" },
          { name: "山西国际能源集团有限公司", abbr: "山西国际能源", url: "https://www.sxiec.com/", desc: "山西省属能源国企" },
          { name: "晋能控股集团有限公司", abbr: "晋能控股", url: "https://www.jnkgjt.com/", desc: "山西煤炭/电力综合集团" },
          { name: "内蒙古能源集团有限公司", abbr: "蒙能集团", url: "https://www.mnmyjt.com/", desc: "内蒙古自治区属能源国企" },
        ]
      },
      {
        subtitle: "东北地区",
        items: [
          { name: "辽宁省能源产业控股集团有限责任公司", abbr: "辽宁能源", url: "https://www.lnenergy.com.cn/", desc: "辽宁省属能源国企" },
          { name: "吉林电力股份有限公司", abbr: "吉电股份", url: "https://www.jldl.com.cn/", code: "SZ000875", marketCap: "约150亿人民币", desc: "国家电投在吉林的上市平台" },
          { name: "黑龙江省新产业投资集团有限公司", abbr: "黑龙江新产投", url: "https://www.hljxtc.com/", desc: "黑龙江省属能源投资平台" },
        ]
      },
      {
        subtitle: "华东地区",
        items: [
          { name: "浙江省能源集团有限公司", abbr: "浙能集团", url: "http://www.zjenergy.com.cn/", desc: "浙江综合能源国企" },
          { name: "浙江浙能电力股份有限公司", abbr: "浙能电力", url: "https://www.zjpower.com/", code: "SH600023", marketCap: "约600亿人民币", desc: "浙能集团旗下上市平台" },
          { name: "申能（集团）有限公司", abbr: "申能集团", url: "https://www.shenergy.com.cn/", desc: "上海综合能源国企" },
          { name: "申能股份有限公司", abbr: "申能股份", url: "https://www.shenergy.com.cn/", code: "SH600642", marketCap: "约300亿人民币", desc: "申能集团旗下上市平台" },
          { name: "江苏省国信集团有限公司", abbr: "江苏国信", url: "https://www.jsguoxin.com/", desc: "江苏综合能源投资平台" },
          { name: "江苏省新能源开发股份有限公司", abbr: "江苏新能", url: "https://www.jsne.com.cn/", code: "SH603693", marketCap: "约80亿人民币", desc: "江苏国信旗下新能源上市平台" },
          { name: "安徽省能源集团有限公司", abbr: "皖能集团", url: "https://www.ahny.com.cn/", desc: "安徽省属能源国企" },
          { name: "安徽省皖能股份有限公司", abbr: "皖能电力", url: "https://www.wpny.com.cn/", code: "SZ000543", marketCap: "约100亿人民币", desc: "皖能集团旗下上市平台" },
          { name: "福建省能源石化集团有限责任公司", abbr: "福建能化", url: "https://www.fjenergy.com.cn/", desc: "福建省属能源国企" },
          { name: "江西省投资集团有限公司", abbr: "江投集团", url: "https://www.jxic.com/", desc: "江西省属综合投资/能源平台" },
          { name: "山东省能源集团有限公司", abbr: "山东能源", url: "https://www.shandong-energy.com/", desc: "山东煤炭/电力综合集团" },
        ]
      },
      {
        subtitle: "华中地区",
        items: [
          { name: "河南能源集团有限公司", abbr: "河南能源", url: "https://www.hnecg.com/", desc: "河南省属能源国企" },
          { name: "湖北省能源集团有限公司", abbr: "湖北能源", url: "https://www.hubei-energy.com/", desc: "湖北省属能源国企" },
          { name: "湖北能源集团股份有限公司", abbr: "湖北能源", url: "https://www.hubei-energy.com/", code: "SZ000883", marketCap: "约300亿人民币", desc: "三峡集团参股，湖北能源上市平台" },
          { name: "湖南省能源投资集团有限公司", abbr: "湖南能源", url: "https://www.hnety.com/", desc: "湖南省属能源国企" },
        ]
      },
      {
        subtitle: "华南地区",
        items: [
          { name: "广东省能源集团有限公司", abbr: "广东能源", url: "https://www.geg.com.cn/", desc: "广东综合能源国企" },
          { name: "广东省风力发电有限公司", abbr: "广东风电", url: "https://www.gdwpower.com.cn/", desc: "广东能源集团旗下风电平台" },
          { name: "广西投资集团有限公司", abbr: "广投集团", url: "https://www.gxic.cn/", desc: "广西综合投资/能源平台" },
          { name: "广西能源股份有限公司", abbr: "广西能源", url: "https://www.gxdl.com.cn/", code: "SH600310", marketCap: "约50亿人民币", desc: "广投旗下能源上市平台" },
          { name: "海南省发展控股有限公司", abbr: "海南发控", url: "https://www.hndc.com.cn/", desc: "海南省属综合投资/能源平台" },
        ]
      },
      {
        subtitle: "西南地区",
        items: [
          { name: "四川省能源投资集团有限责任公司", abbr: "川能投", url: "https://www.scnyt.com/", desc: "四川省属能源国企" },
          { name: "四川广安爱众股份有限公司", abbr: "广安爱众", url: "https://www.ga-iz.com.cn/", code: "SH600979", marketCap: "约50亿人民币", desc: "川能投旗下上市平台" },
          { name: "重庆能源投资集团有限公司", abbr: "重庆能源", url: "https://www.cqny.com.cn/", desc: "重庆市属能源国企" },
          { name: "云南省能源投资集团有限公司", abbr: "云南能投", url: "https://www.ynet.cn/", desc: "云南省属能源国企" },
          { name: "云南能源投资股份有限公司", abbr: "云南能投", url: "https://www.yneit.com/", code: "SZ002053", marketCap: "约100亿人民币", desc: "云南能投旗下上市平台" },
          { name: "贵州省能源集团有限公司", abbr: "贵州能源", url: "https://www.gzec.cn/", desc: "贵州省属能源国企" },
          { name: "西藏电力有限公司", abbr: "", url: "https://www.xz.sgcc.com.cn/", desc: "国网西藏（西藏电力主体）" },
        ]
      },
      {
        subtitle: "西北地区",
        items: [
          { name: "陕西投资集团有限公司", abbr: "陕投集团", url: "https://www.sxtz.com/", desc: "陕西省属综合投资/能源平台" },
          { name: "陕西省煤田地质集团有限公司", abbr: "陕煤地质", url: "https://www.sxmt.cn/", desc: "陕西煤炭资源勘探开发" },
          { name: "甘肃省电力投资集团有限责任公司", abbr: "甘电投", url: "https://www.gsep.com.cn/", desc: "甘肃省属电力投资平台" },
          { name: "甘肃能源化工投资集团有限公司", abbr: "甘能化", url: "https://www.gnhy.cn/", desc: "甘肃能源化工国企" },
          { name: "青海省能源发展（集团）有限责任公司", abbr: "青海能源", url: "https://www.qhnytz.com/", desc: "青海省属能源国企" },
          { name: "宁夏国有资本运营集团有限责任公司", abbr: "宁国运", url: "https://www.nxcg.com.cn/", desc: "宁夏综合投资/能源平台" },
          { name: "新疆能源（集团）有限责任公司", abbr: "新疆能源", url: "https://www.xjnyjt.com/", desc: "新疆自治区属能源国企" },
          { name: "新疆天富能源股份有限公司", abbr: "天富能源", url: "https://www.tfny.com.cn/", code: "SH600509", marketCap: "约50亿人民币", desc: "新疆兵团旗下能源上市平台" },
        ]
      }
    ]
  },

  // ==================== 五、煤炭企业 ====================
  {
    category: "equipment",
    section: "五、煤炭及燃料企业（火电上游）",
    subsections: [
      {
        subtitle: "煤炭企业",
        items: [
          { name: "中国神华能源股份有限公司", abbr: "中国神华", url: "https://www.shenhuachina.com/", code: "SH601088 / HK01088", marketCap: "约5500亿人民币", desc: "国家能源集团旗下煤炭+电力上市平台" },
          { name: "中煤能源集团有限公司", abbr: "中煤集团", url: "https://www.chinacoal.com/", desc: "央企煤炭综合企业" },
          { name: "中国中煤能源股份有限公司", abbr: "中煤能源", url: "https://www.cmnc.com.cn/", code: "SH601898 / HK01898", marketCap: "约800亿人民币", desc: "中煤集团核心上市平台" },
          { name: "山西焦煤集团有限责任公司", abbr: "山西焦煤", url: "https://www.sxcc.com.cn/", desc: "山西省属焦煤龙头" },
          { name: "山西焦煤能源集团股份有限公司", abbr: "山西焦化", url: "https://www.sxcoke.com.cn/", code: "SH600740", marketCap: "约200亿人民币", desc: "山西焦煤旗下上市平台" },
          { name: "陕西煤业化工集团有限责任公司", abbr: "陕煤集团", url: "https://www.shccig.com/", desc: "陕西省属煤炭化工综合企业" },
          { name: "陕西煤业股份有限公司", abbr: "陕西煤业", url: "https://www.shccig.com/", code: "SH601225", marketCap: "约2000亿人民币", desc: "陕煤集团旗下煤炭上市平台" },
          { name: "兖矿能源集团股份有限公司", abbr: "兖矿能源", url: "https://www.yanzhoucoal.com.cn/", code: "SH600188 / HK01171", marketCap: "约1000亿人民币", desc: "山东能源旗下煤炭上市平台" },
          { name: "淮北矿业控股股份有限公司", abbr: "淮北矿业", url: "https://www.hbkykg.com/", code: "SH600985", marketCap: "约300亿人民币", desc: "安徽煤炭上市企业" },
          { name: "淮南矿业（集团）有限责任公司", abbr: "淮南矿业", url: "https://www.hnmining.com/", desc: "安徽煤炭/电力综合企业" },
        ]
      }
    ]
  },

  // ==================== 六、行业协会 ====================
  {
    category: "association",
    section: "六、行业协会与非政府组织",
    subsections: [
      {
        subtitle: "综合电力行业",
        items: [
          { name: "中国电力企业联合会", abbr: "中电联 CEC", url: "https://www.cec.org.cn/", desc: "电力行业全国性行业协会" },
          { name: "中国能源研究会", abbr: "CERS", url: "https://www.cers.org.cn/", desc: "能源领域高端智库" },
          { name: "中国电机工程学会", abbr: "CSEE", url: "https://www.csee.org.cn/", desc: "电力工程学术组织" },
        ]
      },
      {
        subtitle: "新能源/可再生能源",
        items: [
          { name: "中国可再生能源学会", abbr: "CRES", url: "https://www.cres.org.cn/", desc: "可再生能源科技学术组织" },
          { name: "中国光伏行业协会", abbr: "CPIA", url: "https://www.chinapv.org.cn/", desc: "光伏行业全国性行业协会" },
          { name: "中国风能协会", abbr: "CWEA", url: "https://www.cwea.org.cn/", desc: "风电行业全国性行业协会" },
          { name: "中国水力发电工程学会", abbr: "CHES", url: "https://www.hydropower.org.cn/", desc: "水电学术组织" },
          { name: "中国核能行业协会", abbr: "CNEA", url: "https://www.china-nea.com/", desc: "核能行业全国性行业协会" },
          { name: "中国生物质能联盟", abbr: "", url: "https://www.cn-bea.com/", desc: "生物质能行业组织" },
        ]
      },
      {
        subtitle: "煤炭/节能/环保",
        items: [
          { name: "中国煤炭工业协会", abbr: "CNCA", url: "https://www.coalchina.org.cn/", desc: "煤炭行业全国性行业协会" },
          { name: "中国节能协会", abbr: "CECA", url: "https://www.cecaweb.org.cn/", desc: "节能领域行业组织" },
          { name: "中国环境保护产业协会", abbr: "CAEPI", url: "https://www.caepi.org.cn/", desc: "环保产业行业组织" },
        ]
      }
    ]
  },

  // ==================== 七、设计院与施工单位 ====================
  {
    category: "design-construction",
    section: "七、设计院、科研院所与施工单位",
    subsections: [
      {
        subtitle: "电力设计院（全国/区域龙头）",
        items: [
          { name: "中国电力工程顾问集团有限公司", abbr: "中电工程 CPECC", url: "https://www.cpecc.net/", desc: "中国能建旗下电力规划设计龙头" },
          { name: "中国电建集团华东勘测设计研究院", abbr: "华东院", url: "https://www.hdec.com/", desc: "水电水利/新能源勘测设计" },
          { name: "中国电建集团西北勘测设计研究院", abbr: "西北院", url: "https://www.nwh.cn/", desc: "水电/新能源勘测设计" },
          { name: "中国电建集团中南勘测设计研究院", abbr: "中南院", url: "https://www.msdi.cn/", desc: "水电/新能源勘测设计" },
          { name: "中国电建集团昆明勘测设计研究院", abbr: "昆明院", url: "https://www.kunmingep.com/", desc: "水电/新能源勘测设计" },
          { name: "中国电建集团成都勘测设计研究院", abbr: "成都院", url: "https://www.chidi.com.cn/", desc: "水电/新能源勘测设计" },
          { name: "中国能源建设集团广东省电力设计研究院", abbr: "广东院", url: "https://www.gedi.com.cn/", desc: "广东电力设计龙头" },
          { name: "中国能源建设集团江苏省电力设计院", abbr: "江苏院", url: "https://www.jspdi.com.cn/", desc: "江苏电力设计院" },
          { name: "中国能源建设集团山西省电力勘测设计院", abbr: "山西院", url: "https://www.sxpdi.com/", desc: "山西电力勘测设计" },
        ]
      },
      {
        subtitle: "施工/建设/调试单位",
        items: [
          { name: "中国电建集团核电工程有限公司", abbr: "电建核电", url: "https://www.powerchina-ne.com/", desc: "核电/火电施工" },
          { name: "中国电建集团山东电力建设有限公司", abbr: "山东电建", url: "https://www.sepco.com.cn/", desc: "电力工程施工" },
          { name: "中国电建集团河南工程有限公司", abbr: "河南工程", url: "https://www.ztyph.com/", desc: "电力工程施工" },
          { name: "中国能建集团天津电力建设有限公司", abbr: "天津电建", url: "https://www.tepc.com.cn/", desc: "电力工程施工" },
          { name: "中国能建集团安徽电力建设有限公司", abbr: "安徽电建", url: "https://www.ahpcl.com/", desc: "电力工程施工" },
          { name: "中国能源建设集团湖南省电力设计院有限公司", abbr: "湖南院", url: "https://www.hnepdi.com/", desc: "湖南电力设计/施工" },
        ]
      }
    ]
  },

  // ==================== 八、各省能源局 ====================
  {
    category: "province-gov",
    section: "八、各省（市/区）能源局",
    subsections: [
      {
        subtitle: "华北地区",
        items: [
          { name: "北京市发展和改革委员会（能源处）", abbr: "", url: "https://fgw.beijing.gov.cn/", desc: "北京能源管理" },
          { name: "天津市发展和改革委员会（能源处）", abbr: "", url: "https://fzgg.tj.gov.cn/", desc: "天津能源管理" },
          { name: "河北省能源局", abbr: "", url: "https://hbdrc.hebei.gov.cn/", desc: "河北能源管理（省发改委下属）" },
          { name: "山西省能源局", abbr: "", url: "https://nyj.shanxi.gov.cn/", desc: "山西省能源主管部门" },
          { name: "内蒙古自治区能源局", abbr: "", url: "https://nyj.nmg.gov.cn/", desc: "内蒙古能源主管部门" },
        ]
      },
      {
        subtitle: "东北地区",
        items: [
          { name: "辽宁省发展和改革委员会（能源处）", abbr: "", url: "https://fgw.ln.gov.cn/", desc: "辽宁能源管理" },
          { name: "吉林省能源局", abbr: "", url: "https://nyj.jl.gov.cn/", desc: "吉林能源主管部门" },
          { name: "黑龙江省发展和改革委员会（能源处）", abbr: "", url: "https://fgw.hlj.gov.cn/", desc: "黑龙江能源管理" },
        ]
      },
      {
        subtitle: "华东地区",
        items: [
          { name: "上海市发展和改革委员会（能源处）", abbr: "", url: "https://fgw.sh.gov.cn/", desc: "上海能源管理" },
          { name: "江苏省能源局", abbr: "", url: "https://fzggw.jiangsu.gov.cn/", desc: "江苏能源管理（省发改委下属）" },
          { name: "浙江省能源局", abbr: "", url: "https://fzggw.zj.gov.cn/", desc: "浙江能源主管部门" },
          { name: "安徽省能源局", abbr: "", url: "https://fzggw.ah.gov.cn/", desc: "安徽能源管理（省发改委下属）" },
          { name: "福建省发展和改革委员会（能源处）", abbr: "", url: "https://fgw.fujian.gov.cn/", desc: "福建能源管理" },
          { name: "江西省能源局", abbr: "", url: "https://drc.jiangxi.gov.cn/", desc: "江西能源管理（省发改委下属）" },
          { name: "山东省能源局", abbr: "", url: "https://nyj.shandong.gov.cn/", desc: "山东能源主管部门" },
        ]
      },
      {
        subtitle: "华中地区",
        items: [
          { name: "河南省发展和改革委员会（能源局）", abbr: "", url: "https://fgw.henan.gov.cn/", desc: "河南能源管理" },
          { name: "湖北省能源局", abbr: "", url: "https://nyj.hubei.gov.cn/", desc: "湖北能源主管部门" },
          { name: "湖南省发展和改革委员会（能源处）", abbr: "", url: "https://fgw.hunan.gov.cn/", desc: "湖南能源管理" },
        ]
      },
      {
        subtitle: "华南地区",
        items: [
          { name: "广东省能源局", abbr: "", url: "https://drc.gd.gov.cn/", desc: "广东能源主管部门" },
          { name: "广西壮族自治区能源局", abbr: "", url: "https://fgw.gxzf.gov.cn/", desc: "广西能源管理" },
          { name: "海南省发展和改革委员会（能源处）", abbr: "", url: "https://plan.hainan.gov.cn/", desc: "海南能源管理" },
        ]
      },
      {
        subtitle: "西南地区",
        items: [
          { name: "重庆市能源局", abbr: "", url: "https://fzggw.cq.gov.cn/", desc: "重庆能源管理（市发改委下属）" },
          { name: "四川省能源局", abbr: "", url: "https://fgw.sc.gov.cn/", desc: "四川能源管理（省发改委下属）" },
          { name: "贵州省能源局", abbr: "", url: "https://nyj.guizhou.gov.cn/", desc: "贵州能源主管部门" },
          { name: "云南省能源局", abbr: "", url: "https://nyj.yn.gov.cn/", desc: "云南能源主管部门" },
          { name: "西藏自治区发展和改革委员会（能源处）", abbr: "", url: "https://drc.xizang.gov.cn/", desc: "西藏能源管理" },
        ]
      },
      {
        subtitle: "西北地区",
        items: [
          { name: "陕西省能源局", abbr: "", url: "https://sndrc.shaanxi.gov.cn/", desc: "陕西能源管理（省发改委下属）" },
          { name: "甘肃省能源局", abbr: "", url: "https://fzgg.gansu.gov.cn/", desc: "甘肃能源管理（省发改委下属）" },
          { name: "青海省能源局", abbr: "", url: "https://nyj.qinghai.gov.cn/", desc: "青海能源主管部门" },
          { name: "宁夏回族自治区发展和改革委员会（能源处）", abbr: "", url: "https://fzggw.nx.gov.cn/", desc: "宁夏能源管理" },
          { name: "新疆维吾尔自治区发展和改革委员会（能源处）", abbr: "", url: "https://fgw.xinjiang.gov.cn/", desc: "新疆能源管理" },
        ]
      }
    ]
  },

  // ==================== 九、电力交易中心 ====================
  {
    category: "exchange",
    section: "九、电力交易中心",
    subsections: [
      {
        subtitle: "国家级/区域级交易中心",
        items: [
          { name: "北京电力交易中心", abbr: "", url: "http://www.bj-pec.com.cn/", desc: "省间电力交易组织" },
          { name: "广州电力交易中心", abbr: "", url: "https://www.gzpec.cn/", desc: "南方区域电力市场运营" },
        ]
      },
      {
        subtitle: "各省电力交易中心（国网体系）",
        items: [
          { name: "山西电力交易中心", abbr: "", url: "https://www.sxpx.com.cn/", desc: "山西电力交易平台" },
          { name: "山东电力交易中心", abbr: "", url: "https://www.sdpctc.com/", desc: "山东电力交易平台" },
          { name: "江苏电力交易中心", abbr: "", url: "https://www.jspec.com.cn/", desc: "江苏电力交易平台" },
          { name: "浙江电力交易中心", abbr: "", url: "https://www.zjpec.com.cn/", desc: "浙江电力交易平台" },
          { name: "安徽电力交易中心", abbr: "", url: "https://www.ahpx.com.cn/", desc: "安徽电力交易平台" },
          { name: "福建电力交易中心", abbr: "", url: "https://www.fjpx.com.cn/", desc: "福建电力交易平台" },
          { name: "湖北电力交易中心", abbr: "", url: "https://www.hbpx.com.cn/", desc: "湖北电力交易平台" },
          { name: "河南电力交易中心", abbr: "", url: "https://www.hnpx.com.cn/", desc: "河南电力交易平台" },
          { name: "四川电力交易中心", abbr: "", url: "https://www.scpx.com.cn/", desc: "四川电力交易平台" },
          { name: "辽宁电力交易中心", abbr: "", url: "https://www.lnpx.com.cn/", desc: "辽宁电力交易平台" },
          { name: "陕西电力交易中心", abbr: "", url: "https://www.snpx.com.cn/", desc: "陕西电力交易平台" },
          { name: "甘肃电力交易中心", abbr: "", url: "https://www.gspx.com.cn/", desc: "甘肃电力交易平台" },
        ]
      },
      {
        subtitle: "各省电力交易中心（南网体系）",
        items: [
          { name: "广东电力交易中心", abbr: "", url: "https://www.gdpec.cn/", desc: "广东电力交易平台" },
          { name: "广西电力交易中心", abbr: "", url: "https://www.gxpx.com.cn/", desc: "广西电力交易平台" },
          { name: "云南电力交易中心", abbr: "", url: "https://www.ynpx.com.cn/", desc: "云南电力交易平台" },
          { name: "贵州电力交易中心", abbr: "", url: "https://www.gzpx.com.cn/", desc: "贵州电力交易平台" },
          { name: "海南电力交易中心", abbr: "", url: "https://www.hnpx.com.cn/", desc: "海南电力交易平台" },
        ]
      },
      {
        subtitle: "独立电力交易中心",
        items: [
          { name: "内蒙古电力交易中心", abbr: "", url: "https://www.imptc.com/", desc: "蒙西电力交易（独立电网）" },
        ]
      }
    ]
  },

  // ==================== 十、碳交易与绿证 ====================
  {
    category: "carbon-green",
    section: "十、碳交易与绿证机构",
    items: [
      { name: "全国碳市场信息网", abbr: "", url: "https://www.cets.org.cn/", desc: "全国碳排放权交易市场信息平台" },
      { name: "全国碳排放权注册登记系统", abbr: "中碳登", url: "https://www.chinacrc.net/", desc: "全国碳市场注册登记机构（武汉）" },
      { name: "全国碳排放权交易系统", abbr: "CEA", url: "https://www.cneeex.com/", desc: "全国碳市场交易系统（上海环境能源交易所）" },
      { name: "上海环境能源交易所", abbr: "SEEE", url: "https://www.cneeex.com/", desc: "全国碳市场交易运营机构" },
      { name: "湖北碳排放权交易中心", abbr: "HBEA", url: "https://www.hbets.cn/", desc: "湖北试点碳市场" },
      { name: "广州碳排放权交易中心", abbr: "GZEAC", url: "https://www.cnemission.com/", desc: "广东试点碳市场" },
      { name: "北京绿色交易所", abbr: "CBGX", url: "https://www.cbeex.com.cn/", desc: "北京碳交易/绿证服务" },
      { name: "深圳排放权交易所", abbr: "SZEX", url: "https://www.cerx.cn/", desc: "深圳试点碳市场" },
      { name: "天津排放权交易所", abbr: "TJEA", url: "https://www.chinatcx.com/", desc: "天津试点碳市场" },
      { name: "重庆碳排放权交易中心", abbr: "CQEA", url: "https://www.cqets.com/", desc: "重庆试点碳市场" },
      { name: "中国绿色电力证书交易平台", abbr: "", url: "https://www.greenenergy.org.cn/", desc: "绿证交易官方平台" },
      { name: "中国核证自愿减排量（CCER）", abbr: "CCER", url: "https://www.cets.org.cn/", desc: "自愿减排交易信息管理" },
    ]
  },

  // ==================== 十一、行业媒体 ====================
  {
    category: "media",
    section: "十一、行业媒体",
    subsections: [
      {
        subtitle: "官方/行业权威媒体",
        items: [
          { name: "中国电力报", abbr: "中电传媒", url: "https://www.cpnn.com.cn/", desc: "国家能源局指导的行业权威媒体" },
          { name: "国家电网报", abbr: "", url: "http://www.sgcc.com.cn/", desc: "国网官方媒体（入口在国网主站）" },
          { name: "南方电网报", abbr: "", url: "https://csg.cn/", desc: "南网官方媒体（入口在南网主站）" },
          { name: "中国电力出版社", abbr: "", url: "https://www.cepp.com.cn/", desc: "电力行业专业出版" },
          { name: "中国电力网", abbr: "", url: "https://www.chinapower.com.cn/", desc: "电力行业综合资讯" },
        ]
      },
      {
        subtitle: "民营/市场化媒体",
        items: [
          { name: "财新网（能源板块）", abbr: "财新", url: "https://www.caixin.com/", desc: "深度财经/能源报道" },
          { name: "界面新闻（能源板块）", abbr: "界面", url: "https://www.jiemian.com/", desc: "商业财经/能源资讯" },
          { name: "澎湃新闻（绿政/能源）", abbr: "澎湃", url: "https://www.thepaper.cn/", desc: "时政/能源深度报道" },
          { name: "21世纪经济报道（能源）", abbr: "21世纪", url: "https://www.21jingji.com/", desc: "财经/能源商业报道" },
        ]
      },
      {
        subtitle: "自媒体/行业智库（公众号/网站）",
        items: [
          { name: "电力市场观察", abbr: "", url: "https://www.epmoh.com/", desc: "电力市场分析自媒体" },
          { name: "能见", abbr: "能见", url: "https://www.energy-observer.com/", desc: "能源行业新媒体" },
          { name: "北极星电力网", abbr: "北极星", url: "https://www.bjx.com.cn/", desc: "电力行业综合信息平台" },
          { name: "索比光伏网", abbr: "索比", url: "https://www.solarbe.com/", desc: "光伏行业专业媒体" },
          { name: "风电峰观察", abbr: "", url: "https://www.windfenergy.com/", desc: "风电行业自媒体" },
          { name: "能源杂志", abbr: "能源", url: "https://www.energy-magazine.com.cn/", desc: "能源行业深度杂志" },
          { name: "华夏能源网", abbr: "华夏能源", url: "https://www.hxny.com/", desc: "能源行业新媒体" },
          { name: "光伏们", abbr: "光伏们", url: "https://www.pvmen.com/", desc: "光伏行业自媒体" },
        ]
      }
    ]
  },

  // ==================== 十二、设备供应商 ====================
  {
    category: "equipment",
    section: "十二、风光水火储上游主要设备供应商",
    subsections: [
      {
        subtitle: "风电机组整机",
        items: [
          { name: "金风科技股份有限公司", abbr: "金风科技", url: "https://www.goldwind.com.cn/", code: "SZ002202", marketCap: "约400亿人民币", desc: "中国最大风机整机制造商" },
          { name: "远景能源有限公司", abbr: "远景能源", url: "https://www.envision-group.com/", desc: "智能风机/储能/能源管理" },
          { name: "明阳智慧能源集团股份公司", abbr: "明阳智能", url: "https://www.my-se.com.cn/", code: "SH601615", marketCap: "约300亿人民币", desc: "海上风电整机龙头" },
          { name: "运达能源科技集团股份有限公司", abbr: "运达股份", url: "https://www.chinawindey.com/", code: "SZ300772", marketCap: "约100亿人民币", desc: "风机整机制造商" },
          { name: "东方电气风电股份有限公司", abbr: "东方风电", url: "https://www.dongfang.com/", desc: "东方电气旗下风电装备" },
          { name: "上海电气风电集团股份有限公司", abbr: "电气风电", url: "https://www.sewind.com/", code: "SH688660", marketCap: "约100亿人民币", desc: "上海电气旗下风电整机" },
        ]
      },
      {
        subtitle: "光伏制造（硅料/硅片/电池/组件）",
        items: [
          { name: "隆基绿能科技股份有限公司", abbr: "隆基绿能", url: "https://www.longi.com/", code: "SH601012", marketCap: "约1800亿人民币", desc: "全球最大硅片/组件制造商" },
          { name: "通威集团有限公司", abbr: "通威股份", url: "https://www.tongwei.com.cn/", code: "SH600438", marketCap: "约1000亿人民币", desc: "多晶硅+电池片龙头" },
          { name: "晶科能源股份有限公司", abbr: "晶科能源", url: "https://www.jinkosolar.com/", code: "SH688223", marketCap: "约800亿人民币", desc: "全球组件出货量领先" },
          { name: "天合光能股份有限公司", abbr: "天合光能", url: "https://www.trinasolar.com/", code: "SH688599", marketCap: "约500亿人民币", desc: "组件+跟踪支架+储能" },
          { name: "晶澳太阳能科技股份有限公司", abbr: "晶澳科技", url: "https://www.jasolar.com/", code: "SZ002459", marketCap: "约600亿人民币", desc: "硅片+电池+组件一体化" },
          { name: "阿特斯阳光电力集团", abbr: "阿特斯", url: "https://www.csisolar.com/", code: "SH688472", marketCap: "约400亿人民币", desc: "组件+储能系统" },
          { name: "协鑫科技控股有限公司", abbr: "协鑫科技", url: "https://www.gcl-tech.com/", code: "HK03800", marketCap: "约200亿港币", desc: "硅料/硅片" },
          { name: "TCL中环新能源科技股份有限公司", abbr: "TCL中环", url: "https://www.zhonghuan.com/", code: "SZ002129", marketCap: "约500亿人民币", desc: "硅片龙头" },
        ]
      },
      {
        subtitle: "光伏逆变器 / 储能变流器（PCS）",
        items: [
          { name: "阳光电源股份有限公司", abbr: "阳光电源", url: "https://www.sungrowpower.com/", code: "SZ300274", marketCap: "约1500亿人民币", desc: "光伏逆变器+储能系统全球领先" },
          { name: "华为数字能源技术有限公司", abbr: "华为数字能源", url: "https://digitalpower.huawei.com/", desc: "智能光伏逆变器/储能" },
          { name: "特变电工股份有限公司", abbr: "特变电工", url: "https://www.tbea.com/", code: "SH600089", marketCap: "约600亿人民币", desc: "变压器+逆变器+多晶硅" },
          { name: "上能电气股份有限公司", abbr: "上能电气", url: "https://www.si-ney.com/", code: "SZ300827", marketCap: "约100亿人民币", desc: "光伏逆变器/储能PCS" },
          { name: "固德威技术股份有限公司", abbr: "固德威", url: "https://www.goodwe.com/", code: "SH688390", marketCap: "约200亿人民币", desc: "光伏逆变器/储能系统" },
          { name: "锦浪科技股份有限公司", abbr: "锦浪科技", url: "https://www.ginlong.com/", code: "SZ300763", marketCap: "约200亿人民币", desc: "组串式逆变器" },
          { name: "禾迈电气股份有限公司", abbr: "禾迈股份", url: "https://www.hoymiles.com/", code: "SH688032", marketCap: "约200亿人民币", desc: "微型逆变器" },
          { name: "昱能科技股份有限公司", abbr: "昱能科技", url: "https://www.apsystems.com/", code: "SH688348", marketCap: "约100亿人民币", desc: "微型逆变器/储能" },
        ]
      },
      {
        subtitle: "变压器 / GIS / 高压开关设备",
        items: [
          { name: "特变电工股份有限公司", abbr: "特变电工", url: "https://www.tbea.com/", code: "SH600089", marketCap: "约600亿人民币", desc: "变压器/电抗器/GIS" },
          { name: "保定天威保变电气股份有限公司", abbr: "保变电气", url: "https://www.btptc.com/", code: "SH600550", marketCap: "约100亿人民币", desc: "变压器制造" },
          { name: "西安西电变压器有限责任公司", abbr: "西电变压器", url: "https://www.xd.com.cn/", desc: "中国西电旗下变压器" },
          { name: "中国西电电气股份有限公司", abbr: "中国西电", url: "https://www.xd.com.cn/", code: "SH601179", marketCap: "约300亿人民币", desc: "GIS/变压器/开关设备" },
          { name: "河南平高电气股份有限公司", abbr: "平高电气", url: "https://www.pinggao.com/", code: "SH600312", marketCap: "约200亿人民币", desc: "高压开关/GIS设备" },
          { name: "思源电气股份有限公司", abbr: "思源电气", url: "https://www.sieyuan.com/", code: "SZ002028", marketCap: "约300亿人民币", desc: "变压器/GIS/继电保护" },
          { name: "江苏华鹏变压器有限公司", abbr: "华鹏变压器", url: "https://www.huapeng.com/", desc: "变压器制造" },
          { name: "山东电力设备有限公司", abbr: "山东电力设备", url: "https://www.sepco.com.cn/", desc: "变压器/电抗器" },
        ]
      },
      {
        subtitle: "储能系统（电芯/电池/PACK/集成）",
        items: [
          { name: "宁德时代新能源科技股份有限公司", abbr: "宁德时代", url: "https://www.catl.com/", code: "SZ300750", marketCap: "约1.1万亿人民币", desc: "全球最大动力电池/储能电池企业" },
          { name: "比亚迪股份有限公司", abbr: "比亚迪", url: "https://www.byd.com/", code: "SZ002594 / HK01211", marketCap: "约7000亿人民币", desc: "动力电池/储能系统" },
          { name: "亿纬锂能股份有限公司", abbr: "亿纬锂能", url: "https://www.evebattery.com/", code: "SZ300014", marketCap: "约800亿人民币", desc: "锂电池/储能电芯" },
          { name: "海辰储能科技股份有限公司", abbr: "海辰储能", url: "https://www.hithium.com/", desc: "储能电芯/PACK" },
          { name: "瑞浦兰钧能源股份有限公司", abbr: "瑞浦兰钧", url: "https://www.rept-battery.com/", code: "HK00666", marketCap: "约200亿港币", desc: "储能电芯/动力电池" },
          { name: "中创新航科技股份有限公司", abbr: "中创新航", url: "https://www.calgiga.com/", code: "HK03931", marketCap: "约300亿港币", desc: "动力电池/储能电池" },
          { name: "南都电源动力股份有限公司", abbr: "南都电源", url: "https://www.nandu.com/", code: "SZ300068", marketCap: "约100亿人民币", desc: "储能电池/铅炭电池" },
          { name: "双登集团股份有限公司", abbr: "双登集团", url: "https://www.shuangdeng.com/", desc: "储能电池系统" },
        ]
      },
      {
        subtitle: "水电 / 火电 / 核电主设备",
        items: [
          { name: "东方电气股份有限公司", abbr: "东方电气", url: "https://www.dongfang.com/", code: "SH600875", marketCap: "约500亿人民币", desc: "火电/核电/风电/水电主设备" },
          { name: "哈尔滨电气集团有限公司", abbr: "哈电集团", url: "https://www.harbinelectric.com/", desc: "火电/核电/水电主设备" },
          { name: "哈尔滨电气股份有限公司", abbr: "哈尔滨电气", url: "https://www.harbinelectric.com/", code: "HK01133", marketCap: "约50亿港币", desc: "哈电核心上市平台" },
          { name: "上海电气集团股份有限公司", abbr: "上海电气", url: "https://www.shanghai-electric.com/", code: "SH601727 / HK02727", marketCap: "约500亿人民币", desc: "火电/核电/风电/工业装备" },
          { name: "中国一重集团有限公司", abbr: "中国一重", url: "https://www.cfhi.com/", desc: "核电压力容器/重型装备" },
          { name: "二重（德阳）重型装备有限公司", abbr: "国机重装", url: "https://www.sinomach-he.com/", code: "SH601399", marketCap: "约200亿人民币", desc: "重型电力装备" },
        ]
      },
      {
        subtitle: "风电零部件（叶片/轴承/齿轮箱/塔筒）",
        items: [
          { name: "中材科技股份有限公司", abbr: "中材科技", url: "https://www.sinoma.cn/", code: "SZ002080", marketCap: "约300亿人民币", desc: "风电叶片龙头" },
          { name: "天顺风能股份有限公司", abbr: "天顺风能", url: "https://www.tian-shun.com/", code: "SZ002531", marketCap: "约100亿人民币", desc: "风电塔筒" },
          { name: "大金重工股份有限公司", abbr: "大金重工", url: "https://www.dajin.cn/", code: "SZ002487", marketCap: "约100亿人民币", desc: "风电塔筒/管桩" },
          { name: "新强联股份有限公司", abbr: "新强联", url: "https://www.xqltz.com/", code: "SZ300850", marketCap: "约100亿人民币", desc: "风电轴承" },
          { name: "日月重工股份有限公司", abbr: "日月股份", url: "https://www.riyue.com.cn/", code: "SH603218", marketCap: "约100亿人民币", desc: "风电铸件（轮毂/底座）" },
          { name: "通裕重工股份有限公司", abbr: "通裕重工", url: "https://www.tongyuheavy.com/", code: "SZ300185", marketCap: "约80亿人民币", desc: "风电主轴/锻件" },
          { name: "杭齿前进股份有限公司", abbr: "杭齿前进", url: "https://www.hzadvance.com/", code: "SH601177", marketCap: "约50亿人民币", desc: "风电齿轮箱" },
        ]
      },
      {
        subtitle: "光伏辅材（玻璃/胶膜/背板/支架/银浆）",
        items: [
          { name: "信义光能控股有限公司", abbr: "信义光能", url: "https://www.xinyisolar.com/", code: "HK00968", marketCap: "约500亿港币", desc: "光伏玻璃龙头" },
          { name: "福莱特玻璃集团股份有限公司", abbr: "福莱特", url: "https://www.flatgroup.com.cn/", code: "SH601865 / HK06865", marketCap: "约500亿人民币", desc: "光伏玻璃" },
          { name: "福斯特应用材料股份有限公司", abbr: "福斯特", url: "https://www.firstpvm.com/", code: "SH603806", marketCap: "约400亿人民币", desc: "光伏胶膜龙头" },
          { name: "海优新材股份有限公司", abbr: "海优新材", url: "https://www.haiyou.com/", code: "SH688680", marketCap: "约100亿人民币", desc: "光伏胶膜" },
          { name: "中信博新能源科技股份有限公司", abbr: "中信博", url: "https://www.artechsolar.com/", code: "SH688408", marketCap: "约100亿人民币", desc: "光伏跟踪支架" },
          { name: "苏州固锝电子股份有限公司", abbr: "苏州固锝", url: "https://www.szgd.com/", code: "SZ002079", marketCap: "约80亿人民币", desc: "银浆/焊带" },
          { name: "帝科股份有限公司", abbr: "帝科股份", url: "https://www.dike.com.cn/", code: "SZ300842", marketCap: "约80亿人民币", desc: "光伏银浆" },
        ]
      }
    ]
  },

  // ==================== 十三、数据/价格指数 ====================
  {
    category: "data-price",
    section: "十三、煤炭/光伏/绿证/电力价格指数与数据",
    subsections: [
      {
        subtitle: "煤炭价格/数据",
        items: [
          { name: "中国煤炭市场网", abbr: "CCTD", url: "https://www.cctd.com.cn/", desc: "煤炭市场价格/价格指数" },
          { name: "秦皇岛煤炭网", abbr: "", url: "https://www.qhdcoal.com/", desc: "环渤海动力煤价格指数" },
          { name: "中国煤炭资源网", abbr: "SXCOAL", url: "https://www.sxcoal.com/", desc: "煤炭行业数据/价格/资讯" },
        ]
      },
      {
        subtitle: "光伏价格/数据",
        items: [
          { name: "PV InfoLink", abbr: "PV InfoLink", url: "https://www.pvinfolink.com/", desc: "全球光伏供应链价格" },
          { name: "PV Magazine", abbr: "PV Magazine", url: "https://www.pv-magazine.com/", desc: "国际光伏行业媒体/数据" },
          { name: "InfoLink Consulting", abbr: "InfoLink", url: "https://www.infolink-group.com/", desc: "光伏/储能产业研究" },
        ]
      },
      {
        subtitle: "电力/能源综合数据",
        items: [
          { name: "中电联行业发展与环境资源部", abbr: "中电联", url: "https://www.cec.org.cn/", desc: "电力行业统计/运行数据" },
          { name: "国家能源局数据", abbr: "NEA", url: "https://www.nea.gov.cn/", desc: "全国电力工业统计数据" },
          { name: "国家统计局能源数据", abbr: "NBS", url: "https://www.stats.gov.cn/", desc: "能源电力宏观统计" },
          { name: "中国电力企业联合会指数", abbr: "CEC Index", url: "https://www.cec.org.cn/", desc: "电力行业景气指数" },
        ]
      },
      {
        subtitle: "绿证/碳价数据",
        items: [
          { name: "中国绿色电力证书交易平台数据", abbr: "", url: "https://www.greenenergy.org.cn/", desc: "绿证挂牌/成交数据" },
          { name: "全国碳市场价格行情", abbr: "CEA Price", url: "https://www.cneeex.com/", desc: "全国碳配额CEA实时价格" },
          { name: "碳市场数据汇总（碳交易网）", abbr: "", url: "https://www.tanjiaoyi.com/", desc: "各碳市场行情汇总" },
        ]
      }
    ]
  },

  // ==================== 十四、采购/招聘平台 ====================
  {
    category: "procurement",
    section: "十四、电力央国企采购平台与招聘平台",
    subsections: [
      {
        subtitle: "采购/招投标平台",
        items: [
          { name: "国家电网电子商务平台", abbr: "国网电商", url: "https://www.esgcc.com.cn/", desc: "国网统一采购/招投标平台" },
          { name: "南方电网电子采购交易平台", abbr: "南网采购", url: "https://www.csg.cn/", desc: "南网采购入口（导航至电商平台）" },
          { name: "中国电建招标采购平台", abbr: "电建招标", url: "https://www.powerchina.cn/", desc: "中国电建招标采购入口" },
          { name: "中国能建招标采购平台", abbr: "能建招标", url: "https://www.ceec.net.cn/", desc: "中国能建招标采购入口" },
          { name: "华能集团采购平台", abbr: "华能采购", url: "https://www.chng.com.cn/", desc: "华能集团采购/招标入口" },
          { name: "国家能源集团采购平台", abbr: "国能采购", url: "https://www.chnenergy.com.cn/", desc: "国家能源集团采购/招标入口" },
          { name: "国家电投采购平台", abbr: "国电投采购", url: "https://www.spic.com.cn/", desc: "国家电投采购/招标入口" },
        ]
      },
      {
        subtitle: "招聘平台",
        items: [
          { name: "国聘网", abbr: "国聘", url: "https://www.gjzph.cn/", desc: "央企招聘官方平台" },
          { name: "国资小新（国资委官方）", abbr: "国资小新", url: "https://www.sasac.gov.cn/", desc: "央企招聘信息发布" },
          { name: "国家电网招聘平台", abbr: "国网招聘", url: "http://www.sgcc.com.cn/", desc: "国网统一招聘入口" },
          { name: "南方电网招聘平台", abbr: "南网招聘", url: "https://csg.cn/", desc: "南网统一招聘入口" },
          { name: "华能集团招聘", abbr: "华能招聘", url: "https://www.chng.com.cn/", desc: "华能校园/社会招聘" },
          { name: "华电集团招聘", abbr: "华电招聘", url: "http://www.chd.com.cn/", desc: "华电校园/社会招聘" },
          { name: "国家电投招聘", abbr: "国电投招聘", url: "https://www.spic.com.cn/", desc: "国家电投校园/社会招聘" },
          { name: "国家能源集团招聘", abbr: "国能招聘", url: "https://www.chnenergy.com.cn/", desc: "国家能源集团校园/社会招聘" },
          { name: "中国电建招聘", abbr: "电建招聘", url: "https://www.powerchina.cn/", desc: "中国电建校园/社会招聘" },
          { name: "中国能建招聘", abbr: "能建招聘", url: "https://www.ceec.net.cn/", desc: "中国能建校园/社会招聘" },
        ]
      }
    ]
  },

  // ==================== 十五、售电公司 ====================
  {
    category: "other",
    section: "十五、电力央国企售电公司",
    items: [
      { name: "国网电力科学研究院有限公司（南瑞集团）", abbr: "南瑞集团", url: "https://www.nari-relays.com/", desc: "国网旗下电力自动化/售电技术支撑" },
      { name: "南方电网综合能源股份有限公司", abbr: "南网能源", url: "https://www.csgemc.com/", code: "SZ003035", marketCap: "约100亿人民币", desc: "南网旗下综合能源/售电服务" },
      { name: "华能能源销售有限责任公司", abbr: "华能售电", url: "https://www.chng.com.cn/", desc: "华能集团售电业务平台" },
      { name: "华电能源销售有限公司", abbr: "华电售电", url: "http://www.chd.com.cn/", desc: "华电集团售电业务平台" },
      { name: "国家电投集团售电有限公司", abbr: "国电投售电", url: "https://www.spic.com.cn/", desc: "国家电投售电业务平台" },
      { name: "国家能源集团售电有限责任公司", abbr: "国能售电", url: "https://www.chnenergy.com.cn/", desc: "国家能源集团售电业务平台" },
    ]
  },

  // ==================== 十六、科研院所 ====================
  {
    category: "research",
    section: "十六、电力行业大学及科研院所",
    subsections: [
      {
        subtitle: "国家级实验室/研究院",
        items: [
          { name: "怀柔实验室", abbr: "怀柔实验室", url: "https://www.hrl.ac.cn/", desc: "国家能源领域国家实验室" },
          { name: "中国电力科学研究院有限公司", abbr: "中国电科院 EPRI", url: "http://www.epri.sgcc.com.cn/", desc: "国网旗下顶级电力科研机构" },
          { name: "西安热工研究院有限公司", abbr: "西安热工院 TPRI", url: "https://www.tpri.com.cn/", desc: "华能旗下清洁煤/热能研究" },
          { name: "南方电网科学研究院有限责任公司", abbr: "南网科研院", url: "https://www.csg.cn/", desc: "南网技术支撑（入口在南网主站）" },
          { name: "国网能源研究院有限公司", abbr: "国网能源院", url: "http://www.sgeri.sgcc.com.cn/", desc: "国网能源战略/政策研究" },
          { name: "南方电网能源发展研究院", abbr: "南网能源院", url: "https://www.csg.cn/", desc: "南网能源经济研究" },
        ]
      },
      {
        subtitle: "高等院校（电力/能源相关）",
        items: [
          { name: "华北电力大学", abbr: "华电大", url: "https://www.ncepu.edu.cn/", desc: "电力行业最高学府，北京+保定双校区" },
          { name: "华北电力大学（保定校区）", abbr: "华电保定", url: "https://bd.ncepu.edu.cn/", desc: "华电保定校区，电力特色鲜明" },
          { name: "长沙理工大学", abbr: "长理", url: "https://www.csust.edu.cn/", desc: "原长沙电力学院，电力行业知名院校" },
          { name: "上海电力大学", abbr: "上电", url: "https://www.shiep.edu.cn/", desc: "原上海电力学院，华东电力人才摇篮" },
          { name: "东北电力大学", abbr: "东电", url: "https://www.neepu.edu.cn/", desc: "原吉林电力学院，东北电力强校" },
          { name: "三峡大学", abbr: "三大", url: "https://www.ctgu.edu.cn/", desc: "原葛洲坝水电工程学院，水电特色" },
          { name: "南京工程学院", abbr: "南工程", url: "https://www.njit.edu.cn/", desc: "原南京电力高等专科学校，电力应用型强校" },
          { name: "沈阳工程学院", abbr: "沈工程", url: "https://www.sie.edu.cn/", desc: "原沈阳电力高等专科学校，东北电力应用型高校" },
          { name: "保定电力职业技术学院", abbr: "保定电校", url: "https://www.bdcec.com/", desc: "华北电力行业重要专科院校" },
          { name: "武汉电力职业技术学院", abbr: "武汉电院", url: "https://www.whetc.com/", desc: "华中电力人才培养基地" },
          { name: "郑州电力高等专科学校", abbr: "郑州电专", url: "https://www.zepc.edu.cn/", desc: "河南电力行业专科龙头" },
          { name: "重庆电力高等专科学校", abbr: "重庆电专", url: "https://www.cqepc.com.cn/", desc: "西南电力行业专科院校" },
          { name: "山东电力高等专科学校", abbr: "山东电专", url: "https://www.sdpec.edu.cn/", desc: "山东电力行业专科院校" },
          { name: "西安电力高等专科学校", abbr: "西安电专", url: "https://www.xapc.edu.cn/", desc: "西北电力行业专科龙头" },
          { name: "哈尔滨电力职业技术学院", abbr: "哈电院", url: "https://www.herep.com/", desc: "黑龙江电力行业专科院校" },
          { name: "太原电力高等专科学校", abbr: "太原电专", url: "https://www.tyepc.edu.cn/", desc: "山西电力行业专科院校" },
          { name: "江西电力职业技术学院", abbr: "江西电院", url: "https://www.jxpea.com/", desc: "江西电力行业专科院校" },
          { name: "福建电力职业技术学院", abbr: "福建电院", url: "https://www.fjppc.edu.cn/", desc: "福建电力行业专科院校" },
          { name: "广西电力职业技术学院", abbr: "广西电院", url: "https://www.gxdlzy.com/", desc: "广西电力行业专科院校" },
          { name: "安徽电气工程职业技术学院", abbr: "安徽电院", url: "https://www.aepu.com.cn/", desc: "安徽电力行业专科院校" },
          { name: "清华大学·电机工程与应用电子技术系", abbr: "清华电机系", url: "https://www.ee.tsinghua.edu.cn/", desc: "电气工程顶尖院系" },
          { name: "清华大学·能源互联网研究院", abbr: "清华四川能源互联网研究院", url: "https://www.tsinghua-eei.org.cn/", desc: "能源互联网前沿研究" },
          { name: "西安交通大学·电气工程学院", abbr: "西交大电气", url: "https://ee.xjtu.edu.cn/", desc: "电气工程传统强校" },
          { name: "华中科技大学·电气与电子工程学院", abbr: "华科电气", url: "https://ee.hust.edu.cn/", desc: "电气工程顶尖院系" },
          { name: "浙江大学·电气工程学院", abbr: "浙大电气", url: "https://ee.zju.edu.cn/", desc: "电气工程强校" },
          { name: "上海交通大学·电子信息与电气工程学院", abbr: "上交电院", url: "https://www.seiee.sjtu.edu.cn/", desc: "电气/能源综合强校" },
          { name: "武汉大学·电气与自动化学院", abbr: "武大电气", url: "https://eea.whu.edu.cn/", desc: "电气工程强校" },
          { name: "哈尔滨工业大学·电气工程及自动化学院", abbr: "哈工大电气", url: "https://hitee.hit.edu.cn/", desc: "电气工程强校" },
          { name: "天津大学·电气自动化与信息工程学院", abbr: "天大电气", url: "https://seea.tju.edu.cn/", desc: "电气工程强校" },
          { name: "重庆大学·电气工程学院", abbr: "重大电气", url: "https://ee.cqu.edu.cn/", desc: "电气工程强校" },
          { name: "东南大学·电气工程学院", abbr: "东大电气", url: "https://ee.seu.edu.cn/", desc: "电气工程强校" },
          { name: "厦门大学·中国能源政策研究院", abbr: "厦大能源政策研究院", url: "https://energy.xmu.edu.cn/", desc: "能源经济政策研究" },
          { name: "厦门大学·能源学院", abbr: "厦大能源学院", url: "https://energy.xmu.edu.cn/", desc: "新能源科学研究" },
          { name: "中国科学院·工程热物理研究所", abbr: "中科院工程热物理所", url: "https://www.iet.cas.cn/", desc: "热能/动力工程研究" },
          { name: "中国科学院·电工研究所", abbr: "中科院电工所", url: "https://www.iee.cas.cn/", desc: "电气工程前沿研究" },
          { name: "中国农业大学·信息与电气工程学院", abbr: "中国农大信电", url: "https://ciee.cau.edu.cn/", desc: "农业电气化/新能源" },
          { name: "河海大学·能源与电气学院", abbr: "河海大学", url: "https://ee.hhu.edu.cn/", desc: "水电/新能源强校" },
        ]
      }
    ]
  },

  // ==================== 十七、其他 ====================
  {
    category: "other",
    section: "十七、其他电力相关机构",
    items: [
      { name: "中国电力企业联合会可靠性管理中心", abbr: "可靠性中心", url: "https://www.cec.org.cn/", desc: "电力可靠性管理" },
      { name: "中国电力设备管理协会", abbr: "CPEDA", url: "https://www.cpeda.org.cn/", desc: "电力设备行业组织" },
      { name: "中国电力规划设计协会", abbr: "CPPEA", url: "https://www.cppea.org.cn/", desc: "电力规划设计行业组织" },
      { name: "中国电力建设企业协会", abbr: "CPCEA", url: "https://www.cepca.org.cn/", desc: "电力建设行业组织" },
      { name: "中国电力发展促进会", abbr: "CPDPA", url: "https://www.cpdpa.org.cn/", desc: "电力行业发展促进组织" },
      { name: "中国电力财务有限公司", abbr: "中国电财", url: "https://www.epcfc.com.cn/", desc: "国网旗下非银行金融机构" },
      { name: "英大泰和财产保险股份有限公司", abbr: "英大财险", url: "https://www.ydpic.com.cn/", desc: "国网旗下保险" },
      { name: "英大国际信托有限责任公司", abbr: "英大信托", url: "https://www.ydtrust.com.cn/", desc: "国网旗下信托" },
      { name: "国网英大国际控股集团有限公司", abbr: "国网英大", url: "https://www.gjdd.com.cn/", code: "SH600517", marketCap: "约300亿人民币", desc: "国网旗下金融控股平台" },
    ]
  }
];

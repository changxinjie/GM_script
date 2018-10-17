// ==UserScript==
// @name            AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列
// @name:en         AC-baidu:google_sogou_RedirectRemove_favicon_adaway_TwoLine
// @name:zh         AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列
// @name:zh-CN      AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列
// @name:ja         AC-baidu:重定向最適化Baiduの搜狗Google検索結果のリダイレクト除去+に広告_favicon
// @description     1.繞過百度、搜狗、谷歌、好搜搜索結果中的自己的跳轉鏈接，直接訪問原始網頁-反正都能看懂 2.去除百度的多余广告 3.添加Favicon显示 4.页面CSS 5.添加计数 6.开关选择以上功能
// @description:en  1.bypass the redirect link at baidu\sogou\google\haosou; 2.remove ads at baidu; 3.add Favicon for each website; 4.render your own style; 5.counter; Switch to handle all
// @description:ja  1.迂回Baidu、Sogou、Google、Haosou検索検索結果の中の自分の遷移リンク; 2.Baiduの余分な広告を取り除く; 3.コメントを追加; 4.ページのカスタムCSP; 5.カウントを追加; 6.スイッチは以上の機能を選択します。
// @icon            https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @author          AC
// @create          2015-11-25
// @run-at          document-start
// @version         18.7
// @connect         www.baidu.com
// @include         *://www.baidu.com/*
// @include         *://xueshu.baidu.com/*
// @include         *://www.sogou.com/web*
// @include         *://www.sogou.com/sie*
// @include         *://www.so.com/s?*
// @include         *://*.bing.com/*
// @include         *://encrypted.google.*/search/*
// @include         *://*.google.*/search/*
// @include         *://*.zhihu.com/*
// @namespace       1353464539@qq.com
// @supportURL      https://shang.qq.com/wpa/qunwpa?idkey=a2c2082506abd0b6f32816f05057ccec7febb02e228de769f527bd8c8eb82046
// @home-url        https://greasyfork.org/zh-TW/scripts/14178
// @home-url2       https://github.com/langren1353/GM_script
// @copyright       2017, AC
// @lastmodified    2018-08-10
// @feedback-url    https://shang.qq.com/wpa/qunwpa?idkey=a2c2082506abd0b6f32816f05057ccec7febb02e228de769f527bd8c8eb82046
// @note            2018.08.10-V18.7 推荐升级：修改生效规则，尽量避免弹出提示更新窗口；修复-chrome4x版本的bug；预计下次更新处理高分屏显示界面问题
// @note            2018.08.08-V18.6 更新脚本命名; 尝试解决http没有自动https的问题--------刷版本号
// @note            2018.08.04-V18.5 修复在chrome上脚本偶尔没有生效的问题；修复百度搜索顶部侧移的情况；一定情况下修复双页的分列
// @note            2018.07.25-V18.4 仅做文本说明修改-en-jp; 下次预计修改百度首页的广告问题
// @note            2018.07.25-V18.3 减少了偶尔从首页加载进来的时候样式表没有载入的问题~能遇到部分样式表加载失效的情况很少;优化广告移除
// @note            2018.07.24-V18.2 修复从百度首页加载进入页面时样式表没有载入的问题
// @note            2018.07.24-V18.1 整体优化样式表加载速度-百度和谷歌的界面美化一下就载入了特别快；修复百度搜索的小链接的重定向没有改；修复下划线移除选项的下划线移除模式
// @note            2018.07.21-V18.0 修复搜狗搜索没有获取到真实链接的问题；处理百度重定向速度又快又好；这次更新就支持edge了，同时理论上支持safari，希望测试；其次优化谷歌的界面样式
// @note            2018.07.12-V17.9 修改检测参数，兼容支持Opera浏览器；暂时还是不支持EDGE的链接重定向功能
// @note            2018.07.07-V17.8 修复由于上次更新世界杯界面时导致的shadowDOM关闭，然后广告出现的问题；优化整体去广告规则---有工具何必自己造轮子-本次用了百度自带jquery的查询函数has()
// @note            2018.06.29-V17.7 修复右边栏导致的右侧过高，左侧看不见，以及自定义页面样式丢失的问题
// @note            2018.06.27-V17.6 暂时关闭ShadowDOM的移除功能-尽量保留搜索世界杯功能完善。修复在某些页面上脚本无法运行的情况。新增自定义样式的输入框
// @note            2018.06.26-V17.5 默认关闭右边栏-昨天忘了关闭了
// @note            2018.06.25-V17.4 1.修复谷歌双列问题；2.修复右边栏展示-好些人说去掉之后不好看；3.似乎上个版本又有多次插入导致的页面卡顿情况-再次修复。。。其他的似乎没有了，想起再说
// @note            2018.06.14-V17.3 由于edge中还是不支持返回真实链接，于是暂时屏蔽掉edge浏览器总的请求，等猴子更新了再开启这个功能；connect元素中添加baidu.com避免抽风
// @note            2018.06.13-V17.2 加快查询速度-同时不再弹窗说新连接，无需设置特殊参数；缺点：LOG中会有许多Refused to connect to "xxx": Request was redirected to a not whitelisted URL
// @note            2018.05.25-V17.1 新增支持百度学术的重定向功能
// @note            2018.05.25-V17.0 拆分关键词高亮这个功能，保证功能尽量不交叉，如果需要这个功能的，请安装搜索关键词自动高亮脚本
// @note            2018.05.22-V16.5 尝试缓解内存的问题，避免对其他的进行干扰，同时减少了head标签触发
// @note            2018.05.22-V16.4 彻底拆分双击高亮和自动高亮功能，同时保持两个功能都是关闭状态
// @note            2018.05.22-V16.3 设置添加双击高亮按钮
// @note            2018.05.22-V16.2 不再使用MO方式，百度的原因导致MO彻底无法使用，于是全都用DOM操作来判断吧
// @note            2018.05.21-V16.1 优化ac_redirectstatus高亮的问题; 同时修复了一个高亮关键词的bug；在一个老司机的指点下，添加了referer参数
// @note            2018.05.21-V16.0 谢谢朋友们关心5.20我还是一个人过的很好；大版本：修正计数器的计数问题，修正MO失效之后脚本的触发问题；新增搜索关键词高亮选项，默认关闭
// @note            2018.05.06-V15.3 简单移除好搜的广告
// @note            2018.04.20-V15.2 修复bing的Favicon效果，避免显示在不同行上
// @note            2018.04.04-V15.1 继续尝试修复bug,优化整体页面效果以及谷歌其余页面的效果展示;同时将百度样式写入到#wrapper>#head中去,刷新或者更换页面时就不会异常闪烁并且很平滑了
// @note            2018.04.02-V14.9 更新谷歌整体效果,并尝试修复图片新闻等显示问题的bug
// @note            2018.04.01-V14.8 --日狗问题，忘了改代码，只是更新了说明。。
// @note            2018.04.01-V14.7 经过老司机(没ID)提供的反馈，发现上一版更新的依旧有bug，修复调小触发参数导致的触发没有生效的问题--偶尔双列失效的问题
// @note            2018.04.01-V14.6 经过老司机(没ID)提供的反馈，排查发现chrome上脚本首次载入失效的问题，已经修复
// @note            2018.04.01-V14.5 更新并添加谷歌双列、待测试，如果有问题，可以直接反馈
// @note            2018.03.28-V14.4 移除jquery的require，疑似jquery引起冲突问题，于是彻底弃用jquery来处理页面数据，改用原声JS处理页面
// @note            2018.03.27-V14.3 刷一个版本号，同时优化CSS载入过多的问题，但是载入过慢的问题又出现了，下次处理
// @note            2018.03.26-V14.2 修复由于上次更新过于流畅的bug，同时修正首页的样式显示
// @note            2018.03.25-V14.1 再次抄点代码，借鉴老司机:浮生@未歇的部分优化代码完善已有的（@resource、GM_getResourceText、GM_addStyle），避免页面闪烁一下，同时解决部分css载入重复的问题
// @note            2018.03.23-V14.0 1.尝试修复在百度贴吧和百度知道的文字显示异常的问题; 2.修复编号奇怪的异常问题
// @note            2018.03.18-V13.9 更新谷歌的favicon丢失的问题
// @note            2018.03.04-V13.8 更新图库为https模式，避免那啥显示不安全
// @note            2018.02.16-V13.7 1.新增关闭百度搜索预测；2.新增未知图标时切换； 3.移除百度搜索建议的顶部一条
// @note            2018.01.12-V13.6 1.新增移除右边栏的按钮；2.新增版本显示文字；3.修正favicon位置；4.修复favicon的图片错误时候的值，万年BUG
// @note            2017.12.27-V13.5 修复由于上个版本更新处理白屏，导致的默认标准模式的右侧栏不见了
// @note            2017.12.20-V13.4 感谢ID：磁悬浮青蛙的反馈，已经修复小概率搜索之后点击结果白屏的问题-貌似之前处理过，但是没有彻底处理掉，这次彻底了，改用CSS隐藏
// @note            2017.12.04-V13.3 新增设置，针对百度系列的重定向问题，不常用百度系列的朋友可以开启这个功能
// @note            2017.11.23-V13.2 感谢卡饭坛友@Apollo8511提供反馈，已经修复部分知乎的重定向问题，更多问题可以直接反馈我
// @note            2017.11.22-V13.1 移除百度系的重定向，虽然处理了，但是百度系直连会导致文字无法直接显示，其他直连不影响
// @note            2017.11.17-V12.13 进一步移除百度的广告，右边部分广告的处理和移除
// @note            2017.11.15-V12.12 搜狗的搜索地址又变了，加一个
// @note            2017.11.02-V12.11 新增在手机mobile模式下百度的重定向处理，其余网站以后再说吧，估计没有需求
// @note            2017.10.27-V12.10 1.修复逼死强迫症的问题；2.移除完整模式-避免出现各种拦截；3.修复www.so.com的重定向问题
// @note            2017.09.18-V12.9 更新原因：1.勿忘国耻918；2.更新百度偶尔重定向没成功的问题；3.修复页面的小问题；4.新增文字下划线开关
// @note            2017.09.15-V12.8 紧急修复谷歌上页面卡顿的问题，排查得知为百度规则的扩展出了问题，非常感谢众多朋友的支持，没有你们的反馈就没有这个脚本。修复并移除了百度官方采用的新方式广告模式，貌似只在chrome上出现
// @note            2017.09.13-V12.7 1.修复N年前更新导致的部分网址重定向无效，继续使用GET方法，因为好些网站不支持HEAD方法，获取成功之后就断开，尽量减少了网络开支; 2.修复搜狗的部分搜索异常; 3.修复百度在chrome61上的链接异常问题
// @note            2017.09.13-V12.6 开学之后的第二个版本，修复上次更新导致的百度首页错乱，修复firefox上的触发，修复SuperPreloader的翻页展示
// @note            2017.09.12-V12.5 开学之后的第一个版本，修复在百度上偶尔不触发的问题【从首页搜索的时候触发】，其次在兄弟XXX(我也忘了哪个P_P)的帮助下，修复了偶尔会全屏特殊推广模式的问题
// @note            2017.09.06-V12.4 修复上个版本更新导致的百度知道再次异常问题;更新知乎上的重定向问题-自己的脚本
// @note            2017.09.06-V12.3 修复双列的模式的显示问题，如果有问题希望反馈一下，顺便切换css来源
// @note            2017.09.04-V12.2 特意修复在ViolentMonkey上的设置无效的问题以及在360浏览器上的设置不显示问题
// @note            2017.09.04-V12.1 百度页面直接添加设置入口；360浏览器设置可能在底部页面；支持单列和双列模式，界面更美观from浮生@未歇；可能是最近一段时间的最后版本了，要开学了~~
// @note            2017.09.02-V11.10 添加两个选项，可以选择性移除部分设置
// @note            2017.09.01-V11.9 修复上次更新导致的百度去广告不灵的问题
// @note            2017.08.30-V11.8 新增：1.GM设置栏目中加入设置 2.baidu-使用HEAD方式获取，减少数据传输，搜狗特殊，继续GET方式
// @note            2017.08.29-V11.7 方便朋友们-移除知乎重定向
// @note            2017.08.07-V11.6 调整：移除小绿点，换为点击Favicon或者是计数器弹出窗口，更换为加群链接
// @note            2017.08.06-V11.5 修复，保存异常；预期之后会添加百度搜索页面的大调整
// @note            2017.08.05-V11.4 新增：反馈和建议地址增加
// @note            2017.08.04-V11.3 修复：由于英语不好导致的拼写错误，感谢shj兄弟指出
// @note            2017.08.03-V11.2 新增：谷歌链接新标签打开; 移除搜索结果链接的下划线
// @note            2017.07.22-V11.1 新增了开关模式，可以开启或者关闭某些自己不喜欢的功能，开关在右上角，和SuperPreload共用
// @note            2017.06.25-V10.1 修复上次更新导致的百度去广告的问题
// @note            2017.06.25-V10.0 修复上次更新导致的百度知道再次出现老问题
// @note            2017.06.24-V9.9 更新了翻页的问题，经过多次的尝试应该没有太大问题了
// @note            2017.06.24-V9.8 更新了bing上的图片favicon地址;并且尽量减少了MO触发次数，避免页面卡顿;修复搜狗的重定向问题
// @note            2017.06.23-V9.7 上传错了~重新来，顺带处理了谷歌favicon问题
// @note            2017.06.23-V9.6 修复了谷歌重定向的问题~~我的锅
// @note            2017.06.11-V9.5 不再使用DOM方式来监听页面了，使用timer+MO来处理，极大减少了cpu占用时间和瞬时网速占用
// @note            2017.05.26-V9.4 恢复favicon模式，现在这个脚本基本上全了，有需要以后再说
// @note            2017.05.15-V9.3 暂时移除百度右边侧栏的广告移除模式，准备下次优化好了再继续
// @note            2017.05.12-V9.2 暂时移除谷歌的安全搜索模式，因为很复杂的原因
// @note            2017.05.12-V9.1 暂时移除Favicon的显示，因为这样就杂了，有需要的人自己去装这个脚本吧，保留百度去广告
// @note            2017.05.12-V9.0 集合了去重定向+去广告+Favicon显示
// @note            2017.05.12-V8.7 集合了去广告的脚本，以前的那个去广告的脚本就不用了
// @note            2017.05.12-V8.6 修复谷歌安全搜索的BUG V2
// @note            2017.05.12-V8.4 新增：默认屏蔽谷歌的安全搜索功能
// @note            2017.05.05-V8.3 修复include范围太小导致的百度知道的屏蔽问题
// @note            2017.05.04-V8.2 终于修复了百度知道图片替换了文字的这个大BUG; 顺便处理了superapi.zhidao.baidu.com; 新增谷歌搜索结果重定向去除
// @note            2017.05.04-V8.1 终于修复了百度知道图片替换了文字的这个大BUG，顺便处理了superapi.zhidao.baidu.com
// @note            2017.05.04-V8.0 终于修复了百度知道图片替换了文字的这个大BUG，待测试
// @note            2017.03.28-V7.6 修复在ViolentMonkey上的不支持的问题
// @note            2017.03.28-V7.5 尝试修复chrome上的问题
// @note            2017.03.21-V7.4 尝试处理Edge上不支持的问题，结果发现是Edge本身的TamperMonkey支持有问题
// @note            2017.03.19-V7.3 修复打开百度之后再次点击“百度一下”导致的无法更新重定向问题
// @note            2017.03.19-V7.2 未知原因chrome的MutationObserver无法使用了，继续回归以前的DOMNodeInserted
// @note            2017.02.17-V7.0 修复搜狗的搜索结果重定向问题+改个名字
// @note            2017.02.17-V6.9 修复搜狗的搜索结果重定向问题
// @note            2016.12.10-V6.8 ***
// @note            2016.10.27-V6.7 修复了以前的重复请求，现在的请求数应该小了很多，网络也就不卡了，感觉萌萌哒
// @note            2016.04.24-V6.6 恢复以前的版本，因为兼容性问题
// @note            2015.12.01-V5.0 加入搜狗的支持，但是支持不是很好
// @note            2015.11.25-V2.0 优化，已经是真实地址的不再尝试获取
// @note            2015.11.25-V1.0 完成去掉百度重定向的功能
// @resource        baiduCommonStyle     https://remix.ac.cn/ACFile/CSS/AC_Baidu/baiduCommonStyle.css?t=18.7
// @resource        baiduMyMenuStyle     https://remix.ac.cn/ACFile/CSS/AC_Baidu/baiduMyMenuStyle.css?t=18.7
// @resource        baiduOnePageStyle    https://remix.ac.cn/ACFile/CSS/AC_Baidu/baiduOnePageStyle.css?t=18.7
// @resource        baiduTwoPageStyle    https://remix.ac.cn/ACFile/CSS/AC_Baidu/baiduTwoPageStyle.css?t=18.7
// @resource        googleCommonStyle    https://remix.ac.cn/ACFile/CSS/AC_Baidu/googleCommonStyle.css?t=18.7
// @resource        googleMyMenuStyle    https://remix.ac.cn/ACFile/CSS/AC_Baidu/googleMyMenuStyle.css?t=18.7
// @resource        googleOnePageStyle   https://remix.ac.cn/ACFile/CSS/AC_Baidu/googleOnePageStyle.css?t=18.7
// @resource        googleTwoPageStyle   https://remix.ac.cn/ACFile/CSS/AC_Baidu/googleTwoPageStyle.css?t=18.7
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_setClipboard
// @grant           GM_xmlhttpRequest
// @grant           GM_getResourceText
// @grant           GM_registerMenuCommand
// ==/UserScript==

var needDisplayNewFun = true; // 本次更新是否有新功能需要展示
// 初次：还是采用了setInterval来处理，感觉这样的话速度应该比Dom快，也比MO适用，因为MO需要在最后才能调用，实用性还不如timer
// 之后：还是采用MO的方式来处理
(function () {
    var fatherName = new Array(
        "c-container", //baidu1
        "rc", //google
        "b_algo", //bing1
        "b_ans", //bing2
        "vrwrap", //sogou1
        "rb",//sogou2
        "res-list"//so-360
    );// Favicon放在xx位置
    var isRedirectEnable = true; // 是否开启重定向功能
    var isAdsEnable = true; // 是否开启去广告模式
    var AdsStyleMode_Baidu = 1;// 0-不带css；1-单列靠左；2-单列居中；3-双列居中
    var AdsStyleMode_Google = 1;// 0-不带css；1-单列靠左；2-单列居中；3-双列居中
    var AdsStyleMode = AdsStyleMode_Baidu;// 值 = baidu or = google
    var isFaviconEnable = true; // 是否开启favicon图标功能
    var defaultFaviconUrl = "https://ws1.sinaimg.cn/large/6a155794ly1foijtdzhxhj200w00wjr5.jpg";
    var isRightDisplayEnable = false; // 是否开启右侧边栏
    var doDisableSug = true;
    var isCounterEnable = false; // 是否显示计数器
    var isALineEnable = false;
    var isUserStyleEnable = false;
    var UserStyleText = "";
    var valueLock = false; // 避免数据同时读取和写入时导致的死锁，然后致使页面死循环
    var onResizeLocked = false;
    var sortIndex = 1; // 设置编号值
    var hasNewFuncNeedDisplay = true; // 设置器
    var isGoogleImageUrl = false;

    LoadSetting(); // 读取个人设置信息

    var Stype_Normal; // 去重定向的选择
    var FaviconType; // favicon的选择-取得实际地址-得到host
    var CounterType; // Counter的选择
    var SiteTypeID; // 标记当前是哪个站点[百度=1;搜狗=2;3=好搜;谷歌=4;必应=5;知乎=6;百度学术=7;其他=8]
    var SiteType={
        BAIDU:1,
        SOGOU:2,
        SO:3,
        GOOGLE:4,
        BING:5,
        ZHIHU:6,
        BAIDU_XUESHU:7,
        OTHERS:8
    };
    var BaiduVersion = " V" + GM_info.script.version;
    var insertLocked = false;
    var oldCenter_colWidth = 0;
    if (location.host.indexOf("www.baidu.com") > -1) {
        SiteTypeID = SiteType.BAIDU;
        Stype_Normal = "h3.t>a, #results .c-container>.c-blocka"; //PC,mobile
        FaviconType = ".result-op, .c-showurl";
        CounterType = "#content_left>#double>div[srcid] *[class~=t],[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t],[class~=op_best_answer_question]";
    } else if (location.host.indexOf("sogou") > -1) {
        SiteTypeID = SiteType.SOGOU;
        Stype_Normal = "h3.pt>a, h3.vrTitle>a";
        FaviconType = "cite[id*='cacheresult_info_']";
        CounterType = ".results>div";
    } else if (location.host.indexOf("so.com") > -1) {
        SiteTypeID = SiteType.SO;
        Stype_Normal = ".res-list h3>a";
        FaviconType = ".res-linkinfo cite";
        CounterType = ".results>div";
    } else if (location.host.indexOf("google") > -1) {
        SiteTypeID = SiteType.GOOGLE;
        // FaviconType = "._Rm";
        FaviconType = ".iUh30";
        CounterType = ".srg>div[class~=g] *[class~=r],._yE>div[class~=_kk]";
    } else if (location.host.indexOf("bing") > -1) {
        SiteTypeID = SiteType.BING;
        FaviconType = ".b_attribution>cite";
        CounterType = "#b_results>li[class~=b_ans],#b_results>li[class~=b_algo],#b_results>li[class~=b_algo]";
    } else if (location.host.indexOf("zhihu.com") > -1) {
        SiteTypeID = SiteType.ZHIHU;
    } else if(location.host.indexOf("xueshu.baidu.com") > -1){
        SiteTypeID = SiteType.BAIDU_XUESHU;
    } else {
        SiteTypeID = SiteType.OTHERS;
    }
    if(SiteTypeID == SiteType.GOOGLE && location.href.indexOf("tbm=isch") > 0){
        // 图片站
        isGoogleImageUrl = true;
    }
    try{
        if(SiteTypeID != SiteType.OTHERS){
            document.addEventListener('DOMNodeInserted', function (e) {
                if(e.target != null && e.target.className != null && e.target.className.indexOf("AC-") == 0){ return; } //屏蔽掉因为增加css导致的触发insert动作
                rapidDeal();
            }, false);
        }
    }catch (e){console.log(e);}
    if (isAdsEnable){
        if(SiteTypeID == SiteType.BAIDU) AdsStyleMode = AdsStyleMode_Baidu;
        if(SiteTypeID == SiteType.GOOGLE) AdsStyleMode = AdsStyleMode_Google;
        FSBaidu(); // 添加设置项-单双列显示
    }
    function AutoRefresh(){
        if(!isRightDisplayEnable){
            // 移除右边栏
            AC_addStyle("#content_right{display:none !important;}#content_right td>div:not([id]){display:none;}.result-op:not([id]){display:none!important;}#rhs{display:none;}", "RightRemove");
        }
        if(!isALineEnable){
            AC_addStyle("a,a em{text-decoration:none}", "NoLine");// 移除这些个下划线
        }
        if(isUserStyleEnable){
            AC_addStyle(UserStyleText, "userStyle-AC");// 用户自定义的样式表
        }
        AC_addStyle(
            ".opr-recommends-merge-imgtext{display:none!important;}" + // 移除百度浏览器推广
            ".res_top_banner{display:none!important;}"+ // 移除可能的百度HTTPS劫持显示问题
            ".headBlock{display:none;}" // 移除百度的搜索结果顶部一条的建议文字
            , "AC-special-BAIDU"
        );
        AC_addStyle('#sp-ac-container{z-index:999999!important;text-align:left!important;background-color:white;}#sp-ac-container *{font-size:13px!important;color:black!important;float:none!important;}#sp-ac-main-head{position:relative!important;top:0!important;left:0!important;}#sp-ac-span-info{position:absolute!important;right:1px!important;top:0!important;font-size:10px!important;line-height:10px!important;background:none!important;font-style:italic!important;color:#5a5a5a!important;text-shadow:white 0px 1px 1px!important;}#sp-ac-container input{vertical-align:middle!important;display:inline-block!important;outline:none!important;height:auto !important;padding:0px !important;margin-bottom:0px !important;margin-top: 0px !important;}#sp-ac-container input[type="number"]{width:50px!important;text-align:left!important;}#sp-ac-container input[type="checkbox"]{border:1px solid #B4B4B4!important;padding:1px!important;margin:3px!important;width:13px!important;height:13px!important;background:none!important;cursor:pointer!important;visibility:visible !important;position:static !important;}#sp-ac-container input[type="button"]{border:1px solid #ccc!important;cursor:pointer!important;background:none!important;width:auto!important;height:auto!important;}#sp-ac-container li{list-style:none!important;margin:3px 0!important;border:none!important;float:none!important;}#sp-ac-container fieldset{border:2px groove #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:4px 9px 6px 9px!important;margin:2px!important;display:block!important;width:auto!important;height:auto!important;}#sp-ac-container legend{line-height:20px !important;margin-bottom:0px !important;}#sp-ac-container fieldset>ul{padding:0!important;margin:0!important;}#sp-ac-container ul#sp-ac-a_useiframe-extend{padding-left:40px!important;}#sp-ac-rect{position:relative!important;top:0!important;left:0!important;float:right!important;height:10px!important;width:10px!important;padding:0!important;margin:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;-webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;-moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;opacity:0.8!important;}#sp-ac-dot,#sp-ac-cur-mode{position:absolute!important;z-index:9999!important;width:5px!important;height:5px!important;padding:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;opacity:1!important;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;-moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;}#sp-ac-dot{right:-3px!important;top:-3px!important;}#sp-ac-cur-mode{left:-3px!important;top:-3px!important;width:6px!important;height:6px!important;}#sp-ac-content{padding:0!important;margin:5px 5px 0 0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid #A0A0A0!important;-webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;-moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;}#sp-ac-main{padding:5px!important;border:1px solid white!important;-moz-border-radius:3px!important;border-radius:3px!important;background-color:#F2F2F7!important;background:-moz-linear-gradient(top,#FCFCFC,#F2F2F7 100%)!important;background:-webkit-gradient(linear,0 0,0 100%,from(#FCFCFC),to(#F2F2F7))!important;}#sp-ac-foot{position:relative!important;left:0!important;right:0!important;min-height:20px!important;}#sp-ac-savebutton{position:absolute!important;top:0!important;right:2px!important;}#sp-ac-container .sp-ac-spanbutton{border:1px solid #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:2px 3px!important;cursor:pointer!important;background-color:#F9F9F9!important;-webkit-box-shadow:inset 0 10px 5px white!important;-moz-box-shadow:inset 0 10px 5px white!important;box-shadow:inset 0 10px 5px white!important;}label[class="newFunc"]{color:blue !important;}', "ac-MENU");
    }
    AutoRefresh();
    GM_registerMenuCommand('AC-重定向脚本设置', function () {
        document.querySelector("#sp-ac-content").style.display = 'block';
    });
    function rapidDeal(){
        try{
            if (insertLocked == false && SiteTypeID != SiteType.OTHERS) {
                insertLocked = true;
                setTimeout(function () {
                    insertLocked = false;
                    ShowSetting();
                    ACHandle();
                    AutoRefresh();
                }, 200);
            }
            if(isAdsEnable) {
                removeAD_baidu_sogou();
                FSBaidu(); // 单独不需要定时器
            }
        }catch (e){console.log(e);}
    }
    function ACHandle() {
        if(SiteTypeID == SiteType.OTHERS) return;
        InsertSettingMenu();
        if (isRedirectEnable) {
            if(Stype_Normal != null && Stype_Normal != "") resetURLNormal(document.querySelectorAll(Stype_Normal)); // 百度搜狗去重定向-普通模式【注意不能为document.query..】
            if(SiteTypeID == SiteType.GOOGLE) removeOnMouseDownFunc(); // 移除onMouseDown事件，谷歌去重定向
            removeRedirectLinkTarget(); // 只移除知乎的重定向问题 & 百度学术重定向问题
            safeRemove(".res_top_banner"); // 移除百度可能显示的劫持
        }
        if (isFaviconEnable) {
            addFavicon(document.querySelectorAll(FaviconType)); // 添加Favicon显示
        }
        if(doDisableSug){
            acSetCookie("ORIGIN", 2);
        }else{
            acSetCookie("ORIGIN", "", -1);
        }
        if (isAdsEnable) {
            FSBaidu();
            removeAD_baidu_sogou(); // 移除百度广告
        }else{
            document.querySelector("input[name='sp-ac-a_force_style_baidu']").setAttribute("disabled", "disabled");
            document.querySelector("input[name='sp-ac-a_force_style_google']").setAttribute("disabled", "disabled");
        }
        if (isCounterEnable) {
            addCounter(document.querySelectorAll(CounterType));
        }
    }
    function acSetCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires+";domain=.www.baidu.com";
    }
    function ACtoggleSettingDisplay() {
        // 显示？隐藏设置界面
        setTimeout(function () {
            if (document.querySelector("#sp-ac-content").style.display == 'block'){
                document.querySelector("#sp-ac-content").style.display = 'none';
            }else{
                GM_setValue("version", GM_info.script.version);
                document.querySelector(".ac-newversionDisplay").style.display = 'none';
                document.querySelector("#sp-ac-content").style.display = 'block';
            }
        }, 100);
        return false;
    }
    function ShowSetting() {
        if(SiteTypeID == SiteType.OTHERS) return;
        // 如果不存在的话，那么自己创建一个-copy from superPreload
        if (document.body != null && document.querySelector("#sp-ac-container") == null) {
            var Container = document.createElement('div');
            Container.id = "sp-ac-container";
            Container.style = "position: fixed !important; top: 10%;right: 7%;";
            Container.innerHTML =
                "    <div id='sp-ac-content' style='display: none;'>\n" +
                "        <div id='sp-ac-main'>\n" +
                "        <fieldset id='sp-ac-autopager-field' style='display:block;'>\n" +
                "            <legend title='AC重定向功能相关设置'><a href='https://bbs.kafan.cn/forum.php?mod=viewthread&tid=1865907' target='_blank' style='color: red !important;'>AC-重定向设置"+BaiduVersion+"</a></legend>\n" +
                "            <ul>\n" +
                "                <li><label title='重定向功能的开启与否'><input id='sp-ac-redirect' name='sp-ac-a_separator' type='checkbox' " + (isRedirectEnable ? 'checked' : '') + ">主功能-重定向功能</label>\n" +
                "                </li>\n" +
                "                <li><label title='AC-去广告' ><input id='sp-ac-ads' name='sp-ac-a_force' type='checkbox' " + (isAdsEnable ? 'checked' : '') + ">附加1-去广告功能</label>\n" +
                "                </li>\n" +
                "                <li>" +
                "                    <label title='百度-原始模式' style='margin-left:20px'><input name='sp-ac-a_force_style_baidu' value='0' type='radio' " + (AdsStyleMode_Baidu==0 ? 'checked' : '') + ">百度-原始模式</label>" +
                "                    <label><input title='百度-单列普通' name='sp-ac-a_force_style_baidu' value='1'  type='radio' " + (AdsStyleMode_Baidu==1 ? 'checked' : '') + ">百度-单列普通</label>" +
                "                    <BR/><label title='百度-单列居中' style='margin-left:20px'><input  name='sp-ac-a_force_style_baidu' value='2'  type='radio' " + (AdsStyleMode_Baidu==2 ? 'checked' : '') + ">百度-单列居中</label>" +
                "                    <label title='百度-双列居中'><input  name='sp-ac-a_force_style_baidu' value='3'  type='radio' " + (AdsStyleMode_Baidu==3 ? 'checked' : '') + ">百度-双列居中</label>" +
                "                    <BR/><div style='height: 1px;width:207px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;'></div>"+
                "                    <label title='谷歌-原始模式' style='margin-left:20px'><input name='sp-ac-a_force_style_google' value='0' type='radio' " + (AdsStyleMode_Google==0 ? 'checked' : '') + ">谷歌-原始模式</label>" +
                "                    <label><input title='谷歌-单列普通' name='sp-ac-a_force_style_google' value='1'  type='radio' " + (AdsStyleMode_Google==1 ? 'checked' : '') + ">谷歌-单列普通</label>" +
                "                    <BR/><label title='谷歌-单列居中' style='margin-left:20px'><input  name='sp-ac-a_force_style_google' value='2'  type='radio' " + (AdsStyleMode_Google==2 ? 'checked' : '') + ">谷歌-单列居中</label>" +
                "                    <label title='谷歌-双列居中'><input  name='sp-ac-a_force_style_google' value='3'  type='radio' " + (AdsStyleMode_Google==3 ? 'checked' : '') + ">谷歌-双列居中</label>" +
                "                </li>\n" +
                "                <li><label><input title='AC-添加Favicon' id='sp-ac-favicon' name='sp-ac-a_force' type='checkbox' " + (isFaviconEnable ? 'checked' : '') + ">附加2-Favicon功能</label></li>\n" +
                "                <li><label><label style='margin-left:20px;'>Favicon默认图标：</label><input id='sp-ac-faviconUrl' name='sp-ac-a_force' value='"+defaultFaviconUrl+"' style='width:55%;margin-top:-0.3rem !important;' type='input' " + (isFaviconEnable ? '' : 'disabled=true') + "></label></li>\n" +
                "                <li><label><input title='AC-移除搜索预测' id='sp-ac-sug_origin' name='sp-ac-a_force' type='checkbox' " + (doDisableSug ? 'checked' : '') + ">附加3-移除百度搜索预测(文字自动搜索)</label></li>\n" +
                // 有更新-高亮 <label style=''> ||  style='"+(hasNewFuncNeedDisplay?"color:red !important;font-weight: 100;background-color: yellow;font-weight: 600 !important;":"")+"'
                "                <li><label style='"+(hasNewFuncNeedDisplay?"color:red !important;font-weight: 100;background-color: yellow;font-weight: 600 !important;":"")+"'><input title='AC-显示右侧栏' id='sp-ac-right' type='checkbox' " + ( isRightDisplayEnable? 'checked' : '') + ">附加4-显示右侧栏</label></li>\n" +
                "                <li><label><input title='AC-添加编号' id='sp-ac-counter' name='sp-ac-a_force' type='checkbox' " + (isCounterEnable ? 'checked' : '') + ">附加6-编号功能</label></li>\n" +
                "                <li><label><input title='AC-文字下划线' id='sp-ac-aline' name='sp-ac-a_force' type='checkbox' " + (isALineEnable ? 'checked' : '') + ">附加7-下划线</label></li>\n" +
                "                <li><label><input title='AC-自定义样式' id='sp-ac-userstyle' name='sp-ac-a_force' type='checkbox' " + (isUserStyleEnable ? 'checked' : '') + ">附加8-自定义样式</label></li>\n" +
                "                <li><textarea  id='sp-ac-userstyleTEXT' name='sp-ac-a_force' value='这个是用户自定义样式' style='width:85%;height: 66px;margin-left:30px!important;' type='input'>"+UserStyleText+"</textarea></label></li>\n" +
                "                <li><a target='_blank' href='https://shang.qq.com/wpa/qunwpa?idkey=5bbfe9de1e81a0930bd053f3157aad2dbb3fa7b991ac9f22ea9f2e2f53efde80' style='color:red !important;'>联系作者,提建议,寻求帮助,自定义样式,脚本定制点我</a></li>" +
                "            </ul>\n" +
                "            <span id='sp-ac-cancelbutton' class='sp-ac-spanbutton' title='取消' style='position: relative !important;float: left !important;'>取消</span>\n" +
                "            <span id='sp-ac-savebutton' class='sp-ac-spanbutton' title='保存设置' style='position: relative !important;float: right !important;'>保存</span>\n" +
                "        </fieldset>\n" +
                "        </div>\n" +
                "    </div>";
            try{document.body.appendChild(Container);}catch (e){console.log(e);}
        }
        var allNodes = document.querySelectorAll(".faviconT, .CounterT");
        for (var i = 0; i < allNodes.length; i++) {
            if (allNodes[i].getAttribute('acClick') == null) {
                allNodes[i].setAttribute('acClick', '1');
                try{
                    allNodes[i].addEventListener('click', function (e) {
                        return ACtoggleSettingDisplay();
                    }, true);
                }catch (e){console.log(e);}
            }
        }
        try{
            document.querySelector("#sp-ac-savebutton").addEventListener('click', function (e) {
                // 点击之后的保存功能
                GM_setValue("isRedirectEnable", document.querySelector("#sp-ac-redirect").checked);
                GM_setValue("isAdsEnable", document.querySelector("#sp-ac-ads").checked);
                GM_setValue("AdsStyleMode_Baidu", document.querySelector('input[name="sp-ac-a_force_style_baidu"]:checked').value);
                GM_setValue("AdsStyleMode_Google", document.querySelector('input[name="sp-ac-a_force_style_google"]:checked').value);
                GM_setValue("isFaviconEnable", document.querySelector("#sp-ac-favicon").checked);
                var imgurl = document.querySelector("#sp-ac-faviconUrl").value.trim();
                GM_setValue("defaultFaviconUrl", (imgurl==""||imgurl==null) ? "https://ws1.sinaimg.cn/large/6a155794ly1foijtdzhxhj200w00wjr5.jpg":imgurl);
                GM_setValue("doDisableSug", document.querySelector("#sp-ac-sug_origin").checked);
                GM_setValue("isRightDisplayEnable", document.querySelector("#sp-ac-right").checked);
                GM_setValue("isCounterEnable", document.querySelector("#sp-ac-counter").checked);
                GM_setValue("isALineEnable", document.querySelector("#sp-ac-aline").checked);
                GM_setValue("isUserStyleEnable", document.querySelector("#sp-ac-userstyle").checked);
                GM_setValue("UserStyleText", document.querySelector("#sp-ac-userstyleTEXT").value.trim());
                setTimeout(function () {
                    window.location.reload();
                }, 400);
            }, false);
        }catch (e){}
        try{
            document.querySelector("#sp-ac-cancelbutton").addEventListener('click', function (e) {
                document.querySelector("#sp-ac-content").style.display = 'none';
            }, false);
        }catch (e){}
    }
    function LoadSetting() {
        isRedirectEnable = GM_getValue("isRedirectEnable", true);
        isAdsEnable = GM_getValue("isAdsEnable", true);
        AdsStyleMode_Baidu = GM_getValue("AdsStyleMode_Baidu", 2);
        AdsStyleMode_Google = GM_getValue("AdsStyleMode_Google", 2);
        isFaviconEnable = GM_getValue("isFaviconEnable", true);
        defaultFaviconUrl = GM_getValue("defaultFaviconUrl", "https://ws1.sinaimg.cn/large/6a155794ly1foijtdzhxhj200w00wjr5.jpg");
        doDisableSug = GM_getValue("doDisableSug", true);
        isRightDisplayEnable = GM_getValue("isRightDisplayEnable", false);
        isCounterEnable = GM_getValue("isCounterEnable", false);
        isALineEnable = GM_getValue("isALineEnable", false);
        isUserStyleEnable = GM_getValue("isUserStyleEnable", true);
        UserStyleText = GM_getValue("UserStyleText", "#content_right{\n" +
            "    padding: 20px 15px 15px;\n" +
            "    border-radius: 5px;\n" +
            "    background-color: #fff;\n" +
            "    box-sizing: border-box;\n" +
            "    box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);\n" +
            "    -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);\n" +
            "    -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);\n" +
            "}\n");
        var oldVersion = GM_getValue("version", "");
        if(oldVersion == GM_info.script.version){
            hasNewFuncNeedDisplay = false;
        }else{
            hasNewFuncNeedDisplay = needDisplayNewFun;
        }
    }
    function removeOnMouseDownFunc() {
        try {
            var resultNodes = document.querySelectorAll(".g .rc .r a");
            for(var i=0; i < resultNodes.length; i++){
                var one = resultNodes[i];
                one.setAttribute("onmousedown", ""); // 谷歌去重定向干扰
                one.setAttribute("target", "_blank"); // 谷歌链接新标签打开
            }
        } catch (e) {
            console.log(e);
        }
    }
    function removeRedirectLinkTarget() {
        if(SiteTypeID == SiteType.ZHIHU){
            var nodes = document.querySelectorAll(".RichText a[href*='//link.zhihu.com/?target']");
            for(var i=0; i<nodes.length; i++){
                var url = decodeURIComponent(nodes[i].href.replace(/https?:\/\/link\.zhihu\.com\/\?target=/, ""));
                nodes[i].href = url;
            }
        }else if(SiteTypeID == SiteType.BAIDU_XUESHU){
            var xnodes = document.querySelectorAll("a[href*='sc_vurl=http']");
            for(var j=0; i<xnodes.length; j++){
                var xurl = getUrlAttribute(xnodes[j].href, "sc_vurl", true);
                xnodes[j].href = xurl;
            }
        }
    }
    function AC_addStyle(css, className, addToTarget, isReload){ // 添加CSS代码，不考虑文本载入时间，带有className
        var tout = setInterval(function(){
            /**
             * addToTarget这里不要使用head标签,head标签的css会在html载入时加载，
             * html加载后似乎不会再次加载，body会自动加载
             * **/
            addToTarget = addToTarget || "body";
            isReload = isReload || false;
            if(document.querySelector(addToTarget) != null){
                clearInterval(tout);
                // 如果true 强行覆盖，不管有没有--先删除
                // 如果false，不覆盖，但是如果有的话，要退出，不存在则新增--无需删除
                if(isReload == true){
                    safeRemove("."+className);
                }else if(isReload == false && document.querySelector("."+className) != null){
                    // 节点存在 && 不准备覆盖
                    return;
                }
                var cssNode = document.createElement("style");
                if(className != null) cssNode.className = className;
                cssNode.setAttribute("type", "text/css")
                cssNode.innerHTML = css;
                try{
                    document.querySelector(addToTarget).appendChild(cssNode);
                }catch (e){console.log(e.message);}
            }
        }, 50);
    }

    function getUrlAttribute(url, attribute, needDecode){
        var searchValueS = (url.substr(1) + "").split("&");
        for (var i = 0; i < searchValueS.length; i++) {
            var key_value = searchValueS[i].split("=");
            var reg = new RegExp("^"+attribute+"$");
            if (reg.test(key_value[0])) {
                var searchWords = key_value[1];
                return needDecode?decodeURIComponent(searchWords):searchWords;
            }
        }
    }
    function resetURLNormal(list) {
        for (var i = 0; i < list.length; i++) {
            // 此方法是异步，故在结束的时候使用i会出问题-严重!
            // 采用闭包的方法来进行数据的传递
            var curNode = list[i];
            var curhref = curNode.href;
            var trueUrlNoBaidu = "";
            try{
                var node = curNode.parentNode.parentNode;
                if(node.className.indexOf("result") >= 0){
                    trueUrlNoBaidu = node.querySelector(FaviconType).innerHTML;
                    trueUrlNoBaidu = replaceAll(trueUrlNoBaidu);
                }
            }catch (e){
            }
            if(IsinBaiduBlockLists(trueUrlNoBaidu)){
                document.querySelector("a[href*='"+curhref+"']").setAttribute("ac_redirectStatus", "-2"); // 丢弃特殊的百度自身的地址【百度知道、百度贴吧】
                continue;
            }
            if (list[i] != null && list[i].getAttribute("ac_redirectStatus") == null) {
                list[i].setAttribute("ac_redirectStatus", "0");
                if (curhref.indexOf("www.baidu.com/link") > -1 ||
                    curhref.indexOf("m.baidu.com/from") > -1 ||
                    curhref.indexOf("www.sogou.com/link") > -1 ||
                    curhref.indexOf("so.com/link") > -1) {
                    (function (c_curnode, c_curhref) {
                        var url = c_curhref.replace(/^http:/, "https:");
                        if(SiteTypeID == SiteType.BAIDU && url.indexOf("eqid") < 0){
                            // 如果是百度，并且没有带有解析参数，那么手动带上
                            url = url + "&wd=&eqid=";
                        }
                        var gmRequestNode = GM_xmlhttpRequest({
                            url: url,
                            headers: {"Accept": "*/*", "Referer":c_curhref.replace(/^http:/, "https:")},
                            method: "GET",
                            timeout: 5000,
                            onreadystatechange: function (response) {
                                // 由于是特殊返回-并且好搜-搜狗-百度都是这个格式，故提出
                                DealRedirect(gmRequestNode, c_curhref, response.responseText, "URL='([^']+)'")
                                // 这个是在上面无法处理的情况下，备用的 tm-finalurldhdg  tm-finalurlmfdh
                                if(response.responseHeaders.indexOf("tm-finalurl") >= 0){
                                    var relURL = Reg_Get(response.responseHeaders, "tm-finalurl\\w+: ([^\\s]+)");
                                    if(relURL == null || relURL == "") return;
                                    DealRedirect(gmRequestNode, c_curhref, relURL);
                                }
                            }
                        });
                    })(curNode, curhref); //传递旧的网址过去，读作c_curhref
                }
            }
        }
    }
    function DealRedirect(request, curNodeHref, respText, RegText){
        if(respText == null || typeof(respText)=="undefined") return;
        var resultResponseUrl = "";
        if(RegText != null){
            resultResponseUrl = Reg_Get(respText, RegText);
        } else{
            resultResponseUrl = respText;
        }
        if(resultResponseUrl != null && resultResponseUrl != "" && resultResponseUrl.indexOf("www.baidu.com/link") < 0){
            try{
                if(SiteTypeID == SiteType.SOGOU) curNodeHref = curNodeHref.replace(/^https:\/\/www.sogou.com/, "");
                var changeNodeList = document.querySelectorAll("a[href*='"+curNodeHref+"']");
                for(var i=0; i < changeNodeList.length; i++){
                    changeNodeList[i].setAttribute("ac_redirectStatus", "2");
                    changeNodeList[i].setAttribute("href", resultResponseUrl);
                }
            }catch (e){}
            request.abort();
        }
    }
    function Reg_Get(HTML, reg) {
        var RegE = new RegExp(reg);
        try {
            return RegE.exec(HTML)[1];
        } catch (e) {
            return "";
        }
    }
    function removeAD_baidu_sogou() { // 移除百度自有广告
        if (SiteTypeID == SiteType.BAIDU) {
            // safeRemove(".c-container /deep/ .c-container");
            // 移除shadowDOM广告；搜索关键字：淘宝；然后点击搜索框，广告会多次重现shadowdom
            try{$('.c-container /deep/ .c-container').has('.f13>span:contains("广告")').remove();}catch (e) {}
            try{$('#content_right>div').has('a:contains("广告")').remove();}catch (e) {}
            try{$('#content_right>br').remove();}catch (e) {}
            // 移除标准广告
            try{$('#content_left>div').has('span:contains("广告")').remove();}catch (e) {}
        } else if (SiteTypeID == SiteType.SOGOU) {
            safeRemove("#promotion_adv_container");
            safeRemove("#kmap_business_title");
            safeRemove("#kmap_business_ul");
            try {
                document.querySelector(".rvr-model[style='width:250px;']").style = "display:none";
            } catch (e) {
            }
        }else if (SiteTypeID == SiteType.SO) {
            safeRemove("#so_kw-ad");
            safeRemove("#m-spread-left");
            safeRemove("#m-spread-bottom");
        }else if (SiteTypeID == SiteType.BING) {
            safeRemove(".b_ad");
        }
    }
    function IsNumber(val){
        if(val === "" || val ==null){
            return false;
        }
        if(!isNaN(val)){
            return true;
        }else{
            return false;
        }
    }
    function addCounter(citeList) {
        var cssText = "position:relative;z-index:1;margin-right:4px;display:inline-block;background:#FD9999;color:white;font-family:'微软雅黑';font-size:16px;text-align:center;width:22px;line-height:22px;border-radius:50%;float:left;";
        var div = document.createElement('div');
        for (var i = 0; i < citeList.length; i++) {
            if (citeList[i].getAttribute('sortIndex')) {
                continue;
            } else {
                citeList[i].setAttribute('sortIndex', sortIndex);
                citeList[i].inner = citeList[i].innerHTML;
                if(IsNumber(citeList[i].parentNode.id)){
                    // 如果是百度的数据
                    div.innerHTML = "<div class='CounterT' style=" + cssText + ">" + (citeList[i].parentNode.id % 100) + "</div>";
                    citeList[i].innerHTML = div.innerHTML + citeList[i].inner;
                }else{
                    div.innerHTML = "<div class='CounterT' style=" + cssText + ">" + sortIndex + "</div>";
                    citeList[i].innerHTML = div.innerHTML + citeList[i].inner;
                }
                sortIndex++;
            }
        }
    }
    function safeRemove(cssSelector){
        try {
            document.querySelector(cssSelector).remove();
        }catch (e){
        }
    }

    function replaceAll(sbefore) {
        var send;
        var result = sbefore.split('-');
        if (SiteTypeID == SiteType.SOGOU && location.href.indexOf("sogou") < 20) {
            // --搜狗专用；如果第一个是中文的话，地址就是第二个
            sbefore = result[1];
        }
        send = sbefore.replace(/(\/[^/]*|\s*)/, "").replace(/<[^>]*>/g, "").replace(/https?:\/\//g, "").replace(/<\/?strong>/g, "").replace(/<\/?b>/g, "").replace(/<?>?/g, "").replace(/( |\/).*/g, "");
        return send;
    }
    function IsinBaiduBlockLists(url){
        // if(url == null) return true;
        // if(url.indexOf("zhidao.baidu.com") >= 0) return true;
        // if(url.indexOf("teiba.baidu.com") >= 0) return true;
        return false;
    }
    function addFavicon(citeList) {
        for (var index = 0; index < citeList.length; index++) {
            var url = replaceAll(citeList[index].innerHTML);
            //console.log(index+"."+url);
            if (null == citeList[index].getAttribute("ac_faviconStatus")) {
                if (url == "") {
                    console.log("无效地址：" + citeList[index].innerHTML);
                    citeList[index].setAttribute("ac_faviconStatus", "-1");
                    continue;
                }
                var curNode = citeList[index];
                var faviconUrl = url;
                var II= 0;
                for (; II <= 5; II++) {
                    curNode = curNode.parentNode;
                    if (curNode != null && isInUrlList(curNode.className+"")) {
                        break;
                    }
                }
                //console.log(index+"."+faviconUrl+"--"+II);
                if (II <= 5) {
                    var tmpHTML = curNode.innerHTML;
                    var pos = tmpHTML.indexOf("fav-url")
                        & tmpHTML.indexOf("favurl")
                        & tmpHTML.indexOf("tit-ico")
                        & tmpHTML.indexOf("img_fav rms_img")
                        & tmpHTML.indexOf("c-tool-")
                        & tmpHTML.indexOf("span class=\"c-icon c-icon-");
                    //他自己已经做了favicon了
                    if (pos > -1) {
                        console.log("已有图片：" + faviconUrl);
                        citeList[index].setAttribute("ac_faviconStatus", "-2");
                        continue;
                    }
                    // 特殊处理BING
                    if(SiteTypeID == SiteType.BING) curNode = curNode.querySelector("h2");
                    //https://api.byi.pw/favicon/?url=???? 不稳定
                    //http://"+faviconUrl+"/cdn.ico?defaulticon=http://soz.im/favicon.ico 不稳定
                    //https://www.xtwind.com/api/index.php?url=???? 挂了。。。
                    //https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=sina.cn
                    //www.google.com/s2/favicons?domain=764350177.lofter.com
                    //如果地址不正确，那么丢弃
                    var host = faviconUrl.replace(/[^.]+\.([^.]+)\.([^.]+)/, "$1.$2");
                    if (curNode.querySelector(".faviconT") == null && host.length > 3) {
                        var insNode = document.createElement("img");
                        curNode = curNode.children[0]; //firstChild容易遇到text对象
                        citeList[index].setAttribute("ac_faviconStatus", "1");
                        curNode.insertBefore(insNode, curNode.firstChild);
                        insNode.className = "faviconT";
                        insNode.style = "position:relative;z-index:1;vertical-align:sub;height:16px;width:16px;margin-right:5px;margin-bottom: 2px;";
                        insNode.src = "https://favicon.yandex.net/favicon/" + host;
                        insNode.setAttribute("faviconID", "0");
                        insNode.onload = function (eveNode) {
                            if (eveNode.target.naturalWidth < 16) {
                                eveNode.target.src = defaultFaviconUrl;
                                eveNode.target.onload = null;
                            }
                        };
                    }
                }
            }
        }
        function isInUrlList(url) {
            var leng = fatherName.length;
            for (var i = 0; i < leng; i++) {
                if (url.indexOf(fatherName[i]) >= 0) {
                    return true;
                }
            }
            return false;
        }
    }
    function InsertSettingMenu(){
        if (document.querySelector("#myuser") == null) {
            try{
                var parent = document.querySelector("#u, #gbw>div>div");
                parent.style="width: auto;";
                var userAdiv = document.createElement("a");
                userAdiv.style = "text-decoration: none;";
                userAdiv.innerHTML = "<ol id='myuser' style='display: inline-block;'><li class='myuserconfig' style='display: inline-block;height: 18px;line-height: 1.5;background: #2866bd;color: #fff;font-weight: bold;text-align: center;padding: 6px;'>自定义 <span class='ac-newversionDisplay' style='background-color: red;left: 0px;top: 0px;float: right;height: 8px;width: 8px;border-radius: 4px;display:"+(hasNewFuncNeedDisplay?"unset":"none")+"'>&nbsp;</span></li></ol>";
                parent.insertBefore(userAdiv, parent.childNodes[0]);
                document.querySelector("#myuser .myuserconfig").addEventListener('click', function (e) {
                    return ACtoggleSettingDisplay();
                }, true);
            }catch (e){}
        }
    }
    function FSBaidu() { // thanks for code from 浮生@未歇 @page https://greasyfork.org/zh-TW/scripts/31642
        var keySite = "baidu";
        if(SiteTypeID == SiteType.GOOGLE) keySite = "google";
        var StyleManger = {
            importStyle: function (fileUrl, toClassName, addToTarget, isReload) {
                if(isReload == null) isReload = false;
                if(addToTarget == null) addToTarget = "body";
                if(isReload==false && document.querySelector("."+toClassName) != null){
                    // 已经存在,并且不准备覆盖
                    return;
                }
                if(document.querySelector("#content_left,.bkWMgd") == null) return;
                var ssNode = document.createElement("link");
                ssNode.rel = "stylesheet";
                ssNode.type = "text/css";
                ssNode.className = toClassName;
                ssNode.media = "screen";
                ssNode.href = fileUrl;
                try{document.querySelector(addToTarget).appendChild(ssNode);}catch (e){}
            },
            // // //加载普通样式
            // loadCommonStyle: function () {
            //     this.importStyle("http://127.0.0.1/"+keySite+"CommonStyle.css", "CommonStyle", "#wrapper>#head, .jsrp");
            // },
            // //加载自定义菜单样式
            // loadMyMenuStyle: function () {
            //     this.importStyle("http://127.0.0.1/"+keySite+"MyMenuStyle.css", "MyMenuStyle", "#wrapper>#head, .jsrp");
            // },
            // //加载单页样式
            // loadOnePageStyle: function () {
            //     this.importStyle("http://127.0.0.1/"+keySite+"OnePageStyle.css", "OnePageStyle", "#wrapper>#head, .jsrp");
            //     try{
            //         document.querySelector("#result_logo img").setAttribute("src", "https://ws1.sinaimg.cn/large/6a155794ly1fkx1uhxfz6j2039012wen.jpg");
            //     }catch (e){}
            // },
            // //加载双页样式
            // loadTwoPageStyle: function () {
            //     this.importStyle("http://127.0.0.1/"+keySite+"TwoPageStyle.css", "TwoPageStyle", "#wrapper>#head, .jsrp");
            //     try{
            //         document.querySelector("#result_logo img").setAttribute("src", "https://ws1.sinaimg.cn/large/6a155794ly1fkx1uhxfz6j2039012wen.jpg");
            //     }catch (e){}
            // },
            //加载普通样式
            loadCommonStyle: function () {
                AC_addStyle(GM_getResourceText(keySite+"CommonStyle"), "ACStyle-common", "#wrapper>#head, .jsrp");
                try{
                    document.querySelector("#result_logo img").setAttribute("src", "https://ws1.sinaimg.cn/large/6a155794ly1fkx1uhxfz6j2039012wen.jpg");
                }catch (e){}
            },
            //加载自定义菜单样式
            loadMyMenuStyle: function () {
                AC_addStyle(GM_getResourceText(keySite+"MyMenuStyle"), "ACStyle-mymenu", "#wrapper>#head, .jsrp");
            },
            //加载单页样式
            loadOnePageStyle: function () {
                AC_addStyle(GM_getResourceText(keySite+"OnePageStyle"), "ACStyle-onepage", "#wrapper>#head, .jsrp");
            },
            //加载双页样式
            loadTwoPageStyle: function () {
                AC_addStyle(GM_getResourceText(keySite+"TwoPageStyle"), "ACStyle-twopage", "#wrapper>#head, .jsrp");
            },
            loadExpandOneStyle:function () {
                AC_addStyle(
                    "#content_left .result-op:hover,#content_left .result:hover{box-shadow:0 0 2px gray;background:rgba(230,230,230,0.1)!important;}" +
                    "#content_left .result,#content_left .result-op{width:100%; min-width:670px;margin-bottom:14px!important;}" +
                    ".c-span18{width:78%!important;min-width:550px;}" +
                    ".c-span24{width: auto!important;}", "ACStyle-expand", "#wrapper>#head, .jsrp");
            }
        };
        var ControlManager = {
            twoPageDisplay: function () {
                // 定时查询
                try{
                    setTimeout(function(){
                        if(document.querySelector("#content_left>.c-container:nth-child(even),.srg>.g:nth-child(even)") != null){
                            if (document.querySelector("#content_left>#double,.srg>#double") == null) {
                                // 没有节点那么创建
                                var div = document.createElement("div");
                                div.id ="double";
                                var parent = document.querySelector("#content_left,.srg");
                                parent.insertBefore(div, parent.childNodes[0]);
                                return;
                            }
                            if(document.querySelector("#content_left>.sp-separator, .med>.sp-separator") == null){
                                // 不带翻页情况下
                                var selector = document.querySelectorAll("#content_left>.c-container:not([acdb]),.srg>.g:not([acdb])");
                                var DBP = document.querySelector("#double");
                                for(var i = 1; selector && i < selector.length; i++){
                                    selector[i].setAttribute("acdb", 1);
                                    if(selector[i].offsetTop > DBP.offsetHeight) DBP.appendChild(selector[i]);
                                }
                            }else{
                                // 带翻页情况下
                                var parent = document.querySelector("#content_left>.sp-separator:not([isHandled]), .med>.sp-separator:not([isHandled])");
                                var selector = document.querySelectorAll("#content_left>.sp-separator:not([isHandled])~.c-container:not([acdb]), .med>.sp-separator:not([isHandled])~#ires .g:not([acdb])");
                                try{parent.setAttribute("isHandled", "1");}catch (e){}
                                var DBR = document.querySelector("#double");
                                for(var i = 1; i < selector.length; i++){
                                    selector[i].setAttribute("acdb", 1);
                                    if(selector[i].offsetTop > DBR.offsetTop + DBR.offsetHeight)
                                        DBR.appendChild(selector[i]);
                                }
                            }
                        }
                    }, 50);
                }catch (e){
                    console.log(e);
                }
            },
            //居中显示 --- 必须是百度和谷歌的搜索结果页面，其他页面不能加载的--已经通过脚本include标签限制了一部分
            centerDisplay: function () {
                if(SiteTypeID != SiteType.BAIDU && SiteTypeID != SiteType.GOOGLE) return;
                // 如果是百度：非（包含搜索页面 || 包含left页面）
                if(SiteTypeID == SiteType.BAIDU && (location.href.indexOf(".com/s?") < 0 && document.querySelector("#content_left") ==null)) return;
                var result = AdsStyleMode || null;
                if(document.querySelector(".acCssLoadFlag") == null && valueLock == false){
                    valueLock = true;
                    StyleManger.loadMyMenuStyle();
                    if(result == 1){
                        StyleManger.loadExpandOneStyle();
                        StyleManger.loadCommonStyle();
                    } else if (result == 2) {//单页居中
                        StyleManger.loadExpandOneStyle();
                        StyleManger.loadCommonStyle();
                        StyleManger.loadOnePageStyle();
                    } else if (result == 3) { //双页居中
                        this.twoPageDisplay();
                        StyleManger.loadTwoPageStyle();
                        StyleManger.loadCommonStyle();
                    }
                    setTimeout(function() {
                        valueLock = false;
                    }, 30);
                }
            },
            init: function () {
                if(isGoogleImageUrl) return;
                this.centerDisplay();
            }
        };
        ControlManager.init();
        function mutationfunc() {
            ControlManager.init();
            try{window.onresize();}catch (e){}
            if(document.querySelector("#double") != null){
                setTimeout(function(){ // 动态设置底部推荐关键字的marginTop属性
                    try{
                        document.querySelector("#container #rs div").parentNode.style.marginTop = Math.max(document.querySelector("#double").offsetHeight, document.querySelector("#content_left").offsetHeight)-document.querySelector("#content_left").offsetHeight+"px";
                    }catch (e){}
                }, 1200);
            }
        }
        if(AdsStyleMode > 0){
            try{
                window.onresize = function() {
                    setTimeout(function () {
                        try {
                            var width = document.documentElement.clientWidth;
                            if (AdsStyleMode == 2)// 单列居中模式
                                width -= 200;
                            if(oldCenter_colWidth == width) return;
                            if(onResizeLocked == false && !isGoogleImageUrl){
                                onResizeLocked = true;
                                AC_addStyle("#rhscol{min-width:"+width+"px !important;}#center_col{width:"+width+"px !important;margin-left: unset !important;margin-right: unset !important;}#center_col>*{padding-left:8%;padding-right:8%;}", "AC-Style-bkWMgd", null, true);
                                setTimeout(function(){onResizeLocked = false; }, 20);
                            }
                            var BaiduMarLeft = width * 0.5 - 480;
                            var GoogleMmarLeft = width * 0.34 - 480;
                            if (AdsStyleMode == 2) {
                                // 百度居中
                                document.querySelector("#bottomads~#extrares").style = "margin-left:" + BaiduMarLeft + "px !important";
                                document.querySelector("#foot").style = "margin-left:" + (BaiduMarLeft - 150) + "px !important";
                                // 谷歌居中
                                document.querySelector(".tsf-p>.logocont").style = "margin-left:" + (GoogleMmarLeft - 96) + "px !important";
                                document.querySelector(".tsf-p>.sfibbbc").style = "margin-left:" + (GoogleMmarLeft - 96) + "px !important";
                            }
                            oldCenter_colWidth = width;
                        } catch (e) {
                        }
                    }, 50);
                }
            }catch (e) {
                // console.log(e);
            }
        }
        mutationfunc();
    }
})();
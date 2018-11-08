/*DOCTYPE（文档类型）的作用是什么: 
    激活各种渲染模式

浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？
标准：按照W3C的标准解析执行代码，怪异：按照浏览器的自己的方式解析执行代码；几乎标准：Firefox1+的设定的，类似于标准模式。
产生的历史原因是啥： w3c标准出台以前，浏览器对页面的渲染上没有同意的规范；产生了差异；
w3c标准出台以后，浏览器采用了标准，为了兼容以前的，保留了两种渲染方法；
怪异模式有哪些怪异的行为：
判断浏览器模式： window.top.document.compatMode。

使用data-属性有什么好处？
    HTML5增加了一个新特性——data-*自定义属性。

    可以往HTML标签上添加任意以 "data-"开头的属性，这些属性在页面上是不显示的，即不会影响到页面布局和风格，但它却是可读可写的。

    使用data-*自定义属性可以解决自定义属性混乱无管理的现状。

    传统的自定义属性的值：   a.setAttribute("abc","123465");  console.log(getAttribute("abc"));
    data-* 用dataset来设置和获取data-*的属性

如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？
    标签及属性
    地理位置
    画布
    视频
    音频
    拖放
    微数据
    应用缓存
    Web存储
    web workers
    服务器发送事件

cookies、sessionStorage 和localStorage 的区别：
    用户数据储存在客户端的方式
    cookies,session都是用来跟踪浏览器用户身份的会话方式
    区别：    
        保持状态： cookie保存在浏览器端， session保存在服务器端
        使用方法： cookie机制：不在浏览器设置时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束（简称会话cookie）；
                  如果设置了时间，cookie别保存在硬盘中，关闭浏览器，cookie数据仍在，直到过期时间结束才消失
                  只能保存字符串类型，以文本的方式，单个cookie保存的数据不超过4kb，安全性低 
                  判断用户是否登录过网站，（自动登录或记住密码） 保存上次登录的时间，查看的页面 浏览计数


    cookie的 存 取 删 检查 的封装
    var cookie = {
        setCookie: function(key, value, expires, path, domain, secure){
            var cookieText = "",
            expires = expires * 1000 * 60 * 60 * 24;
            var expires_data = new Date(new Date().getTime() + expires);
            cookieText += encodeURLComponent(key) + "=" + encodeURLCompent(value);
            if(expires) {
                cookieText += "; expires =" + expires_date.toGMTString();
            };
            if(path) {
                cookieText += "; path=" + path;
            };
            if(domain) {
                cookieText += "; domain=" + domain
            };
            if(secure) {
                cookieText += "; secure"
            };
            document.cookie = cookieText 
        },
        getCookie: function(key) {
            var cookieName = 
            (key) + "=";
            var cookieStart = document.cookie.indexOf(cookieName);
            var cookieValue = '';
            if(cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf(";", cookieStart);
                if(cookieEnd == -1) {
                    cookieEnd = document.cookie,length;
                }
                cookieValue = decodeURLComponent(
                    document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
                );
            }
            return cookieValue
        },
        clearCookie: function(key) {
            this.setCookie(key, "", -1);
        },
        checkCookie: function(key) {
            var value =  this.getCookie(key);
            if(value == "" || value == null) {
                return false;
            }else {
                return true; 
            }
        }
    }
    localStorage 和 sessionStorage 存 取 删
    const storage = {
        setLocal:  function(key, value) {
            window.localStorage.setItem(key, JSON.stringify(value))
        },
        getLocal: function(key) {
            let value = window.localStorage.getItem(key);
            return JSON.parse(value)
        },
        setSession: function(key, value) {
            window.sessionStorage.setItem(key, JSON.stringify(value))
        },
        getSession: function(key) {
            return JSON.parse(window.sessionStorage.getItem(key))
        },
        clearOneLocal: funtion(key) {
            window.localStorage.removeItem(key)
        },
        clearAllLocal: function(key) {
            window.localStorage.clear()
        }
    };

    请解释 <script>、<script async> 和 <script defer> 的区别
    没有defer async 属性， 浏览器会立即加载并执行相应的脚本，也就是说在渲染script标签之后的文档之前，不等待后续加载的文档内容，读到就开始加载和执行，此举会阻塞后续文档的加载。
    async 后续文档的加载和渲染与js脚步的加载和执行是并行进行的，即异步执行
    defer 加载后续文档的过程和JS脚步的加载（此时仅加载不执行）是并行进行的（异步），JS脚步的执行需要等到文档所以元素解析完成之后，DOMContentLoaded事件触发执行之前

    请问 “resetting” 和 “normalizing” CSS 之间的区别？你会如何选择，为什么？
    Normalize.css 是一个可定制的 CSS 文件，使浏览器呈现的所有元素，更一致和符合现代标准；是在现代浏览器环境下对于CSS reset的替代。 它正是针对只需要统一的元素样式。该项目依赖于研究浏览器默认元素风格之间的差异，精确定位需要重置的样式。

    normalizing：
    保护有用的浏览器默认样式而不是完全去掉它们
    一般化的样式：为大部分HTML元素提供
    修复浏览器自身的bug并保证各浏览器的一致性
    优化CSS可用性：用一些小技巧
    解释代码：用注释和详细的文档来

    Normalize.css 保护了有价值的默认值：
    Reset通过为几乎所有的元素施加默认样式，强行使得元素有相同的视觉效果。相比之下，Normalize.css保持了许多默认的浏览器样式。这就意味着你不用再为所有公共的排版元素重新设置样式。当一个元素在不同的浏览器中有不同的默认值时，Normalize.css会力求让这些样式保持一致并尽可能与现代标准相符合

    清楚浮动：
    一： <div class="clearfloat">    css: .clearfloat:after{display:block;clear: both; content: "";visibility: hidden; height: 0} .clearfloat {zoom: 1}
          <div></div>
          <div></div>
        </div>
    二：<div>
          <div></div>
          <div></div>
          <div class="clearfloat"></div>    css: .clearfloat {clear: both} 布局会多出多个div
        </div>
    三：当高度固定的时候，给父级一个固定的高度
    四：当定义宽度是的时候，不能定义高度 不能跟position一起用 css: 父级 {width: 98%,overflow:hidden}
    
    图片替换文字方案:
     <div class="content"><sapn>这是一个图片替换文字方案</sapn></div> css: .content{background: url() top left no-repeat; width: 100px; heigh: 100px;} span {display: none}

    
*/
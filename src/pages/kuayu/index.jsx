class Kuayu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  /*JSONP跨域
    原理： 利用<script> 标签没有跨域限制的漏洞 通过<script>标签指向一个需要访问的地址并提供一个回调函数来接受数据当需求通讯
    <script src="http://domani/api?param1=a&callback=jsonp"></script>
    <script>
     function jsonp (data) { 
         console.log(data)
     }
    </script>
    (简单 兼容性不错 但是只限于get请求)*/
    //封装自己的JSONP
    jsonp = (url, jsonpcallback, success) => {
        let script = document.createElement("script");
        script.url = url;
        script.async = true;
        script.type = "text/javascript";
        window[jsonpcallback] = data = () => {
            success && success(data)
        };
        document.body.appendChild(script) 
    }
    // jsonp(
        "http://xxx";
        "callback";
        function(value){
            console.log(value)
        }
    // )
    /*
    CORS
    CORS背后的思想，就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是应该失败
    IE: var xdr = new XDomainRequest();
        xdr.onload = function () {
            console.log(xdr.responseText);
        }
        xdr.open('get', 'http://www.baidu.com.cn');
        ...
        xdr.send(null)
     */
  render() {
    return "";
  }
}

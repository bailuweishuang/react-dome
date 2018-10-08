/*DOCTYPE（文档类型）的作用是什么: 
    激活各种渲染模式
浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？
标准：按照W3C的标准解析执行代码，怪异：按照浏览器的自己的方式解析执行代码；几乎标准：Firefox1+的设定的，类似于标准模式。
产生的历史原因是啥： w3c标准出台以前，浏览器对页面的渲染上没有同意的规范；产生了差异；
w3c标准出台以后，浏览器采用了标准，为了兼容以前的，保留了两种渲染方法；
怪异模式有哪些怪异的行为：
判断浏览器模式： window.top.document.compatMode
*/
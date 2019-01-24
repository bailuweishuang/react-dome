import React from "react";
import "./style.scss";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {
    //适合用事件委托的事件：click，mousedown，mouseup，keydown，keyup，keypress
    window.onload = () => {
      let ul = document.getElementById("ul");
      let btn = document.getElementById("btn");
      let mun = 4;

      ul.addEventListener("click", e => {
        let ev = e || window.event;
        let target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == "li") {
          switch (target.id) {
            case "one":
              console.log(1);
              break;
            case "two":
              console.log(2);
              break;
            default:
              console.log(3);
          }
        }
      });
      ul.addEventListener("mouseover", e => {
        let ev = e || window.event;
        let target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == "li") {
          switch (target.id) {
            case "one":
              target.style.background = "yellow";
              break;
            case "two":
              target.style.background = "red";
              break;
            default:
              target.style.background = "blue";
          }
        }
      });
      ul.addEventListener("mouseout", e => {
        let ev = e || window.event;
        let target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == "li") {
          target.style.background = "#ccc";
        }
      });
      btn.addEventListener("click", () => {
        mun++;
        let a = document.createElement("li");
        a.innerHTML =
          "<input id='input'></input>" + '<span id="delete">删除</span>';
        ul.appendChild(a);
        let arr = document.querySelectorAll("#input");
        [...arr].map((item, index) => {
          item.value = index
        })
      });
      ul.addEventListener("click", e => {
        let ev = e || e.event;
        let target = ev.target || ev.srcElement;
        if (target.id.toLowerCase() == "delete") {
          target.parentNode.parentNode.removeChild(target.parentNode);
        }
      });
    };
  }
  welcome = username => {
    console.log(username)
  }
  goodbye = username => {
    console.log(username)
  }

  render() {
    return (
      <div className="mine">
        我的
        <p className="mine-title">想和你哭 想和你笑 想拥你入我怀抱 这是一个传说</p>
        <ul id="ul">
          <li id="one">
            1<span id="delete">删除</span>
          </li>
          <li id="two">
            2<span id="delete">删除</span>
          </li>
          <li id="three">
            3<span id="delete">删除</span>
          </li>
          <li in="four">
            4<span id="delete">删除</span>
          </li>
        </ul>
        <button id="btn">添加</button>
      </div>
    );
  }
}
export default Home;

import React from "react";
import "./style.scss";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <div className="mine" onClick={()=>{
          this.props.history.push("/")
          }}>
        我的
        <p className="mine-title">想和你哭 想和你笑 想拥你入我怀抱 这是一个传说</p>
      </div>
    );
  }
}
export default Home;

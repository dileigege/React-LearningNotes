/*
 * @Descripttion:
 * @version:
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2020-11-30 17:53:03
 * @LastEditors: Oneself
 * @LastEditTime: 2020-12-01 13:41:09
 * @Statu: TODO:
 */
import React from "react";
import ReactDOM from "react-dom";
import HeaderComponents from "./components/header";
import "./assets/css/app.css";

//
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      data: [
        { id: 1, title: "html" },
        { id: 2, title: "css" },
        { id: 3, title: "JS" },
      ],
    };

    this.ClickIsShow = this.ClickIsShow.bind(this);
  }
  componentDidMount() {}
  ClickIsShow() {
    this.setState({ isShow: !this.state.isShow });
  }
  render() {
    return (
      <div className="App">
        <HeaderComponents></HeaderComponents>
        {this.state.isShow ? <div className="judge"></div> : ""}
        {this.state.isShow && <div className="judge"></div>}
        <button type="button" onClick={this.ClickIsShow}>显示 \ 隐藏</button>
        <div>
          {this.state.data.map((item, index) => {
            return (
              <p key={index}>
                <span>{item.title}</span>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

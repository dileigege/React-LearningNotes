/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2020-11-30 17:53:03
 * @LastEditors: Oneself
 * @LastEditTime: 2020-12-01 11:18:44
 * @Statu: TODO: 
 */
import React from 'react';
import ReactDOM from 'react-dom'
import HeaderComponents from './components/header'
// 
class App extends  React.Component{
  componentDidMount(){
    // console.log(document.getElementById('forData'))
    console.log(this.refs['forData'])
    console.log(ReactDOM.findDOMNode(document.getElementById('herder')))
  }
  render(){
    let name = '你好呀';
    let conter ="<span style='color:#FF0000'> 我是html </span>";
    
    return (  
      <div className="App">
        {/* JSX语法 */}
        {name}
        {/* JSX */}
        <div dangerouslySetInnerHTML={{__html:conter}}></div>
         {/* ref JSX */}
        <div ref="forData"> 获取数据 </div>
        <HeaderComponents></HeaderComponents>
      </div>
    );
  }
}

export default App;

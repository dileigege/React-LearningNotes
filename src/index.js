/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2020-11-30 17:53:03
 * @LastEditors: Oneself
 * @LastEditTime: 2020-12-01 10:44:43
 * @Statu: TODO: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common/public.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render( <App />,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

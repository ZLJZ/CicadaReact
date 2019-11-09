/*
import React from 'react';
作用：让构建工具在当前模块中能够识别jsx
因为jsx是一种类似于html标签的模板语言，如果不导入，也就是说将不能识别标签
*/
import React from 'react';
/*
import ReactDOM from 'react-dom';
render方法的作用:将react组件渲染进DOM元素对象
两个参数：
param1：react组件（这里的div可以理解为一个最简单的react组件）
param2：DOM元素对象（这里的root为index.html中写好的一个元素）
*/
import ReactDOM from 'react-dom';

/*引入HelloWorld组件 */
// import HelloWorld from './helloWorld';

/*引入App组件 */
import App from './App.jsx'
// import './index.css';//del*
// import App from './App';//del*
// import * as serviceWorker from './serviceWorker';//del*

ReactDOM.render(<App />,document.getElementById('root'));

// ReactDOM.render(<HelloWorld name1 = "Cicada1" name2 = "Cicada2"/>,document.getElementById('root'));
// ReactDOM.render(<HelloWorld name = "Cicada"/>,document.getElementById('root'));
// ReactDOM.render(<HelloWorld/>,document.getElementById('root'));
// ReactDOM.render(<div>Hello world!</div>,document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();//del*

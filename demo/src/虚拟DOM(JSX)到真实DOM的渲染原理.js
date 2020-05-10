import React from 'react';
import {render} from 'react-dom';

/**
 * 虚拟DOM(JSX)到真实DOM的渲染原理
 * 1.把JSX基于BABEL-PRESET-REACT-APP语法解析包变为CREATE-ELEMENT格式
 * https://www.babeljs.cn/repl
 * =>每当遇到一个元素标签都会CREATE-ELEMENT
 * =>React.createElement([标签名],[PROPS|null],...)有几个子节点，从第
 * 三个实参开始分别是每一个子节点的处理(文本节点直接就是文本内容，元素节点还需要再一次React.createElement处理)
 * 
 * 2.执行CREATE-ELEMENT
 * =>返回一个对象 
 *      {
 *        $$typeof:Symbol(react.element),
 *        key:null,
 *        ref:null,
 *        type:标签名/组件,
 *        props:{
 *            xxx:xxx，  //给元素标签上设置的属性(REF/KEY除外)，没有子节点则没有children选项，有子节点才有children，
 *                     //只有一个子节点它的值是单个值。如果有多个子节点，它的值是一个数组
 *            children: 单个值(字符串/对象)或者数组
 *          }            
 *      }
 * 3.基于REACT-DOm.RENDER把生成的对象变为真实的DOM,最后渲染到浏览器页面的指定容器中
 */

render(<div className="box" id="box" index="1">
    珠峰培训
    <span className="text">
      欢迎大家来学习
      <i></i>
    </span>
</div>,document.getElementById('root'));

/**
 * 执行顺序肯定是先把最底层的CREATE-ELEMENT执行，执行完依次执行外层的CREATE-ELEMENT
 */
// React.createElement("div",{
//   className:"box",
//   id:"box",
//   index:1
// },'珠峰培训',React.createElement("span",{
//   className:"text"
// },"欢迎大家来学习",React.createElement("i",null)));

// console.log(React.createElement("i",null));
console.log(React.createElement("span",{
  className:"text"
},"欢迎大家来学习",React.createElement("i",null)));
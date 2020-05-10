import React from 'react';
import ReactDOM from 'react-dom';

let data = [
  {id:1,name:'珠峰培训'},
  {id:2,name:'前端就业'}
]
ReactDOM.render(
  <React.StrictMode>
    <div>你好，世界！
      <ul>
        {
          data.map(item=>{
            /*jsx要求循环绑定的元素都要设置一个属性key,存储的值是当前循环中的唯一值(key是DOM DIFF时候的重要凭证，key值一般不要设置为循环的索引，而是设置为某一个具体不变的值) */
          return <li key={item.id}><span>{item.id}</span><span>{item.name}</span></li>
          })
        }
      </ul>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

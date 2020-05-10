import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            n:100
        }
        console.log(this.props);
    }
    render(){
        return <div>
           {this.props.flag}
        </div>;
    }
}

//再创建一个组件
class Test extends React.Component {
    //不想写constructor，就写state = {}
    state = { x:0 }
      render(){
          return <div>
              {
                  /**
                   * 第一次渲染Test视图，会新创建一个Clock(执行clock完整生命同期)
                   * 当Test重新渲染的时候，也让clock子组件重新渲染，把最新的属性传递给clock（但不是重新创建,组件没有销毁），clock中的钩子函数不会从constructor重新执行
                   */
              }
              <Clock flag={this.state.x}/>
              <button onClick={_=>{
                  let x = this.state.x;
                  this.setState({x:x+1});
              }}>点我啊~</button>
          </div>;
      }
      //当父组件重新渲染，子组件也会重新渲染，首先触发此钩子函数
      componentWillReceiveProps(nextProps){
          console.log('componentWillReceiveProps')
      }

      shouldComponentUpdate(nextProps,nextState){
          console.log('shouldComponentUpdate');
          return true;
      }
}

ReactDOM(<Test />,
    document.getElementById('root'));
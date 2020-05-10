import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
class Clock extends React.Component{
    //1.处理属性(获取默认值和校验传递属性的类型)
    static defaultProps = {
        title:'北京时间'
    };
    static propTypes = {
        title:PropTypes.string
    };
    //2.处理状态(执行constructor获取初始的状态信息。如果没有constructor,就找state={})
    // state = { n:100 };  //this.state = {}; 和写constructor一致
    constructor(props){
        super(props);
        this.state = {
            n:100
        }
        console.log("=====>constructor");
    }
    //3.componentWillMount:第一次组件渲染之前
    componentWillMount(){
        //从服务器获取数据(把获取的数据重新赋值给状态或者存放到redux中)
        console.log("=====>componentWillMount");
    }
    //4.render：第一次或者重新进行视图的渲染
    render(){
        console.log("=====>render");
        return <div onClick={()=>{
            //修改状态信息
            this.setState({
                n:this.setState.n++
            });
            {this.setState.n}
        }}>
           {this.state.n}
        </div>;
    }
    //5.componentDidMount:第一次渲染完成
    //只要组件不重新销毁，componentWillMount、componentDidMount、constructor或state={}只执行一次
    //和vue里的data一样，只要组件不销毁，data只执行一次(除非重新销毁，重新创建)
    componentDidMount(){
        //此处可以获取到DOM了
        console.log("=====>componentDidMount");
    }

    //6.更新状态后
    //6.1是否应该更新(组件性能优化)
    shouldComponentUpdate(nextProps,nextState){
        /**
         * 当我们执行setState操作，首先触发的是当前钩子函数
         * ths.state当前的状态(改之前的状态)
         * nextState即将要修改的状态信息
         * this.props和nextProps状态一样的意思
         * 钩子函数返回true代表允许重新渲染视图，反之false则停止继续渲染视图
         */
        console.log("=====>shouldComponentUpdate",this.props,this.state,nextProps,nextState);
        return true;
    }
    //7.更新之前
    componentWillUpdate(){
        console.log("=====>componentWillUpdate");
    }
    //8.render函数(重新渲染视图)

    //9.更新之后
    componentDidUpdate(){
        console.log("=====>componentDidUpdate");
    }

}
render(
    <div>
        <Clock></Clock>
    </div>,
    document.getElementById('root'));
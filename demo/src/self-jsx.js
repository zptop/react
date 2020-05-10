/**
 * createElement:创建一个虚拟DOM对象
 */
export function createElement(type,props,...childs){
    let jsxObj = {
        type,
        props:{},
        key:null,
        ref:null
    };
    if(props){
        //处理key和ref
        if(props.hasOwnProperty('key')){
            jsxObj.key = props.key;
            delete props.key;
        }
        if(props.hasOwnProperty('ref')){
            jsxObj.ref = props.ref;
            delete props.ref;
        }
        jsxObj.props = Object.assign(jsxObj.props,props);
    }

    return jsxObj;
}

/**
 * render:把虚拟DOM变成真实DOM
 */
export function render(){

}
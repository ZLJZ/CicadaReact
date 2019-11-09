import React,{Component} from 'react'

/*
创建一个helloWorld函数，并返回一段html代码 
定义函数：const（不加会报undifine）
此种方式将props放在函数参数中
*/
// const HelloWorld = (props) => {
//     console.log(props);
//     return <div> {props.name} say: helloWorld </div>
// }


/*------------------------------------------------------------------------ */
/*
通过继承react的Component对象来创建组件，创建方式是利用ES6的class语法来生成
render方法，是Component中专门提供的用来处理jsx模板的方法
此种方式接收传入进来的参数，使用的是this.props，此种方式，将props挂载在实例对象上

*/
// class HelloWorld extends Component {
//     clickEvent = () => {
//         console.log(this.props);
//         console.log(this.props.name);
//     }

//     render(){
//         return <div onClick = {this.clickEvent}> {this.props.name} say:hello world </div>
//     }

// }



/*------------------------------------------------------------------------- */
/*
    state = {}
    其实是将state写入了构造函数中，等同于构造函数中的
    this.state = {}

    react赋予state的特性：
    this.setState
    当state被修改时，会引起组件的重新渲染，即render方法会重新执行一次
    setState方法是异步的，不会立即执行，会在下一轮事件循环中执行
    */
// class HelloWorld extends Component {
//     state = {
//         //给默认值
//         switch : 0,
//         name : this.props.name1
//     }

//     clickEvent = () => {
//         const {name1,name2} = this.props;
//         switch (this.state.switch) {
//             case 0:              
//                     console.log(name1);
//                     this.setState({
//                         switch : 1,
//                         name : name2
//                     })
                
//                 break;
//             case 1:               
//                     console.log(name2);
//                     this.setState({
//                         switch : 0,
//                         name : name1
//                     })
                
//             break;       
//             default:
//                 break;
//         }
//     }

//     render(){
//         return <div onClick = {this.clickEvent}> {this.state.name} say:hello world </div>
//     }

// }

/*------------------------------------------------------------------------ */

/*
在jsx中，我们可以给元素添加ref属性，而拥有ref属性的元素，会统一放在组件对象的refs中
可以通过this.refs访问真实的DOM
*/
// class HelloWorld extends Component {

//     clickEvent = () => {
//         console.log(this.refs);
//     }

//     render(){
//         return (
//             <div className = "container" onClick = {this.clickEvent}>
//                 <div ref = "helloRef" className = "hello"> Hello </div>
//                 <div ref = "worldRef" className = "world"> World </div>
//             </div>
//         )
        
//     }

// }

/************************************************************************** */
/*
ref的值不仅仅可以为一个名字，还可以是一个回调函数，这个函数会在render渲染时执行，
也就是说，每当render执行一次，ref的这个回调函数也会执行一次
*/
class HelloWorld extends Component {

    clickEvent = () => {
        console.log(this.refs);
    }

    refCallBack = e => {
        console.log(e);
    }

    render(){
        return (
            <div className = "container" onClick = {this.clickEvent}> 
                <div ref = "helloRef" className = "helloClassName"> Hello </div>
                <div ref = {this.refCallBack} className = "worldClassName"> World </div>
            </div>
        )
    }

    /*组件第一次渲染完成前 */
    UNSAFE_componentWillMount() {

    }

    /*
    组建第一次渲染完成后 
    此时组件已被渲染成真实的DOM插入到html中
    此时使用ref可以获取到真实的元素
    我们通常使用ajax去获取数据，数据请求的行为，最适合放在这里执行
    */
    componentDidMount() {
        console.log(this.refs);
    }

    /*接收到一个新的state或者props时，在重新render之前调用 */
    UNSAFE_componentWillUpdate() {

    }

    /*组件完成更新之后调用 */
    componentDidUpdate() {

    }

    /*组件取消挂载之前调用 */
    componentWillUnmount() {

    }

}


/*将HelloWorld函数作为对外的接口暴露出来*/
export default HelloWorld;
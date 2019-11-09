import React,{Component} from 'react'
import Button from './Button'
import Dialog from './Dialog'
import './style.css'


/*
  App组件的state中：
  loading：用来判断Button按钮是否显示loading图标
  dialog：用来判断是否需要显示弹窗
  message：用来表示弹窗的提示内容

  自定义的钩子函数submit和close，则分别是与子组件Button和Dialog交互的桥梁
  想要在子组件中改变父级的状态，就需要在父组件中创建钩子函数，传给子组件执行的方式来完成
*/
class App extends Component {
  state = {
    loading : false,
    dialog : false,
    message : 'xxx'
  }

  submit = () => {
    this.setState({
      loading : true
    })

    //模拟网络请求（假设1秒后请求完毕）
    setTimeout(() => {
      const res = Math.random(1);
      if (res > 0.5) {//假设大于0.5为成功
        this.setState({
          dialog : true,
          message : '提交成功！'
        })
      } else {
        this.setState({
          dialog : true,
          message : '提交失败！'
        })
      }
      this.setState({
        loading : false
      })
    },1000)

  }

  close = () => {
    this.setState({
      dialog : false
    })
  }

  render () {
    const {loading,dialog,message} = this.state;
    return (
      <div className = "app-wrap">
        <Button loading = {loading} submit = {this.submit}> 提交 </Button>
        {dialog && <Dialog message = {message} close = {this.close}/>}
      </div>
    )
  }
}

export default App;


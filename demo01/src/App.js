import React, { Component, Fragment} from 'react';
import Testcomponent from './com'
// import axios from 'axios'

class App extends Component{
  // 在某一时刻，可以自动执行的函数
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['a', 'b']
    }
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount-----------组件将要挂载到页面的时刻')
  // }

  // 在这个生命函数中使用axios远程请求
  // componentDidMount() {
    // console.log('componentDidMount-----------组件挂载完成')
    // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    // .then((res) => {console.log('axios 获取数据成功' + JSON.stringify(res))})
    // .catch((err) => {console.log('axios 获取数据失败' + err)})
  // }
  // shouldComponentUpdate() {
  //   console.log('1-shouldComponentUpdate')
  //   return true
  // }
  // UNSAFE_componentWillUpdate () {
  //   console.log('2-componentWillUpdate')
  // }
  // componentDidUpdate() {
  //   console.log('4-componentDidUpdate')
  // }


  render() {
    // console.log('3-render---------挂载中')
    return (
      <Fragment>
        <input value={this.state.inputValue} placeholder="add a new item" onChange={this.onChangeInput.bind(this)} ref={(input) => {this.input = input}}/>
        <button onClick={this.onClickAddItem.bind(this)}>Add Item</button>
        <ul className="my-list" ref={(ul) => {this.ul = ul}}>
          {
            this.state.list.map((item, index) => {
              return (
                <Testcomponent key={index + item} content={item} index={index} onClickDelItem={this.onClickDelItem.bind(this)} list={this.state.list}></Testcomponent>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  // 点击新增
  onClickAddItem(e) {
    let list = this.state.list
    list = list.includes(this.state.inputValue) ? list : [...list, this.state.inputValue]
    this.setState({
      inputValue: '',
      list
    }, ()=> {
      // console.log(this.ul.querySelectorAll('li').length)
    })
  }
  // 监听输入
  onChangeInput(e) {
    this.setState({
      inputValue: this.input.value
    })
  }
  // 点击删除
  onClickDelItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default App
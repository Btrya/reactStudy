import React, { Component, Fragment} from 'react';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['a', 'b']
    }
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} placeholder="add a new item" onChange={this.onChangeInput.bind(this)}/>
        <button onClick={this.onClickAddItem.bind(this)}>Add Item</button>
        <ul className="my-list">
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index + item} onClick={this.onClickDelItem.bind(this, index)}>{item}</li>
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
    })
  }
  // 监听输入
  onChangeInput(e) {
    this.setState({
      inputValue: e.target.value
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
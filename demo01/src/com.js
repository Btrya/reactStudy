import React, { Component } from 'react';

class Testcomponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {  }
    }
    render() { 
        return (  
            <li onClick={this.handleClick}>{this.props.content}</li>
        );
    }
    handleClick() {
        this.props.list = []
        this.props.onClickDelItem(this.props.index)
    }
}
 
export default Testcomponent;
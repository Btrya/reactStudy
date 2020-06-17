import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Testcomponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {  }
    }

    // 组件第一次存在于dom中，函数是不会被执行
    // 如果已经存在于Dom中，函数才会被执行
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('child----UNSAFE_componentWillReceiveProps')
    // }

    // componentWillUnmount() {
    //     console.log('child-componentWillUnmount')
    // }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content !== this.props.content
    }

    render() { 
        console.log("child- render")
        return (  
        <li onClick={this.handleClick}>{this.props.avaname}为你加油-{this.props.content}</li>
        );
    }
    handleClick() {
        this.props.onClickDelItem(this.props.index)
    }
}

Testcomponent.propTypes = {
    avaname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    onClickDelItem: PropTypes.func
}

Testcomponent.defaultProps = {
    avaname: 'Ben'
}
 
export default Testcomponent;
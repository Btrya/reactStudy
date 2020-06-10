import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Testcomponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {  }
    }
    render() { 
        return (  
        <li onClick={this.handleClick}>{this.props.avaname}为你加油-{this.props.content}</li>
        );
    }
    handleClick() {
        this.props.list = []
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
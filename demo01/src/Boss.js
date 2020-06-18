import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.content !== this.props.content
    // }

    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={1500}
                    classNames="boss-text"
                    unmountOnExit
                >
                    <div>Boss级人物-贝亚</div>
                </CSSTransition>
                <div><button onClick={this.toggleBtn}>召唤Boss</button></div>
            </div>
        );
    }

    toggleBtn = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Boss;
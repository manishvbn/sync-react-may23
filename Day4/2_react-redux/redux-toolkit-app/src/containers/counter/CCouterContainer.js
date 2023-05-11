import React, { Component } from 'react';

import * as counterActions from '../../actions/counterActions';
import { connect } from 'react-redux';
import CounterComponent from '../../components/counter/CounterComponent';
import CounterSiblingComponent from '../../components/counter/CounterSiblingComponent';

class CCouterContainer extends Component {
    render() {
        // console.log("C Container rendered....");
        return (
            <>
                <CounterComponent count={this.props.count}
                    inc={this.props.incCounter}
                    dec={this.props.decCounter}
                    mul={this.props.mulCounter} />
                <hr />
                <CounterSiblingComponent count={this.props.count} />
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incCounter: (by) => { dispatch(counterActions.incCounter(by)); },
        decCounter: (by) => { dispatch(counterActions.decCounter(by)); },
        mulCounter: (by) => { dispatch(counterActions.mulCounter(by)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CCouterContainer);
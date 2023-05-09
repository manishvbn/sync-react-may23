import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this._inc = this._inc.bind(this);
        this._dec = this._dec.bind(this);
    }

    _inc(e) {
        this.props.onUpdate(this.props.count + this.props.interval);
    }

    _dec(e) {
        this.props.onUpdate(this.props.count - this.props.interval);
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input type="text" className="form-control form-control-lg" value={this.props.count} readOnly />
                    <button className="btn btn-info"
                        onClick={this._inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info"
                        onClick={this._dec}>
                        <span className='fs-4'>-</span>
                    </button>
                </div>
            </>
        );
    }

    static get defaultProps() {
        return {
            interval: 1
        };
    }

    static get propTypes() {
        return {
            interval: PropTypes.number
        };
    }
}

class CounterSibling extends Component {
    render() {
        return (
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
                <h2>Current Count is: {this.props.count}</h2>
            </div>
        );
    }
}

class SiblingCommunicationRoot extends Component {
    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount(count) {
        this.setState({ currentCount: count });
    }

    render() {
        return (
            <>
                <h2 className="text-warning text-center mt-5 mb-5">Sibling Communication Using Parent State</h2>
                <Counter count={this.state.currentCount} onUpdate={this.updateCount} />
                <hr />
                <CounterSibling count={this.state.currentCount} />
            </>
        );
    }
}

export default SiblingCommunicationRoot;
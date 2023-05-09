import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this._clickCount = 0;
        this.state = { count: 0, flag: false };
        this._inc = this._inc.bind(this);
        this._dec = this._dec.bind(this);
        this.reset = this.reset.bind(this);
    }

    _manageClickCount(e) {
        this._clickCount += 1;
        if (this._clickCount > 9) {
            this.setState({ flag: true });
        }
    }

    _inc(e) {
        this.setState({ count: this.state.count + this.props.interval }, () => {
            this._manageClickCount(e);
        });
    }

    _dec(e) {
        this.setState({ count: this.state.count - this.props.interval }, () => {
            this._manageClickCount(e);
        });
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input type="text" className="form-control form-control-lg" value={this.state.count} readOnly />
                    <button className="btn btn-info" disabled={this.state.flag}
                        style={this._style}
                        onClick={this._inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info" disabled={this.state.flag}
                        style={this._style}
                        onClick={this._dec}>
                        <span className='fs-4'>-</span>
                    </button>
                    <button className="btn btn-secondary" disabled={!this.state.flag}
                        style={!this.state.flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}}
                        onClick={this.reset}>
                        <span className='fs-4'>Reset</span>
                    </button>
                </div>
            </>
        );
    }

    reset(e) {
        this._clickCount = 0;
        this.setState({ count: 0, flag: false });
    }

    get _style() {
        return this.state.flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {};
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

class CounterAssignment extends Component {
    constructor(props) {
        super(props);
        this._counter = React.createRef();
        this.p_reset = this.p_reset.bind(this);
    }

    p_reset() {
        // if (this.refs.c) {
        //     console.log(this.refs.c);
        //     this.refs.c.reset();
        // }

        // if (this.c) {
        //     console.log(this.c);
        //     this.c.reset();
        // }

        if (this._counter.current) {
            console.log(this._counter);
            this._counter.current.reset();
        }
    }

    render() {
        return (
            <>
                <h2 className="text-success text-center mt-5 mb-5">Calling Child Method from Parent using ref</h2>

                {/* <Counter ref="c" /> */}
                {/* <Counter ref={(elem) => { this.c = elem; }} /> */}

                <Counter ref={this._counter} />

                <div className="d-grid gap-2 mx-auto col-6 mt-5">
                    <button className="btn btn-warning" onClick={this.p_reset}>
                        <span className='fs-4'>Parent Reset</span>
                    </button>
                </div>
            </>

            // <>
            //     <Counter />
            //     <hr />
            //     <Counter interval={10} />
            // </>
        );
    }
}

export default CounterAssignment;
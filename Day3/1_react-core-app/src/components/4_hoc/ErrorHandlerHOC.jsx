import React, { Component } from 'react';

const ErrorHandlerHOC = (InputComponent) => class extends Component {
    static displayName = "ErrorHandlerHOC";

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            var errImg = require('../../assets/component-error.png');
            return (
                <div className="text-center mt-5">
                    <img src={errImg} alt="Component Error" className='img-thumbnail' />
                </div>
            );
        } else {
            return <InputComponent />;
        }
    }
};

export default ErrorHandlerHOC;
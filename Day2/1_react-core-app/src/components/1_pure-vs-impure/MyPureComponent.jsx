// import React, { Component } from 'react';

// class MyPureComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     render() {
//         console.log("MyPureComponent - Render Called....", this.state);

//         return (
//             <h1>
//                 Count Value is: {this.state.count}
//             </h1>
//         );
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("MyPureComponent - shouldComponentUpdate....", nextState);

//         if (this.state.count !== nextState.count)
//             return true;
//         else
//             return false;
//     }

//     componentDidMount() {
//         this.interval = setInterval(() => {
//             this.setState({ count: this.state.count + 1 });
//             // this.setState({ count: 0 });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }
// }

// export default MyPureComponent;

// --------------------------------------------------

import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        console.log("MyPureComponent - Render Called....", this.state);

        return (
            <h1>
                Count Value is: {this.state.count}
            </h1>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            // this.setState({ count: this.state.count + 1 });
            this.setState({ count: 0 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default MyPureComponent;
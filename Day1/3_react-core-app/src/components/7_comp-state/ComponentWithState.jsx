import React, { Component } from 'react';

class ComponentWithState extends Component {
    // constructor() {
    //     super();

    //     // State must be initialized in the constructor
    //     // State must be set to an object or null
    //     // this.state = "Synechron";

    //     this.state = { name: "Synechron" };
    //     this.data = { city: "Pune" };

    //     console.log("Ctor: ", this.state);
    // }

    state = { name: "Synechron" };
    data = { city: "Pune" };

    render() {
        console.log("Render: ", this.state);
        return (
            <>
                <h2 className="text-primary">Component With State</h2>
                <h2 className="text-primary">Hello, {this.state.name}</h2>
                <h2 className="text-primary">City is, {this.data.city}</h2>
            </>
        );
    }
}

export default ComponentWithState;
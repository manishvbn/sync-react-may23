import React, { Component } from 'react';

class ComponentWithProps extends Component {
    // If you want to access props in constructor, accept a constructor parameter and pass it to super()
    constructor(props) {
        super(props);

        // this.props = { name: "Manish" };            // Props should not be initialized inside the component
        // this.props.name = "Abhijeet";               // Error - Props are readonly

        // Reference Copy - Will Not Work
        // this.state = this.props;
        // this.state.name = "Abhijeet";               // Error - Props are readonly

        // Shallow Copy
        // this.state = Object.assign({}, this.props);
        // this.state = { ...this.props };
        // this.state.address.city = "Mumbai";
        // this.state.name = "Abhijeet";

        // Deep Copy
        this.state = JSON.parse(JSON.stringify(this.props));
        this.state.address.city = "Mumbai";
        this.state.name = "Abhijeet";

        console.log("Ctor, State: ", this.state);
        console.log("Ctor, Props: ", this.props);
    }

    render() {
        console.log("Render, State: ", this.state);
        console.log("Render, Props: ", this.props);

        return (
            <div className='text-center'>
                <h2 className="text-primary">Component with Props</h2>
            </div>
        );
    }
}

export default ComponentWithProps;
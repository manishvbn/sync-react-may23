import React, { Component } from 'react';

class ControlledVsUncontrolledComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Manish" };
        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.value);
        this.setState({ name: e.target.value });
    }

    handleClick(e) {
        if (this.inputRef.current)
            this.setState({ name: this.inputRef.current.value });
    }

    render() {
        return (
            <div className='text-center'>
                <h3 className="text-primary">Controlled & Uncontrolled Component</h3>

                {/* Uncontrolled */}
                {/* <input type="text" />
                <input type="text" defaultValue={"Abhijeet"} />
                <input type="text" defaultValue={this.state.name} /> */}

                {/* Controlled */}
                {/* <input type="text" value="Abhijeet" /> */}
                {/* <input type="text" value={this.state.name} /> */}
                {/* When we set the value on the textbox, react will not allow you to change the textbox */}
                {/* When React does this, we term it as controlled */}

                {/* Controlled with Value Change */}
                {/* <input type="text" value={this.state.name} onChange={this.handleChange} />
                <h2 className="text-info">Name is {this.state.name}</h2> */}

                {/* Uncontrolled with Value Change */}
                <input type="text" defaultValue={this.state.name} ref={this.inputRef} />
                <h2 className="text-info">Name is {this.state.name}</h2>
                <button className='btn btn-info' onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ControlledVsUncontrolledComponent;
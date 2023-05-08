// import React, { Component } from 'react';

// class PropTypesComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h2 className="text-info">Hello, {this.props.name.toUpperCase()}</h2>
//                 <h2 className="text-info">Age is, {this.props.age}</h2>
//             </>
//         );
//     }

//     // static get defaultProps() {
//     //     return {
//     //         name: "na",
//     //         age: 0
//     //     };
//     // }
// }

// PropTypesComponent.defaultProps = {
//     name: "na",
//     age: 0
// };

// const PropTypesRoot = () => {
//     return (
//         <div>
//             <h2 className="text-primary">Default Props</h2>
//             <PropTypesComponent />
//             <PropTypesComponent name={"abhijeet"} />
//             <PropTypesComponent name={"abhijeet"} age={10} />
//         </div>
//     );
// };

// export default PropTypesRoot;

// -------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropTypesComponent extends Component {
    render() {
        return (
            <>
                <h2 className="text-info">Hello, {this.props.name}</h2>
                <h2 className="text-info">Age is, {this.props.age}</h2>
            </>
        );
    }

    // static get propTypes() {
    //     return {
    //         name: PropTypes.string.isRequired,
    //         age: PropTypes.number.isRequired
    //     };
    // }
}

PropTypesComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

const PropTypesRoot = () => {
    return (
        <div>
            <h2 className="text-primary">Type and Value Checking of Props</h2>
            {/* <PropTypesComponent /> */}
            {/* <PropTypesComponent name={10} /> */}
            {/* <PropTypesComponent name={"abhijeet"} age={"10"} /> */}
            <PropTypesComponent name={"abhijeet"} age={10} />
        </div>
    );
};

export default PropTypesRoot;
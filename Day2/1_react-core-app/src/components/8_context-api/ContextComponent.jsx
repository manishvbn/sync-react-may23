// import React, { Component } from 'react';
// import DataTable from '../common/DataTable';

// class ComponentTwo extends Component {
//     render() {
//         return (
//             <div>
//                 <DataTable items={this.props.data}>
//                     <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
//                 </DataTable>
//             </div>
//         );
//     }
// }

// class ComponentOne extends Component {
//     render() {
//         return (
//             <div>
//                 <ComponentTwo data={this.props.data} />
//             </div>
//         );
//     }
// }

// class ContextComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             employees: [
//                 { id: 1, name: "Manish" },
//                 { id: 2, name: "Abhijeet" },
//                 { id: 3, name: "Ramakant" },
//                 { id: 4, name: "Subodh" },
//                 { id: 5, name: "Abhishek" }
//             ]
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className="text-primary text-uppercase text-center mt-5 mb-5">Context API Demo</h2>

//                 <ComponentOne data={this.state.employees} />
//             </div>
//         );
//     }
// }

// export default ContextComponent;

// ------------------------------------------------

import React, { Component } from 'react';
import DataTable from '../common/DataTable';

const EmployeeContext = React.createContext();
const C1Context = React.createContext();
const C2Context = React.createContext();

class ComponentFour extends Component {
    static contextType = C2Context;
    
    render() {
        return (
            <h3 className='text-primary'>Component Four - {this.context}</h3>
        );
    }
}

// ComponentFour.contextType = C2Context;

class ComponentThree extends Component {
    render() {
        return (
            <div>
                <EmployeeContext.Consumer>
                    {
                        (data) => (
                            <DataTable items={data}>
                                <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
                            </DataTable>
                        )
                    }
                </EmployeeContext.Consumer>
            </div>
        );
    }
}

class ComponentTwo extends Component {
    render() {
        return (
            <div>
                <EmployeeContext.Consumer>
                    {
                        (data) => (
                            <DataTable items={data}>
                                <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
                            </DataTable>
                        )
                    }
                </EmployeeContext.Consumer>
                <C1Context.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C1Context.Consumer>
                <C2Context.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C2Context.Consumer>
            </div>
        );
    }
}

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <ComponentTwo />
                <ComponentThree />
                <ComponentFour />
            </div>
        );
    }
}

class ContextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, name: "Manish" },
                { id: 2, name: "Abhijeet" },
                { id: 3, name: "Ramakant" },
                { id: 4, name: "Subodh" },
                { id: 5, name: "Abhishek" }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2 className="text-primary text-uppercase text-center mt-5 mb-5">Context API Demo</h2>

                <EmployeeContext.Provider value={this.state.employees}>
                    <C1Context.Provider value={"Data from Context One (C1)"}>
                        <C2Context.Provider value={"Data from Context Two (C2)"}>
                            <ComponentOne />
                        </C2Context.Provider>
                    </C1Context.Provider>
                </EmployeeContext.Provider>
            </div>
        );
    }
}

export default ContextComponent;
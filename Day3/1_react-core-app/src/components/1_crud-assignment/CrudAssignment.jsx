import React, { Component } from 'react';
import DataTable from '../common/DataTable';
import FormComponent from './FormComponent';

class CrudAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employee: { id: 1, name: "", designation: "", salary: "" },
            edit: false
        };
        this.updateState = this.updateState.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.selectEmployee = this.selectEmployee.bind(this);
        this.removeEmployee = this.removeEmployee.bind(this);
    }

    updateState(e) {
        const field = e.target.id;
        var newEmployee = { ...this.state.employee };
        if ((field === "id") && e.target.value)
            newEmployee[field] = parseInt(e.target.value);
        else if ((field === "salary") && e.target.value)
            newEmployee[field] = parseInt(e.target.value);
        else
            newEmployee[field] = e.target.value;
        this.setState({ employee: newEmployee });
    }

    saveEmployee(e) {
        if (this.state.edit) {
            var temp_employees = [...this.state.employees];
            var itemIndex = temp_employees.findIndex(emp => emp.id === parseInt(this.state.employee.id));
            temp_employees.splice(itemIndex, 1, { ...this.state.employee });
            this.setState({
                employees: [...temp_employees],
                employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: "" },
                edit: false
            });
        } else {
            this.setState({ employees: [...this.state.employees, { ...this.state.employee }] }, () => {
                this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: "" } });
            });
        }
    }

    getNextId(employees) {
        return employees.length ? employees[employees.length - 1].id + 1 : 1;
    }

    selectEmployee(item, allowEdit) {
        this.setState({ employee: { ...item }, edit: allowEdit });
    }

    removeEmployee(id) {
        this.setState({
            employees: [...this.state.employees.filter(item => item.id !== id)]
        }, () => {
            this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: "" } });
        });
    }

    render() {
        return (
            <div>
                <FormComponent employee={this.state.employee}
                    updateState={this.updateState}
                    onSave={this.saveEmployee}
                    allowEdit={this.state.edit} />
                <div className="mt-3 mb-3"></div>
                <DataTable items={this.state.employees} onSelect={this.selectEmployee} onDelete={this.removeEmployee}>
                    <h5 className="text-primary text-uppercase font-weight-bold">Employees Table</h5>
                </DataTable>
            </div>
        );
    }
}

export default CrudAssignment;
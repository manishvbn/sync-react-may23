import React from 'react';

import TextInput from '../common/TextInput';

const FormComponent = (props) => {
    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="form-horizontal" autoComplete="off" onSubmit={
                    e => {
                        e.preventDefault();
                        props.onSave(e);
                    }
                }>
                    <fieldset>
                        <legend className="text-center text-secondary text-uppercase font-weight-bold">Add/Edit Employee Information</legend>
                        <hr className="mt-0" />

                        <TextInput label={"Id"} name={"id"} value={props.employee.id}
                            onChange={props.updateState} />
                        <TextInput label={"Name"} name={"name"} value={props.employee.name}
                            onChange={props.updateState} />
                        <TextInput label={"Designation"} name={"designation"} value={props.employee.designation}
                            onChange={props.updateState} />
                        <TextInput label={"Salary"} name={"salary"} value={props.employee.salary}
                            onChange={props.updateState} />
                        <div className="d-grid gap-2 mx-auto mt-3">
                            <button type="submit" className="btn btn-success">Save</button>
                            <button type="reset" className="btn btn-primary">Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;
import React from 'react';
import PropTypes from 'prop-types';

const Ths = ({ item }) => {
    var allHeads = Object.keys(item).concat("", "actions", "");

    var ths = allHeads.map((item, index) => {
        return <th key={index}>{item.toUpperCase()}</th>;
    });

    return (
        <tr>
            {ths}
        </tr>
    );
};

const Trs = ({ item }) => {
    var allValues = Object.values(item).concat(
        <a href='/#' className='text-primary'>Details</a>,
        <a href='/#' className='text-warning'>Edit</a>,
        <a href='/#' className='text-danger'>Delete</a>
    );

    var tds = allValues.map((item, index) => {
        return <td key={index}>{item}</td>;
    });

    return (
        <tr>
            {tds}
        </tr>
    );
};

const DataTable = ({ items, children }) => {
    if (items && items.length) {
        var [item] = items;
        var ths = <Ths item={item} />;
        var trs = items.map((item, index) => {
            return <Trs key={item.id} item={item} />;
        });
    }

    return (
        <>
            {children && children}
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    {ths}
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>
    );
};

DataTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default DataTable;
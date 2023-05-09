import React, { Component } from 'react';
import DataTable from '../common/DataTable';

// const ListItem = ({ item }) => <li className='list-group-item'>{item.name}</li>

// const ListComponent = ({ items, children }) => {
//     var l_items = items.map((item, index) => {
//         return <ListItem key={item.id} item={item} />;
//     });

//     return (
//         <>
//             {children && children}
//             <hr />
//             <ul className="list-group">
//                 {l_items}
//             </ul>
//         </>
//     );
// };

const Tr = ({ item }) => <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
</tr>

const TableComponent = ({ items, children }) => {
    var trs = items.map((item, index) => {
        return <Tr key={item.id} item={item} />;
    });

    return (
        <>
            {children && children}
            <hr />
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>
    );
};

class ListRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, name: "Manish" },
                { id: 2, name: "Abhijeet" },
                { id: 3, name: "Ramakant" },
                { id: 4, name: "Subodh" },
                { id: 5, name: "Abhishek" }
            ],
            posts: [
                {
                    userId: 1,
                    id: 1,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    userId: 1,
                    id: 2,
                    title: "qui est esse",
                    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                {/* <ListComponent items={this.state.employees}>
                    <h1 className="text-info">Employees List</h1>
                </ListComponent> */}

                {/* <TableComponent items={this.state.employees}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Employees Table</h4>
                </TableComponent>

                <TableComponent items={this.state.posts}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                </TableComponent> */}

                {/* <DataTable items={this.state.employees}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Employees Table</h4>
                </DataTable>

                <DataTable items={this.state.posts}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                </DataTable> */}

                <DataTable>
                    <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                </DataTable>
            </div>
        );
    }
}

export default ListRoot;
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RootComponent />
  // </React.StrictMode>
);

// -------------------------------- Impure Query

// var arr = [10, 20, 30];

// // Impure
// // function append(dataArr, item) {
// //   dataArr[dataArr.length] = item;
// //   return dataArr;
// // }

// // Pure
// function append(dataArr, item) {
//   var rArr = [...dataArr];
//   rArr[rArr.length] = item;
//   return rArr;
// }

// var newArr1 = append(arr, 40);
// console.log(newArr1);           // [10, 20, 30, 40]

// var newArr2 = append(arr, 50);
// console.log(newArr2);           // [10, 20, 30, 50]

// -------------

// const test = () => { };

// class Employee {
//   constructor(name) {
//     this._name = name;
//   }

//   getName() {
//     return this._name;
//   }

//   setName(value) {
//     this._name = value;
//   }

//   // Should not create Arrow as Member Function
//   // getName = () => {
//   //   return this._name;
//   // }

//   // setName = (value) => {
//   //   this._name = value;
//   // }
// }

// var e1 = new Employee("Manish");
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// var e2 = new Employee("Subodh");
// console.log(e2.getName());
// e2.setName("Ramakant");
// console.log(e2.getName());

// console.log(e1);
// console.log(e2);

// // 104 bytes
// // 288 bytes - Arrow (Increase Memory Usage)
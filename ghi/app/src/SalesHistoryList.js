// import React, { useEffect, useState } from 'react'

// // not done yet
// function SalesPersonHistoryList({salesRecords}) {
//     const[salespeople, setSalespeople] = useState([]);
//     const[salesperson, setSalesperson] = useState('')

//     const handleSalespersonChange = (event) => {
//         const value = event.target.value
//         setSalesperson(value);
//     }

//     const getSalesPeople = async () => {
//         const salesPeopleUrl = 'http://localhost:8090/api/salespeople'
//         const response = await fetch(salesPeopleUrl)

//         if (response.ok) {
//             const data = await response.json()
//             setSalespeople(data.salesPeople)
//         }
//     }

//     useEffect(() => {
//         getSalesPeople()}, [])

//     return (
//       <div className="container">
//         <h1>Salesperson History</h1>
//         <div className="mb-3">
//             <select value={salesperson} onChange={handleSalespersonChange} required id="salesperson" name="salesperson" className="form-select">
//                 <option value="">Choose a Salesperson</option>
//                 {salespeople.map(salesperson => {
//                         return (
//                             <option key={salesperson.id} value={salesperson.name}>
//                                 {salesperson.name}
//                             </option>
//                         );
//                     })}
//             </select>
//         </div>

//          <table className="table table-striped">
//           <thead>
//             <tr>
//                 <th>Salesperson</th>
//                 <th>Customer</th>
//                 <th>VIN</th>
//                 <th>Sale price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {salesRecords.map  // filter by salesperson ) {
//               return (
//                 <tr key={ salesperson.id }>
//                     <td>{ salesrecord.salesperson.name } </td>
//                     <td>{ salesrecord.customer.name }</td>
//                     <td>{ salesrecord.automobile.vin }</td>
//                     <td>{ salesrecord.price }</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }

//   export default SalesPersonHistoryList;

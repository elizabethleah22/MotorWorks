// import React, { useState } from 'react'

// function SalesPersonHistoryList({salesPeople, customers, automobiles, salesRecords}) {
//     if (salesPeople === undefined) {
//       return null;
//     }

//     return (
//       <div className="container">
//         <h1>Salesperson History</h1>
//         <div className="mb-3">
//             <select value={name} onChange={handleNameChange} required id="name" name="name" className="form-select">
//                 <option value="">Choose a Salesperson</option>
//                 {salesPeople.map(salesperson => {
//                         return (
//                             <option key={salesperson.id} value={salesperson.name}>
//                                 {salesperson.name}
//                             </option>
//                         );
//                     })}
//             </select>
//         </div>

//         <table className="table table-striped">
//           <thead>
//             <tr>
//                 <th>VIN</th>
//                 <th>Color</th>
//                 <th>Year</th>
//                 <th>Model</th>
//                 <th>Manufacturer</th>
//             </tr>
//           </thead>
//           <tbody>
//             {automobiles.map(automobile => {
//               return (
//                 <tr key={ automobile.id }>
//                     <td>{ automobile.vin } </td>
//                     <td>{ automobile.color }</td>
//                     <td>{ automobile.year }</td>
//                     <td>{ automobile.model.name }</td>
//                     <td>{ automobile.model.manufacturer.name}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }

//   export default SalesPersonHistoryList;

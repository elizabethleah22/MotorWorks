import React from 'react'

function SalesList({sales, getsales}) {
    if (sales === undefined) {
      return null;
    }
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
                <th>Salesperson</th>
                <th>Employee Number</th>
                <th>Purchaser</th>
                <th>Automobile VIN</th>
                <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(sale => {
              return (
                <tr key={ sale.id }>
                    <td>{ sale.salesperson.name } </td>
                    <td>{ sale.salesperson.employee_number }</td>
                    <td>{ sale.customer.name }</td>
                    <td>{ sale.vin.vin }</td>
                    <td>{ sale.price }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default SalesList;

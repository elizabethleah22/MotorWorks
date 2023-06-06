import React, { useState } from 'react'

function SalesPersonHistoryList({ salespeople }) {
    const[salesperson, setSalesperson] = useState('')
    const [salesRecord, setSalesRecord] = useState([]);

    const handleSalespersonChange = async (event) => {
        const value = event.target.value;
        let salesRecordUrl = 'http://localhost:8090/api/salesrecords/'

        const response = await fetch(salesRecordUrl);

        if (response.ok) {
            const data = await response.json()
            setSalesRecord(data.sales)
            setSalesperson(value)

        }
    }

    return (
      <div className="container">
        <h1>Salesperson History</h1>
        <div className="mb-3">
            <select value={salesperson} onChange={handleSalespersonChange} required id="salesperson" name="salesperson" className="form-select">
                <option value="">Choose a Salesperson</option>
                {salespeople.map(salesperson => {
                        return (
                            <option key={salesperson.id} value={salesperson.name}>
                                {salesperson.name}
                            </option>
                        );
                    })}
            </select>
        </div>
         <table className="table table-striped">
          <thead>
            <tr>
                <th>Salesperson</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Sale price</th>
            </tr>
          </thead>
          <tbody>
            {salesRecord.filter(sales => sales.salesperson.name === salesperson)
            .map(sale => {
              return (
                <tr key={ sale.id }>
                    <td>{ sale.salesperson.name } </td>
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
  export default SalesPersonHistoryList;

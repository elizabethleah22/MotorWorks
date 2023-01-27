import React, { useEffect } from 'react'
import { useState } from 'react'


function ServiceHistory({setServicehistory, servicehistory}) {

  const[vins, setVins] = useState('');
  const handleVinChange = (event) => {
    const value = event.target.value;
    setVins(value)
  }

    const handleSubmit = async (event) => {

      event.preventDefault();
      const servicehistoryUrl = `http://localhost:8080/api/servicehistory/${vins}`
      const fetchConfig = {
        method: "get",
      }
      const response = await fetch(servicehistoryUrl, fetchConfig);
      if (response.ok) {
        const data = await response.json()
        setServicehistory(data);
      }
    };


    return (
      <div className="container">
        <h2>Search Appointment by VIN</h2>
        <form onSubmit={handleSubmit} id="filter-by-vin-form">
          <input onChange={handleVinChange} value={vins} type="Search" className="form-control rounded" placeholder="VIN" aria-describedby="search-addon" />
          <button className="btn btn-outline-primary">Search</button>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
                <th>Customer Name</th>
                <th>VIN</th>
                <th>Date</th>
                <th>Technician</th>
                <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {servicehistory.map(service => {
              return (
                <tr key={ service.id }>
                    <td>{ service.customer_name }</td>
                    <td>{ service.vin } </td>
                    <td>{ service.date }</td>
                    <td>{ service.technician }</td>
                    <td>{ service.reason }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  export default ServiceHistory;

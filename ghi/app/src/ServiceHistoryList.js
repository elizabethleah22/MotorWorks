import React, { useEffect } from 'react'
import { useState } from 'react'


function ServiceHistory({}) {
  const[servicehistory, setServicehistory] = useState([]);
  const[vins, setVins] = useState('');

  const deleteAppointment = async(service) => {
    const appointmentUrl = `http://localhost:8080/api/serviceappointment/${service.id}/`;
    const fetchConfig = {
        method: "delete",
    }
    const response = await fetch(appointmentUrl, fetchConfig)
    console.log("response", response)
    if (response.ok) {
        getServicehistory();
    }
}


  const getServicehistory = async () => {
    const servicehistoryResponse = await fetch('http://localhost:8080/api/servicehistory/')

    if (servicehistoryResponse.ok) {
      const data = await servicehistoryResponse.json();
      const servicehistory = data;
      setServicehistory(servicehistory);
    }
  }

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVins(value)
  }

  const handleSearch = async () => {
    const Vinurl = 'http://localhost:8080/api/servicehistory/'
    const response = await fetch(Vinurl)
    const data = await response.json()
    const servicehistory = data
    const result = servicehistory.filter(servicehistory => servicehistory.vin === vins)
    setServicehistory(result);
    if (servicehistory.length === 0) {
      alert("VIN not found")
    }

  }

    useEffect( () => {
      getServicehistory()}, []);

    return (
      <div className="container">
        <h4>Search Appointment by VIN</h4>
          <input onChange={handleVinChange} type="search" value={vins} className="form-control rounded" placeholder="Search VIN" aria-label="Search" aria-describedby="search-addon" />
            <button variant="contained" size="medium" style={{backgroundColor:"black",
            fontWeight:"normal", color:"white" }} onClick={handleSearch} >Search VIN</button>


        <table className="table table-striped">
          <thead>
            <tr>
                <th>Customer Name</th>
                <th>VIN</th>
                <td>VIP Status</td>
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
                    <td>{String(service.vip_status)}</td>
                    <td>{ service.date }</td>
                    <td>{ service.technician }</td>
                    <td>{ service.reason }</td>
                    <td><button type="button" className="btn btn-success" onClick={() => deleteAppointment(service)}>Complete</button></td>
                    <td><button className="btn btn-danger" onClick={() => deleteAppointment(service)}>Cancel</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  export default ServiceHistory;

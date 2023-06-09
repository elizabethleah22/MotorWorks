import React, { useEffect } from 'react'
import { useState } from 'react'


function ServiceHistory({}) {
  const[servicehistory, setServicehistory] = useState([]);
  const[vin, setVin] = useState('');

  const deleteAppointment = async(service) => {
    const appointmentUrl = `http://localhost:8080/api/serviceappointment/${service.id}/`;
    const fetchConfig = {
        method: "delete",
    }
    const response = await fetch(appointmentUrl, fetchConfig)
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
    setVin(value)
  }

  const handleSearch = async () => {
    const Vinurl = 'http://localhost:8080/api/servicehistory/'
    const response = await fetch(Vinurl)
    const servicehistory = await response.json()
    const result = servicehistory.filter(servicehistory => servicehistory.vin === vin)
    setServicehistory(result);
    if (servicehistory.length === 0) {
      alert("VIN not found")
    }

  }

    useEffect( () => {
      getServicehistory()}, []);


    return (
      <div className="container">
        <h1>Service Appointments</h1>
        <h4>Search Appointment by VIN</h4>
          <input onChange={handleVinChange} type="search" value={vin} className="form-control rounded" placeholder="Search VIN" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn" style={{
            fontWeight:"normal", color:"white", marginTop:"0.5rem", backgroundColor:"grey" }} onClick={handleSearch} >Search</button>
            <button type="button" className="btn" style={{
            fontWeight:"normal", color:"white", marginTop:"0.5rem", marginLeft:"0.3rem", backgroundColor:"grey" }} onClick={()=>{
              getServicehistory();
              setVin('');
              }
           } >View All</button>


        <table className="table table-striped">
          <thead>
            <tr>
                <th>Customer Name</th>
                <th>VIN</th>
                <th>VIP Status</th>
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
                    <td><button type="button" className="btn" onClick={() => deleteAppointment(service)}>Complete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  export default ServiceHistory;

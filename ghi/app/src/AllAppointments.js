import React from 'react'


function GetAppointmentlist({ appointmentlist }) {
    if (appointmentlist === undefined) {
      return null;
    }
    return (
      <div className="container">
        <h1>Service Appointments</h1>
        <table className="table table-striped">
          <thead>
            <tr>
                <th>Customer Name</th>
                <th>VIN</th>
                <th>VIP</th>
                <th>Time</th>
                <th>Date</th>
                <th>Technician</th>
                <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointmentlist.map(appointment => {
              return (
                <tr key={ appointment.id }>
                    <td>{ appointment.customer_name}</td>
                    <td>{ appointment.vin } </td>
                    <td>{ String(appointment.vip_status) }</td>
                    <td>{ appointment.time }</td>
                    <td>{ appointment.date }</td>
                    <td>{ appointment.technician }</td>
                    <td>{ appointment.reason }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default GetAppointmentlist;

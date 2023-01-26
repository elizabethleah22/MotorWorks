import React from 'react'

function ServiceHistory({ getServiceAppointmentHistory }) {
    if (service === undefined) {
      return null;
    }
    return (
      <div className="container">
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
            {ServiceAppointment.map(ServiceAppointmentHistory => {
              return (
                <tr key={ ServiceAppointment.id }>
                    <td>{ ServiceAppointment.customer_name }</td>
                    <td>{ ServiceAppointment.vin } </td>
                    <td>{ ServiceAppointment.date }</td>
                    <td>{ ServiceAppointment.technician }</td>
                    <td>{ ServiceAppointment.reason }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default ServiceHistory;

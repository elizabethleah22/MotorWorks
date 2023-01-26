import React, { useState } from 'react'

export default function EmployeeForm({technician}) {
    const [customer_name, setCustomer_name] = useState('');
    const [vin, setVin] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');
    const [vip_status, setVip_status] = useState('');
    const [technician, setTechnician] = useState('');


    const handleCustomer_nameChange = (event) => {
        const value = event.target.value
        setCustomer_name(value)
    }

    const handleVinChange = (event) => {
        const value = event.target.value
        setVin(value)
    }

    const handleTimeChange = (event) => {
        const value = event.target.value
        setTime(value)
    }

    const handleReasonChange = (event) => {
        const value = event.target.value
        setReason(value)

    }
    const handleVip_statusChange = (event) => {
        const value = event.target.value
        setVip_status(value)
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value
        setTechnician(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.customer_name = customer_name;
        data.vin = vin;
        data.time = time;
        data.reason = reason;
        data.vip_status = vip_status;
        data.technician = technician;

        const NewServiceAppointmentUrl = 'http://localhost:8080/api/serviceappointment/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(NewServiceAppointmentUrl, fetchConfig);
        if (response.ok) {
            const NewServiceAppointment = await response.json();
            console.log(NewServiceAppointment);

            setCustomer_name('')
            setVin('')
            setTime('')
            setReason('')
            setVip_status('')
            setTechnician('')

        }
    }

  return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a Service Appointment</h1>
                <form onSubmit={handleSubmit} id="create-service-appointment-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleCustomer_nameChange} placeholder="Customer_name" required type="text" name="customer_name" id="customer_name" className="form-control" value={customer_name} />
                        <label htmlFor="customer_name">Customer Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleVinChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" value={vin} />
                        <label htmlFor="vin">Vin</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleTimeChange} placeholder="Time" required type="text" name="time" id="time" className="form-control" value={time} />
                        <label htmlFor="time">Time</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleReasonChange} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" value={reason} />
                        <label htmlFor="reason">Reason</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleVip_statusChange} placeholder="VIP Status" required type="text" name="vip_status" id="vip_status" className="form-control" value={vip_status} />
                        <label htmlFor="vip_status">VIP Status</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleTechnicianChange} placeholder="Technician" required type="text" name="technician" id="technician" className="form-control" value={technician} />
                        <label htmlFor="technician">Technician</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
)
}

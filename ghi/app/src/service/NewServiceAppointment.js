import React, { useEffect, useState } from 'react'


export default function NewServiceAppointment({getServiceappointment, technicians}) {
    const [customer_name, setCustomer_name] = useState('');
    const [vin, setVin] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [reason, setReason] = useState('');
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

    const handleDateChange = (event) => {
        const value = event.target.value
        setDate(value)
    }

    const handleReasonChange = (event) => {
        const value = event.target.value
        setReason(value)

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
        data.date = date;
        data.reason = reason;
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

            setCustomer_name('')
            setVin('')
            setTime('')
            setDate('')
            setReason('')
            setTechnician('')
            getServiceappointment()

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
                        <input onChange={handleTimeChange} placeholder="Time" required type="time" name="time" id="time" className="form-control" value={time} />
                        <label htmlFor="time">Time</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleDateChange} placeholder="Date" required type="date" name="date" id="date" className="form-control" value={date} />
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleReasonChange} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" value={reason} />
                        <label htmlFor="reason">Reason</label>
                    </div>
                    <div className="form-floating mb-3">
                            <select onChange={handleTechnicianChange} value={technician} placeholder="Technician id" required name="technician" id="technician" className="form-select">
                                <option value="">Choose a technician</option>
                                {technicians.map(techs => {
                                    return (
                                        <option key={techs.id} value={techs.name}>
                                            {techs.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
)
}

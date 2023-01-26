import React, {useState} from 'react'

export default function ServiceHistory ({  }) {
    const [vin, setVin] = useState('');


    const handleVinChange = (event) => {
        const value = event.target.value
        setVin(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.vin = vin;

        const ServiceHistoryAppointmentUrl = 'http://localhost:8080/api/servicehistory/{vin}/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
    const response = await fetch (ServiceHistoryAppointmentUrl, fetchConfig);
    if (response.ok) {
        const servicehistory = await response.json();
        console.log(servicehistory);

    setVin('')
    getServiceAppointmentHistory()
}
}

return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Service History Lookup</h1>
                <form onSubmit={handleSubmit} id="service-appointment-history-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleVinChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" value={vin} />
                        <label htmlFor="name">Please Enter VIN</label>
                    </div>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    </div>
)
}

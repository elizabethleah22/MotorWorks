import React, {useState } from 'react'

export default function NewSalesRecord({ automobiles, customers, salespeople, getSalesRecords }) {
    const [vin, setVin] = useState('');
    const [salesPerson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('')

    const handleVinChange = (event) => {
        const value = event.target.value
        setVin(value)
    }

    const handleSalesPersonChange = (event) => {
        const value = event.target.value
        setSalesperson(value)
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value
        setCustomer(value)
    }

    const handlePriceChange = (event) => {
        const value = event.target.value
        setPrice(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.vin = vin;
        data.salesperson = salesPerson;
        data.customer = customer;
        data.price = price

        const salesRecordsUrl = 'http://localhost:8090/api/salesrecords/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(salesRecordsUrl, fetchConfig);
        if (response.ok) {
            const newSalesRecord = await response.json();
            setVin('')
            setSalesperson('')
            setCustomer('')
            setPrice('')
            getSalesRecords()
        }
    }
    if (automobiles === undefined) {
        return null;
      }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a New Sale</h1>
                    <form onSubmit={handleSubmit} id="create-salesrecord-form">
                        <div className="form-floating mb-3">
                            <select onChange={handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" value={vin} >
                            <option value="">Choose an Automobile</option>
                        {automobiles.map(automobile => {
                            return (
                                <option key={automobile.vin} value={automobile.vin}>
                                    {automobile.vin}
                                </option>
                            );
                        })}
                    </select>
                        </div>
                        <div className="mb-3">
                        <select required onChange={handleSalesPersonChange} placeholder="salesperson" name="salesPerson" id="salesPerson" className="form-select" value={salesPerson}>
                            <option value="">Choose a Salesperson</option>
                            {salespeople.map(salesperson => {
                                return (
                                    <option key={salesperson.employee_number} value={salesperson.name}>
                                        {salesperson.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                        <div className="mb-3">
                        <select required onChange={handleCustomerChange} name="customer" id="customer" className="form-select" value={customer}>
                            <option value="">Choose a Customer</option>
                            {customers.map(customer => {
                                return (
                                    <option key={customer.id} value={customer.name}>
                                        {customer.name}
                                    </option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control" value={price} />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )


}

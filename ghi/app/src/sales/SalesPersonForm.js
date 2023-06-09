import React, {useState } from 'react'

export default function NewSalesPerson({ getSalesPeople }) {
    const [name, setName] = useState('');
    const [employee_number, setEmployeeNumber] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleEmployeeNumberChange = (event) => {
        const value = event.target.value
        setEmployeeNumber(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.name = name;
        data.employee_number = employee_number;

        const salesPeopleUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(salesPeopleUrl, fetchConfig);
        if (response.ok) {
            const newSalesPerson = await response.json();
            setName('')
            setEmployeeNumber('')
            getSalesPeople()
        }
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Salesperson</h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={name} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleEmployeeNumberChange} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" value={employee_number} />
                            <label htmlFor="employee_number">Employee Number</label>
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )


}

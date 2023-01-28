import React, { useState } from 'react'

export default function NewTechnician({ getTechnicians }) {
    const [name, setName] = useState('');
    const [employee_number, setEmployee_number] = useState('');


    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
  }

    const handleEmployee_numberChange = (event) => {
        const value = event.target.value
        setEmployee_number(value)
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.name = name;
    data.employee_number = employee_number;

    const TechnicianListUrl = 'http://localhost:8080/api/technicians/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch(TechnicianListUrl, fetchConfig);
    if (response.ok) {
        const newTechnician = await response.json();
        console.log(newTechnician);

    setName('')
    setEmployee_number('')
    getTechnicians()

    }
  }

  return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new technician</h1>
                <form onSubmit={handleSubmit} id="create-technician-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={name} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleEmployee_numberChange} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" value={employee_number} />
                        <label htmlFor="employee_number">Employee Number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
)
}

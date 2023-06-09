import React, {useState } from 'react'

export default function NewManufacturer({ getManufacturers }) {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.name = name;

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            setName('')
            getManufacturers()
        }
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Manufacturer</h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={name} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )


}

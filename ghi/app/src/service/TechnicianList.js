import React from 'react';

export default function TechnicianList({technicians}) {
    return (
        <div>
            <h2 className="mt-5"><b>Technicians</b></h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee Number</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map(technician => {
                        return (
                            <tr key={ technician.id }>
                                <td>{ technician.name }</td>
                                <td>{ technician.employee_number}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

import React from 'react'

// not showing on browser
function VehicleList({models}) {
    if (models === undefined) {
      return null;
    }
    return (
      <div className="container">
        <h1>Vehicle Models</h1>
        <table className="table table-striped">
          <thead>
            <tr>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {models.map(model => {
              return (
                <tr key={ model.id }>
                    <td>{ model.name }</td>
                    <td>{ model.manufacturer.name }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default VehicleList;

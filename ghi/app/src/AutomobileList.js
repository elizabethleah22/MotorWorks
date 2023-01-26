import React from 'react'

// not showing on screen
function AutomobileList({automobiles}) {
    if (automobiles === undefined) {
      return null;
    }
    return (
      <div className="container">
        <h1>Vehicle Models</h1>
        <table className="table table-striped">
          <thead>
            <tr>
                <th>VIN</th>
                <th>Color</th>
                <th>Year</th>
                <th>Model</th>
                <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {automobiles.map(automobile => {
              return (
                <tr key={ automobile.id }>
                    <td>{ automobile.vin } </td>
                    <td>{ automobile.color }</td>
                    <td>{ automobile.year }</td>
                    <td>{ automobile.model.name }</td>
                    <td>{ automobile.manufacturer.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default AutomobileList;

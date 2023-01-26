import React from 'react'

function ManufacturerList({manufacturers}) {
    if (manufacturers === undefined) {
      return null;
    }
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
                <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {manufacturers.map(manufacturer => {
              return (
                <tr key={ manufacturer.id }>
                    <td>{ manufacturer.name } </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default ManufacturerList;

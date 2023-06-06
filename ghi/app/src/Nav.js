export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
      <div className="container-fluid">
        <a className="navbar-brand link-light" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle link-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Vehicles
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/manufacturers">Manufacturers</a></li>
                <li><a className="dropdown-item" href="/manufacturers/new">Add a Manufacturer</a></li>
                <li><a className="dropdown-item" href="/automobiles">Automobiles</a></li>
                <li><a className="dropdown-item" href="/automobiles/new">Add an Automobile</a></li>
                <li><a className="dropdown-item" href="/vehicles">Vehicles</a></li>
                <li><a className="dropdown-item" href="/vehicles/new">Add a Vehicle</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle link-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/salesrecords">Sales</a></li>
                <li><a className="dropdown-item" href="/sales">Add a Sale</a></li>
                <li><a className="dropdown-item" href="/salespeople">Add a Salesperson</a></li>
                <li><a className="dropdown-item" href="/salesrecords/history">Sales Records</a></li>
                <li><a className="dropdown-item" href="/customers">Add a Customer</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle link-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/service/appointments">Service Appointments</a></li>
                <li><a className="dropdown-item" href="/serviceappointment/new">Create a Service Appointment</a></li>
                <li><a className="dropdown-item" href="/technicians/new">Add a Technician</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

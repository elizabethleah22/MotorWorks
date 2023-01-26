import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import SalesList from './SalesList';
import NewSalesPerson from './SalesPersonForm';
import NewTechnician from './NewTechnician';
import NewServiceAppointment from './NewServiceAppointment';
import NewCustomer from './CustomerForm';
import NewSalesRecord from './SalesRecordForm';


function App() {
  const[sales, setSales] = useState([]);
  const[salesPeople, setSalesPeople] = useState([]);
  const[technicians, setTechnicians] = useState([]);
  const[serviceappointment, setServiceappointment] = useState([]);
  const[customers, setCustomers] = useState([]);
  const[salesRecords, setSalesRecords] = useState([]);

  const getSalesRecords = async () => {
    const salesRecordsResponse = await fetch('http://localhost:8090/api/salesrecords/');

    if (salesRecordsResponse.ok) {
      const data = await salesRecordsResponse.json();
      const salesrecords = data.salesrecords;
      setSalesRecords(salesrecords);
    }
  }

  const getSales = async () => {
    const salesResponse = await fetch('http://localhost:8090/api/salesrecords/');

    if (salesResponse.ok) {
      const data = await salesResponse.json();
      const sales = data.sales;
      setSales(sales);
    }
  }

  const getSalesPeople = async () => {
    const salesPeopleResponse = await fetch('http://localhost:8090/api/salespeople/');

    if (salesPeopleResponse.ok) {
      const data = await salesPeopleResponse.json();
      const salesPeople = data.salespeople;
      setSalesPeople(salesPeople);
    }
  }

  const getCustomers = async () => {
    const customerResponse = await fetch('http://localhost:8090/api/customers/');

    if (customerResponse.ok) {
      const data = await customerResponse.json();
      const customers = data.customers;
      setCustomers(customers);
    }
  }

  const getTechnicians = async () => {
    const techniciansResponse = await fetch('http://localhost:8080/api/technicians/')

    if (techniciansResponse.ok) {
      const data = await techniciansResponse.json();
      const technicians = data.technicians;
      setTechnicians(technicians);
    }
  }

  const getServiceappointment = async () => {
    const serviceappointmentResponse = await fetch('http://localhost:8080/api/serviceappointment/')

    if (serviceappointmentResponse.ok) {
      const data = await serviceappointmentResponse.json();
      const serviceappointment = data.serviceappointment;
      setServiceappointment(serviceappointment);
    }
  }
useEffect( () => {
  getSales();
  getSalesPeople();
  getTechnicians();
  getServiceappointment();
  getCustomers();
  getSalesRecords()},  []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sales" >
            <Route path="" element={<SalesList sales={sales} getSales={getSales} />} />
            <Route path="newrecord" element={<NewSalesRecord salesrecords={salesRecords} getSalesRecords={getSalesRecords} /> } />
          </Route>
          <Route path="/salespeople" >
            <Route path="" element={<NewSalesPerson salespeople={salesPeople} getSalesPeople={getSalesPeople} /> } />
          </Route>
          <Route path="/technicians" >
            <Route path="" element={<NewTechnician technicians={technicians} getTechnicians={getTechnicians} /> } />
          </Route>
          <Route path="/serviceappointment" >
            <Route path="" element={<NewServiceAppointment serviceappointment={serviceappointment} getServiceappointment={getServiceappointment} /> } />
          </Route>
          <Route path="/customers" >
            <Route path="" element={<NewCustomer customers={customers} getCustomers={getCustomers} /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

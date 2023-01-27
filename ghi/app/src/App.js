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
import ManufacturerList from './ManufacturerList';
import VehicleList from './VehicleList';
import NewManufacturer from './ManufacturerForm';
import AutomobileList from './AutomobileList'
import NewVehicleModel from './VehicleForm';
import NewAutomobile from './AutomobileForm';
import SalesPersonHistoryList from './SalesHistoryList'



function App() {
  const[sales, setSales] = useState([]);
  const[salespeople, setSalesPeople] = useState([]);
  const[technicians, setTechnicians] = useState([]);
  const[serviceappointment, setServiceappointment] = useState([]);
  const[customers, setCustomers] = useState([]);
  const[salesRecords, setSalesRecords] = useState([]);
  const[manufacturers, setManufacturers] = useState([]);
  const[models, setModels] = useState([]);
  const[automobiles, setAutomobiles] = useState([]);

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


  const getManufacturers = async () => {
    const manufacturerResponse = await fetch('http://localhost:8100/api/manufacturers/');

    if (manufacturerResponse.ok) {
      const data = await manufacturerResponse.json();
      const manufacturers = data.manufacturers;
      setManufacturers(manufacturers);
    }
  }

  const getVehicleModels = async () => {
    const vehicleModelResponse = await fetch('http://localhost:8100/api/models/');

    if (vehicleModelResponse.ok) {
      const data = await vehicleModelResponse.json();
      setModels(data.models);
    }
  }

  const getAutomobiles = async () => {
    const automobileResponse = await fetch('http://localhost:8100/api/automobiles/');

    if (automobileResponse.ok) {
      const data = await automobileResponse.json();
      setAutomobiles(data.autos)
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
  getSalesRecords();
  getManufacturers();
  getVehicleModels();
  getAutomobiles()},  []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sales" >
            <Route path="newrecord" element={<NewSalesRecord salesrecords={salesRecords} salespeople={salespeople} customers={customers} automobiles={automobiles} getSalesRecords={getSalesRecords} /> } />
          </Route>
          <Route path="/salesrecords" >
            <Route path="" element={<SalesList sales={sales} getSales={getSales} />} />
            <Route path="history" element={<SalesPersonHistoryList salespeople={salespeople} customers={customers} automobiles={automobiles} salesrecords={salesRecords} getSalesPeople={getSalesPeople} /> } />
          </Route>
          <Route path="/salespeople" >
            <Route path="" element={<NewSalesPerson salespeople={salespeople} getSalesPeople={getSalesPeople} /> } />
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
          <Route path="/manufacturers" >
            <Route path="" element={<ManufacturerList manufacturers={manufacturers} getManufacturers={getManufacturers} /> } />
            <Route path="new" element={<NewManufacturer manufacturers={manufacturers} getManufacturers={getManufacturers} /> } />
          </Route>
          <Route path="/vehicles" >
            <Route path="" element={<VehicleList models={models} getModels={getVehicleModels} /> } />
            <Route path="new" element={<NewVehicleModel models={models} manufacturers={manufacturers} getManufacturers={getManufacturers} getModels={getVehicleModels} /> } />
          </Route>
          <Route path="/automobiles" >
            <Route path="" element={<AutomobileList automobiles={automobiles} getAutomobiles={getAutomobiles} /> } />
            <Route path="new" element={<NewAutomobile automobiles={automobiles} models={models} getAutomobiles={getAutomobiles} /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

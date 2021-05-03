import React from 'react';
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import DataTable from './components/DataTable'


function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-primary">Gestor de Vendas</h1>

      <DataTable />
      <Footer />
    </>
  );
}

export default App;

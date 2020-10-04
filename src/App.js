import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.component';
import ProductList from './components/ProductList.component';
import ProductForm from './components/ProductForm.component';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container p-4">
        {/*<Route path="/" exact component={ProductList}></Route>  */}
        <Redirect from="/" to="/product" />
        <Route path="/product" exact component={ProductList}></Route>
        <Route path="/product/create" exact component={ProductForm}></Route>
        <Route path="/product/create/:id" exact component={ProductForm}></Route> 
        {/*<Redirect from="/product/create/:id" to="/product/create" />*/}
      </div>
    </BrowserRouter>
  )
}


/************************************************************************************/
/****      Inicial con componentes escritos con funciones dentro d app.js        ****/
/************************************************************************************/
function Navbar1() {
  return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/#">React</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/#">Producto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Crear producto</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>)
}

function ProductList1() {
  return (<div>
    <h1>Listado de productos</h1>
  </div>)
}

function PtoductForm1() {
  return (<div>
    <h1>Formulario de productos</h1>
  </div>)
}

function HolaMundo(props) {
  const test = props.mibckgnd;
  return (<div id="compo1" style={{ background: test }}>
    {props.mitexto}
  </div>)
}

// function App() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="container">
//         {/* <ProductList></ProductList> */}
//         {/* <ProductForm></ProductForm> */}
//       </div>
//       {/*
//       Este es mi nuevo componente: <HolaMundo mitexto="hola Iván!!!" mibckgnd="green"/>
//       Este es mi nuevo componente: <HolaMundo mitexto="hola Mundo!!!" mibckgnd="yellow"/>
//       */}
//     </div>
//   );
// }

export default App;

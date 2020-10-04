import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ProductList extends React.Component {

  state = { productos: [] }

  async getProducts() {
    const resProductos = await axios.get('http://localhost:3000/product');
    this.setState({ productos: resProductos.data });
    console.log(resProductos);
  }

  componentDidMount() {
    this.getProducts();
    console.log(this.state.productos)
  }

  async deleteProduct(id, e){
    // e.preventDefaut();
    console.log("se ejecuta el evento delete",id);
    const res = await axios.delete("http://localhost:3000/product/"+ id);
    console.log(res);
    this.getProducts();
  }

  render() {
    return (
      <div>
        {
          this.state.productos.map(producto =>
            <div className="card card-body mb-2"  key={producto._id}>
              <div className="row">
                <div className="col-md-8">
                  <ul>
                    <li>nombre: {producto.name}</li>
                    <li>descripcion: {producto.description}</li>
                    <li>precio: {producto.price}</li>
                    <li>Creatdo el: {producto.createAt}</li>
                  </ul>
                  <button className="btn btn-danger" onClick={(e) => this.deleteProduct(producto._id)}>Delete</button>
                  <Link className="btn btn-secondary" to={`/product/create/${producto._id}`}>Edit</Link>                  
                </div>
                <div className="col-md-4">
                  <img src={producto.imageURL} className="card-img" alt="imagen perdida"/>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }


}
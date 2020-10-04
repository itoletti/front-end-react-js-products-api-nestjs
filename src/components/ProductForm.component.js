import React from 'react';
import axios from 'axios';

export default class ProductForm extends React.Component {

  state = {
    name: '',
    description: '',
    price: 0,
    imageURL: ''
  }
  
  //edit=true -> update - edit=false -> create
  edit = false;

  async componentDidMount() {
    // const {params} = useParams();
    const params = this.props.match.params;
    console.log(params.id);
    //console.log(res);
     if (params) {
      const res = await axios.get("http://localhost:3000/product/"+ params.id);
    //   console.log(res);
      this.setState(res.data);
      this.edit = true; 
    }  
  }

  submitProduct = async e => {
    e.preventDefault();
    console.log("estoy creando");
    console.log(this.state);
    const res = await axios.post("http://localhost:3000/product", this.state);
    console.log(res);
    this.setState({
      name: '',
      description: '',
      price: 0,
      imageURL: ''
    });
    this.props.history.push("/product");
  }

  updateProduct = async (e) => {
    e.preventDefault();
    console.log("estoy actualizando");
    console.log("http://localhost:3000/product/"+ this.state._id);
    const res = await axios.put("http://localhost:3000/product/"+ this.state._id, this.state);
    console.log(res);
    this.setState({
      name: '',
      description: '',
      price: 0,
      imageURL: ''
    });
    (this.props.history.push("/product");
  }

  onChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4 offset-dm-4">
          <div className="card card-body">
            <form onSubmit= {this.edit ? this.updateProduct : this.submitProduct}>
                <div className="form-group">
                  <input type="text" name="name" value={this.state.name} onChange={this.onChange}
                    className="form-control" placeholder="Nombre Producto" autoFocus/>
                  </div>
                <div className="form-group">
                  <input type="text" name="description" value={this.state.description} onChange={this.onChange}
                    className="form-control" placeholder="Descripcion"/>
                </div>
                <div className="form-group">
                  <input type="text" name="price" value={this.state.price} onChange={this.onChange}
                    className="form-control" placeholder="Precio"/>
                </div>
                <div className="form-group">
                  <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.onChange}
                    className="form-control" placeholder="URL Imagen"/>
                </div>
                <button className="btn btn-primary btn-block" >
                  Save
                </button>
            </form>
          </div>  
        </div>
      </div>
    )
  }
}
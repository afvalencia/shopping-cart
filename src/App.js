import { Component } from 'react'
import Productos  from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      { name: 'Arvejas', price: 2500, img: '/productos/arvejas.jpg'},
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'}
    ],
    carro: [],
    esCarroVisible: false
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(prod => prod.name === producto.name)) {
      const newCarro = carro.map(prod => prod.name === producto.name
        ? ({
          ...prod,
          cantidad: prod.cantidad + 1
        })
        : prod)
      return this.setState({ carro: newCarro})
    } 
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  mostrarCarro = () => {
    if (this.state.carro.length) {
      this.setState({ esCarroVisible: !this.state.esCarroVisible })
    }
  }

  cantidadProductosCarro = () => {
    let value = 0
    this.state.carro.array.forEach(element => {
      value += element.cantidad
    });
    console.log(value)
    return value
  }

  render() {
    console.log(this.state.carro)
    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          mostrarCarro={this.mostrarCarro}
          esCarroVisible={this.state.esCarroVisible} />
        <Layout>
          <Title />
          <Productos 
            productos={this.state.productos}
            agregarAlCarro={this.agregarAlCarro}/>
        </Layout>
      </div>
    )
  }
}

export default App;

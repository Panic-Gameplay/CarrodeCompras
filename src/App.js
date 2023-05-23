import { Component } from 'react'
import Productos from './component/Productos'
import Layout from './component/Layout'
import Title from './component/Title'
import Navbar from './component/Navbar'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', descripcion:'Tomates muy buena calidad de pirque', price: '$1.500', img: '/productos/tomate.jpg'}, /* estos son las imagens y al detalle de los productos*/
      { name: 'Arveja', price: '$2.500', img: '/productos/arveja.jpg'},
      { name: 'Lechuha', price: '$500', img: '/productos/lechuga.jpg'}
    ],
    carro:[],
    esCarroVisible: false,
  }
  agregarAlCarro = (producto) => {
    const{ carro } =this.state
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
        ?({
          ...x,
          cantidad: x.cantidad +1
        })
        : x)
        return this.setState({carro:newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () =>{
    this.setState({ esCarroVisible: !this.state.esCarroVisible})
  }

  render() {
    const { esCarroVisible} = this.state
    return (
      <div>
        <Navbar 
        carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro} 
        />
        <Layout>
          <Title />
          <Productos
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos}
        />
        </Layout>
        
      </div>
    )
  }
}

export default App;

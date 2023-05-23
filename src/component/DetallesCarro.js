import React, { Component } from 'react';

const styles = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaaa',
  },
  eliminar: {
    cursor: 'pointer',
    marginLeft: '10px',
  },
};

class DetallesCarro extends Component {
  eliminarProducto = (producto) => {
    // Aquí puedes llamar a una función para eliminar el producto del carro
    console.log('Eliminar producto:', producto.name);
  };

  render() {
    const { carro } = this.props;
    const total = carro.reduce((acc, x) => acc + x.price * x.quantity, 0);
    console.log(carro);
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((producto) => (
            <li style={styles.producto} key={producto.name}>
              <img alt={producto.name} src={producto.img} width="50" height="32" />
              {producto.name} <span>{producto.quantity}</span> x ${producto.price}
              <button
                style={styles.eliminar}
                onClick={() => this.eliminarProducto(producto)}
              >
                Eliminar Producto
              </button>
            </li>
          ))}
        </ul>
        <div>Total: ${total.toFixed(2)}</div>
      </div>
    );
  }
}

export default DetallesCarro;

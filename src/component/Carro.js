import React, { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  },
};

class Carro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDetallesCarro: false,
    };
  }

  mostrarDetallesCarro = () => {
    this.setState({ mostrarDetallesCarro: true });
  };

  ocultarDetallesCarro = () => {
    this.setState({ mostrarDetallesCarro: false });
  };

  toggleDetallesCarro = () => {
    this.setState((prevState) => ({
      mostrarDetallesCarro: !prevState.mostrarDetallesCarro,
    }));
  };

  render() {
    const { carro } = this.props;
    const { mostrarDetallesCarro } = this.state;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={this.toggleDetallesCarro} style={styles.carro}>
          Carro
        </button>
        {mostrarDetallesCarro ? (
          <DetallesCarro carro={carro} onClose={this.ocultarDetallesCarro} />
        ) : null}
      </div>
    );
  }
}

export default Carro;

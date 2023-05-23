import React, { Component } from 'react';
import Producto from './Producto';

const styles = { /* agrege estilos a los productos */ 
    productos:{
        display: 'flex',
        flexDirection: 'row',
        JustifyContent: 'space-between',
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props;
        return (
            <div style={styles.productos}>
                {productos.map(producto => (
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name} 
                        producto={producto}
                    />
                ))}
            </div>
        );
    }
}

export default Productos;

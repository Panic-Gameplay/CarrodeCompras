import React, { Component } from 'react';
import Button from './Button'

const styles={ /* agregar estilos al div de los productos */
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
        margin:'10px',
    },
    img: {  /* agregar estilo de la imagen */
        width: '100%',
    }
}
class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props; /* cargando las imágenes, el nombre y los precios */
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <h4>{producto.descripcion}</h4>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carrito
                </Button> 
            </div>
        );
    }
}

export default Producto;
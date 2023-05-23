import { Component } from 'react'
 

const styles ={
    title:{
        marginBottom: '30px',
    }
}

class Title extends Component {
    render(){
        return(
            <h1 style={styles.title}>Tienda Online</h1> /* agregar el titulo*/ 
        )
    }
}

export default Title
import { Component } from 'react'

const styles= {
    logo: {
        fontweigth:'700',
        fontSize:'2rem',
    }
}
class Logo extends Component {
    render(){
        return(
            <div style={styles.logo}>
                Shop
            </div>
        )
    }
}

export default Logo
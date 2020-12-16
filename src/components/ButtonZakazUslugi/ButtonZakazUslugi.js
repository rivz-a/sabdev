import React from "react"
import './ButtonZakazUslugi.scss'

class ButtonZakazUslugi extends React.Component{
    render(){
        return(
            <button className="ButtonZakazUslugi">
                { this.props.children }
            </button> 
        )
    }
}
export default ButtonZakazUslugi

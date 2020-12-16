import React from 'react'
import './ButtonQuestion.scss'

class ButtonQuestion extends React.Component{
    render(){
        return(
            <button className="ButtonQuestion">
               { this.props.children }
            </button> 
        )
    }
}
export default ButtonQuestion
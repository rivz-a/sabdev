import React from 'react'
import './HeaderblockPhone.scss'

class HeaderblockPhone extends React.Component{
    render(){
        return(
            <div className="HeaderblockPhone">
                <div className="Block1"><a href="tel:+79176164148" title="Позвонить +7(917)616-41-48"><img src="./img/phone.png" alt="Телефон"></img></a></div>
                <div className="Block2">
                    <div><strong>Позвоните нам</strong></div>  
                    <div><a href="tel:+79176164148">+7(917)616-41-48</a></div>                    
                </div>
            </div> 
        )
    }
}
export default HeaderblockPhone
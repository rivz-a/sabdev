import React from 'react'
import './Header.scss'
import Headertop from './Headertop/Headertop'
import HeaderblockMail from './HeaderblockMail/HeaderblockMail'
import HeaderblockPhone from './HeaderblockPhone/HeaderblockPhone'
import ButtonQuestion from '../ButtonQuestion/ButtonQuestion'

const Header = props => {
    
    return(
            <div className="Header">
                 <Headertop />
                 <div className="HeaderBlock">
                     <div className="Logo">Лого</div>
                     { props.windowInnerWidth ? <HeaderblockMail /> : null}
                     <HeaderblockPhone />                     
                     { props.windowInnerWidth 
                     ? <ButtonQuestion>Задать вопрос</ButtonQuestion>
                     : null                     
                     }
                 </div>
            </div>
        )    
}

export default Header
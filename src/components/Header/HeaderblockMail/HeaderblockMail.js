import React from 'react'
import './HeaderblockMail.scss'

class HeaderblockMail extends React.Component{
    render(){
        return(
            <div className="HeaderblockMail">
                <div className="Block1"><a href="mailto:info@sabweb.ru" title="Написать info@sabweb.ru"><img src="./img/mail.png" alt="Почта"></img></a></div>
                <div className="Block2">
                    <div><strong>Напишите нам!</strong></div>
                    <div><a href="mailto:info@sabweb.ru">info@sabweb.ru</a></div>
                    
                </div>
            </div> 
        )
    }
}
export default HeaderblockMail
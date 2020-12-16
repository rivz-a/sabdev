import React from 'react'
import './Headertop.scss'

class Headertop extends React.Component{

    state = {        
        src: [
            {
                way: './img/telega.png',
                wayhover: './img/telega-click.png',
                onHover: false
             },
             {
                 way: './img/whatsApp.png',
                 wayhover: './img/whatsApp-click.png',
                 onHover: false
             },
             {
                 way: './img/insta.png',
                 wayhover: './img/insta-click.png',
                 onHover: false
             }        
        ]
    }    

    onHoverHandler = (index, e) => {
        const newSrc = this.state.src.map((item, i) => {
            if (i === index) {
                return {...item, onHover: !item.onHover};
            }else {
                return {...item, onHover: false};
            }
        });
       this.setState({ src: newSrc }); 
    }

    render() {
        return(
            <div className="Top">
                    <div className="Block">
                        <div className="Left-line">                            
                            <a href="" >                               
                                <img 
                                    onMouseOver={ ()=>{this.onHoverHandler(0)} }
                                    onMouseOut={ ()=>{this.onHoverHandler(0)} } 
                                    src={this.state.src[0].onHover ? this.state.src[0].wayhover : this.state.src[0].way} 
                                    alt="Telegram">
                                </img>
                            </a>                            
                        </div>
                         <div className="Left-line">
                            <a href="">
                            <img 
                                    onMouseOver={ ()=>{this.onHoverHandler(1)} }
                                    onMouseOut={ ()=>{this.onHoverHandler(1)} } 
                                    src={this.state.src[1].onHover ? this.state.src[1].wayhover : this.state.src[1].way} 
                                    alt="Telegram">
                                </img>
                            </a>  
                        </div>
                        <div className="Left-line Right-Line">       
                            <a href="">                     
                            <img 
                                    onMouseOver={ ()=>{this.onHoverHandler(2)} }
                                    onMouseOut={ ()=>{this.onHoverHandler(2)} } 
                                    src={this.state.src[2].onHover ? this.state.src[2].wayhover : this.state.src[2].way} 
                                    alt="Telegram">
                                </img>
                            </a>   
                        </div> 
                    </div>                    
                </div>
        )
    }
}

export default Headertop
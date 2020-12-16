import React, {Component} from 'react'
import "./Layout.scss"
import Header from "../../components/Header/Header"
import Menu from '../../components/Menu/Menu'
import MenuToggle from '../../components/MenuToggle/MenuToggle'

class Layout extends Component{
    state = {
        menu: false,
        widthWindows: true
    }

    constructor(props) {
        super(props)
        if (window.innerWidth < 1124 ){
            this.state = {
                widthWindows: !this.state.widthWindows
            }
        }
    }

    toggleMenuHandler = () =>{
        this.setState({
            menu: !this.state.menu
        })
    }

    render(){
        
        return(            
            <div className="Layout">
                {  !this.state.widthWindows 
                ?   <MenuToggle 
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                    />  
                : null
                }                
                
                <Header 
                    windowInnerWidth={ this.state.widthWindows ? true: false}
                />
                { this.state.widthWindows ?  <Menu />: null }
                
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
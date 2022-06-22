import React, { Component } from 'react'
import "./Menu.scss"

class Menu extends Component {

    state = [
        { name: 'Главная', url: '/' },
        { name: 'SEO', url: '/seo' },
        { name: 'WEB - дизайн', url: '/dizain' },
        { name: 'WEB - разработка', url: '/web' },
        { name: 'Автоматизация бизнеса', url: '/auto' },
        { name: 'Мобильная разработка', url: '/mobil' },
    ]

    renderLinks() {
        return (
            this.state.map((link, index) => {
                return (
                    <li key={index}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                )
            })
        )
    }

    render() {
        return (
            <div className="Menu">
                <div className="MenuBlock">
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu
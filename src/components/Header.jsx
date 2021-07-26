import React from 'react'
import { Link } from 'react-router-dom'
import BasketImg from '../assets/BasketImg'

function Header() {
    return (
        <header className='header'>
            <div className="wr">
                <div className="head">
                <Link to="/">
                <h1>Basket </h1>
                </Link>
                    
                    <Link to='/basket'>
                    <div className="basket">
                    <div className="basket-counter">1</div>
                        <BasketImg />
                    </div>
                    </Link>
                   
                </div>
            </div>
        </header>
    )
}

export default Header

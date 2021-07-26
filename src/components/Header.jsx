import React from 'react'
import { Link } from 'react-router-dom'
import BasketImg from '../assets/BasketImg'
import {useSelector} from 'react-redux'
function Header() {
    const items = useSelector(state => state.Basket.items)
    return (
        <header className='header'>
            <div className="wr">
                <div className="head">
                <Link to="/">
                <h1>Basket </h1>
                </Link>
                    
                    <Link to='/basket'>
                    <div className="basket">
                    <div className="basket-counter">{items.length}</div>
                        <BasketImg />
                    </div>
                    </Link>
                   
                </div>
            </div>
        </header>
    )
}

export default Header

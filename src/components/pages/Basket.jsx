import React from 'react'
import{useSelector} from 'react-redux'

function Basket() {
    
    const items = useSelector(state => state.Basket.items)

    return (
        <div className='basket-body'>
        {items.length === 0 ? ' Ничего нету:(' : items.map((item,key)=> {
            return(
                <React.Fragment key={key}>
                    {item.name && item.name.ru}
                </React.Fragment>
                )
        })}
            
        </div>
    )
}

export default Basket

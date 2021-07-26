import React from 'react'
import{useDispatch, useSelector} from 'react-redux'

function Item({id, name, price, img }) {

    const dispatch = useDispatch()

    const addToBasket = () => {
        const obj = {
            id,
            img,
            name,
            price,
        }
        dispatch({type: 'ADD_TO_BASKET', payload: obj})
    }

    return (
        <div className='item'>
        <img src={`https://polaris-shop.com.ua/imgcache/medium/${id}/small/${img}`} alt="" />
            {name && name.ru}
            <div className="price">
                {price} uah
            </div>
            <div className='btn' onClick={addToBasket}>Купить</div>
        </div>
    )
}

export default Item

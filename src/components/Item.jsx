import React from 'react'

function Item({id, name, price, img}) {
    return (
        <div className='item'>
        <img src={`https://polaris-shop.com.ua/imgcache/medium/${id}/small/${img}`} alt="" />
            {name && name.ru}
            <div className="price">
                {price} uah
            </div>
            <div className='btn'>Купить</div>
        </div>
    )
}

export default Item

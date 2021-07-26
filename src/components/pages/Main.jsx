import React from 'react'
import { getItems } from '../../actions/api'
import Item from '../Item'


function Main() {
    const [items, setItems] = React.useState([])
    const [sort, setSort] = React.useState()
    const [filteredItems, setFilteredItems] = React.useState()

    React.useEffect(() => {
        if (sort === "priceH") {
        setFilteredItems(items.sort((a, b)=>{
                const aPriceToNumber = a.price.replace(/\s/g, "")
                const bPriceToNumber = b.price.replace(/\s/g, "")

                return Number(bPriceToNumber) - Number(aPriceToNumber)
        }))
     }
       if (sort === "priceL") {
      setFilteredItems(items.sort((a, b)=> {
        const aPriceToNumber = a.price.replace(/\s/g, "")
        const bPriceToNumber = b.price.replace(/\s/g, "")

        return Number(aPriceToNumber ) - Number(bPriceToNumber)
      }))
     }
         }, [sort])
    React.useEffect(() => {
        getItems().then(resp => {setItems(resp.items) 
            setFilteredItems(resp.items)})
    }, [])
    console.log(filteredItems);

   
    return (
        <>
        <div className="sort">
            <div className="priceH" onClick={() => setSort("priceH")}>От дешовых к дорогим</div>
            <div className="priceL" onClick={() => setSort("priceL")}>От дорогиг к дешевим</div>
        </div>
        <div className='wrap'>
            
            {filteredItems && filteredItems.map((item, key)=> {
                return(
                    <React.Fragment key={key}> 
                        <Item id={item.id} name={item.name} price={item.price} img={item.mainImg}/>
                    </React.Fragment>
                )
            })}
        </div>
        </>
    )
}

export default Main

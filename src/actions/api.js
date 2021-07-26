import axios from "axios";


const API = 'https://polaris-shop.com.ua/api/'


export const getItems = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${API}get_products_by_cat/112`)
            .then(response => {
                resolve(response.data)
            })
            .catch(e => {
                if (e.response && e.response.data && e.response.data.msg) reject(e.response.data.msg)
                else reject(e.message)
            })
    })
}
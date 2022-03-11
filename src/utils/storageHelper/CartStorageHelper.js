
export const setCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
}


export const getCartFromLocalStorage = () => {
    if (localStorage.getItem('cart') == undefined || localStorage.getItem('cart') == null) {
        return [];
    }
    else{
        return JSON.parse(localStorage.getItem('cart'))

    }
}
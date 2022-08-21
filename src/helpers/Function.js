

const isInCart = (cartState , id) =>{
    const result = !!cartState.selectedItems.find(item => item.id === id)
    return result;
}
export {isInCart}
const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button className="btn btn-outline-info">Carrito</button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;

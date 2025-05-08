import React from "react";
import "./order.css";
import TicketCounter from "../ticketCounter/TicketCounter";
import useCartStore from "../../hooks/useCartStore";

//importera increase, decrease och counter - börja där + använd cartItem istället för ticketStore

const Order = () => {

    const cart = useCartStore((state) => state.cart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

    console.log('Kundvagn:', cart)

    return (
        <div className="orders">

            {cart.length === 0 ? (
                <p className="order-box__empty">Inga biljetter i varukorgen</p>
            ) : (
                cart.map((item) => (
                    <div className="order-box" key={item.id}>
                        <section className="order-box__info">
                            <h2>{item.name}</h2>
                            <h3>{item.date} {item.from} - {item.to}</h3>
                        </section>
                        <TicketCounter
                            tickets={item.quantity}
                            handleIncrease={() => increaseQuantity(item.id)}
                            handleDecrease={() => decreaseQuantity(item.id)}
                        />
                    </div>

                ))
            )}
        </div>
    )
}

export default Order;
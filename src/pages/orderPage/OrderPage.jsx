import React, {useEffect, useState } from "react";
import "./orderPage.css";
import OrderBtn from "../../components/orderBtn/OrderBtn";
import HomeIcon from "../../components/homeIcon/HomeIcon";
import NavBar from "../../components/navBar/NavBar";
import Heading from "../../components/heading/Heading";
import Order from "../../components/order/Order";
import useCartStore from "../../hooks/useCartStore";
import TrashIcon from "../../components/trashIcon/TrashIcon";

const OrderPage = () => {

    const cart = useCartStore((state) => state.cart);  // Hämta cart
    const getTotalPrice = useCartStore((state) => state.getTotalPrice);  // Hämta totalpris
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(getTotalPrice());
    }, [cart]);  //Säkerställer att setTotal(getTotalPrice()) körs varje gång cart ändras.

    return (
        <div className="order-container">
            <HomeIcon />
            <section className="order-info">
                <Heading text="Order"/>
                <Order />  
                <section className="order-summarize">
                    <h2 className="order-summarize__text">Totalt värde på order</h2>
                    <p className="order-summarize__sum">{total} sek</p>
                </section>
            </section>

            <TrashIcon />
            <OrderBtn text={"Skicka order"} />
            <NavBar />
        </div>
    )
}

export default OrderPage;
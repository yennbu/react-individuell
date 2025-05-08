import React from "react";
import "./buyTicket.css";
import OrderBtn from "../../components/orderBtn/OrderBtn";
import NavBar from "../../components/navBar/NavBar";
import HomeIcon from "../../components/homeIcon/HomeIcon";
import Heading from "../../components/heading/Heading";
import TicketCounter from "../../components/ticketCounter/TicketCounter";
import { useParams } from "react-router-dom";
import useFetchEvents from "../../hooks/FetchEvents";
import useCartStore from "../../hooks/useCartStore";

const BuyTicket = () => {

    const { addToCart } = useCartStore();
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const { cart } = useCartStore();

    const { id } = useParams(); // fångar id:t från URL - Från hemsidan: The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
    const { events, loading, error } = useFetchEvents();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const event = events.find(e => e.id === id);
    if (!event) return <p>Event not found</p>;

    const item = cart.find(i => i.id === event.id);
    const tickets = item ? item.quantity : 0;

    const generateSeat = () => {
        const chars = '0123456789';
        let result = '';
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }
        return result;
    };

    const generateSection = () => {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex].toUpperCase();
      };
      

    const handleAddToCart = () => {
        const newTicket = {
            id: event.id,
            name: event.name,
            price: event.price,
            total: event.price * tickets,
            date: event.when.date,
            from: event.when.from,
            to: event.when.to,
            where: event.where,
            quantity: tickets,
            section: generateSection(),
            seat: generateSeat(),
        };

        addToCart(newTicket);
    };

    const handleIncrease = () => {
        if (item) {
            increaseQuantity(item.id);
        } else {

            handleAddToCart();
            increaseQuantity(event.id); //Det kanske hade varit snyggare att sköta det här direkt i useCartStore, men jag fick det inte att funka, så jag bråkade inte om det ...
        }
    };

    const handleDecrease = () => {
        if (item) {
            decreaseQuantity(item.id);
        }
    };


    return (
        <div className="buy-ticket__container">
            <HomeIcon />
            <Heading text="Event" />
            <h2 className="buy-ticket__heading">You're about to score some tickets to</h2>
            <section className="buy-ticket__info">
                <h3>{event.name}</h3>
                <h4>{event.when.date} {event.when.from} - {event.when.to}</h4>
                <p>@ {event.where}</p>
            </section>
            <section className="buy-ticket__box">
                <h2 className="buy-ticket__sum">{event.price * tickets} sek</h2>
                <TicketCounter
                    tickets={tickets}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease} />
            </section>
            <OrderBtn text="Lägg i varukorgen" /*onClick={handleAddToCart}*/ />
            <NavBar />
        </div>
    )
}

export default BuyTicket;
import React from "react";
import "./ticket.css";
import BarCode from "../../assets/images/streckkod.png";
import useCartStore from "../../hooks/useCartStore";
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Ticket = () => {

  const cart = useCartStore((state) => state.cart);
  console.log('Biljetter', cart);

  const generateOrderNumber = () => {
    const fullUuid = uuidv4();
    const shortId = fullUuid.slice(0, 5).toUpperCase();
    return shortId;  
  }; //Generera ett id genom uuid, korta sedan ner längden och returnera den korta versionen 

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
    >

      {cart.flatMap((item) =>
        Array.from({ length: item.quantity }, (_, index) => (
          <SwiperSlide key={`${item.id}-${index}`} >
          <article className="ticket-container">
            <h2 className="ticket__heading">{item.name}</h2>
            <section className="ticket__place-container">
              <h3>Where</h3>
              <h4>{item.where}</h4>
            </section>
            <div className="ticket__time-container">
              <section className="ticket__time-element">
                <h3>When</h3>
                <p>{item.date}</p>
              </section>
              <section className="ticket__time-element">
                <h3>From</h3>
                <p>{item.from}</p>
              </section>
              <section className="ticket__time-element" id="no-border-right">
                <h3>To</h3>
                <p>{item.to}</p>
              </section>
            </div>
            <section className="ticket__info-container">
              <h3>Info</h3>
              <p>Section {item.section}  - Seat {item.seat++}</p>
            </section>
            <div className="ticket__ordernumber-container">
              <img src={BarCode} alt="Barcode" />
              <p>#{generateOrderNumber()}</p>
            </div>
          </article>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}

export default Ticket;
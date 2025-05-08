import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import EventPage from './pages/eventPage/EventPage.jsx';
import BuyTicket from './pages/buyTicket/BuyTicket.jsx';
import TicketPage from './pages/ticketPage/TicketsPage.jsx';
import OrderPage from './pages/orderPage/OrderPage.jsx';
import Test from './pages/Test.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>
  },
  {
    path: "/events",
    element: <EventPage />
  },
  {
    path: "/events/:id",
    element: <BuyTicket />
  },
  {
    path: "/order",
    element: <OrderPage />
  },
  {
    path: "/tickets",
    element: <TicketPage />
  },
  {
    path: "/test",
    element: <Test />
  }
]);

export default router;
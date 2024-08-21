import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/landing';
import SignIn from './components/signIn';
import Home from './components/home';
import MovieDetails from './components/movieDetails';
import BuyTickets from './components/buyTickets';
import TicketDetails from './components/ticketDetails';
import PaymentStatus from './components/paymentStatus';
import ViewTicket from './components/viewTicket';

function App() {
  return (
    <div className='h-screen w-screen flex justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie-details" element={<MovieDetails />} />
          <Route path="/buy-tickets" element={<BuyTickets />} />
          <Route path="/ticket-details" element={<TicketDetails />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
          <Route path="/view-ticket" element={<ViewTicket />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import { useReducer } from "react";

const useFunction = (state, action) => {
  switch (action.type) {
    case "bookedTickets":
      return {
        ...state,
        bookedTickets: state.bookedTickets + action.no_OfBooked,
        totalTickets: state.totalTickets - action.no_OfBooked,
      };
    case "holdingTickets":
      return {
        ...state,
        holdingTickets: state.holdingTickets + action.no_OfHolding,
        totalTickets: state.totalTickets - action.no_OfHolding,
      };
    default:
      return state.totalTickets;
  }
};

const state = {
  totalTickets: 100,
  bookedTickets: 20,
  holdingTickets: 10,
};

export const UseReduceFun = () => {
  const [ticket, setTicket] = useReducer(useFunction, state);
  const myBookings = () => {
    setTicket({
      type: "bookedTickets",
      no_OfBooked: 1,
    });
  };
  const myHoldings = () => {
    setTicket({
      type: "holdingTickets",
      no_OfHolding: 1,
    });
  };

  return (
    <>
      <h2>totalTickets{ticket.totalTickets}</h2>
      <h2>totalTickets{ticket.bookedTickets}</h2>
      <h2>totalTickets{ticket.holdingTickets}</h2>
      <button
        className="btn btn-primary btn-outline-secondary"
        onClick={myBookings}
      >
        Bookings
      </button>
      <button className="btn btn-warning btn-outline-info" onClick={myHoldings}>
        Holdings
      </button>
    </>
  );
};

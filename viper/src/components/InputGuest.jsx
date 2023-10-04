/* eslint-disable no-case-declarations */
import React, { useReducer } from "react";
import GuestDisplay from "./GuestDisplay";
import Navbar from "./Common/NavBar/Navbar";
let initialState = {
  count: 1,
  guestList: ["Mahesh", "Vinak"],
  currentGuest: "",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "adding":
      const { cname } = action.payload;
      return { ...state, currentGuest: cname };
    case "add":
      return {
        ...state,
        guestList: [...state.guestList, state.currentGuest],
        currentGuest: "",
      };
    case "deleteGuest":
      const glist = state.guestList;
      return state;
    default:
      return state;
  }
};
function InputGuest() {
  const [guests, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Navbar />
      <h1>Invite Sender </h1>
      <div className="guest-input-container">
        <label htmlFor="guest-list " className="fd">
          Add Guest
        </label>
        <input
          type="text"
          className="guest-list"
          id="guest-list"
          name="guest-list"
          value={guests.currentGuest}
          onChange={(e) => {
            dispatch({ type: "adding", payload: { cname: e.target.value } });
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "add" });
          }}
        >
          add
        </button>
        <GuestDisplay glist={guests.guestList} />
      </div>
    </>
  );
}

export default InputGuest;

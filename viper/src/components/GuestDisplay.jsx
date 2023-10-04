import { useMemo } from "react";

function GuestDisplay({ glist }) {
  console.log("rendering");
  let myList = useMemo(() => {
    return glist.map((guest, index) => {
      console.log("list render");
      return <div key={index}>{guest}</div>;
    });
  }, [glist]);
  return <div>{myList}</div>;
}

export default GuestDisplay;

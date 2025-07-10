import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    console.log("navbar loaded");
  }, []);
  
  return <div>Navbar</div>;
}

export default Navbar;

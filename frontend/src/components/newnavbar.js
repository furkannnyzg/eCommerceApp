import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo2.png";

export default function Newnavbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-4 bg-orange-600 h-">
    <div >1</div>
    <div className="col-start-3">3</div>
    <div className="col-start-4">4</div>
    <div className="col-start-5">5</div>
</div>
  );
}

import { IoClose } from "react-icons/io5";
import "./Top.scss"
import React, { memo, useState } from "react";

const Top: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={`top__big ${open ? "top__close" : ""}`}>
        <div id='container'>
          <div className="top">
            <div className="top__box">
              <h3 className="top__box__title">Sign up and get 20% off to your first order. <span>Sign Up Now</span></h3>
            </div>
            <button onClick={toggleSidebar} className="top__btn"><IoClose /></button>
          </div>
        </div>
      </div>

    </>
  )
}

export default memo(Top)
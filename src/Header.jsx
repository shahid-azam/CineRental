import { useContext, useState } from "react";
import Moon from "../public/icons/moon.svg";
import Sun from "../public/icons/sun.svg";
import CartDetails from "./cinema/CartDetails";
import { MovieContext, ThemeContext } from "./context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  console.log(state.cartData);
  function handleCartShow() {
    setShowCart(true);
  }
  return (
    <>
      <header>
        {showCart && <CartDetails onClose={() => setShowCart(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src="../logo.svg" width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src="../ring.svg"
                  width="24"
                  height="24"
                  alt="Notifications"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt="DarkMode"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src="../shopping-cart.svg"
                  width="24"
                  height="24"
                  alt="Cart"
                  onClick={() => handleCartShow(true)}
                />
                {state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] text-white text-center p-[1px] w-[20px] h-[25px]">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

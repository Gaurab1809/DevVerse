import { Outlet } from "react-router-dom";
import Navbar from "../../Components/DesignAllTogether/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SignModal from "../../Components/Masud/SignModal";

const Main = () => {
  const { logout, user, isModalOpen } = useContext(AuthContext);
  const [clickPp, setClickPp] = useState(false);
  const [focusInput, setFocusInput] = useState(false);

  const handleClose = () => {
    clickPp && setClickPp(false);
  };

  const handleSearchClose = () => {
    focusInput && setFocusInput(false);
  };

  return (
    <section
      onClick={() => {
        handleClose();
        handleSearchClose();
      }}
      className={`text-black dark:text-white font-Montserrat`}
    >
      <Navbar
        setClickPp={setClickPp}
        clickPp={clickPp}
        setFocusInput={setFocusInput}
        focusInput={focusInput}
      ></Navbar>
      <div className="h-[56px]"></div>
      <div className="xl:ml-[256px]">
        {isModalOpen && user === null && <SignModal></SignModal>}
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Main;

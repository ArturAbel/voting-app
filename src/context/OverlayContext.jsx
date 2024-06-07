import { createContext, useState, useContext } from "react";

const OverlayContext = createContext();

const OverlayProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);

  const handleOverlay = () => setOverlay((prevOverlay) => !prevOverlay);

  return (
    <OverlayContext.Provider
      value={{
        handleOverlay,
        setOverlay,
        overlay,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

const useOverlayContext = () => {
  return useContext(OverlayContext);
};

export { OverlayContext, OverlayProvider, useOverlayContext };

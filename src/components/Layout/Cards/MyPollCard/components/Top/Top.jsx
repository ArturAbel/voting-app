import { setCapitalSentence } from "../../../../../../utils/content/text";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

const Top = ({ poll }) => {
  const [isClicked, setIsClicked] = useState(false);
  const popupRef = useRef(null);

  const handleSettingIconClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    if (isClicked) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isClicked]);

  return (
    <>
      <div className={styles.top}>
        <div className={styles.avatar}>
          <img className={styles.image} src={poll.createdByImage}></img>
        </div>
        <p className={styles.title}>{setCapitalSentence(poll.title)}</p>
        <div className={styles.options} ref={popupRef}>
          <PiDotsThreeOutlineFill onClick={handleSettingIconClick} />
          {isClicked && (
            <div className={styles.popup}>
              <div className={styles.option}>Edit</div>
              <div className={styles.line}></div>
              <div className={`${styles.option} ${styles.delete}`}>Delete</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Top;

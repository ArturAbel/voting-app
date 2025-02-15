import { checkIfPollExpired } from "../../../utils/content/text";
import { useThemeStyles } from "../../../hooks/useThemeStyles";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Filter = ({ polls, setFilteredPolls }) => {
  const [isButtonClicked, setIsButtonClicked] = useState({ privatePolls: false, openPolls: false });
  const styles = useThemeStyles(lightStyles, darkStyles);

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    const filteredBySearch =
      value !== "" && value.length >= 2
        ? polls.filter((poll) => poll.title.toLowerCase().includes(value.toLowerCase()))
        : polls;
    setFilteredPolls(filteredBySearch);
    applyFilters(filteredBySearch, isButtonClicked);
  };

  const handleButtonClick = (buttonName) => {
    setIsButtonClicked((prevState) => {
      const newState = { ...prevState, [buttonName]: !prevState[buttonName] };
      applyFilters(polls, newState);
      return newState;
    });
  };

  const applyFilters = (pollsToFilter, buttonState) => {
    const { privatePolls, openPolls } = buttonState;
    let filtered = pollsToFilter;
    if (privatePolls) {
      filtered = filtered.filter((poll) => poll.visibility === "private");
    }
    if (openPolls) {
      filtered = filtered.filter((poll) => checkIfPollExpired(poll.closeAt) === "Open");
    }
    setFilteredPolls(filtered);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.searchContainer}>
        <input className={styles.input} type="text" placeholder="Search a poll" onChange={handleInputChange} />
        <IoSearch className={styles.searchIcon} />
      </div>
      <div className={styles.buttons}>
        <div
          className={`${styles.button} ${isButtonClicked.privatePolls && styles.active}`}
          onClick={() => handleButtonClick("privatePolls")}
        >
          Private
        </div>
        <div
          className={`${styles.button} ${isButtonClicked.openPolls && styles.active}`}
          onClick={() => handleButtonClick("openPolls")}
        >
          Open
        </div>
      </div>
    </div>
  );
};

export default Filter;

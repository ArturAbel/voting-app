import { getUserFromDB } from "../../../../../api/user/getUserFromDB";
import { defaultProfileImage } from "../../../../../constants/data";
import { useEffect, useState } from "react";

import lightStyles from "./lightStyles.module.css";

const Creator = ({ poll }) => {
  const [user, setUser] = useState({});

  useEffect(() => { 
    async function loadUser() {
      const user = await getUserFromDB(poll.createdBy.user);
      setUser(user);
    }
    loadUser();
  }, [poll]);

  if (!poll) return <div>Loading...</div>;

  return (
    <div className={lightStyles.createdContainer}>
      <div className={lightStyles.createdImageContainer}>
        <img src={defaultProfileImage} className={lightStyles.createdImage} alt={poll.createdBy.user} />
      </div>
      {/* Add name and data loader, text loader */}
      <div className={lightStyles.createdName}>{user.displayName}</div>
    </div>
  );
};

export default Creator;

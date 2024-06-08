import { PieChart } from "../../components/PieChart/PieChart";
import { UserTab } from "../../components/UserTab/UserTab";

import "./AdminPage.css";

export const AdminPage = ({ users }) => {
  return (
    <section className="admin-section">
      <div>
        <h2 className="admin-title">Chart</h2>
        <div className="admin-container">
          <PieChart />
        </div>
      </div>

      <div>
        <h2 className="admin-title">Users</h2>
        <div className="admin-container users">
          {users.map((user) => {
            const { fullName, email, image, isVoted, id } = user;
            return (
              <UserTab
                key={id}
                fullName={fullName}
                email={email}
                image={image}
                isVoted={isVoted}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

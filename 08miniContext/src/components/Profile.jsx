import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not logged in</h1>;
  return (
    <div>
      <h1>
        Profile: {user?.username} | {user?.password}
      </h1>
      <h2>More component here</h2>
    </div>
  );
}

export default Profile;

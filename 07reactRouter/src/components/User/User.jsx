import React from "react";
import { Outlet, useParams } from "react-router-dom"; // this params allow us the extract everything after ":" in the route, see this in main.jsx

function User() {
  const { userid } = useParams(); // make sure the name MATCHES what is typed in the route in main.jsx!
  console.log(userid);
  return (
    <>
      <div className="bg-orange-500 text-black text-3xl text-center">
        User: {userid}
        <Outlet />
      </div>
    </>
  );
}

export default User;

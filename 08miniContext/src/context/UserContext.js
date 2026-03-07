// can create multiple context for multiple things, like TweetContext or VideoContext etc.
import React from "react";

const UserContext = React.createContext();

export default UserContext; // step 1: create context, then we move to step 2 to provide the context (aka provide data to context, this is in the UserContextProvider.jsx file)

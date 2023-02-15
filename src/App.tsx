import "./App.css";
import Profile from "pages/Profile";
import userExample from "data/user";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Profile user={userExample} />
    </ChakraProvider>
  );
};

export default App;

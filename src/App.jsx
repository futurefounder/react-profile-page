import { useState } from "react";
// import SocialProfileSimple from "./components/SocialProfileSimple";
import Info from "./components/Info";
import About from "./components/About";
import "./App.css";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <div className="App">
        <Info />
      </div>
    </ChakraProvider>
  );
}

export default App;

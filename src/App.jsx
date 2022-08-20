import { useState } from "react";
// import Info from "./components/Info";
import SocialProfileSimple from "./components/SocialProfileSimple";
import "./App.css";
// import About from "./components/About";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <div className="App">
        <SocialProfileSimple />
      </div>
    </ChakraProvider>
  );
}

export default App;

import React, {useState} from "react";
import FormWrapper from "./components/FormWrapper";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import UserContext from "./context/UserContext";

function App() {
  const [userName, setUserName] = useState('')

  return (
    <UserContext.Provider value={{userName, setUserName}}>
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
    </UserContext.Provider >
  );
}

export default App;

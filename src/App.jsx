import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration >= 1;

  const handleChange = (identifier, value) => {
    setUserInput((prev) => {
      return { ...prev, [identifier]: +value };
    });
  };

  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChange={handleChange} />
      {isValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;

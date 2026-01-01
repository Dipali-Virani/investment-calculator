import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Table from "./components/Table/Table";

function App() {
  const [userData, setUserData] = useState(null);

  const calculateHandler = (inputData) => {
    setUserData(inputData);
  };

  const yearlyData = [];
  if (userData) {
    let currentSavings = +userData["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userData["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userData["expected-return"] / 100;
    const duration = +userData["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={(inputData) => calculateHandler(inputData)} />

      {yearlyData.length === 0 && (
        <p style={{ textAlign: "center" }}>No Investment Calculated Yet.</p>
      )}
      {yearlyData.length > 0 && (
        <Table
          resultData={yearlyData}
          initialInvestment={userData["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;

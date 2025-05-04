import { useState } from "react";
import UserInputForm from "../components/UserInputForm";
import ResultsCard from "../components/ResultsCard";
import Visualization from "../components/Visualization";

export default function Home() {
  const [dados, setDados] = useState(null);

  const handleCalculo = (input) => {
    setDados(input);
  };

  return (
    <div className="space-y-8">
      <UserInputForm onCalculate={handleCalculo} />
      {dados && (
        <>
          <ResultsCard input={dados} />
          <Visualization input={dados} />
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import UserInputForm from "../components/UserInputForm";
import ResultsCard from "../components/ResultsCard";
import Visualization from "../components/Visualization";
import PhysicsBackground from "../components/PhysicsBackground";
import FloatingMenu from "../components/FloatingMenu";

export default function Home() {
  const [dados, setDados] = useState(null);

  const handleCalculo = (input) => {
    setDados(input);
  };

  return (
    <div className="relative space-y-8 min-h-screen">
      <PhysicsBackground />
      <UserInputForm onCalculate={handleCalculo} />
      {dados && (
        <>
          <ResultsCard input={dados} />
          <Visualization input={dados} />
        </>
      )}
      <FloatingMenu />
    </div>
  );
}

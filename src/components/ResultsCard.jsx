export default function ResultsCard({ input }) {
    const g = 9.81; // gravidade (m/s²)
  
    const empuxo = input.density * g * input.volumeSubmerso;
    const pesoReal = input.mass * g;
    const pesoAparente = pesoReal - empuxo;
  
    let resultado = "";
    if (pesoAparente > 0.01) resultado = "Afunda";
    else if (pesoAparente < -0.01) resultado = "Flutua";
    else resultado = "Em equilíbrio";
  
    return (
      <div className="bg-white p-6 rounded-md shadow max-w-xl mx-auto space-y-4 mt-6 w-full">
  <h2 className="text-2xl font-bold text-green-700 text-center">Resultados</h2>

  <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start max-w-[500px] w-full gap-6 mx-auto">
    <div className="flex flex-col gap-4 w-full sm:w-1/2 items-center sm:items-start text-center sm:text-left">
      <div>
        <p className="font-medium text-xl">Empuxo:</p>
        <p className="text-blue-600">{empuxo.toFixed(2)} N</p>
      </div>

      <div>
        <p className="font-medium text-xl">Peso Real:</p>
        <p className="text-gray-800">{pesoReal.toFixed(2)} N</p>
      </div>
    </div>

    <div className="flex flex-col gap-4 w-full sm:w-1/2 items-center sm:items-start text-center sm:text-left">
      <div>
        <p className="font-medium text-xl">Peso Aparente:</p>
        <p className="text-purple-600">{pesoAparente.toFixed(2)} N</p>
      </div>

      <div>
        <p className="font-medium text-xl">Resultado:</p>
        <p className="text-red-600 font-semibold">{resultado}</p>
      </div>
    </div>
  </div>
</div>

    );
  }
  
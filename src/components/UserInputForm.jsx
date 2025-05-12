import { useState } from "react";

const LIQUIDS = [
  { name: "Água", density: 1000 },
  { name: "Óleo", density: 900 },
  { name: "Mercúrio", density: 13546 },
  { name: "Outro", density: null },
];

export default function UserInputForm({ onCalculate }) {
  const [liquid, setLiquid] = useState("Água");
  const [customDensity, setCustomDensity] = useState("");
  const [mass, setMass] = useState("");
  const [volumeTotal, setVolumeTotal] = useState("");
  const [volumeSubmerso, setVolumeSubmerso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = LIQUIDS.find((l) => l.name === liquid);
    const density = selected.density ?? parseFloat(customDensity);

    onCalculate({
      density,
      mass: parseFloat(mass),
      volumeTotal: parseFloat(volumeTotal),
      volumeSubmerso: parseFloat(volumeSubmerso),
    });
  };

  return (
<form
  onSubmit={handleSubmit}
  className="bg-[#3f3f46] p-6 rounded-md shadow max-w-xl mx-auto space-y-4 w-full"
>
  <h2 className="text-xl font-semibold text-white text-center">
    Entradas da Simulação
  </h2>

  {/* Líquido */}
  <div>
    <label className="block mb-1 font-medium text-white">Líquido</label>
    <select
      className="w-full p-2 rounded border"
      value={liquid}
      onChange={(e) => setLiquid(e.target.value)}
    >
      {LIQUIDS.map((l) => (
        <option key={l.name} value={l.name}>
          {l.name}
        </option>
      ))}
    </select>
  </div>

  {/* Densidade personalizada */}
  {liquid === "Outro" && (
    <div>
      <label className="block mb-1 font-medium text-white">
        Densidade personalizada (kg/m³)
      </label>
      <input
        type="number"
        className="w-full p-2 rounded-3xl border"
        value={customDensity}
        onChange={(e) => setCustomDensity(e.target.value)}
        required
      />
    </div>
  )}

  {/* Massa */}
  <div>
    <label className="block mb-1 font-medium text-white">
      Massa do corpo (kg)
    </label>
    <input
      type="number"
      className="w-full p-2 rounded-3xl border"
      value={mass}
      onChange={(e) => setMass(e.target.value)}
      required
    />
  </div>

  <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
    {/* Volume Total */}
    <div className="w-full sm:w-1/2">
      <label className="block mb-1 font-medium text-white">
        Volume total do corpo (m³)
      </label>
      <input
        type="number"
        className="w-full p-2 rounded-3xl border"
        value={volumeTotal}
        onChange={(e) => setVolumeTotal(e.target.value)}
        required
      />
    </div>

    {/* Volume Submerso */}
    <div className="w-full sm:w-1/2">
      <label className="block mb-1 font-medium text-white">
        Volume submerso (m³)
      </label>
      <input
        type="number"
        className="w-full p-2 rounded-3xl border"
        value={volumeSubmerso}
        onChange={(e) => setVolumeSubmerso(e.target.value)}
        required
      />
    </div>
  </div>

  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl w-full mt-2 h-[50px] font-semibold"
  >
    Calcular
  </button>
</form>

  );
}

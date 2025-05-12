import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FloatingMenu from "../components/FloatingMenu";
import PhysicsBackground from "../components/PhysicsBackground";

const pages = [
  {
    title: "Princípio de Arquimedes",
    content: (
      <>
        <p className="mb-4">
          Este projeto foi desenvolvido para simular o <strong>Princípio de Arquimedes</strong>, um dos conceitos fundamentais da física dos fluidos.
        </p>
        <p>
          Ele afirma que todo corpo submerso total ou parcialmente em um fluido sofre uma força de empuxo, vertical e para cima, igual ao peso do fluido deslocado.
        </p>
      </>
    ),
  },
  {
    title: "Fórmula do Empuxo",
    content: (
      <>
        <p className="mb-2">
          A fórmula utilizada para calcular o empuxo é:
        </p>
        <code className="bg-gray-200 p-2 rounded block mb-4 text-center text-lg font-semibold">
          E = ρ × g × V
        </code>
        <ul className="list-disc list-inside">
          <li><strong>E</strong>: Empuxo (N)</li>
          <li><strong>ρ</strong>: Densidade do fluido (kg/m³)</li>
          <li><strong>g</strong>: Gravidade (9,8 m/s²)</li>
          <li><strong>V</strong>: Volume deslocado (m³)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Funcionamento do Simulador",
    content: (
      <>
        <p className="mb-4">
          O simulador calcula automaticamente o empuxo e compara com o peso do objeto:
        </p>
        <ul className="list-disc list-inside">
          <li>Se o empuxo &gt; peso → o objeto <strong>flutua</strong></li>
          <li>Se o empuxo &lt; peso → o objeto <strong>afunda</strong></li>
          <li>Se o empuxo = peso → o objeto <strong>permanece em equilíbrio</strong></li>
        </ul>
        <p className="mt-4">
          Com isso, é possível visualizar de forma prática como os princípios físicos se aplicam em situações reais.
        </p>
      </>
    ),
  },
];

export default function About() {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((prev) => (prev + 1) % pages.length);
  const prevPage = () => setPage((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <div className="relative flex items-center justify-center h-screen p-6">
  <PhysicsBackground />

  <div
    className="relative -mt-[100px] w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%] 
      bg-white border-4 rounded-xl shadow-lg 
      px-8 py-6 transition-all duration-500 ease-in-out transform animate-fade-in
      min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[400px]"
    style={{ fontFamily: "serif", position: "relative" }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6b4f1d] mb-4">
      {pages[page].title}
    </h2>

    <div className="text-[#3a2e1d] text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose h-full flex flex-col justify-center">
      {pages[page].content}
    </div>

    {/* Setas de navegação com mais espaçamento */}
    <button
      onClick={prevPage}
      className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 text-[#6b4f1d] hover:text-black transition"
    >
      <ChevronLeft size={40} />
    </button>
    <button
      onClick={nextPage}
      className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 text-[#6b4f1d] hover:text-black transition"
    >
      <ChevronRight size={40} />
    </button>
  </div>

  <FloatingMenu />
</div>

  );
}

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-blue-700">404</h1>
      <p className="text-xl mt-2">Página não encontrada</p>
      <Link to="/" className="mt-4 text-blue-500 underline">
        Voltar para o início
      </Link>
    </div>
  );
}

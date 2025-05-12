import FloatingMenu from "../components/FloatingMenu";
import PhysicsBackground from "../components/PhysicsBackground";

export default function Help() {
    return (
      <div className="p-4">
        <PhysicsBackground />
        <h2 className="text-xl font-semibold mb-2">Ajuda</h2>
        <p>Como usar o simulador passo a passo...</p>
        <FloatingMenu />
      </div>
    );
  }
  
export default function PhysicsBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-b from-sky-300 via-blue-400 to-blue-700">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0 w-4 h-4 bg-blue-100 rounded-full animate-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
}

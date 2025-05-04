import { Stage, Layer, Rect, Arrow, Text, Label, Tag } from "react-konva";

export default function Visualization({ input }) {
  const g = 9.81;
  const empuxo = input.density * g * input.volumeSubmerso;
  const peso = input.mass * g;
  const pesoAparente = peso - empuxo;

  // Estado do corpo
  let estado = "";
  if (pesoAparente > 0.01) estado = "Afunda";
  else if (pesoAparente < -0.01) estado = "Flutua";
  else estado = "Equilíbrio";

  // Tamanhos
  const corpoAltura = 50;
  const corpoLargura = 60;
  const proporcaoSubmersa = input.volumeSubmerso / input.volumeTotal;
  const submersoAltura = corpoAltura * proporcaoSubmersa;

  // Base do líquido
  const nivelAgua = 300; // linha base (fundo do recipiente)
  const alturaRecipiente = 125;

  // Posicionamento do corpo
  let yCorpo = nivelAgua - corpoAltura - 50; // padrão: equilíbrio
  if (estado === "Afunda") yCorpo = nivelAgua - corpoAltura + 20;
  else if (estado === "Flutua") yCorpo = nivelAgua - corpoAltura - 100;

  const ySubmerso = yCorpo + corpoAltura - submersoAltura;

  return (
    <div className="bg-white p-6 rounded-md shadow max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">Visualização Gráfica</h2>

      <div className="flex justify-center mt-[-80px]">

      <Stage width={300} height={400}>
        <Layer>
          {/* Recipiente */}
          <Rect
            x={40}
            y={nivelAgua - alturaRecipiente}
            width={220}
            height={alturaRecipiente}
            stroke="#0077cc"
            strokeWidth={4}
          />

          {/* Corpo */}
          <Rect
            x={120}
            y={yCorpo}
            width={corpoLargura}
            height={corpoAltura}
            fill="#aaaaaa"
            stroke={estado === "Afunda" ? "red" : estado === "Flutua" ? "green" : "orange"}
            strokeWidth={3}
            shadowColor="black"
            shadowBlur={5}
          />

          {/* Parte submersa */}
          <Rect
            x={120}
            y={ySubmerso}
            width={corpoLargura}
            height={submersoAltura}
            fill="#00bfff88"
          />

          {/* Vetores de força */}
          <Arrow
            points={[150, ySubmerso, 150, ySubmerso - 30]}
            stroke="green"
            fill="green"
            strokeWidth={4}
            pointerLength={10}
            pointerWidth={10}
          />
          <Text
            x={160}
            y={ySubmerso - 40}
            text="Empuxo"
            fontSize={14}
            fill="green"
          />

          <Arrow
            points={[150, yCorpo + corpoAltura, 150, yCorpo + corpoAltura + 30]}
            stroke="red"
            fill="red"
            strokeWidth={4}
            pointerLength={10}
            pointerWidth={10}
          />
          <Text
            x={160}
            y={yCorpo + corpoAltura + 10}
            text="Peso"
            fontSize={14}
            fill="red"
          />

          {/* Estado do corpo */}
          <Label x={90} y={yCorpo - 35}>
            <Tag
              fill={
                estado === "Afunda"
                  ? "#ffe0e0"
                  : estado === "Flutua"
                  ? "#e0ffe0"
                  : "#fff8cc"
              }
              stroke="black"
              cornerRadius={4}
            />
            <Text
              text={`Estado: ${estado}`}
              fontSize={16}
              padding={6}
              fill="#000"
              fontStyle="bold"
            />
          </Label>
        </Layer>
      </Stage>
      </div>
    </div>
  );
}


{/*
    import { Stage, Layer, Rect, Arrow, Text, Label, Tag } from "react-konva";

export default function Visualization({ input }) {
  const g = 9.81;
  const empuxo = input.density * g * input.volumeSubmerso;
  const peso = input.mass * g;
  const pesoAparente = peso - empuxo;

  // Estado do corpo
  let estado = "";
  if (pesoAparente > 0.01) estado = "Afunda";
  else if (pesoAparente < -0.01) estado = "Flutua";
  else estado = "Equilíbrio";

  // Tamanhos
  const corpoAltura = 120;
  const corpoLargura = 60;
  const proporcaoSubmersa = input.volumeSubmerso / input.volumeTotal;
  const submersoAltura = corpoAltura * proporcaoSubmersa;

  // Ajuste de posição do corpo
  let yCorpo = 250;
  if (estado === "Afunda") yCorpo = 180;
  else if (estado === "Flutua") yCorpo = 280;
  else if (estado === "Equilíbrio") yCorpo = 250;

  return (
    <div className="bg-white p-6 rounded-2xl shadow max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Visualização Gráfica</h2>

      <Stage width={300} height={400}>
        <Layer>
          <Rect
            x={40}
            y={80}
            width={220}
            height={240}
            stroke="#0077cc"
            strokeWidth={4}
          />

          <Rect
            x={120}
            y={yCorpo}
            width={corpoLargura}
            height={corpoAltura}
            fill="#aaaaaa"
            stroke={estado === "Afunda" ? "red" : estado === "Flutua" ? "green" : "orange"}
            strokeWidth={3}
            shadowColor="black"
            shadowBlur={5}
          />

          <Rect
            x={120}
            y={yCorpo + corpoAltura - submersoAltura}
            width={corpoLargura}
            height={submersoAltura}
            fill="#00bfff88"
          />

          <Arrow
            points={[150, yCorpo + corpoAltura - submersoAltura, 150, yCorpo + corpoAltura - submersoAltura - 30]}
            stroke="green"
            fill="green"
            strokeWidth={4}
            pointerLength={10}
            pointerWidth={10}
          />
          <Text
            x={160}
            y={yCorpo + corpoAltura - submersoAltura - 40}
            text="Empuxo"
            fontSize={14}
            fill="green"
          />

          <Arrow
            points={[150, yCorpo + corpoAltura, 150, yCorpo + corpoAltura + 30]}
            stroke="red"
            fill="red"
            strokeWidth={4}
            pointerLength={10}
            pointerWidth={10}
          />
          <Text
            x={160}
            y={yCorpo + corpoAltura + 10}
            text="Peso"
            fontSize={14}
            fill="red"
          />

          <Label x={90} y={yCorpo - 30}>
            <Tag
              fill={
                estado === "Afunda"
                  ? "#ffe0e0"
                  : estado === "Flutua"
                  ? "#e0ffe0"
                  : "#fff8cc"
              }
              stroke="black"
              cornerRadius={4}
            />
            <Text
              text={`Estado: ${estado}`}
              fontSize={16}
              padding={6}
              fill="#000"
              fontStyle="bold"
            />
          </Label>
        </Layer>
      </Stage>
    </div>
  );
}

    */}


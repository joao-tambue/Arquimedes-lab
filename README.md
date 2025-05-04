# 🧪 Simulador de Flutuação

Um simulador educacional interativo desenvolvido em **React** para demonstrar visualmente o **Princípio de Arquimedes**. O objetivo é ensinar como a força de empuxo atua em diferentes corpos imersos em líquidos, mostrando de forma gráfica e didática se o corpo **flutua**, **afunda** ou **entra em equilíbrio**.

---

## ✨ Funcionalidades

- 💧 Entrada de dados personalizáveis:
  - Escolha do líquido (água, óleo, etc.)
  - Densidade personalizada
  - Massa, volume total e volume submerso do corpo

- 🧠 Cálculo automático:
  - Empuxo
  - Peso real
  - Peso aparente
  - Resultado final: Afunda / Flutua / Equilíbrio

- 🎨 Visualização gráfica animada com **Konva.js**
  - Vetores visuais (empuxo ↑, peso ↓)
  - Corpo dentro do recipiente com água
  - Indicação clara da posição e comportamento do corpo

- 🚨 Página de erro 404 com React Router

---

## 🖼️ Interface

A interface é inspirada em ambientes educacionais:

- **Navbar fixa** com nome do projeto e links úteis
- **Seção de entradas do usuário** em cards interativos
- **Seção de resultados** após o cálculo
- **Gráfico ilustrativo** com visual clean
- **Rodapé opcional** com dicas educativas sobre física

---

## 📦 Tecnologias

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Konva.js](https://konvajs.org/) + [react-konva](https://konvajs.org/docs/react/)
- [Vite](https://vitejs.dev/) (para build rápido e moderno)

---

## 🚀 Como rodar localmente

1. **Clone o projeto**

```bash
git clone https://github.com/joao-tambue/Arquimedes-lab.git
cd simulador-flutuacao

npm install

Execute o projeto

npm run dev

Acesse no navegador

http://localhost:5173

`````

## 🧪 Casos de Teste Rápido

Use estes valores para simular:

✅ Flutua
Massa: 1

Volume total: 0.002

Volume submerso: 0.0005

Densidade do líquido: 1000 (água)

⚖️ Equilíbrio
Massa: 2

Volume total: 0.002

Volume submerso: 0.002

Densidade: 1000

⬇️ Afunda
Massa: 5

Volume total: 0.002

Volume submerso: 0.002

Densidade: 800
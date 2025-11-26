import { useState } from "react";
import CurpForm from "./components/CurpForm";
import CurpResult from "./components/CurpResult";
import { generarCurp } from "./utils/generarCurp";
import "./styles.css";

export default function App() {
  const [curp, setCurp] = useState("");

  const generar = (formData) => {
    const c = generarCurp(formData);
    setCurp(c);
  };

  return (
    <div className="container">
      <CurpForm onGenerar={generar} />
      {curp && <CurpResult curp={curp} />}
    </div>
  );
}

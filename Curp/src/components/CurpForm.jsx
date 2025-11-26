import { useState } from "react";

export default function CurpForm({ onGenerar }) {
    const [form, setForm] = useState({
        nombre: "",
        apP: "",
        apM: "",
        fecha: "",
        sexo: "",
        estado: "AS"
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerar(form);
    };

    return (
        <div className="card">
            <h2>Generador de CURP</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" required onChange={handleChange} />
                <input type="text" name="apP" placeholder="Apellido Paterno" required onChange={handleChange} />
                <input type="text" name="apM" placeholder="Apellido Materno" onChange={handleChange} />

                <label>Fecha de nacimiento:</label>
                <input type="date" name="fecha" required onChange={handleChange} />

                <select name="sexo" required onChange={handleChange}>
                    <option value="">Seleccione sexo</option>
                    <option value="H">HOMBRE</option>
                    <option value="M">MUJER</option>
                </select>

                <select name="estado" onChange={handleChange}>
                    <option value="AS">Aguascalientes</option>
                    <option value="BC">Baja California</option>
                    <option value="BS">Baja California Sur</option>
                    <option value="CC">Campeche</option>
                    <option value="CL">Coahuila</option>
                    <option value="CM">Colima</option>
                    <option value="CS">Chiapas</option>
                    <option value="CH">Chihuahua</option>
                    <option value="DF">Ciudad de México</option>
                    <option value="DG">Durango</option>
                    <option value="GT">Guanajuato</option>
                    <option value="GR">Guerrero</option>
                    <option value="HG">Hidalgo</option>
                    <option value="JC">Jalisco</option>
                    <option value="MC">Estado de México</option>
                    <option value="MN">Michoacán</option>
                    <option value="MS">Morelos</option>
                    <option value="NT">Nayarit</option>
                    <option value="NL">Nuevo León</option>
                    <option value="OC">Oaxaca</option>
                    <option value="PL">Puebla</option>
                    <option value="QT">Querétaro</option>
                    <option value="QR">Quintana Roo</option>
                    <option value="SP">San Luis Potosí</option>
                    <option value="SL">Sinaloa</option>
                    <option value="SR">Sonora</option>
                    <option value="TC">Tabasco</option>
                    <option value="TS">Tamaulipas</option>
                    <option value="TL">Tlaxcala</option>
                    <option value="VZ">Veracruz</option>
                    <option value="YN">Yucatán</option>
                    <option value="ZS">Zacatecas</option>


                </select>

                <button type="submit">Generar CURP</button>
            </form>
        </div>
    );
}

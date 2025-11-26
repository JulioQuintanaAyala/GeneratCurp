export default function CurpResult({ curp }) {
    return (
        <div className="resultado">
            <h3>Tu CURP generada:</h3>
            <p className="curp">{curp}</p>
        </div>
    );
}

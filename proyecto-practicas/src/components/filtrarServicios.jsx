import CalendarioOrientacion from "./calendarOrientacion";
import CalendarApoyo from "./calendarApoyo";
import { useState } from "react";

const FiltrarServicios = () => {
    const [selectedValue, updateSelectedValue] = useState()
    const onSelectChange = ({ target: { value } }) => updateSelectedValue(value)
    return (
        <div>
            <select onChange={onSelectChange}
                className="inputForm2"
                id="categoria">
                <option value="">-- Servicios --</option>
                <option value="apoyo">Apoyo psicológico</option>
                <option value="orientación">Orientación jurídica</option>
            </select>
            {selectedValue === "apoyo" && <CalendarApoyo />}
            {selectedValue === "orientación" && <CalendarioOrientacion />}
        </div>
    )
}
export default FiltrarServicios
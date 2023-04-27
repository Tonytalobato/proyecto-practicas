import { useForm } from "react-hook-form";
import 'react-calendar/dist/Calendar.css';
import FiltrarServicios from "./filtrarServicios";
import { useState } from "react";
 
const ModalCitas = () => {
  const [filtro, setFiltro] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      className="formulario"
      onSubmit={handleSubmit()}>

      <FiltrarServicios filtro={filtro} setFiltro={setFiltro} />
      <input
        className="inputForm1"
        placeholder="Nombre"
        {...register("firstName", { required: true })}
      />
      {errors.lastName && <p className="peForm">Este campo es obligatorio.</p>}
      <input
        className="inputForm2"
        placeholder="Primer apellido"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <p className="peForm">Este campo es obligatorio.</p>}
      <input
        className="inputForm2"
        placeholder="Correo electrónico"
        {...register("correo", { required: true })}
      />
      {errors.lastName && <p className="peForm">Este campo es obligatorio.</p>}
      <input
        className="inputForm2"
        placeholder="Código postal"
        {...register("correo", { required: true })}
      />
      {errors.lastName && <p className="peForm">Este campo es ...</p>}
      <input className="inputForm3" type="submit" />
    </form>
  );
};
export default ModalCitas;

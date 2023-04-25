import { useForm } from "react-hook-form";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

const ModalCitas= () => {


    const [filtro, setFiltro] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="formulario"
      onSubmit={handleSubmit((data) => console.log(data))}>

<div className="campo">
        
        <select onChange={(e) => setFiltro(e.target.value)}
        className="inputForm2" 
        id="categoria" 
        {...register("categoria", { required: true })}>
          <option value="">--Servicios--</option>
          <option value="apoyo">Apoyo psicológico</option>
          <option value="orientación">Orientación jurídica</option>
        </select>
        {errors.categoria && (
          <p className="peForm">Este campo es obligatorio.</p>
        )}
      </div>
        
          {/* {data === categoria && <Calendar/>} */}

          
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
      {errors.lastName && <p className="peForm">Este campo es obligatorio.</p>}    

      <input  className="inputForm3" type="submit" />
    </form>
  );
};
export default ModalCitas;

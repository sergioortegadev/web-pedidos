const DatosYEnvio = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
   if (!form.nombre || !form.peliculas) {
     alert("Datos incompletos");
     return;
   }

   if (form.id === null) {
     createData(form);
   } else {
     updateData(form);
   }

   handleReset(); */
  };

  return (
    <>
      <form className="datos-pers" onSubmit={handleSubmit}>
        <h3>¡Solo unos datos y estamos listos!</h3>
        <label>Nombre y Apellido</label>
        <input
          type="text"
          name="name"
          placeholder=""
          /* onChange={handleChange}
            value={form.nombre} */
        />
        <label>Teléfono</label>
        <input
          type="phone"
          name="tel"
          placeholder=""
          /*  onChange={handleChange}
            value={form.peliculas} */
        />
        <label>Dirección</label>
        <input
          type="text"
          name="address"
          placeholder=""
          /*  onChange={handleChange}
            value={form.peliculas} */
        />
        <br />
        <br />
        <input type="submit" value="Enviar" />
        {/* <input type="reset" value="Limpiar" onClick={handleReset} /> */}
      </form>
    </>
  );
};

export default DatosYEnvio;

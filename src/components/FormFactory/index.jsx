export function FormFactory({ config }) {
  return (
    <form>
      <h1>Formulário</h1>
      {config &&
        config.map((item) => {
          // eslint-disable-next-line no-console
          console.log(item);

          return (
            <input
              key={item.field}
              type={item.type}
              placeholder={item.placeholder}
              required={item.required ? "required" : ""}
            />
          );
        })}
      <button type="submit">Enviar</button>
    </form>
  );
}

export function RadioInput({ children, id, style, ...props }) {
  return (
    <>
      <input
        id={id}
        {...props}
        style={{ appearance: "none", position: "absolute" }}
        type="radio"
      />
      <label htmlFor={id} style={{ ...style }}>
        {/* Icon/visual instead of normal radio: */}
        {children}
      </label>
    </>
  );
}

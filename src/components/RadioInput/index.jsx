export function RadioInput({ children, id, style, ...props }) {
  return (
    <>
      <input
        id={id}
        {...props}
        style={{ appearance: "none", ...style }}
        type="radio"
      />
      <label htmlFor={id}>
        {/* Icon/visual instead of normal radio: */}
        {children}
      </label>
    </>
  );
}

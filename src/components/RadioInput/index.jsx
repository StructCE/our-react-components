export function RadioInput({ children, id, style, value, ...props }) {
  return (
    <>
      <input
        id={id}
        value={value}
        {...props}
        style={{ display: "contents", ...style }}
        type="radio"
      />
      <label htmlFor={id}>
        {/* Icon instead of normal radio: */}
        {children}
      </label>
    </>
  );
}

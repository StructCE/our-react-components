type Props = {
  children: React.ReactNode;
  id: string;
  style: React.CSSProperties;
  name: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function RadioInput({ children, id, style, ...props }: Props) {
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

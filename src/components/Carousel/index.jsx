export function Carousel({ children, id, ...props }) {
  return (
    <>
      <input id={id} {...props} type="carousel" />
      <label htmlFor="{id}">{children}</label>
    </>
  );
}

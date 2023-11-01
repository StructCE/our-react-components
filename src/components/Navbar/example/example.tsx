import { Navbar } from "../index";
import imagePath from "./logo_struct.png";

export function NavbarExample() {
  const items = ["Home", "Produtos", "Serviços", "Sobre"];
  return (
    <div>
      <Navbar Nome="Struct" imgPath={imagePath} itensNav={items} />
    </div>
  );
}

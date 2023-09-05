import {
  MapPinIcon,
  LifeBuoy,
  LogOut,
  Heart,
  Settings,
  User,
  ShoppingBag,
} from "lucide-react";

import DropdownMenu from "./";

export function DropdownMenuExample() {
  return (
    <div className="flex justify-center">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="border-2 border-gray-200 border-solid px-4 py-1 focus:outline-none rounded focus:ring-0 hover:bg-gray-100 transition duration-300 ease-in-out">
            Abrir
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="w-56">
          <DropdownMenu.Label>Minha Conta</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <ShoppingBag className="mr-2 h-4 w-4" />
              <span>Compras</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Heart className="mr-2 h-4 w-4" />
              <span>Meus Desejos</span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <MapPinIcon className="mr-2 h-4 w-4" />
              <span>Endereço</span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Suporte</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Settings className="mr-2 h-4 w-4" />
            <span>Configurações</span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}

export default DropdownMenuExample;

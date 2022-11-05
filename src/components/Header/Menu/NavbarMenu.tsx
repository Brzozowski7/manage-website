import { MenuWrapper, MenuItem } from "./NavbarMenu.styles";
import { menuItems } from "./NavbarMenu.const";

interface NavbarMenuProps {
  isMenuActive: boolean;
}

export default function NavbarMenu({ isMenuActive }: NavbarMenuProps) {
  return (
    <MenuWrapper isMenuActive={isMenuActive}>
      {menuItems.map((item) => (
        <MenuItem key={item.id}>{item.text}</MenuItem>
      ))}
    </MenuWrapper>
  );
}

import { MenuWrapper, MenuItem } from "./NavbarMenu.styles";
import { menuItems } from "./NavbarMenu.const";

export default function NavbarMenu() {
  return (
    <MenuWrapper>
      {menuItems.map((item) => (
        <MenuItem key={item.id}>{item.text}</MenuItem>
      ))}
    </MenuWrapper>
  );
}

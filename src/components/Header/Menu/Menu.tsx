import { MenuWrapper, MenuItem } from "./Menu.styles";
import { menuItems } from "./Menu.const";

export default function Menu() {
  return (
    <MenuWrapper>
      {menuItems.map((item) => (
        <MenuItem key={item.id}>{item.text}</MenuItem>
      ))}
    </MenuWrapper>
  );
}

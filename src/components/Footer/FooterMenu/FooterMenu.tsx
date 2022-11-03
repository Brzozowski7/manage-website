import { MenuWrapper, MenuPartWrapper, MenuItem } from "./FooterMenu.styles";
import { menuItemsPart1, menuItemsPart2 } from "./FooterMenu.const";

export default function FooterMenu() {
  return (
    <MenuWrapper>
      <MenuPartWrapper>
        {menuItemsPart1.map((item) => (
          <MenuItem key={item.id}>{item.text}</MenuItem>
        ))}
      </MenuPartWrapper>
      <MenuPartWrapper>
        {menuItemsPart2.map((item) => (
          <MenuItem key={item.id}>{item.text}</MenuItem>
        ))}
      </MenuPartWrapper>
    </MenuWrapper>
  );
}

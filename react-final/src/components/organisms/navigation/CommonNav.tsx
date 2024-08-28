import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function CommonNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to={"/"}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>HTML</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to={"/"}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>CSS</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to={"/"}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>TypeScript</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to={"/"}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>React</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default CommonNav;

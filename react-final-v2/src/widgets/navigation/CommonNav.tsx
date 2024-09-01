import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/shared/ui/navigation-menu";

function CommonNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                        HTML
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                        CSS
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                        TypeScript
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/dashboard" className={navigationMenuTriggerStyle()}>
                        React
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export { CommonNav };

'use client';
import * as React from 'react';
import {cn} from '@/lib/utils';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {ModeToggle} from '@ui/mode-toggle';

import {NavigationBarProps} from '@/types/navBarTypes';

import NavigationMobile from './NavigationMobile';

interface NavigationBarRightProps {
  data: NavigationBarProps[];
}

export default function NavigationBarLeft({data}: NavigationBarRightProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {data.map(item => (
          <NavigationMenuItem key={item.mainTitle} className="hidden lg:flex">
            {!item.subMenu ? (
              <Link href={item?.href || '/'} legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                  {item.mainTitle}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{item.mainTitle}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {item.subMenu.map(subItem => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}>
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="flex lg:hidden">
          <NavigationMobile data={data} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

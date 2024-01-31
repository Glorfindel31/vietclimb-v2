'use client';
import {cn} from '@/lib/utils';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {ScrollArea} from '@/components/ui/scroll-area';

import {HamburgerMenuIcon} from '@radix-ui/react-icons';
import {NavigationBarProps} from '@/types/navBarTypes';

import {buttonVariants} from '@components/ui/button';

interface NavigationBarRightProps {
  data: NavigationBarProps[];
}
export default function NavigationMobile({data}: NavigationBarRightProps) {
  return (
    <Sheet>
      <SheetTrigger className={cn(buttonVariants({variant: 'ghost'}), 'h-10 w-10 p-0')}>
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle className="pb-8">NAVIGATION</SheetTitle>
        </SheetHeader>
        <div className="mt-4 border-t">
          <ScrollArea className="h-[70vh] w-[250px]">
            <ul className="w-full">
              {data.map(item =>
                !item.subMenu ? (
                  <li key={item.mainTitle}>
                    <Link
                      className={cn(
                        buttonVariants({variant: 'ghost'}),
                        'w-full border-b justify-start',
                      )}
                      href={item?.href || '/'}>
                      {item.mainTitle}
                    </Link>
                  </li>
                ) : (
                  <li key={item.mainTitle}>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger
                          className={cn(
                            buttonVariants({variant: 'ghost'}),
                            'w-full justify-between',
                          )}>
                          {item.mainTitle}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-2">
                            {item.subMenu.map(subItem => (
                              <li key={subItem.title}>
                                <Link
                                  className={cn(
                                    buttonVariants({variant: 'ghost'}),
                                    'w-full font-extralight justify-end',
                                  )}
                                  href={subItem.href}>
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                ),
              )}
            </ul>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}

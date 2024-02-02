'use client';
import {cn} from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import LogoLight from '@public/vcLogoDark.png';
import LogoDark from '@public/vcLogoWhite.png';
import LogoTheme from '@ui/logo-theme';
import {LiaFacebookSquare, LiaInstagram} from 'react-icons/lia';
import ToggleLanguage from '@ui/toggle-language';

export default function NavigationBarLeft({
    params: {locale},
}: {
    params: {locale: string};
}) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                            <LogoTheme
                                srcDark={LogoDark}
                                srcLight={LogoLight}
                                alt="logo vietclimb"
                                style={{
                                    width: '100px',
                                    height: 'auto',
                                }}
                            />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link
                        href="https://www.instagram.com/vietclimb/"
                        legacyBehavior
                        passHref>
                        <NavigationMenuLink
                            target="_blank"
                            className={cn(navigationMenuTriggerStyle(), 'p-2')}>
                            <LiaInstagram className="h-6 w-6" />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link
                        href="https://www.facebook.com/VietClimb/"
                        legacyBehavior
                        passHref>
                        <NavigationMenuLink
                            target="_blank"
                            className={cn(navigationMenuTriggerStyle(), 'p-2')}>
                            <LiaFacebookSquare className="h-6 w-6" />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <ToggleLanguage params={{locale}} />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

import * as React from 'react';
import {cn} from '@/lib/utils';

const LargeTitle = React.forwardRef<
    React.ElementRef<'h1'>,
    React.ComponentPropsWithoutRef<'h1'>
>(({className, children, ...props}, ref) => (
    <h1
        ref={ref}
        className={cn(
            'font-decor scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl',
            className,
        )}
        {...props}>
        {children}
    </h1>
));

LargeTitle.displayName = 'LargeTitle';

export {LargeTitle};

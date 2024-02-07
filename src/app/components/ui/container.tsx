import * as React from 'react';
import {cn} from '@/lib/utils';

const Container = React.forwardRef<
    React.ElementRef<'main'>,
    React.ComponentPropsWithoutRef<'main'>
>(({className, children, ...props}, ref) => (
    <main
        ref={ref}
        className={cn('flex flex-col p-4 lg:max-w-[1200px] mt-20 mx-auto', className)}
        {...props}>
        {children}
    </main>
));

Container.displayName = 'Container';

export {Container};

import * as React from 'react';
import {cn} from '@/lib/utils';

const Section = React.forwardRef<
    React.ElementRef<'section'>,
    React.ComponentPropsWithoutRef<'section'>
>(({className, children, ...props}, ref) => (
    <section
        ref={ref}
        className={cn('flex flex-col gap-4 justify-center w-full h-[70vh] ', className)}
        {...props}>
        {children}
    </section>
));

Section.displayName = 'Section';

export {Section};

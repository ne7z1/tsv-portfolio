import Link from 'next/link';

export default function Button({
    children,
    variant = 'primary',
    herf,
    className ='',
    disabled = false,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-semibold text-[18px] transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed";

    const variants = {
        primary: `
            px-m py-s12 rounded-[8px]
            bg-btn-primary text-btn-primary-text shadow-lg shadow-[#0E0E0E]/30
            hover:bg-btn-primary-hover hover:shadow-lg hover:shadow-[#0E0E0E]/30 hover:-translate-y-[1px]
            active:bg-btn-primary-active active:-translate-y-[-1px] active:shadow-none
            disabled:bg-btn-primary-disabled text-btn-primary-disabled-text disabled:shadow-none
        `,

        secondary: `
            px-m py-s12 rounded-[8px] border-[2px] border-btn-secondary-border
            bg-btn-secondary text-btn-secondary-text
            hover:bg-btn-secondary-hover hover:text-btn-secondary-hover-text hover:shadow-lg hover:shadow-[#0E0E0E]/30 hover:-translate-y-[1px]
            active:bg-btn-secondary-active active:btn-secondary-active-text active:-translate-y-[-1px] active:shadow-none
            disabled:border-btn-secondary-disabled disabled:border-[2px] disabled:text-btn-secondary-disabled-text disabled:bg-btn-secondary disabled:shadow-none
        `,

        text:`
            px-s py-xs
            bg-btn-textonly text-btn-textonly-default
            hover:text-btn-textonly-hover hover:underline hover:underline-offset-4
            active:text-btn-textonly-active active:no-underline
            disabled:text-btn-textonly-disabled disabled:no-underline
        `
    };

    const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;

    if (herf && !disbled) {
        return (
            <Link href={href} className={combinedClass} {...props}>
                {children}
            </Link>
        )
    };

    return (
        <button className={combinedClass} disabled={disabled} {...props}>
            {children}
        </button>
    );
    
}
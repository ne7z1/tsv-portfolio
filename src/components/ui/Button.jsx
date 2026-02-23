import Link from 'next/link';

export default function Button({
    children,
    variant = 'primary',
    href,
    className = '',
    disabled = false,
    showIcon = false, // Добавляем новый проп
    ...props
}) {
    // Добавил 'group' в базовые стили, чтобы иконка реагировала на ховер всей кнопки
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed group";

    const variants = {
        primary: `
            text-[18px] px-m py-s12 rounded-[8px]
            bg-btn-primary text-btn-primary-text shadow-lg shadow-[#0E0E0E]/30
            hover:bg-btn-primary-hover hover:shadow-lg hover:shadow-[#0E0E0E]/30 hover:-translate-y-[1px]
            active:bg-btn-primary-active active:-translate-y-[-1px] active:shadow-none
            disabled:bg-btn-primary-disabled text-btn-primary-disabled-text disabled:shadow-none
        `,

        secondary: `
            text-[18px] px-m py-s12 rounded-[8px] border-[2px] border-btn-secondary-border
            bg-btn-secondary text-btn-secondary-text
            hover:bg-btn-secondary-hover hover:text-btn-secondary-hover-text hover:shadow-lg hover:shadow-[#0E0E0E]/30 hover:-translate-y-[1px]
            active:bg-btn-secondary-active active:text-btn-secondary-active-text active:-translate-y-[-1px] active:shadow-none
            disabled:border-btn-secondary-disabled disabled:border-[2px] disabled:text-btn-secondary-disabled-text disabled:bg-btn-secondary disabled:shadow-none
        `,

        text: `
            px-s py-xs
            bg-transparent text-btn-secondary-text 
            hover:text-btn-primary-hover
            [&>span]:relative [&>span]:inline-block
            [&>span]:after:content-[''] [&>span]:after:absolute [&>span]:after:left-0 [&>span]:after:-bottom-[4px] 
            [&>span]:after:h-[1.5px] [&>span]:after:w-0 [&>span]:after:bg-current 
            [&>span]:after:transition-[width] [&>span]:after:duration-300 [&>span]:after:ease-out
            hover:[&>span]:after:w-full
            active:text-[#1E2B5A] active:[&>span]:after:bg-current
            disabled:text-[#CBD5E1] disabled:[&>span]:after:hidden
        `
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    const content = (
        <>
            <span>{children}</span>
            {showIcon && (
                <div className="relative w-5 h-5 shrink-0 ml-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <img
                        src="/arrow-up-right-blue.svg"
                        alt=""
                        className={`w-full h-full block ${variant === 'primary' ? 'brightness-0 invert' : 'group-hover:hidden'}`}
                    />
                    {variant !== 'primary' && (
                        <img
                            src="/arrow-up-right.svg"
                            alt=""
                            className="w-full h-full hidden group-hover:block"
                        />
                    )}
                </div>
            )}
        </>
    );

    if (href && !disabled) {
        const isExternalOrAnchor = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#');

        if (isExternalOrAnchor) {
            return (
                <a href={href} className={combinedClasses} {...props}>
                    {content}
                </a>
            );
        }

        return (
            <Link href={href} className={combinedClasses} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} disabled={disabled} {...props}>
            {content}
        </button>
    );
}
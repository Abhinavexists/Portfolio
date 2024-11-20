export const TechIcon = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    return (
        <>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
            <svg className="size-0 absolute">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor="rgb(92 107 192) "/> {/* Updated */}
                    <stop offset="100%" stopColor="rgb(56 189 248)" /> {/* Updated */}
                </linearGradient>
            </svg>
        </>
    );
};
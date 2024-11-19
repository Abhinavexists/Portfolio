import StarIcon from "@/assets/icons/star.svg";

export const CardHeader = ({title , description , className}:
    {
        title: string;
        description: string;
        className?: string;
    }
) => {
    return (
        <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-pink-600"/>
                <h3 className="font-serif text-2xl">{title}</h3>
              </div>
                <p className="text-sm text-white/60 mt-2">
                 {description}
                </p>
            </div>
    );
}

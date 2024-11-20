export const SectionHeader = ({
    title,
    eyebrow,
    description,
} :{
    title: string;
    eyebrow: string;
    description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase text-xl font-semibold tracking-widest bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-white/60 md:text-lg lg:text-xl text-center mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
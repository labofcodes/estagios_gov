export default function Title ( { title, className, line} ) {
  return (
    <>
    {line ? (
        <p className={`${className} pl-3 text-2xl relative before:content-[''] before:w-1 before:h-full before:absolute before:bg-blue-crea-500 before:top-0 before:left-0 before:rounded-md mb-5`}>{title}</p>
    ):(
        <p className={`${className} text-2xl mb-5`}>{title}</p>
    ) }
    </>
    
  );
}
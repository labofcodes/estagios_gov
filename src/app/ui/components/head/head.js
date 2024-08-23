export default function Head ( {title, description} ) {
  return (
    <section className='min-h-min mb-10 flex flex-col justify-start text-center space-y-5 text-blue-crea-500'>
        <p className='text-3xl uppercase font-bold animate-fade-down'>{title}</p>
        <p className='max-w-2xl mx-auto'>{description}</p>
  </section>
  );
}
export default function Container ( {children, className} ) {
  return (
    <section className={`px-10 lg:px-0 w-full max-w-screen-lg mx-auto h-full ${className}`}>
      {children}
    </section>
  );
}
export default function Text_display_1 ( { children, className } ) {
  return (
    <p className={`text-8xl lg:text-9xl ${className}`} >
        { children }
    </p>
  );
}
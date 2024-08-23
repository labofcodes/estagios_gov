export default function Text_display_2 ( { children, className } ) {
  return (
    <p className={`text-5xl lg:text-6xl ${className}`}>
        { children }
    </p>
  );
}
export default function Text_display_3 ( { children, className } ) {
  return (
    <p className={`text-3xl lg:text-4xl ${className}`}>
        { children }
    </p>
  );
}
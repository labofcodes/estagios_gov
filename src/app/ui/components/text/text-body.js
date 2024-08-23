export default function Text_body( { children, className } ) {
  return (
    <p className={`text-base ${className}`}>
        { children }
    </p>
  );
}
export default function Text_decoration_mark( { children, className } ) {
  return (
    <span className={`text-yellow-crea font-bold ${className}`}>
        { children }
    </span>
  );
}
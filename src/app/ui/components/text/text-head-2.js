export default function Text_head_2 ( { children, className } ) {
  return (
    <p className={`text-xl ${className}`}>
        { children }
    </p>
  );
}
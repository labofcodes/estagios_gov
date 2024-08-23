export default function Text_head_1 ( { children, className } ) {
  return (
    <p className={`text-2xl ${className}`}>
        { children }
    </p>
  );
}
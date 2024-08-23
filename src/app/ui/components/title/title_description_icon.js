export default function Title_description_icon ( { title, description, icon } ) {
  return (
    <div className="flex flex-col justify-center text-center items-center gap-4 min-h-72 ">
        {icon && <div>{icon}</div>}
        {title && <p className="text-2xl max-w-[200px]">{title}</p>}
        {description && <p>{description}</p>}
    </div>
  );
}
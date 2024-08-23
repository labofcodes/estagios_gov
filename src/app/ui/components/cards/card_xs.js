import Button_icon from "../buttons/button_icon";

export default function Card_xs ( { key, image, title, href, button_icon } ) {
  return (
    <div
        key={key} 
        style={{backgroundImage: `url(${image})`}} 
        className={`text-white text-start flex flex-col justify-between items-end p-5 min-h-32 max-w-72 rounded-md bg-cover bg-center bg-no-repeat hover:translate-x-1 transition-all circle-animation group`}>
            
        {/* Main content card */}
        <div className='absolute w-full h-full top-0 left-0 z-10 p-5 flex flex-col justify-between items-end'>

            <p className='uppercase font-Lalezar font-extrabold text-md w-full'>{title}</p>

            <Button_icon 
                href={href}
                icon={button_icon}
            />

        </div>

    </div>
  );
}
import Button_text_icon_outline_white_md from "../buttons/button_text_icon_outline_white_md";
import Button_text_icon from "../buttons/button_text_icon_outline_white_md";

export default function Card_lg ( { key, image, title, subtitle, description, href, button_text, button_icon } ) {
  return (
    <div 
        key={key} style={{backgroundImage: `url(${image})`}} 
        className={`text-white min-h-96 rounded-md bg-cover bg-center bg-no-repeat circle-animation group relative transition-all`}>

        {/* Main content card */}
        <div className='absolute h-full top-0 left-0 z-10 p-8 flex flex-col justify-between'>

            {/* Title and description */}
            <div>
                <p className='uppercase font-Lalezar font-extrabold mb-2 text-2xl w-full'>{title}</p>
                <p className='uppercase font-Lalezar font-extrabold mb-2 text-md stroke-text_md'>{subtitle}</p>
                <p>{description}</p>
            </div>

            {/* Button */}
            <Button_text_icon_outline_white_md
                href={href}
                text={button_text}
                icon={button_icon}
            />

        </div>

    </div>
  );
}
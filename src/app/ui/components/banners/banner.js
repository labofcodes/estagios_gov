import Button_outline_white from "../buttons/button_outline_white";
import Container from "../container/container";

export default function Banner ( { title, description, children } ) {
  return (
    <section className="bg-blue-crea-400 text-white py-16 animate-fade-right animate-ease-in-out">
        <Container>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

                <div className="w-full md:w-8/12 flex flex-col md:flex-row gap-4 md:gap-16 items-center">
                    <p className={`${ description ? 'md:max-w-96' : 'md:max-w-[400px]'} text-3xl font-semibold`}>{title}</p>
                    { description && <p className="w-full">{description}</p> }
                </div>

                <div className="w-full md:w-4/12 flex justify-start md:justify-center items-center">
                    {children}
                </div>
            </div>
        </Container>
    </section>
  );
}
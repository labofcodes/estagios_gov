import Text_display_3 from '../components/text/text-display-3';
import Container from '../components/container/container';
import Text_body from '../components/text/text-body';
import Text_decoration_mark from '../components/text/decoration/text-decoration-mark';
import Logo from '../../../../public/brand/Estagios';
import Text_link from '../components/text/text-link';
import Button_event from '../components/buttons/button_event';
import ContactForm from '../components/forms/form-contact';

export default function Section_contact ( {} ) {
  return (
  <section className='min-h-[80vh]'>
    <Container className={'flex flex-col md:flex-row justify-between gap-8 py-20 items-center text-blue-crea-400'}>

      <div className='w-full md:w-6/6 flex flex-col gap-5'>
        <div className='w-72 md:w-80'>
          <Logo />
        </div>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                <path d="M17.75 0.704346H1.25C1.06766 0.704346 0.892795 0.776779 0.763864 0.90571C0.634933 1.03464 0.5625 1.20951 0.5625 1.39185V13.0793C0.5625 13.444 0.707366 13.7938 0.965228 14.0516C1.22309 14.3095 1.57283 14.4543 1.9375 14.4543H17.0625C17.4272 14.4543 17.7769 14.3095 18.0348 14.0516C18.2926 13.7938 18.4375 13.444 18.4375 13.0793V1.39185C18.4375 1.20951 18.3651 1.03464 18.2361 0.90571C18.1072 0.776779 17.9323 0.704346 17.75 0.704346ZM15.9823 2.07935L9.5 8.02192L3.01773 2.07935H15.9823ZM17.0625 13.0793H1.9375V2.95505L9.03508 9.46138C9.16191 9.57781 9.32782 9.64242 9.5 9.64242C9.67218 9.64242 9.83809 9.57781 9.96492 9.46138L17.0625 2.95505V13.0793Z" fill="#394BD3"/>
              </svg>
            </div>
            <Text_body><Text_link href={'mailto:contato@estagiosgov.com'}>contato@estagiosgov.com</Text_link></Text_body>
          </div>
          <div className='hidden'>
            <Text_body><Text_link href={'#'} underline={true}>Política de privacidade</Text_link></Text_body>
            <Text_body><Text_link href={'#'} underline={true}>Termos de uso</Text_link></Text_body>
          </div>
        </div>
      </div>
        
      <ContactForm />


    </Container>
  </section>
  );
}
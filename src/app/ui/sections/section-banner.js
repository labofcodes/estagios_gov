import Logo from '../../../../public/brand/Estagios';
import Text_display_3 from '../components/text/text-display-3';
import Container from '../components/container/container';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

export default function Section_banner ( {} ) {
  return (
    <section className='bg-bg-estagios_gov bg-cover h-[80vh] text-white relative'>
    <Container className={'flex flex-col justify-center gap-8 items-center h-full'}>

      <div className="w-46 md:w-full max-w-xl animate-fade-up animate-duration-800">
        <Logo white={true}/>
      </div>

      <div>
        <Text_display_3 className={'max-w-2xl text-center leading-snug'}>Agilidade, segurança e eficiência na <span className='text-yellow-crea'>conexão de talentos</span> ao setor público</Text_display_3>
      </div>

    </Container>
    <Link href={'#EstagiosGov'}>
      <ArrowDownCircleIcon width={50} className='absolute inset-x-0 bottom-5 mx-auto animate-fade-down animate-infinite animate-duration-[3000ms] animate-ease-in-out'/>
    </Link>
  </section>
  );
}
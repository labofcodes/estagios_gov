import Text_display_3 from '../components/text/text-display-3';
import Container from '../components/container/container';
import Text_body from '../components/text/text-body';
import Text_decoration_mark from '../components/text/decoration/text-decoration-mark';
import Section_modules_dropdown from './section-modules-dropdown';

export default function Section_modules ( {} ) {
  return (
  <section className='min-h-screen flex items-center justify-between py-20'>
    <Container>

      <div className='w-full md:w-3/6 mb-10'>
        <Text_display_3 className={'mb-5 font-medium'}>Módulos</Text_display_3>
        <Text_body>O EstágiosGov é composto por diversos <Text_decoration_mark>módulos que trabalham em conjunto</Text_decoration_mark> para proporcionar uma solução completa e integrada para a gestão de estágios no setor público, desde a divulgação das vagas até a contratação.
        </Text_body>
      </div>

      <Section_modules_dropdown />
      

    </Container>
  </section>
  );
}
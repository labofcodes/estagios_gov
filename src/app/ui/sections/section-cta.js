import Text_display_3 from '../components/text/text-display-3';
import Container from '../components/container/container';
import Text_body from '../components/text/text-body';
import Text_decoration_mark from '../components/text/decoration/text-decoration-mark';
import Text_head_3 from '../components/text/text-head-3';

export default function Section_cta ( {} ) {
  return (
  <section className='min-h-96 bg-blue-crea-400 flex items-center'>
    <Container>

      <Text_head_3 className={'text-white text-center'}>Ao aliar tecnologia e conformidade legal, o EstágiosGov não apenas facilita o processo de recrutamento, mas também garante uma <Text_decoration_mark> experiência mais confortável e transparente</Text_decoration_mark> tanto para os órgãos públicos quanto para os candidatos em busca de oportunidades de estágio e residência no setor público brasileiro.</Text_head_3>


    </Container>
  </section>
  );
}
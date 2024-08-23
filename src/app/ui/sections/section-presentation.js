import Text_display_3 from '../components/text/text-display-3';
import Container from '../components/container/container';
import Text_body from '../components/text/text-body';
import Text_decoration_mark from '../components/text/decoration/text-decoration-mark';

export default function Section_presentation ( {} ) {
  return (
  <section className='min-h-[80vh]' id='EstagiosGov'>
    <Container className={'flex flex-col md:flex-row justify-between gap-8 py-20 items-center'}>

      <div className='w-full md:w-6/6'>
        <Text_display_3 className={'mb-5 font-medium'}>O EstágiosGov</Text_display_3>
        <Text_body>O EstágiosGov é uma plataforma especializada no <Text_decoration_mark>recrutamento de estagiários e residentes</Text_decoration_mark> para órgãos governamentais, desenvolvida para simplificar e otimizar todo o processo de seleção. Em conformidade com a legislação vigente  (Lei nº 11.788/2008), a plataforma <Text_decoration_mark>automatiza as etapas</Text_decoration_mark> de seleção, reduzindo significativamente a necessidade de equipes dedicadas nos órgãos públicos.
        <br></br>
        <br></br>
        Com uma abordagem centrada na <Text_decoration_mark>agilidade e eficiência</Text_decoration_mark>, o EstágiosGov busca não apenas simplificar a gestão de estágios e residentes, mas também promover uma interação mais direta entre o governo e a sociedade. Ao colocar a marca do órgão como protagonista nessa interação, a plataforma fortalece a imagem institucional e amplia a participação de um número maior de candidatos qualificados.</Text_body>
      </div>

      <div>
        <img src='/elements/Imagem-linquei-estagios-diferenciais.webp' alt='linquei-estagios-diferenciais'/>
      </div>

    </Container>
  </section>
  );
}
import Text_display_3 from '../components/text/text-display-3';
import Container from '../components/container/container';
import Text_body from '../components/text/text-body';
import Text_decoration_mark from '../components/text/decoration/text-decoration-mark';

export default function Section_other_functions ( {} ) {
  return (
  <section className='min-h-96 py-20 bg-blue-crea-400 flex items-center'>
    <Container className={'text-white'}>
      <Text_display_3 className={'mb-5 font-medium'}>Outras funcionalidades</Text_display_3>
      <Text_body>O EstágiosGov oferece diversas outras funcionalidades, como:</Text_body>

      <div className='mt-10 flex flex-col md:flex-row gap-5'>

        <div className='border-2 border-white bg-white/10 min-h-32 w-full rounded-md text-center p-5 flex items-center'>
          <Text_body><Text_decoration_mark>Alerta automatizado</Text_decoration_mark> sobre a publicação de novas vagas</Text_body>
        </div>
        <div className='border-2 border-white bg-white/10 min-h-32 w-full rounded-md text-center p-5 flex items-center'>
          <Text_body>Permita o <Text_decoration_mark>gerenciamento das vagas</Text_decoration_mark> preferidas e processos inscritos pelos candidatos</Text_body>
        </div>
        <div className='border-2 border-white bg-white/10 min-h-32 w-full rounded-md text-center p-5 flex items-center'>
          <Text_body><Text_decoration_mark>Disponibilize dados básicos das vagas</Text_decoration_mark> disponíveis em uma área aberta, possibilitando o acesso por qualquer pessoa</Text_body>
        </div>
        <div className='border-2 border-white bg-white/10 min-h-32 w-full rounded-md text-center p-5 flex items-center'>
          <Text_body>Tenha acesso a uma <Text_decoration_mark>base de talentos</Text_decoration_mark> para pesquisas e estatísticas</Text_body>
        </div>

      </div>

    </Container>
  </section>
  );
}
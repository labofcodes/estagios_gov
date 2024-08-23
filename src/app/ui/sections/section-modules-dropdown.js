
import Accordion from '../components/accordion/accordion';

const data = [
  {
    title: 'Curriculum',
    description: 'Este módulo permite aos candidatos cadastrarem seus currículos de forma detalhada e organizada. Eles podem incluir suas experiências profissionais, habilidades, formação acadêmica e outras informações relevantes para a candidatura a estágios e residência no setor público.',
    img: '/elements/Curriculum.webp'
  },
  {
    title: 'Editais',
    description: `Neste módulo, os órgãos públicos podem criar e publicar editais de estágio e residência, especificando as vagas disponíveis, os requisitos e documentos necessários, as atribuições e outras informações importantes. Os editais ficam disponíveis para consulta pelos candidatos interessados. 
    <br>
    <br> 
    Adicionalmente pode-se estabelecer os locais/unidades envolvidos, as quantidades de vagas disponíveis, cadastro de reservas e manter o controle de todas as datas envolvidas como: período de inscrição, de recurso, de seleção, entre outras.`,
    img: '/elements/Editais.webp'
  },
  {
    title: 'Inscrição',
    description: `Através deste módulo, os candidatos podem se inscrever nos estágios e residências disponíveis, seguindo as orientações e requisitos estabelecidos nos editais. É possível selecionar as vagas de seu interesse e enviar suas candidaturas de forma rápida e fácil através da plataforma. 
    <br>
    <br>
    Documentos como índice acadêmico, declaração de PCD, entre outros, podem ser configurados para serem informados neste momento. O acompanhamento do avanço da seleção, pode ser compartilhado com os participantes, mantendo todos atualizados sobre novos documentos e passagem de etapas.`,
    img: '/elements/Inscrições.webp'
  },
  {
    title: 'Triagem e seleção',
    description: 'Este módulo auxilia os gestores na triagem e seleção dos candidatos inscritos. Inclui ferramentas para filtrar currículos, analisar documentação enviada, realizar entrevistas, avaliar habilidades e competências dos candidatos, facilitando o processo de seleção. Adicionalmente, automatiza o controle da fila de classificação de acordo com a legislação.',
    img: '/elements/Triagem e seleção.webp'
  },
  {
    title: 'Provas',
    description: 'Este módulo possibilita que os gestores possam criar e administrar testes ou avaliações específicas para os candidatos, ajudando a verificar seus conhecimentos e habilidades relacionadas às vagas de estágio e residência disponíveis. A plataforma possui mecanismos de correção e classificação automáticas, baseado nos parâmetros de configuração informados.',
    img: '/elements/Provas.webp'
  },
  {
    title: 'Contratação',
    description: 'Neste módulo, os órgãos públicos podem gerenciar etapas do processo de contratação dos estagiários selecionados. Isso inclui o envio de documentos, a comunicação com os candidatos selecionados e outras etapas necessárias para formalizar a contratação.',
    img: '/elements/Contratação.webp'
  },
  {
    title: 'Gerencial',
    description: 'Este módulo oferece recursos de gerenciamento abrangentes para os gestores. Inclui funcionalidade para definir e acompanhar o desempenho das vagas por unidade, gerar relatório, monitorar os indicadores de contratação e outras ferramentas úteis para uma gestão eficiente dos programas de estágio e residência.',
    img: '/elements/Gerencial.webp'
  },
]

export default function Section_modules_dropdown ( { className } ) {
  return (
  <section className={className}>
    <Accordion data={data}/>
  </section>
  );
}
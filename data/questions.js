const questions = [
  {
    text: "De acordo com a legislação educacional brasileira, qual é o objetivo principal da educação, conforme estabelecido na Lei de Diretrizes e Bases da Educação Nacional (LDB)?",
    options: [
      { option: "a) Preparar para o mercado de trabalho.", correct: false },
      { option: "b) Promover a interação ética na sociedade.", correct: false },
      {
        option:
          "c) Qualificar para o exercício da cidadania e para o trabalho.",
        correct: true,
      },
      {
        option: "d) Desenvolver plenamente o indivíduo como cidadão.",
        correct: false,
      },
      {
        option:
          "e) Integrar socialmente e preparar para o mercado de trabalho.",
        correct: false,
      },
    ],
  },
  {
    text: "De acordo com a Lei nº 9.394/96, quais dos seguintes princípios estão corretos?",
    options: [
      {
        option:
          "a) Igualdade de condições para acesso e permanência na escola.",
        correct: false,
      },
      {
        option:
          "b) Liberdade de aprender, ensinar, pesquisar e divulgar a cultura.",
        correct: false,
      },
      {
        option:
          "c) Igualdade de condições para acesso e permanência na escola e liberdade de aprender, ensinar, pesquisar e divulgar a cultura.",
        correct: true,
      },
      {
        option:
          "d) Liberdade de aprender, ensinar, pesquisar e divulgar a cultura e respeito à liberdade e apreço à intolerância.",
        correct: false,
      },
      {
        option:
          "e) Liberdade de aprender, ensinar, pesquisar e divulgar a cultura, singularidade de ideias e de concepções pedagógicas, e respeito à liberdade e apreço à intolerância.",
        correct: false,
      },
    ],
  },

  {
    text: "A Didática, como área de estudo, visa propor princípios, formas e diretrizes comuns ao ensino de todas as áreas do conhecimento. Qual é o foco principal da Didática?",
    options: [
      { option: "a) Definição de objetivos educacionais.", correct: false },
      { option: "b) Elaboração de conteúdos curriculares.", correct: false },
      { option: "c) Implementação de métodos de ensino.", correct: false },
      {
        option:
          "d) Análise das condições de ensino e suas relações com os processos de aprendizagem.",
        correct: false,
      },
      { option: "e) Todas as alternativas estão corretas.", correct: true },
    ],
  },
  {
    text: "Qual foi o nome do padre envolvido nos primórdios da fundação da cidade da Serra, conforme registros históricos?",
    options: [
      { option: "a) José Dias.", correct: false },
      { option: "b) Bento Lourenço.", correct: false },
      { option: "c) Francisco Rodrigues.", correct: false },
      { option: "d) Bento Lourenço Braz.", correct: false },
      { option: "e)  Braz Lourenço.", correct: true },
    ],
  },

  {
    text: "Em que data foi oficialmente fundado o Município da Serra, conforme a Lei Orgânica?",
    options: [
      { option: "a) Dia 04 de setembro de 1562.", correct: false },
      { option: "b) Dia 08 de dezembro de 1556.", correct: true },
      { option: "c) Dia 28 de novembro de 1558.", correct: false },
      { option: "d) Dia 18 de outubro de 1556.", correct: false },
      { option: "e) Dia 16 de janeiro de 1554.", correct: false },
    ],
  },
  {
    text: "Qual é o principal objetivo da educação pré-escolar, de acordo com a Lei Orgânica do Município da Serra?",
    options: [
      {
        option:
          "a) Desenvolvimento emocional, social e financeiro da criança e de sua família.",
        correct: false,
      },
      {
        option: "b) Melhoria física, emocional e financeira da criança.",
        correct: false,
      },
      {
        option:
          "c) Desenvolvimento físico, socioemocional e intelectual da criança.",
        correct: true,
      },
      {
        option:
          "d) Promoção do socioemocional, cultural e intelectual da criança e do meio onde vive.",
        correct: false,
      },
      {
        option:
          "e) Promoção social, cultural, física, emocional e intelectual da criança.",
        correct: false,
      },
    ],
  },

  {
    text: "Qual das seguintes diretrizes NÃO corresponde ao Plano Municipal de Educação da Serra?",
    options: [
      { option: "a) Universalização da alfabetização.", correct: false },
      { option: "b) Universalização do atendimento escolar.", correct: false },
      {
        option:
          "c) Atualização constante do quadro de profissionais da educação.",
        correct: true,
      },
      {
        option:
          "d) Promoção do princípio da gestão democrática da educação pública.",
        correct: false,
      },
      {
        option:
          "e) Promoção humanística, científica, cultural e tecnológica do Município.",
        correct: false,
      },
    ],
  },
  // QUESTÕES EDUCAÇÃO FÍSICA
  {
    text: "Qual é o principal objetivo das atividades recreativas e educativas na Educação Física Escolar?",
    options: [
      {
        option:
          "a) Promoção dos valores essenciais para a convivência social e profissional.",
        correct: true,
      },
      { option: "b) Formação completa da cidadania.", correct: false },
      { option: "c) Planejamento integral.", correct: false },
      { option: "d) Capacitação dos discentes.", correct: false },
      { option: "e) Integração interdisciplinar.", correct: false },
    ],
  },

  {
    text: "Quais dos seguintes objetivos são abordados através dos jogos e brincadeiras tradicionais e pré-desportivos no Ensino Fundamental II?",
    options: [
      {
        option:
          "a) Ensino de cooperação e regras para brincadeiras em equipe. Valorização da cultura popular e compreensão das normas dos jogos pré-desportivos.",
        correct: true,
      },
      {
        option:
          "b) Valorização da cultura popular e compreensão das normas dos jogos pré-desportivos.",
        correct: false,
      },
      {
        option:
          "c) Desenvolvimento de habilidades para benefícios pessoais e coletivos futuros.",
        correct: false,
      },
      {
        option:
          "d) Demonstração aos professores da importância dos jogos e brincadeiras no ensino.",
        correct: false,
      },
      { option: "e) Todos os itens acima estão corretos.", correct: false },
    ],
  },
  {
    text: "Analise as afirmações a seguir como Verdadeiras (V) ou Falsas (F) e marque a opção correta: <br>(__) Os conteúdos atitudinais são explicitados como objetos de ensino e aprendizagem, o que facilita a construção de uma postura responsável em relação a si mesmo e aos outros. <br>(__) Uma boa explicação dos conteúdos atitudinais propostos como objetos de ensino e aprendizagem minimiza a construção de valores e atitudes através do chamado currículo oculto. <br>(__) Todos os conteúdos, independentemente da natureza, devem sempre integrar o chamado currículo oculto da Educação Física.",
    options: [
      { option: "a) F; V; V.", correct: false },
      { option: "b) V; F; V.", correct: false },
      { option: "c) V; V; F.", correct: true },
      { option: "d) F; F; V.", correct: false },
      { option: "e) V; V; V.", correct: false },
    ],
  },

  {
    text: "Por que os jogos e brincadeiras são ferramentas importantes no Ensino Fundamental II, de acordo com o site Impulsiona?",
    options: [
      {
        option:
          "a) Estimulam a participação alegre dos alunos nas aulas de Educação Física.",
        correct: false,
      },
      {
        option:
          "b) Através dos jogos e brincadeiras, os alunos têm mais oportunidades de aprendizado.",
        correct: false,
      },
      {
        option:
          "c) Tornam as aulas mais convidativas para a participação de todos.",
        correct: false,
      },
      {
        option:
          "d) Melhoram a autoestima, mesmo para os alunos que não são fãs de Educação Física.",
        correct: false,
      },
      { option: "e) Todas as alternativas estão corretas.", correct: true },
    ],
  },
];

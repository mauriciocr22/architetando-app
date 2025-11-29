export const CURSOS = [
  {
    id: 1,
    titulo: 'Restauração de Edifícios Históricos',
    categoria: 'Patrimônio Histórico',
    duracao: '40 horas',
    formato: 'Online ao vivo',
    nivel: 'Intermediário',
    descricaoCurta: 'Aprenda técnicas especializadas de restauração e conservação de patrimônio arquitetônico',
    descricaoCompleta: `Este curso oferece uma formação completa em restauração de edifícios históricos, abordando desde os aspectos teóricos até as técnicas práticas de intervenção em patrimônio construído.

Você aprenderá sobre a história da preservação do patrimônio, legislação pertinente, diagnóstico de patologias, técnicas de restauro e conservação de diferentes materiais construtivos tradicionais.`,
    instrutor: 'Arquitetos especialistas da Architetando',
    cargaHoraria: '40 horas (5 semanas)',
    preco: 'Consultar',
    imagem: require('../../assets/images/obra1.png'),
    conteudoProgramatico: [
      {
        modulo: 'Módulo 1',
        titulo: 'Introdução ao Patrimônio Histórico',
        topicos: [
          'História da preservação do patrimônio no Brasil',
          'Conceitos de restauro e conservação',
          'Legislação e órgãos de proteção (IPHAN, CONDEPHAAT, CONDEPASA)',
        ],
      },
      {
        modulo: 'Módulo 2',
        titulo: 'Diagnóstico e Análise',
        topicos: [
          'Levantamento arquitetônico e cadastral',
          'Identificação de patologias em edificações históricas',
          'Técnicas de prospecção e análise estratigráfica',
        ],
      },
      {
        modulo: 'Módulo 3',
        titulo: 'Técnicas de Intervenção',
        topicos: [
          'Restauração de alvenarias históricas',
          'Conservação de revestimentos e pinturas',
          'Intervenções em estruturas de madeira',
          'Restauro de elementos decorativos',
        ],
      },
      {
        modulo: 'Módulo 4',
        titulo: 'Projeto de Restauro',
        topicos: [
          'Elaboração de projeto de restauração',
          'Especificações técnicas e memoriais',
          'Compatibilização de projetos',
        ],
      },
      {
        modulo: 'Módulo 5',
        titulo: 'Estudos de Caso',
        topicos: [
          'Análise de projetos de restauração em Santos',
          'Casos práticos do Centro Histórico',
          'Visita técnica virtual',
        ],
      },
    ],
    prerequisitos: [
      'Formação ou graduação em andamento em Arquitetura, Engenharia Civil ou áreas afins',
      'Conhecimentos básicos de desenho técnico',
      'Interesse em patrimônio histórico',
    ],
    oquevocevaaprender: [
      'Identificar e diagnosticar patologias em edifícios históricos',
      'Aplicar técnicas adequadas de conservação e restauro',
      'Elaborar projetos de restauração conforme legislação',
      'Especificar materiais e técnicas compatíveis com patrimônio',
      'Compreender a legislação de proteção ao patrimônio',
    ],
    certificado: 'Certificado de conclusão emitido pela Architetando',
    diferenciais: [
      'Foco em cases reais do Centro Histórico de Santos',
      'Parceria com UNIMONTE',
      'Aulas ministradas por especialistas com experiência prática',
      'Material didático completo incluso',
      'Suporte online durante todo o curso',
    ],
  },
];

export const getCursos = () => {
  return CURSOS;
};

export const getCursoById = (id) => {
  return CURSOS.find(curso => curso.id === id);
};

export type Tese = {
  id: string
  numero: number
  title: string
  oportunidade: string
  paraQuem: string
  analise: string
  ctaLabel: string
}

export type TeseCategoria = {
  id: string
  title: string
  teses: Tese[]
}

export const TESE_DISCLAIMER = {
  title: "Aviso importante",
  text: "A apresentação desta oportunidade tributária não significa reconhecimento automático de direito, garantia de recuperação de valores ou garantia de resultado. A possibilidade de aplicação depende da análise individual do caso concreto, da documentação apresentada, da legislação e da jurisprudência aplicáveis.",
  note: "A análise é personalizada e será realizada de acordo com as características e documentos apresentados por cada cliente.",
}

export const TESE_CATEGORIES: TeseCategoria[] = [
  {
    id: "teses-e-oportunidades-tributarias",
    title: "Teses e Oportunidades Tributárias",
    teses: [
      {
        id: "recuperacao-de-inss-acima-do-teto",
        numero: 1,
        title: "Recuperação de INSS acima do teto",
        oportunidade:
          "Análise de contribuições previdenciárias do INSS recolhidas acima do teto previdenciário e da possibilidade de recuperação de valores.",
        paraQuem:
          "Profissionais com mais de um vínculo, como médicos, enfermeiros e professores.",
        analise:
          "Verificamos os vínculos, contribuições e documentos para identificar eventual valor passível de recuperação.",
        ctaLabel: "Quero analisar meu caso",
      },
      {
        id: "recuperacao-de-inss-para-prefeituras",
        numero: 2,
        title: "Recuperação de INSS para prefeituras",
        oportunidade:
          "Análise de contribuições previdenciárias (INSS) e da possibilidade de recuperação de valores recolhidos indevidamente.",
        paraQuem: "Prefeituras e servidores municipais.",
        analise:
          "A situação previdenciária e os recolhimentos realizados são analisados individualmente.",
        ctaLabel: "Quero analisar meu caso",
      },
      {
        id: "recuperacao-do-inss-lei-9711-98",
        numero: 3,
        title: "Recuperação do INSS – Lei nº 9.711/98",
        oportunidade:
          "Análise das contribuições previdenciárias relacionadas à Lei nº 9.711/98 e da possibilidade de recuperação tributária.",
        paraQuem: "Empresas que cedem ou tomam mão de obra.",
        analise:
          "A documentação e os recolhimentos da empresa são avaliados para verificar a existência de oportunidade tributária.",
        ctaLabel: "Quero analisar minha empresa",
      },
      {
        id: "revisao-do-gilrat-rat",
        numero: 4,
        title: "Revisão do GILRAT/RAT",
        oportunidade:
          "Análise do enquadramento da empresa nos graus de risco utilizados para o cálculo da contribuição previdenciária.",
        paraQuem:
          "Empresas com folha de pagamento, especialmente dos setores de indústria e serviços.",
        analise:
          "Verificamos o enquadramento e as informações utilizadas no cálculo para identificar eventual possibilidade de revisão.",
        ctaLabel: "Quero revisar meu enquadramento",
      },
      {
        id: "revisao-do-fap",
        numero: 5,
        title: "Revisão do FAP",
        oportunidade:
          "Análise de possíveis controvérsias relacionadas ao Fator Acidentário de Prevenção (FAP).",
        paraQuem: "Empresas com muitos empregados.",
        analise:
          "A situação da empresa e os elementos utilizados na composição do FAP são avaliados individualmente.",
        ctaLabel: "Quero analisar o FAP da minha empresa",
      },
    ],
  },
  {
    id: "imposto-de-renda",
    title: "Imposto de Renda",
    teses: [
      {
        id: "restituicao-de-ir-sobre-pensao-alimenticia",
        numero: 6,
        title: "Restituição de IR sobre pensão alimentícia",
        oportunidade:
          "Análise da possibilidade de recuperação de valores de Imposto de Renda relacionados à pensão alimentícia.",
        paraQuem: "Pessoas que recebem pensão alimentícia.",
        analise:
          "Analisamos as declarações e os documentos fiscais para verificar eventual possibilidade de restituição.",
        ctaLabel: "Quero analisar minha restituição",
      },
      {
        id: "isencao-de-ir-por-doenca-ocupacional",
        numero: 7,
        title: "Isenção de IR por doença ocupacional",
        oportunidade:
          "Análise da possibilidade de isenção de Imposto de Renda relacionada a doença pelo trabalho.",
        paraQuem: "Trabalhadores e aposentados com doença do trabalho.",
        analise:
          "A documentação médica e a situação tributária são avaliadas para verificar a possibilidade de aplicação da isenção.",
        ctaLabel: "Quero analisar meu caso",
      },
      {
        id: "isencao-de-ir-para-doencas-graves",
        numero: 8,
        title: "Isenção de IR para doenças graves",
        oportunidade:
          "Análise da possibilidade de isenção de Imposto de Renda e eventual restituição de valores.",
        paraQuem: "Aposentados e pensionistas com doença grave.",
        analise:
          "A documentação médica, a condição tributária e os valores recolhidos são analisados individualmente.",
        ctaLabel: "Quero analisar meu caso",
      },
      {
        id: "deducao-de-educacao-de-dependente-com-deficiencia",
        numero: 9,
        title: "Dedução de educação de dependente com deficiência",
        oportunidade:
          "Análise da possibilidade de dedução integral de despesas com educação de dependente com deficiência.",
        paraQuem: "Pais e responsáveis por pessoa com deficiência ou autismo.",
        analise:
          "A situação do dependente e as despesas educacionais são avaliadas para verificar a possibilidade de aplicação da oportunidade tributária.",
        ctaLabel: "Quero analisar minhas despesas",
      },
      {
        id: "ir-sobre-herancas-e-doacoes",
        numero: 10,
        title: "IR sobre heranças e doações",
        oportunidade:
          "Análise das questões tributárias relacionadas ao Imposto de Renda em operações envolvendo heranças e doações.",
        paraQuem: "Herdeiros e donatários.",
        analise:
          "A operação, os documentos e a situação tributária são analisados individualmente.",
        ctaLabel: "Quero analisar minha situação",
      },
      {
        id: "ir-sobre-ganho-de-capital",
        numero: 11,
        title: "IR sobre ganho de capital",
        oportunidade:
          "Análise da apuração do Imposto de Renda incidente sobre ganho de capital.",
        paraQuem: "Pessoas que venderam imóveis ou outros bens com lucro.",
        analise:
          "Verificamos a operação realizada, os valores envolvidos e a forma de apuração do ganho de capital.",
        ctaLabel: "Quero revisar meu ganho de capital",
      },
      {
        id: "dividendos-no-simples-nacional",
        numero: 12,
        title: "Dividendos no Simples Nacional",
        oportunidade:
          "Análise da tributação sobre distribuição de lucros e dividendos e de sua aplicação às empresas do Simples Nacional.",
        paraQuem: "Sócios de empresas do Simples Nacional.",
        analise:
          "A estrutura da empresa, a distribuição de lucros e a situação tributária são avaliadas conforme o caso concreto.",
        ctaLabel: "Quero analisar minha empresa",
      },
    ],
  },
  {
    id: "pis-e-cofins",
    title: "PIS e COFINS",
    teses: [
      {
        id: "exclusao-do-icms-da-base-do-pis-cofins",
        numero: 13,
        title: "Exclusão do ICMS da base do PIS/COFINS",
        oportunidade:
          "Análise da exclusão do ICMS da base de cálculo do PIS e da COFINS e da possibilidade de recuperação de valores.",
        paraQuem:
          "Empresas do comércio e da indústria tributadas pelo Lucro Real ou Presumido.",
        analise:
          "Analisamos a tributação da empresa e os períodos pertinentes para verificar eventual possibilidade de recuperação.",
        ctaLabel: "Quero verificar minha empresa",
      },
      {
        id: "exclusao-do-iss-da-base-do-pis-cofins",
        numero: 14,
        title: "Exclusão do ISS da base do PIS/COFINS",
        oportunidade:
          "Análise da possibilidade de exclusão do ISS da base de cálculo do PIS e da COFINS.",
        paraQuem: "Prestadores de serviços tributados pelo Lucro Real ou Presumido.",
        analise:
          "A forma de tributação e as operações da empresa são avaliadas para verificar a possibilidade de aplicação da oportunidade.",
        ctaLabel: "Quero analisar minha empresa",
      },
      {
        id: "creditos-de-insumos-nao-cumulatividade",
        numero: 15,
        title: "Créditos de insumos – não cumulatividade",
        oportunidade:
          "Análise de créditos relacionados à não cumulatividade e ao conceito de insumos para fins de PIS e COFINS.",
        paraQuem: "Indústrias e empresas tributadas pelo Lucro Real.",
        analise:
          "A atividade da empresa, os produtos utilizados e a documentação disponível são analisados para identificar possíveis créditos.",
        ctaLabel: "Quero verificar meus créditos",
      },
    ],
  },
  {
    id: "icms",
    title: "ICMS",
    teses: [
      {
        id: "icms-nas-transferencias-entre-estabelecimentos",
        numero: 16,
        title: "ICMS nas transferências entre estabelecimentos",
        oportunidade:
          "Análise da tributação do ICMS nas transferências de mercadorias entre estabelecimentos do mesmo titular.",
        paraQuem: "Empresas com filiais ou centros de distribuição.",
        analise: "A estrutura da empresa e suas operações são avaliadas individualmente.",
        ctaLabel: "Quero analisar minhas operações",
      },
      {
        id: "difal-em-vendas-a-consumidor-final",
        numero: 17,
        title: "DIFAL em vendas a consumidor final",
        oportunidade:
          "Análise do Diferencial de Alíquota (DIFAL) do ICMS nas vendas destinadas ao consumidor final.",
        paraQuem: "E-commerces e empresas que vendem para outros estados.",
        analise:
          "A atividade, as operações interestaduais e o enquadramento tributário da empresa são analisados.",
        ctaLabel: "Quero analisar meu DIFAL",
      },
      {
        id: "difal-e-empresas-do-simples-nacional",
        numero: 18,
        title: "DIFAL e empresas do Simples Nacional",
        oportunidade:
          "Análise do DIFAL do ICMS em operações interestaduais realizadas por empresas do Simples Nacional.",
        paraQuem: "Empresas do Simples Nacional com operações interestaduais.",
        analise:
          "A situação tributária e as operações realizadas pela empresa são analisadas caso a caso.",
        ctaLabel: "Quero analisar minha empresa",
      },
      {
        id: "icms-sobre-energia-solar",
        numero: 19,
        title: "ICMS sobre energia solar",
        oportunidade: "Análise da tributação do ICMS relacionada à energia solar.",
        paraQuem: "Pessoas que instalaram energia solar.",
        analise:
          "A situação e a tributação aplicável são verificadas conforme o caso e o estado envolvido.",
        ctaLabel: "Quero analisar meu caso",
      },
    ],
  },
  {
    id: "iptu-itbi-itcmd-e-itr",
    title: "IPTU, ITBI, ITCMD e ITR",
    teses: [
      {
        id: "oportunidades-de-atuacao-no-iptu",
        numero: 20,
        title: "Oportunidades de atuação no IPTU",
        oportunidade:
          "Análise de questões relacionadas ao IPTU, incluindo imunidades e fato gerador.",
        paraQuem: "Proprietários de imóveis urbanos e entidades imunes.",
        analise:
          "A situação do imóvel, sua utilização e a cobrança do tributo são analisadas individualmente.",
        ctaLabel: "Quero analisar meu IPTU",
      },
      {
        id: "imunidade-de-itbi-na-incorporacao-de-bens-de-capital",
        numero: 21,
        title: "Imunidade de ITBI na incorporação de bens de capital",
        oportunidade:
          "Análise da possibilidade de aplicação da imunidade de ITBI na incorporação de imóveis ao capital social.",
        paraQuem: "Empresários que integralizam imóveis no capital social.",
        analise:
          "A operação societária, os imóveis envolvidos e a situação tributária são avaliados.",
        ctaLabel: "Quero analisar meu ITBI",
      },
      {
        id: "revisao-das-bases-de-calculo-de-itcmd-itbi-e-itr",
        numero: 22,
        title: "Revisão das bases de cálculo de ITCMD, ITBI e ITR",
        oportunidade:
          "Análise de questões relacionadas às bases de cálculo do ITCMD, ITBI e ITR.",
        paraQuem: "Pessoas envolvidas em inventário, compra de imóvel ou doação.",
        analise:
          "Os documentos da operação e a base de cálculo utilizada são analisados para verificar eventual possibilidade de revisão.",
        ctaLabel: "Quero revisar minha tributação",
      },
      {
        id: "itbi-na-pratica",
        numero: 23,
        title: "ITBI na prática",
        oportunidade:
          "Análise das questões tributárias relacionadas ao ITBI em operações imobiliárias.",
        paraQuem: "Compradores de imóveis.",
        analise:
          "A operação imobiliária e o cálculo do ITBI são avaliados conforme as características do caso.",
        ctaLabel: "Quero analisar meu ITBI",
      },
      {
        id: "itr-na-pratica",
        numero: 24,
        title: "ITR na prática",
        oportunidade: "Análise da apuração e das questões práticas relacionadas ao ITR.",
        paraQuem: "Proprietários rurais.",
        analise:
          "A situação do imóvel rural e as informações utilizadas na apuração do tributo são analisadas.",
        ctaLabel: "Quero analisar meu ITR",
      },
      {
        id: "questoes-atuais-de-iss",
        numero: 25,
        title: "Questões atuais de ISS",
        oportunidade:
          "Análise de questões relacionadas à materialidade, base de cálculo, local de pagamento e retenção do ISS.",
        paraQuem: "Prestadores de serviços e tomadores.",
        analise:
          "A atividade e as operações realizadas são avaliadas para identificar a tributação aplicável.",
        ctaLabel: "Quero analisar meu ISS",
      },
    ],
  },
  {
    id: "planejamento-tributario",
    title: "Planejamento Tributário",
    teses: [
      {
        id: "equiparacao-hospitalar-reducao-de-irpj-csll",
        numero: 26,
        title: "Equiparação hospitalar – redução de IRPJ/CSLL",
        oportunidade:
          "Análise da possibilidade de enquadramento na equiparação hospitalar para fins de planejamento tributário e redução de IRPJ/CSLL.",
        paraQuem: "Clínicas médicas, odontológicas, de fisioterapia e laboratórios.",
        analise:
          "São avaliados os requisitos estruturais e a situação da empresa para verificar a possibilidade de enquadramento.",
        ctaLabel: "Quero analisar minha clínica",
      },
      {
        id: "recuperacao-de-credito-de-clinicas-medicas",
        numero: 27,
        title: "Recuperação de crédito de clínicas médicas",
        oportunidade:
          "Análise de informações fiscais e da possibilidade de recuperação de créditos tributários de clínicas médicas.",
        paraQuem: "Clínicas médicas.",
        analise:
          "Os informes e dados fiscais da clínica são analisados para identificar eventual crédito passível de recuperação.",
        ctaLabel: "Quero verificar meus créditos",
      },
      {
        id: "planejamento-tributario-para-pessoa-fisica",
        numero: 28,
        title: "Planejamento tributário para pessoa física",
        oportunidade:
          "Planejamento tributário personalizado para análise e organização da carga tributária.",
        paraQuem: "Pessoas físicas de alta renda.",
        analise:
          "A situação patrimonial e tributária é analisada para identificar alternativas de planejamento.",
        ctaLabel: "Quero fazer meu planejamento",
      },
      {
        id: "reorganizacao-societaria",
        numero: 29,
        title: "Reorganização societária",
        oportunidade: "Planejamento tributário por meio de reorganizações societárias.",
        paraQuem: "Empresas e grupos econômicos.",
        analise:
          "A estrutura societária e os objetivos empresariais são analisados para avaliar alternativas de reorganização.",
        ctaLabel: "Quero analisar minha estrutura societária",
      },
      {
        id: "constituicao-de-holding",
        numero: 30,
        title: "Constituição de Holding",
        oportunidade:
          "Análise da constituição de holding como instrumento de planejamento patrimonial e sucessório, considerando os aspectos tributários envolvidos.",
        paraQuem: "Famílias com patrimônio e interesse em planejamento sucessório.",
        analise:
          "O patrimônio, a estrutura familiar e os objetivos sucessórios são avaliados para verificar a adequação da estrutura.",
        ctaLabel: "Quero analisar a possibilidade de uma holding",
      },
    ],
  },
  {
    id: "simples-nacional",
    title: "Simples Nacional",
    teses: [
      {
        id: "recuperacao-de-pis-cofins-de-produtos-monofasicos",
        numero: 31,
        title: "Recuperação de PIS/COFINS de produtos monofásicos",
        oportunidade:
          "Análise e recuperação de créditos de PIS/COFINS relacionados a produtos sujeitos à tributação monofásica.",
        paraQuem:
          "Farmácias, postos de combustíveis, autopeças, bares, restaurantes, lojas de conveniência e perfumarias.",
        analise:
          "Analisamos os produtos comercializados e a tributação da empresa para identificar eventual possibilidade de recuperação.",
        ctaLabel: "Quero verificar créditos da minha empresa",
      },
    ],
  },
  {
    id: "agronegocio",
    title: "Agronegócio",
    teses: [
      {
        id: "funrural",
        numero: 32,
        title: "FUNRURAL",
        oportunidade:
          "Análise da tributação relacionada ao FUNRURAL e da jurisprudência aplicável ao caso.",
        paraQuem: "Produtores rurais e agroindústrias.",
        analise:
          "A atividade rural, os recolhimentos e a situação tributária são avaliados individualmente.",
        ctaLabel: "Quero analisar meu FUNRURAL",
      },
      {
        id: "contribuicao-ao-senar",
        numero: 33,
        title: "Contribuição ao SENAR",
        oportunidade:
          "Análise da contribuição destinada ao SENAR e da situação tributária do produtor rural.",
        paraQuem: "Produtores rurais.",
        analise:
          "São analisados os recolhimentos e a situação específica do produtor para verificar eventual oportunidade tributária.",
        ctaLabel: "Quero analisar minha situação",
      },
      {
        id: "itr-rural-lei-9393-96",
        numero: 34,
        title: "ITR Rural – Lei nº 9.393/96",
        oportunidade:
          "Análise da apuração, base de cálculo e alíquota do ITR conforme a situação do imóvel rural.",
        paraQuem: "Produtores rurais.",
        analise:
          "A propriedade rural e as informações utilizadas para apuração do ITR são analisadas individualmente.",
        ctaLabel: "Quero revisar meu ITR",
      },
    ],
  },
  {
    id: "defesa-e-regularizacao-tributaria",
    title: "Defesa e Regularização Tributária",
    teses: [
      {
        id: "defesa-em-auto-de-infracao",
        numero: 35,
        title: "Defesa em auto de infração",
        oportunidade:
          "Análise de autos de infração tributária e das matérias de defesa, incluindo possíveis nulidades e decadência.",
        paraQuem: "Empresas e pessoas autuadas.",
        analise:
          "O auto de infração, os documentos e os fundamentos da cobrança são analisados para identificar as medidas cabíveis.",
        ctaLabel: "Quero analisar meu auto de infração",
      },
      {
        id: "responsabilidade-tributaria-e-parr",
        numero: 36,
        title: "Responsabilidade tributária e PARR",
        oportunidade:
          "Análise e defesa em situações de responsabilização tributária e procedimentos de PARR.",
        paraQuem: "Sócios e administradores responsabilizados.",
        analise:
          "A origem da responsabilização e os documentos do procedimento são analisados para identificar as medidas de defesa cabíveis.",
        ctaLabel: "Quero analisar minha responsabilização",
      },
      {
        id: "limites-as-multas-tributarias",
        numero: 37,
        title: "Limites às multas tributárias",
        oportunidade:
          "Análise de multas tributárias e dos possíveis limites à aplicação de penalidades consideradas abusivas.",
        paraQuem: "Pessoas e empresas autuadas com multas tributárias.",
        analise:
          "A autuação, os valores cobrados e os fundamentos da penalidade são avaliados individualmente.",
        ctaLabel: "Quero analisar minha multa",
      },
      {
        id: "defesa-na-execucao-fiscal",
        numero: 38,
        title: "Defesa na execução fiscal",
        oportunidade:
          "Análise de medidas de defesa e regularização em execuções fiscais, cobranças e débitos inscritos em dívida ativa.",
        paraQuem: "Empresas e pessoas executadas.",
        analise:
          "O processo, o débito e a situação da cobrança são analisados para identificar as medidas processuais e administrativas cabíveis.",
        ctaLabel: "Quero analisar minha execução fiscal",
      },
      {
        id: "transacao-tributaria",
        numero: 39,
        title: "Transação tributária",
        oportunidade:
          "Análise das possibilidades de regularização de dívidas tributárias por meio de transação.",
        paraQuem: "Empresas e pessoas com dívidas tributárias.",
        analise:
          "A dívida, a situação do contribuinte e as possibilidades de regularização disponíveis são avaliadas conforme o caso concreto.",
        ctaLabel: "Quero analisar minha dívida tributária",
      },
    ],
  },
]

export const ALL_TESES: Tese[] = TESE_CATEGORIES.flatMap((categoria) => categoria.teses)

export function teseCategoryAnchor(id: string) {
  return `#${id}`
}

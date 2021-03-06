
export const timelineComissao = [320,501,322,240];
export const timelineApresentacao = [100,110,604];
export const timelineApensacao = [106,504,110,604,504];


const statusListAll = [
    {
        cod: 5,
        sigla: "",
        nome: "Não Informado",
        descricao: "",
        ignore: true,
    },
    {
        cod: 100,
        sigla: "",
        nome: "Apresentação de Proposição",
        descricao: "" ,
        tipoTramitacao:"apresentacao",
        stage: 1
    },
    {
        cod: 104,
        sigla: "",
        nome: "Desapensação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 105,

        nome: "Leitura e publicação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 106,
        sigla: "",
        nome: "Apensação",
        descricao: "",
        tipoTramitacao:"apensacao",
        stage: 1
    },
    {
        cod: 107,
        sigla: "",
        nome: "Não Apensação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 110,
        sigla: "",
        nome: "Distribuição ",
        descricao: "",
        tipoTramitacao:"apresentacao",
        stage: 2
    },
    {
        cod: 112,
        sigla: "",
        nome: "Redistribuição ",
        descricao: "",
        ignore: true,
    },
    {
        cod: 113,
        sigla: "",
        nome: "Envio para a redação Final",
        descricao: "",
        ignore: true,
    },
    {
        cod: 115,
        sigla: "",
        nome: "Declarada insubsistência",
        descricao: "",
        ignore: true,
    },
    {
        cod: 120,
        sigla: "",
        nome: "Criação de Comissão Temporária",
        descricao: "",
        ignore: true,
    },
    {
        cod: 121,
        sigla: "",
        nome: "Constituição de Comissão Temporária",
        descricao: "",
        ignore: true,
    },
    {
        cod: 122,
        sigla: "",
        nome: "Instalação de Comissão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 125,
        sigla: "",
        nome: "Despacho à CCJR - Redação Final",
        descricao: "",
        ignore: true,
    },
    {
        cod: 126,
        sigla: "",
        nome: "Despacho à Promulgação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 127,
        sigla: "",
        nome: "Despacho à Sanção",
        descricao: "",
        ignore: true,
    },
    {
        cod: 128,
        sigla: "",
        nome: "Remessa ao Senado Federal",
        descricao: "",
        ignore: true,
    },
    {
        cod: 129,
        sigla: "",
        nome: "Despacho de Apensação ",
        descricao: "",
        ignore: true,
    },
    {
        cod: 130,
        sigla: "",
        nome: "Despacho de Desapensação ",
        descricao: "",
        ignore: true,
    },
    {
        cod: 131,
        sigla: "",
        nome: "Despacho de sujeita a Arquivamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 132,
        sigla: "",
        nome: "Despacho de sujeita a Devolução",
        descricao: "",
        ignore: true,
    },
    {
        cod: 133,
        sigla: "",
        nome: "Devolução ao autor",
        descricao: "",
        ignore: true,
    },
    {
        cod: 134,
        sigla: "",
        nome: "Despacho de Arquivamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 135,
        sigla: "",
        nome: "Despacho de Desarquivamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 137,
        sigla: "",
        nome: "Remessa à Presidência da República",
        descricao: "",
        ignore: true,
    },
    {
        cod: 138,
        sigla: "",
        nome: "Remessa a Ministério",
        descricao: "",
        ignore: true,
    },
    {
        cod: 139,
        sigla: "",
        nome: "Despacho de Não Acolhimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 140,
        sigla: "",
        nome: "Desarquivamento - Errata",
        descricao: "",
        ignore: true,
    },
    {
        cod: 150,
        sigla: "",
        nome: "Inclusão em Pauta",
        descricao: "",
        ignore: true,
    },
    {
        cod: 151,
        sigla: "",
        nome: "Inclusão de Urgência em Pauta",
        descricao: "",
        ignore: true,
    },
    {
        cod: 161,
        sigla: "",
        nome: "Recebimento na Mesa solicitando resposta",
        descricao: "",
        ignore: true,
    },
    {
        cod: 162,
        sigla: "",
        nome: "Recebimento de Resposta",
        descricao: "",
        ignore: true,
    },
    {
        cod: 170,
        sigla: "",
        nome: "Devolução ao Relator",
        descricao: "",
        ignore: true,
    },
    {
        cod: 171,
        sigla: "",
        nome: "Devolução à Mesa para Novo Despacho",
        descricao: "",
        ignore: true,
    },
    {
        cod: 180,
        sigla: "",
        nome: "Encaminhamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 181,
        sigla: "",
        nome: "Encaminhamento - art. 52, § 6º do RICD",
        descricao: "",
        ignore: true,
    },
    {
        cod: 191,
        sigla: "",
        nome: "Aprovação de Recurso",
        descricao: "",
        ignore: true,
    },
    {
        cod: 192,
        sigla: "",
        nome: "Apresentação de Recurso",
        descricao: "",
        ignore: true,
    },
    {
        cod: 193,
        sigla: "",
        nome: "Rejeição de Recurso",
        descricao: "",
        ignore: true,
    },
    {
        cod: 194,
        sigla: "",
        nome: "Apresentação de Requerimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 195,
        sigla: "",
        nome: "Aprovação de Requerimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 196,
        sigla: "",
        nome: "Aprovação de Urgência (154, 155 ou 64 CF)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 197,
        sigla: "",
        nome: "Rejeição de Proposicao",
        descricao: "",
        ignore: true,
    },
    {
        cod: 198,
        sigla: "",
        nome: "Prejudicado",
        descricao: "",
        ignore: true,
    },
    {
        cod: 199,
        sigla: "",
        nome: "Providência Interna",
        descricao: "",
        ignore: true,
    },
    {
        cod: 200,
        sigla: "",
        nome: "Retirada pelo Autor",
        descricao: "",
        ignore: true,
    },
    {
        cod: 201,
        sigla: "",
        nome: "Proposição Devolvida ao Autor",
        descricao: "",
        ignore: true,
    },
    {
        cod: 203,
        sigla: "",
        nome: "Notificação de Despacho",
        descricao: "",
        ignore: true,
    },
    {
        cod: 210,
        sigla: "",
        nome: "Leitura de Parecer em substituição à Comissão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 211,
        sigla: "",
        nome: "Leitura e publicação da Redação Final",
        descricao: "",
        ignore: true,
    },
    {
        cod: 214,
        sigla: "",
        nome: "Leitura e publicação de Parecer favorável de admissibilidade de PEC",
        descricao: "",
        ignore: true,
    },
    {
        cod: 215,
        sigla: "",
        nome: "Leitura e publicação do Parecer - Urgência (154,155 ou 64 CF)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 216,
        sigla: "",
        nome: "Discussão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 219,
        sigla: "",
        nome: "Encaminhamento da Votação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 220,
        sigla: "",
        nome: "Discussão (Inicio e Continuacao)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 221,
        sigla: "",
        nome: "Adiamento de Discussão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 222,
        sigla: "",
        nome: "Discussão (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 223,
        sigla: "",
        nome: "Obstrução Discussão (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 226,
        sigla: "",
        nome: "Recebimento de Emenda de Plenário",
        descricao: "",
        ignore: true,
    },
    {
        cod: 227,
        sigla: "",
        nome: "Encerramento de Discussão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 231,
        sigla: "",
        nome: "Votação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 232,
        sigla: "",
        nome: "Votação em 1º turno",
        descricao: "",
        ignore: true,
    },
    {
        cod: 233,
        sigla: "",
        nome: "Votação em 2º turno",
        descricao: "",
        ignore: true,
    },
    {
        cod: 234,
        sigla: "",
        nome: "Adiamento de Votação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 237,
        sigla: "",
        nome: "Aprovação em 1º turno",
        descricao: "",
        ignore: true,
    },
    {
        cod: 238,
        sigla: "",
        nome: "Aprovação em 1º turno - com redação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 239,
        sigla: "",
        nome: "Aprovação da Redação Final",
        descricao: "",
        ignore: true,
    },
    {
        cod: 240,
        sigla: "",
        nome: "Aprovação",
        descricao: "",
        tipoTramitacao:"comissao",
        stage: 4
    },
    {
        cod: 241,
        sigla: "",
        nome: "Aprovação de Proposição Interna",
        descricao: "",
        ignore: true,
    },
    {
        cod: 242,
        sigla: "",
        nome: "Discussão da Materia pelos Deputados",
        descricao: "",
        ignore: true,
    },
    {
        cod: 244,
        sigla: "",
        nome: "Aprovação de Proposição em Plenário",
        descricao: "",
        ignore: true,
    },
    {
        cod: 245,
        sigla: "",
        nome: "Verificação de Votação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 250,
        sigla: "",
        nome: "Retirada de Pauta",
        descricao: "",
        ignore: true,
    },
    {
        cod: 251,
        sigla: "",
        nome: "Transformação em Norma Jurídica",
        descricao: "",
        ignore: true,
    },
    {
        cod: 260,
        sigla: "",
        nome: "Rejeição de Requerimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 263,
        sigla: "",
        nome: "Retirada de Requerimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 300,
        sigla: "",
        nome: "Apresentação de Proposição interna - Comissão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 319,
        sigla: "",
        nome: "Análise Parecer",
        descricao: "",
        ignore: true,
    },
    {
        cod: 320,
        sigla: "",
        nome: "Designação de Relator",
        descricao: "",
        tipoTramitacao:"comissao",
        stage: 1
    },
    {
        cod: 321,
        sigla: "",
        nome: "Redistribuição a Relator",
        descricao: "",
        ignore: true,
    },
    {
        cod: 322,
        sigla: "",
        nome: "Parecer do Relator",
        descricao: "",
        tipoTramitacao:"comissao",
        stage: 3
    },
    {
        cod: 323,
        sigla: "",
        nome: "Parecer do Relator - Emendas",
        descricao: "",
        ignore: true,
    },
    {
        cod: 324,
        sigla: "",
        nome: "Parecer do Relator - Manifestação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 326,
        sigla: "",
        nome: "Parecer do Relator - Revisão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 327,
        sigla: "",
        nome: "Designação de Relator do Vencedor",
        descricao: "",
        ignore: true,
    },
    {
        cod: 328,
        sigla: "",
        nome: "Designação de Relator Parcial",
        descricao: "",
        ignore: true,
    },
    {
        cod: 329,
        sigla: "",
        nome: "Designação de Relator Revisor",
        descricao: "",
        ignore: true,
    },
    {
        cod: 330,
        sigla: "",
        nome: "Leitura e publicação do Parecer",
        descricao: "",
        ignore: true,
    },
    {
        cod: 331,
        sigla: "",
        nome: "Cancelamento de Parecer",
        descricao: "",
        ignore: true,
    },
    {
        cod: 335,
        sigla: "",
        nome: "Rejeição do Parecer do Relator",
        descricao: "",
        ignore: true,
    },
    {
        cod: 336,
        sigla: "",
        nome: "Aprovação do Parecer",
        descricao: "",
        ignore: true,
    },
    {
        cod: 337,
        sigla: "",
        nome: "Apresentação do Relatório Prévio",
        descricao: "",
        ignore: true,
    },
    {
        cod: 338,
        sigla: "",
        nome: "Aprovação do Relatório Prévio ou Parcial",
        descricao: "",
        ignore: true,
    },
    {
        cod: 339,
        sigla: "",
        nome: "Rejeição do Relatório Prévio",
        descricao: "",
        ignore: true,
    },
    {
        cod: 340,
        sigla: "",
        nome: "Apresentação do Relatório Final",
        descricao: "",
        ignore: true,
    },
    {
        cod: 350,
        sigla: "",
        nome: "Abertura de Prazo",
        descricao: "",
        ignore: true,
    },
    {
        cod: 352,
        sigla: "",
        nome: "Prorrogação de Prazo",
        descricao: "",
        ignore: true,
    },
    {
        cod: 353,
        sigla: "",
        nome: "Reabertura de Prazo",
        descricao: "",
        ignore: true,
    },
    {
        cod: 362,
        sigla: "",
        nome: "Prejudicado Requerimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 400,
        sigla: "",
        nome: "Recebimento de Emenda",
        descricao: "",
        ignore: true,
    },
    {
        cod: 401,
        sigla: "",
        nome: "Recebimento de Emenda a Substitutivo",
        descricao: "",
        ignore: true,
    },
    {
        cod: 420,
        sigla: "",
        nome: "Pedido de Vista",
        descricao: "",
        ignore: true,
    },
    {
        cod: 430,
        sigla: "",
        nome: "Manifestação de Voto",
        descricao: "",
        ignore: true,
    },
    {
        cod: 431,
        sigla: "",
        nome: "Declaração de Voto em Separado",
        descricao: "",
        ignore: true,
    },
    {
        cod: 435,
        sigla: "",
        nome: "Declaração de Prejudicialidade",
        descricao: "",
        ignore: true,
    },
    {
        cod: 440,
        sigla: "",
        nome: "Prorrogação de prazo para conclusão de CPI",
        descricao: "",
        ignore: true,
    },
    {
        cod: 441,
        sigla: "",
        nome: "Conclusão de CPI",
        descricao: "",
        ignore: true,
    },
    {
        cod: 451,
        sigla: "",
        nome: "Manifestação pela Prejudicialidade",
        descricao: "",
        ignore: true,
    },
    {
        cod: 452,
        sigla: "",
        nome: "Manifestação pela Incompetência",
        descricao: "",
        ignore: true,
    },
    {
        cod: 469,
        sigla: "",
        nome: "Transformada em Nova Proposição",
        descricao: "",
        ignore: true,
    },
    {
        cod: 500,
        sigla: "",
        nome: "Recebimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 501,
        sigla: "",
        nome: "Recebimento - Relator",
        descricao: "",
        tipoTramitacao:"comissao",
        stage: 2
    },
    {
        cod: 502,
        sigla: "",
        nome: "Arquivamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 503,
        sigla: "",
        nome: "Desarquivamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 504,
        sigla: "",
        nome: "Notificação de Apensação",
        descricao: "",
        tipoTramitacao:"apensacao",
        stage: 2
    },
    {
        cod: 505,
        sigla: "",
        nome: "Notificação de Desapensação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 506,
        sigla: "",
        nome: "Recebimento - Redação Final",
        descricao: "",
        ignore: true,
    },
    {
        cod: 507,
        sigla: "",
        nome: "Recebimento - Relator (Sem Manifestação)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 510,
        sigla: "",
        nome: "Dispensada a Redação Final",
        descricao: "",
        ignore: true,
    },
    {
        cod: 600,
        sigla: "",
        nome: "Encerramento de Prazo",
        descricao: "",
        ignore: true,
    },
    {
        cod: 601,
        sigla: "",
        nome: "Saída de membro da comissão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 602,
        sigla: "",
        nome: "Devolução de Vista",
        descricao: "",
        ignore: true,
    },
    {
        cod: 603,
        sigla: "",
        nome: "Novo despacho",
        descricao: "",
        ignore: true,
    },
    {
        cod: 604,
        sigla: "",
        nome: "Publicação de Proposição",
        descricao: "",
        tipoTramitacao:"apresentacao",
        stage: 3
    },
    {
        cod: 605,
        sigla: "",
        nome: "Publicação de Despacho",
        descricao: "",
        ignore: true,
    },
    {
        cod: 606,
        sigla: "",
        nome: "Publicação de Parecer",
        descricao: "",
        ignore: true,
    },
    {
        cod: 607,
        sigla: "",
        nome: "Recebimento de autógrafos",
        descricao: "",
        ignore: true,
    },
    {
        cod: 608,
        sigla: "",
        nome: "Remessa à Promulgação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 609,
        sigla: "",
        nome: "Remessa à Sanção",
        descricao: "",
        ignore: true,
    },
    {
        cod: 610,
        sigla: "",
        nome: "Submeta-se a Plenário",
        descricao: "",
        ignore: true,
    },
    {
        cod: 620,
        sigla: "",
        nome: "Perda de eficácia",
        descricao: "",
        ignore: true,
    },
    {
        cod: 630,
        sigla: "",
        nome: "Reentrada na comissão por arquivamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 640,
        sigla: "",
        nome: "Desarquivamento a Pedido",
        descricao: "",
        ignore: true,
    },
    {
        cod: 650,
        sigla: "",
        nome: "Desarquivamento de Ofício",
        descricao: "",
        ignore: true,
    },
    {
        cod: 700,
        sigla: "",
        nome: "Conferência Sinopse 2001",
        descricao: "",
        ignore: true,
    },
    {
        cod: 710,
        sigla: "",
        nome: "Revisão de despacho",
        descricao: "",
        ignore: true,
    },
    {
        cod: 720,
        sigla: "",
        nome: "Adoção de Proposição pela Comissão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 910,
        sigla: "",
        nome: "Notificação de Encaminhamento Fora de Fluxo",
        descricao: "",
        ignore: true,
    },
    {
        cod: 997,
        sigla: "",
        nome: "Deliberação* (inativa)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 998,
        sigla: "",
        nome: "Pronta para ordem do dia* (inativa)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 999,
        sigla: "",
        nome: "Despacho* (inativa)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1000,
        sigla: "",
        nome: "Notificação de Apoiamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1001,
        sigla: "",
        nome: "Decisão da Presidência",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1002,
        sigla: "",
        nome: "Notificação - Pasta genérica",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1003,
        sigla: "",
        nome: "Notificação (Sinopse) - Revisão da Ementa / Indexação",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1004,
        sigla: "",
        nome: "Notificação (CeDi) - Legislação Citada",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1005,
        sigla: "",
        nome: "Notificações",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1006,
        sigla: "",
        nome: "Pela Recusa",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1007,
        sigla: "",
        nome: "Recebimento de Retorno",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1008,
        sigla: "",
        nome: "Não Deliberado",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1009,
        sigla: "",
        nome: "Tramitação de Proposição Acessória",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1010,
        sigla: "",
        nome: "Devolução à CCP",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1011,
        sigla: "",
        nome: "Criação de TVRs",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1012,
        sigla: "",
        nome: "Transformado em Norma Jurídica com Veto Parcial",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1013,
        sigla: "",
        nome: "Vetado Totalmente",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1020,
        sigla: "",
        nome: "Ofício de Devolução ao Autor",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1021,
        sigla: "",
        nome: "Questão de Ordem",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1022,
        sigla: "",
        nome: "Oficio Conferência Apoiamento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1023,
        sigla: "",
        nome: "Despacho",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1024,
        sigla: "",
        nome: "Arquivamento - Art.133 do RI",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1025,
        sigla: "",
        nome: "Deferido o requerimento de retirada pelo autor",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1026,
        sigla: "",
        nome: "Autorização de abertura de prazo recursal",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1027,
        sigla: "",
        nome: "Pareceres Favoráveis nas Comissões",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1028,
        sigla: "",
        nome: "Pareceres Contrários quanto ao Mérito",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1029,
        sigla: "",
        nome: "Parecer pela Inadequação Financeira e/ou Orçamentária",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1030,
        sigla: "",
        nome: "Parecer pela Inconstitucionalidade ou Injuridicidade",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1031,
        sigla: "",
        nome: "Contra Declaração de Prejudicialidade",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1032,
        sigla: "",
        nome: "Contra Despacho de Devolução ao Autor",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1033,
        sigla: "",
        nome: "Contra Despacho pelo Indeferimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1034,
        sigla: "",
        nome: "Arquivamento da representação, por inépcia/ausência de justa causa.",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1035,
        sigla: "",
        nome: "Arquivamento da representação, por improcedência.",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1036,
        sigla: "",
        nome: "Despacho Revisto",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1037,
        sigla: "",
        nome: "Pela perda do mandato de deputado federal.",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1038,
        sigla: "",
        nome: "Volta a aguardar criação de nova Comissão Especial.",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1040,
        sigla: "",
        nome: "Ratificação de Parecer",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1041,
        sigla: "",
        nome: "Remessa ao Congresso Nacional",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1042,
        sigla: "",
        nome: "Relatório de Conferência de Assinaturas",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1043,
        sigla: "",
        nome: "Ação de Relatoria",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1050,
        sigla: "",
        nome: "Notificacao para Publicação Intermediária",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1051,
        sigla: "",
        nome: "Encerramento de Comissão Temporária",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1052,
        sigla: "",
        nome: "Substituição de Versão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1053,
        sigla: "",
        nome: "Apresentação de Quadro Analítico",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1054,
        sigla: "",
        nome: "Não Acolhimento",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1055,
        sigla: "",
        nome: "Providência Interna - Comunicação de Dilatação de Prazo",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1056,
        sigla: "",
        nome: "Providência Interna - Comunicação de resposta ostensiva",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1057,
        sigla: "",
        nome: "Providência Interna - Comunicação de resposta reservada",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1058,
        sigla: "",
        nome: "Leitura de proposição em Plenário",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1059,
        sigla: "",
        nome: "Instauração de Processo - COÉTICA",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1060,
        sigla: "",
        nome: "Sorteio de Relator - COÉTICA",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1061,
        sigla: "",
        nome: "Início da Instrução Probatória - COÉTICA",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1062,
        sigla: "",
        nome: "Encerramento da Instrução Probatória - COÉTICA",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1070,
        sigla: "",
        nome: "Sessão Solene",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1071,
        sigla: "",
        nome: "Comissão Geral",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1231,
        sigla: "",
        nome: "Votação (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1232,
        sigla: "",
        nome: "Obstruçao Votação (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1233,
        sigla: "",
        nome: "Destaques (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1234,
        sigla: "",
        nome: "Votação (Outros Requerimentos)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1235,
        sigla: "",
        nome: "Aprovação de Proposição (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1236,
        sigla: "",
        nome: "Rejeição de Proposição (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1237,
        sigla: "",
        nome: "Manutenção do texto (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1238,
        sigla: "",
        nome: "Supressão do texto (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1239,
        sigla: "",
        nome: "Verificação de Votação (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1240,
        sigla: "",
        nome: "Prejudicialidade (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1241,
        sigla: "",
        nome: "Retirada pelo Autor (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1242,
        sigla: "",
        nome: "Não Acolhimento (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1243,
        sigla: "",
        nome: "Encaminhamento (Plenário)",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1244,
        sigla: "",
        nome: "Encerramentos",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1245,
        sigla: "",
        nome: "Acessórios",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1250,
        sigla: "",
        nome: "Saída de Relator da Comissão - Sem Parecer Apresentado",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1255,
        sigla: "",
        nome: "Saída de Relator da Comissão - Com Parecer Apresentado",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1260,
        sigla: "",
        nome: "Retorno de Relator à Comissão",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1261,
        sigla: "",
        nome: "Aprovação de Requerimento Procedimental",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1262,
        sigla: "",
        nome: "Rejeição de Requerimento Procedimental",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1263,
        sigla: "",
        nome: "Prejudicado Requerimento Procedimental",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1264,
        sigla: "",
        nome: "Retirada de Requerimento Procedimental",
        descricao: "",
        ignore: true,
    },
    {
        cod: 1500,
        sigla: "",
        nome: "Matéria apreciada em Plenário",
        descricao: ""
    }
];

export default statusListAll;
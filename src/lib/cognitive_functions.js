export function decode(type)
{
    const mind = type.charAt(0);
    const tactics = type.charAt(3);
    const prefs =
    {
        energy: type.charAt(1),
        nature: type.charAt(2)
    };
    const result = {};

    result["dominant"] = FUNCTIONS[`${prefs[config[mind][tactics].dom]}${mind}`];
    result["auxiliary"] = FUNCTIONS[`${prefs[config[mind][tactics].aux]}${mind === "E" ? "I" : "E"}`];
    result["tertiary"] = FUNCTIONS[result.auxiliary.reverse];
    result["inferior"] = FUNCTIONS[result.dominant.reverse];

    result.phrase = Object.keys(result).map((key) => result[key].initials).join(", ");

    return result;
}

const config =
{
    I: { J: { dom: "energy", aux: "nature" }, P: { dom: "nature", aux: "energy" } },
    E: { J: { dom: "nature", aux: "energy" }, P: { dom: "energy", aux: "nature" } }
}

export const FUNCTIONS =
{
    SI:
    {
        name: "Sensação Introvertida",
        codename: "Balanceador",
        initials: "Si",
        reverse: "NE",
        snippet: "Valoriza estabilidade, experiências passadas, detalhes familiares, conhecimento prévio e conclusão.",
        description:
        {
            dominant: "Tem domínio com questões de lealdade aos outros e a si mesmo, sabe exatamente qual é o seu lugar e seus deveres como cidadão.",
            auxiliary: "Tem responsabilidade com seus deveres e obrigações perante a sociedade, seu senso de disciplina, lealdade e honra.",
            tertiary: "Usa experiencias passadas para justificar suas atitudes presente. Pode se tornar avesso a riscos não conseguindo sair do lugar.",
            inferior: "Tem medo e insegurança de ter uma má experiência tentando algo novo. Não sabe (ou não gosta de) lidar com rotinas e padrões."
        }
    },
    SE:
    {
        name: "Sensação Extrovertida",
        codename: "Experiência",
        initials: "Se",
        reverse: "NI",
        snippet: "Recebe prazer imediato, sensações, instinto, vitalidade, pureza estética e sensualidade.",
        description:
        {
            dominant: "Tem domínio sobre o espaço físico real e imediato (“o que está acontecendo exatamente agora”) e inteligência espacial elevada.",
            auxiliary: "Tem responsabilidade em gerar boas experiências para as pessoas, seja material ou sensorial propriamente dita, em usar o espaço físico com sabedoria.",
            tertiary: "Quer que as pessoas parem para ouvir o que ele tem a dizer. Quando não acontece, torna-se ácido, crítico e tende a impor sua fala e posição.",
            inferior: "Tem medo e insegurança de entregar às pessoas más experiências. Não sabe (ou não gosta de) lidar com pressões do ambiente externo."
        }
    },
    NI:
    {
        name: "Intuição Introvertida",
        codename: "Conhecedor",
        initials: "Ni",
        reverse: "SE",
        snippet: "Valoriza profundidade, visões, pressentimentos, significados subjetivos e reflexão.",
        description:
        {
            dominant: "Tem domínio sobre a percepção do próprio futuro, capaz de visualizar conexões entre objetos e eventos e como será seu destino individual.",
            auxiliary: "Tem responsabilidade com suas próprias intenções e desejos e se suas ações causarão algum prejuízo no futuro.",
            tertiary: "Acredita saber o que é certo para ele próprio, por isso pode se tornar irritado quando alguém externo diz o que ele deve fazer.",
            inferior: "Tem medo e insegurança de não saber o que o futuro lhe trará. Não sabe (ou não gosta de) tentar prever consequências a longo prazo."
        }
    },
    NE:
    {
        name: "Intuição Extrovertida",
        codename: "Ideação",
        initials: "Ne",
        reverse: "SI",
        snippet: "Valoriza potencial positivo, ideas futuristas, esperança de melhoria.",
        description:
        {
            dominant: "Tem domínio sobre a percepção do futuro como um todo, sendo capaz de prever muitas possibilidades e destinos diferentes.",
            auxiliary: "Tem responsabilidade em fornecer avisos sobre o destino das ações presentes, prever as consequências futuras e as intenções das pessoas.",
            tertiary: "Valoriza a conduta e procedimentos que visa funcionar no futuro, por isso pode se tornar neurótico quando as coisas não são feitas a sua maneira.",
            inferior: "Tem medo e insegurança em novidades e imprevisibilidade. Não sabe (ou não gosta de) tomar novas medidas que exijam certo risco."
        }
    },
    TI:
    {
        name: "Pensamento Introvertido",
        codename: "Raciocínio",
        initials: "Ti",
        reverse: "FE",
        snippet: "Valoriza lógica, análise, critica, conhecimento e ideias.",
        description:
        {
            dominant: "Tem domínio com raciocínio lógico sobre fatos subjetivos através de método dedutivo (observações teóricas para um resultado lógico).",
            auxiliary: "Tem responsabilidade em verificar os fatos, se o que está sendo dito ou constatado faz sentido lógico, o que é falso ou verdadeiro.",
            tertiary: "Tende a acreditar que sempre sabe do que está falando. Quando confrontado com argumentos, pode se tornar arisco e inseguro de suas respostas.",
            inferior: "Tem medo e insegurança de não estarem corretos logicamente. Não sabe (ou não gosta de) analisar minunciosamente os dados disponíveis."
        }
    },
    TE:
    {
        name: "Pensamento Extrovertido",
        codename: "Estruturação",
        initials: "Te",
        reverse: "FI",
        snippet: "Valoriza organização, hierarquia, dados concretos, metas e eficiência.",
        description:
        {
            dominant: "Tem domínio com afirmações objetivas sobre fatos concretos através de raciocínio indutivo (observações práticas para uma conclusão imediata).",
            auxiliary: "Tem responsabilidade em entender e observar metodologias e sistemas e saber se o que está sendo feito é eficiente para completar a ação.",
            tertiary: "Gosta de um ambiente agradável à todos. Uma vez que o ambiente está desorganizado, não consegue conserta-lo, fugindo da responsabilidade.",
            inferior: "Tem medo e insegurança sobre o que as pessoas pensam sobre ele. Não sabe (ou não gosta de) organizar pensamentos racionais."
        }
    },
    FI:
    {
        name: "Sentimento Introvertido",
        codename: "Valorização",
        initials: "Fi",
        reverse: "TE",
        snippet: "Valorizando auto-imagem, valores pessoais, privacidade, harmonia interior e congruência.",
        description:
        {
            dominant: "Tem domínio sobre o que julga ser certo para si, o que é moralmente correto na sua visão de mundo e o que deve ser feito segundo esses valores pessoais.",
            auxiliary: "Tem responsabilidade sobre a maneira como eles se sentem, se as coisas que faz são por razões morais segundo sua própria visão.",
            tertiary: "Acredita ser a pessoa com os valores morais mais corretos. Quando contrariado se torna rígido, orgulhoso e teimoso.",
            inferior: "Tem medo e insegurança em não ser moral o suficiente. Não sabe (ou não gosta de) lidar com seus próprios princípios morais."
        }
    },
    FE:
    {
        name: "Sentimento Extrovertido",
        codename: "Conexão",
        initials: "Fe",
        reverse: "TI",
        snippet: "Valoriza harmonia, relação, momento, valores sociais e sentimento coletivo.",
        description:
        {
            dominant: "Tem domínio sobre o que julga ser certo para todos, o que é bom para o coletivo, o que é eticamente correto para todos.",
            auxiliary: "Tem responsabilidade em defender que as pessoas sigam os padrões éticos corretos em sociedade, como as pessoas devem agir segundo normas sociais.",
            tertiary: "Quer dar às pessoas um sentimento de alegria e positividade. Quando isso não acontece, tende a tornar-se abusivo, irônico, impondo superioridade.",
            inferior: "Tem medo e insegurança em fazer as pessoas se sentirem mal. Não sabe (ou não gosta de) como as normas sociais funcionam."
        }
    }
};
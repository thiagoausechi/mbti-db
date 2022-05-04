import { ANALYSTS, DIPLOMATS, SENTINELS, EXPLORERS } from "./roles";

/*
    mind: I - E
    energy: S - n
    nature: F - T
    tactics: P - J
    identity: A - A
*/

export function getTypeOptions(type)
{
    const chars = Array.from(type);
    return { mind: chars[0], energy: chars[1], nature: chars[2], tactics: chars[3] };
}

export function isValidType(type)
{
    return TYPES.hasOwnProperty(type);
}

const TYPES =
{
    /* --------------------- ANALYSTS --------------------- */
    INTJ:
    {
        initials: "INTJ",
        name:
        {
            male: "Arquiteto",
            female: "Arquiteta"
        },
        role: ANALYSTS,
        snippet: "Pensadores criativos e estratégicos, com um plano para tudo.",
        motto: "Eu sei a melhor forma de fazer algo."
    },

    INTP:
    {
        initials: "INTP",
        name:
        {
            male: "Lógico",
            female: "Lógico"
        },
        role: ANALYSTS,
        snippet: "Criadores inovadores com uma sede insaciável por conhecimento.",
        motto: "Vou analisar o que é fato ou sem fundamento."
    },

    ENTJ:
    {
        initials: "ENTJ",
        name:
        {
            male: "Comandante",
            female: "Comandanta"
        },
        role: ANALYSTS,
        snippet: "Líderes ousados, criativos e enérgicos, sempre dando um jeito em tudo.",
        motto: "Eu te direi o que fazer."
    },

    ENTP:
    {
        initials: "ENTP",
        name:
        {
            male: "Inovador",
            female: "Inovadora"
        },
        role: ANALYSTS,
        snippet: "Pensadores espertos e curiosos que não resistem um desafio intelectual.",
        motto: "Nada é verdade, tudo depende."
    },

    /* --------------------- DIPLOMATS --------------------- */
    INFJ:
    {
        initials: "INFJ",
        name:
        {
            male: "Advogado",
            female: "Advogada"
        },
        role: DIPLOMATS,
        snippet: "Idealistas quietos e místicos, porém muito inspiradores e incansáveis.",
        motto: "O mundo pode ser um lugar melhor."
    },

    INFP:
    {
        initials: "INFP",
        name:
        {
            male: "Mediador",
            female: "Mediadora"
        },
        role: DIPLOMATS,
        snippet: "Pessoas poéticas, bondosas e altruístas, sempre prontas para ajudar uma boa causa.",
        motto: "Num mundo ideal todos se respeitam."
    },

    ENFJ:
    {
        initials: "ENFJ",
        name:
        {
            male: "Protagonista",
            female: "Protagonista"
        },
        role: DIPLOMATS,
        snippet: "Líderes inspiradores e carismáticos, que conseguem hipnotizar sua audiência.",
        motto: "Quero que todos estejam bem."
    },

    ENFP:
    {
        initials: "ENFP",
        name:
        {
            male: "Ativista",
            female: "Ativista"
        },
        role: DIPLOMATS,
        snippet: "Espíritos livres, criativos, sociáveis e entusiasmáticos, sempre encontrando uma razão para sorrir.",
        motto: "A vida só é boa se feita para pessoas."
    },

    /* --------------------- SENTINELS --------------------- */
    ISTJ:
    {
        initials: "ISTJ",
        name:
        {
            male: "Logístico",
            female: "Logístico"
        },
        role: SENTINELS,
        snippet: "Indivíduos práticos e extremamente confiáveis.",
        motto: "O dever primeiro."
    },

    ISFJ:
    {
        initials: "ISFJ",
        name:
        {
            male: "Defensor",
            female: "Defensora"
        },
        role: SENTINELS,
        snippet: "Protetores dedicados e acolhedores, estão sempre prontos para defender seus amados.",
        motto: "Estou aqui para te ajudar, seja como for."
    },

    ESTJ:
    {
        initials: "ESTJ",
        name:
        {
            male: "Executivo",
            female: "Executiva"
        },
        role: SENTINELS,
        snippet: "Administradores excelentes, inigualáveis em gerenciar coisas - ou pessoas.",
        motto: "Vamos fazer um trabalho bem feito."
    },

    ESFJ:
    {
        initials: "ESFJ",
        name:
        {
            male: "Cônsul",
            female: "Cônsul"
        },
        role: SENTINELS,
        snippet: "Pessoas extraordinariamente atenciosas, sociais e populares, sempre prontas para ajudar.",
        motto: "Deixe-me lhe servir."
    },

    /* --------------------- EXPLORERS --------------------- */
    ISTP:
    {
        initials: "ISTP",
        name:
        {
            male: "Virtuoso",
            female: "Virtuosa"
        },
        role: EXPLORERS,
        snippet: "Experimentadores práticos e ousados, mestres em todos tipos de ferramentas.",
        motto: "Deixe comigo. Eu sei o que fazer."
    },

    ISFP:
    {
        initials: "ISFP",
        name:
        {
            male: "Aventureiro",
            female: "Aventureira"
        },
        role: EXPLORERS,
        snippet: "Artistas flexíveis e charmosos, sempre prontos para explorar e experimentar algo novo.",
        motto: "Vamos criar alguma coisa."
    },

    ESTP:
    {
        initials: "ESTP",
        name:
        {
            male: "Empresário",
            female: "Empresária"
        },
        role: EXPLORERS,
        snippet: "Pessoas inteligentes, enérgicas e perceptivas, que realmente gostam de arriscar.",
        motto: "Eu posso tudo!"
    },

    ESFP:
    {
        initials: "ESFP",
        name:
        {
            male: "Animador",
            female: "Animadora"
        },
        role: EXPLORERS,
        snippet: "Animadores entusiasmados, enérgicos e espontâneos - a vida nunca fica entediante perto deles.",
        motto: "O momento perfeito é agora!"
    }
}

export default TYPES;
export const MIND_SETTINGS =
{
    preference: "mind",
    title: "Ganho de Energia",
    snippet: "Extrovertidos ganham energia em atividades externas e interagindo com outras pessoas e com o mundo externo enquanto que Introvertidos ganham energia em atividades mais reservadas e focadas em si próprio.",
    required: true,
    options:
        [
            { letter: "E", title: "EXTROVERTIDO" },
            { letter: "I", title: "INTROVERTIDO" }
        ]
};

export const ENERGY_SETTINGS =
{
    preference: "energy",
    title: "Coleta de Informações",
    snippet: "Sensoriais buscam informações principalmente em dados concretos, históricos e realistas sobre o mundo. Já os iNtuitivos priorizam a imaginação, interpretações e as nuances entre as relações.",
    required: true,
    options:
        [
            { letter: "S", title: "SENSORIAL" },
            { letter: "N", title: "INTUITIVO" }
        ]
};

export const NATURE_SETTINGS =
{
    preference: "nature",
    title: "Tomada de Decisões",
    snippet: "Os Pensadores são lógicos e objetivos e tem bastante consideração por leis e fatos. Sentimentais priorizam valores e pessoas acima das regras. Eles decidem com base na harmonia entre as pessoas.",
    required: true,
    options:
        [
            { letter: "T", title: "RACIONAL" },
            { letter: "F", title: "SENTIMENTAL" }
        ]
};

export const TACTICS_SETTINGS =
{
    preference: "tactics",
    title: "Forma de Viver",
    snippet: "Julgadores preferem um estilo de vida mais organizado e metódico, enquanto os Perceptivos são mais flexíveis e adaptáveis a diversas situações.",
    required: true,
    options:
        [
            { letter: "J", title: "JULGADOR" },
            { letter: "P", title: "PERCEPTIVO" }
        ]
};

export const IDENTITY_SETTINGS =
{
    preference: "identity",
    title: "Identidade",
    snippet: "Assertivos são autoconfiantes, equilibrados e resistentes ao estresse. Eles não se preocupam muito, mas isso é diferente de apatia. Turbulentos são orientados para o sucesso, perfeccionistas e ansiosos para melhorar. Eles estão sempre tentando contrabalançar suas dúvidas, alcançando mais.",
    required: false,
    options:
        [
            { letter: "A", title: "ASSERTIVO" },
            { letter: "T", title: "TURBULENTO" }
        ]
};

export const ALL_SETTINGS = [MIND_SETTINGS, ENERGY_SETTINGS, NATURE_SETTINGS, TACTICS_SETTINGS, IDENTITY_SETTINGS];
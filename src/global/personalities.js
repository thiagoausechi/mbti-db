import { ANALYSTS, DIPLOMATS, SENTINELS, EXPLORERS } from "../global/roles";

/* --------------------- ANALYSTS --------------------- */
export const INTJ =
{
    initials: 'INTJ',
    name:
    {
        male: 'Arquiteto',
        female: 'Arquiteta'
    },
    role: ANALYSTS,
    snippet: 'Pensadores criativos e estratégicos, com um plano para tudo.'
}

export const INTP =
{
    initials: 'INTP',
    name:
    {
        male: 'Lógico',
        female: 'Lógico'
    },
    role: ANALYSTS,
    snippet: 'Criadores inovadores com uma sede insaciável por conhecimento.'
}

export const ENTJ =
{
    initials: 'ENTJ',
    name:
    {
        male: 'Comandante',
        female: 'Comandanta'
    },
    role: ANALYSTS,
    snippet: 'Líderes ousados, criativos e enérgicos, sempre dando um jeito em tudo.'
}

export const ENTP =
{
    initials: 'ENTP',
    name:
    {
        male: 'Inovador',
        female: 'Inovadora'
    },
    role: ANALYSTS,
    snippet: 'Pensadores espertos e curiosos que não resistem um desafio intelectual.'
}

/* --------------------- DIPLOMATS --------------------- */
export const INFJ =
{
    initials: 'INFJ',
    name:
    {
        male: 'Advogado',
        female: 'Advogada'
    },
    role: DIPLOMATS,
    snippet: 'Idealistas quietos e místicos, porém muito inspiradores e incansáveis.'
}

export const INFP =
{
    initials: 'INFP',
    name:
    {
        male: 'Mediador',
        female: 'Mediadora'
    },
    role: DIPLOMATS,
    snippet: 'Pessoas poéticas, bondosas e altruístas, sempre prontas para ajudar uma boa causa.'
}

export const ENFJ =
{
    initials: 'ENFJ',
    name:
    {
        male: 'Protagonista',
        female: 'Protagonista'
    },
    role: DIPLOMATS,
    snippet: 'Líderes inspiradores e carismáticos, que conseguem hipnotizar sua audiência.'
}

export const ENFP =
{
    initials: 'ENFP',
    name:
    {
        male: 'Ativista',
        female: 'Ativista'
    },
    role: DIPLOMATS,
    snippet: 'Espíritos livres, criativos, sociáveis e entusiasmáticos, sempre encontrando uma razão para sorrir.'
}

/* --------------------- SENTINELS --------------------- */
export const ISTJ =
{
    initials: 'ISTJ',
    name:
    {
        male: 'Logístico',
        female: 'Logístico'
    },
    role: SENTINELS,
    snippet: 'Indivíduos práticos e extremamente confiáveis.'
}

export const ISFJ =
{
    initials: 'ISFJ',
    name:
    {
        male: 'Defensor',
        female: 'Defensora'
    },
    role: SENTINELS,
    snippet: 'Protetores dedicados e acolhedores, estão sempre prontos para defender seus amados.'
}

export const ESTJ =
{
    initials: 'ESTJ',
    name:
    {
        male: 'Executivo',
        female: 'Executiva'
    },
    role: SENTINELS,
    snippet: 'Administradores excelentes, inigualáveis em gerenciar coisas - ou pessoas.'
}

export const ESFJ =
{
    initials: 'ESFJ',
    name:
    {
        male: 'Cônsul',
        female: 'Cônsul'
    },
    role: SENTINELS,
    snippet: 'Pessoas extraordinariamente atenciosas, sociais e populares, sempre prontas para ajudar.'
}

/* --------------------- EXPLORERS --------------------- */
export const ISTP =
{
    initials: 'ISTP',
    name:
    {
        male: 'Virtuoso',
        female: 'Virtuosa'
    },
    role: EXPLORERS,
    snippet: 'Experimentadores práticos e ousados, mestres em todos tipos de ferramentas.'
}

export const ISFP =
{
    initials: 'ISFP',
    name:
    {
        male: 'Aventureiro',
        female: 'Aventureira'
    },
    role: EXPLORERS,
    snippet: 'Artistas flexíveis e charmosos, sempre prontos para explorar e experimentar algo novo.'
}

export const ESTP =
{
    initials: 'ESTP',
    name:
    {
        male: 'Empresário',
        female: 'Empresária'
    },
    role: EXPLORERS,
    snippet: 'Pessoas inteligentes, enérgicas e perceptivas, que realmente gostam de arriscar.'
}

export const ESFP =
{
    initials: 'ESFP',
    name:
    {
        male: 'Animador',
        female: 'Animadora'
    },
    role: EXPLORERS,
    snippet: 'PAnimadores entusiasmados, enérgicos e espontâneos - a vida nunca fica entediante perto deles.'
}

/*
    mind: i - e
    energy: s - n
    nature: f - t
    tactics: p - j
    identity: a - t
*/
export function getPersonality(p)
{
    if (p.mind === 'i' && p.energy === 'n' && p.nature === 't' && p.tactics === 'j') return INTJ;
    if (p.mind === 'i' && p.energy === 'n' && p.nature === 't' && p.tactics === 'p') return INTP;
    if (p.mind === 'e' && p.energy === 'n' && p.nature === 't' && p.tactics === 'j') return ENTJ;
    if (p.mind === 'e' && p.energy === 'n' && p.nature === 't' && p.tactics === 'p') return ENTP;
    if (p.mind === 'i' && p.energy === 'n' && p.nature === 'n' && p.tactics === 'j') return INFJ;
    if (p.mind === 'i' && p.energy === 'n' && p.nature === 'f' && p.tactics === 'p') return INFP;
    if (p.mind === 'e' && p.energy === 'n' && p.nature === 'f' && p.tactics === 'j') return ENFJ;
    if (p.mind === 'e' && p.energy === 'n' && p.nature === 'f' && p.tactics === 'p') return ENFP;
    if (p.mind === 'i' && p.energy === 's' && p.nature === 't' && p.tactics === 'j') return ISTJ;
    if (p.mind === 'i' && p.energy === 's' && p.nature === 'f' && p.tactics === 'j') return ISFJ;
    if (p.mind === 'e' && p.energy === 's' && p.nature === 't' && p.tactics === 'j') return ESTJ;
    if (p.mind === 'e' && p.energy === 's' && p.nature === 'f' && p.tactics === 'j') return ESFJ;
    if (p.mind === 'i' && p.energy === 's' && p.nature === 't' && p.tactics === 'p') return ISTP;
    if (p.mind === 'i' && p.energy === 's' && p.nature === 'f' && p.tactics === 'p') return ISFP;
    if (p.mind === 'e' && p.energy === 's' && p.nature === 't' && p.tactics === 'p') return ESTP;
    if (p.mind === 'e' && p.energy === 's' && p.nature === 'f' && p.tactics === 'p') return ESFP;
}
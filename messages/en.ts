import type { Messages } from "next-intl";

const en: Messages = {
  Metadata: {
    title: "mbti-db",
    description:
      "A database for MBTI types, cognitive functions, and related information.",
    disclaimer: {
      title: "Disclaimer",
      description:
        "MBTI and Myers-Briggs Type Indicator are registered trademarks of The Myers-Briggs Company in the United States and other countries. This project is an independent database and is not affiliated with, authorized, maintained, sponsored, or endorsed by The Myers-Briggs Company.",
    },
    author: {
      title: "Developed by",
      description: "Thiago Ausechi",
    },
  },

  Actions: {
    sidebar: {
      open: "Open sidebar",
      close: "Close sidebar",
    },
  },

  Pages: {
    home: {
      metadata: {
        slug: "home",
        navigation: "Home",
      },
      title: "Welcome to mbti-db!",
      subtitle: "This is still a work in progress.",
    },

    guidebook: {
      metadata: {
        slug: "guidebook",
        navigation: "Guidebook",
      },
    },
  },

  Profile: {
    firstName: "First Name",
    lastName: "Last Name",
    gender: { male: "Male", female: "Female", other: "Other" },
    pronoun: { he: "He", she: "She", they: "They" },
    visibility: { show: "Show", hide: "Hide", protected: "Protected" },
  },

  Theory: {
    MBTI: {
      roles: {
        analysts: "Analysts",
        diplomats: "Diplomats",
        sentinels: "Sentinels",
        explorers: "Explorers",
      },

      preferences: {
        energy: {
          title: "Energy Gain",
          description:
            "Extroverts gain energy from external activities and interacting with other people and the external world, while Introverts gain energy from more reserved and inwardly focused activities.",
          e: { he: "Extraverted", she: "Extraverted", they: "Extraverted" },
          i: { he: "Introverted", she: "Introverted", they: "Introverted" },
        },

        mind: {
          title: "Information Gathering",
          description:
            "Sensors seek information primarily in concrete, historical, and realistic data about the world. Intuitives, on the other hand, prioritize imagination, interpretations, and the nuances between relationships.",
          s: { he: "Observant", she: "Observant", they: "Observant" },
          n: { he: "Intuitive", she: "Intuitive", they: "Intuitive" },
        },

        nature: {
          title: "Decision Making",
          description:
            "Thinkers are logical and objective and have considerable regard for laws and facts. Feelers prioritize values and people over rules. They decide based on interpersonal harmony.",
          t: { he: "Thinking", she: "Thinking", they: "Thinking" },
          f: { he: "Feeling", she: "Feeling", they: "Feeling" },
        },

        tactic: {
          title: "Lifestyle",
          description:
            "Judgers prefer a more organized and methodical lifestyle, while Perceivers are more flexible and adaptable to various situations.",
          j: { he: "Judging", she: "Judging", they: "Judging" },
          p: { he: "Prospecting", she: "Prospecting", they: "Prospecting" },
        },

        identity: {
          title: "Identity",
          description:
            "Assertive individuals are self-confident, level-headed, and resistant to stress. They don't worry much, but this is different from apathy. Turbulent individuals are sensitive to stress, prone to worry, and perfectionistic. They are always seeking self-improvement.",
          "-a": { he: "Assertive", she: "Assertive", they: "Assertive" },
          "-t": { he: "Turbulent", she: "Turbulent", they: "Turbulent" },
        },
      },

      personalities: {
        intj: { he: "Architect", she: "Architect", they: "Architect" },
        intp: { he: "Logician", she: "Logician", they: "Logician" },
        entj: { he: "Commander", she: "Commander", they: "Commander" },
        entp: { he: "Debater", she: "Debater", they: "Debater" },
        infj: { he: "Advocate", she: "Advocate", they: "Advocate" },
        infp: { he: "Mediator", she: "Mediator", they: "Mediator" },
        enfj: { he: "Protagonist", she: "Protagonist", they: "Protagonist" },
        enfp: { he: "Campaigner", she: "Campaigner", they: "Campaigner" },
        istj: { he: "Logistician", she: "Logistician", they: "Logistician" },
        isfj: { he: "Defender", she: "Defender", they: "Defender" },
        estj: { he: "Executive", she: "Executive", they: "Executive" },
        esfj: { he: "Consul", she: "Consul", they: "Consul" },
        istp: { he: "Virtuoso", she: "Virtuoso", they: "Virtuoso" },
        isfp: { he: "Adventurer", she: "Adventurer", they: "Adventurer" },
        estp: { he: "Entrepreneur", she: "Entrepreneur", they: "Entrepreneur" },
        esfp: { he: "Entertainer", she: "Entertainer", they: "Entertainer" },
      },
    },

    CognitiveFunctions: {
      stack: {
        dominant: "Dominant",
        auxiliary: "Auxiliary",
        tertiary: "Tertiary",
        inferior: "Inferior",
      },

      percieving: "Perceiving Functions",
      sensing: {
        title: "Sensing (S)",
        description:
          "Sensing is a perceiving function that gathers information through the five senses and direct experience. It focuses on the concrete, the factual, and what is real and present in the here and now, or what has been experienced in the past.",
        extraverted: {
          title: "Extraverted Sensing (Se)",
          description:
            "Focuses on experiencing the external world in real-time through the five senses. It is highly attuned to the present environment, seeking stimuli, action, and immediate opportunities.",
          stack: {
            dominant:
              "Life is to be lived in the now. It is adaptable, pragmatic, and loves action and new experiences. Reacts quickly to changes in the environment and has strong body and spatial awareness.",
            auxiliary:
              "Helps the dominant function (Ti or Fi) interact with the real world. It gathers concrete data and experiences to inform internal analysis or personal values.",
            tertiary:
              "Manifests as a desire for new experiences, sensory pleasures, and physical activities. It can lead to impulsivity and seeking instant gratification without considering the consequences.",
            inferior:
              "Under stress, it leads to reckless behavior and excessive seeking of stimuli (overeating, impulsive spending). Or, conversely, a paralyzing fear of the physical world and a feeling of sensory overload.",
          },
        },
        introverted: {
          title: "Introverted Sensing (Si)",
          description:
            "Focuses on internal sensory impressions and past experiences. It compares the present with the past to create a stable, reliable, and detailed map of the world.",
          stack: {
            dominant:
              "Life is built on the foundation of what has been tested and proven. Trusts experience and tradition. It is detail-oriented, methodical, and responsible. Seeks stability and predictability.",
            auxiliary:
              "Provides an archive of detailed experiences and facts for the dominant function (Te or Fe). It helps in making practical decisions and maintaining consistency with what has worked in the past.",
            tertiary:
              "Develops an interest in traditions, memories, and comfort. It can manifest as rigidity in routines or excessive sentimentality about the past.",
            inferior:
              "Under stress, memories become sources of anxiety and catastrophizing. The individual gets stuck on negative details from the past or obsessively fears that the worst-case scenario will repeat itself.",
          },
        },
      },
      intuition: {
        title: "Intuition (N)",
        description:
          'Intuition is a perceiving function that processes information through patterns, connections, and abstract possibilities. It focuses on the "big picture," what could be, and future implications, rather than concrete details.',
        extraverted: {
          title: "Extraverted Intuition (Ne)",
          description:
            'Sees possibilities and connections in the external world. It generates multiple ideas, brainstorms, and explores different paths and potentials. It is the "what if?" function.',
          stack: {
            dominant:
              "The world is a web of fascinating possibilities to be explored. It is creative, curious, and enthusiastic. Jumps from idea to idea, connecting seemingly unrelated concepts.",
            auxiliary:
              "Generates possibilities for the internal judging function (Ti or Fi). It explores different angles and ideas so the judging function can analyze or evaluate them.",
            tertiary:
              "Brings a flash of creativity and a desire to explore new ideas playfully. It can lead to a lack of focus and starting many projects without finishing them.",
            inferior:
              "Under stress, instead of seeing positive possibilities, Ne generates catastrophic and paralyzing scenarios. The individual feels overwhelmed by countless negative possibilities and fears the future.",
          },
        },
        introverted: {
          title: "Introverted Intuition (Ni)",
          description:
            "Synthesizes information unconsciously to form a vision or insight about how things will work out in the future. It focuses on a single path or a deep, singular understanding.",
          stack: {
            dominant:
              'Life is guided by an internal vision of the future. Has "aha!" moments and insights that seem to come from nowhere. It is strategic, focused, and determined to realize its vision, but may struggle to explain its process.',
            auxiliary:
              "Provides a long-term vision or plan for the external judging function (Te or Fe). It helps give direction and purpose to actions in the world.",
            tertiary:
              "Manifests as an interest in symbolism, conspiracy theories, and hidden meanings. It can lead to strange conclusions or disconnecting from reality (Se-dom).",
            inferior:
              "Under stress, the future vision becomes dark and distorted. The individual gets stuck in a single negative perspective, obsessed with unreal hidden meanings, and fears an inevitably bad future.",
          },
        },
      },

      judging: "Judging Functions",
      thinking: {
        title: "Thinking (T)",
        description:
          "Thinking is a judging function. It seeks to make decisions based on logic, objective criteria, and impersonal analysis. The focus is on analyzing cause and effect, finding flaws, and building systems and models that work consistently and efficiently.",
        extraverted: {
          title: "Extraverted Thinking (Te)",
          description:
            "Organizes and structures the external environment to achieve efficiency and productivity. It focuses on facts, data, and applying logic to create order and achieve goals.",
          stack: {
            dominant:
              "Life is a system to be optimized. Organizes everything and everyone for maximum efficiency. It is assertive, decisive, and results-focused. Can appear controlling or overly blunt.",
            auxiliary:
              "Uses logic to support the dominant function (usually Ni or Si). It transforms internal perceptions into concrete and effective action plans in the real world.",
            tertiary:
              "Develops later, bringing a desire to organize one's own life and be more productive. Can be used immaturely, trying to control others without proper nuance.",
            inferior:
              "Under stress, it can manifest as harsh criticism (of self and others) and an obsession with trivial facts. The desire to control the environment becomes desperate and ineffective.",
          },
        },
        introverted: {
          title: "Introverted Thinking (Ti)",
          description:
            "Seeks precision and internal consistency of ideas and mental models. It disassembles concepts to understand their fundamental principles. Truth and logical clarity are paramount.",
          stack: {
            dominant:
              "The world is a puzzle to be understood. Analyzes internal systems of logic, seeking the purest truth. It is precise and analytical, but may struggle to express its complex ideas simply.",
            auxiliary:
              "Provides a logical framework for the dominant function's perceptions (usually Ne or Se). It categorizes and analyzes incoming information to ensure it makes sense.",
            tertiary:
              'Manifests as an interest in puzzles, problem-solving, and internal criticism. It can lead to overly pedantic logic or getting "stuck" in analysis.',
            inferior:
              "In times of stress, internal logic breaks down, leading to flawed conclusions and a feeling of incompetence. May cling to rigid external logic or erupt with poorly formulated criticism.",
          },
        },
      },
      feeling: {
        title: "Feeling (F)",
        description:
          "Feeling is a judging function that makes decisions based on values, social harmony, and the impact of actions on people. It prioritizes morals, ethics, and feelings (one's own and others') to determine what is right or wrong.",
        extraverted: {
          title: "Extraverted Feeling (Fe)",
          description:
            "Seeks harmony in the external environment. It connects with others, understands social norms and others' feelings, and acts to maintain a positive and cooperative atmosphere.",
          stack: {
            dominant:
              "Life is about connection and interpersonal harmony. It is empathetic, expressive, and actively seeks to care for the group's emotional needs. May neglect its own needs for the sake of harmony.",
            auxiliary:
              "Supports the dominant function (Ni or Si) by communicating ideas pleasantly and considering their impact on people. It helps build consensus and apply insights in a way that benefits the group.",
            tertiary:
              "Brings a desire to please and connect with others. Can be used manipulatively or insecurely, seeking external validation for one's own ideas (Ti-dom).",
            inferior:
              "Under stress, it can manifest as inappropriate emotional outbursts, fear of social disapproval, and an overwhelming concern with what others think.",
          },
        },
        introverted: {
          title: "Introverted Feeling (Fi)",
          description:
            "Seeks consistency with an internal, personal value system. It focuses on authenticity, individual morality, and understanding one's own emotions in depth.",
          stack: {
            dominant:
              "Life is a journey in search of authenticity and meaning. Lives according to a strong internal moral code. It is reserved, empathetic, and passionate about its causes, but may struggle to express its feelings.",
            auxiliary:
              "Evaluates information from the dominant function (Ne or Se) through a filter of personal values. It helps decide what is important and navigate the world with integrity.",
            tertiary:
              'Manifests as strong personal convictions and a desire to be authentic. If immature, it can lead to rigid idealism or selfish behavior, focused only on what "feels" right.',
            inferior:
              "Under stress, internal values collapse. Can become hypersensitive, judgmental, and feel a deep sense of a corrupted identity. May seek validation from external value systems (Te-dom).",
          },
        },
      },
    },
  },
};

export default en;

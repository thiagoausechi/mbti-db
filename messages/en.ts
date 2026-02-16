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
      toggle: "Toggle sidebar",
    },
    theme: {
      toggle: "Toggle theme",
      light: "Light",
      dark: "Dark",
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
            "This trait determines how we interact with our environment and where we direct our mental energy.",
          summary:
            "Extroverts gain energy from external activities and interacting with other people and the external world, while Introverts gain energy from more reserved and inwardly focused activities.",
          e: {
            label: {
              he: "Extraverted",
              she: "Extraverted",
              they: "Extraverted",
            },
            description:
              "Extraverted individuals prefer group activities and get energized by social interaction. They tend to be enthusiastic and easily excited.",
          },
          i: {
            label: {
              he: "Introverted",
              she: "Introverted",
              they: "Introverted",
            },
            description:
              "Introverted individuals prefer solitary activities and get exhausted by social interaction. They tend to be quite sensitive to external stimulation (e.g. sound, sight, or smell).",
          },
        },

        mind: {
          title: "Information Gathering",
          description:
            "This trait determines how we see the world and process information.",
          summary:
            "Sensors seek information primarily in concrete, historical, and realistic data about the world. Intuitives, on the other hand, prioritize imagination, interpretations, and the nuances between relationships.",
          s: {
            label: { he: "Sensing", she: "Observant", they: "Observant" },
            description:
              "Observant individuals are highly practical, pragmatic, and down-to-earth. They tend to have strong habits and focus on what is happening or has already happened.",
          },
          n: {
            label: { he: "Intuitive", she: "Intuitive", they: "Intuitive" },
            description:
              "Intuitive individuals are very imaginative, open-minded, and curious. They prefer novelty over stability and focus on hidden meanings and future possibilities.",
          },
        },

        nature: {
          title: "Decision Making",
          description:
            "This trait determines how we make decisions and cope with emotions.",
          summary:
            "Thinkers are logical and objective and have considerable regard for laws and facts. Feelers prioritize values and people over rules. They decide based on interpersonal harmony.",
          t: {
            label: { he: "Thinking", she: "Thinking", they: "Thinking" },
            description:
              "Thinking individuals focus on objectivity and rationality, prioritizing logic over emotions. They tend to hide their feelings and see efficiency as more important than cooperation.",
          },
          f: {
            label: { he: "Feeling", she: "Feeling", they: "Feeling" },
            description:
              "Feeling individuals are sensitive and emotionally expressive. They are more empathic and less competitive than Thinking types, and focus on social harmony and cooperation.",
          },
        },

        tactic: {
          title: "Lifestyle",
          description:
            "This trait reflects our approach to work, planning, and decision-making.",
          summary:
            "Judgers prefer a more organized and methodical lifestyle, while Perceivers are more flexible and adaptable to various situations.",
          j: {
            label: { he: "Judging", she: "Judging", they: "Judging" },
            description:
              "Judging individuals are decisive, thorough, and highly organized. They value clarity, predictability, and closure, preferring structure and planning to spontaneity.",
          },
          p: {
            label: {
              he: "Prospecting",
              she: "Prospecting",
              they: "Prospecting",
            },
            description:
              "Prospecting individuals are very good at improvising and spotting opportunities. They tend to be flexible, relaxed nonconformists who prefer keeping their options open.",
          },
        },

        identity: {
          title: "Identity",
          description:
            "This trait underpins all others, showing how confident we are in our abilities and decisions.",
          summary:
            "Assertive individuals are self-confident, level-headed, and resistant to stress. Turbulent individuals are sensitive to stress, prone to worry, and perfectionistic.",
          "-a": {
            label: { he: "Assertive", she: "Assertive", they: "Assertive" },
            description:
              "Assertive individuals are self-assured, even-tempered, and resistant to stress. They refuse to worry too much and do not push themselves too hard when it comes to achieving goals.",
          },
          "-t": {
            label: { he: "Turbulent", she: "Turbulent", they: "Turbulent" },
            description:
              "Turbulent individuals are self-conscious and sensitive to stress. They are likely to experience a wide range of emotions and to be success-driven, perfectionistic, and eager to improve.",
          },
        },
      },

      personalities: {
        intj: {
          snippet:
            "Imaginative and strategic thinkers, with a plan for everything.",
          motto: "I know the most efficient way to do this.",
          label: { he: "Architect", she: "Architect", they: "Architect" },
        },
        intp: {
          snippet:
            "Innovative inventors with an unquenchable thirst for knowledge.",
          motto: "I need to analyze what is valid and what is baseless.",
          label: { he: "Logician", she: "Logician", they: "Logician" },
        },
        entj: {
          snippet:
            "Bold, imaginative, and strong-willed leaders, always finding a way - or making one.",
          motto: "I will tell you what needs to be done.",
          label: { he: "Commander", she: "Commander", they: "Commander" },
        },
        entp: {
          snippet:
            "Smart and curious thinkers who cannot resist an intellectual challenge.",
          motto: "Nothing is absolute; everything depends on context.",
          label: { he: "Debater", she: "Debater", they: "Debater" },
        },
        infj: {
          snippet:
            "Quiet and mystical, yet very inspiring and tireless idealists.",
          motto: "The world can be a better place.",
          label: { he: "Advocate", she: "Advocate", they: "Advocate" },
        },
        infp: {
          snippet:
            "Poetic, kind, and altruistic people, always eager to help a good cause.",
          motto: "In an ideal world, everyone respects each other.",
          label: { he: "Mediator", she: "Mediator", they: "Mediator" },
        },
        enfj: {
          snippet:
            "Charismatic and inspiring leaders, able to mesmerize their listeners.",
          motto: "I want everyone to be well and thrive together.",
          label: { he: "Protagonist", she: "Protagonist", they: "Protagonist" },
        },
        enfp: {
          snippet:
            "Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile.",
          motto: "Life is best when shared with people.",
          label: { he: "Campaigner", she: "Campaigner", they: "Campaigner" },
        },
        istj: {
          snippet:
            "Practical and fact-minded individuals, whose reliability cannot be doubted.",
          motto: "Duty comes first.",
          label: { he: "Logistician", she: "Logistician", they: "Logistician" },
        },
        isfj: {
          snippet:
            "Dedicated and warm protectors, always ready to defend their loved ones.",
          motto: "I am here to help you, no matter what.",
          label: { he: "Defender", she: "Defender", they: "Defender" },
        },
        estj: {
          snippet:
            "Excellent administrators, unsurpassed at managing things - or people.",
          motto: "Let's get the job done right.",
          label: { he: "Executive", she: "Executive", they: "Executive" },
        },
        esfj: {
          snippet:
            "Extraordinarily caring, social, and popular people, always eager to help.",
          motto: "Allow me to be of service.",
          label: { he: "Consul", she: "Consul", they: "Consul" },
        },
        istp: {
          snippet:
            "Bold and practical experimenters, masters of all kinds of tools.",
          motto: "Leave it to me. I know how to handle this.",
          label: { he: "Virtuoso", she: "Virtuoso", they: "Virtuoso" },
        },
        isfp: {
          snippet:
            "Flexible and charming artists, always ready to explore and experience something new.",
          motto: "Let's create something beautiful.",
          label: { he: "Adventurer", she: "Adventurer", they: "Adventurer" },
        },
        estp: {
          snippet:
            "Smart, energetic, and perceptive people, who truly enjoy living on the edge.",
          motto: "I can do anything!",
          label: {
            he: "Entrepreneur",
            she: "Entrepreneur",
            they: "Entrepreneur",
          },
        },
        esfp: {
          snippet:
            "Spontaneous, energetic, and enthusiastic entertainers - life is never boring around them.",
          motto: "The perfect moment is now!",
          label: { he: "Entertainer", she: "Entertainer", they: "Entertainer" },
        },
      },
    },

    CognitiveFunctions: {
      title: "Cognitive Functions",

      stack: {
        dominant: "Dominant",
        auxiliary: "Auxiliary",
        tertiary: "Tertiary",
        inferior: "Inferior",
      },

      perceiving: "Perceiving Functions",
      sensing: {
        title: "Sensing (S)",
        description:
          "Sensing is a perceiving function that gathers information through the five senses and direct experience. It focuses on the concrete, the factual, and what is real and present in the here and now, or what has been experienced in the past.",
        extraverted: {
          title: "Extraverted Sensing (Se)",
          description:
            "Focuses on experiencing the external world in real-time through the five senses. It is highly attuned to the present environment, seeking stimuli, action, and immediate opportunities.",
          codename: "Sensation",
          snippet:
            "Values immediate impact, aesthetics, physical instincts, vitality, and tangible reality.",

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
          codename: "Stability",
          snippet:
            "Values routine, reliability, past experiences, familiar details, and established methods.",

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
          codename: "Innovation",
          snippet:
            "Values potential, brainstorming, futuristic ideas, novel connections, and what could be.",

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
          codename: "Insight",
          snippet:
            "Values depth, underlying patterns, hunches, subjective meaning, and future implications.",

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
          codename: "Efficiency",
          snippet:
            "Values organization, hierarchy, concrete data, measurable goals, and execution.",

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
          codename: "Accuracy",
          snippet:
            "Values internal consistency, precise analysis, critique, and deep understanding of principles.",

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
          codename: "Harmony",
          snippet:
            "Values social cohesion, interpersonal connections, shared values, and the emotional atmosphere.",

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
          codename: "Authenticity",
          snippet:
            "Values self-expression, personal resonance, moral boundaries, and inner harmony.",

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

      Axes: {
        title: "Cognitive Axes",
        description:
          "A Cognitive Axis represents a unified polarity between two opposing mental processes that work in tandem as a single system. It is based on the principle that every psychological perspective requires a necessary counterbalance—for instance, objective execution (Te) is inextricably linked to subjective valuation (Fi). These axes describe the dynamic tension between how a person interacts with the world (Core) and the underlying standard that grounds that interaction (Support).",

        roles: {
          core: {
            title: "The Core Axis",
            description:
              "Represents the primary driver and default conscious lens of the pair. It is the active agent that initiates contact with the world, setting the agenda for decision-making or information gathering. It prioritizes speed, immediate application, and the path of least resistance for the psyche.",
          },
          support: {
            title: "The Balance Axis",
            description:
              "Acts as the stabilizing anchor and necessary counterweight. It provides the depth, context, or feedback loop required to prevent the Core function from becoming overextended or one-sided. It ensures that efficiency has meaning, social harmony has logic, or abstract vision has concrete reality.",
          },
        },

        macros: {
          pragmatic: "The Pragmatic Axis",
          harmonic: "The Harmonic Axis",
          realizing: "The Realizing Axis",
          inquiring: "The Inquiring Axis",
        },

        pairs: {
          TeFi: {
            concept: "Systematic Efficiency",
            core: "Focuses on organizing the external world through objective logic, maximizing resource management, and executing plans based on verifiable metrics.",
            support:
              "Provides an internal check based on personal values and authenticity, ensuring that efficient systems align with what is personally meaningful.",
          },
          FiTe: {
            concept: "Authentic Implementation",
            core: "Prioritizes internal harmony, individual distinctiveness, and deep adherence to personal values and moral convictions irrespective of external pressure.",
            support:
              "Utilizes external structure and objective logic to organize, defend, and operationalize these personal values in the real world.",
          },
          FeTi: {
            concept: "Social Cohesion",
            core: "Navigates the external emotional atmosphere, prioritizing group harmony, social norms, and the collective values of the community.",
            support:
              "Uses an internal logical framework to analyze the consistency of social behaviors and to solve problems that benefit the group.",
          },
          TiFe: {
            concept: "Analytical Precision",
            core: "Seeks internal logical consistency and accuracy, deconstructing ideas to understand their underlying principles and mechanisms.",
            support:
              "Maintains an awareness of social dynamics and emotional impacts, helping to communicate complex logic in a way that is received well by others.",
          },
          SeNi: {
            concept: "Immersive Realism",
            core: "Engages directly with the immediate physical environment, seeking high-impact sensory experiences and responding spontaneously to the 'here and now'.",
            support:
              "Provides a background sense of future implications and underlying patterns to give direction and meaning to immediate actions.",
          },
          NiSe: {
            concept: "Visionary Insight",
            core: "Focuses on abstract patterns, future possibilities, and singular visions, often synthesizing complex information into a convergent perspective.",
            support:
              "Gathers concrete sensory data and real-world experiences to feed the intuition and ground abstract visions in reality.",
          },
          NeSi: {
            concept: "Expansive Exploration",
            core: "Generates a multitude of possibilities, connections, and novel ideas, constantly seeking 'what could be' across different contexts.",
            support:
              "Draws upon past experiences, detailed memory, and established facts to anchor brainstorming and provide a reference point for new ideas.",
          },
          SiNe: {
            concept: "Reliable Stabilization",
            core: "Compares current experiences with a stored database of past sensations and facts, prioritizing stability, routine, and tried-and-true methods.",
            support:
              "Entertains alternative possibilities and potential changes to established routines to prevent stagnation and prepare for the unexpected.",
          },
        },
      },
    },

    Extras: {
      styles: {
        title: "Styles",

        communication: {
          title: "Communication",

          conclusive: {
            title: "Conclusive",
            description:
              "They prefer to process their thoughts internally, only sharing them once they have reached a definite conclusion. Their communication is often deliberate and finalized.",
          },
          opinionated: {
            title: "Opinionated",
            description:
              "With a strong focus on their own identity and internal framework, they prefer to keep external options open rather than imposing definitive conclusions on the world.",
          },
          decisive: {
            title: "Decisive",
            description:
              "Their communication style is direct and action-oriented. They are quick to organize their environment and make decisions that impact the people around them.",
          },
          "open-minded": {
            title: "Open-minded",
            description:
              "Driven by immediate sensations or endless possibilities, they prefer to keep conversations and options flowing rather than locking themselves into definitive decisions.",
          },
        },

        reasoning: {
          title: "Reasoning",

          analytical: {
            title: "Analytical",
            description:
              "This group combines an imaginative view of the world (Intuition) with a pragmatic approach to empathy (Thinking). They value competence, logic, and long-term strategies.",
          },
          experiential: {
            title: "Experiential",
            description:
              "This group combines an imaginative view of the world (Intuition) with a fraternal approach to empathy (Feeling). They focus on meaning, ideals, and human potential.",
          },
          practical: {
            title: "Practical",
            description:
              "This group combines a realistic view of the world (Sensing) with a pragmatic approach to empathy (Thinking). They rely on facts, efficiency, and concrete results.",
          },
          relational: {
            title: "Relational",
            description:
              "This group combines a realistic view of the world (Sensing) with a fraternal approach to empathy (Feeling). They prioritize social connection, service, and immediate harmony.",
          },
        },
      },
    },
  },

  Miscs: {
    ScreenReader: {
      open: "Open",
      close: "Close",
      sidebar: {
        mobile: {
          title: "Sidebar",
          description: "Displays the mobile sidebar.",
        },
      },
    },

    AcronymMeaning: {
      title: "Acronym Meaning",
      MBTI: "Myers-Briggs Type Indicator",
    },
  },
};

export default en;

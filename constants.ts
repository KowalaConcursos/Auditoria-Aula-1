import type { DayData, Badge } from './types';
import { BookOpenIcon, CheckBadgeIcon, PencilSquareIcon, SparklesIcon, TrophyIcon } from './components/Icons';

export const WEEK_LESSON: DayData[] = [
  {
    id: 0,
    dayName: 'Sábado',
    title: 'O Conflito por Trás de Todos os Conflitos',
    summary: 'Deus é apresentado em Josué como o Guerreiro que luta por Seu povo. As guerras de Israel refletem um conflito maior: o grande conflito entre o bem e o mal.',
    readings: ['Josué 10:14'],
    questions: [
      { text: 'Como conciliar o Deus guerreiro com o Deus amoroso?', suggestedAnswer: 'Deus luta contra o mal e a injustiça para proteger e salvar, não contra pessoas por poder. Seu amor motiva Sua justiça.' },
      { text: 'O que diferencia as guerras de Deus das guerras humanas?', suggestedAnswer: 'A motivação. As guerras divinas visam erradicar o mal e restaurar a justiça, enquanto as humanas são frequentemente por ganância, poder ou ódio.' }
    ],
    quiz: {
      question: 'Qual o foco central da lição?',
      options: [
        { text: 'Estratégia militar' },
        { text: 'O grande conflito espiritual' },
        { text: 'Cronologia de Josué' },
        { text: 'Poder político' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 1,
    dayName: 'Domingo',
    title: 'O Príncipe do Exército do Senhor',
    summary: 'Josué encontra o Príncipe do Exército (Cristo). A questão não é se Deus está do nosso lado, mas se estamos do lado dEle.',
    readings: ['Josué 5:13-15'],
    questions: [
      { text: 'Por que o Príncipe responde “nem uma coisa nem outra”?', suggestedAnswer: 'Porque Deus não toma partido humano. Ele é soberano e chama todos à Sua vontade. A pergunta correta é se nós estamos do lado Dele.' },
      { text: 'Como podemos nos alinhar aos planos de Deus?', suggestedAnswer: 'Através da oração, estudo da Palavra e rendição da nossa vontade, buscando Sua direção antes de agir por conta própria.' },
    ],
    quiz: {
      question: 'O que a cena do encontro de Josué com o Príncipe ensina?',
      options: [
        { text: 'Deus aprova qualquer plano humano' },
        { text: 'Devemos alinhar nossa vontade à de Deus' },
        { text: 'Os anjos são neutros em conflitos' },
        { text: 'Josué era uma figura divina' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 2,
    dayName: 'Segunda',
    title: 'Guerra no Céu',
    summary: 'O conflito começou no Céu, com a rebelião de Lúcifer. As guerras e o sofrimento na Terra são reflexos diretos dessa batalha espiritual original.',
    readings: ['Apocalipse 12:7-9'],
    questions: [
      { text: 'Como o conceito de livre-arbítrio ajuda a explicar a origem do mal?', suggestedAnswer: 'O amor verdadeiro requer liberdade. Deus deu a Suas criaturas a liberdade de escolher, e Lúcifer usou essa liberdade para se rebelar, introduzindo o mal no universo.' },
      { text: 'Onde vemos esse conflito cósmico se manifestando em nosso dia a dia?', suggestedAnswer: 'Em cada decisão moral que tomamos, na luta entre o egoísmo e o altruísmo, na tentação de fazer o mal e no chamado para fazer o bem.' },
    ],
    quiz: {
      question: 'Qual foi a origem do grande conflito?',
      options: [
        { text: 'Na terra de Canaã' },
        { text: 'Na Torre de Babel' },
        { text: 'No Céu, com a rebelião de Lúcifer' },
        { text: 'No Egito, durante o êxodo' },
      ],
      correctAnswerIndex: 2,
    }
  },
   {
    id: 3,
    dayName: 'Terça',
    title: 'O Senhor é Guerreiro',
    summary: 'Deus guerreia contra o pecado e a opressão para libertar Seu povo. Sua luta é pela justiça e restauração, não pela violência gratuita.',
    readings: ['Êxodo 15:3'],
    questions: [
        { text: 'Como Deus "guerreia" em nossas vidas hoje?', suggestedAnswer: 'Ele guerreia por meio do Espírito Santo, transformando corações, quebrando correntes de pecado e nos dando poder para vencer tentações.' },
        { text: 'Qual a principal diferença entre a justiça divina e a violência humana?', suggestedAnswer: 'A justiça divina busca restaurar e salvar, mesmo quando precisa destruir o mal. A violência humana frequentemente busca dominar, destruir e se vingar.' },
    ],
    quiz: {
      question: 'Contra o que ou quem Deus realmente peleja?',
      options: [
        { text: 'Pessoas inocentes' },
        { text: 'O pecado, a injustiça e os poderes do mal' },
        { text: 'Contra Moisés' },
        { text: 'Contra o povo de Israel' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 4,
    dayName: 'Quarta',
    title: 'O Senhor Lutará por Vocês',
    summary: 'O plano original de Deus era lutar por Israel, mas a incredulidade e a desobediência os levaram a lutar por si mesmos. A fé verdadeira resulta em calma e confiança na vitória de Deus.',
    readings: ['Êxodo 14:13-14'],
    questions: [
        { text: 'O que significa "ficar calmo" no contexto de Êxodo 14?', suggestedAnswer: 'Significa parar de tentar resolver tudo com nossas próprias forças e confiar ativamente que Deus tem o controle e agirá em nosso favor.' },
        { text: 'Quais são algumas "batalhas" que hoje tentamos lutar sozinhos, em vez de entregá-las a Deus?', suggestedAnswer: 'Ansiedade sobre o futuro, lutas contra hábitos pecaminosos, problemas de relacionamento, dificuldades financeiras, etc.' },
    ],
    quiz: {
      question: 'Qual era o plano original de Deus para as batalhas de Israel?',
      options: [
        { text: 'Que Israel lutasse sozinho' },
        { text: 'Que Deus lutasse por eles' },
        { text: 'Que fizessem alianças com o Egito' },
        { text: 'Que Israel desistisse da Terra Prometida' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 5,
    dayName: 'Quinta',
    title: 'A Segunda Melhor Opção',
    summary: 'Deus, em Sua sabedoria, permitiu que Israel lutasse em guerras pedagógicas para ensinar sobre dependência e fé. Mesmo quando eles lutavam, a vitória ainda vinha dEle.',
    readings: ['Êxodo 17:7-13'],
    questions: [
        { text: 'Por que Deus, às vezes, permite que passemos por lutas em vez de simplesmente nos dar a vitória?', suggestedAnswer: 'Para fortalecer nossa fé, nos ensinar a depender dEle e desenvolver nosso caráter. A luta nos mostra nossa fraqueza e a grandeza do Seu poder.' },
        { text: 'O que a imagem de Moisés com as mãos levantadas nos ensina sobre a oração e a dependência?', suggestedAnswer: 'Ensina que nossa vitória não depende da nossa força, mas da nossa conexão com Deus. A oração é a nossa "mão levantada", reconhecendo que o poder vem do Céu.' },
    ],
    quiz: {
      question: 'O que essas batalhas "pedagógicas" deveriam ensinar a Israel?',
      options: [
        { text: 'Orgulho nacional' },
        { text: 'Dependência total de Deus' },
        { text: 'Táticas militares avançadas' },
        { text: 'Confiança na força física' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 6,
    dayName: 'Sexta',
    title: 'Revisão e Aplicação',
    summary: 'Deus é um Deus de justiça e amor, que guerreia por nós e nos garante a vitória final no grande conflito. Nossa parte é permanecer fiéis a Cristo, nosso Capitão.',
    readings: ['Romanos 8:37-39'],
    questions: [
        { text: 'Como a compreensão do "grande conflito" muda sua visão sobre o sofrimento e as dificuldades do mundo?', suggestedAnswer: 'Ajuda a entender que não estamos sozinhos e que nossas lutas fazem parte de uma batalha maior, na qual Deus já garantiu a vitória. Isso traz esperança em meio ao caos.' },
        { text: 'Que prática espiritual específica você pode adotar esta semana para "deixar Deus lutar por você"?', suggestedAnswer: 'Pode ser começar o dia entregando as ansiedades a Ele em oração, pausar antes de reagir a um problema para pedir sabedoria, ou memorizar um verso de promessa para momentos de fraqueza.' },
    ],
    quiz: {
      question: 'Qual é a nossa parte vitoriosa no grande conflito?',
      options: [
        { text: 'Permanecer neutro' },
        { text: 'Permanecer fiel a Cristo, nosso vencedor' },
        { text: 'Confiar em nossa própria suficiência' },
        { text: 'Julgar os outros' },
      ],
      correctAnswerIndex: 1,
    }
  }
];

export const WEEK_LESSON_JOVEM: DayData[] = [
  {
    id: 0,
    dayName: 'Sábado',
    title: 'A Travessia do Jordão',
    summary: 'Deus abre caminhos impossíveis para fortalecer nossa fé. O objetivo desta semana é mostrar que Deus não escolhe o caminho mais fácil, mas o que mais fortalece nossa confiança nEle.',
    imageUrl: '/images/pensamentos_intrusivos.png',
    readings: ['Josué 4:24'],
    questions: [
      { text: 'Qual foi o ‘rio Jordão’ mais difícil que você já teve de atravessar na vida?', suggestedAnswer: 'Reflita sobre um desafio pessoal que exigiu fé para ser superado, seja nos estudos, relacionamentos ou na sua caminhada espiritual.' }
    ],
    quiz: {
      question: 'Qual o verso-chave da lição desta semana?',
      options: [
        { text: 'Josué 4:24' },
        { text: 'Salmo 23:1' },
        { text: 'Gênesis 1:1' },
        { text: 'João 3:16' },
      ],
      correctAnswerIndex: 0,
    }
  },
  {
    id: 1,
    dayName: 'Domingo',
    title: 'A Travessia do Jordão',
    summary: 'O Jordão era um rio caudaloso e perigoso na época da cheia. Deus escolheu justamente aquele momento difícil para mostrar Seu poder. Às vezes, Ele nos leva a atravessar situações desafiadoras para provar que está conosco.',
    readings: ['Josué 3', 'Josué 4'],
    questions: [
      { text: 'Por que Deus mandou atravessar o rio justamente quando estava cheio?', suggestedAnswer: 'Para ensinar o povo a confiar mesmo quando o cenário parecia impossível e revelar Seu poder nos momentos mais improváveis.' },
      { text: 'Como essa travessia aumentou a fé de Israel?', suggestedAnswer: 'Eles viram o milagre com os próprios olhos e entenderam que o Deus de Moisés continuava sendo o mesmo com Josué.' }
    ],
    quiz: {
      question: 'Por que Deus escolheu o momento da cheia do Jordão para a travessia?',
      options: [
        { text: 'Para testar a força física do povo' },
        { text: 'Para mostrar Seu poder de forma mais clara' },
        { text: 'Porque era a única época do ano possível' },
        { text: 'Foi uma coincidência' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 2,
    dayName: 'Segunda',
    title: 'Seguindo em Frente com Fé',
    summary: 'Josué disse: “Santifiquem-se, porque amanhã o Senhor fará maravilhas”. A fé do povo foi testada: o rio só abriu quando os sacerdotes colocaram os pés na água. Fé verdadeira envolve ação.',
    readings: ['Josué 3:5-17'],
    questions: [
      { text: 'O que significa “santificar-se” nesse contexto?', suggestedAnswer: 'Separar-se para Deus, buscar pureza e confiança antes de um grande passo.' },
      { text: 'Por que Deus esperou os sacerdotes darem o primeiro passo?', suggestedAnswer: 'Porque a fé se manifesta no movimento; é preciso agir antes de ver o milagre.' }
    ],
    quiz: {
      question: 'O que a história dos sacerdotes pisando na água nos ensina?',
      options: [
        { text: 'Que devemos sempre esperar' },
        { text: 'Que a fé verdadeira envolve ação' },
        { text: 'Que os sacerdotes sabiam nadar' },
        { text: 'Que a água não era funda' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 3,
    dayName: 'Terça',
    title: 'A Força da União',
    summary: 'As tribos de Rúben, Gade e metade de Manassés já tinham recebido suas terras, mas foram chamadas a ajudar as demais tribos a conquistar Canaã. A vitória seria coletiva, não individual.',
    readings: ['Josué 1:12-18', 'Deuteronômio 3:18'],
    questions: [
      { text: 'Por que Deus exigiu que todos atravessassem juntos?', suggestedAnswer: 'Porque a promessa era para todo o povo; a unidade fortalece a fé e o testemunho.' },
      { text: 'Como aplicamos isso hoje na igreja?', suggestedAnswer: 'Ajudando uns aos outros, compartilhando o peso das lutas e servindo além do nosso conforto.' }
    ],
    quiz: {
      question: 'Qual a lição sobre as tribos que já tinham suas terras?',
      options: [
        { text: 'Que elas eram mais importantes' },
        { text: 'Que a fé é fortalecida em comunidade e união' },
        { text: 'Que elas deveriam lutar sozinhas' },
        { text: 'Que a divisão de terras era injusta' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 4,
    dayName: 'Quarta',
    title: 'Momento Hipertexto',
    summary: 'Deus usa as dificuldades para nos treinar espiritualmente. Assim como Israel ergueu um memorial, também precisamos lembrar das travessias que já vencemos com Ele.',
    readings: ['Salmo 103:2', '1 Samuel 7:12'],
    questions: [
      { text: 'Por que é importante lembrar o que Deus já fez?', suggestedAnswer: 'Porque a lembrança das vitórias passadas alimenta a fé para as futuras batalhas.' },
      { text: 'Que tipo de “travessia” Deus já o ajudou a vencer?', suggestedAnswer: 'Momentos de medo, decisões difíceis, períodos de incerteza — cada um é um testemunho de livramento.' }
    ],
    quiz: {
      question: 'Por que é importante lembrar das vitórias passadas?',
      options: [
        { text: 'Para se orgulhar' },
        { text: 'Para se comparar com os outros' },
        { text: 'Para alimentar a fé para as futuras batalhas' },
        { text: 'Para viver no passado' },
      ],
      correctAnswerIndex: 2,
    }
  },
  {
    id: 5,
    dayName: 'Quinta',
    title: 'Contando Histórias que Marcam',
    summary: 'Deus mandou recolher doze pedras do rio para lembrar o milagre. Essas pedras seriam contadas aos filhos, para que nunca se esquecessem da fidelidade divina.',
    readings: ['Josué 4:1-7'],
    questions: [
      { text: 'Por que Deus pediu para construir um memorial?', suggestedAnswer: 'Para que as futuras gerações soubessem que Ele é fiel e digno de confiança.' },
      { text: 'Como podemos criar “memoriais” hoje?', suggestedAnswer: 'Registrando bênçãos, compartilhando testemunhos, contando histórias de fé aos outros.' }
    ],
    quiz: {
      question: 'Qual era o propósito das doze pedras do Jordão?',
      options: [
        { text: 'Servir como um memorial para as futuras gerações' },
        { text: 'Construir um altar para sacrifícios' },
        { text: 'Demarcar o território' },
        { text: 'Serem usadas como armas' },
      ],
      correctAnswerIndex: 0,
    }
  },
  {
    id: 6,
    dayName: 'Sexta',
    title: 'Indo "Até a Falha"!',
    summary: 'Espiritualmente, ir "até a falha" é o ponto em que a força humana acaba e a confiança em Deus começa. Ele permite que cheguemos ao limite para mostrar que Sua mão é forte.',
    readings: ['Josué 4:24', 'Patriarcas e Profetas, p. 422-423'],
    questions: [
      { text: 'Por que Deus nos leva “até o limite”?', suggestedAnswer: 'Porque é nesse ponto que deixamos de confiar em nós e passamos a depender completamente dEle.' },
      { text: 'O que significa ser um “outdoor do poder de Deus”?', suggestedAnswer: 'É viver de modo que as pessoas vejam em nós provas do poder, amor e fidelidade de Deus.' }
    ],
    quiz: {
      question: 'O que acontece quando chegamos ao nosso limite, segundo a lição?',
      options: [
        { text: 'Nós devemos desistir' },
        { text: 'É o ponto onde a força de Deus começa a agir' },
        { text: 'Significa que falhamos' },
        { text: 'Devemos pedir ajuda a outras pessoas' },
      ],
      correctAnswerIndex: 1,
    }
  }
];


export const BADGES: Badge[] = [
    { id: 'primeiro-passo', name: 'Primeiro Passo', description: 'Você começou sua jornada de estudo!', icon: SparklesIcon, styleClasses: 'text-green-300 bg-green-500/10 border-green-400/30 hover:shadow-green-400/20' },
    { id: 'leitor-fiel', name: 'Leitor Fiel', description: 'Estudou a lição por 3 dias.', icon: BookOpenIcon, styleClasses: 'text-sky-300 bg-sky-500/10 border-sky-400/30 hover:shadow-sky-400/20' },
    { id: 'anotador', name: 'Anotador', description: 'Fez 3 anotações pessoais.', icon: PencilSquareIcon, styleClasses: 'text-amber-300 bg-amber-500/10 border-amber-400/30 hover:shadow-amber-400/20' },
    { id: 'estrategista', name: 'Estrategista', description: 'Acertou todos os quizzes!', icon: CheckBadgeIcon, styleClasses: 'text-violet-300 bg-violet-500/10 border-violet-400/30 hover:shadow-violet-400/20' },
    { id: 'semana-concluida', name: 'Semana Concluída', description: 'Parabéns! Você completou a semana!', icon: TrophyIcon, styleClasses: 'text-yellow-300 bg-yellow-500/10 border-yellow-400/30 hover:shadow-yellow-400/20' },
];

export const TOTAL_XP_POSSIBLE = WEEK_LESSON.length * 10;
export const TIMER_DURATION = 55 * 60; // 55 minutes in seconds

export const PRAYER_OF_THE_DAY = {
    title: "Oração do Dia",
    text: "Senhor, ao iniciarmos este momento de estudo, pedimos a Tua presença e a iluminação do Teu Santo Espírito. Abre nossa mente e nosso coração para compreendermos a Tua Palavra e aplicá-la em nossa vida. Que este tempo nos aproxime de Ti e nos fortaleça na fé. Em nome de Jesus, amém.",
    verse: {
        reference: "Salmos 119:105",
        text: "Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos."
    }
};
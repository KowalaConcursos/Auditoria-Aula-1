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
    title: 'O Conflito por Trás da Travessia',
    summary: 'Introdução à semana: Qual foi o "rio Jordão" mais difícil que você já teve de atravessar na vida?',
    readings: [],
    questions: [
      { text: 'Qual foi o ‘rio Jordão’ mais difícil que você já teve de atravessar na vida?', suggestedAnswer: 'Reflita sobre um desafio pessoal que exigiu fé para ser superado, seja nos estudos, relacionamentos ou na sua caminhada espiritual.' }
    ],
    quiz: {
      question: 'Qual o tema central da lição desta semana?',
      options: [
        { text: 'A construção do Templo' },
        { text: 'A Travessia do Jordão' },
        { text: 'A vida de Davi' },
        { text: 'As viagens de Paulo' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 1,
    dayName: 'Domingo',
    title: 'A Travessia do Jordão',
    summary: 'Deus quer que o poder d’Ele seja evidente, mesmo nas situações mais desafiadoras.',
    readings: ['Josué 3', 'Josué 4'],
    questions: [
      { text: 'Por que Deus mandou atravessar justamente quando o rio estava transbordando?', suggestedAnswer: 'Para demonstrar Seu poder de forma inquestionável e construir uma fé que não depende de circunstâncias favoráveis, mas da Sua palavra.' },
      { text: 'Que tipo de fé é construída quando obedecemos em meio ao risco?', suggestedAnswer: 'Uma fé robusta e prática, baseada na confiança em Deus e não na lógica humana ou na segurança que podemos ver.' },
      { text: 'Como podemos aplicar isso hoje em situações de incerteza?', suggestedAnswer: 'Dando o primeiro passo de obediência, mesmo sem ver a solução completa, confiando que Deus abrirá o caminho à medida que avançamos.' }
    ],
    quiz: {
      question: 'Por que Deus escolheu o momento da cheia do Jordão para a travessia?',
      options: [
        { text: 'Era a única época possível' },
        { text: 'Para que Seu poder ficasse mais evidente' },
        { text: 'Foi uma coincidência' },
        { text: 'Para testar a força física do povo' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 2,
    dayName: 'Segunda',
    title: 'Seguindo em Frente com Fé',
    summary: 'A fé é ação, não uma espera passiva. O milagre começa quando damos o primeiro passo.',
    readings: ['Josué 3:5-17'],
    questions: [
      { text: 'O que significa “santificar-se” antes do agir de Deus?', suggestedAnswer: 'Significa se preparar espiritualmente, se consagrar e alinhar o coração com o propósito de Deus, mostrando que levamos a sério o que Ele vai fazer.' },
      { text: 'Por que Deus exige ação antes de mostrar o milagre?', suggestedAnswer: 'Porque a ação demonstra nossa confiança e dependência dEle. É um ato de fé que ativa a promessa divina.' },
      { text: 'Qual é o Jordão que Deus está chamando você a atravessar hoje?', suggestedAnswer: 'Pode ser uma decisão difícil, uma conversa necessária, o abandono de um hábito ruim ou o início de um novo projeto que parece assustador.' }
    ],
    quiz: {
      question: 'De acordo com Josué 3:5, o que o povo deveria fazer antes de Deus operar maravilhas?',
      options: [
        { text: 'Construir barcos' },
        { text: 'Reclamar' },
        { text: 'Santificar-se' },
        { text: 'Negociar com os inimigos' },
      ],
      correctAnswerIndex: 2,
    }
  },
  {
    id: 3,
    dayName: 'Terça',
    title: 'A Força da União',
    summary: 'A fé se fortalece quando vivida em comunidade. Não atravessamos nossos desafios sozinhos.',
    readings: ['Josué 1:12-18', 'Deuteronômio 3:18', 'Gálatas 6:2'],
    questions: [
      { text: 'Por que Deus mandou as tribos que já tinham suas terras ajudarem as outras?', suggestedAnswer: 'Para ensinar que a bênção individual está conectada ao bem-estar da comunidade. A vitória de um é a vitória de todos.' },
      { text: 'Como aplicamos o princípio de "levar as cargas uns dos outros" na prática?', suggestedAnswer: 'Ouvindo um amigo que precisa desabafar, orando por alguém, ajudando em uma tarefa, oferecendo apoio em momentos difíceis.' },
      { text: 'Que atitudes mostram que você está marchando junto com seus irmãos na fé?', suggestedAnswer: 'Participar ativamente na igreja, se envolver em projetos missionários, encorajar os outros e celebrar suas vitórias.' }
    ],
    quiz: {
      question: 'Qual o principal ensinamento sobre as tribos que ajudaram as outras?',
      options: [
        { text: 'A importância da competição' },
        { text: 'A necessidade de treinamento militar' },
        { text: 'A força da fé vivida em comunidade' },
        { text: 'A superioridade de algumas tribos' },
      ],
      correctAnswerIndex: 2,
    }
  },
  {
    id: 4,
    dayName: 'Quarta',
    title: 'Momento Hipertexto: Travessias da Vida',
    summary: 'Cada travessia nos ensina algo, e cada lembrança nos prepara para o próximo desafio.',
    readings: ['Salmo 103:2', 'Êxodo 16:32-34', '1 Samuel 7:12'],
    questions: [
      { text: 'O que você faz para lembrar das vezes em que Deus abriu um caminho para você?', suggestedAnswer: 'Manter um diário de gratidão, compartilhar testemunhos com amigos, guardar objetos que simbolizam uma vitória ou criar uma playlist de músicas que marcaram esses momentos.' }
    ],
    quiz: {
      question: 'Qual o propósito de lembrar das bênçãos e vitórias passadas?',
      options: [
        { text: 'Viver no passado' },
        { text: 'Fortalecer a fé para os desafios futuros' },
        { text: 'Comparar-se com os outros' },
        { text: 'Apenas por tradição' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 5,
    dayName: 'Quinta',
    title: 'Contando Histórias que Marcam',
    summary: 'As pedras da memória nos ensinam a valorizar o testemunho e a lembrança dos feitos de Deus.',
    readings: ['Josué 4:1-7', 'Apocalipse 12:11'],
    questions: [
      { text: 'Por que Deus deu tanta importância para a criação de memoriais?', suggestedAnswer: 'Porque a memória humana é falha. Os memoriais servem como gatilhos para a gratidão e como ferramentas de ensino para as futuras gerações.' },
      { text: 'Como as histórias de fé (testemunhos) fortalecem a igreja hoje?', suggestedAnswer: 'Elas tornam Deus real e próximo, encorajam quem está passando por lutas parecidas e provam que a Palavra de Deus continua se cumprindo.' },
      { text: 'Que tipo de “memorial” você poderia criar na sua vida ou na sua casa?', suggestedAnswer: 'Um pote de gratidão, um quadro com versículos que marcaram vitórias, um álbum de fotos de momentos de superação, ou até mesmo um projeto social como forma de agradecer.' }
    ],
    quiz: {
      question: 'Qual era o objetivo das doze pedras tiradas do Jordão?',
      options: [
        { text: 'Construir uma casa para Josué' },
        { text: 'Servir como um memorial dos feitos de Deus' },
        { text: 'Serem usadas como armas' },
        { text: 'Demarcar território' },
      ],
      correctAnswerIndex: 1,
    }
  },
  {
    id: 6,
    dayName: 'Sexta',
    title: 'Transmitindo Confiança',
    summary: 'O poder de lembrar e ensinar o que Deus fez nos prepara para o futuro e fortalece a fé dos outros.',
    readings: ['Patriarcas e Profetas, p. 422-423'],
    questions: [
      { text: 'Por que Deus nem sempre escolhe o caminho mais fácil para nós?', suggestedAnswer: 'Porque os caminhos difíceis são os que mais desenvolvem nosso caráter, nossa dependência dEle e nossa fé.' },
      { text: 'Que hábitos nos ajudam a não esquecer das bênçãos de Deus?', suggestedAnswer: 'A oração de gratidão diária, o estudo da Bíblia, compartilhar testemunhos e servir ao próximo.' }
    ],
    quiz: {
      question: 'Qual é um dos principais motivos para Deus não escolher o caminho mais fácil?',
      options: [
        { text: 'Para nos fazer sofrer' },
        { text: 'Para desenvolver nosso caráter e fé' },
        { text: 'Porque Ele não se importa' },
        { text: 'Para nos testar de forma aleatória' },
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
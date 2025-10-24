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
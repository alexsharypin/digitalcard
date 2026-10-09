import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/prisma/generated/client.js';
import type {
  ExperienceCreateWithoutProfileInput,
  ProfileCreateInput,
  ProjectCreateWithoutProfileInput,
} from '../src/prisma/generated/models.js';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'],
});
const prisma = new PrismaClient({ adapter });

const profile: ProfileCreateInput = {
  name: 'Александр Шарыпин',
  description:
    'Backend-разработчик на Node.js (JavaScript, TypeScript, NestJS), более 6 лет коммерческого опыта. ' +
    'Проектирую и разрабатываю серверные системы: микросервисы, REST, GraphQL и gRPC API, очереди и ' +
    'асинхронную обработку на BullMQ и Kafka, интеграции с внутренними и внешними сервисами, включая ' +
    'блокчейн-сети Polkadot и BSC. Веду сервисы от архитектуры до продакшена и быстро погружаюсь в ' +
    'сложные предметные области: распознавание речи, промышленный мониторинг, блокчейн.',
  github: 'https://github.com/alexsharypin',
  linkedin: 'https://www.linkedin.com/in/alexsharypin',
};

const skills: string[] = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Python',
  'SQL',
  'NestJS',
  'Express',
  'REST API',
  'GraphQL',
  'gRPC',
  'WebSocket',
  'Swagger/OpenAPI',
  'Микросервисная архитектура',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Elasticsearch',
  'Prisma',
  'TypeORM',
  'MinIO',
  'AWS S3',
  'Kafka',
  'BullMQ',
  'AWS SQS',
  'Jest',
  'Git',
  'Linux',
  'Docker',
  'Kubernetes',
  'GitLab CI',
  'GitHub Actions',
  'Prometheus',
  'Grafana',
  'ELK',
  'React',
  'Redux',
  'TanStack',
  'Ant Design',
  'polkadot.js',
  'Solidity',
  'IPFS',
];

const experiences: ExperienceCreateWithoutProfileInput[] = [
  {
    company: 'Inflect',
    position: 'Node.js Backend Developer',
    description: [
      'Контракт на проект',
      '',
      'Проект: система транскрибации и диаризации речи',
      'Самостоятельно спроектировал и разработал с нуля два сервиса проекта: транскрибации и лицензирования.',
      '',
      'Стек: Node.js, JavaScript, TypeScript, NestJS, PostgreSQL, Prisma, Redis, BullMQ, Jest, Python, GigaAM, pyannote, React, TanStack, REST, WebSocket, Swagger/OpenAPI, GitLab CI',
    ].join('\n'),
    achievements: {
      create: [
        {
          description:
            'Построил распределённую систему транскрибации и диаризации на базе GigaAM; она заменила платный внешний API и обрабатывает около 500 часов аудио в сутки',
        },
        {
          description:
            'Разделил API-слой и ASR-воркеры, что позволяет масштабировать обработку независимо от API',
        },
        {
          description:
            'Разработал API-оркестратор на NestJS: управление состоянием обработки, REST/WebSocket API, очереди задач в BullMQ, хранение данных в PostgreSQL',
        },
        {
          description:
            'Обеспечил отказоустойчивость на двух очередях BullMQ (задачи и результаты): при падении воркера задачу подхватывает другой, а при сбое оркестратора готовый результат остаётся в очереди и повторная транскрибация не требуется',
        },
        {
          description:
            'Написал Python-воркеры, выполняющие транскрибацию аудио и диаризацию по задачам из очереди',
        },
        {
          description:
            'Реализовал личный кабинет на React с отображением результатов обработки в реальном времени через WebSocket',
        },
        {
          description:
            'Разработал full-stack сервис лицензирования для парка из ~1000 устройств смежной команды (аудиостанции для мероприятий): проверка наличия действующей лицензии и управление доступом к обновлениям ПО',
        },
      ],
    },
    startYear: 2026,
    startMonth: 3,
    endYear: 2026,
    endMonth: 9,
  },
  {
    company: 'USETECH',
    position: 'Node.js Backend Developer',
    description: [
      'Проект: Цифра - система мониторинга газотранспортной сети',
      'Стек: Node.js, JavaScript, TypeScript, NestJS, PostgreSQL, Prisma, Jest, Kafka, gRPC, REST API, Swagger/OpenAPI, Prometheus, Grafana, Docker, MinIO, Kubernetes (k8s)',
      '',
      'Проект: Unique Network - NFT-парачейн экосистемы Polkadot',
      'Стек: Node.js, JavaScript, TypeScript, NestJS, PostgreSQL, Jest, polkadot.js, Swagger/OpenAPI, Prometheus, Grafana, GitHub Actions',
    ].join('\n'),
    achievements: {
      create: [
        {
          description:
            'Цифра: разработал backend-сервис на NestJS с нуля: v1 в паре со вторым backend-разработчиком, v2 спроектировал и разработал самостоятельно с существенной переработкой логики',
        },
        {
          description:
            'Цифра: построил слой агрегации между 6 внутренними сервисами и фронтендом: получение данных по gRPC и Kafka, преобразование в собственную модель, обогащение (координаты на схеме, описания, файлы, изображения), сохранение в PostgreSQL и выдача через REST API',
        },
        {
          description:
            'Цифра: разработал API иерархических мнемосхем с неограниченной вложенностью на основе материализованного пути; при десятках тысяч связанных объектов сервис выдержал нагрузочное тестирование на 5 000 RPS',
        },
        {
          description:
            'Цифра: спроектировал схему PostgreSQL, миграции и доступ к данным через Prisma ORM; организовал хранение файлов и изображений объектов в MinIO',
        },
        {
          description:
            'Unique Network: в составе команды разрабатывал TypeScript SDK поверх polkadot.js для внешних разработчиков и внутренних команд: реализовал работу с токенами и коллекциями',
        },
        {
          description:
            'Unique Network: интегрировал SDK в сервисы компании (NFT-маркетплейс, блок-эксплорер), работая в нескольких сервисных командах',
        },
        {
          description:
            'Unique Network: реализовал индексацию блоков и событий сети (пропускная способность сети - до 2 000 TPS): получение данных из ноды, обработка и сохранение в PostgreSQL с минимальным отставанием от сети',
        },
        {
          description:
            'Unique Network: автоматизировал генерацию документации SDK через GitHub Actions',
        },
        {
          description:
            'Unique Network: настроил сбор системных и бизнес-метрик (количество минтов, трансферов) в Prometheus и дашборды в Grafana',
        },
      ],
    },
    startYear: 2022,
    startMonth: 9,
    endYear: 2026,
    endMonth: 2,
  },
  {
    company: 'Genesix',
    position: 'Backend-разработчик',
    description: [
      'Проект: Orica - NFT-маркетплейс в сети BSC',
      'Команда: 2 backend- и 2 frontend-разработчика.',
      'Стек: Node.js, JavaScript, TypeScript, NestJS, PostgreSQL, Prisma, Jest, Elasticsearch, Redis, BullMQ, AWS SQS/S3, Swagger/OpenAPI, IPFS, Solidity, ELK, Docker',
      '',
      'Проект: Amadei - платформа для музыкантов',
      'Дистрибуция на стриминговые площадки, магазин треков, поиск партнёров и тендеры. Сегодня платформой пользуются более 17 000 артистов. Команда: 2 backend- и 2 frontend-разработчика.',
      'Стек: Node.js, JavaScript, TypeScript, NestJS, GraphQL, Swagger/OpenAPI, PostgreSQL, TypeORM, Jest, Redis, BullMQ, AWS S3, Docker, React, Redux, Ant Design',
      '',
      'Проект: Kitmoon - сервис обмена цифровых активов',
      'Стек: Node.js, JavaScript, TypeScript, Express, MongoDB, Jest, Swagger/OpenAPI, Docker',
    ].join('\n'),
    achievements: {
      create: [
        {
          description:
            'Orica: спроектировал архитектуру backend маркетплейса и реализовал большую часть функциональности в паре со вторым разработчиком',
        },
        {
          description:
            'Orica: разработал индексатор блокчейна BSC и микросервисы коллекций и ордеров на NestJS: события сети публикуются в AWS SQS, сервисы сохраняют их в PostgreSQL (Prisma) и отдают данные через REST API',
        },
        {
          description:
            'Orica: реализовал полнотекстовый поиск по токенам и коллекциям на Elasticsearch и хранение изображений NFT в IPFS с дублированием в AWS S3 для быстрой отдачи',
        },
        {
          description:
            'Orica: реализовал отложенные задачи на BullMQ и Redis, использовал стек ELK для логирования сервисов',
        },
        {
          description:
            'Orica: развернул смарт-контракты протокола Rarible v2 (Solidity) в сети BSC',
        },
        {
          description:
            'Amadei: реализовал большую часть backend-функциональности платформы',
        },
        {
          description:
            'Amadei: спроектировал и реализовал GraphQL API на NestJS: ролевая авторизация, решение проблемы N+1, подписки для обновлений в реальном времени',
        },
        {
          description:
            'Amadei: реализовал фоновые задачи на BullMQ и Redis: загрузка контента, доставка релизов на стриминговые площадки и другие длительные операции',
        },
        {
          description:
            'Amadei: организовал загрузку и хранение медиафайлов в AWS S3 и обработку PDF-документов для лицензирования треков, включая подписание договоров',
        },
        {
          description:
            'Amadei: спроектировал схему PostgreSQL на TypeORM и систему миграций',
        },
        {
          description:
            'Amadei: разработал административную панель на React, Redux и Ant Design для управления пользователями, треками и остальными сущностями платформы',
        },
        {
          description:
            'Kitmoon: разработал отказоустойчивые микросервисы на Node.js и Express для обмена BTC, ETH и BIP',
        },
        {
          description:
            'Kitmoon: реализовал интеграцию с блокчейн-сетями Bitcoin, Ethereum и Minter: мониторинг входящих транзакций и выполнение выплат',
        },
      ],
    },
    startYear: 2020,
    startMonth: 6,
    endYear: 2022,
    endMonth: 8,
  },
];

const projects: ProjectCreateWithoutProfileInput[] = [
  {
    name: 'Digital Card',
    url: 'https://github.com/alexsharypin/digitalcard',
  },
];

async function main() {
  const existing = await prisma.profile.findFirst({ select: { id: true } });

  if (existing) {
    console.log('Profile already exists, skipping seed');
    return;
  }

  await prisma.profile.create({
    data: {
      ...profile,
      skills: {
        create: skills.map((name) => ({
          skill: {
            connectOrCreate: { where: { name }, create: { name } },
          },
        })),
      },
      experiences: { create: experiences },
      projects: { create: projects },
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

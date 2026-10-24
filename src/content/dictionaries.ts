import type { Locale } from "./locales";

export type { Locale } from "./locales";
export { hasLocale, locales } from "./locales";

type Project = {
  name: string;
  text: string;
  features: string[];
  status?: string;
  tech?: string;
};

const en = {
  meta: {
    title: "Aikyol Sergekbekov — Full-stack developer (Python & JS)",
    description:
      "Senior full-stack developer from Bishkek. CRMs, document workflows, APIs, AI integrations and UI/UX design — with measured results: 90× faster reports, 400× fewer database requests.",
  },
  nav: {
    work: "Work",
    services: "Services",
    design: "Design",
    experience: "Experience",
    contact: "Contact",
  },
  langSwitch: { label: "Language" },
  hero: {
    badge: "Open for freelance projects",
    eyebrow: "Full-stack development · UI/UX design",
    titleStart: "I make web systems",
    titleAccent: "fly",
    titleEnd: ".",
    subtitle:
      "Senior full-stack developer with 5+ years of commercial experience. I build CRMs, document workflows, APIs and AI integrations — and turn slow systems into fast ones, with numbers to prove it.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See the case study",
    location: "Bishkek, Kyrgyzstan · UTC+6",
  },
  stats: [
    { value: "5+", label: "years of commercial experience" },
    { value: "90×", label: "faster PDF reports" },
    { value: "400×", label: "fewer database requests per page" },
    { value: "2 300+", label: "commits in the main project" },
  ],
  case: {
    kicker: "Featured case",
    title: "CRM & document management system for the Guarantee Fund",
    client: "Guarantee Fund · Kyrgyzstan",
    role: "Full-stack developer · #1 contributor",
    period: "Oct 2024 — now",
    summary:
      "The Guarantee Fund backs bank loans for small and medium businesses. Its staff do all their daily work in this system: issuing loan guarantees, approving documents, holding committee and board meetings, and signing papers with electronic signatures. About 28 sections built on Django and React.",
    contributionTitle: "My contribution",
    contribution: [
      { value: "41%", label: "of all changes in the project — more than any other developer" },
      { value: "1 200", label: "completed tasks and improvements" },
      { value: "~25k", label: "lines of automated tests that keep things from breaking" },
    ],
    resultsTitle: "Measured results",
    resultsHead: { area: "What", before: "Before", after: "After" },
    results: [
      {
        area: "Generating PDF reports",
        note: "A report is ready right away instead of after a minute of waiting",
        before: "54 s",
        after: "0.6 s",
      },
      {
        area: "Building documents with large tables",
        note: "This used to slow down every document in the system",
        before: "7 s",
        after: "3 ms",
      },
      {
        area: "Opening a list of documents",
        note: "Database requests per page: now always 5, however many rows are shown",
        before: "2 068",
        after: "5",
      },
      {
        area: "Opening a single document",
        note: "Database requests needed to show one document",
        before: "339",
        after: "9",
      },
      {
        area: "Uploading a file",
        note: "Heavy processing moved to the background, so people don't wait",
        before: "~1 s",
        after: "2 ms",
      },
      {
        area: "Restarting the system after an update",
        note: "Updates go out faster, with almost no downtime",
        before: "17 s",
        after: "1 s",
      },
    ],
    securityTitle: "Security review",
    securityText:
      "Reviewed and strengthened who can see what: documents and files open only for people with access, file links expire after a set time, and every uploaded file is checked. File uploads now go through one shared service instead of 26 copies of the same code.",
    modulesTitle: "Built from scratch",
    modules: [
      "Registry of internal policies and regulations, with versions",
      "Committee meetings: agendas, minutes and decisions",
      "Board meeting planning with reminders",
      "Document approval chains across departments",
      "Electronic signatures stamped on PDF documents",
      "Procurement contract tracking",
      "Access control: who can see and change what",
      "Employee personal account",
    ],
    stackTitle: "Stack",
  },
  services: {
    kicker: "Services",
    title: "What I can do for you",
    items: [
      {
        title: "Web apps & MVPs",
        text: "From idea to production: backend, frontend, database and deploy. One developer for the whole stack.",
        tags: ["Django", "FastAPI", "Go", "React", "Next.js", "PWA"],
      },
      {
        title: "AI integrations",
        text: "Chatbots, knowledge-base assistants and LLM-powered automation built into your product or processes.",
        tags: ["LLM APIs", "RAG", "Automation"],
      },
      {
        title: "Performance & code audit",
        text: "Slow pages, N+1 queries, heavy reports? I find the bottlenecks, fix them and show before/after numbers.",
        tags: ["PostgreSQL", "ClickHouse", "Celery", "Redis", "Profiling"],
      },
      {
        title: "Telegram bots & automation",
        text: "Bots with payments and admin panels, CRM integrations, parsers and scheduled jobs.",
        tags: ["Python", "Webhooks", "Celery"],
      },
    ],
  },
  projects: {
    kicker: "Earlier projects",
    title: "More things I've built",
    techLabel: "Under the hood:",
    items: [
      {
        name: "Makor",
        status: "In development",
        text: "A PWA for learning languages in the spirit of Duolingo: short lessons, a personal dictionary, practice exercises and an AI mentor that guides with questions instead of giving answers.",
        features: [
          "Works on phone and desktop, installs like an app",
          "Personal dictionary built from the texts you read",
          "Levels, progress and game mechanics",
          "AI mentor right inside the lessons",
        ],
      },
      {
        name: "SVUG & SED",
        text: "The Guarantee Fund's CRM: tracking loan guarantees plus electronic document workflow — approvals, committee meetings and e-signatures.",
        tech: "Django, DRF, Celery, Redis, PostgreSQL, Elasticsearch, Channels, React and TypeScript, Docker, GitLab CI.",
        features: [],
      },
      {
        name: "Nova Panel CRM",
        text: "A CRM for managing clients and requests: the whole team keeps customers, requests and tasks in one place.",
        tech: "FastAPI, PostgreSQL with SQLAlchemy, background processing through RabbitMQ queues, Docker, unit and integration tests with Pytest.",
        features: [],
      },
      {
        name: "DNS System",
        text: "A domain management service: DNS settings sync to Cloudflare automatically, with no manual work in the Cloudflare dashboard.",
        tech: "FastAPI and Pydantic, Cloudflare API integration, PostgreSQL with SQLAlchemy and Alembic, Pytest.",
        features: [],
      },
      {
        name: "Kozomol",
        text: "A GPS car-tracking app for banks and companies: every car on a live map, alerts when a car leaves its zone or speeds, remote engine lock and trip reports.",
        tech: "Go for receiving data from GPS trackers, Django and DRF, PostgreSQL, ClickHouse, Redis Streams, Celery, Centrifugo for the live map, a React and TypeScript PWA with MapLibre maps, Docker, Grafana.",
        features: [],
      },
      {
        name: "Makers Teamwork",
        text: "A platform for junior developers to find a team, build projects together and chat with teammates right on the site.",
        tech: "Async FastAPI backend, real-time chat on WebSocket, PostgreSQL with SQLAlchemy, Docker.",
        features: [],
      },
    ] as Project[],
  },
  experience: {
    kicker: "Experience",
    title: "Where I've worked",
    items: [
      {
        company: "Guarantee Fund (Kyrgyzstan)",
        role: "Full-stack developer",
        period: "Oct 2024 — now",
        points: [
          "Internal CRM and document system with ~28 sections",
          "Made reports, lists and file uploads tens of times faster",
          "Interfaces for new sections in React and TypeScript",
        ],
      },
      {
        company: "Nova Panels",
        role: "Python backend developer",
        period: "Aug 2023 — Sep 2024",
        points: [
          "Automatic sync of domain settings with Cloudflare",
          "Automated tests, so users run into fewer errors",
          "Code reviews and shared development rules in the team",
        ],
      },
      {
        company: "Makers",
        role: "Python backend developer",
        period: "May 2021 — Aug 2023",
        points: [
          "CRM that streamlined request processing",
          "MVP of an educational platform for students",
        ],
      },
    ],
  },
  design: {
    kicker: "Design",
    title: "Interface design you can click through",
    text: "I design web and mobile app interfaces and turn them into interactive prototypes that run right in the browser. And since I'm also a developer, every screen is realistic to build.",
    items: [
      {
        title: "UX/UI for web & mobile apps",
        text: "Screens, user flows and navigation, designed for both phone and desktop from the start.",
      },
      {
        title: "Interactive prototypes",
        text: "Not static pictures but a clickable prototype: the client opens a link and tries the product before development starts.",
      },
      {
        title: "Several directions to choose from",
        text: "2–3 visual concepts side by side, so the style is chosen with confidence instead of guessed.",
      },
      {
        title: "Design system & themes",
        text: "Colors, typography and components in one system, with several color themes.",
      },
      {
        title: "Onboarding & engagement",
        text: "First-run flows, progress, levels and game mechanics that keep users coming back.",
      },
      {
        title: "AI features in the interface",
        text: "AI assistants and hints built into the product so they feel natural, not bolted on.",
      },
    ],
    processTitle: "How I work",
    process: [
      { title: "Directions", text: "2–3 visual concepts to choose from" },
      { title: "Prototype", text: "A clickable version for phone and desktop" },
      { title: "Feedback rounds", text: "Every request tracked with a status: done, partly, in progress" },
      { title: "Build", text: "Handoff to developers, or I build it myself" },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Have a project? Let's talk.",
    text: "Tell me about your task and I'll suggest how to solve it. Working with clients from the CIS, Europe and the US.",
    labels: {
      email: "Email",
      telegram: "Telegram",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    timezone: "Bishkek · UTC+6 · flexible hours for EU & US clients",
  },
  footer: {
    built: "Built with Next.js, TypeScript & Tailwind",
  },
};

export type Dictionary = typeof en;

const ru: Dictionary = {
  meta: {
    title: "Айколь Сергекбеков — Full-stack разработчик (Python и JS)",
    description:
      "Сеньор full-stack разработчик из Бишкека. CRM, документооборот, API, AI-интеграции и UI/UX дизайн — с результатами в замерах: отчёты в 90 раз быстрее, в 400 раз меньше запросов к базе.",
  },
  nav: {
    work: "Кейсы",
    services: "Услуги",
    design: "Дизайн",
    experience: "Опыт",
    contact: "Контакты",
  },
  langSwitch: { label: "Язык" },
  hero: {
    badge: "Беру новые проекты",
    eyebrow: "Full-stack разработка · UI/UX дизайн",
    titleStart: "Делаю веб-системы, которые",
    titleAccent: "летают",
    titleEnd: ".",
    subtitle:
      "Сеньор full-stack разработчик, 5+ лет коммерческого опыта. Делаю CRM, системы документооборота, API и AI-интеграции, а медленные системы превращаю в быстрые — и подтверждаю это замерами.",
    ctaPrimary: "Обсудить проект",
    ctaSecondary: "Смотреть кейс",
    location: "Бишкек, Кыргызстан · UTC+6",
  },
  stats: [
    { value: "5+", label: "лет коммерческого опыта" },
    { value: "90×", label: "быстрее PDF-отчёты" },
    { value: "400×", label: "меньше запросов к базе на страницу" },
    { value: "2 300+", label: "коммитов в главном проекте" },
  ],
  case: {
    kicker: "Главный кейс",
    title: "CRM и система документооборота для Гарантийного фонда",
    client: "Гарантийный фонд · Кыргызстан",
    role: "Full-stack разработчик · №1 по вкладу",
    period: "Окт 2024 — сейчас",
    summary:
      "Гарантийный фонд выступает поручителем по банковским кредитам для малого и среднего бизнеса. Вся ежедневная работа сотрудников идёт в этой системе: выдача поручительств, согласование документов, заседания комитетов и руководства, подписание бумаг электронной подписью. Около 28 разделов на Django и React.",
    contributionTitle: "Мой вклад",
    contribution: [
      { value: "41%", label: "всех изменений в проекте — больше, чем у любого другого разработчика" },
      { value: "1 200", label: "завершённых задач и доработок" },
      { value: "~25 тыс.", label: "строк автотестов, чтобы ничего не ломалось" },
    ],
    resultsTitle: "Результаты в замерах",
    resultsHead: { area: "Что", before: "Было", after: "Стало" },
    results: [
      {
        area: "Формирование PDF-отчётов",
        note: "Отчёт готов сразу, а не через минуту ожидания",
        before: "54 с",
        after: "0,6 с",
      },
      {
        area: "Создание документов с большими таблицами",
        note: "Раньше это замедляло каждый документ в системе",
        before: "7 с",
        after: "3 мс",
      },
      {
        area: "Открытие списка документов",
        note: "Запросов к базе данных на страницу: теперь всегда 5, сколько бы строк ни было",
        before: "2 068",
        after: "5",
      },
      {
        area: "Открытие одного документа",
        note: "Запросов к базе, чтобы показать документ",
        before: "339",
        after: "9",
      },
      {
        area: "Загрузка файла",
        note: "Тяжёлая обработка ушла в фон, и пользователь не ждёт",
        before: "~1 с",
        after: "2 мс",
      },
      {
        area: "Перезапуск системы после обновления",
        note: "Обновления выходят быстрее и почти без простоя",
        before: "17 с",
        after: "1 с",
      },
    ],
    securityTitle: "Проверка безопасности",
    securityText:
      "Проверка и усиление защиты: документы и файлы открываются только тем, у кого есть доступ, ссылки на файлы действуют ограниченное время, каждый загружаемый файл проверяется. Загрузка файлов теперь работает через один общий сервис вместо 26 копий одного и того же кода.",
    modulesTitle: "Сделано с нуля",
    modules: [
      "Реестр внутренних регламентов и положений с версиями",
      "Заседания комитетов: повестки, протоколы и решения",
      "Планирование заседаний руководства с напоминаниями",
      "Согласование документов по цепочке сотрудников",
      "Электронная подпись на PDF-документах",
      "Учёт договоров закупок",
      "Управление доступом: кто что видит и может менять",
      "Личный кабинет сотрудника",
    ],
    stackTitle: "Стек",
  },
  services: {
    kicker: "Услуги",
    title: "Чем могу помочь",
    items: [
      {
        title: "Веб-приложения и MVP",
        text: "От идеи до продакшена: бэкенд, фронтенд, база данных и деплой. Один разработчик на весь стек.",
        tags: ["Django", "FastAPI", "Go", "React", "Next.js", "PWA"],
      },
      {
        title: "AI-интеграции",
        text: "Чат-боты, ассистенты по базе знаний и автоматизация на нейросетях — внутри вашего продукта или процессов.",
        tags: ["LLM API", "RAG", "Автоматизация"],
      },
      {
        title: "Ускорение и аудит кода",
        text: "Медленные страницы, N+1, тяжёлые отчёты? Нахожу узкие места, исправляю и показываю замеры «до» и «после».",
        tags: ["PostgreSQL", "ClickHouse", "Celery", "Redis", "Профилирование"],
      },
      {
        title: "Telegram-боты и автоматизация",
        text: "Боты с оплатой и админкой, интеграции с CRM, парсеры и задачи по расписанию.",
        tags: ["Python", "Webhooks", "Celery"],
      },
    ],
  },
  projects: {
    kicker: "Другие проекты",
    title: "Ещё проекты",
    techLabel: "Под капотом:",
    items: [
      {
        name: "Makor",
        status: "В разработке",
        text: "PWA для изучения языков в стиле Duolingo: короткие уроки, личный словарь, тренировки и ИИ-наставник, который наводит вопросами, а не даёт готовые ответы.",
        features: [
          "Работает на телефоне и компьютере, ставится как приложение",
          "Личный словарь из прочитанных текстов",
          "Уровни, прогресс и игровые механики",
          "ИИ-наставник прямо в уроках",
        ],
      },
      {
        name: "СВУГиСЭД",
        text: "CRM-система Гарантийного фонда: учёт поручительств по кредитам и электронный документооборот — согласования, заседания комитетов и электронная подпись.",
        tech: "Django, DRF, Celery, Redis, PostgreSQL, Elasticsearch, Channels, React и TypeScript, Docker, GitLab CI.",
        features: [],
      },
      {
        name: "Nova Panel CRM",
        text: "CRM-система для работы с клиентами и заявками: вся команда ведёт клиентов, заявки и задачи в одном месте.",
        tech: "FastAPI, PostgreSQL и SQLAlchemy, фоновая обработка через очереди RabbitMQ, Docker, unit- и интеграционные тесты на Pytest.",
        features: [],
      },
      {
        name: "DNS System",
        text: "Сервис управления доменами: настройки DNS автоматически синхронизируются с Cloudflare, без ручной работы в панели.",
        tech: "FastAPI и Pydantic, интеграция с Cloudflare API, PostgreSQL, SQLAlchemy и Alembic, тесты на Pytest.",
        features: [],
      },
      {
        name: "Kozomol",
        text: "Приложение для контроля автомобилей по GPS для банков и компаний: все авто на живой карте, тревога при выезде из зоны и превышении скорости, удалённая блокировка двигателя и отчёты о поездках.",
        tech: "Go для приёма данных с GPS-трекеров, Django и DRF, PostgreSQL, ClickHouse, Redis Streams, Celery, Centrifugo для живой карты, PWA на React и TypeScript с картами MapLibre, Docker, Grafana.",
        features: [],
      },
      {
        name: "Makers Teamwork",
        text: "Платформа для начинающих разработчиков: найти команду, вместе сделать проект и общаться с командой прямо на сайте.",
        tech: "Асинхронный бэкенд на FastAPI, чат в реальном времени на WebSocket, PostgreSQL и SQLAlchemy, Docker.",
        features: [],
      },
    ],
  },
  experience: {
    kicker: "Опыт",
    title: "Места работы",
    items: [
      {
        company: "Гарантийный фонд (Кыргызстан)",
        role: "Full-stack разработчик",
        period: "Окт 2024 — сейчас",
        points: [
          "Внутренняя CRM и система документооборота, ~28 разделов",
          "Отчёты, списки и загрузка файлов стали работать в десятки раз быстрее",
          "Интерфейсы новых разделов на React и TypeScript",
        ],
      },
      {
        company: "Nova Panels",
        role: "Python backend-разработчик",
        period: "Авг 2023 — Сен 2024",
        points: [
          "Автоматическая синхронизация настроек доменов с Cloudflare",
          "Автотесты, чтобы пользователи реже сталкивались с ошибками",
          "Проверка кода коллег и единые правила разработки в команде",
        ],
      },
      {
        company: "Makers",
        role: "Python backend-разработчик",
        period: "Май 2021 — Авг 2023",
        points: [
          "CRM, ускорившая обработку заявок",
          "MVP образовательной платформы для студентов",
        ],
      },
    ],
  },
  design: {
    kicker: "Дизайн",
    title: "Дизайн интерфейсов, который можно потрогать",
    text: "Проектирую интерфейсы веб- и мобильных приложений и собираю их в интерактивные прототипы, которые работают прямо в браузере. А так как я ещё и разработчик, каждый экран реально воплотить в коде.",
    items: [
      {
        title: "UX/UI веб- и мобильных приложений",
        text: "Экраны, пользовательские сценарии и навигация — сразу под телефон и десктоп.",
      },
      {
        title: "Интерактивные прототипы",
        text: "Не картинки, а кликабельный прототип: заказчик открывает ссылку и пробует продукт ещё до начала разработки.",
      },
      {
        title: "Несколько направлений на выбор",
        text: "2–3 визуальные концепции рядом, чтобы стиль выбирали осознанно, а не наугад.",
      },
      {
        title: "Дизайн-система и темы",
        text: "Цвета, шрифты и компоненты в единой системе, несколько цветовых тем.",
      },
      {
        title: "Онбординг и вовлечение",
        text: "Первый запуск, прогресс, уровни и игровые механики, чтобы пользователи возвращались.",
      },
      {
        title: "ИИ в интерфейсе",
        text: "ИИ-ассистенты и подсказки, встроенные в продукт так, чтобы выглядели естественно, а не «прикрученными сбоку».",
      },
    ],
    processTitle: "Как я работаю",
    process: [
      { title: "Направления", text: "2–3 концепции на выбор" },
      { title: "Прототип", text: "Кликабельная версия под телефон и десктоп" },
      { title: "Правки", text: "Каждая правка со статусом: сделано, частично, в работе" },
      { title: "Разработка", text: "Передаю разработчикам или беру разработку на себя" },
    ],
  },
  contact: {
    kicker: "Контакты",
    title: "Есть проект? Давайте обсудим.",
    text: "Расскажите о задаче — предложу, как её решить. Работаю с клиентами из СНГ, Европы и США.",
    labels: {
      email: "Email",
      telegram: "Telegram",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    timezone: "Бишкек · UTC+6 · гибкий график под Европу и США",
  },
  footer: {
    built: "Сделано на Next.js, TypeScript и Tailwind",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function Glossary() {
  const terms = [
    {
      term: 'B2B',
      description: 'Бизнес для бизнеса — платформа для работы компаний между собой (система для агентств недвижимости).',
    },
    {
      term: 'B2C',
      description: 'Бизнес для потребителя — публичный сайт для конечных клиентов, которые ищут недвижимость.',
    },
    {
      term: 'MVP',
      description: 'Минимально жизнеспособный продукт — версия с базовым функционалом, достаточным для запуска.',
    },
    {
      term: 'REST API',
      description: 'Способ взаимодействия систем через стандартные HTTP-методы (GET, POST, PUT, DELETE).',
    },
    {
      term: 'JWT',
      description: 'JSON Web Token — безопасный способ передачи данных для аутентификации пользователей.',
    },
    {
      term: 'RBAC',
      description: 'Контроль доступа на основе ролей — система прав по ролям (владелец, агент, администратор).',
    },
    {
      term: 'ORM',
      description: 'Технология автоматического перевода данных между базой данных и кодом, защищает от SQL-инъекций.',
    },
    {
      term: 'SQL-инъекция',
      description: 'Атака на базу данных через поля ввода. Защита: ORM и параметризованные запросы.',
    },
    {
      term: 'XSS',
      description: 'Межсайтовый скриптинг — атака через внедрение вредоносного кода. Защита: санитизация контента.',
    },
    {
      term: 'DDoS',
      description: 'Атака большим количеством запросов, перегружающая сервер. Защита: rate limiting.',
    },
    {
      term: 'SSR',
      description: 'Рендеринг на стороне сервера — генерация HTML на сервере. Улучшает SEO и скорость загрузки.',
    },
    {
      term: 'SEO',
      description: 'Оптимизация для поисковых систем — улучшение видимости сайта в результатах поиска.',
    },
    {
      term: 'OAuth 2.0',
      description: 'Протокол безопасной авторизации через сторонние сервисы (Google и др.).',
    },
    {
      term: 'PostgreSQL',
      description: 'Надежная система управления базами данных для хранения информации проекта.',
    },
    {
      term: 'FastAPI',
      description: 'Фреймворк для создания API на Python с высокой скоростью и автоматической документацией.',
    },
    {
      term: 'Next.js',
      description: 'Фреймворк для веб-приложений на React. Обеспечивает SSR и оптимизацию.',
    },
    {
      term: 'HTTPS / SSL/TLS',
      description: 'Безопасное соединение с шифрованием данных между браузером и сервером.',
    },
    {
      term: 'Soft Delete',
      description: 'Мягкое удаление — объект помечается как удаленный, но остается в базе для восстановления.',
    },
    {
      term: 'CRM',
      description: 'Система управления взаимоотношениями с клиентами — для управления базой и контактами.',
    },
    {
      term: 'CSV / Excel',
      description: 'Форматы файлов для табличных данных — для массового импорта объектов.',
    },
    {
      term: 'bcrypt / argon2',
      description: 'Алгоритмы хеширования паролей для безопасного хранения в базе данных.',
    },
    {
      term: 'Rate Limiting',
      description: 'Ограничение количества запросов к API для защиты от перегрузки и DDoS-атак.',
    },
  ];

  return (
    <section id="glossary" className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 scroll-mt-24">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
          Глоссарий терминов
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Краткое объяснение технических терминов и сокращений, используемых в техническом задании.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {terms.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-200/50 dark:border-gray-800"
          >
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
              {item.term}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

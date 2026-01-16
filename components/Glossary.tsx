'use client';

import { useLanguage, Language } from '@/lib/i18n/LanguageContext';

interface GlossaryTerm {
  term: string;
  description: string;
}

function getGlossaryTerms(language: Language): GlossaryTerm[] {
  const terms: Record<Language, GlossaryTerm[]> = {
    ru: [
      {
        term: 'B2B (Business-to-Business)',
        description: 'Бизнес для бизнеса — платформа для работы компаний между собой (система для агентств недвижимости).',
      },
      {
        term: 'B2C (Business-to-Consumer)',
        description: 'Бизнес для потребителя — публичный сайт для конечных клиентов, которые ищут недвижимость.',
      },
      {
        term: 'MVP (Minimum Viable Product)',
        description: 'Минимально жизнеспособный продукт — версия с базовым функционалом, достаточным для запуска.',
      },
      {
        term: 'MLS (Multiple Listing Service)',
        description: 'Централизованная база объектов недвижимости для агентств. Ядро платформы, хаб данных.',
      },
      {
        term: 'SaaS (Software as a Service)',
        description: 'Программное обеспечение как услуга — модель предоставления доступа к приложению через интернет.',
      },
      {
        term: 'API (Application Programming Interface)',
        description: 'Интерфейс программирования приложений — набор правил для взаимодействия между системами.',
      },
      {
        term: 'REST API',
        description: 'Способ взаимодействия систем через стандартные HTTP-методы (GET, POST, PUT, DELETE).',
      },
      {
        term: 'HTTP (HyperText Transfer Protocol)',
        description: 'Протокол передачи гипертекста — стандарт обмена данными в интернете.',
      },
      {
        term: 'JWT (JSON Web Token)',
        description: 'Безопасный способ передачи данных для аутентификации пользователей.',
      },
      {
        term: 'RBAC (Role-Based Access Control)',
        description: 'Контроль доступа на основе ролей — система прав по ролям (владелец, агент, администратор).',
      },
      {
        term: 'ORM (Object-Relational Mapping)',
        description: 'Технология автоматического перевода данных между базой данных и кодом, защищает от SQL-инъекций.',
      },
      {
        term: 'SQL-инъекция',
        description: 'Атака на базу данных через поля ввода. Защита: ORM и параметризованные запросы.',
      },
      {
        term: 'XSS (Cross-Site Scripting)',
        description: 'Межсайтовый скриптинг — атака через внедрение вредоносного кода. Защита: санитизация контента.',
      },
      {
        term: 'DDoS (Distributed Denial of Service)',
        description: 'Атака большим количеством запросов, перегружающая сервер. Защита: rate limiting.',
      },
      {
        term: 'SSR (Server-Side Rendering)',
        description: 'Рендеринг на стороне сервера — генерация HTML на сервере. Улучшает SEO и скорость загрузки.',
      },
      {
        term: 'SEO (Search Engine Optimization)',
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
        term: 'CRM (Customer Relationship Management)',
        description: 'Система управления взаимоотношениями с клиентами — для управления базой и контактами.',
      },
      {
        term: 'CSV (Comma-Separated Values)',
        description: 'Формат файлов для табличных данных — для массового импорта объектов.',
      },
      {
        term: 'XML (eXtensible Markup Language)',
        description: 'Расширяемый язык разметки — формат для обмена структурированными данными.',
      },
      {
        term: 'GDPR (General Data Protection Regulation)',
        description: 'Общий регламент по защите данных — европейское законодательство о защите персональных данных.',
      },
      {
        term: 'PWA (Progressive Web App)',
        description: 'Прогрессивное веб-приложение — веб-приложение с функциями нативных приложений.',
      },
      {
        term: 'UI (User Interface)',
        description: 'Пользовательский интерфейс — визуальная часть приложения, с которой взаимодействует пользователь.',
      },
      {
        term: 'UX (User Experience)',
        description: 'Пользовательский опыт — общее впечатление от взаимодействия с приложением.',
      },
      {
        term: 'CI/CD (Continuous Integration / Continuous Deployment)',
        description: 'Непрерывная интеграция и развертывание — автоматизация процессов разработки и деплоя.',
      },
      {
        term: 'bcrypt / argon2',
        description: 'Алгоритмы хеширования паролей для безопасного хранения в базе данных.',
      },
      {
        term: 'Rate Limiting',
        description: 'Ограничение количества запросов к API для защиты от перегрузки и DDoS-атак.',
      },
      {
        term: 'WebP',
        description: 'Современный формат изображений с высокой степенью сжатия и поддержкой прозрачности.',
      },
      {
        term: 'CORS (Cross-Origin Resource Sharing)',
        description: 'Механизм безопасности браузера, контролирующий доступ к ресурсам с других доменов. Настраивается для B2C сайта.',
      },
      {
        term: 'OpenID Connect',
        description: 'Протокол аутентификации поверх OAuth 2.0, позволяющий безопасно идентифицировать пользователей.',
      },
      {
        term: 'MFA (Multi-Factor Authentication)',
        description: 'Многофакторная аутентификация — дополнительная защита через код из SMS, приложения или биометрию.',
      },
      {
        term: 'Multi-tenant',
        description: 'Архитектура, где одно приложение обслуживает несколько клиентов (агентств) с изоляцией их данных.',
      },
      {
        term: 'RLS (Row-Level Security)',
        description: 'Безопасность на уровне строк — механизм PostgreSQL для автоматической фильтрации данных по правам доступа.',
      },
      {
        term: 'WAF (Web Application Firewall)',
        description: 'Веб-брандмауэр — защита приложения от вредоносного трафика на уровне приложения.',
      },
      {
        term: 'CSP (Content Security Policy)',
        description: 'Политика безопасности контента — защита от XSS через ограничение источников загружаемых ресурсов.',
      },
      {
        term: 'HSTS (HTTP Strict Transport Security)',
        description: 'Принудительное использование HTTPS — браузер автоматически использует защищенное соединение.',
      },
      {
        term: 'HMAC (Hash-based Message Authentication Code)',
        description: 'Код аутентификации сообщений — криптографическая подпись для проверки подлинности webhooks и данных.',
      },
      {
        term: 'Webhook',
        description: 'HTTP-колбэк — автоматическая отправка данных от одного сервиса другому при наступлении события.',
      },
      {
        term: 'LOPD (Ley Orgánica de Protección de Datos)',
        description: 'Органический закон о защите данных — испанское законодательство о защите персональных данных.',
      },
      {
        term: 'Penetration Testing',
        description: 'Тестирование на проникновение — проверка безопасности системы путем имитации атак злоумышленников.',
      },
      {
        term: 'TDE (Transparent Data Encryption)',
        description: 'Прозрачное шифрование данных — автоматическое шифрование базы данных на уровне диска.',
      },
      {
        term: 'S3 / Cloud Storage',
        description: 'Облачное хранилище файлов (Amazon S3, Google Cloud Storage) — безопасное хранение изображений и документов.',
      },
    ],
    en: [
      {
        term: 'B2B (Business-to-Business)',
        description: 'Business-to-Business — platform for companies to work with each other (system for real estate agencies).',
      },
      {
        term: 'B2C (Business-to-Consumer)',
        description: 'Business-to-Consumer — public website for end customers looking for real estate.',
      },
      {
        term: 'MVP (Minimum Viable Product)',
        description: 'Minimum Viable Product — version with basic functionality sufficient for launch.',
      },
      {
        term: 'MLS (Multiple Listing Service)',
        description: 'Centralized real estate database for agencies. Core of the platform, data hub.',
      },
      {
        term: 'SaaS (Software as a Service)',
        description: 'Software as a Service — model for providing access to an application via the internet.',
      },
      {
        term: 'API (Application Programming Interface)',
        description: 'Application Programming Interface — set of rules for interaction between systems.',
      },
      {
        term: 'REST API',
        description: 'Method of system interaction through standard HTTP methods (GET, POST, PUT, DELETE).',
      },
      {
        term: 'HTTP (HyperText Transfer Protocol)',
        description: 'HyperText Transfer Protocol — standard for data exchange on the internet.',
      },
      {
        term: 'JWT (JSON Web Token)',
        description: 'Secure method of data transmission for user authentication.',
      },
      {
        term: 'RBAC (Role-Based Access Control)',
        description: 'Role-Based Access Control — permission system by roles (owner, agent, administrator).',
      },
      {
        term: 'ORM (Object-Relational Mapping)',
        description: 'Technology for automatic data translation between database and code, protects against SQL injection.',
      },
      {
        term: 'SQL Injection',
        description: 'Database attack through input fields. Protection: ORM and parameterized queries.',
      },
      {
        term: 'XSS (Cross-Site Scripting)',
        description: 'Cross-Site Scripting — attack through injection of malicious code. Protection: content sanitization.',
      },
      {
        term: 'DDoS (Distributed Denial of Service)',
        description: 'Attack with a large number of requests, overloading the server. Protection: rate limiting.',
      },
      {
        term: 'SSR (Server-Side Rendering)',
        description: 'Server-Side Rendering — HTML generation on the server. Improves SEO and loading speed.',
      },
      {
        term: 'SEO (Search Engine Optimization)',
        description: 'Search Engine Optimization — improving website visibility in search results.',
      },
      {
        term: 'OAuth 2.0',
        description: 'Secure authorization protocol through third-party services (Google, etc.).',
      },
      {
        term: 'PostgreSQL',
        description: 'Reliable database management system for storing project information.',
      },
      {
        term: 'FastAPI',
        description: 'Framework for creating APIs in Python with high speed and automatic documentation.',
      },
      {
        term: 'Next.js',
        description: 'Framework for web applications on React. Provides SSR and optimization.',
      },
      {
        term: 'HTTPS / SSL/TLS',
        description: 'Secure connection with data encryption between browser and server.',
      },
      {
        term: 'Soft Delete',
        description: 'Soft delete — object is marked as deleted but remains in the database for recovery.',
      },
      {
        term: 'CRM (Customer Relationship Management)',
        description: 'Customer Relationship Management — system for managing customer base and contacts.',
      },
      {
        term: 'CSV (Comma-Separated Values)',
        description: 'File format for tabular data — for bulk import of properties.',
      },
      {
        term: 'XML (eXtensible Markup Language)',
        description: 'eXtensible Markup Language — format for exchanging structured data.',
      },
      {
        term: 'GDPR (General Data Protection Regulation)',
        description: 'General Data Protection Regulation — European legislation on personal data protection.',
      },
      {
        term: 'PWA (Progressive Web App)',
        description: 'Progressive Web App — web application with features of native applications.',
      },
      {
        term: 'UI (User Interface)',
        description: 'User Interface — visual part of the application that users interact with.',
      },
      {
        term: 'UX (User Experience)',
        description: 'User Experience — overall impression from interaction with the application.',
      },
      {
        term: 'CI/CD (Continuous Integration / Continuous Deployment)',
        description: 'Continuous Integration / Continuous Deployment — automation of development and deployment processes.',
      },
      {
        term: 'bcrypt / argon2',
        description: 'Password hashing algorithms for secure storage in the database.',
      },
      {
        term: 'Rate Limiting',
        description: 'Limiting the number of API requests to protect against overload and DDoS attacks.',
      },
      {
        term: 'WebP',
        description: 'Modern image format with high compression and transparency support.',
      },
      {
        term: 'CORS (Cross-Origin Resource Sharing)',
        description: 'Browser security mechanism controlling access to resources from other domains. Configured for B2C site.',
      },
      {
        term: 'OpenID Connect',
        description: 'Authentication protocol built on OAuth 2.0, allowing secure user identification.',
      },
      {
        term: 'MFA (Multi-Factor Authentication)',
        description: 'Multi-Factor Authentication — additional protection via SMS code, app, or biometrics.',
      },
      {
        term: 'Multi-tenant',
        description: 'Architecture where one application serves multiple clients (agencies) with isolated data.',
      },
      {
        term: 'RLS (Row-Level Security)',
        description: 'Row-Level Security — PostgreSQL mechanism for automatic data filtering by access rights.',
      },
      {
        term: 'WAF (Web Application Firewall)',
        description: 'Web Application Firewall — protection of application from malicious traffic at application level.',
      },
      {
        term: 'CSP (Content Security Policy)',
        description: 'Content Security Policy — protection against XSS by restricting sources of loaded resources.',
      },
      {
        term: 'HSTS (HTTP Strict Transport Security)',
        description: 'Forced HTTPS usage — browser automatically uses secure connection.',
      },
      {
        term: 'HMAC (Hash-based Message Authentication Code)',
        description: 'Hash-based Message Authentication Code — cryptographic signature for verifying webhook and data authenticity.',
      },
      {
        term: 'Webhook',
        description: 'HTTP callback — automatic data sending from one service to another when an event occurs.',
      },
      {
        term: 'LOPD (Ley Orgánica de Protección de Datos)',
        description: 'Organic Law on Data Protection — Spanish legislation on personal data protection.',
      },
      {
        term: 'Penetration Testing',
        description: 'Penetration testing — security testing of system by simulating attacker attacks.',
      },
      {
        term: 'TDE (Transparent Data Encryption)',
        description: 'Transparent Data Encryption — automatic database encryption at disk level.',
      },
      {
        term: 'S3 / Cloud Storage',
        description: 'Cloud file storage (Amazon S3, Google Cloud Storage) — secure storage of images and documents.',
      },
    ],
    es: [
      {
        term: 'B2B (Business-to-Business)',
        description: 'Business-to-Business — plataforma para que las empresas trabajen entre sí (sistema para agencias inmobiliarias).',
      },
      {
        term: 'B2C (Business-to-Consumer)',
        description: 'Business-to-Consumer — sitio web público para clientes finales que buscan propiedades.',
      },
      {
        term: 'MVP (Minimum Viable Product)',
        description: 'Producto Mínimo Viable — versión con funcionalidad básica suficiente para el lanzamiento.',
      },
      {
        term: 'MLS (Multiple Listing Service)',
        description: 'Base de datos inmobiliaria centralizada para agencias. Núcleo de la plataforma, centro de datos.',
      },
      {
        term: 'SaaS (Software as a Service)',
        description: 'Software como Servicio — modelo para proporcionar acceso a una aplicación a través de internet.',
      },
      {
        term: 'API (Application Programming Interface)',
        description: 'Interfaz de Programación de Aplicaciones — conjunto de reglas para la interacción entre sistemas.',
      },
      {
        term: 'REST API',
        description: 'Método de interacción entre sistemas a través de métodos HTTP estándar (GET, POST, PUT, DELETE).',
      },
      {
        term: 'HTTP (HyperText Transfer Protocol)',
        description: 'Protocolo de Transferencia de Hipertexto — estándar para el intercambio de datos en internet.',
      },
      {
        term: 'JWT (JSON Web Token)',
        description: 'Método seguro de transmisión de datos para autenticación de usuarios.',
      },
      {
        term: 'RBAC (Role-Based Access Control)',
        description: 'Control de Acceso Basado en Roles — sistema de permisos por roles (propietario, agente, administrador).',
      },
      {
        term: 'ORM (Object-Relational Mapping)',
        description: 'Tecnología para traducción automática de datos entre base de datos y código, protege contra inyección SQL.',
      },
      {
        term: 'Inyección SQL',
        description: 'Ataque a la base de datos a través de campos de entrada. Protección: ORM y consultas parametrizadas.',
      },
      {
        term: 'XSS (Cross-Site Scripting)',
        description: 'Cross-Site Scripting — ataque mediante inyección de código malicioso. Protección: sanitización de contenido.',
      },
      {
        term: 'DDoS (Distributed Denial of Service)',
        description: 'Ataque con gran cantidad de solicitudes, sobrecargando el servidor. Protección: limitación de velocidad.',
      },
      {
        term: 'SSR (Server-Side Rendering)',
        description: 'Renderizado del Lado del Servidor — generación de HTML en el servidor. Mejora SEO y velocidad de carga.',
      },
      {
        term: 'SEO (Search Engine Optimization)',
        description: 'Optimización para Motores de Búsqueda — mejora de la visibilidad del sitio web en los resultados de búsqueda.',
      },
      {
        term: 'OAuth 2.0',
        description: 'Protocolo de autorización seguro a través de servicios de terceros (Google, etc.).',
      },
      {
        term: 'PostgreSQL',
        description: 'Sistema de gestión de bases de datos confiable para almacenar información del proyecto.',
      },
      {
        term: 'FastAPI',
        description: 'Framework para crear APIs en Python con alta velocidad y documentación automática.',
      },
      {
        term: 'Next.js',
        description: 'Framework para aplicaciones web en React. Proporciona SSR y optimización.',
      },
      {
        term: 'HTTPS / SSL/TLS',
        description: 'Conexión segura con cifrado de datos entre navegador y servidor.',
      },
      {
        term: 'Soft Delete',
        description: 'Eliminación suave — el objeto se marca como eliminado pero permanece en la base de datos para recuperación.',
      },
      {
        term: 'CRM (Customer Relationship Management)',
        description: 'Gestión de Relaciones con Clientes — sistema para gestionar la base de clientes y contactos.',
      },
      {
        term: 'CSV (Comma-Separated Values)',
        description: 'Formato de archivo para datos tabulares — para importación masiva de propiedades.',
      },
      {
        term: 'XML (eXtensible Markup Language)',
        description: 'Lenguaje de Marcado Extensible — formato para intercambiar datos estructurados.',
      },
      {
        term: 'GDPR (General Data Protection Regulation)',
        description: 'Reglamento General de Protección de Datos — legislación europea sobre protección de datos personales.',
      },
      {
        term: 'PWA (Progressive Web App)',
        description: 'Aplicación Web Progresiva — aplicación web con características de aplicaciones nativas.',
      },
      {
        term: 'UI (User Interface)',
        description: 'Interfaz de Usuario — parte visual de la aplicación con la que interactúan los usuarios.',
      },
      {
        term: 'UX (User Experience)',
        description: 'Experiencia de Usuario — impresión general de la interacción con la aplicación.',
      },
      {
        term: 'CI/CD (Continuous Integration / Continuous Deployment)',
        description: 'Integración Continua / Despliegue Continuo — automatización de procesos de desarrollo y despliegue.',
      },
      {
        term: 'bcrypt / argon2',
        description: 'Algoritmos de hash de contraseñas para almacenamiento seguro en la base de datos.',
      },
      {
        term: 'Rate Limiting',
        description: 'Limitación del número de solicitudes API para protegerse contra sobrecarga y ataques DDoS.',
      },
      {
        term: 'WebP',
        description: 'Formato de imagen moderno con alta compresión y soporte de transparencia.',
      },
      {
        term: 'CORS (Cross-Origin Resource Sharing)',
        description: 'Mecanismo de seguridad del navegador que controla el acceso a recursos de otros dominios. Configurado para el sitio B2C.',
      },
      {
        term: 'OpenID Connect',
        description: 'Protocolo de autenticación construido sobre OAuth 2.0, permitiendo identificación segura de usuarios.',
      },
      {
        term: 'MFA (Multi-Factor Authentication)',
        description: 'Autenticación Multi-Factor — protección adicional mediante código SMS, aplicación o biometría.',
      },
      {
        term: 'Multi-tenant',
        description: 'Arquitectura donde una aplicación sirve a múltiples clientes (agencias) con datos aislados.',
      },
      {
        term: 'RLS (Row-Level Security)',
        description: 'Seguridad a Nivel de Fila — mecanismo de PostgreSQL para filtrado automático de datos por derechos de acceso.',
      },
      {
        term: 'WAF (Web Application Firewall)',
        description: 'Firewall de Aplicación Web — protección de la aplicación contra tráfico malicioso a nivel de aplicación.',
      },
      {
        term: 'CSP (Content Security Policy)',
        description: 'Política de Seguridad de Contenido — protección contra XSS mediante restricción de fuentes de recursos cargados.',
      },
      {
        term: 'HSTS (HTTP Strict Transport Security)',
        description: 'Uso forzado de HTTPS — el navegador usa automáticamente conexión segura.',
      },
      {
        term: 'HMAC (Hash-based Message Authentication Code)',
        description: 'Código de Autenticación de Mensajes Basado en Hash — firma criptográfica para verificar autenticidad de webhooks y datos.',
      },
      {
        term: 'Webhook',
        description: 'Callback HTTP — envío automático de datos de un servicio a otro cuando ocurre un evento.',
      },
      {
        term: 'LOPD (Ley Orgánica de Protección de Datos)',
        description: 'Ley Orgánica de Protección de Datos — legislación española sobre protección de datos personales.',
      },
      {
        term: 'Penetration Testing',
        description: 'Pruebas de penetración — prueba de seguridad del sistema simulando ataques de atacantes.',
      },
      {
        term: 'TDE (Transparent Data Encryption)',
        description: 'Cifrado Transparente de Datos — cifrado automático de base de datos a nivel de disco.',
      },
      {
        term: 'S3 / Cloud Storage',
        description: 'Almacenamiento de archivos en la nube (Amazon S3, Google Cloud Storage) — almacenamiento seguro de imágenes y documentos.',
      },
    ],
  };

  return terms[language] || terms.ru;
}

export function Glossary() {
  const { language, t } = useLanguage();
  const terms = getGlossaryTerms(language);

  return (
    <section id="glossary" className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 scroll-mt-24 lg:pr-8">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
          {t('glossary.title')}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t('glossary.description')}
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

'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type TeamRole = {
  key: 'design' | 'frontend' | 'backend' | 'qa' | 'devops';
  title: { ru: string; en: string; es: string };
  description: { ru: string; en: string; es: string };
};

type Person = {
  key: string;
  name: { ru: string; en: string; es: string };
  role: { ru: string; en: string; es: string };
  bio: { ru: string; en: string; es: string };
  initials: string;
  photoSrc?: string;
  linkedinUrl?: string;
};

const roles: TeamRole[] = [
  {
    key: 'design',
    title: { ru: 'Дизайнеры', en: 'Designers', es: 'Diseñadores' },
    description: {
      ru: 'UX/UI, дизайн-система, прототипирование, адаптивные макеты.',
      en: 'UX/UI, design system, prototyping, responsive layouts.',
      es: 'UX/UI, sistema de diseño, prototipado, diseños responsivos.',
    },
  },
  {
    key: 'frontend',
    title: { ru: 'Frontend разработчики', en: 'Frontend developers', es: 'Desarrolladores frontend' },
    description: {
      ru: 'Next.js/React, доступность, производительность, интеграции.',
      en: 'Next.js/React, accessibility, performance, integrations.',
      es: 'Next.js/React, accesibilidad, rendimiento, integraciones.',
    },
  },
  {
    key: 'backend',
    title: { ru: 'Backend разработчики', en: 'Backend developers', es: 'Desarrolladores backend' },
    description: {
      ru: 'API, БД, безопасность, интеграции CRM/импорты.',
      en: 'API, DB, security, CRM integrations/imports.',
      es: 'API, BD, seguridad, integraciones CRM/importaciones.',
    },
  },
  {
    key: 'qa',
    title: { ru: 'Тестировщики', en: 'QA engineers', es: 'Ingenieros QA' },
    description: {
      ru: 'План тестирования, регресс, автоматизация, тест-репорты.',
      en: 'Test plan, regression, automation, test reports.',
      es: 'Plan de pruebas, regresión, automatización, reportes.',
    },
  },
  {
    key: 'devops',
    title: { ru: 'DevOps/Инфраструктура', en: 'DevOps/Infrastructure', es: 'DevOps/Infraestructura' },
    description: {
      ru: 'CI/CD, мониторинг, окружения, безопасность и стабильность.',
      en: 'CI/CD, monitoring, environments, security & stability.',
      es: 'CI/CD, monitoreo, entornos, seguridad y estabilidad.',
    },
  },
];

const pmLead: Person = {
  key: 'pm-lead',
  name: {
    ru: 'Основатель / Руководитель проекта',
    en: 'Founder / Project lead',
    es: 'Fundador / Líder de proyecto',
  },
  role: {
    ru: 'PM & DevOps',
    en: 'PM & DevOps',
    es: 'PM & DevOps',
  },
  bio: {
    ru: 'Отвечаю за roadmap, планирование, коммуникацию и синхронизацию команды. Контролирую сроки, риски, стабильность инфраструктуры и качество результата.',
    en: 'I own the roadmap, planning, and team coordination. I manage timelines, risks, infrastructure stability, and delivery quality.',
    es: 'Me encargo del roadmap, la planificación y la coordinación del equipo. Gestiono plazos, riesgos, estabilidad de la infraestructura y calidad.',
  },
  initials: 'PM',
  // Put your real photo here: public/team/founder.jpg
  photoSrc: '/team/founder.jpeg',
};

function Avatar({
  alt,
  initials,
  size,
  photoSrc,
}: {
  alt: string;
  initials: string;
  size: 'sm' | 'md';
  photoSrc?: string;
}) {
  const boxClass =
    size === 'md'
      ? 'h-16 w-16 sm:h-20 sm:w-20 rounded-2xl'
      : 'h-12 w-12 rounded-xl';

  const textClass = size === 'md' ? 'text-lg sm:text-xl' : 'text-sm';
  const [imgSrc, setImgSrc] = useState<string>(photoSrc || '/team-placeholder.svg');
  const isPlaceholder = imgSrc === '/team-placeholder.svg';

  return (
    <div className={`relative ${boxClass} overflow-hidden`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImgSrc('/team-placeholder.svg')}
        unoptimized={imgSrc.endsWith('.svg')}
      />
      {isPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-semibold text-white ${textClass}`}>{initials}</span>
        </div>
      )}
    </div>
  );
}

export function DevelopersPage() {
  const { language, t } = useLanguage();

  const founder = useMemo(() => {
    const dob = new Date(1985, 7, 29); // 29.08.1985 (month is 0-based)
    const now = new Date();
    let years = now.getFullYear() - dob.getFullYear();
    const hasHadBirthdayThisYear =
      now.getMonth() > dob.getMonth() ||
      (now.getMonth() === dob.getMonth() && now.getDate() >= dob.getDate());
    if (!hasHadBirthdayThisYear) years -= 1;

    const ageLine =
      language === 'ru'
        ? `Возраст: ${years}`
        : language === 'es'
          ? `Edad: ${years}`
          : `Age: ${years}`;

    const cityLine =
      language === 'ru'
        ? 'Город: Санкт‑Петербург'
        : language === 'es'
          ? 'Ciudad: San Petersburgo'
          : 'City: Saint Petersburg';

    const expLine =
      language === 'ru'
        ? 'Опыт в разработке: 20+ лет'
        : language === 'es'
          ? 'Experiencia en desarrollo: 20+ años'
          : 'Development experience: 20+ years';

    const educationTitle =
      language === 'ru'
        ? 'Образование'
        : language === 'es'
          ? 'Educación'
          : 'Education';

    const edu1 =
      language === 'ru'
        ? 'Санкт‑Петербургский государственный университет экономики и финансов'
        : language === 'es'
          ? 'Universidad Estatal de Economía y Finanzas de San Petersburgo'
          : 'Saint Petersburg State University of Economics and Finance';

    const edu2 =
      language === 'ru'
        ? 'Санкт‑Петербургский техникум отраслевых технологий, финансов и права'
        : language === 'es'
          ? 'Instituto Técnico de Tecnologías Industriales, Finanzas y Derecho de San Petersburgo'
          : 'Saint Petersburg College of Industrial Technologies, Finance and Law';

    return {
      years,
      ageLine,
      cityLine,
      expLine,
      educationTitle,
      edu1,
      edu2,
    };
  }, [language]);

  const teamIntro = useMemo(() => {
    if (language === 'ru') {
      return {
        title: 'Разработчики проекта',
        subtitle: 'Команда, которая проектирует, разрабатывает и поддерживает продукт.',
        note: 'Покажите эту страницу клиенту: роли, подход и команда — в одном месте.',
        howWeWorkTitle: 'Как мы работаем',
        howWeWorkText:
          'Планируем спринтами, фиксируем требования, ведём прозрачную отчётность и регулярно показываем результат.',
      };
    }
    if (language === 'es') {
      return {
        title: 'Desarrolladores del proyecto',
        subtitle: 'El equipo que diseña, desarrolla y mantiene el producto.',
        note: 'Esta página es para el cliente: roles, enfoque y equipo en un solo lugar.',
        howWeWorkTitle: 'Cómo trabajamos',
        howWeWorkText:
          'Planificamos por sprints, fijamos requisitos, reportamos de forma transparente y mostramos avances de forma regular.',
      };
    }
    return {
      title: 'Project developers',
      subtitle: 'The team that designs, builds, and maintains the product.',
      note: 'This page is client-ready: roles, approach, and team in one place.',
      howWeWorkTitle: 'How we work',
      howWeWorkText:
        'We plan in sprints, lock requirements, report transparently, and demo progress regularly.',
    };
  }, [language]);

  const title =
    language === 'ru'
      ? teamIntro.title
      : language === 'es'
        ? teamIntro.title
        : teamIntro.title;

  const subtitle =
    language === 'ru'
      ? teamIntro.subtitle
      : language === 'es'
        ? teamIntro.subtitle
        : teamIntro.subtitle;

  const note = language === 'ru'
      ? teamIntro.note
      : language === 'es'
        ? teamIntro.note
        : teamIntro.note;

  return (
    <div className="min-h-screen bg-[#fefbf6] dark:bg-black transition-colors duration-300">
      <div className="lg:pl-96">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 md:px-8 lg:pt-28 lg:pr-8">
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-gray-100">
              {title}
            </h1>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{subtitle}</p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{note}</p>
          </header>

          {/* PM Lead (single, top) */}
          <section className="ui-glass-menu rounded-2xl p-5 sm:p-6 mb-6">
            <div className="flex items-start gap-4">
              <Avatar
                alt={pmLead.name[language]}
                initials={pmLead.initials}
                size="md"
                photoSrc={pmLead.photoSrc}
              />
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {pmLead.name[language]}
                </h2>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {pmLead.role[language]}
                </p>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {pmLead.bio[language]}
                </p>

                <div className="mt-4 grid gap-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>{founder.ageLine}</div>
                  <div>{founder.cityLine}</div>
                  <div>{founder.expLine}</div>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {founder.educationTitle}
                  </div>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>{founder.edu1}</li>
                    <li>{founder.edu2}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Roles (two columns on desktop) */}
          <section className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {roles.map((role) => (
              <div key={role.key} className="ui-glass-menu rounded-xl p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <Avatar
                    alt={role.title[language]}
                    initials={role.title.en.slice(0, 2).toUpperCase()}
                    size="sm"
                  />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {role.title[language]}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {role.description[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* How we work */}
          <section id="process" className="mt-6 ui-glass-menu rounded-2xl p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {teamIntro.howWeWorkTitle}
            </h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {teamIntro.howWeWorkText}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}


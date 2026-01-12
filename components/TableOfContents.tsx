'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const sections: TocItem[] = [
  { id: 'overview', title: '1. Общее описание проекта', level: 1 },
  { id: 'tech-stack', title: '2. Технический стек', level: 1 },
  { id: 'b2b-platform', title: '3. B2B-платформа для агентств недвижимости', level: 1 },
  { id: 'b2c-site', title: '4. B2C-сайт-каталог недвижимости', level: 1 },
  { id: 'security', title: '5. Безопасность', level: 1 },
  { id: 'development-stages', title: '6. Этапы разработки', level: 1 },
  { id: 'additional', title: '7. Дополнительные требования и примечания', level: 1 },
  { id: 'estimation', title: '8. Оценка разработки', level: 1 },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Мобильная кнопка */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg p-2 shadow-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
        aria-label="Показать навигацию"
        aria-expanded={isOpen}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Мобильное меню (overlay) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Навигация */}
      <nav
        className={`
          fixed top-0 left-0 right-0 bg-white/98 dark:bg-gray-900/98 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-40
          lg:sticky lg:top-4 lg:bg-transparent lg:dark:bg-transparent lg:border-0 lg:backdrop-blur-none
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'}
        `}
        aria-label="Навигация по разделам"
      >
        <div className="max-w-4xl mx-auto px-4 py-3 lg:px-0 lg:py-0">
          <div className="lg:bg-white/80 dark:lg:bg-gray-900/50 lg:rounded-xl lg:p-4 lg:border lg:border-gray-200/50 dark:lg:border-gray-800 lg:shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 hidden lg:block">
              Содержание
            </h3>
            <ul className="space-y-1 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                      hover:bg-gray-100 dark:hover:bg-gray-800
                      ${
                        activeId === section.id
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                          : 'text-gray-700 dark:text-gray-300'
                      }
                    `}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

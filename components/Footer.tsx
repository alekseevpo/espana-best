'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20 pt-8 pb-8">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:pr-8">
        <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
          {t('footer.copyright').replace('{year}', String(currentYear))}
        </p>
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
          <p className="mb-2">{t('footer.protection')}</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              <a
                href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                {t('footer.lawSpain')}
              </a>
            </li>
            <li>
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32001L0029"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                {t('footer.lawEU')}
              </a>
            </li>
          </ul>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 leading-relaxed">
          {t('footer.warning')}
        </p>
      </div>
    </footer>
  );
}

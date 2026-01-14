'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function CommentsSection() {
  const { t } = useLanguage();

  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
        {t('comments.title')}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {t('comments.description')}
      </p>
    </div>
  );
}

import CommentSection from '@/components/CommentSection';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Footer } from '@/components/Footer';
import { TableOfContents } from '@/components/TableOfContents';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ContactButtons } from '@/components/ContactButtons';
import { Glossary } from '@/components/Glossary';
import { TechnicalSpecification } from '@/components/TechnicalSpecification';
import { CommentsSection } from '@/components/CommentsSection';
import { getGiscusConfig } from '@/lib/env';

export default function Home() {
  const giscusConfig = getGiscusConfig();

  return (
    <div className="min-h-screen bg-[#fefbf6] dark:bg-black transition-colors duration-300">
      <TableOfContents />
      <ScrollToTop />
      {/* Переключатели темы и языка - фиксированы вверху справа */}
      <div className="fixed top-4 right-4 z-50 lg:right-6 flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:px-8 lg:px-12 lg:pt-24 lg:ml-64">
        <TechnicalSpecification />
      </main>

      {/* Глобальная секция комментариев в конце документа */}
      {giscusConfig && (
        <div id="comments" className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 scroll-mt-24 lg:ml-64">
          <CommentsSection />
          <ContactButtons />
          <div className="mt-6">
            <CommentSection 
              repo={giscusConfig.repo}
              repoId={giscusConfig.repoId}
              mapping="specific"
              discussionNumber={12}
              category="Announcements"
              categoryId={giscusConfig.categoryId}
            />
          </div>
        </div>
      )}

      {/* Глоссарий терминов */}
      <Glossary />

      {/* Footer с авторскими правами */}
      <Footer />
    </div>
  );
}

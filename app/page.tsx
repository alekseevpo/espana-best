import CommentSection from '@/components/CommentSection';
import { Footer } from '@/components/Footer';
import { ContactButtons } from '@/components/ContactButtons';
import { Glossary } from '@/components/Glossary';
import { TechnicalSpecification } from '@/components/TechnicalSpecification';
import { CommentsSection } from '@/components/CommentsSection';
import { getGiscusConfig } from '@/lib/env';

export default function Home() {
  const giscusConfig = getGiscusConfig();

  return (
    <div className="min-h-screen bg-[#fefbf6] dark:bg-black transition-colors duration-300">
      {/* Основной контент - центрирован с учетом навигации на десктопе */}
      <div className="lg:pl-96">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 md:px-8 lg:pt-28 lg:pr-8">
          <TechnicalSpecification />
        </main>

        {/* Глобальная секция комментариев в конце документа */}
        {giscusConfig && (
          <div id="comments" className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 scroll-mt-24 lg:pr-8">
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
    </div>
  );
}

'use client';

import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { DevelopersButton } from '@/components/DevelopersButton';
import { ScrollToTop } from '@/components/ScrollToTop';
import { TableOfContents } from '@/components/TableOfContents';
import { DevelopersToc } from '@/components/DevelopersToc';
import { BackButton } from '@/components/BackButton';

export function AppChrome() {
  const pathname = usePathname();
  const isDevelopers = pathname === '/developers';

  return (
    <>
      {/* Left top actions */}
      <div className="fixed top-4 left-4 z-50 lg:left-6 flex items-center gap-2">
        {isDevelopers && <BackButton />}
        {!isDevelopers && <DevelopersButton />}
      </div>

      {/* Right top actions */}
      <div className="fixed top-4 right-4 z-50 lg:right-6 flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* Navigation + helpers */}
      <ScrollToTop />
      {isDevelopers ? <DevelopersToc /> : <TableOfContents />}
    </>
  );
}


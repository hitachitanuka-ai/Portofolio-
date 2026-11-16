/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ExpertisePage } from './components/pages/ExpertisePage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { InsightsPage } from './components/pages/InsightsPage';
import { InsightDetailPage } from './components/pages/InsightDetailPage';
import { ContactPage } from './components/pages/ContactPage';
import { VisualArchivePage } from './components/pages/VisualArchivePage';
import { AppRoute } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('home');
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Parse path on initial load & popstate listener for real browser navigation
  useEffect(() => {
    const parseUrl = () => {
      const path = window.location.pathname.replace(/^\/+/g, '').replace(/\/+$/g, '');
      const segments = path.split('/');

      if (!segments[0] || segments[0] === '' || segments[0] === 'home') {
        setCurrentRoute('home');
        setActiveSlug('');
      } else if (segments[0] === 'about') {
        setCurrentRoute('about');
        setActiveSlug('');
      } else if (segments[0] === 'expertise') {
        setCurrentRoute('expertise');
        setActiveSlug('');
      } else if (segments[0] === 'projects') {
        if (segments[1]) {
          setCurrentRoute('project-detail');
          setActiveSlug(segments[1]);
        } else {
          setCurrentRoute('projects');
          setActiveSlug('');
        }
      } else if (segments[0] === 'experience') {
        setCurrentRoute('experience');
        setActiveSlug('');
      } else if (segments[0] === 'insights') {
        if (segments[1]) {
          setCurrentRoute('insight-detail');
          setActiveSlug(segments[1]);
        } else {
          setCurrentRoute('insights');
          setActiveSlug('');
        }
      } else if (segments[0] === 'contact') {
        setCurrentRoute('contact');
        setActiveSlug('');
      } else if (segments[0] === 'archive' || segments[0] === 'creativestyle') {
        setCurrentRoute('archive');
        setActiveSlug('');
      } else {
        setCurrentRoute('home');
        setActiveSlug('');
      }
    };

    parseUrl();

    const handlePopState = () => {
      parseUrl();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: AppRoute, slug?: string) => {
    setCurrentRoute(route);
    setActiveSlug(slug || '');

    // Formulate target URL
    let targetPath = '/';
    if (route === 'about') targetPath = '/about';
    else if (route === 'expertise') targetPath = '/expertise';
    else if (route === 'projects') targetPath = '/projects';
    else if (route === 'project-detail') targetPath = `/projects/${slug || 'matchify-platform'}`;
    else if (route === 'experience') targetPath = '/experience';
    else if (route === 'insights') targetPath = '/insights';
    else if (route === 'insight-detail') targetPath = `/insights/${slug || 'zeno-assessment-platform'}`;
    else if (route === 'contact') targetPath = '/contact';
    else if (route === 'archive') targetPath = '/archive';

    try {
      window.history.pushState({ route, slug }, '', targetPath);
    } catch {
      // Ignore in iframe sandboxes if restricted
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#23272F] font-sans selection:bg-[#B49A70] selection:text-white flex flex-col justify-between">
      {/* Global Fixed Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigate}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={navigate}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentRoute === 'expertise' && (
          <ExpertisePage
            onNavigate={navigate}
          />
        )}

        {currentRoute === 'projects' && (
          <ProjectsPage
            onNavigate={navigate}
          />
        )}

        {currentRoute === 'project-detail' && (
          <ProjectDetailPage
            projectId={activeSlug || 'matchify-platform'}
            onNavigate={navigate}
          />
        )}

        {currentRoute === 'experience' && (
          <ExperiencePage
            initialSubMenu={activeSlug}
            onNavigate={navigate}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentRoute === 'insights' && (
          <InsightsPage
            onNavigate={navigate}
          />
        )}

        {currentRoute === 'insight-detail' && (
          <InsightDetailPage
            postSlug={activeSlug || 'zeno-assessment-platform'}
            onNavigate={navigate}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentRoute === 'archive' && (
          <VisualArchivePage
            onNavigate={navigate}
          />
        )}
      </main>

      {/* Global Minimal Premium Footer */}
      <Footer
        onNavigate={navigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Printable Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onContactClick={() => {
          setIsResumeOpen(false);
          navigate('contact');
        }}
      />
    </div>
  );
}

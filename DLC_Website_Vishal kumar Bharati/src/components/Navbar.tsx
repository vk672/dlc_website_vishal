import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();

  const activeClass = "text-blue-600 font-semibold";

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-3 px-5 flex justify-between items-center sticky top-0 z-50">
      <div className="text-lg font-bold">{t('tagline')}</div>
      <div className="space-x-6 text-gray-700 dark:text-gray-300">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : '')}>
          {t('nav.home')}
        </NavLink>
        <NavLink to="/tutorials" className={({ isActive }) => (isActive ? activeClass : '')}>
          {t('nav.tutorials')}
        </NavLink>
        <NavLink to="/aichat" className={({ isActive }) => (isActive ? activeClass : '')}>
          {t('nav.aiChat')}
        </NavLink>
        <NavLink to="/feedback" className={({ isActive }) => (isActive ? activeClass : '')}>
          {t('nav.feedback')}
        </NavLink>
      </div>
    </nav>
  );
}

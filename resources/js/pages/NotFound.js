import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';

const NotFound = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>{t('page_not_found')}</h2>
      <p>{t('page_not_found_message')}</p>
      <Link to="/" className="btn-home">{t('back_to_home')}</Link>
    </div>
  );
};

export default NotFound;
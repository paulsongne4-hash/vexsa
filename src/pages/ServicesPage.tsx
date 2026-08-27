import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServicesSection } from '../components/ServicesSection';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  return <ServicesSection onContactClick={() => navigate('/contact')} />;
};

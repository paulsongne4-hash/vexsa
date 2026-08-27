import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { StatsSection } from '../components/StatsSection';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutSection />
      <StatsSection />
    </div>
  );
};

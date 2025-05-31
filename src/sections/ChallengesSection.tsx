import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import CodingChallenges from '@/components/CodingChallenges';

const CodingChallengesSection = () => {
  return (
    <SectionContainer
      id="coding-challenges"
      title="AI & ML Challenges"
      subtitle="Test your machine learning and AI skills with these interactive challenges"
    >
      <div className="h-full">
        <CodingChallenges />
      </div>
    </SectionContainer>
  );
};

export default CodingChallengesSection; 
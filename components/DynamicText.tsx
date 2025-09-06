import React from 'react';

interface DynamicTextProps {
  feedback: { id: number; text: string } | null;
}

const DynamicText: React.FC<DynamicTextProps> = ({ feedback }) => {
  if (!feedback) {
    return null;
  }

  return (
    <div key={feedback.id} className="dynamic-feedback-text">
      {feedback.text}
    </div>
  );
};

export default DynamicText;
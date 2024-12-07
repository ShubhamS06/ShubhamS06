import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  tooltipText: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div className="tooltip">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
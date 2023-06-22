import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="Collapse-title-text">
      <button>
        {title}
        <span
          className={`collapse-arrow ${isCollapsed ? "" : "rotated"}`}
          onClick={handleToggleCollapse}
        >
          <img src="images/arrow_back_ios-24px2.svg" alt="arrow up" />
        </span>
      </button>
      <div
        className={`collapse-content ${isCollapsed ? "closed" : "expanded"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;

import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const itemslist = items.map((item, index) => {
    return (
      <React.Fragment key={items.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className="content active">{item.content}</div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {itemslist}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;

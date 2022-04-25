import React from "react";
import Card from "./Card";
import data from "./assets/data.json";

const CardLayout = () => {
  return (
    <div className="px-32 py-20 bg-light-grayish-cyan">
      {data.map((item) => (
        <Card
          key={item.id}
          company={item.company}
          logo={item.logo}
          position={item.position}
          postedAt={item.postedAt}
          contract={item.contract}
          location={item.location}
          languages={item.languages}
          role={item.role}
          level={item.level}
          newJob={item.new}
          featured={item.featured}
        />
      ))}
    </div>
  );
};

export default CardLayout;

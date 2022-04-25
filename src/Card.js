import React from "react";
import CardTags from "./CardTags";

const Card = ({
  company,
  logo,
  position,
  postedAt,
  contract,
  location,
  languages,
  role,
  level,
  newJob,
  featured,
}) => {
  return (
    <div
      className="m-4 w-full bg-white shadow-md rounded-lg p-8 flex justify-between items-center "
      style={{ borderLeft: featured && "solid 4px hsl(180, 29%, 50%)" }}
    >
      <div className="flex">
        <img
          src={require(`./assets${logo.slice(1)}`)}
          className="rounded-full h-24 w-24"
          alt="display-img"
        />
        <div className="ml-4 place-content-center ">
          <div className="flex justify-start">
            <span className="text-primary-dark-cyan font-bold text-sm">
              {company}
            </span>
            {newJob && (
              <span className="text-white bg-primary-dark-cyan font-bold py-1 px-2 rounded-full text-xs ml-2 tracking-wide">
                NEW!
              </span>
            )}
            {featured && (
              <span className="text-white bg-black font-bold py-1 px-2 rounded-full text-xs ml-2 tracking-wide">
                FEATURED!
              </span>
            )}
          </div>
          <h1 className="font-bold text-lg mt-1">{position}</h1>
          <div className="text-sm text-dark-grayish-cyan w-full">
            <ul className="flex justify-between w-56">
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>
      <CardTags languages={languages} role={role} level={level} />
    </div>
  );
};

export default Card;

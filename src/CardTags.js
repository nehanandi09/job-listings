import React from "react";

const CardTags = ({ languages, role, level }) => {
  return (
    <div className="">
      <ul className="w-56 flex flex-end justify-end items-center gap-3">
        <li className="text-primary-dark-cyan font-bold bg-neutral-light-cyan p-2 rounded-md text-center">
          {role}
        </li>
        <li className="text-primary-dark-cyan font-bold bg-neutral-light-cyan p-2 rounded-md text-center">
          {level}
        </li>
        {languages.map((language) => (
          <li className="text-primary-dark-cyan font-bold bg-neutral-light-cyan p-2 rounded-md text-center">
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardTags;

//   <li className="text-primary-dark-cyan font-bold bg-neutral-light-cyan p-2 rounded-md text-center">
//     {language}
//   </li>
//

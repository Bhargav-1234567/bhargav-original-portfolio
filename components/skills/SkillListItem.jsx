import Image from "next/image";
import React from "react";

const SkillListItem = ({ isBasic, title, keyValue }) => {
  return (
    <div className="skill-item w-1/3  sm:w-1/3  md:w-1/4  lg:w-1/5  xl:w-1/6">
      <Image
        src={require(`../../public/skills/${keyValue}.svg`)}
        height={55}
        width={55}
        loading="lazy"
      />
      <div className="skill-item-title">{title}</div>
      {/* <span>{isBasic ? "(Basics)" : ""}</span> */}
    </div>
  );
};

export default SkillListItem;

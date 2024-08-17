import Image from "next/image";
import React from "react";

const ProjectCard = ({
  title,
  isActive,
  url,
  detailsPara,
  description,
  img,
}) => {
  return (
    <div className="project-card">
      <div className="project-title">{title}</div>
      <div className="project-desc"></div>
      <div className="project-details">
        <div className="project-image">
          <Image src={img} width={600} height={500} />
        </div>
        <div className="project-status-desc">
          <div className="activity-status">
            Status :{" "}
            <div className={`${isActive ? "active" : "pending"}-status`}></div>
            {isActive ? "Active" : "Not Available"}
          </div>
          {url ? (
            <div>
              Url :{" "}
              <a href={url || ""} target="_blank">
                {url}
              </a>
            </div>
          ) : (
            <></>
          )}
          <div>{description}</div>
        </div>
      </div>
      <div className="project-introduction">{detailsPara}</div>
    </div>
  );
};

export default ProjectCard;

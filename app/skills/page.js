import SkillListItem from "@/components/skills/SkillListItem";
import DottPattern from "@/components/ui/DottPattern";
import React from "react";

const Skills = () => {
  return (
    <div
      className={`custom-animation animate-custom main-container container mx-auto`}
    >
      <div className="skills-container">
        <DottPattern />
        <div className="outer-sec">
          <div className="skill-header ">Languages</div>
          <div className="skill-list flex flex-wrap overflow-hidden gap-3">
            <SkillListItem keyValue={"js"} title={"Java Script"} />
            <SkillListItem keyValue={"ts"} title={"Type Script"} />
            <SkillListItem keyValue={"html"} title={"Html"} />
            <SkillListItem keyValue={"css"} title={"CSS"} />
            <SkillListItem keyValue={"c"} title={"C language"} />
          </div>
        </div>
        <div className="outer-sec">
          <div className="skill-header ">Libraries and Frameworks</div>
          <div className="skill-list flex flex-wrap overflow-hidden gap-3">
            <SkillListItem keyValue={"react"} title={"React JS"} />
            <SkillListItem keyValue={"redux"} title={"Redux"} />
            <SkillListItem keyValue={"reactQuery"} title={"React Query"} />
            <SkillListItem keyValue={"reactRouter"} title={"React Router"} />
            <SkillListItem keyValue={"nextjs"} title={"Next JS"} />
            <SkillListItem keyValue={"nodejs"} title={"Node JS"} />
            <SkillListItem keyValue={"express"} title={"Express JS"} />
            <SkillListItem keyValue={"electronjs"} title={"Electron JS"} />
          </div>
        </div>
        <div className="outer-sec">
          <div className="skill-header ">
            Bundlers, Devtools and Code Formatters
          </div>
          <div className="skill-list flex flex-wrap overflow-hidden gap-3">
            <SkillListItem keyValue={"webpack"} title={"Webpack"} />
            <SkillListItem keyValue={"babel"} title={"Babel"} />
            <SkillListItem keyValue={"sass"} title={"Sass"} />
            <SkillListItem keyValue={"es6"} title={"Es6"} />
            <SkillListItem keyValue={"npm"} title={"npm"} />
            <SkillListItem keyValue={"yarn"} title={"yarn"} />
            <SkillListItem keyValue={"nodemon"} title={"Nodemon"} />
            <SkillListItem keyValue={"eslint"} title={"Es Lint"} />
            <SkillListItem keyValue={"prettier"} title={"Prettier"} />
          </div>
        </div>
        <div className="outer-sec">
          <div className="skill-header ">
            Version Control System and Workflow Managers
          </div>
          <div className="skill-list flex flex-wrap overflow-hidden gap-3">
            <SkillListItem keyValue={"git"} title={"Git"} />
            <SkillListItem keyValue={"github"} title={"GitHub"} isBasic />
            <SkillListItem keyValue={"bitbucket"} title={"Bitbucket"} isBasic />
            <SkillListItem keyValue={"jira"} title={"Jira"} isBasic />
          </div>
        </div>
        <div className="outer-sec">
          <div className="skill-header ">UI Libraries</div>
          <div className="skill-list flex flex-wrap overflow-hidden gap-3">
            <SkillListItem keyValue={"antd"} title={"Ant Design"} />
            <SkillListItem keyValue={"materialui"} title={"Material UI"} />
            <SkillListItem keyValue={"reactsuit"} title={"React suit"} />
            <SkillListItem keyValue={"bootstrap"} title={"Bootstrap"} />
            <SkillListItem keyValue={"chartjs"} title={"Chart JS"} />
            <SkillListItem keyValue={"tailwind"} title={"Tailwind"} />
            <SkillListItem keyValue={"primereact"} title={"Prime react"} />
            <SkillListItem keyValue={"kendo"} title={"Kendo React"} />
          </div>
        </div>
        <div className="outer-sec">
          <div className="skill-header ">Database</div>
          <div className="skill-list flex flex-wrap overflow-hidden gap-3">
            <SkillListItem keyValue={"mongodb"} title={"MongoDB"} isBasic />
            <SkillListItem keyValue={"mssql"} title={"MS Sql"} isBasic />
          </div>
        </div>
        <div className="outer-sec">
          <div className="skill-header ">Others</div>
          <div className="skill-list flex flex-wrap overflow-hidden gap-3">
            <SkillListItem keyValue={"vscode"} title={"VS Code"} />
            <SkillListItem keyValue={"figma"} title={"Figma"} />
            <SkillListItem keyValue={"photoshop"} title={"Photoshop"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

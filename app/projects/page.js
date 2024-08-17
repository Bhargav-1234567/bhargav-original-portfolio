"use client";
import ProjectCard from "@/components/projects/ProjectCard";
import GridPattern from "@/components/ui/GridPattern";
import React, { useState } from "react";
import ew from "../../public/everywatch.jpg";
import syncware from "../../public/syncware.jpg";
import asmark from "../../public/asmark.png";
import cryptosino from "../../public/crypto.png";
import dummy from "../../assets/dummy.png";

const Projects = () => {
  return (
    <div
      className={`custom-animation animate-custom main-container container mx-auto p-3`}
    >
      <GridPattern />
      <div className="projects-container pe-2">
        <ProjectCard
          title={"Every Watch"}
          isActive={true}
          detailsPara={
            "EveryWatch provides comprehensive data and notification services that include historical, current, and upcoming data from auctions, dealers, and marketplaces globally. This information combined with a variety of decision-making tools, such as advanced analytics and collection monitoring, allows our members to stay on top of changes in the market and enables them to make educated decisions when considering a new watch purchase or sale. Browse the largest watch database to see past transaction prices and find your next watch from thousands of  marketplaces, dealers and auction houses."
          }
          description={"EveryWatch - World's Largest Watch Market Database"}
          img={ew}
        />
        <div className="mt-3"></div>
        <ProjectCard
          title={"EveryWatch (CMS)"}
          isActive={false}
          detailsPara={
            <p>
              To manage and process data from over 250 web sources, a robust
              system is essential. This system must efficiently handle and
              filter large volumes of watch data to ensure accuracy and
              relevance. It should also support sorting and manipulation of data
              by auctions and sources.
              <br />
              <br />
              User management is crucial, requiring secure and seamless
              interactions, including registration, authentication, and profile
              management. Additionally, the system should facilitate the
              publication and updating of a magazine, managing content creation
              and dissemination effectively.
              <br />
              <br />
              Continuous moderation and updating of watch data are necessary to
              maintain accuracy. This involves using various fields and forms to
              keep data current and reliable. Effective management of auction
              data, including detailed records of items, bids, and outcomes, is
              also vital.
              <br />
              <br />
              By implementing these strategies, the system can handle the
              diverse requirements of managing and displaying watch data,
              supporting auctions, user interactions, and magazine publications.
            </p>
          }
          description={"For managing and displaying watch data"}
          img={ew}
        />

        <div className="mt-3"></div>
        <ProjectCard
          title={"Syncware Application and Admin Panel"}
          isActive={true}
          detailsPara={
            <p>
              This product integrates multi-channel businesses into a single
              app, streamlining the management of orders, shipments, products,
              inventory, and invoices. By connecting over 300 e-commerce
              applications, it offers a unified platform for handling diverse
              business operations efficiently.
              <br />
              <br />
              Additionally, the app facilitates seamless data management through
              respective APIs, allowing businesses to manage their data directly
              from the main portal of each connected application. This
              integration ensures that all e-commerce operations are
              centralized, improving efficiency and reducing complexity.
              <br />
              <br />
              And the admin panel as well to manage the data of the app with the
              users, filters and plugins(APIs of third party e-commerce
              applications)
            </p>
          }
          description={"Connect 300+ disparate apps into 1 operating system"}
          img={syncware}
        />

        <div className="mt-3"></div>
        <ProjectCard
          title={"Asmark engineers"}
          isActive={true}
          url={"https://www.asmarkengineers.com"}
          detailsPara={
            <p>
              A portfolio website for local engineering works aims to enhance
              social media marketing and advertise its products and services.
              This website will showcase the company's offerings, including
              detailed descriptions of products and services, along with contact
              and location information.
              <br />
              <br />
              Additionally, the website will serve as a comprehensive platform
              for potential clients to explore the company's capabilities and
              easily reach out for inquiries or collaborations. This will help
              in effectively promoting the business and attracting new customers
              through improved online visibility.
            </p>
          }
          description={"Casting and forging Services"}
          img={asmark}
        />

        <div className="mt-3"></div>
        <ProjectCard
          title={"Kryptosino"}
          isActive={true}
          url={"https://cryptosino.onrender.com"}
          detailsPara={
            <p>
              Developing an MVP for a cryptocurrency-based gambling website will
              primarily focus on the UI, encompassing a large number of pages
              within a tight 2-week timeframe. The emphasis will be on creating
              a responsive, interactive, and user-friendly interface.
              <br />
              <br />
              The UI design will prioritize accessibility and ease of use,
              ensuring that users can navigate seamlessly across various
              sections of the website. With a focus on responsiveness, the
              design will adapt smoothly to different screen sizes and devices,
              enhancing the user experience across desktop, tablet, and mobile
              platforms.
              <br />
              <br />
              Interactivity will be integrated into the UI to engage users and
              provide an immersive gambling experience. This may include
              interactive elements such as animated graphics, dynamic
              transitions, and intuitive controls to enhance user engagement and
              enjoyment.
              <br />
              <br />
              Overall, the goal of the UI design for this MVP is to deliver a
              visually appealing, responsive, and user-friendly interface that
              effectively communicates the website's offerings and encourages
              user interaction within the given timeframe.
            </p>
          }
          description={"Responsive, Interactive, User-Friendly UI"}
          img={cryptosino}
        />
      </div>
    </div>
  );
};

export default Projects;

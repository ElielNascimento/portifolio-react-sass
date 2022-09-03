import {
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiPostgresql,
  DiJava,
  DiHeroku,
  DiGithub,
  DiEclipse
} from "react-icons/di";

import {SiSpring} from "react-icons/si"

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {id: "java", name: "Java", icon: <DiJava/> },
  {id: "spring", name: "SpringBoot", icon: <SiSpring /> },
  {id: "html", name: "HTML5", icon: <DiHtml5 /> },
  {id: "css", name: "PostgreSql", icon: <DiPostgresql /> },
  {id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  {id: "react", name: "React", icon: <DiReact /> },
  {id: "heroku", name: "Heroku", icon: <DiHeroku /> },
  {id: "git", name: "GitHub", icon: <DiGithub /> },
  {id: "eclipse", name: "Eclipse", icon: <DiEclipse /> }
];

const TechnologiesContainer = () => {
  return (
  <section className='technologies-container'>
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
        {technologies.map((tech) => ( 
          <div className="technology-card" id={tech.id} key={tech.id}>
             <div className="tecnology-info">
            <h3>{tech.name}</h3>
            <span></span>
          </div>
          {tech.icon}
         
       </div>
        ))}
    </div>
  </section>
  );
}
export default TechnologiesContainer
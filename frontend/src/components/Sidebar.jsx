import SocialNetWorks from "./SocialNetWorks";

import Avatar from '../img/eu.jpeg'
 
import "../styles/components/sidebar.sass";

import InformationContainer from "./informationContainer";

const Sidebar = () => {
   return(
        <aside id="sidebar">
          <img src={Avatar} alt="Eliel Nascimento" />
          <p className="title"> Desenvolvedor</p>
           <InformationContainer/>
           <SocialNetWorks/>
          <a href='src/img/eliel-curriculum.pdf' className="btn" download>
            Donwload curriculo
           </a>
        </aside>
    );
 }

export default Sidebar
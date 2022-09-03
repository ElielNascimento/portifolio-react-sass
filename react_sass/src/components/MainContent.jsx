import AboutContainer from "./AboutContainer";
import ProjectoContainer from "./ProjectoContainer";
import TechnologiesContainer from "./TechnologiesContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
    return(
        <main id="main-content">
            <AboutContainer/>
            <TechnologiesContainer />
            <ProjectoContainer /> 
        </main>
    )
}

export default MainContent
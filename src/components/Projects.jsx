import '../style/Projects.scss';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

// Maximum projects count
// if(projects.length > 4) projects.length = 4;

export default function Projects() {
	return (
		<div className="Projects" id="Projects">
            <ul className="projects-list page-container">
                {projects.map((project, key) => 
                    <li key={key}>
                        <ProjectCard project={project} to={`/project/${project.id}`} />
                    </li>
                )}
            </ul>
		</div>
	);
}
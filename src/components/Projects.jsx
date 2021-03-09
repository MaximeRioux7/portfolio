import '../style/Projects.scss';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

import { Link } from 'react-router-dom';

// Maximum projects count
if(projects.length > 4) projects.length = 4;

export default function Projects() {
	return (
		<div className="Projects">
            <ul className="projects-list page-container">
                {projects.map((project, key) => 
                    <Link to={`/project/${project.id}`} key={key}>
                        <li>
                            <ProjectCard id={project.id} name={project.name} featured={project.featured} featuredText={project.featuredText} />
                        </li>
                    </Link>
                )}
            </ul>
		</div>
	);
}
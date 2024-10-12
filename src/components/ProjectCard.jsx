import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, demoUrl, codeUrl }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                    <div className="project-links">
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                        <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn">View Code</a>
                    </div>
            </div>
        </div>
    );
};

export default ProjectCard;

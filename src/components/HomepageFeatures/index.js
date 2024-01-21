import React from 'react';
import Link from "@docusaurus/Link";
import styles from './style.module.css';


const ProjectList = [
    {
        title: 'Xavier',
        description: <>服务器</>,
        repo: "Xavier-MC/docs",
        link: "/docs",
    },
];

function Projects({title, description, repo, link}) {
    return (
        <div className={styles.project}>
            <div className={styles.flex}>
                <Link className={styles.projectGitHub} to={`https://github.com/${repo}`}>
                    {title}
                </Link>
                <p>{description}</p>
            </div>
            <div>
                <Link className="button button--primary" to={link}>
                    Go
                </Link>
            </div>
        </div>
    );
}

export default function IndexProjects() {
    return (
        <section className={styles.projects}>
            <div className={styles.projectsContainer}>
                {ProjectList.map((project, index) => (
                    <Projects key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
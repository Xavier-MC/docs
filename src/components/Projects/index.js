import React from 'react';
import Link from "@docusaurus/Link";
import styles from './styles.module.css';


const ProjectList = [
    {
        title: 'ISeeYou',
        description: <>一个调用 Leaves/Leaf API的录像插件</>,
        repo: "Xavier-MC/ISeeYou",
        link: "/wiki/ISeeYou/intro",
    },
    {
        title: 'Xavier',
        description: <>已关服~~</>,
        repo: "Xavier-MC/",
        link: "/wiki/Xavier/intro",
    },
    {
        title: 'TaskScheduler',
        description: <>一个定时任务插件</>,
        repo: "CerealAxis/TaskScheduler",
        link: "/wiki/TaskScheduler/intro",
    },
];

function Projects({ title, description, repo, link }) {
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
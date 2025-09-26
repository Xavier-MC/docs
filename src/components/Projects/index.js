import React from 'react';
import Link from "@docusaurus/Link";
import styles from './styles.module.css';


const ProjectList = [
    {
        title: 'Xavier Optimized 整合包',
        description: <>极致优化，原版体验</>,
        repo: "Xavier-MC/",
        link: "/wiki/XavierOptimized/intro",
    },
    {
        title: 'Xavier 服务器',
        description: <>已关服，文档仅留作纪念</>,
        repo: "Xavier-MC/",
        link: "/wiki/Xavier/intro",
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
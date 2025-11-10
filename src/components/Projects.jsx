export default function Projects() {
  const projects = [
    {
    title: "Divided Government, Unified Economy",
    subtitle: "Independent Researcher | Statistical Modeling on Governance and Growth",
    period: "2023–2024",
    description: (
      <>
        I investigated how differences in government structure influence economic performance across U.S. states. 
        Using R, I conducted statistical analysis that included hypothesis testing, multivariate analysis of variance (ANOVA), 
        and principal component analysis to identify important patterns and relationships. I published a preprint of my research on{" "}
        <a
          href="https://hal.science/hal-04705339"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 underline"
        >
          HAL Open Science
        </a>
        .
      </>
    ),
    tags: ["R", "ANOVA", "PCA", "Data Analysis", "Econometrics", "Public Policy"],
  },
    {
      title: "Integrating Multimodal Data for Personalized Nutrition",
      subtitle: "Research Assistant | Indiana University School of Medicine",
      period: "2023–2025",
      description:
        "I helped develop statistical models to examine how dietary patterns relate to chronic disease outcomes. By integrating personalized dietary data, corresponding nutrient intake data, and multivariate analytical techniques, I identified patient specific risk factors and modeled their associations with chronic disease incidence. I presented my work at the International Conference on Intelligent Biology and Medicine (ICIBM 2024).",
      tags: ["Statistics", "Machine Learning", "Bioinformatics", "R", "Python"],
    },
  ];

  return (
    <section id="projects" className="mt-16">
      <h2 className="text-3xl font-bold mb-6 text-slate-50">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-slate-900/70 border border-slate-700 rounded-2xl p-5 
                       shadow-md hover:shadow-xl hover:border-indigo-400 
                       hover:-translate-y-1 transition-transform transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-50 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-indigo-300 mb-1">{project.subtitle}</p>
            <p className="text-xs text-slate-400 mb-3">{project.period}</p>
            <p className="text-sm text-slate-200 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200 
                             border border-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

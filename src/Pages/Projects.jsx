import ProjectItem from 'Components/ProjectItem';
import useProject from 'Hooks/useProject';

const Projects = () => {
  const { data: projects } = useProject();

  return (
    <>
      <section
        id="projects"
        className="xl:max-w-[1200px] lg:max-w-[1100px] max-w-[1040px] md:m-auto mr-6 md:px-20 p-4 py-16 dark:bg-gray-900"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
          Projects
        </h1>
        <p className="text-center py-8 text-stone-600 dark:text-stone-300">
          From full-scale web applications to specialized infrastructure
          scripts: here is a selection of my open-source contributions and
          standalone developments. These projects don't just showcase my tech
          stack—they prove the production-ready reliability and code-level
          expertise I bring to every client project.
        </p>
        <div className=" grid mdl:grid-cols-3 sm:grid-cols-2 gap-12">
          {projects?.map(project => {
            return (
              <ProjectItem
                key={project.id}
                title={project.full_name}
                rawTitle={project.raw_name}
                language={project.language}
                description={project.description}
                link={project.html_url}
                page={project.homepage}
                provider={project.provider}
                avatar_url={project.avatar_url}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;

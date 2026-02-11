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
          These are just a few examples of the projects I have worked on. Each
          project has given me valuable insights into different technologies and
          problem-solving approaches. I am continuously exploring new ideas and
          technologies to expand my skillset and deliver innovative solutions.
        </p>
        <div className=" grid mdl:grid-cols-3 sm:grid-cols-2 gap-12">
          {projects?.map(project => {
            return (
              <ProjectItem
                key={project.id}
                title={project.full_name}
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

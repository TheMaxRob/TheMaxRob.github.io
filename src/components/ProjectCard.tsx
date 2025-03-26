import Image from 'next/image';

const ProjectCard = () => {
   return (
        <main className="container mx-auto px-4 pb-10">
        <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <Image
            src="/project-thumbnail.jpg" 
            alt="Project Title"
            width={400}
            height={250}
            className="rounded"
            />
            <h2 className="mt-4 text-xl font-semibold">Project Title</h2>
            <p className="mt-2 text-sm">
            A brief description of your project. Explain what it is, the technologies used, and what makes it unique.
            </p>
            <div className="mt-4 flex space-x-4">
            <a
                href="#"
                className="text-blue-500 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Project
            </a>
            <a
                href="#"
                className="text-blue-500 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            </div>
        </div>
        {/* Repeat similar project cards for your other projects */}
        </section>
        </main>
   )
}

export default ProjectCard;
'use client';
import Link from 'next/link';

export default function MainSite() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="py-8 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold italic">Max Roberts</h1>
          <nav className="mt-2 space-x-4 text-sm flex items-center">
            <a
              href="mailto:maxroberts2003@gmail.com"
              className="flex items-center hover:underline"
            >
              {/* Gmail Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M20,8.382l-8,5.019l-8-5.019V6l8,5l8-5V8.382z" />
              </svg>
            </a>
            <span>•</span>
            <a
              href="https://github.com/themaxroberts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.833.092-.646.35-1.088.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.103-.254-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.503.337 1.909-1.294 2.748-1.025 2.748-1.025.547 1.378.203 2.396.1 2.65.64.699 1.029 1.593 1.029 2.683 0 3.842-2.338 4.687-4.566 4.937.359.309.679.92.679 1.855 0 1.337-.012 2.416-.012 2.744 0 .268.18.58.688.481A10.005 10.005 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/maxwroberts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.379-.028-3.156-1.921-3.156-1.921 0-2.216 1.5-2.216 3.047v5.609h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.84-1.562 3.036 0 3.6 1.997 3.6 4.594v5.601z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 pb-10">
        <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Project Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">Project Title</h2>
            <p className="mt-2 text-sm">
              A brief description of the project. Explain what it is, the technologies used, and what makes it unique.
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
          {/* Repeat similar project cards for additional projects */}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Max Roberts. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

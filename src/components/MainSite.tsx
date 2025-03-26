'use client';
import Link from 'next/link';
import Image from 'next/image';
import headshot from '../../public/headshot.jpg';

export default function MainSite() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="py-8 text-center">
        <div className="flex flex-col items-center">
          <Image
              src={headshot}
              alt="Max Roberts"
              width={130}
              height={130}
              className="rounded-full"
            />
          <h1 className="text-4xl font-bold italic">Max Roberts</h1>
          <p className="mt-2 text-sm">
            Atlanta, GA | 502-365-0302 |{' '}
            <Link
              href="mailto:maxroberts2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              maxroberts2003@gmail.com
            </Link>
          </p>
          <nav className="mt-4 flex space-x-6 items-center">
            {/* Gmail Icon */}
            <a
              href="mailto:maxroberts2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M20,8.382l-8,5.019l-8-5.019V6l8,5l8-5V8.382z" />
              </svg>
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/TheMaxRob"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/maxwroberts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.379-.028-3.156-1.921-3.156-1.921 0-2.216 1.5-2.216 3.047v5.609h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.84-1.562 3.036 0 3.6 1.997 3.6 4.594v5.601z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* Projects Section */}
      <section className="container mx-auto px-4 pb-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="space-y-8">
          {/* geoChat */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">geoChat</h3>
            <p className="mt-2 text-sm">
              A full-stack, anonymous live chat app built with React, NodeJS, MongoDB, Docker, AWS, and Socket.io. Achieved 99 unique users, 1000+ messages, and 600+ user sessions. Anonymous and accountless access using OSM geofencing data for 87 supported zones. Deployed with Docker on AWS using a CI/CD pipeline via GitHub Actions.
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="https://github.com/ShaneBerhoff/geoChat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Solo */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Solo</h3>
            <p className="mt-2 text-sm">
              A SwiftUI and MapKit app integrated with Firebase that implements a globe-based navigation system for travelers. Features real-time data syncing, authentication, messaging, and a caching system for user profiles, chats, meetup lookups, and images to reduce database reads.
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="https://github.com/TheMaxRob/Solo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Worldline */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Worldline</h3>
            <p className="mt-2 text-sm">
              A React Native app built with Expo and Mapbox to visualize photo library metadata. Features include EXIF statistics, location layers, and a custom “worldline” animation that travels between users’ photo library locations.
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="https://github.com/emory-worldline/worldline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Venmo-Receipt-Scanner */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Venmo-Receipt-Scanner</h3>
            <p className="mt-2 text-sm">
              A full-stack app using React Native, Python/Flask, Pytesseract, and OpenCV to parse receipt items. Integrates with the Venmo API to allow users to assign items to friends and automatically send Venmo requests.
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="https://github.com/TheMaxRob/Venmo-Receipt-Scanner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Raspberry Pi Friend Recognizer */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Raspberry Pi Friend Recognizer</h3>
            <p className="mt-2 text-sm">
              A facial recognition system built in C++ and OpenCV designed to differentiate friends in real time using a Raspberry Pi Camera Kit. (In Progress)
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="container mx-auto px-4 pb-10">
        <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
        <div className="space-y-8">
          {/* nCent Holdings */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">nCent Holdings</h3>
            <p className="text-sm italic">Full-Stack Engineer Intern | 10/2024 – Present</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>
                Utilizing React and Node.js to design and develop the nCent platform, including the database system and data models.
              </li>
              <li>
                Decreased time-to-market for the MVP through Agile workflows and project management with Jira.
              </li>
            </ul>
          </div>

          {/* Emory Computer Research Lab */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Emory Computer Research Lab</h3>
            <p className="text-sm italic">Undergraduate Researcher | 09/2024 – Present</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>
                Conducting research on using simultaneous RFID Tag Readers to create a programmable ecosystem of IoT stickers.
              </li>
              <li>
                Focusing on embedding internet capabilities into the environment through DIY projects.
              </li>
            </ul>
          </div>

          {/* Guardian Owl Digital */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Guardian Owl Digital</h3>
            <p className="text-sm italic">Development Intern | 06/2024 – 08/2024</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>
                Managed the company's blog with a focus on SEO optimization.
              </li>
              <li>
                Created a GPT model for advertising and website audits.
              </li>
              <li>
                Collaborated in biweekly team meetings to discuss marketing strategies.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 pb-10">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-2xl font-semibold">Emory University | Emory College</h3>
          <p className="text-sm italic">Atlanta, GA | Aug 2022 - May 2026</p>
          <p className="mt-2 text-sm">
            Bachelor of Science in Computer Science, Minor in Economics<br />
            Cumulative GPA: 3.65/4.0<br />
            Relevant Coursework: ML, Database Systems, Linear Algebra, Machine Level Programming, Data Structures & Algorithms
          </p>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="container mx-auto px-4 pb-10">
        <h2 className="text-3xl font-bold mb-6">Community Involvement</h2>
        <div className="space-y-8">
          {/* Emory Impact Investing Group */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Emory Impact Investing Group</h3>
            <p className="text-sm italic">Senior Analyst | 01/2023 – 09/2024</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Managed a $250,000 investment fund to provide microloans and pro-bono consulting to Atlanta entrepreneurs.</li>
            </ul>
          </div>

          {/* Emory Rock Climbing Team */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Emory Rock Climbing Team</h3>
            <p className="text-sm italic">Member | 08/2023 – 12/2024</p>
          </div>

          {/* Kappa Alpha Epsilon */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Kappa Alpha Epsilon</h3>
            <p className="text-sm italic">Philanthropy and Fundraising Chair | Oct 2024 – Present</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Max Roberts. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

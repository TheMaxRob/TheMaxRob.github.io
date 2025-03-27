import Link from 'next/link';

const WorldlinePage = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4">
            <h1 className="text-3xl font-bold mb-4">geoChat</h1>
            <p className="mb-4">
            A full-stack, anonymous live chat app built with React, NodeJS, MongoDB, Docker, AWS,
            and Socket.io. Achieved 99 unique users, 1000+ messages, and 600+ user sessions using OSM geofencing
            for 87 supported zones. Deployed with Docker on AWS using a CI/CD pipeline via GitHub Actions.
            </p>

            <p className="mb-4">
            {/* Include more extensive descriptions, pictures, diagrams, etc. */}
            This is where you can elaborate on your architectural decisions, your biggest challenges, or anything else you’d like.
            </p>

            <a
            href="https://github.com/ShaneBerhoff/geoChat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            >
            View on GitHub
            </a>

            {/* Link back to home or a Projects overview page */}
            <div className="mt-6">
            <Link href="/">
                <span className="text-blue-500 hover:underline">← Back to Home</span>
            </Link>
            </div>
        </div>
    );
}

export default WorldlinePage;
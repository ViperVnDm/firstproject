import ThemeToggle from '../components/ThemeToggle';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold">Welcome to FirstProject</h1>
      <p className="text-lg">This Next.js app runs on AWS App Runner.</p>
      <Link
        href="/posts/starting-with-the-basics"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        Read our first post
      </Link>
      <ThemeToggle />
    </main>
  );
}

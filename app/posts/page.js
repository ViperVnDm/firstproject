import Link from 'next/link';

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/posts/starting-with-the-basics" className="text-blue-600 dark:text-blue-400">
            Starting with the Basics: What Every AWS Architect Should Know First
          </Link>
        </li>
      </ul>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import "./../src/app/globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <header className="w-full max-w-4xl p-4 text-center">
        <h1 className="text-6xl font-bold text-blue-700">RoomieMatch</h1>
        <p className="mt-4 text-xl text-blue-600">Find your perfect roommate with ease.</p>
      </header>

      <section className="w-full max-w-4xl p-4 my-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-semibold text-center text-blue-700">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col items-center">
              <Image src="/create-profile.svg" alt="Create Profile" width={100} height={100} />
              <h3 className="mt-4 text-xl font-medium text-gray-700">Create Profile</h3>
              <p className="text-center text-gray-600">Sign up and tell us a little about yourself.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/find-match.svg" alt="Find Match" width={100} height={100} />
              <h3 className="mt-4 text-xl font-medium text-gray-700">Find Match</h3>
              <p className="text-center text-gray-600">Browse potential roommates and find your match.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8">
        <Link href="/signup" passHref>
          <button className="px-8 py-3 text-xl font-semibold text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
            Get Started
          </button>
        </Link>
      </section>

      <footer className="w-full p-4 text-center text-blue-600">
        RoomieMatch © 2024. All rights reserved.
      </footer>
    </main>
  );
}

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
        <div className="text-green-400 font-bold p-6">Quizmunity </div>
        <button className="block lg:hidden focus:outline-none">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
        <div className="hidden lg:flex space-x-4">
            <a href="/MyQuizzes" className="text-white">My Quizzes</a>
            <a href="/AllQuizzes" className="text-white">All Quizzes</a>
            <a href="/About" className="text-white">About</a>
            <a href="/Login" className="text-purple-400">Login</a>
        </div>
        </div>
    </nav>
  );
}

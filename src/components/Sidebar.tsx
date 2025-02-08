import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-50 p-4 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-8">BastionAI</h1>
      <nav className="flex-1">
        <Link
          href="/main"
          className="block py-2 px-4 mb-2 bg-green-200 rounded-lg text-green-800 hover:bg-green-300"
        >
          <span className="mr-2">💬</span> New Chat
        </Link>
        <Link
          href="/main/library"
          className="block py-2 px-4 mb-2 bg-green-200 rounded-lg text-green-800 hover:bg-green-300"
        >
          <span className="mr-2">📚</span> Library
        </Link>
      </nav>
      <div className="mt-auto bg-green-200 p-2 rounded-lg flex items-center">
        <UserButton />
        <span className="ml-2">Profile</span>
      </div>
    </div>
  );
};

export default Sidebar;

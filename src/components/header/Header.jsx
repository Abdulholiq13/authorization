import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  return (
    <nav className="sticky inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex h-14 items-center">
          <Link
            to={"/"}
            className="mr-auto flex items-center gap-2 text-lg font-semibold"
            // prefetch={false}
          >
            <PackageIcon className="w-5 h-5" />
            <span>Bloging</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4">
            <Link
              href="#"
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              // prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              // prefetch={false}
            >
              Blog
            </Link>
          </nav>
          <Button className="ml-5" onClick={() => dispatch({ type: "LOGOUT" })}>
            Log Out
          </Button>
        </div>
      </div>
    </nav>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export default memo(Header);

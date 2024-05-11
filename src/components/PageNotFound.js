import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-4xl font-bold mb-8">Page Not Found</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;

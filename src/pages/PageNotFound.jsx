import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <img
                    src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
                    alt="Page not found"
                    className="mx-auto mb-8"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    It looks like the page you're looking for doesn't exist.
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default PageNotFound;

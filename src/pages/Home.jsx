// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Quetzal
        </h1>
        <h2 className="text-4xl font-semibold text-gray-300 mb-6">
          Drone Image Detection
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Get real-time feedback from your drone's live video feed as our AI detects and classifies objects with high accuracy.
        </p>
        <div className="space-x-6">
          <Link
            to="/login"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg 
            hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-200 
            shadow-lg hover:shadow-blue-500/25"
          >
            Get Started
          </Link>
          <Link
            to="/register"
            className="inline-block bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-lg
            border border-blue-500/30 hover:border-blue-500 transform hover:scale-105 transition-all duration-200
            shadow-lg hover:shadow-blue-500/10"
          >
            Create Account
          </Link>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-time Object Detection</h3>
          <p className="text-gray-600">Get instant feedback from your drone's live video feed as our AI detects and classifies objects with high accuracy.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Manual Drone Control</h3>
          <p className="text-gray-600">Control your drone manually and get real-time feedback from the live video feed.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Live Video Analytics</h3>
          <p className="text-gray-600">Analyze the live video feed from your drone and get real-time insights and analytics.</p>
        </div>
      </div>

      {/* Status Section */}
      {/* <div className="text-center py-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <img src="path/to/image1.jpg" alt="Image 1" className="w-full h-auto rounded-lg" />
            <p className="text-gray-300 mt-2">Image 1</p>
          </div>
          <div>
            <img src="path/to/image2.jpg" alt="Image 2" className="w-full h-auto rounded-lg" />
            <p className="text-gray-300 mt-2">Image 2</p>
          </div>
          <div>
            <img src="path/to/image3.jpg" alt="Image 3" className="w-full h-auto rounded-lg" />
            <p className="text-gray-300 mt-2">Image 3</p>
          </div>
          <div>
            <img src="path/to/image4.jpg" alt="Image 4" className="w-full h-auto rounded-lg" />
            <p className="text-gray-300 mt-2">Image 4</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

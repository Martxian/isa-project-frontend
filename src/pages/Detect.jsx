// src/pages/Detect.jsx
import { useState } from "react";

export default function Detect() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setResultImage(null);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/detect`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setResultImage(imageUrl);
      } else {
        setError("Error: " + response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while processing the image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8 bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl">
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Upload Image for Detection
        </h1>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
        >
          <div className="space-y-4 rounded-md">
            <div>
              <label
                htmlFor="imageUpload"
                className="text-gray-300 text-sm font-medium"
              >
                Choose an image to upload:
              </label>
              <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
                required
                className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-600 
                text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 rounded-lg
              text-white text-sm font-medium
              bg-gradient-to-r from-blue-600 to-blue-800 
              hover:from-blue-700 hover:to-blue-900 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              transform transition-all duration-200 ${
                isLoading ? "opacity-70" : "hover:scale-[1.02]"
              }`}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="flex justify-center items-center mt-4">
            <div className="loader"></div>
            <h4 className="text-gray-300 ml-4">Performing dark magic...</h4>
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-900/30 border border-red-500/50 rounded-lg p-4">
            <p className="text-red-400 text-sm text-center">{error}</p>
          </div>
        )}

        {resultImage && (
          <div id="resultContainer" className="mt-4">
            <h2 className="text-gray-300 text-center">Result:</h2>
            <img
              id="resultImage"
              src={resultImage}
              alt="Processed Image"
              className="max-w-full mt-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}

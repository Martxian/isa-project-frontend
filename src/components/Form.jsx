// src/components/Form.jsx
export default function Form({
  title,
  children,
  onSubmit,
  isLoading,
  buttonText,
}) {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          {children}
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
              {isLoading ? <LoadingSpinner /> : buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

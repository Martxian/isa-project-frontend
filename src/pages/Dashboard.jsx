export default function Dashboard() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8 bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl">
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Welcome to the protected dashboard!
        </h1>
        <p className="text-center text-gray-300">You are authenticated.</p>
      </div>
    </div>
  );
}

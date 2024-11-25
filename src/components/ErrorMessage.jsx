// src/components/ErrorMessage.jsx
export default function ErrorMessage({ message }) {
  return (
    <div className="mt-4 bg-red-900/30 border border-red-500/50 rounded-lg p-4">
      <p className="text-red-400 text-sm text-center">{message}</p>
    </div>
  );
}

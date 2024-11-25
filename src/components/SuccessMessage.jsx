// src/components/SuccessMessage.jsx
export default function SuccessMessage({ message }) {
  return (
    <div className="mt-4 bg-green-900/30 border border-green-500/50 rounded-lg p-4">
      <p className="text-green-400 text-sm text-center">{message}</p>
    </div>
  );
}

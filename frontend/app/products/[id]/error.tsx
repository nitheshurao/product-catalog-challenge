"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: Props) {
  return (
    <div className="p-10">

      <h2 className="text-red-600 text-xl">
        {error.message}
      </h2>

      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Try Again
      </button>

    </div>
  );
}
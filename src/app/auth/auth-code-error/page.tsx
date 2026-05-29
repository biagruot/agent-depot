import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function AuthCodeError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="mb-4 rounded-full bg-red-500/10 p-4">
        <AlertTriangle className="h-8 w-8 text-red-500" />
      </div>
      <h1 className="mb-2 text-2xl font-bold text-white">Authentication Error</h1>
      <p className="mb-8 max-w-md text-gray-400">
        There was an error signing you in. The link may have expired or is invalid. Please try
        signing in again.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-gray-200"
      >
        Return Home
      </Link>
    </div>
  );
}

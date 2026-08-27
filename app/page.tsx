import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to TalentFit AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          AI-powered talent management and recruitment platform
        </p>
        
        <div className="flex gap-4 justify-center mt-8">
          <Link 
            href="/dashboard" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
          <Link 
            href="/auth/login" 
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Login
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl">
          <div className="text-center">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="font-semibold text-gray-900">AI-Powered</h3>
            <p className="text-sm text-gray-600">Smart candidate matching</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-900">Analytics</h3>
            <p className="text-sm text-gray-600">Real-time insights</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-gray-900">Fast</h3>
            <p className="text-sm text-gray-600">Quick processing</p>
          </div>
        </div>
      </div>
    </main>
  );
}

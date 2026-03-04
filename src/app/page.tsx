"use client";

import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!appId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
        <h1 className="text-4xl font-bold">Sats Daily</h1>
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return <HomeContent />;
}

function HomeContent() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-4xl font-bold">Sats Daily</h1>

      {authenticated ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">Welcome!</p>
          {user?.email && (
            <p className="text-sm text-gray-600">Email: {user.email.address}</p>
          )}
          {user?.google && (
            <p className="text-sm text-gray-600">Google: {user.google.email}</p>
          )}
          {user?.wallet && (
            <p className="text-sm text-gray-600 font-mono">
              Wallet: {user.wallet.address.slice(0, 6)}...
              {user.wallet.address.slice(-4)}
            </p>
          )}
          <button
            onClick={logout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={login}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg"
        >
          Login with Privy
        </button>
      )}
    </div>
  );
}

import { signIn, signOut, useSession } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span>Welcome, {session.user?.name}</span>
        <button onClick={() => signOut()} className="p-2 bg-red-500 text-white rounded">Sign Out</button>
      </div>
    )
  }

  return (
    <button onClick={() => signIn('google')} className="p-2 bg-blue-500 text-white rounded">
      Sign in with Google
    </button>
  )
}
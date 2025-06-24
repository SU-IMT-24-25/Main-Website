// app/dashboard/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route"; // Adjust the path to your auth options

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect or show an unauthorized message
    return <p>You must be signed in to view this page.</p>;
  }

  // Fetch data for the signed-in user
  // const userData = await fetchUserData(session.user.id);

  return (
    <div>
      <h1>Welcome to your Dashboard, {session.user?.name}</h1>
      {/* Display user-specific data */}
    </div>
  );
}
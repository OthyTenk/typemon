import { redirect } from "next/navigation"
import getCurrentUser from "../actions/getCurrentUser"
import Users from "../components/Users"
import getUsers from "../actions/getUsers"
import { Metadata } from "next"

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
  },
}

const UsersPage = async () => {
  let currentUser = await getCurrentUser()

  if (!currentUser || !currentUser.isAdmin) {
    redirect("/auth/login")
  }

  let users = await getUsers()

  return (
    <div>
      <Users currentUser={currentUser} users={users} />
    </div>
  )
}

export default UsersPage

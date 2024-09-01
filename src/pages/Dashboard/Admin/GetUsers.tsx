import { toast } from "sonner";
import Container from "../../../components/shared/Container";
import Loader from "../../../components/shared/Loader";
import {
  useAllUserQuery,
  useUpdateUserRoleMutation,
} from "../../../redux/features/admin/userManagement.api";
import UserTable from "./UserTable";

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "user";
}

const GetUsers: React.FC = () => {
  const { data, isLoading, refetch } = useAllUserQuery({});
  const allUsers: User[] = data?.data || [];
  const [updateUserRole] = useUpdateUserRoleMutation();

  if (isLoading) {
    return <Loader />;
  }

  const handleRoleChange = async (userId: string, newRole: "admin" | "user") => {
    try {
      console.log(`Updating role for userId: ${userId} to ${newRole}`);
      const toastId = toast.loading("Updating user role...");
      await updateUserRole({ userId, role: newRole }).unwrap();

      refetch();
      toast.success("User role updated successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      console.error("Failed to update user role:", error);
      toast.error("Failed to update user role. Please try again.");
    }
  };

  const adminUsers = allUsers.filter((user) => user.role === "admin");
  const nonAdminUsers = allUsers.filter((user) => user.role !== "admin");

  return (
    <Container>
      <UserTable
        users={adminUsers}
        title="Admin Users"
        onRoleChange={handleRoleChange}
      />
      <UserTable
        users={nonAdminUsers}
        title="Non-Admin Users"
        onRoleChange={handleRoleChange}
      />
    </Container>
  );
};

export default GetUsers;

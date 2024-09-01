import React from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "user";
}

interface UserTableProps {
  users: User[];
  title: string;
  onRoleChange: (userId: string, newRole: "admin" | "user") => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  title,
  onRoleChange,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold my-4">{title}</h3>
      <table className="w-full border-collapse mb-8">
        <thead className="bg-[#003580] text-white">
          <tr>
            <th className="border py-2 px-4">Name</th>
            <th className="border py-2 px-4">Email</th>
            <th className="border py-2 px-4">Phone</th>
            <th className="border py-2 px-4">Role</th>
            <th className="border py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-[#d4e2f4]">
              <td className="border py-2 px-4">{user.name}</td>
              <td className="border py-2 px-4">{user.email}</td>
              <td className="border py-2 px-4">{user.phone}</td>
              <td className="border py-2 px-4">{user.role}</td>
              <td className="border py-2 px-4">
                <button
                  onClick={() =>
                    onRoleChange(
                      user._id,
                      user.role === "admin" ? "user" : "admin"
                    )
                  }
                  className="bg-[#003580] text-white py-1 px-3 rounded hover:bg-[#001e40]"
                >
                  {user.role === "admin" ? "Make User" : "Make Admin"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

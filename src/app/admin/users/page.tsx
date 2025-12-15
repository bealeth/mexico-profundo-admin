type User = {
  id: number;
  name: string;
  email: string;
  status: "active" | "suspended";
};

const users: User[] = [
  { id: 1, name: "Juan Pérez", email: "juan@mail.com", status: "active" },
  { id: 2, name: "María López", email: "maria@mail.com", status: "suspended" },
];

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Gestión de Usuarios</h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Correo</th>
            <th className="p-2 border">Estado</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

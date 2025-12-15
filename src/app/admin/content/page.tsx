type Content = {
  id: number;
  title: string;
  author: string;
  status: "pending" | "approved" | "rejected";
};

const contents: Content[] = [
  { id: 1, title: "Artesanías de Oaxaca", author: "Carlos", status: "pending" },
  { id: 2, title: "Textiles Mayas", author: "Ana", status: "approved" },
];

export default function ContentPage() {
  return (
    <div>
      <h1 className="text-lg font-bold mb-4">
        Moderación de Contenido
      </h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Título</th>
            <th className="p-2 border">Autor</th>
            <th className="p-2 border">Estado</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">{item.title}</td>
              <td className="p-2 border">{item.author}</td>
              <td className="p-2 border">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

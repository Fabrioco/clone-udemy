export default function NotFound() {
  return (
    <div className="container flex flex-col h-[500px] w-[500px] justify-center items-center bg-white rounded-3xl border border-gray-300">
      <h1 className="text-5xl font-primary">ERROR 404</h1>
      <h2 className="text-4xl font-secondary">NOT FOUND</h2>
      <a
        href="/login"
        className="bg-gray-200 px-4 py-2 mt-4 rounded-md active:bg-gray-300"
      >
        <p className="text-2xl font-tertiary">Voltar para dashboard</p>
      </a>
    </div>
  );
}

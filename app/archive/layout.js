/** @format */

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div className="max-w-7xl mx-auto flex items-start flex-col gap-4">
      <h1 className="text-white font-medium text-xl p-4">News Archive</h1>

      <section className="mb-8 pb-8 border-b-2 border-[#b0b0a6]">
        {archive}
      </section>
      <section className="mb-8 pb-8 border-b-2 border-[#b0b0a6]">
        {latest}
      </section>
    </div>
  );
}

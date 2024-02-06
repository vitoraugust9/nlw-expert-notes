export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 outline-none space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">
        Há 2 dias
      </span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis magnam similique commodi vitae mollitia delectus voluptas eveniet, tempora, asperiores quam sequi praesentium tenetur cupiditate atque dicta odio enim distinctio.
        Rem ratione cupiditate dignissimos nulla placeat ipsa unde nostrum velit ducimus quidem. Porro repellendus tenetur quod, voluptatem vitae nemo est iure repudiandae! Cumque, tenetur. Minus, minima! Harum quo doloribus expedita?
        Praesentium delectus rerum minima perferendis officiis, magni unde laboriosam quo eveniet aperiam suscipit doloribus consequuntur ab veniam velit ducimus eaque non expedita consequatur? Hic, maxime iste sint voluptates ipsum aspernatur!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}
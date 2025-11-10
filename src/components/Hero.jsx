export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center 
                 bg-gradient-to-br from-slate-900 via-slate-950 to-black
                 text-slate-100 pt-12 pb-16 px-6 rounded-3xl border border-slate-800 shadow-xl mt-4"
    >
      <h1
        className="text-5xl md:text-6xl font-extrabold mb-4 
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
                   bg-clip-text text-transparent pb-1 leading-tight"
      >
        Kellen Gong
      </h1>

      <p className="text-xl md:text-2xl mb-4 max-w-2xl text-slate-200">
        Turning data into insight and technology into impact
      </p>

      <p
        className="text-lg md:text-xl font-medium 
                   text-slate-300"
      >
        Statistics &amp; Data Science | Computer Science | Blockchain Research
      </p>
    </section>
  );
}

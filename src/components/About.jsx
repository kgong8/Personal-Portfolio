function About() {
  return (
    <section
  id="about"
  className="mt-16 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-md"
>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-lg leading-relaxed mb-4">
        Hi! I'm Kellen Gong, a first-year student at Yale University pursuing degrees in
        Statistics & Data Science and Computer Science. I am interested in the intersection between Statistics and Computer Science 
        in helping to solve real-world problems. My experience spans 
        statistical modeling, programming, blockchain analysis, and financial technology.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Beyond the classroom, I am interested in the world decentralized finance and other emerging technologies which I do research in through 
        the Yale Blockchain Club. I am also a teacher at Code Haven Yale where I teach 
        and mentor younger students at local elementary schools in computer science. In addition, I’m an active trader in both stocks 
        and the blockchain space, using data-driven analysis to make informed investment decisions and better understand market behavior.
      </p>

<div className="grid md:grid-cols-3 gap-6 mt-6">
  <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
    <h4 className="font-semibold text-lg mb-1">Location</h4>
    <p className="text-sm">New Haven, CT</p>
  </div>
  <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
    <h4 className="font-semibold text-lg mb-1">Interests</h4>
    <p className="text-sm"> Statistics, Data Science, Blockchain, Computer Science</p>
  </div>
  <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-4 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
    <h4 className="font-semibold text-lg mb-1">Skills</h4>
    <p className="text-sm">Python, R, C++, Java, Racket, HTML, CSS</p>
  </div>
</div>

    </section>
  );
}

export default About;

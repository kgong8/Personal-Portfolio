function Contact() {
  return (
    <section
  id="contact"
  className="mt-16 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-md"
>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg">Find me online:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><a href="https://github.com/kgong8" className="text-blue-600 hover:underline">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/kellen-gong/" className="text-blue-600 hover:underline">LinkedIn</a></li>
        <li><a href="mailto:kellen.gong@yale.edu" className="text-blue-600 hover:underline">Email Me</a></li>
      </ul>
    </section>
  );
}

export default Contact;

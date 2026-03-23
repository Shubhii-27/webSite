import React, { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);

  const languages = [
    {
      name: "HTML",
      description: "Used to create structure of web pages",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      details: `HTML (HyperText Markup Language) is the standard language for creating web pages. It provides structure to web content using elements like headings, paragraphs, links, images, tables, forms, and more. HTML5 introduced semantic tags, multimedia support, and improved form elements. Essential for every web developer.`,
    },
    {
      name: "CSS",
      description: "Used to style and design web pages",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      details: `CSS (Cascading Style Sheets) is used to style and layout HTML content. You can control colors, fonts, spacing, grids, flex layouts, animations, and responsive designs. CSS3 introduced media queries, transitions, transforms, and variables, making designs modern and dynamic.`,
    },
    {
      name: "JavaScript",
      description: "Used to add logic and interactivity",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      details: `JavaScript is a programming language for the web that enables interactivity, dynamic content, and complex logic. You can handle events, manipulate DOM, fetch APIs, create single-page applications, and much more. Essential for frontend and also used in backend via Node.js.`,
    },
    {
      name: "React",
      description: "Frontend JavaScript library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      details: `React is a popular frontend JavaScript library developed by Facebook for building user interfaces. It uses components, props, state, and hooks to create reusable, interactive, and fast web applications. Virtual DOM ensures optimal rendering and performance.`,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      details: `Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs rapidly using pre-defined classes. It promotes consistency and efficiency in styling while reducing the need to write custom CSS.`,
    },
    {
      name: "Python",
      description: "Backend, data science, automation",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      details: `Python is a versatile programming language known for simplicity and readability. It's used in backend development, data science, machine learning, AI, web scraping, automation, and more. Libraries like Django, Flask, Pandas, and TensorFlow make it very powerful.`,
    },
    {
      name: "Node.js",
      description: "Backend JavaScript runtime",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      details: `Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to build fast and scalable server-side applications. With Node.js, JavaScript can be used on both frontend and backend, making full-stack development seamless.`,
    },
    {
      name: "MongoDB",
      description: "NoSQL database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      details: `MongoDB is a popular NoSQL database that stores data in JSON-like documents. It provides high flexibility, scalability, and easy integration with modern web apps. MongoDB is often used with Node.js and Express in the MERN stack.`,
    },
    {
      name: "Git & GitHub",
      description: "Version control system",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      details: `Git is a version control system that tracks changes in code. GitHub is a platform to host Git repositories, collaborate with other developers, manage projects, and showcase work. Both are essential for modern software development and team collaboration.`,
    },
  ];

  // Filter based on search
  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  // Scroll functions
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-03/84256810-354d-11eb-be48-092568f6a231.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeUp">
            Learn Programming the Smart Way
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 animate-fadeUp delay-200">
            Practical learning. Real projects. Career-ready skills.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Search Bar */}
        <div className="mb-14 flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-3xl font-semibold text-white">
            Popular Technologies
          </h2>
          <input
            type="text"
            placeholder="Search language..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-5 py-2 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Technology Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLanguages.map((lang, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-blue-500/30"
            >
              <div className="w-16 h-16 mb-6 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                <img src={lang.logo} alt={lang.name} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{lang.name}</h3>
              <p className="text-blue-100 text-sm mb-8">{lang.description}</p>

              {/* Show button only if filtered to 1 language */}
              {filteredLanguages.length === 1 && (
                <button
                  onClick={() => setSelectedTech(lang)}
                  className="w-full bg-gradient-to-r from-white to-blue-100 text-blue-800 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Start Learning →
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedTech && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedTech(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-700"
            >
              ✖
            </button>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedTech.logo}
                alt={selectedTech.name}
                className="w-12 h-12"
              />
              <h2 className="text-2xl font-bold">{selectedTech.name}</h2>
            </div>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedTech.details}
            </p>
          </div>
        </div>
      )}

      {/* Scroll Buttons */}
      <button
        onClick={scrollToBottom}
        className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-2xl"
        title="Go to Bottom"
      >
        ⬇️
      </button>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-2xl"
        title="Go to Top"
      >
        ⬆️
      </button>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp { animation: fadeUp 1s ease-out forwards; }
          .animate-fadeUp.delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </div>
  );
};

export default Home;
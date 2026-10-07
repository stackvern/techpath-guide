// Page templates, routing and rendering.
const parse = (s) =>
  s
    .trim()
    .split("\n")
    .map((l) => {
      const k = l.indexOf(":");
      return [
        l.slice(0, k),
        l
          .slice(k + 1)
          .trim()
          .split("; "),
      ];
    });
const lvl = (c, t, s) =>
  `<section class="lv ${c}" id="${c}"><h2>${t}</h2>${s ? `<p class="sub">${s}</p>` : ""}<div class="grid">${parse(
    R[window.cur][c.toUpperCase()],
  )
    .map(
      ([a, b]) =>
        `<div class="card"><h3>${a}</h3><ul>${b.map((x) => `<li>${x}</li>`).join("")}</ul></div>`,
    )
    .join("")}</div></section>`;
function rm(k) {
  const r = R[k];
  if (!r) return "<h1>Page not found</h1><a href='#roadmaps'>All roadmaps</a>";
  window.cur = k;
  return `<a href="#roadmaps">&larr; All roadmaps</a><h1 style="margin-top:10px"><span class="ico" style="vertical-align:middle;margin:0 12px 0 0">${ic(r.i)}</span>${r.n}</h1><p class="sub">${r.d}</p><span class="tag">Typical pay: ${r.pay}</span><span class="tag">Time: ${r.time}</span>
<p class="jump">Jump to: <a href="#r/${k}" onclick="go('b');return false">Basic</a><a href="#r/${k}" onclick="go('i');return false">Intermediate</a><a href="#r/${k}" onclick="go('a');return false">Advanced</a><a href="#r/${k}" onclick="go('p');return false">Projects</a></p>
${lvl("b", "Level 1: Basic", "Learn these first. Do not move on until you can build small things without a tutorial.")}${lvl("i", "Level 2: Intermediate", "Now build real applications and learn the standard tools of the job.")}${lvl("a", "Level 3: Advanced", "What separates good candidates: scale, security, testing, deployment, design.")}
<section class="lv" id="p" style="--c:var(--ac)"><h2>Projects to build</h2><div class="card"><ul>${r.P.split(
    "\n",
  )
    .map((x) => `<li>${x}</li>`)
    .join("")}</ul></div></section>
<section class="lv" id="q" style="--c:var(--ac2)"><h2>Common interview topics</h2><div class="card"><p>${r.Q}</p></div></section>
<div class="note">Rule: learn a topic, then immediately build something with it and push it to GitHub. Watching tutorials alone will not make you job-ready.</div>
<p>Other roadmaps: ${O.filter((x) => x !== k)
    .map((x) => `<a href="#r/${x}">${R[x].n}</a>`)
    .join(" | ")}</p>`;
}
function go(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
const pages = {
  home: () => `<h1>From confused to career-ready in IT</h1><p class="sub">Know exactly what to learn, in what order, and why. Choose a domain, follow a Basic to Advanced roadmap, build projects, and get hired.</p>
<svg viewBox="0 0 700 120" width="100%" role="img" aria-label="Basic, Intermediate, Advanced, Job"><g text-anchor="middle"><rect x="10" y="30" width="150" height="56" rx="10" fill="var(--ac)"/><rect x="190" y="30" width="150" height="56" rx="10" fill="var(--ac2)"/><rect x="370" y="30" width="150" height="56" rx="10" fill="var(--l3)"/><rect x="550" y="30" width="140" height="56" rx="10" fill="none" stroke="var(--ink)" stroke-width="2"/><text x="85" y="63" style="fill:#fff">Basic</text><text x="265" y="63" style="fill:#14211e">Intermediate</text><text x="445" y="63" style="fill:#fff">Advanced</text><text x="620" y="63">Job-ready</text></g></svg>
<div class="grid"><a class="card" href="#choose"><span class="ico">${ic("target")}</span><h3>How to choose your domain</h3><p>A step-by-step method and a decision table.</p></a><a class="card" href="#roadmaps"><span class="ico">${ic("compass")}</span><h3>Exact roadmaps</h3><p>${O.length} domains with Basic, Intermediate and Advanced topics, tools, projects and interview topics.</p></a><a class="card" href="#career"><span class="ico">${ic("rocket")}</span><h3>Build your career</h3><p>Resume, GitHub, internships, interviews, first job and growth.</p></a><a class="card" href="#jobs"><span class="ico">${ic("brief")}</span><h3>Jobs in IT</h3><p>Technical and non-technical roles.</p></a><a class="card" href="#companies"><span class="ico">${ic("building")}</span><h3>Companies</h3><p>Types of employers and how they hire.</p></a><a class="card" href="#plan"><span class="ico">${ic("cal")}</span><h3>Year-wise plan</h3><p>What to do in each year of college.</p></a></div>`,
  choose:
    () => `<h1>How to choose your domain</h1><p class="sub">Most students pick a domain because friends or social media suggest it. Use this method instead.</p>
<div class="path">${[
      [
        "Understand the options",
        "Read the roadmap pages for 3 to 4 domains that sound interesting. See what you would actually do daily.",
      ],
      [
        "Try each for 2 weeks",
        "Spend two weeks on the Basic level of each candidate domain. For web, build a small page. For data, analyze a CSV in Python.",
      ],
      [
        "Notice what you enjoy",
        "Which task made you lose track of time? Which did you keep avoiding? Enjoyment predicts consistency.",
      ],
      [
        "Check market fit",
        "Search job posts on LinkedIn and Naukri for fresher roles. Note required skills and how many openings exist.",
      ],
      [
        "Commit for 6 months",
        "Choose one domain, follow its roadmap, build 3 projects. Switch only after 6 months of real effort.",
      ],
    ]
      .map(
        (s, i) =>
          `<div class="step" data-n="${i + 1}"><div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`,
      )
      .join("")}</div>
<h2>If you like... then try</h2><div class="wrap"><table><tr><th>If you enjoy</th><th>Consider</th><th>Needs</th></tr><tr><td>Designing screens and making things look good</td><td>Frontend, UI/UX, Mobile</td><td>Creativity, JavaScript</td></tr><tr><td>Building complete products end to end</td><td>Full Stack</td><td>Wide learning, patience</td></tr><tr><td>Logic, performance, how systems work</td><td>Backend, DevOps, System roles</td><td>Strong DSA and CS fundamentals</td></tr><tr><td>Numbers, patterns, business questions</td><td>Data Analyst, Data Scientist</td><td>Statistics, SQL, Python</td></tr><tr><td>Building intelligent systems</td><td>AI/ML Engineer</td><td>Math, Python, deep learning</td></tr><tr><td>Puzzles, breaking things, security</td><td>Cybersecurity</td><td>Networking, Linux</td></tr><tr><td>Hardware plus software</td><td>Embedded, IoT</td><td>C/C++, electronics</td></tr><tr><td>Not coding-heavy, strong communication</td><td>Business Analyst, Product, Testing, Support</td><td>Communication, analysis</td></tr></table></div>
<h2>Your branch</h2><div class="wrap"><table><tr><th></th><th>CSE</th><th>AI and DS</th><th>IT</th></tr><tr><th>Focus</th><td>Programming, OS, networks, DBMS, algorithms</td><td>Statistics, ML, data handling</td><td>Software, web, databases, networking</td></tr><tr><th>Natural fit</th><td>Software, product companies</td><td>Data and AI roles</td><td>Software, web, support, testing</td></tr></table></div>
<div class="note">Your branch does not lock you in. Companies hire on skills shown in projects and interviews. Verify each company's eligible branches on its hiring page.</div><h2>Common mistakes</h2><ul><li>Learning many technologies a little instead of one domain deeply.</li><li>Only watching tutorials and never building alone.</li><li>Skipping DSA and CS basics, then failing interviews.</li><li>Starting advanced topics (like AI) without Python and maths basics.</li><li>Having no GitHub, LinkedIn or resume until final year.</li></ul>`,
  career:
    () => `<h1>How to build your career</h1><p class="sub">A practical sequence from first year to first job and beyond.</p><div class="path">${[
      [
        "Build the foundation",
        "One programming language, DSA basics, and CS fundamentals: OS, DBMS, networks, OOP. These are tested in almost every company.",
      ],
      [
        "Learn one domain deeply",
        "Follow the Basic, Intermediate and Advanced roadmap for your domain. Aim for 2 to 3 hours daily and consistency over intensity.",
      ],
      [
        "Build projects and GitHub",
        "3 to 5 quality projects with clear README, screenshots and live links. Commit regularly so your profile shows activity.",
      ],
      [
        "Create your resume",
        "One page, projects first for freshers, measurable results, skills section, no photos or long paragraphs. Tailor it to each role.",
      ],
      [
        "Set up LinkedIn",
        "Clear headline (for example: Full Stack Developer | React, Node.js), a summary, projects, certifications. Connect with alumni and recruiters.",
      ],
      [
        "Get internships",
        "Apply from year 2 or 3 via Internshala, LinkedIn and college placement cell. Even small internships and freelance work count.",
      ],
      [
        "Prepare for interviews",
        "Aptitude and reasoning, DSA (LeetCode 150+), core CS subjects, domain questions, project explanation, HR questions, mock interviews.",
      ],
      [
        "Apply widely",
        "Campus drives, off-campus portals, company career pages, referrals from seniors. Track applications and learn from rejections.",
      ],
      [
        "Grow after your first job",
        "Junior to mid to senior to lead or architect or manager. Keep learning, earn certifications, contribute to open source, consider higher studies or an MBA later.",
      ],
    ]
      .map(
        (s, i) =>
          `<div class="step" data-n="${i + 1}"><div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`,
      )
      .join("")}</div>
<h2>Soft skills that matter</h2><ul><li>Communication: explain your work clearly in English, in writing and speaking.</li><li>Problem solving: break big problems into small steps.</li><li>Teamwork: Git, code reviews, Agile and Scrum basics.</li><li>Learning ability: new tools appear constantly; show you can learn quickly.</li></ul>
<h2>Useful certifications</h2><ul><li>Cloud: AWS Cloud Practitioner, Azure Fundamentals</li><li>Data: Microsoft PL-300 (Power BI), Google Data Analytics</li><li>Security: CompTIA Security+, CEH</li><li>Free university courses: NPTEL</li></ul>`,
  roadmaps: () =>
    `<h1>Roadmaps</h1><p class="sub">Each roadmap has Basic, Intermediate and Advanced levels, projects and interview topics.</p><div class="grid">${O.map((k) => `<a class="card" href="#r/${k}"><span class="ico">${ic(R[k].i)}</span><h3>${R[k].n}</h3><p>${R[k].d}</p><span class="tag">${R[k].time}</span><span class="tag">${R[k].pay}</span></a>`).join("")}</div>`,
  jobs: () =>
    `<h1>Jobs in IT</h1>${JOBS.map((g) => `<h2>${g[0]}</h2><div class="grid">${g[1].map((j) => `<div class="card"><h3>${j[0]}</h3><p>${j[1]}</p></div>`).join("")}</div>`).join("")}`,
  companies: () =>
    `<h1>Companies and how they hire</h1><p class="sub">Examples by category. Hiring plans change, so check official career pages.</p>${CO.map((c) => `<div class="card" style="margin-bottom:12px"><h3>${c[0]}</h3><p><b>Examples:</b> ${c[1]}</p><p>${c[2]}</p></div>`).join("")}`,
  plan: () =>
    `<h1>Year-wise plan</h1><div class="path">${[
      [
        "Year 1",
        [
          "C and Python basics, logic building",
          "HTML/CSS basics",
          "English communication",
          "Join a coding club",
        ],
      ],
      [
        "Year 2",
        [
          "DSA and OOP",
          "Choose a domain using the method on the Choose page",
          "Start the Basic level; 1-2 mini projects",
          "Create GitHub",
        ],
      ],
      [
        "Year 3",
        [
          "Complete Intermediate and part of Advanced level",
          "2-3 deployed projects",
          "Internship",
          "LeetCode 150+, aptitude practice",
        ],
      ],
      [
        "Final year",
        [
          "Resume, LinkedIn, portfolio",
          "Mock interviews and system design basics",
          "Apply on and off campus",
          "Hackathons or open source",
        ],
      ],
    ]
      .map(
        (s, i) =>
          `<div class="step" data-n="${i + 1}"><div class="card"><h3>${s[0]}</h3><ul>${s[1].map((x) => `<li>${x}</li>`).join("")}</ul></div></div>`,
      )
      .join("")}</div>`,
  resources: () =>
    `<h1>Free resources</h1><div class="grid"><div class="card"><h3>Learn</h3><ul><li><a href="https://roadmap.sh" target="_blank" rel="noopener">roadmap.sh</a></li><li><a href="https://www.freecodecamp.org" target="_blank" rel="noopener">freeCodeCamp</a></li><li><a href="https://www.theodinproject.com" target="_blank" rel="noopener">The Odin Project</a></li><li><a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN Web Docs</a></li><li><a href="https://www.kaggle.com/learn" target="_blank" rel="noopener">Kaggle Learn</a></li><li><a href="https://nptel.ac.in" target="_blank" rel="noopener">NPTEL</a></li></ul></div><div class="card"><h3>Practice</h3><ul><li><a href="https://leetcode.com" target="_blank" rel="noopener">LeetCode</a></li><li><a href="https://www.hackerrank.com" target="_blank" rel="noopener">HackerRank</a></li><li><a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener">GeeksforGeeks</a></li><li><a href="https://tryhackme.com" target="_blank" rel="noopener">TryHackMe</a></li></ul></div><div class="card"><h3>Jobs and internships</h3><ul><li>LinkedIn, Naukri, Internshala</li><li>Wellfound for startups</li><li>Company career pages</li></ul></div></div>`,
};
const NAV = [
  ["home", "Home"],
  ["choose", "Choose domain"],
  ["roadmaps", "Roadmaps"],
  ["career", "Build career"],
  ["jobs", "Jobs"],
  ["companies", "Companies"],
  ["plan", "Year plan"],
  ["resources", "Resources"],
];
function render() {
  const h = (location.hash || "#home").slice(1),
    r = h.startsWith("r/"),
    key = r ? "roadmaps" : pages[h] ? h : "home";
  document.getElementById("nav").innerHTML =
    "<b>ITPath</b>" +
    NAV.map(
      (n) =>
        `<a href="#${n[0]}" class="${n[0] === key ? "on" : ""}">${n[1]}</a>`,
    ).join("") +
    '<button id="th">Theme</button>';
  document.getElementById("th").onclick = () => {
    const d = document.documentElement;
    d.dataset.theme =
      getComputedStyle(d).getPropertyValue("--bg").trim() === "#0f1816"
        ? "light"
        : "dark";
  };
  document.getElementById("app").innerHTML =
    (r ? rm(h.slice(2)) : pages[key]()) +
    "<footer>© 2026 IT Student Guide. All rights reserved.Created by Stackvern</footer>";
  document.title =
    r && R[h.slice(2)] ? R[h.slice(2)].n + " Roadmap" : "IT Student Guide";
  window.scrollTo(0, 0);
}
addEventListener("hashchange", render);
render();

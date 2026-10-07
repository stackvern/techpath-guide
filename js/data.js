// Roadmap, job and company data. Edit this file to add or change content.
const IC = {
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  monitor:
    '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  server:
    '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  cloud: '<path d="M7 18a4 4 0 010-8 5 5 0 019.5-1A4.5 4.5 0 0117 18H7z"/>',
  shield:
    '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  phone:
    '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  test: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  board:
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h4v4H7zM15 9h2M15 13h2"/>',
  game: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10v5M4.5 12.5h5M15 11h.01M18 14h.01"/>',
  pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  target:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  compass:
    '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
  rocket:
    '<path d="M5 19c-1-3 0-6 2-8 3-3 7-5 12-6-1 5-3 9-6 12-2 2-5 3-8 2zM9 15l-3 3M14 10h.01"/>',
  brief:
    '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 13h18"/>',
  building: '<path d="M4 21V4h10v17M14 9h6v12M2 21h20M8 8h2M8 12h2M8 16h2"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
};
const ic = (n) =>
  `<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;
// level text: one topic per line -> "Title: item; item; item"
const R = {
  fullstack: {
    n: "Full Stack Web Developer (MERN)",
    i: "globe",
    d: "Build complete web apps: the interface (React), the server (Node/Express) and the database (MongoDB).",
    pay: "3-10 LPA",
    time: "10-12 months at 2-3 hrs/day",
    B: `Programming logic: variables, data types, conditions, loops, functions, arrays, strings, recursion basics
HTML5: semantic tags, forms and validation, tables, media, accessibility (alt text, labels)
CSS3: box model, selectors, Flexbox, Grid, media queries, CSS variables, transitions
JavaScript core: scope, hoisting, closures, this, array methods (map/filter/reduce), objects, destructuring, ES modules
Browser JavaScript: DOM, events, localStorage, fetch API, promises, async/await, error handling
Git and GitHub: commit, branch, merge, pull request, resolving conflicts
Tools: VS Code, terminal basics, Chrome DevTools, npm`,
    I: `React: JSX, components, props, state, useEffect, useRef, useMemo, custom hooks, conditional rendering, lists and keys, controlled forms
React ecosystem: React Router, Context API, Redux Toolkit or Zustand, Axios, React Query, Tailwind CSS or MUI
Node.js: event loop, modules (CommonJS/ESM), fs, path, npm scripts, environment variables
Express.js: routing, middleware, REST API design, status codes, CORS, error handling, folder structure (MVC)
MongoDB: documents and collections, CRUD, Mongoose schemas, references vs embedding, indexes, aggregation pipeline
Authentication: password hashing (bcrypt), JWT access and refresh tokens, cookies vs localStorage, role-based access
API extras: validation (Zod/Joi), file upload (Multer, Cloudinary), pagination, search, Postman testing
SQL basics: PostgreSQL or MySQL, joins, normalization, when to choose SQL vs NoSQL`,
    A: `TypeScript: types, interfaces, generics, typing React and Express code
Next.js: App Router, server components, SSR, SSG, ISR, API routes, SEO
Testing: Jest, React Testing Library, Supertest, Cypress or Playwright
Real-time: WebSockets and Socket.IO (chat, notifications, live dashboards)
Performance: code splitting, lazy loading, image optimization, caching with Redis, Core Web Vitals, database query tuning
Security: OWASP Top 10, XSS, CSRF, SQL/NoSQL injection, Helmet, rate limiting, OAuth 2.0 (Google login)
DevOps: Docker, GitHub Actions CI/CD, Nginx, deployment on AWS/Render/Vercel, logging and monitoring
Architecture: system design basics, load balancing, message queues, microservices vs monolith, GraphQL or tRPC
Business integrations: payments (Razorpay/Stripe), email (Nodemailer), cloud storage (S3)`,
    P: `Basic: personal portfolio, to-do app, weather app, quiz game, landing page clone
Intermediate: blog with login, job portal, e-commerce store with cart and admin panel, expense tracker
Advanced: real-time chat or collaboration tool, SaaS with subscription payments, deployed with CI/CD and tests`,
    Q: `JavaScript closures, event loop, promises; React hooks and re-render rules; REST vs GraphQL; JWT flow; MongoDB indexing; DSA (arrays, hash maps, strings, trees); explain your projects`,
  },
  frontend: {
    n: "Frontend Developer",
    i: "monitor",
    d: "Create fast, accessible, beautiful interfaces that users interact with.",
    pay: "3-8 LPA",
    time: "6-8 months",
    B: `HTML and CSS: semantic HTML, Flexbox, Grid, responsive design, accessibility basics
JavaScript: ES6+, DOM, events, async JS, fetch
Design basics: typography, spacing, colour, contrast, Figma basics
Git and GitHub: daily workflow, pull requests`,
    I: `React or Vue: components, hooks, routing, state management, forms
Styling systems: Tailwind CSS, CSS modules, SASS, component libraries
APIs: REST, authentication flow, error and loading states
TypeScript: types for props, state, API data
Tooling: Vite, ESLint, Prettier, npm`,
    A: `Performance: Core Web Vitals, lazy loading, bundle analysis, caching
Testing: Jest, Testing Library, Cypress, Storybook
Next.js: SSR, SSG, SEO, image optimization
Architecture: design systems, micro-frontends, state machines
Advanced web: PWAs, Web Workers, WebAssembly, accessibility audits (WCAG), animation with GSAP/Framer Motion`,
    P: `Basic: portfolio, clone of a landing page, calculator
Intermediate: movie search app, dashboard with charts, e-commerce UI
Advanced: design system library, PWA with offline mode, Next.js blog with SEO`,
    Q: `CSS specificity and box model; Flexbox vs Grid; JS event loop; React reconciliation; web performance; accessibility`,
  },
  backend: {
    n: "Backend Developer (Java or Python)",
    i: "server",
    d: "Build the server logic, APIs and databases behind apps. Strong demand in product companies and banks.",
    pay: "4-12 LPA",
    time: "9-12 months",
    B: `Language: Java (or Python): syntax, OOP (classes, inheritance, polymorphism), collections, exceptions
Data structures and algorithms: arrays, linked lists, stacks, queues, hashing, sorting, searching, recursion
Databases: SQL, joins, indexes, normalization, transactions (ACID)
Core CS: operating system basics, networking basics (HTTP, TCP, DNS), Linux commands
Git and Postman`,
    I: `Framework: Spring Boot (Java) or Django/FastAPI (Python): controllers, services, repositories
REST API design: status codes, versioning, validation, pagination, Swagger/OpenAPI
ORM: Hibernate/JPA or SQLAlchemy/Django ORM, relationships, migrations
Security: JWT, OAuth 2.0, Spring Security, password hashing
Caching and NoSQL: Redis, MongoDB, when to use each
Testing: JUnit/Mockito or pytest, integration tests
Advanced DSA: trees, graphs, heaps, dynamic programming, two pointers`,
    A: `Microservices: service discovery, API gateway, circuit breaker, inter-service communication
Messaging: Kafka or RabbitMQ, event-driven design
System design: scalability, load balancing, sharding, replication, CAP theorem, rate limiting, design patterns
DevOps: Docker, Kubernetes basics, CI/CD, monitoring (Prometheus, Grafana), logging
Performance: profiling, connection pooling, query optimization, concurrency and multithreading
Cloud: AWS or Azure (EC2, S3, RDS, queues)`,
    P: `Basic: console banking system, student management with SQL
Intermediate: REST API for e-commerce with JWT, URL shortener, library system
Advanced: microservices ordering system with Kafka and Docker, rate-limited API gateway`,
    Q: `OOP principles; HashMap internals; SQL joins and indexes; REST design; multithreading; system design (URL shortener, chat); DSA medium problems`,
  },
  datasci: {
    n: "Data Analyst / Data Scientist",
    i: "chart",
    d: "Collect, clean and analyze data to answer business questions and build predictive models. Good fit for AI&DS students.",
    pay: "3-14 LPA",
    time: "8-12 months",
    B: `Mathematics: descriptive statistics, probability, distributions, basic linear algebra
Excel and SQL: formulas, pivot tables, SQL SELECT, joins, group by, window functions
Python: syntax, functions, lists/dicts, file handling, NumPy
Pandas: loading data, cleaning, missing values, merging, group-by, reshaping
Visualization: Matplotlib, Seaborn, Power BI or Tableau dashboards`,
    I: `Statistics: hypothesis testing, confidence intervals, correlation, A/B testing, regression
Exploratory data analysis: outliers, feature relationships, storytelling with data
Machine learning: linear and logistic regression, decision trees, random forest, XGBoost, KNN, clustering, PCA
Model evaluation: train/test split, cross validation, precision, recall, F1, ROC-AUC, overfitting
Feature engineering: encoding, scaling, feature selection, handling imbalanced data
Tools: Jupyter, scikit-learn, Git, Kaggle`,
    A: `Deep learning: neural networks, CNN, RNN/LSTM, PyTorch or TensorFlow
NLP: text preprocessing, embeddings, transformers, sentiment analysis
Time series forecasting: ARIMA, Prophet, LSTM
Big data: Spark, Hadoop concepts, data warehouses, Airflow, dbt
MLOps: model deployment (FastAPI, Docker), MLflow, monitoring drift
Advanced statistics: causal inference, Bayesian methods, experiment design`,
    P: `Basic: sales dashboard in Power BI, Excel analysis, EDA on a Kaggle dataset
Intermediate: customer churn prediction, house price prediction, SQL case study
Advanced: end-to-end ML app deployed with FastAPI, NLP sentiment tool, demand forecasting pipeline`,
    Q: `SQL window functions; bias vs variance; overfitting; precision vs recall; how random forest works; explain a project with business impact`,
  },
  aiml: {
    n: "AI / Machine Learning Engineer",
    i: "cpu",
    d: "Build, train and deploy AI systems: chatbots, recommendation engines, vision and language models.",
    pay: "6-18 LPA",
    time: "10-14 months",
    B: `Python: functions, OOP, NumPy, Pandas
Mathematics: linear algebra (vectors, matrices), calculus (gradients), probability, statistics
Data skills: SQL, data cleaning, visualization
Core ML: regression, classification, clustering, evaluation metrics (scikit-learn)`,
    I: `Deep learning: perceptron, backpropagation, activation functions, optimizers, regularization, PyTorch
Computer vision: CNNs, transfer learning, image classification, object detection (YOLO)
NLP: tokenization, embeddings, RNN, attention, Transformers, Hugging Face
Model engineering: hyperparameter tuning, experiment tracking, data pipelines
Deployment basics: FastAPI, Docker, REST endpoints, Streamlit demos`,
    A: `LLM engineering: prompt engineering, fine-tuning (LoRA/PEFT), RAG, vector databases (FAISS, Pinecone), agents and tool use
Generative AI: diffusion models, GANs, multimodal models
MLOps: MLflow, CI/CD for models, monitoring, feature stores, Kubernetes
Optimization: quantization, distillation, GPU training, distributed training
Research skills: reading papers, reproducing results, evaluation benchmarks, responsible AI and safety`,
    P: `Basic: spam classifier, digit recognition
Intermediate: image classifier with transfer learning, movie recommender, sentiment analysis
Advanced: RAG chatbot over your own documents, fine-tuned small language model, deployed AI API with monitoring`,
    Q: `Gradient descent; backpropagation; CNN vs Transformer; overfitting fixes; how RAG works; evaluation of LLMs`,
  },
  devops: {
    n: "DevOps and Cloud Engineer",
    i: "cloud",
    d: "Automate building, testing, deploying and monitoring software on the cloud.",
    pay: "4-14 LPA",
    time: "8-10 months",
    B: `Linux: file system, permissions, processes, bash scripting, package managers
Networking: IP, DNS, HTTP/HTTPS, ports, firewalls, load balancers
Programming: Python or Go for scripting, YAML and JSON
Git and GitHub workflows`,
    I: `Cloud: AWS (EC2, S3, IAM, VPC, RDS, Lambda) or Azure equivalents; get one entry certification
Containers: Docker images, Dockerfile, volumes, networks, Docker Compose
CI/CD: GitHub Actions, Jenkins, build and release pipelines
Infrastructure as Code: Terraform, Ansible
Monitoring: Prometheus, Grafana, ELK/CloudWatch logs`,
    A: `Kubernetes: pods, deployments, services, ingress, Helm, autoscaling
GitOps: ArgoCD, FluxCD
Reliability engineering: SLI/SLO, incident response, chaos engineering
Security: DevSecOps, secrets management (Vault), image scanning, IAM best practices
Platform engineering, cost optimization (FinOps), multi-cloud and service mesh (Istio)`,
    P: `Basic: automate backups with bash, host a static site on S3
Intermediate: dockerize a full stack app with CI/CD to AWS
Advanced: Kubernetes cluster with Terraform, monitoring dashboards and auto-scaling`,
    Q: `Docker vs VM; CI/CD flow; Kubernetes architecture; Terraform state; how to handle an outage; Linux troubleshooting`,
  },
  cyber: {
    n: "Cybersecurity",
    i: "shield",
    d: "Protect systems, networks and data: security analyst, penetration tester, SOC roles.",
    pay: "4-15 LPA",
    time: "9-12 months",
    B: `Networking: OSI and TCP/IP, DNS, HTTP, firewalls, VPN
Operating systems: Linux and Windows administration
Security fundamentals: CIA triad, threats, vulnerabilities, risk, authentication
Scripting: Python and bash
Cryptography basics: hashing, symmetric/asymmetric encryption, TLS`,
    I: `Web security: OWASP Top 10, SQL injection, XSS, CSRF, Burp Suite
Network security: Nmap, Wireshark, IDS/IPS, packet analysis
Vulnerability assessment: Nessus/OpenVAS, reporting
Defensive security: SIEM (Splunk), log analysis, incident response, SOC workflows
Practice platforms: TryHackMe, Hack The Box, CTFs`,
    A: `Penetration testing: Metasploit, privilege escalation, Active Directory attacks
Malware analysis and reverse engineering: Ghidra, IDA, sandboxing
Threat hunting, MITRE ATT&CK, threat intelligence
Cloud and application security: AWS security, container security, DevSecOps
Digital forensics, red teaming and compliance (ISO 27001, NIST)
Certifications: Security+, CEH, eJPT, OSCP, CISSP`,
    P: `Basic: home lab with virtual machines, network scan reports
Intermediate: CTF writeups, vulnerable web app testing report
Advanced: SOC lab with SIEM alerts, full pentest report of an intentionally vulnerable system`,
    Q: `CIA triad; symmetric vs asymmetric encryption; how HTTPS works; SQL injection prevention; incident response steps; common ports`,
  },
  mobile: {
    n: "Mobile App Developer (Flutter / Android / iOS)",
    i: "phone",
    d: "Build apps for phones and tablets that are published on the Play Store and App Store.",
    pay: "3-12 LPA",
    time: "7-9 months",
    B: `Programming and OOP: Dart, Kotlin or Swift syntax; classes, null safety, collections, async programming
Mobile concepts: app lifecycle, screens and navigation, touch events, permissions
UI basics: layouts, widgets and views, responsive design for different screen sizes, Material and iOS design guidelines
Tools: Android Studio or VS Code, emulators, Git`,
    I: `State management: Provider, Riverpod or Bloc (Flutter); ViewModel and Jetpack Compose (Android)
Networking: REST APIs, JSON parsing, Dio or Retrofit, error and loading states
Local storage: SQLite, Room, Hive, shared preferences
Firebase: authentication, Firestore, push notifications (FCM)
Device features: camera, location, maps, biometrics, notifications
Publishing: app signing, Play Store and App Store submission process`,
    A: `Architecture: MVVM, clean architecture, dependency injection
Testing: unit, widget and integration tests
Performance: profiling, memory leaks, app size, lazy loading
Offline-first apps and data synchronization
CI/CD: Fastlane, Codemagic, GitHub Actions
Security: secure storage, certificate pinning, code obfuscation
Native integration: platform channels, in-app purchases, deep links`,
    P: `Basic: calculator, to-do app, unit converter
Intermediate: weather app with API, expense tracker with local database, chat app with Firebase
Advanced: food delivery app with maps and payments, published on the Play Store with CI/CD`,
    Q: `App lifecycle; stateful vs stateless; state management approaches; REST integration; local vs remote storage; handling different screen sizes`,
  },
  qa: {
    n: "Software Testing and QA Automation (SDET)",
    i: "test",
    d: "Ensure software works correctly through manual and automated testing. A common entry point into IT for freshers.",
    pay: "3-10 LPA",
    time: "5-8 months",
    B: `Testing fundamentals: SDLC, STLC, levels (unit, integration, system, UAT), test types
Test design: test cases, equivalence partitioning, boundary value analysis
Defect management: bug lifecycle, severity vs priority, Jira
Agile: Scrum, sprints, user stories, acceptance criteria
Prerequisites: SQL queries and one language (Java or Python)`,
    I: `Selenium WebDriver or Playwright: locators, waits, Page Object Model
Test frameworks: TestNG, JUnit or pytest, assertions, data-driven testing
API testing: Postman, REST Assured, status codes, authentication
BDD: Cucumber and Gherkin
Git, Maven or pip, reporting with Allure or Extent Reports`,
    A: `Framework design: hybrid frameworks, reusable utilities, parallel execution
CI/CD: Jenkins or GitHub Actions, Docker for test environments
Performance testing: JMeter, k6, load and stress tests
Mobile and security testing: Appium, OWASP basics
Test strategy: risk-based testing, test data management, contract testing, shift-left testing`,
    P: `Basic: manual test suite for a real website with bug reports
Intermediate: Selenium framework with Page Object Model and reports
Advanced: API plus UI automation integrated with CI, performance test report`,
    Q: `Severity vs priority; test case design techniques; Selenium waits; Page Object Model; REST API testing; regression vs retesting`,
  },
  dataeng: {
    n: "Data Engineer",
    i: "db",
    d: "Build the pipelines and warehouses that collect, move and prepare data for analysts and data scientists.",
    pay: "5-16 LPA",
    time: "9-12 months",
    B: `Python and SQL: joins, window functions, query optimization
Linux and Git basics
Data modeling: normalization, star and snowflake schemas, OLTP vs OLAP
Databases: PostgreSQL, MySQL, MongoDB`,
    I: `ETL vs ELT concepts and pipeline design
Data warehouses: Snowflake, BigQuery or Redshift
Orchestration: Apache Airflow DAGs and scheduling
Transformation: dbt, Pandas, PySpark
Cloud storage and services: AWS S3, Glue, Athena or Azure Data Factory`,
    A: `Streaming: Kafka, Spark Structured Streaming, Flink
Lakehouse: Delta Lake, Apache Iceberg, Parquet file format
Data quality and governance: Great Expectations, lineage, catalogs
Performance: partitioning, indexing, cost optimization
DataOps: CI/CD for pipelines, Terraform, monitoring, change data capture (CDC)`,
    P: `Basic: load CSV data into PostgreSQL with Python
Intermediate: Airflow pipeline from an API to a warehouse with dbt models
Advanced: real-time Kafka and Spark pipeline with dashboards and data quality checks`,
    Q: `ETL vs ELT; star schema; partitioning; Airflow concepts; Spark internals; handling late or duplicate data`,
  },
  embedded: {
    n: "Embedded Systems and IoT Engineer",
    i: "board",
    d: "Write software for devices such as sensors, vehicles, wearables and smart home products.",
    pay: "3-12 LPA",
    time: "8-12 months",
    B: `C programming: pointers, memory, structures, bit manipulation
Electronics: voltage, current, resistors, transistors, logic gates, reading datasheets
Microcontroller basics: GPIO, timers, interrupts, ADC and PWM
Arduino and C++ basics`,
    I: `STM32, ESP32 or ARM Cortex-M development
Protocols: UART, SPI, I2C, CAN
RTOS: FreeRTOS tasks, queues, semaphores
IoT: MQTT, Wi-Fi, BLE and cloud dashboards
Debugging: JTAG, oscilloscope, logic analyzer
Embedded Linux basics on Raspberry Pi`,
    A: `Device drivers, bootloaders and Linux kernel modules
Low-power design and real-time scheduling
Security: secure boot, over-the-air (OTA) updates, firmware protection
Automotive: AUTOSAR, ISO 26262
Edge AI: TinyML on microcontrollers`,
    P: `Basic: LED and sensor projects with Arduino
Intermediate: temperature monitor sending data over MQTT, RTOS-based data logger
Advanced: BLE wearable prototype with OTA updates and a cloud dashboard`,
    Q: `Pointers and memory; volatile keyword; interrupts; UART vs SPI vs I2C; RTOS vs bare metal; debugging a hard fault`,
  },
  uiux: {
    n: "UI/UX Designer",
    i: "pen",
    d: "Research users and design interfaces that are easy, useful and visually clear. Little coding needed.",
    pay: "3-12 LPA",
    time: "5-8 months",
    B: `Design principles: layout, hierarchy, typography, colour theory, spacing, contrast
UX basics: user needs, personas, user journeys, information architecture
Figma: frames, auto layout, components, styles
Accessibility basics: colour contrast, touch targets, WCAG`,
    I: `User research: interviews, surveys, usability testing
Wireframes and prototypes: low to high fidelity, interactions
Design systems: tokens, component libraries, variants
Responsive and mobile-first design, Material Design and iOS guidelines
Working with developers: handoff, basic HTML and CSS knowledge`,
    A: `UX strategy and metrics: task success, SUS, HEART framework
A/B testing and analytics-driven design
Motion design and micro-interactions
Scaling design systems and design operations
Accessibility audits, content design, product thinking, case-study portfolio`,
    P: `Basic: redesign of one screen of an existing app
Intermediate: full mobile app prototype with user flows and usability test results
Advanced: complete design system plus 3 portfolio case studies explaining research and decisions`,
    Q: `Design process; how you validate decisions; accessibility; critique of a given interface; portfolio walkthrough`,
  },
  gamedev: {
    n: "Game and AR/VR Developer",
    i: "game",
    d: "Build games and interactive 3D experiences using engines such as Unity and Unreal.",
    pay: "3-12 LPA",
    time: "8-12 months",
    B: `C# or C++ and OOP
Math: vectors, matrices, trigonometry, coordinate systems
Game concepts: game loop, sprites, collisions, input handling
Unity basics: scenes, GameObjects, components, prefabs`,
    I: `2D and 3D gameplay: character controller, physics, animation, cameras
AI: pathfinding (A*), state machines, behaviour trees
UI, audio and particle effects
Code patterns: singleton, observer, object pooling
Asset pipeline and Git with LFS, building for PC and mobile`,
    A: `Graphics: shaders (HLSL/GLSL), lighting, optimization
Multiplayer networking
Procedural generation
Unity DOTS/ECS, Unreal Engine with C++ and Blueprints
AR/VR development with XR toolkits, performance profiling`,
    P: `Basic: Pong or Flappy Bird clone
Intermediate: 2D platformer with levels and enemy AI
Advanced: 3D multiplayer game or VR prototype, built for PC or mobile and published on itch.io`,
    Q: `Game loop; Update vs FixedUpdate; collision detection; optimization techniques; object pooling; pathfinding`,
  },
};
const O = Object.keys(R);
const JOBS = [
  [
    "Technical",
    [
      ["Software Engineer", "Designs and writes application code"],
      [
        "Full Stack / Frontend / Backend Developer",
        "Builds web and server applications",
      ],
      ["Data Analyst / Data Scientist", "Finds insights and builds models"],
      ["ML / AI Engineer", "Ships AI models to production"],
      ["Data Engineer", "Builds data pipelines"],
      ["DevOps / Cloud / SRE", "Automates and runs infrastructure"],
      ["Cybersecurity Analyst / Pentester", "Detects and prevents attacks"],
      ["QA / SDET", "Tests and automates tests"],
      ["Mobile App Developer", "Android and iOS apps"],
      ["Embedded / IoT Engineer", "Software inside devices"],
      ["Database Administrator", "Runs and tunes databases"],
      ["Network Engineer", "Builds and maintains networks"],
      ["UI/UX Designer", "Designs user experiences"],
      ["Technical Support Engineer", "Solves customer technical issues"],
    ],
  ],
  [
    "Non-technical (in IT)",
    [
      ["Product Manager", "Decides what to build and why"],
      ["Business Analyst", "Turns business needs into requirements"],
      ["Project / Scrum Manager", "Plans delivery and leads teams"],
      ["HR / Talent Acquisition", "Hires and develops people"],
      ["Technical Writer", "Writes docs and tutorials"],
      [
        "Pre-sales / Solutions Consultant",
        "Designs and demos solutions for clients",
      ],
      ["Sales and Account Manager", "Sells software and services"],
      ["Customer Success", "Keeps customers successful"],
      ["Digital Marketing / SEO", "Grows product reach"],
      ["Legal, Finance, Compliance", "Contracts, audits, data-privacy laws"],
    ],
  ],
];
const CO = [
  [
    "Service companies",
    "TCS, Infosys, Wipro, HCLTech, Cognizant, Accenture, Capgemini, Tech Mahindra",
    "Large campus hiring; roles in development, testing, support, analysis. Good for learning processes and working with global clients.",
  ],
  [
    "Product companies",
    "Google, Microsoft, Amazon, Adobe, Oracle, Salesforce, Zoho, Freshworks",
    "Build their own products; heavier DSA and system design interviews; higher pay.",
  ],
  [
    "Startups",
    "Razorpay, Zerodha, Swiggy, PhonePe, CRED, Meesho",
    "Broad responsibility and fast learning; hire through referrals, hackathons and off-campus drives.",
  ],
  [
    "Global Capability Centres",
    "Goldman Sachs, JPMorgan, Walmart Global Tech, Siemens, Bosch",
    "India teams of global firms; engineering, data, cloud and risk technology roles.",
  ],
  [
    "Chip and hardware",
    "Intel, NVIDIA, Qualcomm, AMD, Texas Instruments",
    "VLSI, embedded, firmware, GPU software roles.",
  ],
  [
    "Government and research",
    "ISRO, DRDO, NIC, BEL, public sector banks",
    "Recruited via exams (GATE, SSC) or notifications; stable and mission-driven.",
  ],
];

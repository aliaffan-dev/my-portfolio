/**
 * Single source of truth for personal details.
 * Edit this file to update the site — no layout code changes needed.
 *
 * Any value set to `null` is treated as "not provided yet" and the
 * related UI (button, link, badge) is hidden rather than shown broken.
 */

export const site = {
  name: 'Ali Affan M K',
  shortName: 'Ali Affan',
  /** The hero headline shows these on two lines. */
  nameLead: 'Ali Affan',
  nameTail: 'M K',
  initials: 'AA',
  role: 'Data Science & Machine Learning',
  title: 'Ali Affan M K — Data Science & Machine Learning',
  description:
    'Portfolio of Ali Affan M K, a BCA graduate building projects in machine learning, computer vision and data analysis with Python.',

  location: 'Perinthalmanna, Kerala, India',
  openTo: ['Remote', 'Relocation across India'],
  /** Set to null to hide the availability badge. */
  availability: 'Available to start within 1 week',

  email: 'aliaffan.dev@gmail.com' as string | null,

  links: {
    // GitHub verified (hosts job-market-analyzer). LinkedIn taken from the CV — not yet verified.
    github: 'https://github.com/aliaffan-dev',
    linkedin: 'https://www.linkedin.com/in/ali-affan-09938b297',
  },

  /** Path to a PDF in /public (e.g. '/Ali_Affan_MK_Resume.pdf'). null = hidden. */
  // NOTE: this PDF still shows the old email — replace the file once the CV is updated.
  resumeUrl: '/Ali_Affan_MK_Resume.pdf' as string | null,
} as const;

/** Shown in the hero "notebook cell". Facts only — sourced from the CV. */
export const heroProfile = {
  seeking: ['Data Scientist', 'ML Engineer', 'AI Engineer'],
  focus: ['Machine Learning', 'Computer Vision', 'EDA'],
  stack: ['Python', 'Pandas', 'Scikit-learn', 'OpenCV', 'YOLO'],
  degree: 'BCA, 2022–2025',
  based_in: 'Kerala, India',
};

/**
 * Navigation. Only sections that actually exist on the page are listed,
 * so there are never dead anchor links. Add entries as sections are built.
 */
export const navSections: { id: string; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

/* ==========================================================================
   About — every statement traceable to the CV or the JobScope repo
   ========================================================================== */
export const about = {
  heading: 'From raw data to something that works.',
  paragraphs: [
    "I'm Ali Affan, a BCA graduate from Kerala working towards a career in data science, machine learning and AI. What draws me in is the full path: cleaning and exploring a messy dataset, finding what it's actually saying, and turning that into a model or an application someone can use.",
    'During an eight-month Data Science and Python training programme at Luminar Technolab I worked hands-on with Python, Pandas, NumPy and SQL — data cleaning, exploratory analysis, visualisation and core machine learning (classification, regression, model evaluation), with Power BI for reporting. An earlier Python–Django internship at Softronics taught me how web apps, databases and version control fit together.',
    'My projects lean towards computer vision — real-time object detection with YOLO and a gesture-controlled virtual mouse with MediaPipe — and, most recently, JobScope: a job-market analyser built on real posting data with an explainable NLP and machine learning pipeline.',
  ],
  education: {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Al-Jamia Arts & Science College',
    location: 'Kerala, India',
    period: 'Sep 2022 – Mar 2025',
  },
  lookingFor: ['Data Scientist', 'Machine Learning Engineer', 'AI Engineer'],
  lookingForNote: 'Internships — full-time or part-time',
  /** Small personal note shown at the bottom of About. Set to null to hide. */
  personal: {
    lead: 'Beyond the keyboard, onto the grappling mats.',
    title: 'Kerala State Grappling Champion — 2026',
    details: ['Senior Heavyweight', 'No-Gi', '7th Kerala State Grappling Championship'],
  } as { lead: string; title: string; details: string[] } | null,
};

/* ==========================================================================
   Skills — CV + verified project code only. No proficiency levels.
   `usedIn` lists projects where the skill is demonstrably used.
   ========================================================================== */
export type Skill = { name: string; usedIn?: string[] };
export type SkillGroup = { id: string; title: string; blurb: string; skills: Skill[] };

const YOLO_DET = 'Real-Time YOLO Object Detection';
const VMOUSE = 'AI-Powered Virtual Mouse';
const MASK = 'Face Mask Detection';
const HEART = 'Heart Disease Prediction';
const JOBSCOPE = 'JobScope';
const CHURN = 'Customer Churn Prediction';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming languages',
    blurb: 'Python first — for analysis, modelling and apps.',
    skills: [
      { name: 'Python', usedIn: [JOBSCOPE, CHURN, YOLO_DET, VMOUSE, MASK, HEART] },
      { name: 'SQL', usedIn: [JOBSCOPE] },
      { name: 'JavaScript' },
      { name: 'HTML & CSS' },
    ],
  },
  {
    id: 'data',
    title: 'Data analysis',
    blurb: 'Cleaning, exploring and visualising data.',
    skills: [
      { name: 'Pandas', usedIn: [JOBSCOPE, CHURN, HEART] },
      { name: 'NumPy', usedIn: [JOBSCOPE, CHURN, HEART, VMOUSE] },
      { name: 'Data cleaning & preprocessing', usedIn: [JOBSCOPE, CHURN, HEART] },
      { name: 'Exploratory data analysis', usedIn: [CHURN, HEART] },
      { name: 'Plotly', usedIn: [JOBSCOPE] },
      { name: 'Matplotlib', usedIn: [CHURN] },
      { name: 'Seaborn', usedIn: [CHURN] },
      { name: 'Power BI' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine learning',
    blurb: 'Classical models, evaluated honestly.',
    skills: [
      { name: 'Scikit-learn', usedIn: [JOBSCOPE, CHURN, HEART] },
      { name: 'Regression', usedIn: [JOBSCOPE] },
      { name: 'Classification', usedIn: [CHURN, HEART] },
      { name: 'Logistic Regression', usedIn: [CHURN] },
      { name: 'K-Nearest Neighbors', usedIn: [HEART] },
      { name: 'Cross-validation', usedIn: [JOBSCOPE] },
      { name: 'Feature scaling', usedIn: [CHURN, HEART] },
      { name: 'Decision Trees' },
      { name: 'Random Forest', usedIn: [CHURN] },
      { name: 'XGBoost' },
    ],
  },
  {
    id: 'ai',
    title: 'AI, vision & NLP',
    blurb: 'Computer vision, text analysis and AI tooling.',
    skills: [
      { name: 'OpenCV', usedIn: [YOLO_DET, VMOUSE, MASK] },
      { name: 'YOLO', usedIn: [YOLO_DET] },
      { name: 'MediaPipe', usedIn: [VMOUSE] },
      { name: 'TensorFlow', usedIn: [MASK] },
      { name: 'TF-IDF & skill extraction', usedIn: [JOBSCOPE] },
      { name: 'Keras' },
      { name: 'PyTorch' },
      { name: 'CNNs' },
      { name: 'Prompt engineering' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    blurb: 'Relational and analytical stores.',
    skills: [
      // CV skill (no project on this site uses it).
      { name: 'MySQL' },
      { name: 'DuckDB', usedIn: [JOBSCOPE] },
    ],
  },
  {
    id: 'tools',
    title: 'Development tools',
    blurb: 'Building, testing and shipping.',
    skills: [
      { name: 'Git & GitHub', usedIn: [JOBSCOPE] },
      { name: 'Streamlit', usedIn: [JOBSCOPE, CHURN] },
      { name: 'Django' },
      { name: 'pytest', usedIn: [JOBSCOPE] },
      { name: 'GitHub Actions CI', usedIn: [JOBSCOPE] },
      { name: 'REST API fundamentals' },
      { name: 'Figma' },
    ],
  },
];

/* ==========================================================================
   Projects
   Sources: job-market-analyzer README, docs/METHODS.md, DEVELOPMENT_LOG.md,
   and a browser check of the hosted demo on 2026-11-15.
   ========================================================================== */
export type Metric = { label: string; value: string; note?: string };

export const featuredProject = {
  id: 'jobscope',
  name: 'JobScope',
  tagline: 'AI-powered job market analyzer',
  summary:
    'An analytics app built on 785,741 real 2023 data-job postings. It shows salary trends, in-demand skills and locations, and tells you which skills you are missing for a target role. The “AI” is explainable: rule-based skill extraction, TF-IDF and a cross-validated regression model, with no LLMs, API keys or paid services.',
  problem:
    'Job postings hold the answers to “what should I learn next?” and “what does this role pay?”, but they’re spread across hundreds of thousands of listings, and only about 4% of them disclose pay. JobScope turns a public dataset into answers you can check, and it shows where the data runs out rather than hiding it.',
  repo: 'https://github.com/aliaffan-dev/job-market-analyzer',
  /** Opened and used in a real browser on 2026-11-15 (Overview, Salary model, Skill gap pages). */
  demo: 'https://job-market-analyzer-cfbthyiqf47cx5happ5mhti.streamlit.app/' as string | null,
  demoVerified: '15 Nov 2026',
  demoNote: 'Hosted on Streamlit Community Cloud with a 10% sample. It may take a few seconds to wake up.',

  features: [
    { title: 'Overview dashboard', text: 'KPIs for postings, roles, companies, countries, remote share and median salary.' },
    { title: 'Job explorer', text: 'Keyword search and filters with TF-IDF relevance ranking and CSV export.' },
    { title: 'Salary intelligence', text: 'Salaries compared by role, seniority, country and remote status. Small groups are flagged.' },
    { title: 'Skill intelligence', text: 'Skill demand ranking, a role × skill heatmap, co-occurrence and monthly trends.' },
    { title: 'Location intelligence', text: 'Postings by country and city, with US state maps of volume and salary.' },
    { title: 'Skill gap analyzer', text: 'Enter or paste your skills to rank roles by coverage and see core, common and niche gaps.' },
    { title: 'Salary model', text: 'Ridge regression checked against baselines, with feature effects and an 80% range.' },
    { title: 'Data pipeline', text: 'Provenance, a data-quality report and a schema reference.' },
  ],
  /** Present in the app; tested locally by the author only — not claimed for the hosted demo. */
  localOnly: [
    { title: 'Resume upload', text: 'Extract skills from a PDF, DOCX or TXT resume, processed in memory.' },
    { title: 'CSV / Parquet import', text: 'Validate a dataset and store it as a new DuckDB dataset.' },
  ],

  stack: ['Python', 'Streamlit', 'pandas', 'NumPy', 'scikit-learn', 'DuckDB', 'Plotly', 'PyArrow', 'pypdf', 'python-docx', 'pytest', 'Ruff', 'GitHub Actions'],

  dataset: {
    source: 'lukebarousse/data_jobs',
    sourceUrl: 'https://huggingface.co/datasets/lukebarousse/data_jobs',
    license: 'Apache-2.0',
    steps: [
      { k: 'Raw postings', v: '785,741', d: 'Jan – Dec 2023' },
      { k: 'Removed', v: '10,489', d: 'Exact and same-day cross-board duplicates, and 1 untitled posting' },
      { k: 'After cleaning', v: '775,252', d: 'Stored in DuckDB with a data-quality report' },
    ],
    methods: [
      'Skills extracted with a controlled-vocabulary taxonomy and negation handling, with an explanation for each match.',
      'TF-IDF relevance ranking in the explorer, and class-based TF-IDF for the title terms that set each role apart.',
      'Ridge regression on log(salary), evaluated with 5-fold cross-validation against simple baselines.',
      'USD is inferred only for US postings and flagged. Estimated (annualised) salaries are only included if you choose to.',
      'A pytest suite of 275 tests (unit, integration and headless UI), with Ruff linting in CI.',
    ],
  },

  metrics: [
    {
      id: 'full',
      title: 'Full dataset',
      context: 'Local build · 775,252 postings',
      items: [
        { label: 'MAE', value: '$26,079', note: 'Per-role median baseline: $30,470' },
        { label: 'R²', value: '0.389', note: 'Baseline: 0.188' },
      ] as Metric[],
    },
    {
      id: 'demo',
      title: 'Hosted demo',
      context: '10% random sample · 78,460 postings',
      items: [
        { label: 'MAE', value: '$27,323', note: 'Median absolute error: $20,977' },
        { label: 'R²', value: '0.33', note: 'Out-of-fold, 1,556 reported US salaries' },
      ] as Metric[],
    },
  ],

  /** Real captures from the repo (docs/images), full dataset, 1440×1000. */
  screenshots: [
    { id: 'overview', label: 'Overview', src: '/projects/jobscope/overview.webp', alt: 'JobScope overview dashboard: headline KPIs, postings by role and postings per month.' },
    { id: 'explorer', label: 'Job explorer', src: '/projects/jobscope/explorer.webp', alt: 'JobScope job explorer: filters, sorting, TF-IDF relevance ranking and the postings table.' },
    { id: 'salary', label: 'Salary', src: '/projects/jobscope/salary.webp', alt: 'JobScope salary intelligence: distribution of reported USD salaries with median and mean marked.' },
    { id: 'skills', label: 'Skills', src: '/projects/jobscope/skills.webp', alt: 'JobScope skill intelligence: skill demand and demand by skill category.' },
    { id: 'gap', label: 'Skill gap', src: '/projects/jobscope/skill_gap.webp', alt: 'JobScope skill gap analyzer: roles ranked for the skills Python, SQL, Excel, Tableau, Power BI and Git.' },
  ],
  screenshotNote:
    'Captured from the running app on the full dataset (775,252 postings). The hosted demo uses the 10% sample, so its counts are about a tenth of these.',
};

/** Smaller project cards. Descriptions from the CV, checked against each repo's code where public. */
export type ProjectCard = {
  name: string;
  text: string;
  stack: string[];
  repo?: string;
  demo?: string;
  /** Optional verified metrics, shown as a compact row. */
  metrics?: { label: string; value: string }[];
  metricsNote?: string;
};

export const moreProjects: ProjectCard[] = [
  {
    name: YOLO_DET,
    text: 'Webcam object detection with YOLOv8. It counts objects in each frame and sounds an alert when a restricted object such as a cell phone or knife appears.',
    stack: ['Python', 'YOLOv8', 'OpenCV'],
    repo: 'https://github.com/aliaffan-dev/object-detection-',
  },
  {
    name: VMOUSE,
    text: 'Hands-free cursor control. Hand landmarks from MediaPipe drive the cursor, and pinch and scroll gestures become clicks and scrolling.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    repo: 'https://github.com/aliaffan-dev/gesture-virtual-mouse',
  },
  {
    name: CHURN,
    // Demo opened and a prediction run in a real browser on 2026-11-15.
    // Metrics from saved outputs in 01_data_exploration.ipynb (cells 36, 41, 73).
    text: 'Predicts which telecom customers will leave, using logistic regression on the IBM Telco dataset (7,043 customers). It beat Random Forest on ROC-AUC, and the threshold was lowered to 6% because a missed churner was assumed to cost 10× a false alarm.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Streamlit', 'Joblib'],
    repo: 'https://github.com/aliaffan-dev/customer-churn-prediction',
    demo: 'https://customer-churn-prediction-kfrwsiqjx64jjnxczoixav.streamlit.app/',
    metrics: [
      { label: 'ROC-AUC', value: '0.84' },
      { label: 'Churn recall', value: '97%' },
      { label: 'Precision', value: '0.37' },
    ],
    metricsNote: 'Test set, 1,409 customers. Recall and precision are at the 6% threshold.',
  },
  {
    name: HEART,
    text: 'EDA and preprocessing on a heart-disease dataset, with feature scaling (StandardScaler) and a K-Nearest Neighbors classifier, evaluated on a held-out test split.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    name: MASK,
    text: 'Detects whether a person is wearing a face mask, from still images or a live webcam feed.',
    stack: ['Python', 'TensorFlow', 'OpenCV'],
  },
];

/* ==========================================================================
   Experience — newest first. Sources: CV (internship, hackathon), certificates
   (Luminar training dates, confirmed by owner 2026-11-15) and
   GitHub repo creation dates (independent projects).
   ========================================================================== */
export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  period: string;
  /** Machine-readable start/end for <time>, YYYY-MM or YYYY-MM-DD. */
  start: string;
  end?: string;
  kind: 'Internship' | 'Training' | 'Independent' | 'Volunteer';
  points: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Independent ML projects',
    org: 'Self-directed',
    period: 'Mar 2026 – Nov 2026',
    start: '2026-03',
    end: '2026-11',
    kind: 'Independent',
    points: [
      'Built JobScope, a 9-page Streamlit analytics app on 775,252 job postings, with a tested data pipeline, explainable NLP and a cross-validated salary model. Deployed it to Streamlit Community Cloud.',
      'Built and deployed a customer churn predictor, choosing its decision threshold by weighing the cost of false positives against false negatives.',
      'Published computer vision projects: real-time YOLOv8 object detection and a MediaPipe gesture-controlled mouse.',
    ],
    tags: ['Python', 'scikit-learn', 'Streamlit', 'DuckDB', 'OpenCV'],
  },
  {
    role: 'Hackathon Mentor & Project Judge',
    org: 'Ansar Women’s College',
    location: 'Perumbilavu, Kerala',
    period: '31 Jul – 1 Aug 2026',
    start: '2026-07-31',
    end: '2026-08-01',
    kind: 'Volunteer',
    points: [
      'Mentored 12 teams through an overnight college hackathon, helping with coding, project ideas and presentation preparation.',
      'Judged the final project presentations on the proposed solution and its implementation.',
    ],
  },
  {
    role: 'Data Science Trainee',
    org: 'Luminar Technolab',
    location: 'Kochi, Kerala',
    period: 'Jul 2025 – Mar 2026',
    start: '2025-07',
    end: '2026-03',
    kind: 'Training',
    points: [
      'An eight-month Data Science and Python training programme, completed with an A+ grade.',
      'Hands-on practice in Python, Pandas, NumPy and SQL through practical projects.',
      'Cleaned and prepared data: handling missing values, removing duplicates and filtering.',
      'Explored datasets and visualised them with Matplotlib and Seaborn (bar, line, histogram, scatter and box plots).',
      'Applied classification and regression with train/test splits, feature scaling and model evaluation.',
      'Built reports with Power BI.',
    ],
    tags: ['Python', 'Pandas', 'SQL', 'Scikit-learn', 'Power BI'],
  },
  {
    role: 'Developer Intern',
    org: 'Softronics',
    period: 'May 2024 – Aug 2024',
    start: '2024-05',
    end: '2024-08',
    kind: 'Internship',
    points: [
      'Python and Django full-stack web development with HTML, CSS, JavaScript and MySQL.',
      'Worked with database integration, Git version control, REST API fundamentals and Figma-based interface design.',
    ],
    tags: ['Python', 'Django', 'MySQL', 'Git'],
  },
];

/* ==========================================================================
   Certifications — details confirmed by the owner from the physical
   certificates (2026-11-15). No credential URLs exist, so none are shown;
   any field left undefined is simply not rendered.
   ========================================================================== */
export type Certification = {
  title: string;
  issuer: string;
  duration?: string;
  grade?: string;
  /** Display text + machine-readable YYYY-MM(-DD) for <time>. */
  completed?: { text: string; iso: string };
  issued?: { text: string; iso: string };
  /** e.g. the institute that delivered training for another issuer. */
  affiliation?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: 'Data Science – Python',
    issuer: 'Luminar Technolab',
    duration: '8 months',
    grade: 'A+',
    completed: { text: 'March 2026', iso: '2026-03' },
    issued: { text: '18 April 2026', iso: '2026-04-18' },
  },
  {
    title: 'Data Science – Python',
    issuer: 'National Council for Technology and Training (NACTET)',
    duration: '6 months',
    grade: 'A+',
    completed: { text: 'January 2026', iso: '2026-01' },
    issued: { text: '23 February 2026', iso: '2026-02-23' },
    affiliation: 'Luminar Technolab',
  },
];

/* ==========================================================================
   Achievements — measurable project results, each with its context.
   ========================================================================== */
export type Achievement = {
  figure: string;
  title: string;
  context: string;
  source: string;
  href?: string;
};

export const achievements: Achievement[] = [
  {
    figure: '14%',
    title: 'Lower salary-prediction error than the baseline',
    context:
      'JobScope’s Ridge model reaches a MAE of $26,079, against $30,470 for predicting each role’s median salary. R² rises from 0.188 to 0.389. Full dataset, 5-fold cross-validation, reported US salaries.',
    source: 'JobScope',
    href: '#projects',
  },
  {
    figure: '775,252',
    title: 'Job postings through a tested data pipeline',
    context:
      'From 785,741 raw 2023 postings, 10,489 duplicates and invalid rows were removed, with a data-quality report kept. The repo has 275 automated tests, and GitHub Actions runs them with Ruff on Python 3.10 and 3.11. The latest run passed.',
    source: 'JobScope',
    href: '#projects',
  },
  {
    figure: '−49%',
    title: 'Illustrative misclassification cost, after threshold tuning',
    context:
      'Lowering the churn threshold from 40% to 6% cut the estimated test-set cost from $282,800 to $145,400, catching 97% of churners at 0.37 precision. The costs are assumptions made for the exercise ($200 per false alarm, $2,000 per missed churner), not real business figures.',
    source: 'Customer Churn Prediction',
    href: '#projects',
  },
  {
    figure: '2',
    title: 'Machine learning apps live on the web',
    context:
      'JobScope and Customer Churn Prediction are deployed on Streamlit Community Cloud. Both were opened and used in a browser on 15 Nov 2026.',
    source: 'Streamlit Cloud',
    href: '#projects',
  },
];

/* ==========================================================================
   Contact
   ========================================================================== */
export const contact = {
  heading: 'Let’s talk about your team’s data.',
  message:
    'I’m looking for Data Scientist, Machine Learning Engineer or AI Engineer internships, full-time or part-time. I can work remotely or relocate anywhere in India, and I can start within a week. Email is the quickest way to reach me, and I’ll reply as soon as I can.',
};


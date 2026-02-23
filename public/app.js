const profileSummary =
  'Machine Learning Engineer with 8+ years of experience deploying end-to-end machine learning solutions in high-growth, customer-facing environments. I work directly with clients and cross-functional stakeholders to translate business needs into measurable outcomes, with focus areas in computer vision, agentic systems, and MLOps and deployment, while maintaining production reliability, ethical AI, and commercial impact.';

const coreFocus = [
  'Computer vision',
  'Agentic systems',
  'MLOps and deployment',
  'Churn prediction',
  'Customer segmentation',
  'Campaign optimization',
  'Digital personalization'
];

const highlights = [
  {
    value: '8+ Years',
    detail: 'Hands-on experience delivering and productionizing ML systems.'
  },
  {
    value: '3 Roles',
    detail: 'Machine Learning Scientist, Associate ML Developer, and Data Scientist.'
  },
  {
    value: 'Cross-Industry',
    detail: 'Worked across telecom, digital advertising, and multi-sector client delivery.'
  },
  {
    value: 'Tech Stack',
    detail: 'Python, Spark, Airflow, AWS, PyTorch, TensorFlow, Scikit-learn, XGBoost.'
  }
];

const experiences = [
  {
    role: 'Machine Learning Scientist',
    company: 'amii',
    location: 'Canada',
    time: 'Aug 2025 - Present',
    summary:
      'Leading the end-to-end research and development lifecycle for industry partners, connecting machine learning techniques to high-value business applications.',
    bullets: [
      'Translate complex business challenges into actionable ML projects with clear data requirements and success metrics.',
      'Provide technical leadership and coaching to client teams to deliver high-performance, ethical AI solutions.',
      'Communicate scientific findings to executive stakeholders while ensuring delivery quality and commercial alignment.'
    ]
  },
  {
    role: 'Associate ML Developer',
    company: 'AltaML',
    location: 'Canada',
    time: 'May 2024 - Aug 2024',
    summary:
      'Collaborated closely with clients to scope objectives, support foundational modeling, and maintain strong business and technical alignment.',
    bullets: [
      'Assisted in researching, developing, and maintaining ML models using supervised, unsupervised, and heuristic approaches.',
      'Supported data collection, preprocessing, feature engineering, model selection, and validation for reliable performance.',
      'Maintained continuous client communication to gather feedback, refine solutions, and keep deliverables aligned with evolving requirements.'
    ]
  },
  {
    role: 'Data Scientist',
    company: 'Ada-Asia',
    location: 'Sri Lanka',
    time: 'Feb 2020 - Apr 2022',
    summary:
      'Built models for product optimization and digital advertising initiatives, processing high-volume data to uncover actionable trends.',
    bullets: [
      'Developed a telco churn prediction model to forecast churn and improve retention strategy and revenue outcomes.',
      'Built a household identity system using cleaned IP data and graph-based algorithms to improve personalization and unlock new revenue opportunities.',
      'Delivered dashboards and stakeholder-ready analysis, and supported production integration of ML models using Python, Spark, and cloud platforms.'
    ]
  }
];

const accomplishments = [
  {
    title: 'Telco Churn Prediction',
    body:
      'Designed a churn model that analyzed customer usage behavior to predict attrition, giving carriers better retention planning and measurable revenue impact.'
  },
  {
    title: 'Household Identity Graph',
    body:
      'Applied data cleaning and graph-based algorithms to map IP activity into a household-level ID framework that strengthened campaign targeting.'
  },
  {
    title: 'Client-Centered ML Delivery',
    body:
      'Ran discovery workshops, scoped project roadmaps, and coached stakeholders through implementation to keep ML work tied to business KPIs.'
  }
];

const skills = [
  {
    title: 'Machine Learning & AI',
    description: 'Development and optimization of applied ML models for real products.',
    tags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Computer Vision', 'Agentic Systems', 'Generative AI']
  },
  {
    title: 'Data & MLOps',
    description: 'Data processing, orchestration, and deployment for scalable ML systems.',
    tags: ['Python', 'Spark', 'Hadoop', 'Airflow', 'AWS', 'Model Deployment']
  },
  {
    title: 'Delivery & Communication',
    description: 'End-to-end execution with clear communication across technical and business teams.',
    tags: ['Project Scoping', 'Stakeholder Alignment', 'Technical Coaching', 'Cross-Functional Collaboration']
  }
];

const education = [
  {
    degree: "Master's Degree in Medical Science",
    school: 'University of Alberta',
    time: 'Jan 2025',
    note: 'Canada'
  },
  {
    degree: "Bachelor's Degree in Electronic & Telecommunication Engineering",
    school: 'University of Moratuwa',
    time: '2020',
    note: 'Sri Lanka'
  }
];

function renderSummary() {
  const summary = document.getElementById('summary-copy');
  if (summary) {
    summary.textContent = profileSummary;
  }
}

function renderCoreFocus() {
  const target = document.getElementById('core-focus-tags');
  if (!target) return;

  target.innerHTML = coreFocus
    .map(item => `<span class="hero-tag">${item}</span>`)
    .join('');
}

function renderHighlights() {
  const target = document.getElementById('highlights');
  if (!target) return;

  target.innerHTML = highlights
    .map(
      item => `
        <article class="highlight-card">
          <h3>${item.value}</h3>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join('');
}

function renderExperience() {
  const target = document.getElementById('experience-list');
  if (!target) return;

  target.innerHTML = experiences
    .map(
      item => `
        <article class="timeline-item">
          <div class="timeline-top">
            <div class="timeline-role">${item.role}</div>
            <div class="timeline-time">${item.time}</div>
          </div>
          <p class="timeline-place">${item.company} - ${item.location}</p>
          <p class="timeline-summary">${item.summary}</p>
          <ul class="timeline-list">
            ${item.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function renderAccomplishments() {
  const target = document.getElementById('accomplishments-list');
  if (!target) return;

  target.innerHTML = accomplishments
    .map(
      item => `
        <article class="accomplishment-card">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join('');
}

function renderSkills() {
  const target = document.getElementById('skills-grid');
  if (!target) return;

  target.innerHTML = skills
    .map(
      item => `
        <article class="skill-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="skill-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        </article>
      `
    )
    .join('');
}

function renderEducation() {
  const target = document.getElementById('education-list');
  if (!target) return;

  target.innerHTML = education
    .map(
      item => `
        <article class="education-card">
          <h3>${item.degree}</h3>
          <p>${item.school}</p>
          <p>${item.time}</p>
          <p>${item.note}</p>
        </article>
      `
    )
    .join('');
}

function renderFooterYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

function setupReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length) return;

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    }
  );

  revealItems.forEach(item => observer.observe(item));
}

renderSummary();
renderCoreFocus();
renderHighlights();
renderExperience();
renderAccomplishments();
renderSkills();
renderEducation();
renderFooterYear();
setupReveal();

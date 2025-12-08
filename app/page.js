'use client';

const contact = {
  name: 'Alejandro De La Mora',
  role: 'AI Solutions Architect & Salesforce Developer',
  phone: '+1 437 243 3693',
  email: 'alex@seshwithfriends.org',
  linkedin: 'https://www.linkedin.com/in/amorac/',
  website: 'https://www.eloruga.com/about/index.html',
  github: 'https://github.com/Oruga420',
};

const summaryText =
  'AI Solutions Architect and Salesforce Developer with a proven track record of bridging the gap between platform engineering and Generative AI. Expert in designing RAG pipelines, deploying Agentforce solutions, and architecting autonomous workflows across Salesforce, GCP, AWS, and Vercel. Successfully drove AI adoption from 47% to 97% at Assent and architected over 120 GenAI applications. Passionate about governance, scalability, and building systems that save thousands of operational hours.';

const expertise = [
  'Salesforce AI',
  'Agentforce',
  'Apex',
  'Lightning Web Components (LWC)',
  'Flow',
  'Google Cloud Platform (GCP)',
  'AWS',
  'Vercel',
  'Next.js',
  'RAG Pipelines',
  'Vector Databases',
  'LLM Integration',
  'Agentic Workflows',
  'Salesforce Certified AI Associate',
  'Salesforce Certified Administrator',
];

const experiences = [
  {
    title: 'AI Solutions Architect',
    company: 'Assent',
    timeframe: 'February 2025 - Present | Canada',
    bullets: [
      'Architected and deployed secure, auditable GenAI solutions within a regulated compliance platform, utilizing Salesforce, Zapier, and a custom stack on GCP/AWS/Vercel.',
      'Impact: Saved the company over 20,000 man-hours annually by replacing manual tasks with Agentic Workflows and GenAI automations.',
      'Driven internal AI tool adoption from 47% to 97% through strategic implementation of custom MCP tools and governance frameworks.',
      'Designed live Retrieval-Augmented Generation (RAG) connections into compliance data, enabling autonomous agents to perform complex multi-step processes safely.',
    ],
  },
  {
    title: 'AI Solutions Architect',
    company: 'Sesh | Ai Solutions',
    timeframe: 'November 2021 - Present | Toronto, Ontario',
    bullets: [
      'Designed the architecture for over 120 GenAI applications and deployed more than 90 production chatbots for diverse business needs.',
      'Lead a community of 100+ members, delivering technical training on GenAI workflows and automation strategies.',
      'Built AI-ready web architectures integrating marketing sites with chatbots and backend automation for immediate lead conversion.',
    ],
  },
  {
    title: 'Salesforce Consultant',
    company: 'Online Business Systems',
    timeframe: 'June 2024 - November 2024 | Toronto, Ontario',
    bullets: [
      'Led the implementation of Salesforce Agentforce and Einstein Copilot capabilities, defining use cases and configuring prompts/actions for safe data access.',
      'Bridged the gap between Sales, Service, and Marketing (MCAE) to deploy end-to-end automation and scoring models.',
      'Developed reusable configuration patterns to accelerate client onboarding and ensure maintainable AI-driven architectures.',
    ],
  },
  {
    title: 'Salesforce Manager',
    company: 'Globalization Partners',
    timeframe: 'November 2018 - November 2023 | Ontario, Canada',
    bullets: [
      'Managed a Salesforce org with 1,000+ licenses, overseeing the evolution from standard configuration to complex AI-assisted workflows.',
      "Pioneered early GenAI initiatives, including 'GIA' (internal chatbot) and LLM-powered Jira ticket handling systems.",
      'Enforced data security and governance best practices while scaling the platform to support rapid global expansion.',
    ],
  },
];

const education = {
  program: 'LISI, Ingenieria en Sistemas',
  school: 'Universidad Marista de MAcrida',
  years: '2004 - 2007',
};

export default function Home() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <main className="page">
      <div className="floating-bubbles" aria-hidden="true">
        <span className="bubble b1" />
        <span className="bubble b2" />
        <span className="bubble b3" />
        <span className="bubble b4" />
      </div>

      <div className="resume">
        <header className="hero">
          <div className="identity">
            <p className="role">{contact.role}</p>
            <h1>{contact.name}</h1>
            <div className="summary-card">
              <p>{summaryText}</p>
            </div>
            <button className="print-btn" onClick={handlePrint}>
              Download as PDF
            </button>
          </div>

          <div className="contact-card">
            <div className="contact-title">Contact</div>
            <a href={`tel:${contact.phone}`} className="contact-item">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="contact-item">
              {contact.email}
            </a>
            <a href={contact.linkedin} className="contact-item" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={contact.website} className="contact-item" target="_blank" rel="noreferrer">
              Website
            </a>
            <a href={contact.github} className="contact-item" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>

        <section className="section">
          <div className="section-title">Areas of Expertise</div>
          <div className="tags">
            {expertise.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title">Work Experience</div>
          <div className="experience-list">
            {experiences.map((exp) => (
              <article className="experience-card" key={`${exp.company}-${exp.title}`}>
                <div className="experience-header">
                  <div>
                    <h3>
                      {exp.title} | {exp.company}
                    </h3>
                    <p className="timeframe">{exp.timeframe}</p>
                  </div>
                </div>
                <ul>
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title">Education</div>
          <div className="education-card">
            <h3>{education.program}</h3>
            <p className="timeframe">
              {education.school} | {education.years}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

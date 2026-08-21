import {
  PersonalInfo,
  TechCategory,
  ExperienceItem,
  AchievementItem,
  ProjectItem,
} from '../types/portfolio';

export interface CodeSnippet {
  language: string;
  filename: string;
  code: string;
  description: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[];
}

export const personalInfo: PersonalInfo = {
  name: "Yogesh E",
  tagline: "Software Development Engineer",
  roles: [
    "Founding Backend Engineer",
    "AI Infrastructure Builder",
    "Full Stack Developer",
    "Software Development Engineer",
  ],
  summary:
    "Software Development Engineer with experience building scalable backend systems, AI infrastructure, and production-grade APIs using Python, FastAPI, SQLAlchemy, PostgreSQL, and Docker. Skilled in designing clean, maintainable architectures and integrating LLM and OCR pipelines into real products. Strong foundation in Data Structures & Algorithms, distributed systems, OOP, and system design, with a track record of taking projects from concept to deployment.",
  location: "Bangalore, India",
  email: "eyogesh104@gmail.com",
  phone: "+91-8050255818",
  github: "https://github.com/Yogesh10217",
  linkedin: "https://www.linkedin.com/in/eyogesh/",
  githubUsername: "Yogesh10217",
};

export const terminalCommands: Record<string, string | string[]> = {
  help: [
    "Available YogeshOS Commands:",
    "  skills     - View technical stack & core competencies",
    "  projects   - List flagship AI & backend engineering projects",
    "  experience - View professional work timeline (Krama AI, KPMG)",
    "  patent     - View patented AI document analysis architecture details",
    "  metrics    - Display live system & academic metrics HUD",
    "  contact    - Get direct email, phone, GitHub & LinkedIn info",
    "  clear      - Clear terminal screen",
  ],
  skills: [
    "⚡ TECHNICAL ARSENAL:",
    "  • Backend: FastAPI, Python, Node.js, Express.js, SQLAlchemy, REST APIs, Microservices",
    "  • Languages: Python, C++, JavaScript, TypeScript, Java, SQL",
    "  • Databases: PostgreSQL, MongoDB, MySQL",
    "  • DevOps & Cloud: Docker, Git, GitHub, Linux, Postman, CI/CD",
    "  • AI & ML: LLM Orchestration, Prompt Engineering, OCR Pipelines, Gemini API",
    "  • Core CS: DSA, System Design, OOP, DBMS, OS, Computer Networks",
  ],
  projects: [
    "🚀 FLAGSHIP PROJECTS:",
    "  1. LLM Inference Engine (Open Source)",
    "     Multi-provider LLM orchestration (OpenAI + Ollama) with Factory Pattern & SSE streaming.",
    "  2. AI Research Tool & Fake News Detection (Patented SaaS)",
    "     Semantic verification & NLP content classification powered by Google Gemini API.",
    "  3. Subscription Tracker (Deployed Backend)",
    "     JWT authenticated management platform with MongoDB dynamic schemas & automated emails.",
  ],
  experience: [
    "💼 WORK EXPERIENCE:",
    "  • Krama AI | Founding Backend Engineer (Dec 2025 – Present)",
    "    End-to-end claims platform with FastAPI, SQLAlchemy, PostgreSQL, Docker & OCR.",
    "  • KPMG | ServiceNow Developer Intern (Feb 2026 – Present)",
    "    Enterprise ITSM workflows, Flow Designer, Business Rules & REST integrations.",
    "  • DSCE | B.E. Information Science (2022 – 2026)",
    "    CGPA: 8.9 / 10 | Focus on Backend Systems & Distributed Architectures.",
  ],
  patent: [
    "💡 PATENTED INTELLECTUAL PROPERTY:",
    "  Title: Intelligent Document Analysis & Semantic Verification Workflow",
    "  Status: Patent Filed (AI Architecture)",
    "  Innovation: Combining multi-modal NLP pipelines with LLM verification for automated fact checking.",
  ],
  metrics: [
    "📊 SYSTEM METRICS HUD:",
    "  • Academic CGPA: 8.9 / 10",
    "  • Certifications: ServiceNow CAD & CSA",
    "  • Patents: 1 Filed",
    "  • Backend Architecture: 100% Async FastAPI Endpoints",
    "  • Containerization: Fully Dockerized Microservices",
  ],
  contact: [
    "📬 CONTACT INFORMATION:",
    "  • Email: eyogesh104@gmail.com",
    "  • Phone: +91-8050255818",
    "  • Location: Bangalore, India",
    "  • GitHub: https://github.com/Yogesh10217",
    "  • LinkedIn: https://www.linkedin.com/in/eyogesh/",
  ],
};

export const techStack: TechCategory[] = [
  {
    category: "Backend Engineering",
    icon: "SERVER",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "SQLAlchemy", "REST APIs", "Microservices"],
  },
  {
    category: "Languages",
    icon: "CODE",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    category: "Databases & Storage",
    icon: "DB",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Storage Abstraction"],
  },
  {
    category: "DevOps & Infrastructure",
    icon: "DEPLOY",
    skills: ["Docker", "Git", "GitHub", "Linux", "Postman", "CI/CD"],
  },
  {
    category: "Frontend & UI",
    icon: "UI",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "AI & ML Systems",
    icon: "AI",
    skills: ["LLM Inference", "Prompt Engineering", "OCR Pipelines", "Google Gemini API"],
  },
  {
    category: "Core CS Fundamentals",
    icon: "CODE",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "Dec 2025 – Present",
    company: "Krama AI",
    role: "Founding Backend Engineer",
    type: "Remote",
    description:
      "Built an AI-powered insurance claims processing platform end-to-end using FastAPI, SQLAlchemy, PostgreSQL, and Docker. Designed a scalable storage abstraction layer for secure ingestion and lifecycle management, and built OCR/document-conversion pipelines. Developed REST APIs and asynchronous workflows with clean architecture and dependency injection. Strengthened backend reliability through structured logging and automated testing.",
    tech: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "Python", "OCR"],
    highlight: true,
  },
  {
    year: "Feb 2026 – Present",
    company: "KPMG",
    role: "ServiceNow Developer Intern",
    type: "Bangalore, India",
    description:
      "Customized enterprise ITSM workflows for client organizations using Flow Designer and server-side scripting. Built Business Rules, Script Includes, UI Policies, and Service Portal components. Integrated ServiceNow with external systems via REST APIs, and partnered with cross-functional teams.",
    tech: ["ServiceNow", "Flow Designer", "JavaScript", "REST APIs"],
    highlight: true,
  },
  {
    year: "2022 – 2026",
    company: "Dayananda Sagar College of Engineering",
    role: "B.E. Information Science & Engineering",
    type: "Education (CGPA: 8.9/10)",
    description:
      "Information Science & Engineering with a strong focus on backend systems, distributed architectures, and AI integrations. Maintained excellent academic standing.",
    tech: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
    highlight: false,
  },
  {
    year: "2020 – 2022",
    company: "Presidency PU College",
    role: "PUC (PCMB)",
    type: "Education (94%)",
    description:
      "Pre-University College in Physics, Chemistry, Mathematics, and Biology (PCMB) - Sira, Tumkur.",
    tech: [],
    highlight: false,
  },
];

export const achievements: AchievementItem[] = [
  {
    icon: "CAD",
    title: "ServiceNow CAD",
    subtitle: "Certified Application Developer",
  },
  {
    icon: "CSA",
    title: "ServiceNow CSA",
    subtitle: "Certified System Administrator",
  },
  {
    icon: "PAT",
    title: "Filed a Patent",
    subtitle: "AI Architecture",
  },
  {
    icon: "GPA",
    title: "CGPA 8.9/10",
    subtitle: "Academic Excellence",
  },
];

export const codeSnippets: CodeSnippet[] = [
  {
    language: "python",
    filename: "llm_factory.py",
    description: "Provider Factory Pattern for Multi-Provider LLM Orchestration",
    code: `from abc import ABC, abstractmethod
from typing import AsyncGenerator

class BaseLLMProvider(ABC):
    @abstractmethod
    async def stream_inference(self, prompt: str) -> AsyncGenerator[str, None]:
        pass

class OpenAIProvider(BaseLLMProvider):
    async def stream_inference(self, prompt: str) -> AsyncGenerator[str, None]:
        # Stream response chunks via SSE
        yield "Chunk from OpenAI API..."

class OllamaProvider(BaseLLMProvider):
    async def stream_inference(self, prompt: str) -> AsyncGenerator[str, None]:
        # Stream response chunks locally
        yield "Chunk from local Ollama model..."

class ProviderFactory:
    _registry = {
        "gpt-4o": OpenAIProvider,
        "llama-3": OllamaProvider,
    }

    @classmethod
    def get_provider(cls, model_id: str) -> BaseLLMProvider:
        provider_cls = cls._registry.get(model_id)
        if not provider_cls:
            raise ValueError(f"Model {model_id} not registered")
        return provider_cls()`
  },
  {
    language: "python",
    filename: "fastapi_service.py",
    description: "FastAPI Dependency Injection & Storage Abstraction",
    code: `from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel

app = FastAPI(title="Claims Processing Engine", version="1.0.0")

class ClaimIngestRequest(BaseModel):
    policy_id: str
    document_url: str

@app.post("/api/v1/claims/process", status_code=status.HTTP_202_ACCEPTED)
async def process_claim(
    payload: ClaimIngestRequest,
    db: AsyncSession = Depends(get_db_session),
):
    # Asynchronous pipeline dispatch
    task_id = await dispatch_ocr_pipeline(payload.document_url, db)
    return {"status": "processing", "task_id": task_id}`
  },
  {
    language: "docker",
    filename: "docker-compose.yml",
    description: "Containerized Backend Architecture & PostgreSQL Service",
    code: `version: '3.8'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql+asyncpg://postgres:pass@db:5432/claims_db
      - LOG_LEVEL=INFO
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: claims_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: pass
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:`
  }
];

export const projects: ProjectItem[] = [
  {
    id: "llm-inference-engine",
    title: "LLM Inference Engine",
    subtitle: "Multi-Provider LLM Orchestration Platform",
    description:
      "Designed a modular, multi-provider LLM inference platform (OpenAI + Ollama) using a Provider Factory, Request Router, and Model Registry, with streaming APIs, structured logging, and health monitoring.",
    longDescription:
      "Containerized the platform with Docker and set up CI-ready automated testing infrastructure. Implemented provider abstraction, streaming APIs, dependency injection, structured logging, and observability middleware.",
    featured: true,
    status: "Open Source",
    type: "AI Infrastructure",
    github: "https://github.com/Yogesh10217",
    demo: null,
    tech: ["Python", "FastAPI", "Docker", "SQLAlchemy"],
    features: [
      "Provider Factory & Model Registry",
      "Real-time streaming APIs",
      "Dependency Injection",
      "Structured logging & Observability",
      "Dockerized testing infrastructure",
    ],
    architecture: [
      { step: "01", label: "Client Request", desc: "Incoming LLM API request", icon: "REQ" },
      { step: "02", label: "Request Router", desc: "Routes by model & priority", icon: "ROU" },
      { step: "03", label: "Provider Factory", desc: "Instantiates correct provider", icon: "FAC" },
      { step: "04", label: "Model Registry", desc: "Maps model IDs to providers", icon: "REG" },
      { step: "05", label: "LLM Provider", desc: "OpenAI / Ollama / Gemini", icon: "LLM" },
    ],
    challenges: "Implementing consistent streaming behavior across providers that have different SSE implementations required a unified streaming adapter abstraction.",
    learnings: "The Factory + Registry pattern is extremely powerful for extensible systems. Adding a new LLM provider requires zero changes to existing routing logic.",
    decisions: [
      {
        title: "Why a Provider Factory pattern?",
        reason:
          "The Factory pattern allows adding new LLM providers by implementing a single interface — zero changes to the routing or streaming layers.",
      },
      {
        title: "Why SQLAlchemy?",
        reason:
          "Used for robust configuration management and logging state interactions in a relational database, providing ACID guarantees for registry data.",
      },
    ],
    metrics: ["Multiple providers unified", "Dynamic registry", "Streaming API"],
    col1Images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85"
    ],
    col2Image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    id: "ai-research-tool",
    title: "AI Research Tool & Fake News Detection",
    subtitle: "Patented Content Verification SaaS",
    description:
      "Built a SaaS platform combining AI-assisted academic research with fake news detection, using NLP and the Google Gemini API for content classification and semantic verification.",
    longDescription:
      "Filed a patent for the platform's architecture and intelligent document-analysis workflow. Implemented AI-powered content classification and semantic verification workflows.",
    featured: true,
    status: "Patented SaaS",
    type: "AI & NLP",
    github: "https://github.com/Yogesh10217",
    demo: null,
    tech: ["Node.js", "TypeScript", "Gemini API"],
    features: [
      "AI-assisted academic research",
      "Fake news detection via NLP",
      "Content classification workflow",
      "Semantic verification",
      "Patented intelligent document analysis architecture",
    ],
    architecture: [
      { step: "01", label: "Input", desc: "Article or document submitted", icon: "INP" },
      { step: "02", label: "NLP Processing", desc: "Extracting key semantics", icon: "NLP" },
      { step: "03", label: "Gemini API", desc: "Advanced semantic verification", icon: "API" },
      { step: "04", label: "Classification", desc: "Scoring & validation", icon: "CLS" },
      { step: "05", label: "Result", desc: "Verification report", icon: "OUT" },
    ],
    challenges: "Handling large documents and accurately classifying nuanced or complex fake news scenarios without high false positives.",
    learnings: "Prompt engineering with Gemini is highly nuanced; semantic workflows require careful multi-step validation.",
    decisions: [
      {
        title: "Why Google Gemini API?",
        reason:
          "Gemini offered superior multi-modal and semantic understanding capabilities, essential for verifying academic texts and detecting misinformation.",
      },
      {
        title: "Why patent the architecture?",
        reason:
          "The specific workflow combining NLP pipelines with LLM verification was novel enough to warrant protecting the intellectual property.",
      },
    ],
    metrics: ["Patented Architecture", "AI Verification", "High Accuracy"],
    col1Images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85"
    ],
    col2Image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    id: "subscription-tracker",
    title: "Subscription Tracker",
    subtitle: "Automated Management System",
    description:
      "Built a subscription management platform with secure JWT authentication, automated renewal reminders, and email notifications.",
    longDescription:
      "Designed scalable MongoDB schemas and implemented robust authentication, authorization, and background scheduling workflows. Improved reliability through secure password encryption, validation, and comprehensive error handling.",
    featured: true,
    status: "Deployed",
    type: "Backend Systems",
    github: "https://github.com/Yogesh10217",
    demo: null,
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Nodemailer"],
    features: [
      "JWT-based authentication system",
      "Bcrypt password encryption",
      "Automated email reminders via Nodemailer",
      "Scalable MongoDB schema design",
      "Comprehensive error handling",
    ],
    architecture: [
      { step: "01", label: "Auth", desc: "JWT & bcrypt verification", icon: "AUTH" },
      { step: "02", label: "API", desc: "Express.js REST endpoints", icon: "API" },
      { step: "03", label: "Database", desc: "MongoDB dynamic schema", icon: "DB" },
      { step: "04", label: "Workflows", desc: "Background scheduling", icon: "JOB" },
      { step: "05", label: "Email", desc: "Nodemailer notifications", icon: "MAIL" },
    ],
    challenges: "Designing a database schema that efficiently handles varying subscription cycles (monthly, yearly, custom) while allowing fast queries for upcoming renewals.",
    learnings: "Properly indexing MongoDB collections based on query patterns drastically improves the performance of background jobs searching for due subscriptions.",
    decisions: [
      {
        title: "Why Node.js & Express?",
        reason:
          "The non-blocking I/O model of Node.js is perfect for handling many concurrent API requests and lightweight background tasks like sending emails.",
      },
      {
        title: "Why MongoDB?",
        reason:
          "The flexible document model allows for storing varying metadata associated with different types of subscriptions without strict schema migrations.",
      },
    ],
    metrics: ["JWT Auth", "Background Workflows", "Dynamic Schema"],
    col1Images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85"
    ],
    col2Image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  },
];

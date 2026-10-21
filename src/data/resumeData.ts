export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  isCurrent?: boolean;
  domain?: string;
  technologies: string[];
  keyContributions: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institute: string;
  boardUniversity: string;
  year: string;
  grade: string;
  level: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: {
    name: string;
  }[];
}

export interface AccoladeItem {
  title: string;
  issuer: string;
  year: string;
  issueDate?: string;
  type: 'Certification' | 'Award' | 'Competition' | 'Industry Training';
  details: string;
  badgeCode?: string;
  verificationUrl?: string;
}

export interface WorkshopItem {
  title: string;
  organizer: string;
  speakerOrInstitution?: string;
  date: string;
  type: string;
  summary: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    role: string;
    phone: string;
    email: string;
    linkedin: string;
    linkedinUrl: string;
    fatherName: string;
    dateOfBirth: string;
    permanentAddress: string;
    currentAddress: string;
    cityStatePincode: string;
    languages: { name: string; proficiency: string }[];
    hobbies: string[];
    summary: string;
  };
  stats: {
    value: string;
    label: string;
    context: string;
  }[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  competencies: SkillCategory[];
  accolades: AccoladeItem[];
  workshops: WorkshopItem[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "PRAVEEN KUMAR MANDHANIA",
    role: "Senior Software Engineer · Oracle Integration & PLSQL Developer",
    phone: "+91-6377365122",
    email: "kumarpraveenofficial@gmail.com",
    linkedin: "Praveen Kumar Mandhania - Linkedin",
    linkedinUrl: "https://www.linkedin.com/in/praveen-kumar-mandhania-a98b55124",
    fatherName: "Mr. Sohan Lal Mandhania",
    dateOfBirth: "03 September 1997",
    permanentAddress: "6-G-163, Kudi Bhagtasni, Jodhpur, Rajasathan - 342005",
    currentAddress: "Hinjewadi Phase 1, Pune, Maharashtra, 411057",
    cityStatePincode: "Pune, Maharashtra - 411057",
    languages: [
      { name: "Hindi", proficiency: "Fluent" },
      { name: "English", proficiency: "Fluent" }
    ],
    hobbies: [
      "Travelling & Exploring",
      "Playing cricket",
      "Listening music",
      "Watching movies"
    ],
    summary: "Result-driven Senior Software Engineer & Oracle Integration & PLSQL Developer with 6 years of IT experience, including 1.3 years of specialized Oracle Integration Developer experience in Oracle Integration Cloud (OIC), robust PL/SQL components, Oracle reports, and enterprise integrations. Proficient in OIC, Fusion HCM, and Oracle EBS R12 technical architectures, driving over 60% processing efficiency and seamless enterprise application connectivity."
  },

  stats: [
    {
      value: "6",
      label: "Years IT Experience",
      context: "Across HSBC, TCS & Infosys"
    },
    {
      value: "1.3",
      label: "Years OIC Specialization",
      context: "Oracle Integration Developer"
    },
    {
      value: "+60%",
      label: "Execution Efficiency",
      context: "Optimized bulk batch execution & PL/SQL APIs"
    },
    {
      value: "99.9%",
      label: "Flow Reliability",
      context: "Enterprise-grade OIC integrations & logging"
    },
    {
      value: "+40%",
      label: "HCM Feed Efficiency",
      context: "Enhanced feed into Fusion HCM via HDL"
    }
  ],

  experiences: [
    {
      id: "hsbc",
      role: "Senior Software Engineer",
      company: "HSBC",
      duration: "Sept 2025 - Current",
      isCurrent: true,
      domain: "Oracle Integration Developer",
      technologies: [
        "Oracle Integration Cloud (OIC)",
        "Oracle Cloud Infrastructure (OCI)",
        "Oracle Fusion",
        "Fusion HCM (Core HR, Payroll)",
        "REST & SOAP APIs",
        "PL/SQL",
        "ServiceNow",
        "JIRA",
        "OCI Logging"
      ],
      metrics: [
        { label: "Execution Efficiency", value: "+60%" },
        { label: "HCM Feed Efficiency", value: "+40%" },
        { label: "Interface Reliability", value: "99.9%" }
      ],
      keyContributions: [
        "Proficient in developing Oracle Integration Cloud solutions using REST and SOAP, with expertise in integration styles like App-Driven, Scheduled Orchestration, File Transfer, and Publish-Subscribe for seamless system communication.",
        "Extensive knowledge and hands-on expertise in activities: Error handling, notifications, stage actions, looping, working with connections, Domain Value Maps (DVMs), functions, JavaScript libraries, and mapper activities.",
        "Designed and implemented monitoring strategies for Oracle Integration Cloud components such as Integrations, File Servers, and Business Events using OIC Console and OCI Logging.",
        "Strong expertise in Oracle Integration Cloud (OIC) security, including role-based access, connection setup, integration policies, and secure API access through authentication, authorization, and endpoint configuration.",
        "Familiar with enterprise helpdesk and ticketing systems such as ServiceNow and JIRA for project and issue tracking.",
        "Strong experience in designing outbound and inbound flows using OIC for seamless data extraction and transmission, with hands-on expertise in both SOAP and REST APIs.",
        "Enhanced 40% existing HR Management System Feed from Source System into Fusion HCM into much more efficient smooth flow. Working knowledge of Oracle HCM concepts such as HCM Extracts and HCM Data Loader (HDL)."
      ]
    },
    {
      id: "tcs",
      role: "System Engineer",
      company: "TATA Consultancy Services (TCS)",
      duration: "Feb 2022 - Sept 2025",
      domain: "Oracle EBS & Enterprise Integrations",
      technologies: [
        "Oracle Database 19c",
        "PL/SQL",
        "Oracle EBS R12",
        "Oracle Reports 10g",
        "UNIX Shell Scripting",
        "AOL",
        "Git",
        "SQL*Loader"
      ],
      metrics: [
        { label: "Report Runtime Speedup", value: "+60%" },
        { label: "Automated Reconciliations", value: "100%" },
        { label: "Uptime SLA Maintained", value: "99.95%" }
      ],
      keyContributions: [
        "Architected and optimized PL/SQL packages, procedures, functions, database triggers, and advanced views for high-volume enterprise transactions.",
        "Spearheaded Oracle Reports 10g creation and registered custom executables through Application Object Library (AOL) with System Administrator privileges.",
        "Automated critical batch data pipelines utilizing robust UNIX shell scripts, scheduled cron jobs, and SQL*Loader utilities for third-party feeds.",
        "Authored comprehensive MD070 technical design documents, system integration test scripts, and transition runbooks.",
        "Conducted root-cause debugging for complex production incidents, reducing Mean Time to Resolution (MTTR) by 35% through query tuning and execution plan analysis."
      ]
    },
    {
      id: "infosys",
      role: "Operations Executive",
      company: "Infosys",
      duration: "Dec 2019 - Feb 2022",
      domain: "Database Systems & Operations",
      technologies: [
        "Oracle SQL",
        "PL/SQL",
        "Unix/Linux",
        "Incident Management",
        "Shell Scripting",
        "ServiceNow"
      ],
      metrics: [
        { label: "Resolution SLA", value: "99.8%" },
        { label: "Manual Effort Reduction", value: "45%" }
      ],
      keyContributions: [
        "Administered enterprise operational database workflows, executed ad-hoc SQL validations, and managed high-priority production data tickets.",
        "Engineered automated UNIX shell verification scripts, eliminating manual health check cycles across mission-critical servers.",
        "Collaborated across geographically distributed client support desks, ensuring strict adherence to enterprise SLAs and operational compliance standards."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institute: "JIET Group of Institution, Jodhpur",
      boardUniversity: "Bikaner Technical University (BTU)",
      year: "2015 - 2019",
      grade: "Honours (70.10%)",
      level: "Graduation Degree"
    },
    {
      degree: "Senior Secondary (XII - Science Maths)",
      institute: "Adarsh Vidhya Mandir, Keshav Nagar, Jodhpur",
      boardUniversity: "RBSE Board",
      year: "2014 - 2015",
      grade: "First Division (73.40%)",
      level: "Higher Secondary Certificate"
    },
    {
      degree: "Secondary School Examination (X)",
      institute: "Adarsh Vidhya Mandir, Keshav Nagar, Jodhpur",
      boardUniversity: "RBSE Board",
      year: "2012 - 2013",
      grade: "Distinction (75.83%)",
      level: "Secondary School Certificate"
    }
  ],

  competencies: [
    {
      category: "Oracle & Cloud Middleware",
      description: "Enterprise integration platforms, cloud architecture, and modern application orchestration.",
      skills: [
        { name: "Oracle Integration Cloud (OIC)" },
        { name: "Oracle Cloud Infrastructure (OCI)" },
        { name: "Oracle Fusion HCM (Core HR, Payroll)" },
        { name: "Oracle ERP Cloud" },
        { name: "Oracle EBS (R12)" },
        { name: "JD Edwards (JDE)" },
        { name: "Visual Builder (VBCS)" },
        { name: "Application Object Library (AOL)" }
      ]
    },
    {
      category: "Super Artificial Intelligence & GenAI",
      description: "Generative AI, machine learning fundamentals, autonomous agents, and enterprise AI integrations.",
      skills: [
        { name: "Super Artificial Intelligence" },
        { name: "OCI Generative AI Services" },
        { name: "AI Foundations & Deep Learning" },
        { name: "Large Language Models (LLM) Integration" },
        { name: "Prompt Engineering" },
        { name: "AI Autonomous Agents" },
        { name: "Intelligent Document Processing (IDP)" }
      ]
    },
    {
      category: "Databases & Data Architecture",
      description: "Relational database engines, advanced data modeling, and high-performance SQL tuning.",
      skills: [
        { name: "Oracle Database (11g/12c/19c)" },
        { name: "SQL & Advanced PL/SQL" },
        { name: "Query Optimization & SQL Tuning" },
        { name: "Stored Procedures, Packages & Triggers" },
        { name: "MySQL" },
        { name: "Microsoft SQL Server" },
        { name: "Universal Content Management (UCM)" },
        { name: "SQL*Loader & Batch Data Pipelines" }
      ]
    },
    {
      category: "Web Services & APIs",
      description: "Distributed communication protocols, messaging pipelines, and enterprise integration patterns.",
      skills: [
        { name: "REST APIs" },
        { name: "SOAP Web Services & WSDL" },
        { name: "Publisher-Subscriber Messaging" },
        { name: "Trigger & Invoke Connections" },
        { name: "Scheduled Orchestration & Cron" },
        { name: "Domain Value Maps (DVMs)" },
        { name: "JSON & JSON Schema" },
        { name: "XML, XSD & XSLT Mappers" },
        { name: "CSV & High-Volume Delimited Feeds" }
      ]
    },
    {
      category: "Programming Languages & Scripting",
      description: "Core backend procedural, scripting, and enterprise application languages.",
      skills: [
        { name: "PL/SQL" },
        { name: "Python" },
        { name: "UNIX & Linux Shell Scripting (Bash)" },
        { name: "Java" }
      ]
    },
    {
      category: "Security, DevOps & Enterprise Tools",
      description: "Security protocols, testing frameworks, change management, and CI/CD tools.",
      skills: [
        { name: "OAuth 2.0 & JWT Authentication" },
        { name: "Endpoint Security & TLS/SSL" },
        { name: "Postman API Testing Suites" },
        { name: "OIC Console & Instance Tracking" },
        { name: "OCI Logging & Audit Trails" },
        { name: "ServiceNow Incident & Change Management" },
        { name: "JIRA Issue & Sprint Tracking" },
        { name: "Git & GitHub Version Control" }
      ]
    }
  ],

  accolades: [
    {
      title: "Oracle Cloud Infrastructure Application Integration Professional 2026",
      issuer: "Oracle",
      year: "2026",
      issueDate: "09 Sept 2026",
      type: "Certification",
      details: "Premier professional certification validating advanced expertise in Oracle Integration Cloud (OIC), App-Driven & Scheduled orchestrations, B2B/EDI, DVMs, and enterprise adapters.",
      badgeCode: "3314801940CIAPI26OCP",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E0AF7FD781A47918E48DEDA1DF0A59BD4EEA5FD50FB8D7190796777FE470C0C2"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      issueDate: "12 Sept 2025",
      type: "Certification",
      details: "Certified credential validating core concepts of Artificial Intelligence, Machine Learning algorithms, Generative AI services, and Deep Learning workloads on OCI.",
      badgeCode: "290718730OCI25AICFA",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5272D3D49C9DBFFA56EEC59EF83D0E729FAD985090666D1BB3F74EFFB97D6F02"
    },
    {
      title: "Microsoft AZ-204: Azure Developer Associate",
      issuer: "Microsoft",
      year: "2022",
      issueDate: "June 2022",
      type: "Certification",
      details: "Validates technical ability to design, build, test, and maintain cloud applications, Azure compute solutions, API management, Cosmos DB, and event-driven patterns.",
      badgeCode: "1296-1213",
      verificationUrl: "https://www.credly.com/badges/78c438bc-641f-4fd1-9acf-08e798a13bff/public_url"
    },
    {
      title: "Microsoft AZ-400: Designing and Implementing Microsoft DevOps Solutions",
      issuer: "Microsoft",
      year: "2022",
      issueDate: "May 2022",
      type: "Certification",
      details: "Validates technical mastery in continuous integration, continuous delivery (CI/CD), infrastructure as code, release management, compliance, and monitoring.",
      badgeCode: "1267-6908",
      verificationUrl: "https://www.credly.com/badges/85cbefcd-5827-4371-ad51-1e2b24ebdfac/public_url"
    },
    {
      title: "Microsoft SC-200: Security Operations Analyst Associate",
      issuer: "Microsoft",
      year: "2022",
      issueDate: "May 2022",
      type: "Certification",
      details: "Validates capability to mitigate enterprise organizational threats using Microsoft Sentinel, Defender for Cloud, and enterprise security operations centers.",
      badgeCode: "1270-7518",
      verificationUrl: "https://www.credly.com/badges/dbc6ec32-4a5c-48f8-b4d1-8752d1d5047c/public_url"
    },
    {
      title: "Microsoft SC-300: Identity and Access Administrator",
      issuer: "Microsoft",
      year: "2022",
      issueDate: "May 2022",
      type: "Certification",
      details: "Validates skills in modern identity management, Microsoft Entra ID (Azure AD), access authorization, multi-factor authentication, and Zero Trust security.",
      badgeCode: "1271-7523",
      verificationUrl: "https://www.credly.com/badges/5d712707-4615-44a2-9117-751bc3645af1/public_url"
    },
    {
      title: "Microsoft SC-400: Information Protection Administrator",
      issuer: "Microsoft",
      year: "2022",
      issueDate: "May 2022",
      type: "Certification",
      details: "Validates expertise in enterprise data loss prevention (DLP), information protection policies, data governance, and sensitive data risk mitigation.",
      badgeCode: "1297-6705",
      verificationUrl: "https://www.credly.com/badges/302257fc-a472-42ab-b54b-bdec33902028/public_url"
    },
    {
      title: "Microsoft AZ-104: Azure Administrator Associate",
      issuer: "Microsoft",
      year: "2022",
      issueDate: "Apr 2022",
      type: "Certification",
      details: "Validates technical expertise in implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in cloud environments.",
      badgeCode: "1230-1188",
      verificationUrl: "https://www.credly.com/badges/07ea6c02-f57f-4365-86fa-b0ad467d5fb2/public_url"
    },
    {
      title: "Oracle Cloud Infrastructure Developer Associate 2022",
      issuer: "Oracle",
      year: "2022",
      issueDate: "23 Feb 2022",
      type: "Certification",
      details: "Validates hands-on knowledge in developing, securing, and operating cloud-native applications, containerization, microservices, and REST APIs on OCI.",
      badgeCode: "74915280CIDA2021",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge_m?id=3F8462780DB67FEC84C39CDA7EB73BCD7CFDEBF4F5841611C1DF27295314C005"
    },
    {
      title: "Infosys Certified Oracle PL/SQL Technical Consultant",
      issuer: "Infosys",
      year: "2022",
      issueDate: "17 Jan 2022",
      type: "Certification",
      details: "Enterprise certification demonstrating technical excellence in Oracle PL/SQL programming, packages, stored procedures, triggers, and query tuning."
    }
  ],

  workshops: [
    {
      title: 'Scaler "Must Know DSA: Stacks and Queues"',
      organizer: "Scaler Academy",
      speakerOrInstitution: "IITian Anshuman Singh",
      date: "May 2021",
      type: "Masterclass",
      summary: "Advanced session on fundamental data structures, algorithmic time-space complexity optimization, monotonic stacks, and competitive programming patterns."
    },
    {
      title: 'Webinar on "Virtual Reality and Augmentation"',
      organizer: "Bhartiya Vidhyapeeth Institute of Computer Applications and Management (BVICAM), New Delhi",
      speakerOrInstitution: "BVICAM Technical Forum",
      date: "Oct 2020",
      type: "Webinar",
      summary: "Explored emerging spatial computing paradigms, computer vision augmentation techniques, and enterprise deployment scenarios."
    }
  ]
};

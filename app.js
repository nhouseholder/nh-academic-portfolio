const GOOGLE_CLIENT_ID = "158105303099-to3ns3804q4r87vfto3rjq6nsrnmv78b.apps.googleusercontent.com";
const CACHE_KEY = "nh_google_photo";

const profileCards = [
  {
    kicker: "Incoming training",
    title: "UTMB IM-Ophthalmology PGY-1",
    copy:
      "Nicholas is beginning postgraduate training with UTMB’s IM-Ophthalmology pathway after graduating from Texas Tech University Health Sciences Center School of Medicine with an MD. The site positions him not just as a graduating student, but as a physician entering ophthalmology with a research and product mindset.",
    links: [
      { label: "UTMB Ophthalmology residency", href: "https://www.utmb.edu/ovs/education/residency-program/" },
      { label: "UTMB current residents", href: "https://www.utmb.edu/ovs/education/residency-program/current-residents/1000" }
    ]
  },
  {
    kicker: "Research lineage",
    title: "USC visual science + translational ophthalmology",
    copy:
      "At USC Ophthalmology and the Gokoffski Lab, his work spans retinal ganglion cell activation, amblyopia, two-photon imaging, and neuro-ophthalmic research. The portfolio intentionally links those themes to indexed publications and conference presentations to give the research story real infrastructure.",
    links: [
      { label: "USC Ophthalmology", href: "https://keck.usc.edu/ophthalmology/" },
      { label: "Research to Prevent Blindness", href: "https://www.rpbusa.org/" }
    ]
  },
  {
    kicker: "Parallel craft",
    title: "AI app builder and digital portfolio designer",
    copy:
      "Alongside medicine and research, Nicholas builds AI-enabled apps and polished web experiences across health, research, finance, and clinical education. That includes designing custom portfolios for other people, including executive and research-focused sites.",
    links: [
      { label: "Enhanced Health AI", href: "https://enhancedhealthai.com" },
      { label: "NestWise HQ", href: "https://nestwisehq.com" },
      { label: "Research Aria", href: "https://researcharia.com" },
      { label: "All Things AI", href: "https://all-things-ai.pages.dev" },
      { label: "BrewMap", href: "https://brewmap-app.pages.dev" },
      { label: "Ophtho Cards", href: "https://ophtho-cards.pages.dev" },
      { label: "Chief Resident AI", href: "https://residency-app.pages.dev" }
    ]
  }
];

const researchThemes = [
  {
    title: "Visual neuroplasticity and amblyopia",
    copy:
      "The strongest current thread is ophthalmic neuroplasticity: electromagnetic stimulation for amblyopia, retinal ganglion cell activation, and translational imaging systems that try to move beyond passive observation toward mechanistic intervention.",
    tags: ["Vision research", "Amblyopia", "Retinal ganglion cells"]
  },
  {
    title: "Oculoplastics and thyroid eye disease",
    copy:
      "The publication set also includes systematic review work in thyroid eye disease and upper blepharoplasty closure, showing a complementary evidence-synthesis lane in oculoplastics and periocular surgery.",
    tags: ["TED", "Blepharoplasty", "Systematic review"]
  },
  {
    title: "Pediatric and genetic ophthalmology",
    copy:
      "Clinical case-report work in pediatric ophthalmology connects rare genomic findings to previously undescribed ocular manifestations, reinforcing a comfort with complex phenotype interpretation and literature framing.",
    tags: ["Pediatric ophthalmology", "Genetics", "Case report"]
  },
  {
    title: "Orthopaedics, outcomes, and translational crossover",
    copy:
      "Earlier research includes orthopaedic outcomes, cartilage regeneration, perioperative complications, and multidisciplinary clinical registry work, demonstrating breadth, persistence, and an ability to work across specialties.",
    tags: ["Orthopaedics", "Registry work", "Outcomes research"]
  }
];

const conferenceHighlights = [
  {
    title: "ARVO 2025",
    meta: "Salt Lake City, Utah",
    copy:
      "Presented in vivo two-photon imaging work in transgenic rats showing direct electric-field activation of retinal ganglion cells.",
    tags: ["Poster", "Retinal stimulation"]
  },
  {
    title: "NANOS 2026",
    meta: "Boston, Massachusetts",
    copy:
      "Co-authored stereotaxic mapping work guiding custom high-density electrode array design for the superior colliculus and visual cortex.",
    tags: ["Poster", "Neuro-ophthalmology"]
  },
  {
    title: "NANOS 2025",
    meta: "Tucson, Arizona",
    copy:
      "Presented two-photon microscopy findings on electric-field modulation of retinal ganglion cells in a neuro-ophthalmology forum.",
    tags: ["Poster", "Vision science"]
  },
  {
    title: "Academic Surgical Congress 2025",
    meta: "Las Vegas, Nevada",
    copy:
      "Delivered a quickshot podium presentation on teprotumumab’s impact on proptosis in long-duration thyroid eye disease.",
    tags: ["Podium", "Systematic review"]
  },
  {
    title: "Envision Summit 2025",
    meta: "San Juan, Puerto Rico",
    copy:
      "Presented both the amblyopia stimulation systematic review and the pediatric ophthalmology genetics case report.",
    tags: ["Poster", "Ophthalmology"]
  },
  {
    title: "TTUHSC Research Week",
    meta: "2022–2024",
    copy:
      "Repeatedly presented work across cartilage regeneration, mental-health effects on arthroplasty outcomes, and blepharoplasty closure studies.",
    tags: ["Poster", "Longitudinal output"]
  }
];

const publications = [
  {
    year: "2025",
    status: "PubMed indexed",
    statusClass: "",
    title: "Electromagnetic stimulation for amblyopia: A systematic review of emerging techniques and their efficacy",
    journal: "Vision Research · 234 · 108639",
    summary:
      "Synthesizes human and animal evidence suggesting that tDCS, rTMS, and tRNS may improve visual acuity, contrast sensitivity, and stereopsis beyond traditional critical periods in amblyopia care.",
    tags: ["Amblyopia", "Neuroplasticity", "Systematic review"],
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/40482570/" },
      { label: "DOI", href: "https://doi.org/10.1016/j.visres.2025.108639" }
    ]
  },
  {
    year: "2025",
    status: "CV listed",
    statusClass: "cv",
    title: "Cyanoacrylate adhesive versus fast-absorbing gut suture for cutaneous closure in upper blepharoplasty: a systematic review",
    journal: "Aesthetic Medicine",
    summary:
      "CV-listed review work comparing closure approaches in upper blepharoplasty, extending the oculoplastics evidence-synthesis thread of the portfolio even though a public indexed record was not surfaced during this research pass.",
    tags: ["Oculoplastics", "Blepharoplasty", "CV-listed"],
    links: []
  },
  {
    year: "2024",
    status: "PubMed indexed",
    statusClass: "",
    title: "Teprotumumab’s impact on proptosis in long-duration thyroid eye disease: a systematic review and meta-analysis",
    journal: "TouchREVIEWS in Endocrinology · 20(2) · 100–109",
    summary:
      "Aggregates chronic TED data and reports clinically meaningful proptosis reduction, framing teprotumumab as a plausible non-surgical option for persistent proptosis when inflammation has subsided.",
    tags: ["TED", "Meta-analysis", "Oculoplastics"],
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/39526058/" },
      { label: "PMC", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11548351/" },
      { label: "DOI", href: "https://doi.org/10.17925/EE.2024.20.2.13" }
    ]
  },
  {
    year: "2024",
    status: "PubMed indexed",
    statusClass: "",
    title: "Ocular and systemic anomalies in an infant with 4q deletion and 3q duplication: case report and review of literature",
    journal: "Journal of Pediatric Ophthalmology and Strabismus · 61(6) · e66–e74",
    summary:
      "Describes rare combined chromosomal abnormalities with multiple ocular findings and contextualizes them through literature review, adding a genetics-rich pediatric ophthalmology paper to the body of work.",
    tags: ["Pediatrics", "Genetics", "Case report"],
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/39569720/" },
      { label: "DOI", href: "https://doi.org/10.3928/01913913-20240911-02" }
    ]
  },
  {
    year: "2023",
    status: "PubMed indexed",
    statusClass: "",
    title: "Inferior altitudinal visual loss and mask-wearing practices: a case series",
    journal: "Indian Journal of Ophthalmology · 71(2) · 657–660",
    summary:
      "Case-series evidence showing duckbill N95 masks can worsen inferior visual field errors relative to surgical masks or no mask, connecting ophthalmic function to real-world safety concerns.",
    tags: ["Visual fields", "Case series", "Public health"],
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/36727382/" },
      { label: "PMC", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10228961/" },
      { label: "DOI", href: "https://doi.org/10.4103/ijo.IJO_934_22" }
    ]
  },
  {
    year: "2023",
    status: "PubMed indexed",
    statusClass: "",
    title: "A review of recent innovations in cartilage regeneration strategies for the treatment of primary osteoarthritis of the knee: intra-articular injections",
    journal: "Orthopaedic Journal of Sports Medicine · 11(4)",
    summary:
      "Reviews emerging disease-modifying osteoarthritis strategies ranging from advanced delivery systems to gene and cell-based approaches, reflecting earlier translational orthopaedic work.",
    tags: ["Orthopaedics", "OA", "Narrative review"],
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/37138944/" },
      { label: "PMC", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10150434/" },
      { label: "DOI", href: "https://doi.org/10.1177/23259671231155950" }
    ]
  },
  {
    year: "2022",
    status: "CV listed + abstract DOI",
    statusClass: "cv",
    title: "Analysis of gender differences in sexual dysfunction perception, prevalence, and help-seeking behavior among medical students and faculty at TTUHSC",
    journal: "Medical Journal of Obstetrics and Gynecology / published abstract in International Journal of Academic Medicine",
    summary:
      "A gender-specific medicine project examining perception, prevalence, and help-seeking behavior among medically educated individuals at TTUHSC, with conference and published-abstract visibility.",
    tags: ["Gender-specific medicine", "Survey research", "TTUHSC"],
    links: [
      { label: "Abstract DOI", href: "https://doi.org/10.4103/2455-5568.365559" }
    ]
  },
  {
    year: "2022",
    status: "PubMed indexed",
    statusClass: "",
    title: "Monomicrobial joint infection by Leclercia adecarboxylata in an immunocompetent patient after knee arthroscopy: a case report",
    journal: "JBJS Case Connect · 12(3)",
    summary:
      "Documents a rare postoperative joint infection in an immunocompetent patient and adds a tightly focused surgical case report to the publication record.",
    tags: ["Case report", "Orthopaedics", "Post-op complications"],
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/35833641/" },
      { label: "DOI", href: "https://doi.org/10.2106/JBJS.CC.22.00016" }
    ]
  },
  {
    year: "2022",
    status: "PubMed indexed",
    statusClass: "",
    title: "Thrombogenicity of hyaluronic acid fillers: a quantitative thrombodynamics study",
    journal: "Ophthalmic Plastic and Reconstructive Surgery · 38(1) · 68–72",
    summary:
      "Quantifies thrombodynamic behavior of common hyaluronic-acid fillers and contributes to an evidence base around filler safety in ophthalmic plastic and reconstructive settings.",
    tags: ["Oculoplastics", "Fillers", "Quantitative study"],
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/33927172/" },
      { label: "DOI", href: "https://doi.org/10.1097/IOP.0000000000001990" }
    ]
  }
];

const clinicalTimeline = [
  {
    kicker: "2024–2025 · USC Health Science Center Ophthalmology Clinic",
    title: "Neuro-ophthalmology and cornea shadowing in a high-volume academic setting",
    summary:
      "Shadowed Kimberly Gokoffski, MD, and Kristina Voss, MD, while observing anterior-segment and optic-nerve pathology, resident rounds, and early-morning teaching structures inside a major academic ophthalmology environment.",
    bullets: [
      "Neuro-ophthalmology exposure with Dr. Gokoffski at USC Keck / LA General.",
      "Cornea exposure with Dr. Voss at USC Keck / LA General.",
      "Observed diagnostic and treatment workflows for complex ophthalmic conditions.",
      "Participated in resident rounds and pre-round teaching."
    ]
  },
  {
    kicker: "2024–2025 · TTUHSC Ophthalmology Clinic",
    title: "Ophthalmology clinic immersion at home institution",
    summary:
      "Built direct familiarity with comprehensive eye exams, procedural technique, patient engagement, and attending-level case discussion in the TTUHSC ophthalmology setting.",
    bullets: [
      "Shadowed multiple clinicians in comprehensive ophthalmology.",
      "Observed and discussed case presentation and treatment planning.",
      "Expanded procedural and examination exposure before residency."
    ]
  },
  {
    kicker: "2023–2025 · Texas Tech Free Clinic Eye Clinic",
    title: "Service-heavy eye care with growing procedural independence",
    summary:
      "Performed core eye-clinic tasks including visual acuity testing, slit-lamp work, OCT operation, dilated exams, and patient counseling, while also teaching younger students.",
    bullets: [
      "Performed visual acuity testing, history taking, slit lamp exams, and screenings.",
      "Counseled patients on eye drops, corrective lenses, diabetic eye disease, glaucoma, and cataracts.",
      "Operated OCT independently and performed dilated exams.",
      "Taught younger students to perform dilated fundus exams."
    ]
  },
  {
    kicker: "2020–2021 · Practices of Drs. Cynthia Boxrud and Scott E. Powell",
    title: "Internship bridging clinical care, surgery, documentation, and operations",
    summary:
      "Worked across oculofacial plastics and sports medicine in private practice, spanning history-taking, case presentation, perioperative care, surgery exposure, note-writing, and clinic operations.",
    bullets: [
      "Interviewed patients and presented cases to attending physicians.",
      "Supported pre-op and post-op care for oculofacial plastics and sports medicine cases.",
      "Scrubbed into surgeries and tracked outcomes through clinical documentation.",
      "Handled scheduling, inventory, insurance coordination, and supply management."
    ]
  },
  {
    kicker: "2020–2021 · IVology Rapid COVID-19 Testing",
    title: "High-volume operational medicine during the pandemic",
    summary:
      "Handled rapid-result delivery and data workflows for hundreds of people while maintaining accuracy and adherence to safety protocols during a high-demand public-health period.",
    bullets: [
      "Delivered large volumes of electronic results.",
      "Maintained precise data entry and protocol compliance."
    ]
  },
  {
    kicker: "2020 · EMT Medical Mission Trip, Belize",
    title: "Field-based EMT care in small, isolated villages",
    summary:
      "Worked alongside nurses and physicians in primary care clinics serving isolated communities in northwest Belize, bringing early cross-cultural and resource-limited care experience into the training trajectory.",
    bullets: [
      "Functioned as an EMT in village clinics.",
      "Worked in interprofessional teams serving underserved populations."
    ]
  }
];

const leadershipCards = [
  {
    kicker: "TTUHSC SOM Clerkship Student Focus Group",
    title: "Student representative",
    bullets: [
      "Represented the student body on clerkship experience and policy issues.",
      "Worked with faculty and administration to push actionable improvements."
    ]
  },
  {
    kicker: "TTUHSC SOM Admissions Interview Committee",
    title: "Interviewer",
    bullets: [
      "Conducted in-depth admissions interviews across two cycles.",
      "Provided detailed evaluative feedback for holistic review, including UMSI specialty interviews."
    ]
  },
  {
    kicker: "Introduction to Research Elective",
    title: "President",
    bullets: [
      "Built a ten-lecture curriculum to teach early medical students how research works.",
      "Organized workshops in methodology, data analysis, manuscript preparation, and faculty mentorship."
    ]
  },
  {
    kicker: "March 2026 · High school research curriculum",
    title: "Course designer and instructor",
    bullets: [
      "Designed and taught a ten-lecture, two-hour Introduction to Research course for high school students.",
      "Structured the course around scientific questions, literature review, study design, data interpretation, writing, and presentation skills."
    ]
  },
  {
    kicker: "Orthopedic Surgery Interest Group",
    title: "President",
    bullets: [
      "Coordinated hands-on suturing and splinting workshops.",
      "Expanded guest lectures by recruiting local and regional physicians."
    ]
  },
  {
    kicker: "Radiology Interest Group",
    title: "President",
    bullets: [
      "Planned imaging workshops covering X-ray, CT, and MRI interpretation.",
      "Created shadowing exposure and recruited extra teaching faculty."
    ]
  },
  {
    kicker: "Interventional Radiology + Dermatology + Wellness",
    title: "Vice president roles",
    bullets: [
      "Supported speaker programming and shadowing logistics in interventional radiology.",
      "Helped organize skin lesion, biopsy, and dermatology mentorship initiatives.",
      "Implemented student wellness programming focused on burnout, stress, and mindfulness."
    ]
  }
];

const serviceCards = [
  {
    kicker: "Lubbock Impact Clinic / TTUHSC Free Clinic",
    title: "Clinic-building and direct service",
    bullets: [
      "Helped establish a new nonprofit clinic adjacent to the student-run free clinic.",
      "Worked in after-hours clinic settings on documentation, reasoning, differential diagnosis, and planning."
    ]
  },
  {
    kicker: "Lubbock Free Eye Clinic",
    title: "Ophthalmic volunteer care",
    bullets: [
      "Performed vision exams, slit-lamp external exams, fundus exams, and OCT imaging.",
      "Counseled patients and routed those in need toward TTUHSC pro bono ophthalmology care."
    ]
  },
  {
    kicker: "Mentorship and outreach",
    title: "High school lab mentorship + Los Angeles Brain Bee",
    bullets: [
      "Mentored two senior high school students in lab work and presentation preparation.",
      "Led Q&A and mentorship sessions for future doctors and neuroscientists."
    ]
  },
  {
    kicker: "Pediatric + hospital service",
    title: "Toy drive and NICU cuddler work",
    bullets: [
      "Led a toy drive for Children’s Hospital Los Angeles.",
      "Worked multiple weekly shifts assisting NICU nurses in newborn care."
    ]
  },
  {
    kicker: "Community engagement",
    title: "AA, shelter, Special Olympics, food bank",
    bullets: [
      "Supported Alcoholics Anonymous meetings in Lubbock.",
      "Volunteered in animal care, sports-event support, and food packing across West Texas."
    ]
  },
  {
    kicker: "Values",
    title: "Service that stays close to real people",
    bullets: [
      "The volunteer arc consistently clusters around underserved care, student service, and practical community help.",
      "That same service orientation carries into the clinical and builder sections of the portfolio."
    ]
  }
];

const builderProjects = [
  {
    meta: "Health + AI",
    title: "Enhanced Health AI",
    copy:
      "A personalized healthspan intelligence platform with evidence-ranked recommendations across supplements, nutrition, training, habits, and longevity-focused protocols.",
    tags: ["Preventive health", "Evidence systems", "AI recommendations"],
    links: [
      { label: "Live site", href: "https://enhancedhealthai.com" }
    ]
  },
  {
    meta: "Research + AI",
    title: "ARIA",
    copy:
      "An academic research intelligence assistant that automates literature discovery, paper analysis, and research writing support for researchers and trainees.",
    tags: ["PubMed", "Research workflow", "Academic tooling"],
    links: [
      { label: "Live site", href: "https://researcharia.com" }
    ]
  },
  {
    meta: "Finance + AI",
    title: "Nestwise",
    copy:
      "A personal AI planning system that unifies retirement, portfolio, tax, and long-range planning details into one coordinated decision framework.",
    tags: ["Personal finance", "Decision support", "Planning"],
    links: [
      { label: "Live site", href: "https://nestwisehq.com" }
    ]
  },
  {
    meta: "Developer knowledge product",
    title: "All Things AI",
    copy:
      "A model guide for vibe coders that compares benchmarks, pricing, and real developer signals to help users choose the right model and provider.",
    tags: ["AI ecosystem", "Developer UX", "Portfolio link"],
    links: [
      { label: "Live site", href: "https://all-things-ai.pages.dev" }
    ]
  },
  {
    meta: "Ophthalmology education",
    title: "Ophtho Cards",
    copy:
      "An ophthalmology flashcard app built around FSRS-style spaced repetition and AI-assisted study support for BCSC-aligned learning.",
    tags: ["Medical education", "Study systems", "Ophthalmology"],
    links: [
      { label: "GitHub", href: "https://github.com/nhouseholder/ophtho-cards" }
    ]
  },
  {
    meta: "Clinical workflow concept",
    title: "Chief Resident AI",
    copy:
      "A clinical AI concept for autonomous pre-charting and decision support that imagines FHIR-aware workflow help inside residency practice.",
    tags: ["Clinical AI", "Workflow design", "Residency"],
    links: [
      { label: "GitHub", href: "https://github.com/nhouseholder/Residency-app" }
    ]
  }
];

const studioProjects = [
  {
    kicker: "Executive portfolio example",
    title: "Paul D. Householder",
    copy:
      "A refined executive-advisory site for a former public-company CEO, built to signal credibility, operating depth, and board-level presence.",
    links: [
      { label: "View site", href: "https://paul-householder.pages.dev" }
    ]
  },
  {
    kicker: "Research portfolio example",
    title: "Anahit Simonyan",
    copy:
      "A research-centered portfolio example that leans academic, personal, and publication-aware rather than corporate or startup-branded.",
    links: [
      { label: "View site", href: "https://anahit-simonyan.pages.dev" }
    ]
  },
  {
    kicker: "What Nicholas can build",
    title: "Custom digital portfolios for physicians, researchers, and builders",
    copy:
      "If you need a portfolio that feels sharper than a template, Nicholas can build one that combines biography, achievements, publications, links, projects, and a distinctive visual identity.",
    links: [
      { label: "Email Nicholas", href: "mailto:Nicholas.Householder@ttuhsc.edu" },
      { label: "GitHub", href: "https://github.com/nhouseholder" }
    ]
  }
];

const archiveGroups = [
  {
    title: "Education",
    subtitle: "Training across Texas, Los Angeles, Phoenix, and São Paulo.",
    items: [
      {
        kicker: "2021–2026",
        title: "Texas Tech University Health Sciences Center School of Medicine",
        copy: "Doctor of Medicine graduate from TTUHSC School of Medicine.",
        bullets: [
          "Graduated from TTUHSC School of Medicine with an MD.",
          "Built a parallel portfolio in research, leadership, service, and digital product development."
        ]
      },
      {
        kicker: "2016–2020",
        title: "University of Southern California",
        copy: "Bachelor of Science in Neuroscience.",
        bullets: [
          "Dean’s List every undergraduate year.",
          "Maintained a 3.81 core neuroscience GPA."
        ]
      },
      {
        kicker: "2012–2016",
        title: "Escola Graduada + Rancho Solano Preparatory School",
        copy: "International Baccalaureate training across Brazil and Arizona.",
        bullets: [
          "International Baccalaureate degree in São Paulo and Phoenix.",
          "IB score: 38."
        ]
      }
    ]
  },
  {
    title: "Research Positions",
    subtitle: "From private-practice ophthalmology and orthopaedics to translational USC visual science.",
    items: [
      {
        kicker: "2024–2025",
        title: "USC Ophthalmology Department Gokoffski Lab Fellowship",
        copy: "Research to Prevent Blindness medical student research fellow.",
        bullets: [
          "Led in vivo two-photon microscopy work in transgenic rats to investigate retinal ganglion cell activation.",
          "Developed custom microscopy-electrode arrays for three-dimensional mapping in visual pathways.",
          "Led an amblyopia project using monocular deprivation and electromagnetic stimulation.",
          "Presented weekly progress, led manuscript writing, and translated findings into posters and publications."
        ]
      },
      {
        kicker: "2021–2022",
        title: "TTUHSC Orthopedic Surgery Clinic",
        copy: "Medical student research assistant on longitudinal arthroplasty outcomes work.",
        bullets: [
          "Helped maintain a multiyear registry of total knee, hip, and shoulder arthroplasty outcomes.",
          "Performed clinical scoring workflows and registry entry.",
          "Correlated findings with mental-wellness survey data and presented the work at school research events."
        ]
      },
      {
        kicker: "2020–2021",
        title: "Practices of Drs. Cynthia Boxrud and Scott E. Powell",
        copy: "Premed research assistant across ophthalmology and orthopaedic projects.",
        bullets: [
          "Led IRB-approved projects using patient data from two private practices.",
          "Published on mask-related visual loss, postoperative knee infection, and hyaluronic-acid filler thrombodynamics.",
          "Led a longitudinal study on intraocular pressure changes after ptosis surgery that the CV notes was nearing completion."
        ]
      }
    ]
  },
  {
    title: "Leadership Experiences",
    subtitle: "A wide student-leadership footprint with emphasis on curriculum, recruiting, and mentorship.",
    items: [
      {
        kicker: "2023–2025",
        title: "Clerkship Focus Group + Admissions",
        copy: "Student representative and admissions interviewer.",
        bullets: [
          "Advocated for clerkship policy and experience improvements.",
          "Interviewed applicants and contributed detailed feedback for holistic review."
        ]
      },
      {
        kicker: "2022–2023",
        title: "Introduction to Research Elective",
        copy: "President of a course built to increase student research involvement.",
        bullets: [
          "Designed a ten-lecture curriculum for first-year students.",
          "Organized workshops in methods, data analysis, and manuscript preparation.",
          "Partnered with faculty to mentor students and match them with projects."
        ]
      },
      {
        kicker: "March 2026",
        title: "Introduction to Research course for high school students",
        copy: "Designed and taught a ten-lecture course built for high school learners interested in scientific thinking and academic medicine.",
        bullets: [
          "Built a ten-lecture, two-hour curriculum introducing the research process from question formation to presentation.",
          "Taught core concepts in literature review, study design, data analysis, manuscript structure, and scientific communication."
        ]
      },
      {
        kicker: "2022–2023",
        title: "Orthopedic Surgery + Radiology Interest Groups",
        copy: "President in both organizations.",
        bullets: [
          "Coordinated procedural workshops in suturing, splinting, and imaging interpretation.",
          "Expanded faculty participation and speaker programming.",
          "Opened new shadowing and specialty-exposure channels."
        ]
      },
      {
        kicker: "2022–2023",
        title: "IR, Dermatology, Wellness, BRI, and IPE",
        copy: "Vice-president, treasurer, and facilitator roles across multiple student groups.",
        bullets: [
          "Helped organize specialty speakers and shadowing logistics in interventional radiology.",
          "Supported dermatology workshops and research mentorship pathways.",
          "Implemented wellness programming and promoted mental health resources.",
          "Managed a $20,000 budget for Benjamin Rush Institute activities and scholarships.",
          "Facilitated interprofessional education sessions across healthcare disciplines."
        ]
      }
    ]
  },
  {
    title: "Relevant Medical Experiences",
    subtitle: "Service-heavy ophthalmology exposure with meaningful direct patient contact.",
    items: clinicalTimeline.map((item) => ({
      kicker: item.kicker,
      title: item.title,
      copy: item.summary,
      bullets: item.bullets
    }))
  },
  {
    title: "Co-Curricular and Volunteer Work",
    subtitle: "Longitudinal elective work, clinical service, mentorship, and community engagement.",
    items: [
      {
        kicker: "2023–2025",
        title: "Distinction in Leadership and Professional Development Elective",
        copy: "Longitudinal elective centered on leadership, interprofessional work, and personal development.",
        bullets: [
          "Completed leadership-focused coursework.",
          "Served as a peer mentor in a structured coaching program.",
          "Presented a capstone on professional development and leadership."
        ]
      },
      {
        kicker: "2025",
        title: "Cross Cultural Exchange Program",
        copy: "Virtual exchange elective with a PhD student from Nigeria.",
        bullets: [
          "Completed workshops and lecture series on cultural competency.",
          "Finished a final writing project in culturally responsive medicine."
        ]
      },
      {
        kicker: "2022–2025",
        title: "Volunteer portfolio",
        copy: "Clinical, mentorship, and community-facing service across multiple settings.",
        bullets: [
          "Helped establish Lubbock Impact Clinic and supported EMR/patient registration workflows.",
          "Volunteered in free eye clinic and TTUHSC free clinic settings.",
          "Mentored high school students and served on a leadership panel for the Los Angeles Brain Bee.",
          "Led a toy drive for Children’s Hospital Los Angeles and volunteered as a NICU cuddler.",
          "Also served with AA Lubbock, animal shelter work, Special Olympics, and the Lubbock Food Bank."
        ]
      }
    ]
  },
  {
    title: "Awards, Honors, and Memberships",
    subtitle: "Formal recognition in research, scholarship, and academic performance.",
    items: [
      {
        kicker: "Awards",
        title: "Scholarships and honors",
        copy: "A mix of research funding, merit scholarships, and academic recognition.",
        bullets: [
          "Research to Prevent Blindness Medical Student Research Fellowship Award (2024).",
          "Bernard T. Mittenmeyer Presidential Merit Scholarship (2022, 2025).",
          "Robert A. Flygare Memorial Scholarship (2023).",
          "Endowed Phonathon Scholarship (2023).",
          "Laura Bush Institute Meritorious Acknowledgment for Research in Gender-Specific Medicine (2022).",
          "HSC Viney Endowed Scholarship (2021)."
        ]
      },
      {
        kicker: "Honors",
        title: "Academic metrics and certifications",
        copy: "High-performance testing and foundational certifications.",
        bullets: [
          "USMLE Step 2: 268.",
          "MCAT: 520.",
          "Neuroscience core GPA: 3.81.",
          "Dean’s List every undergraduate year at USC.",
          "NREMT certified (2020).",
          "ACLS certified (2025)."
        ]
      },
      {
        kicker: "Memberships",
        title: "Professional societies",
        copy: "Active identity within ophthalmology and academic surgery communities.",
        bullets: [
          "Association for Research in Vision and Ophthalmology (ARVO).",
          "North American Neuro-Ophthalmology Society (NANOS).",
          "American College of Surgeons (ACS).",
          "Association of Academic Surgery (AAS)."
        ]
      }
    ]
  },
  {
    title: "Interests and Identity Outside the CV",
    subtitle: "Athletics, analytics, books, and a builder’s curiosity.",
    items: [
      {
        kicker: "Combat sports + fitness",
        title: "Muay Thai, strength, endurance, and movement",
        copy: "A performance-oriented life outside the clinic.",
        bullets: [
          "Muay Thai training across Nak Muay Nation, Pro Edge MMA Gym, and Northeast Los Angeles Combat Fitness.",
          "Ongoing interest in hiking, sports, jogging, biking, swimming, snowboarding, yoga, weight-lifting, and calisthenics."
        ]
      },
      {
        kicker: "Analytics",
        title: "Sports modeling and prediction systems",
        copy: "Data-driven hobbies that predate and parallel the AI builder work.",
        bullets: [
          "Built a custom multi-year basketball algorithm in Excel.",
          "Developed predictive models for baseball and mixed martial arts in Python."
        ]
      },
      {
        kicker: "Books + fandom",
        title: "Taste profile",
        copy: "The personal layer that gives the portfolio some texture.",
        bullets: [
          "Favorite reading lane: self-development, personal growth, and life skills.",
          "Favorite series: A Song of Ice and Fire.",
          "Favorite book: Blood Meridian.",
          "Sports fandom includes the Dallas Cowboys, Phoenix Suns, Arizona Diamondbacks, UFC, and boxing."
        ]
      }
    ]
  }
];

const renderLinks = (links) =>
  links
    .map((link) => `<a href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`)
    .join("");

const renderProfile = () => {
  const root = document.getElementById("profileGrid");
  root.innerHTML = profileCards
    .map(
      (card) => `
        <article class="feature-card">
          <div class="card-kicker">${card.kicker}</div>
          <h3>${card.title}</h3>
          <p>${card.copy}</p>
          <div class="link-row">${renderLinks(card.links)}</div>
        </article>
      `
    )
    .join("");
};

const renderResearchThemes = () => {
  const root = document.getElementById("researchThemeGrid");
  root.innerHTML = researchThemes
    .map(
      (theme) => `
        <article class="theme-card">
          <h3>${theme.title}</h3>
          <p>${theme.copy}</p>
          <div class="tag-row">${theme.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
};

const renderConferenceHighlights = () => {
  const root = document.getElementById("conferenceGrid");
  root.innerHTML = conferenceHighlights
    .map(
      (item) => `
        <article class="conference-card">
          <h3>${item.title}</h3>
          <span class="conference-meta">${item.meta}</span>
          <p>${item.copy}</p>
          <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
};

const renderPublications = () => {
  const root = document.getElementById("publicationGrid");
  root.innerHTML = publications
    .map(
      (pub) => `
        <article class="publication-card">
          <div class="pub-head">
            <div>
              <div class="pub-meta">${pub.year}</div>
              <h3>${pub.title}</h3>
              <div class="pub-journal">${pub.journal}</div>
            </div>
            <span class="publication-chip ${pub.statusClass}">${pub.status}</span>
          </div>
          <p class="pub-summary">${pub.summary}</p>
          <div class="publication-footer">
            <div class="tag-row">${pub.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            ${pub.links.length ? `<div class="publication-actions">${renderLinks(pub.links)}</div>` : ""}
          </div>
        </article>
      `
    )
    .join("");
};

const renderClinical = () => {
  const root = document.getElementById("clinicalGrid");
  root.innerHTML = clinicalTimeline
    .map(
      (item) => `
        <article class="timeline-card">
          <div class="timeline-meta">${item.kicker}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
};

const renderMiniCards = (id, items) => {
  const root = document.getElementById(id);
  root.innerHTML = items
    .map(
      (item) => `
        <article class="mini-card">
          <div class="card-kicker">${item.kicker}</div>
          <h3>${item.title}</h3>
          <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
};

const renderProjects = () => {
  const root = document.getElementById("builderGrid");
  root.innerHTML = builderProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-meta">${project.meta}</div>
          <h3>${project.title}</h3>
          <p>${project.copy}</p>
          <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="project-actions">${renderLinks(project.links)}</div>
        </article>
      `
    )
    .join("");
};

const renderStudio = () => {
  const root = document.getElementById("studioGrid");
  root.innerHTML = studioProjects
    .map(
      (project) => `
        <article class="studio-card">
          <div class="card-kicker">${project.kicker}</div>
          <h3>${project.title}</h3>
          <p>${project.copy}</p>
          <div class="studio-actions">${renderLinks(project.links)}</div>
        </article>
      `
    )
    .join("");
};

const renderArchive = () => {
  const root = document.getElementById("archiveRoot");
  root.innerHTML = archiveGroups
    .map(
      (group, index) => `
        <details class="archive-group" ${index === 0 ? "open" : ""}>
          <summary>
            <div class="archive-number">${String(index + 1).padStart(2, "0")}</div>
            <div>
              <div class="archive-title">${group.title}</div>
              <div class="archive-subtitle">${group.subtitle}</div>
            </div>
          </summary>
          <div class="archive-grid">
            ${group.items
              .map(
                (item) => `
                  <article class="archive-card">
                    <div class="card-kicker">${item.kicker}</div>
                    <h3>${item.title}</h3>
                    <p>${item.copy}</p>
                    <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
                  </article>
                `
              )
              .join("")}
          </div>
        </details>
      `
    )
    .join("");
};

const initReveals = () => {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const initGoogleAvatar = () => {
  const avatarImg = document.getElementById("avatarImg");
  const avatarPlaceholder = document.getElementById("avatarPlaceholder");
  const avatarConnect = document.getElementById("avatarConnect");

  if (!avatarImg || !avatarPlaceholder || !avatarConnect) return;

  const showPhoto = (url) => {
    avatarImg.src = url;
    avatarImg.style.display = "";
    avatarPlaceholder.style.display = "none";
    avatarConnect.style.display = "none";
  };

  const decodeJwtPayload = (token) => {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  };

  const handleCredentialResponse = (response) => {
    const payload = decodeJwtPayload(response.credential);
    if (payload.picture) {
      const photoUrl = payload.picture.replace("=s96-c", "=s800-c");
      localStorage.setItem(CACHE_KEY, photoUrl);
      showPhoto(photoUrl);
    }
  };

  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    showPhoto(cached);
  }

  window.addEventListener("load", () => {
    if (typeof google === "undefined" || !google.accounts) return;
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      auto_select: true
    });

    avatarConnect.addEventListener("click", () => {
      google.accounts.id.prompt();
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderResearchThemes();
  renderConferenceHighlights();
  renderPublications();
  renderClinical();
  renderMiniCards("leadershipGrid", leadershipCards);
  renderMiniCards("serviceGrid", serviceCards);
  renderProjects();
  renderStudio();
  renderArchive();
  initReveals();
  initGoogleAvatar();
});

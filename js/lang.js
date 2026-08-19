/* AXIOS INITIATIVE - Bilingual Dictionary (English & Spanish) */

const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About us",
    navProgram: "Initiatives",
    navProjects: "Projects",
    navContact: "Contact",
    btnDonate: "General Donation",
    btnRequestHelp: "Request Help",
    projectSubmenuTitle: "Latin American Pastoral Projects",

    // Help Request Modal
    badgeHelpConfidential: "100% Confidential Care",
    modalHelpTitle: "Pastoral Support Request",
    modalHelpSubtitle: "If you are a pastor or ministry leader needing emotional, theological, or financial guidance, please fill out this confidential contact form.",
    formPhone: "Phone number",
    formCountry: "Country",
    placeholderPhone: "+1 (555) 000-0000",
    placeholderCountry: "e.g. Ecuador, Guatemala...",
    formMessage: "Brief description of request",
    placeholderMessage: "Tell us briefly how we can support you...",
    btnSubmitHelp: "Submit Confidential Request",
    
    // Hero - Concept & Identity
    heroBadge: "Because those who serve… are worthy",
    heroTitle: "Restoring dignity, Honoring the call, Inspiring hope",
    heroSubtitle: "There are callings lived in front of many, but whose burdens are carried in silence. At AXIOS Initiative, we believe that those who have dedicated their lives to caring for, guiding, and serving others also deserve to be cared for.",
    heroStatement: "We exist to honor, strengthen, and walk alongside pastors and their families, providing them with holistic care, restoration, training, and support so they can live out their calling with health, strength, and dignity.",
    tagPastor: "We care for the pastor.",
    tagFamily: "We strengthen the family.",
    tagChurch: "We serve the Church.",
    heroCtaPrimary: "Adopt a project",
    heroCtaSecondary: "Sponsor a pastor",
    
    // Meaning of Axios
    meaningTitle: "What is AXIOS?",
    meaningSubtitle: "Derived from the original Greek language, AXIOS means:",
    wordWorthy: "Worthy",
    wordValuable: "Valuable",
    wordHonor: "Worthy of Honor",
    meaningDesc: "“Let the elders who rule well be considered worthy of double honor, especially those who labor in preaching and teaching.” — 1 Timothy 5:17",

    // Initiatives Overview
    initiativesSectionTitle: "Our Initiatives",
    initiativesSectionSubtitle: "Behind every pastor is a person, a family, and a story that also need to be cared for.",

    // The Four Pillars of AXIOS
    fourPillarsTitle: "The Four Pillars of AXIOS",
    fourPillarsSubtitle: "The architectural foundation of our ministry to affirm,<br>strengthen, and sustain pastoral families.",
    
    p1Name: "CARE",
    p1Desc: "Holistic care for the emotional, spiritual, and relational well-being of the pastor and their family.",

    p2Name: "RESTORE",
    p2Desc: "Safe spaces of rest, accompaniment, renewal, and personal restoration.",

    p3Name: "EQUIP",
    p3Desc: "Theological education and leadership development to strengthen the ministerial calling.",

    p4Name: "SUSTAIN",
    p4Desc: "Connecting churches, people, and resources to practically support pastoral families.",
    
    heroBadgeTag: "Greek Origin & Meaning",
    badgeHolisticCare: "Holistic Care",
    badgeFoundationalArchitecture: "Foundational Architecture",

    // 3 Initiative Cards
    pillar1Title: "Mental, Emotional<br>and Spiritual Health",
    pillar1Desc: "Fostering emotional wellness, marital strength, and personal restoration.",
    pillar1Item1: "Pastoral retreats, conferences, and peer support networks.",
    pillar1Item2: "Confidential counseling and mental health care.",
    pillar1Item3: "Dedicated digital platform and mobile app for holistic health.",
    pillar1Item4: "Safe spaces of rest and pastoral renewal.",

    pillar2Title: "Theological Training<br>and Leadership",
    pillar2Desc: "Equipping leaders with biblical education, mentorship, and ministry tools.",
    pillar2Item1: "Continuous advanced biblical and theological education.",
    pillar2Item2: "Development of ministerial skills and resources.",
    pillar2Item3: "Personalized mentorship and study cohorts.",
    pillar2Item4: "Resources and tools to sharpen the calling.",

    pillar3Title: "Pastor Family Adoption Initiative",
    pillar3Desc: "Connecting hearts and resources to sustain those who have dedicated their lives to serve.",
    pillar3Item1: "Provide periodic financial support to help the pastoral family.",
    pillar3Item2: "Build a genuine relationship between sponsors and the pastor.",
    pillar3Item3: "Invest in spiritual, emotional, marital, and family health.",
    pillar3Item4: "Give the pastor opportunities to continue developing their calling.",

    // Dedicated Research Diagnosis Panel (EN)
    badgeResearchDiagnosis: "Pastoral Research & Diagnosis",
    titleResearchDiagnosis: "Pastoral Reality in Latin America",
    subtitleResearchDiagnosis: "Key findings from our regional survey of Baptist pastors, families, and leaders.",

    group1Title: "Mental & Emotional Health",
    group2Title: "Training & Leadership",
    group3Title: "Financial Support & Sponsorship",

    // Initiative Micro-Stats (EN)
    p1Stat1Num: "76.2%",
    p1Stat1Desc: "of pastors feel isolated or alone.",
    p1Stat2Tag: "Stress Level",
    p1Stat2Num: "92.3%",
    p1Stat2Desc: "describe their stress level as 'HIGH'.",
    p1Stat3Tag: "Mental Wellbeing",
    p1Stat3Num: "48.8%",
    p1Stat3Desc: "rate their mental health as 'NOT GOOD'.",

    p2Stat1Tag: "Leadership Development",
    p2Stat1Num: "66.7%",
    p2Stat1Desc: "express a need for leadership strengthening.",
    p2Stat2Tag: "Discipleship",
    p2Stat2Num: "61.9%",
    p2Stat2Desc: "require a stronger discipleship framework.",

    p3Stat1Num: "71.5%",
    p3Stat1Desc: "lack additional financial support.",
    p3Stat2Num: "64.3%",
    p3Stat2Desc: "salary below what is considered dignified.",
    p3Stat3Num: "$118",
    p3Stat3Desc: "average monthly retirement income.",
    p3Stat4Num: "78.6%",
    p3Stat4Desc: "have no retirement plan (only 21.4% have a plan).",

    researchNoteText: "\"This information represents the findings of a 14-month study and survey conducted across 19 countries and 21 Baptist Conventions in Latin America.\"",

    // Upcoming Projects Section
    badgeUpcomingEvents: "Event & Project Agenda",
    titleUpcomingProjects: "Upcoming Projects",
    subtitleUpcomingProjects: "Gathering spaces, pastoral retreats, and conferences<br>designed to renew, equip, and honor ministry families.",

    proj1Date: "OCT 15 - 18, 2026",
    proj1Location: "Quito, Ecuador",
    proj1Type: "In-Person Pastoral Retreat",
    proj1Title: "'AXIOS Restores' Renewal Retreat",
    proj1Desc: "A 4-day space of holistic rest, private emotional care, and spiritual renewal for pastors and their spouses.",
    proj1MetaVal1: "25 Pastoral Couples",
    proj1MetaVal2: "100% Funded by Axios",

    proj2Date: "NOV 12 - 14, 2026",
    proj2Location: "Tegucigalpa, Honduras",
    proj2Type: "Biblical & Leadership Symposium",
    proj2Title: "Ministerial Training Summit",
    proj2Desc: "Intensive workshops on applied hermeneutics, mental health in leadership, and digital tools for local churches.",
    proj2MetaVal1: "120 Leaders & Pastors",
    proj2MetaVal2: "In-Person & Hybrid",

    proj3Date: "DEC 05 - 07, 2026",
    proj3Location: "Guatemala, Guatemala",
    proj3Type: "Family Conference",
    proj3Title: "'Strong & Dignified Homes' Gathering",
    proj3Desc: "Conference focused on strengthening pastoral marital health, recreational activities for pastors' children, and healthy finances.",
    proj3MetaVal1: "40 Pastoral Families",
    proj3MetaVal2: "Children & Pastoral Marriage",

    projMetaBeneficiaries: "Beneficiaries:",
    projMetaModality: "Modality:",
    projMetaCapacity: "Capacity:",
    projMetaFormat: "Format:",
    projMetaAudience: "Target Audience:",
    projMetaFocus: "Focus:",

    projBtnParticipate: "Request Participation",
    projBtnViewInfo: "View Event Info",
    projBtnLearnProgram: "Learn About Program",

    // 2026/2027 Goal Campaign
    goalBadge: "2026 / 2027 Campaign",
    goalTitle: "Our goal for 2026/2027 is to raise $200,000",
    goalSubtitle: "Your generosity can strengthen a pastoral family. Join us and help care for those who have dedicated their lives to serving churches in Latin America.",
    goalCta: "Help us now",
    goalRaised: "raised",
    goalTarget: "Target:",

    // Non-profit Trust Banner
    trustTitle: "State of Florida • IRS 501(c)(3) Compliant",
    trustDesc: "AXIOS INITIATIVE operates exclusively for charitable, religious, and educational purposes.<br>70% of donations directly support pastoral families.",

    // About Page
    aboutTitle: "About AXIOS INITIATIVE",
    aboutSubtitle: "AXIOS no comenzó con una organización. Comenzó con una carga en el corazón.",
    aboutMissionTitle: "Cuidando el corazón detrás del llamado",
    aboutMissionDesc: "Organized exclusively as a Christian nonprofit organization under IRS 501(c)(3), AXIOS INITIATIVE exists to uphold the dignity, emotional resilience, and financial wellbeing of Baptist pastors and their immediate families connected with their local Baptist Convention.",
    
    statementOfFaithTitle: "Statement of Faith",
    statementOfFaithSubtitle: "Our foundation rests upon historic Christian doctrine and biblical truth:",
    
    faith1Title: "The Scriptures",
    faith1Desc: "We believe the Bible is the inspired, infallible, and authoritative divinely inspired Word of God.",
    
    faith2Title: "The Trinity",
    faith2Desc: "There is one God, eternally existent in three Persons: Father, Son, and Holy Spirit.",
    
    faith3Title: "The Lord Jesus Christ",
    faith3Desc: "We believe in Christ's deity, virgin birth, sinless life, miracles, vicarious death, bodily resurrection, ascension, and personal return in glory.",
    
    faith4Title: "Salvation by Grace",
    faith4Desc: "Salvation is by grace through faith in Jesus Christ alone, apart from human works.",
    
    faith5Title: "The Church",
    faith5Desc: "The Church is the Body of Christ, commissioned to worship God, make disciples, proclaim the gospel, and serve in love.",
    
    faith6Title: "Eternal Hope",
    faith6Desc: "We believe in the bodily resurrection of all people, the eternal blessedness of the redeemed, and God's ultimate justice.",

    governanceTitle: "Governance & Fiduciary Integrity",
    governanceDesc: "Governed by a dedicated Board of Directors operating under strict Conflict-of-Interest policies, financial transparency, and zero private inurement. Directors serve with a shared passion for pastoral care.",

    // Our Team Section
    badgeOurTeam: "Leadership & Governance",
    titleOurTeam: "Our Team",
    subtitleOurTeam: "Dedicated leaders, pastors, and servants walking alongside pastoral families across Latin America.",
    tagPresidentRole: "Fundador & Director Ejecutivo",
    tagLeadershipBoard: "Junta Directiva",
    presidentName: "Pr. Lielson Penido",
    presidentTitle: "Fundador & Director Ejecutivo de AXIOS Initiative",
    presidentBio: `<p>La historia de Lielson Penido ha estado profundamente marcada por la gracia de Dios, la familia y el ministerio. Adoptado desde pequeño y nacido en el contexto de una familia pastoral, creció en Brasil hasta los 12 años y después se mudó con sus padres a Ecuador como misioneros de la Convención Bautista de Brasil, donde comenzó a formarse su amor por Dios, la Iglesia y el servicio cristiano.</p>
<p>Más tarde vivió en Nueva York, donde estudió Ciencias de la Computación durante dos años, antes de responder al llamado de Dios al ministerio y continuar su formación en el Seminario Bautista del Sur de Brasil, en Río de Janeiro, donde fue formado teológicamente para el ministerio pastoral. También realizó una maestría de dos años en Dirección Orquestal, integrando su formación musical con su llamado al servicio en la adoración, y obtuvo un certificado en evangelismo en la Escuela de Billy Graham, fortaleciendo su compromiso con la proclamación del evangelio.</p>
<p>En 1995 contrajo matrimonio con Verónica Penido, su compañera de vida y ministerio. Juntos son padres de dos hijos, Victoria y Lukas, y han dedicado gran parte de su vida a servir a la Iglesia en diferentes culturas y contextos.</p>
<p>A lo largo de casi tres décadas de ministerio, Lielson ha servido como pastor de adoración en Tampa y Lake Worth, Florida; plantador de iglesias; misionero durante diez años en Europa; y capellán empresarial. Actualmente también sirve como Director de Lenguas de la Asociación Bautista de Tampa Bay, trabajando de cerca con pastores, iglesias y líderes de diferentes contextos culturales.</p>
<p>Haber crecido en una familia pastoral, formar su propia familia en medio del ministerio y caminar durante décadas al lado de pastores en diferentes países le ha permitido conocer tanto la belleza del llamado como el peso que muchas veces se lleva en silencio.</p>
<p>De esa historia, experiencia y profunda carga por el bienestar de los pastores y sus familias nace su compromiso con AXIOS Initiative: ayudar a cuidar, fortalecer y honrar a quienes han dedicado sus vidas a cuidar de otros.</p>`,
    presidentQuote: "“Porque quienes sirven… son dignos.”",
    roleCare: "Pastoral Care",
    member2Name: "Pr. Francisco Juarbe, ThD",
    member2Title: "Director de Cuidado Pastoral – Latinoamérica y el Caribe",
    member2Bio: "Pastor, mentor y educador cristiano con amplia experiencia en cuidado pastoral, plantación de iglesias y formación de líderes. Sirve en Axios Initiative acompañando y fortaleciendo a pastores y líderes en Latinoamérica y el Caribe.",
    roleTheology: "Theological Training",
    member3Name: "Pr. Mario Figueroa",
    member3Title: "Board Secretary",
    member3Bio: "Mario ha estado sirviendo como pastor en Tampa desde 2020. En 2023, con un fuerte sentido de llamado a establecer una iglesia multicultural para mantener la unidad generacional en familias bilingües, dejó su carrera de más de 17 años en la industria de la salud para asistir al Sovereign Grace Churches Pastors College en Louisville, KY. Mario luego regresó a Florida para plantar Vine Church Tampa.\n\nMario y su esposa, Diana, nacieron en Puerto Rico y se salvaron durante su juventud adulta. Han estado felizmente casados desde 2011 y tienen dos hijas, Anasofía y Mila. Como familia, disfrutan hablando, haciendo bromas, así como jugando juegos de mesa y noches de cine (especialmente películas de superhéroes).",
    roleOperations: "Operations & Alliances",
    member4Name: "Pr. David Endara",
    member4Title: "Board Treasurer",
    member4Bio: "Pastor y miembro de la Junta Directiva de Axios Initiative, supervisando la gestión y transparencia financiera de la organización.",

    // Initiatives Page
    programsTitle: "INITIATIVES",
    programsSubtitle: "Empowering, restoring, and equipping pastoral families through core strategic initiatives.",

    program1Title: "Mental, Emotional and Spiritual Health",
    program1Desc: "Refreshing spiritual retreats, confidential mental health resources, and peer support networks designed to restore pastors and spouses.",

    program2Title: "Theological Training & Leadership",
    program2Desc: "Advanced biblical education, leadership development, mentorship, and practical training programs to equip ministry leaders.",

    program3Title: "Pastor Family Adoption Initiative",
    program3Desc: "Holistic financial assistance, emergency relief, sabbatical grants, and long-term sponsorship for pastoral families facing hardship.",

    // Health Initiative Page (Mental, Emotional and Spiritual Health)
    backToInitiatives: "← Back to Initiatives",
    healthPageTitle: "MENTAL, EMOTIONAL AND SPIRITUAL HEALTH",
    healthPageSubtitle: "Holistic care, confidential counseling, and specialized programs designed to restore and sustain pastoral families.",
    
    hMod1Title: "Axios Conferences",
    hMod1Desc: "Annual and regional conferences focused on mental, emotional, and spiritual health.",
    hMod1Topic1: "Burnout prevention & emotional resilience",
    hMod1Topic2: "Anxiety, depression & ministry stress",
    hMod1Topic3: "Marriage under pressure & parenting PKs",
    hMod1Topic4: "Trauma, grief & loneliness in ministry",
    hMod1Audience: "Pastors • Spouses • Couples • Leaders",

    hMod2Title: "Confidential Counseling Assistance",
    hMod2Desc: "Discreet professional support so pastors can seek help without fear of losing credibility.",
    hMod2Item1: "Free initial counseling sessions",
    hMod2Item2: "Subsidized professional Christian counseling",
    hMod2Item3: "Online counseling & emergency referrals",
    hMod2Item4: "Marriage & family counseling",

    hMod3Title: "Pastor Wellness Assessments",
    hMod3Desc: "A yearly confidential assessment covering stress, burnout, marriage, physical habits, and spiritual vitality.",
    hMod3Item1: "Personalized wellness report",
    hMod3Item2: "Tailored recommendations & resources",
    hMod3Item3: "Structured follow-up plan",

    hMod4Title: "Online Peer Support Groups",
    hMod4Desc: "Monthly confidential small groups of 6–10 pastors providing prayer, accountability, and mutual encouragement.",

    hMod5Title: "Pastor & Wife Retreats",
    hMod5Desc: "Weekend retreats focused purely on rest, marriage enrichment, and spiritual renewal—no business meetings.",

    hMod6Title: "Crisis Response Team",
    hMod6Desc: "Immediate deployment of counselors, experienced pastors, and prayer partners during acute family or ministry crises.",

    hMod7Title: "Wellness Coaching",
    hMod7Desc: "One-on-one coaching focused on healthy boundaries, time management, family balance, and leadership health.",

    hMod8Title: "Pastor Family Care",
    hMod8Desc: "Dedicated support for the entire household, including spouses, children, parenting guides, and family counseling.",

    hMod9Title: "Online Resource Library",
    hMod9Desc: "24/7 digital access to videos, podcasts, articles, devotionals, marriage guides, and burnout recovery plans.",

    hMod10Title: "Wellness Grants",
    hMod10Desc: "Direct financial grants removing cost barriers for counseling, medical evaluations, and marriage intensives.",

    hMod11Title: "Burnout Prevention Initiative",
    hMod11Desc: "A structured 6-month journey featuring health assessments, coaching, reading plans, and accountability.",

    hMod12Title: "Pastor Care Hotline & App",
    // Theological Initiative Page
    theoPageTitle: "THEOLOGICAL & LEADERSHIP FORMATION INITIATIVES",
    theoPageSubtitle: "Equipping pastors and leaders to faithfully proclaim God's Word, shepherd with excellence, and lead healthy churches.",

    tMod1Title: "Expository Preaching Initiative",
    tMod1Desc: "Helping pastors faithfully proclaim God's Word through sermon workshops, homiletics, cohorts, and coaching.",
    tMod1Item1: "Sermon preparation workshops & Homiletics",
    tMod1Item2: "Preaching cohorts & Sermon coaching",
    tMod1Item3: "Online preaching resource library",

    tMod2Title: "Ministry Excellence Initiative",
    tMod2Desc: "Practical ministry skills covering administration, budgeting, volunteer management, time, and legal responsibilities.",
    tMod2Item1: "Church administration & Budgeting",
    tMod2Item2: "Volunteer & Time management",
    tMod2Item3: "Church communication & Legal ethics",

    tMod3Title: "Church Revitalization Initiative",
    tMod3Desc: "Helping struggling churches become healthy through assessment, vision renewal, evangelism, and discipleship.",
    tMod3Item1: "Church assessment & Vision renewal",
    tMod3Item2: "Evangelism & Discipleship systems",
    tMod3Item3: "Leadership restructuring & Community outreach",

    tMod4Title: "Church Planting Initiative",
    tMod4Desc: "Preparing future church planters through assessment, coaching, residency, launch strategy, and fundraising.",
    tMod4Item1: "Assessment, coaching & Residency",
    tMod4Item2: "Launch strategy & Fundraising",
    tMod4Item3: "Post-launch ongoing mentorship",

    tMod5Title: "Next Generation Leaders Initiative",
    tMod5Desc: "Equipping young pastors, seminary students, interns, associate pastors, and young church planters.",
    tMod5Audience: "Seminary Students • Interns • Associate Pastors • Young Planters",

    tMod6Title: "Shepherd Mentoring Network",
    tMod6Desc: "Connecting experienced pastors with younger leaders for monthly mentoring, coaching, and ministry guidance.",

    tMod7Title: "Leadership Cohorts",
    tMod7Desc: "Year-round small groups focusing on leadership, theology, spiritual formation, church health, and missions.",

    tMod8Title: "Digital Learning Initiative",
    tMod8Desc: "On-demand biblical education featuring online courses, video libraries, podcasts, webinars, and resources.",

    tMod9Title: "Shepherd Resource Center",
    tMod9Desc: "Trusted digital library providing sermon outlines, Bible studies, leadership guides, and ministry templates.",

    tMod10Title: "Evangelism & Mission Initiative",
    tMod10Desc: "Equipping churches to reach communities and nations through personal evangelism, outreach, and multiplication.",

    tMod11Title: "Pastor's Continuing Education Initiative",
    tMod11Desc: "Fostering lifelong learning through annual reading plans, master classes, advanced theology, and certifications.",

    // Pastor Family Adoption Initiative Page (Core Initiative 03)
    sponsorshipPageTitle: "Pastor Family Adoption Initiative",
    sponsorshipPageSubtitle: "Honoring the Calling. Strengthening the Family and Sustaining the Mission",
    adoptionWindowLabel: "Monthly Financial Adoption Window",
    adoptionQuoteP1: "Through the Axios Pastor Family Adoption Initiative, individuals and churches can provide monthly financial support to qualified pastoral families. Every participating pastor undergoes Axios' pastoral, denominational, ministry, character, and financial verification process. Axios determines the appropriate sponsorship amount based on the family's verified financial need and local cost of living.",
    adoptionQuoteP2: "You provide the partnership. Axios provides the verification and accountability.<br>Together, we strengthen faithful shepherds and their families.",
    processFlowTitle: "Our Process and Commitment",
    step1Identificar: "IDENTIFY",
    step2Verificar: "VERIFY",
    step3Conectar: "CONNECT",
    step4Apoyar: "SUPPORT",
    step5Fortalecer: "STRENGTHEN",
    btnReadMoreAdoption: "View first step",
    adoptOpt1Title: "Full Family Adoption",
    adoptOpt1Desc: "A church, individual, family, business, or foundation covers the full Axios-approved monthly sponsorship amount.",
    adoptOpt2Title: "Shared Family Adoption",
    adoptOpt2Desc: "Two or more sponsors combine their commitments to fully fund one approved pastoral family.",
    adoptOpt3Title: "Church Adoption",
    adoptOpt3Desc: "A local church includes a qualified pastoral family in its missions strategy and commits to monthly financial support plus prayer and relational encouragement.",
    adoptOpt4Title: "Multiple Family Adoption",
    adoptOpt4Desc: "Larger churches, businesses, or foundations may sponsor multiple Axios-approved pastoral families.",
    adoptOpt5Title: "Monthly Shepherd Partner",
    adoptOpt5Desc: "Individuals may contribute recurring gifts that Axios combines to complete partially funded sponsorships.",
    adoptOpt6Title: "Where Most Needed Fund",
    adoptOpt6Desc: "Undesignated recurring or one-time gifts help Axios complete sponsorship gaps or maintain continuity when a sponsor transitions.",
    btnReadSecondStep: "View second step",
    sMod4Title: "Financial Adoption Framework",
    frameworkIntro: "The standard Axios sponsorship window is 200 to 500 dollars per month. The pastor does not select the amount and the donor does not determine the family's need. Axios establishes the sponsorship amount through a confidential Pastoral Family Financial Evaluation.",
    tableHeaderSponsorship: "Monthly sponsorship",
    tableHeaderProfile: "General financial profile",
    tableRow1Amount: "100 - 200 dollars",
    tableRow1Desc: "Supplemental support when the church or family already covers a significant portion of basic needs.",
    tableRow2Amount: "300 dollars",
    tableRow2Desc: "Verified moderate gap affecting normal household needs.",
    tableRow3Amount: "400 dollars",
    tableRow3Desc: "A significant gap between pastoral compensation and reasonable local living costs.",
    tableRow4Amount: "500 dollars",
    tableRow4Desc: "Axios standard maximum sponsorship for substantial verified need.",
    frameworkFooter: "The 500 dollar maximum is maintained even when the family's verified financial gap is larger. Axios is designed to strengthen the family's financial base, not necessarily to replace church responsibility or become the family's primary source of income.",

    // Projects Overview & Ecuador Subpage
    projectsPageTitle: "LATIN AMERICA REGIONAL PROJECTS",
    projectsPageSubtitle: "Empowering pastoral families and supporting local Baptist convention initiatives across 20 Latin American nations.",

    backToProjects: "← Back to Projects",
    ecuadorPageTitle: "AXIOS PROJECTS IN ECUADOR",
    ecuadorPageSubtitle: "Restoring dignity and providing holistic support to pastoral families in Quito and the Sierra Central region.",

    projectCategoryHealthyFamily: "Healthy Family Initiative",
    projectTitleEcuador1: "Pastoral Restoration & Care Project — Quito & Sierra Central",

    projectVideoTitle: "Documentary Showcase: Pastoral Resilience in Ecuador",
    projectVideoCaption: "Watch how AXIOS Initiative partners with local churches in Ecuador to restore dignity, provide counseling, and sustain pastoral families.",

    labelLocationHeader: "Location / Region",
    valLocationEcuador: "Quito & Inter-Andean Sierra Region, Ecuador",

    labelPastorHeader: "Pastor & Spouse",
    valPastorEcuador: "Pastor Carlos & Martha Mendoza",
    valPastorChurchRole: "Senior Pastor • Grace & Life Baptist Church (South Quito)",

    labelNeedsHeader: "Pastoral & Household Needs",
    valNeedsItem1: "Free psychological & spiritual counseling sessions for pastoral burn-out",
    valNeedsItem2: "Subsidized medical checkups and emergency healthcare assistance",
    valNeedsItem3: "Pastoral marriage retreat sponsorship & children educational aid",
    valNeedsItem4: "Financial hardship relief during local economic instability",

    labelHistoryHeader: "Church History & Community Impact",
    valHistoryDesc: "Founded in 2004 in South Quito, Grace & Life Baptist Church has faithfully served over 140 local families. Despite economic hardship and heavy ministry demands, Pastor Carlos and Martha have led community dining, youth discipleship, and regional pastor prayer networks. AXIOS Initiative provides critical sponsorship to ensure their health, dignity, and continued call.",

    // 3 Ecuador Projects Cards & Levels
    backToEcuadorProjects: "← Back to Ecuador Projects",
    
    proj1Title: "Iglesia Bautista Familias Saludables",
    proj1Cat: "Pastoral Care & Health",
    proj1Desc: "Providing comprehensive emotional, spiritual, and financial support for pastoral families in South Quito.",
    proj1Raised: "$18,450.00 raised",
    proj1Goal: "$45,000.00 goal",
    proj1Donors: "Raised by 64 people",

    proj2Title: "Seminario Bíblico ABEL",
    proj2Cat: "Theological Training",
    proj2Desc: "Advanced biblical education, pastoral leadership cohorts, and ministry resources for emerging leaders in Ecuador.",
    proj2Raised: "$24,800.00 raised",
    proj2Goal: "$60,000.00 goal",
    proj2Donors: "Raised by 88 people",

    proj3Title: "PONS (Programa Operación Niños Saludables)",
    proj3Cat: "Child & Family Care",
    proj3Desc: "Nutritional support, health checkups, and educational sponsorship for children of pastoral families in Sierra Central.",
    proj3Raised: "$12,300.00 raised",
    proj3Goal: "$35,000.00 goal",
    proj3Donors: "Raised by 42 people",

    btnViewProjectDetail: "View Project & Documentary →",

    // Contact Page
    badgeGetInTouch: "Get In Touch",
    contactTitle: "Get in touch with us",
    contactSubtitle: "Whether you need pastoral support or want to partner with our mission, we are here for you.",
    confidentialTitle: "100% Confidential Pastoral Care",
    confidentialDesc: "We honor your privacy. Every message from a pastor or ministry family is handled with strict discretion and confidentiality.",
    
    labelLocation: "Location",
    valLocation: "State of Florida, United States",
    labelEmail: "Email",
    labelTaxExemption: "Tax Exemption",
    valTaxExemption: "501(c)(3) Public Charity",

    formName: "Full name",
    placeholderName: "Pastor John Doe",
    formEmail: "Email address",
    placeholderEmail: "pastor@church.org",
    formChurch: "Church / Ministry name",
    placeholderChurch: "Grace Baptist Church",
    formSubject: "Reason for inquiry",
    formSubjectOpt1: "Pastoral support request",
    formSubjectOpt2: "Program information",
    formSubjectOpt3: "Partnership & donation query",
    formMessage: "Your message",
    placeholderMessage: "How can we serve you today?",
    formSubmit: "Send message",

    // Donation Modal
    modalDonateTitle: "Support our pastors",
    modalDonateSubtitle: "Your tax-deductible gift empowers pastors and their families to thrive.",
    modalFreqOneTime: "One-time",
    modalFreqMonthly: "Monthly",
    modalSelectAmount: "Select gift amount",
    modalCustomAmount: "Or enter custom amount ($)",
    modalSubmitBtn: "Proceed to secure donation",
    modalTaxNote: "AXIOS INITIATIVE is a registered 501(c)(3) tax-exempt organization in Florida. All donations are tax-deductible to the full extent of the law.",

    // Footer
    footerBrandDesc: "Affirming the God-given dignity and worth of pastoral families through emotional, leadership, and financial support.",
    footerQuickLinks: "Quick navigation",
    footerLegal: "Legal & Compliance",
    footer501c3: "501(c)(3) Public Charity • State of Florida",
    footerCopyright: "© 2026 AXIOS INITIATIVE. All rights reserved."
  },

  es: {
    // Navigation
    navHome: "Inicio",
    navAbout: "Nosotros",
    navProgram: "Iniciativas",
    navProjects: "Proyectos",
    navContact: "Contacto",
    btnDonate: "Donación General",
    btnRequestHelp: "Solicitar Ayuda",
    projectSubmenuTitle: "Proyectos Pastorales en Latinoamérica",

    // Help Request Modal
    badgeHelpConfidential: "Atención 100% Confidencial",
    modalHelpTitle: "Solicitud de Apoyo Pastoral",
    modalHelpSubtitle: "Si eres pastor o líder ministerial y necesitas acompañamiento emocional, teológico o apoyo integral, completa este formulario confidencial.",
    formPhone: "Teléfono de contacto",
    formCountry: "País de residencia",
    placeholderPhone: "+593 99 123 4567",
    placeholderCountry: "Ej. Ecuador, Guatemala, México...",
    formMessage: "Breve descripción de la necesidad",
    placeholderMessage: "Cuéntanos brevemente cómo podemos apoyarte...",
    btnSubmitHelp: "Enviar Solicitud Confidencial",

    // Hero - Concept & Identity
    heroBadge: "Porque quienes sirven… son dignos",
    heroTitle: "Restaurando la dignidad, Honrando el llamado, Inspirando esperanza",
    heroSubtitle: "Hay llamados que se viven frente a muchos, pero cuyas cargas se llevan en silencio. En AXIOS Initiative creemos que quienes han dedicado su vida a cuidar, guiar y servir a otros también merecen ser cuidados.",
    heroStatement: "Existimos para honrar, fortalecer y acompañar a pastores y sus familias, brindándoles cuidado integral, restauración, formación y apoyo para que puedan vivir su llamado con salud, fortaleza y dignidad.",
    tagPastor: "Cuidamos al pastor.",
    tagFamily: "Fortalecemos a la familia.",
    tagChurch: "Servimos a la Iglesia.",
    heroCtaPrimary: "Iniciativas",
    heroCtaSecondary: "Adopte un pastor",

    // Meaning of Axios
    meaningTitle: "¿Qué significa AXIOS?",
    meaningSubtitle: "Derivado del idioma griego original, AXIOS significa:",
    wordWorthy: "Digno",
    wordValuable: "Valioso",
    wordHonor: "Merecedor de Honor",
    meaningDesc: "“Los ancianos que gobiernan bien, sean tenidos por dignos de doble honor, mayormente los que trabajan en predicar y enseñar.” — 1 Timoteo 5:17",

    // Initiatives Overview
    initiativesSectionTitle: "Nuestras Iniciativas",
    initiativesSectionSubtitle: "Detrás de cada pastor hay una persona, una familia y una historia que también necesitan ser cuidadas.",

    // Los cuatro pilares de AXIOS
    fourPillarsTitle: "Los cuatro pilares de AXIOS",
    fourPillarsSubtitle: "La columna vertebral de nuestra organización es honrar,<br>fortalecer y acompañar a las familias pastorales.",
    
    p1Name: "CUIDAR",
    p1Desc: "Cuidado integral para el bienestar emocional, espiritual y relacional del pastor y su familia.",

    p2Name: "RESTAURAR",
    p2Desc: "Espacios seguros de descanso, acompañamiento, renovación y restauración.",

    p3Name: "EQUIPAR",
    p3Desc: "Formación teológica y desarrollo de liderazgo para fortalecer el llamado ministerial.",

    p4Name: "SOSTENER",
    p4Desc: "Conectar iglesias, personas y recursos para apoyar de manera práctica a familias pastorales.",

    heroBadgeTag: "Origen Griego y Significado",
    badgeHolisticCare: "Cuidado Integral",
    badgeFoundationalArchitecture: "Arquitectura Fundacional",

    // 3 Initiative Cards
    pillar1Title: "Salud Mental, Emocional<br>y Espiritual",
    pillar1Desc: "Fomentando el bienestar emocional, la fortaleza matrimonial y la restauración personal.",
    pillar1Item1: "Retiros pastorales, conferencias y redes de apoyo.",
    pillar1Item2: "Consejería confidencial y atención a la salud mental.",
    pillar1Item3: "Plataforma digital y app móvil de salud integral.",
    pillar1Item4: "Espacios seguros de descanso y renovación pastoral.",

    pillar2Title: "Formación Teológica<br>y Liderazgo",
    pillar2Desc: "Equipando a los líderes con educación bíblica, tutoría y herramientas ministeriales.",
    pillar2Item1: "Formación bíblica y teológica avanzada continua.",
    pillar2Item2: "Desarrollo de habilidades y recursos ministeriales.",
    pillar2Item3: "Acompañamiento personalizado y cohortes de estudio.",
    pillar2Item4: "Recursos y herramientas para afilar el llamado.",

    pillar3Title: "Pastor Family Adoption Initiative",
    pillar3Desc: "Conectando corazones y recursos para sostener a quienes han dedicado su vida a servir.",
    pillar3Item1: "Proveer apoyo financiero periódico que ayude a la familia pastoral.",
    pillar3Item2: "Crear una relación genuina entre el patrocinador y el pastor.",
    pillar3Item3: "Invertir en la salud espiritual, emocional, matrimonial y familiar.",
    pillar3Item4: "Dar al pastor oportunidades para continuar desarrollando su llamado.",

    // Dedicated Research Diagnosis Panel (ES)
    badgeResearchDiagnosis: "Investigación & Diagnóstico Pastoral",
    titleResearchDiagnosis: "La Realidad Pastoral en América Latina",
    subtitleResearchDiagnosis: "Hallazgos clave de nuestra investigación regional a líderes, familias y pastores bautistas.",

    group1Title: "Salud Mental & Emocional",
    group2Title: "Formación & Liderazgo",
    group3Title: "Sostén Financiero & Patrocinio",

    // Initiative Micro-Stats (ES)
    p1Stat1Num: "76.2%",
    p1Stat1Desc: "de los pastores se sienten aislados o solos.",
    p1Stat2Tag: "Nivel de Estrés",
    p1Stat2Num: "92.3%",
    p1Stat2Desc: "describe su nivel de estrés como \"ALTO\".",
    p1Stat3Tag: "Bienestar Mental",
    p1Stat3Num: "48.8%",
    p1Stat3Desc: "califican su salud mental como \"NO BUENO\".",

    p2Stat1Tag: "Desarrollo de Liderazgo",
    p2Stat1Num: "66.7%",
    p2Stat1Desc: "expresa necesidad de fortalecimiento en liderazgo.",
    p2Stat2Tag: "Discipulado",
    p2Stat2Num: "61.9%",
    p2Stat2Desc: "requiere un programa de discipulado más fuerte.",

    p3Stat1Num: "71.5%",
    p3Stat1Desc: "sin apoyo financiero adicional.",
    p3Stat2Num: "64.3%",
    p3Stat2Desc: "salario por debajo de lo digno.",
    p3Stat3Num: "$118",
    p3Stat3Desc: "ingreso promedio mensual de jubilación.",
    p3Stat4Num: "78.6%",
    p3Stat4Desc: "sin plan de jubilación (solo 21.4% con plan).",

    researchNoteText: "\"Esta información representa el resultado de una investigación y encuesta de 14 meses realizada en 19 países y 21 Convenciones Bautistas de América Latina.\"",

    // Upcoming Projects Section
    badgeUpcomingEvents: "Agenda de Eventos & Proyectos",
    titleUpcomingProjects: "Próximos Proyectos",
    subtitleUpcomingProjects: "Espacios de encuentro, retiros pastorales y conferencias<br>diseñados para renovar, equipar y honrar a las familias ministeriales.",

    proj1Date: "15 - 18 OCT, 2026",
    proj1Location: "Quito, Ecuador",
    proj1Type: "Retiro Pastoral Presencial",
    proj1Title: "Retiro de Renovación \"AXIOS Restaura\"",
    proj1Desc: "Un espacio de 4 días de descanso integral, atención emocional privada y renovación espiritual para pastores y sus cónyuges.",
    proj1MetaVal1: "25 Parejas Pastorales",
    proj1MetaVal2: "100% Becado por Axios",

    proj2Date: "12 - 14 NOV, 2026",
    proj2Location: "Tegucigalpa, Honduras",
    proj2Type: "Simposio Bíblico & Liderazgo",
    proj2Title: "Cumbre de Capacitación Ministerial",
    proj2Desc: "Talleres intensivos en hermenéutica aplicada, salud mental en el liderazgo y herramientas digitales para iglesias locales.",
    proj2MetaVal1: "120 Líderes y Pastores",
    proj2MetaVal2: "Presencial y Híbrido",

    proj3Date: "05 - 07 DIC, 2026",
    proj3Location: "Guatemala, Guatemala",
    proj3Type: "Conferencia Familiar",
    proj3Title: "Encuentro \"Hogares Dignos & Fuertes\"",
    proj3Desc: "Conferencia orientada a fortalecer la salud matrimonial pastoral, actividades recreativas para hijos de pastores y finanzas saludables.",
    proj3MetaVal1: "40 Familias Pastorales",
    proj3MetaVal2: "Hijos & Matrimonio Pastoral",

    projMetaBeneficiaries: "Beneficiarios:",
    projMetaModality: "Modalidad:",
    projMetaCapacity: "Capacidad:",
    projMetaFormat: "Formato:",
    projMetaAudience: "Dirigido a:",
    projMetaFocus: "Enfoque:",

    projBtnParticipate: "Solicitar Participación",
    projBtnViewInfo: "Ver Información del Evento",
    projBtnLearnProgram: "Conocer Programa",

    // 2026/2027 Goal Campaign
    goalBadge: "Campaña 2026 / 2027",
    goalTitle: "Nuestra meta para 2026/2027 es recaudar $200.000",
    goalSubtitle: "Tu generosidad puede fortalecer a una familia pastoral. Únete a nosotros y ayuda a cuidar a quienes han dedicado su vida a servir a las iglesias en America Latina.",
    goalCta: "Ayúdanos ahora",
    goalRaised: "recaudados",
    goalTarget: "Meta:",

    // Non-profit Trust Banner
    trustTitle: "Estado de la Florida • Cumplimiento IRS 501(c)(3)",
    trustDesc: "AXIOS INITIATIVE opera exclusivamente con fines benéficos, religiosos y educativos.<br>El 70% de los recursos apoya directamente a las familias pastorales.",

    // About Page
    aboutTitle: "Sobre AXIOS INITIATIVE",
    aboutSubtitle: "AXIOS no comenzó con una organización. Comenzó con una carga en el corazón.",
    aboutMissionTitle: "Cuidando el corazón detrás del llamado",
    aboutMissionDesc: "Organizada exclusivamente como una entidad cristiana sin fines de lucro bajo la Sección 501(c)(3) del IRS, AXIOS INITIATIVE existe para respaldar la dignidad, la resiliencia emocional y la estabilidad financiera de los pastores bautistas y sus familias vinculados a sus Convenciones Bautistas en América Latina.",

    statementOfFaithTitle: "Declaración de fe",
    statementOfFaithSubtitle: "Nuestra base descansa en la doctrina cristiana histórica y la verdad bíblica:",

    faith1Title: "Las Sagradas Escrituras",
    faith1Desc: "Creemos que la Biblia es la Palabra de Dios inspirada, infalible e inerrante.",

    faith2Title: "La Trinidad",
    faith2Desc: "Hay un solo Dios, eternamente existente en tres Personas: Padre, Hijo y Espíritu Santo.",

    faith3Title: "El Señor Jesucristo",
    faith3Desc: "Creemos en la deidad de Cristo, su nacimiento virginal, su vida sin pecado, sus milagros, su muerte expiatoria, su resurrección corporal y su regreso glorioso.",

    faith4Title: "Salvación por gracia",
    faith4Desc: "La salvación es por gracia mediante la fe en Jesucristo solamente, sin las obras humanas.",

    faith5Title: "La Iglesia",
    faith5Desc: "La Iglesia es el Cuerpo de Cristo, comisionada para adorar a Dios, hacer discípulos, proclamar el evangelio y servir en amor.",

    faith6Title: "Esperanza eterna",
    faith6Desc: "Creemos en la resurrección de todos, la bienaventuranza eterna de los redimidos y la justicia divina final.",

    governanceTitle: "Gobernanza e integridad fiduciaria",
    governanceDesc: "Dirigida por una Junta Directiva dedicada que opera bajo estrictas políticas de conflicto de intereses, transparencia financiera y la prohibición absoluta de beneficio privado. Sus miembros ejercen su función impulsados por una pasión compartida por la atención pastoral.",

    // Our Team Section
    badgeOurTeam: "Liderazgo & Gobernanza",
    titleOurTeam: "Nuestro Equipo",
    subtitleOurTeam: "Líderes, pastores y siervos dedicados a acompañar,<br>equipar y honrar a las familias pastorales en América Latina.",
    tagPresidentRole: "Fundador & Director Ejecutivo",
    tagLeadershipBoard: "Junta Directiva",
    presidentName: "Pr. Lielson Penido",
    presidentTitle: "Fundador & Director Ejecutivo de AXIOS Initiative",
    presidentBio: `<p>La historia de Lielson Penido ha estado profundamente marcada por la gracia de Dios, la familia y el ministerio. Adoptado desde pequeño y nacido en el contexto de una familia pastoral, creció en Brasil hasta los 12 años y después se mudó con sus padres a Ecuador como misioneros de la Convención Bautista de Brasil, donde comenzó a formarse su amor por Dios, la Iglesia y el servicio cristiano.</p>
<p>Más tarde vivió en Nueva York, donde estudió Ciencias de la Computación durante dos años, antes de responder al llamado de Dios al ministerio y continuar su formación en el Seminario Bautista del Sur de Brasil, en Río de Janeiro, donde fue formado teológicamente para el ministerio pastoral. También realizó una maestría de dos años en Dirección Orquestal, integrando su formación musical con su llamado al servicio en la adoración, y obtuvo un certificado en evangelismo en la Escuela de Billy Graham, fortaleciendo su compromiso con la proclamación del evangelio.</p>
<p>En 1995 contrajo matrimonio con Verónica Penido, su compañera de vida y ministerio. Juntos son padres de dos hijos, Victoria y Lukas, y han dedicado gran parte de su vida a servir a la Iglesia en diferentes culturas y contextos.</p>
<p>A lo largo de casi tres décadas de ministerio, Lielson ha servido como pastor de adoración en Tampa y Lake Worth, Florida; plantador de iglesias; misionero durante diez años en Europa; y capellán empresarial. Actualmente también sirve como Director de Lenguas de la Asociación Bautista de Tampa Bay, trabajando de cerca con pastores, iglesias y líderes de diferentes contextos culturales.</p>
<p>Haber crecido en una familia pastoral, formar su propia familia en medio del ministerio y caminar durante décadas al lado de pastores en diferentes países le ha permitido conocer tanto la belleza del llamado como el peso que muchas veces se lleva en silencio.</p>
<p>De esa historia, experiencia y profunda carga por el bienestar de los pastores y sus familias nace su compromiso con AXIOS Initiative: ayudar a cuidar, fortalecer y honrar a quienes han dedicado sus vidas a cuidar de otros.</p>`,
    presidentQuote: "«Porque quienes sirven… son dignos.»",
    roleCare: "Vicepresidente",
    member2Name: "Pr. Francisco Juarbe, ThD",
    member2Title: "Director de Cuidado Pastoral",
    member2Bio: "Pastor, mentor y educador cristiano con amplia experiencia en cuidado pastoral, plantación de iglesias y formación de líderes. Sirve en Axios Initiative acompañando y fortaleciendo a pastores y líderes en Latinoamérica y el Caribe.",
    roleTheology: "Formación Teológica",
    member3Name: "Pr. Mario Figueroa",
    member3Title: "Board Secretary",
    member3Bio: "Mario ha estado sirviendo como pastor en Tampa desde 2020. En 2023, con un fuerte sentido de llamado a establecer una iglesia multicultural para mantener la unidad generacional en familias bilingües, dejó su carrera de más de 17 años en la industria de la salud para asistir al Sovereign Grace Churches Pastors College en Louisville, KY. Mario luego regresó a Florida para plantar Vine Church Tampa.\n\nMario y su esposa, Diana, nacieron en Puerto Rico y se salvaron durante su juventud adulta. Han estado felizmente casados desde 2011 y tienen dos hijas, Anasofía y Mila. Como familia, disfrutan hablando, haciendo bromas, así como jugando juegos de mesa y noches de cine (especialmente películas de superhéroes).",
    roleOperations: "Operaciones & Alianzas",
    member4Name: "Pr. David Endara",
    member4Title: "Board Treasurer",
    member4Bio: "Pastor y miembro de la Junta Directiva de Axios Initiative, supervisando la gestión y transparencia financiera de la organización.",

    // Initiatives Page
    programsTitle: "INICIATIVAS",
    programsSubtitle: "Empoderando, restaurando y equipando a las familias pastorales a través de nuestras iniciativas clave.",

    program1Title: "Salud mental, emocional y espiritual",
    program1Desc: "Retiros espirituales de renovación, recursos confidenciales de salud mental y redes de apoyo entre pares diseñados para restaurar a pastores y cónyuges.",

    program2Title: "Capacitación teológica y liderazgo",
    program2Desc: "Educación bíblica avanzada, desarrollo de liderazgo, tutoría y programas de capacitación práctica para equipar a los líderes ministeriales.",

    program3Title: "Pastor Family Adoption Initiative",
    program3Desc: "Asistencia financiera integral, alivio de emergencia, becas para sabáticos y patrocinio a largo plazo para familias pastorales en dificultad.",

    // Health Initiative Page (Mental, Emotional and Spiritual Health)
    backToInitiatives: "← Volver a Iniciativas",
    healthPageTitle: "SALUD MENTAL, EMOCIONAL Y ESPIRITUAL",
    healthPageSubtitle: "Atención integral, consejería confidencial y programas especializados<br>diseñados para restaurar y sostener a las familias pastorales.",

    hMod1Title: "Conferencias Axios",
    hMod1Desc: "Conferencias anuales y regionales enfocadas en la salud mental, emocional y espiritual.",
    hMod1Topic1: "Prevención del agotamiento (burnout) y resiliencia",
    hMod1Topic2: "Ansiedad, depresión y estrés en el ministerio",
    hMod1Topic3: "El matrimonio bajo presión y crianza de hijos de pastores",
    hMod1Topic4: "Trauma, duelo y soledad ministerial",
    hMod1Audience: "Pastores • Cónyuges • Parejas • Líderes",

    hMod2Title: "Asistencia de consejería confidencial",
    hMod2Desc: "Apoyo profesional discreto para que los pastores busquen ayuda sin temor a perder credibilidad.",
    hMod2Item1: "Sesiones iniciales de consejería gratuitas",
    hMod2Item2: "Consejería cristiana profesional subsidiada",
    hMod2Item3: "Consejería en línea y referencias de emergencia",
    hMod2Item4: "Consejería matrimonial y familiar",

    hMod3Title: "Evaluaciones de bienestar pastoral",
    hMod3Desc: "Evaluación confidencial anual que cubre estrés, agotamiento, matrimonio, hábitos físicos y vitalidad espiritual.",
    hMod3Item1: "Informe de bienestar personalizado",
    hMod3Item2: "Recomendaciones y recursos a medida",
    hMod3Item3: "Plan de seguimiento estructurado",

    hMod4Title: "Grupos de apoyo entre pares en línea",
    hMod4Desc: "Grupos pequeños confidenciales mensuales de 6 a 10 pastores que brindan oración, rendición de cuentas y ánimo mutuo.",

    hMod5Title: "Retiros para pastores y esposas",
    hMod5Desc: "Retiros de fin de semana enfocados puramente en el descanso, el enriquecimiento matrimonial y la renovación espiritual, sin reuniones de negocios.",

    hMod6Title: "Equipo de respuesta a crisis",
    hMod6Desc: "Despliegue inmediato de consejeros, pastores con experiencia y compañeros de oración durante crisis familiares o ministeriales agudas.",

    hMod7Title: "Coaching de bienestar",
    hMod7Desc: "Coaching individual enfocado en límites saludables, gestión del tiempo, equilibrio familiar y salud en el liderazgo.",

    hMod8Title: "Cuidado de la familia del pastor",
    hMod8Desc: "Apoyo dedicado para todo el hogar, incluyendo cónyuges, hijos, guías de crianza y consejería familiar.",

    hMod9Title: "Biblioteca de recursos en línea",
    hMod9Desc: "Acceso digital 24/7 a videos, podcasts, artículos, devocionales, guías de matrimonio y planes de recuperación del agotamiento.",

    hMod10Title: "Becas y subvenciones de bienestar",
    hMod10Desc: "Subvenciones financieras directas que eliminan las barreras de costo para consejería, evaluaciones médicas e intensivos matrimoniales.",

    hMod11Title: "Iniciativa de prevención del agotamiento",
    hMod11Desc: "Un recorrido estructurado de 6 meses con evaluaciones de salud, coaching, planes de lectura y rendición de cuentas.",

    hMod12Title: "Línea de atención y app pastoral",
    hMod12Desc: "Línea telefónica confidencial 24/7 y aplicación móvil que conecta a los pastores directamente con consejeros cristianos capacitados.",

    // Theological Initiative Page
    theoPageTitle: "INICIATIVAS DE FORMACIÓN TEOLÓGICA Y LIDERAZGO",
    theoPageSubtitle: "Equipando a pastores y líderes para proclamar fielmente la Palabra de Dios,<br>pastorear con excelencia y dirigir iglesias saludables.",

    tMod1Title: "Iniciativa de predicación expositiva",
    tMod1Desc: "Ayudando a los pastores a proclamar fielmente la Palabra de Dios a través de talleres de sermones, homiléctica y coaching.",
    tMod1Item1: "Talleres de preparación de sermones y homiléctica",
    tMod1Item2: "Cohortes de predicación y coaching pastoral",
    tMod1Item3: "Biblioteca de recursos de predicación en línea",

    tMod2Title: "Iniciativa de excelencia<br>en el ministerio",
    tMod2Desc: "Habilidades prácticas para el ministerio que cubren administración, presupuesto, gestión de voluntarios y responsabilidades legales.",
    tMod2Item1: "Administración de iglesias y presupuestos",
    tMod2Item2: "Gestión de voluntarios y administración del tiempo",
    tMod2Item3: "Comunicación eclesiástica y ética legal",

    tMod3Title: "Iniciativa de revitalización de iglesias",
    tMod3Desc: "Ayudando a las iglesias en dificultad a volver a ser saludables mediante evaluación, renovación de visión y evangelismo.",
    tMod3Item1: "Evaluación eclesiástica y renovación de visión",
    tMod3Item2: "Sistemas de evangelismo y discipulado",
    tMod3Item3: "Reestructuración de liderazgo y alcance comunitario",

    tMod4Title: "Iniciativa de<br>Plantación de Iglesias",
    tMod4Desc: "Preparando a los futuros plantadores de iglesias a través de evaluación, coaching, residencia, estrategia de lanzamiento y recaudación de fondos.",
    tMod4Item1: "Evaluación, coaching y residencia pastoral",
    tMod4Item2: "Estrategia de lanzamiento y recaudación de fondos",
    tMod4Item3: "Mentoría continua post-lanzamiento",

    tMod5Title: "Iniciativa de líderes de la próxima generación",
    tMod5Desc: "Capacitando a jóvenes pastores, estudiantes de seminario, pasantes, pastores asociados y jóvenes plantadores.",

    tMod6Title: "Red de mentoría pastoral (Shepherd Network)",
    tMod6Desc: "Conectando a pastores con experiencia con líderes más jóvenes para mentoría mensual, coaching y orientación ministerial.",

    tMod7Title: "Formando discípulos",
    tMod7Desc: "Acompañando a pastores y líderes en un proceso de crecimiento espiritual, formación bíblica y multiplicación, para que puedan hacer discípulos que hacen discípulos.",

    tMod8Title: "Iniciativa de<br>aprendizaje digital",
    tMod8Desc: "Educación bíblica bajo demanda con cursos en línea, biblioteca de videos, podcasts, seminarios web y recursos descargables.",

    tMod9Title: "Centro de recursos pastorales",
    tMod9Desc: "Biblioteca digital confiable que ofrece recursos de sermones, estudios bíblicos, guías de liderazgo y plantillas ministeriales.",

    tMod10Title: "Iniciativa de evangelismo y misiones",
    tMod10Desc: "Equipando a las iglesias para alcanzar a sus comunidades y naciones mediante evangelismo personal, misiones y multiplicación.",

    tMod11Title: "Iniciativa de educación continua pastoral",
    tMod11Desc: "Facilitando oportunidades, becas y alianzas para que pastores puedan acceder a maestrías, doctorados, certificaciones y otros programas de formación avanzada.",

    // Pastor Family Adoption Initiative Page (Core Initiative 03 - 15 Points)
    sponsorshipPageTitle: "Pastor Family Adoption Initiative",
    sponsorshipPageSubtitle: "Honrando el llamado. Fortaleciendo la Familia y sostenciendo la Misión",
    adoptionWindowLabel: "Ventana de Patrocinio Financiero Mensual",
    adoptionQuoteP1: "A través de la Iniciativa de Adopción de Familias Pastorales de Axios, personas e iglesias pueden brindar un apoyo financiero mensual de $200 a $500 a familias pastorales calificadas. Cada pastor participante pasa por el proceso de verificación pastoral, denominacional, ministerial, de carácter y financiero de Axios. Axios determina el monto de patrocinio adecuado en función de la necesidad financiera verificada de la familia y el costo de vida local.",
    adoptionQuoteP2: "Usted brinda la alianza. Axios brinda la verificación y la rendición de cuentas.<br>Juntos, fortalecemos a pastores fieles y a sus familias.",
    processFlowTitle: "Nuestro Proceso y Compromiso",
    step1Identificar: "IDENTIFICAR",
    step2Verificar: "VERIFICAR",
    step3Conectar: "CONECTAR",
    step4Apoyar: "APOYAR",
    step5Fortalecer: "FORTALECER",

    sMod1Title: "Visión y propósito",
    sMod1Desc: "Conectando iglesias y personas con pastores bautistas fieles y sus familias que demuestran carácter bíblico, fruto ministerial, rendición de cuentas y necesidad financiera verificada.",
    sMod1Item1: "Identificar y verificar candidatos con honra",
    sMod1Item2: "Establecer el nivel de apoyo financiero justo",
    sMod1Item3: "Conectar patrocinadores y administrar fondos",

    sMod2Title: "Principios guía",
    sMod2Desc: "Cinco valores fundamentales que rigen el programa de patrocinio: Dignidad, Asociación, Integridad, Mayordomía y Sostenibilidad.",
    sMod2Item1: "Dignidad: socios ministeriales, no caridad",
    sMod2Item2: "Mayordomía: apoyo en necesidades documentadas",
    sMod2Item3: "Sostenibilidad: fortalecer sin crear dependencia",

    sMod3Title: "Formas en que iglesias e individuos pueden adoptar",
    sMod3Desc: "Conoce las 6 modalidades flexibles para que iglesias, familias y particulares respalden a una o más familias pastorales.",
    btnReadMoreAdoption: "Ver primer paso",
    adoptOpt1Title: "Adopción Familiar Completa",
    adoptOpt1Desc: "Una iglesia, particular, familia, empresa o fundación cubre la cantidad completa mensual aprobada por Axios.",
    adoptOpt2Title: "Adopción por familia compartida",
    adoptOpt2Desc: "Dos o más patrocinadores combinan sus compromisos para financiar completamente a una familia pastoral aprobada.",
    adoptOpt3Title: "Adopción en la Iglesia",
    adoptOpt3Desc: "Una iglesia local incluye una familia pastoral cualificada en su estrategia misionera y se compromete a recibir apoyo financiero mensual, además de oración y estímulo relacional.",
    adoptOpt4Title: "Adopción por múltiples familias",
    adoptOpt4Desc: "Las iglesias, empresas o fundaciones más grandes pueden patrocinar varias familias pastorales aprobadas por Axios.",
    adoptOpt5Title: "Socio Mensual de Pastor",
    adoptOpt5Desc: "Las personas pueden aportar donaciones recurrentes que Axios combina para completar patrocinios parcialmente financiados.",
    adoptOpt6Title: "Fondo de mayor necesidad",
    adoptOpt6Desc: "Los regalos recurrentes o puntuales no designados ayudan a Axios a completar los vacíos de patrocinio o a mantener la continuidad cuando un patrocinador hace la transición.",

    sMod4Title: "Marco de Adopción Financiera",
    btnReadSecondStep: "Ver segundo paso",
    frameworkIntro: "La ventana estándar de patrocinio de Axios es de 200 a 500 dólares al mes. El pastor no selecciona la cantidad y el donante no determina la necesidad de la familia. Axios establece la cantidad del patrocinio mediante una Evaluación Financiera Familiar Pastoral confidencial.",
    tableHeaderSponsorship: "Patrocinio mensual",
    tableHeaderProfile: "Perfil financiero general",
    tableRow1Amount: "100 - 200 dólares",
    tableRow1Desc: "Apoyo complementario cuando la iglesia o la familia ya cubren una parte significativa de las necesidades básicas.",
    tableRow2Amount: "300 dólares",
    tableRow2Desc: "Brecha moderada verificada que afecta a las necesidades normales del hogar.",
    tableRow3Amount: "400 dólares",
    tableRow3Desc: "Una brecha significativa entre la compensación pastoral y los razonables costes de vida locales.",
    tableRow4Amount: "500 dólares",
    tableRow4Desc: "Patrocinio máximo estándar de Axios para necesidad verificada sustancial.",
    frameworkFooter: "El máximo de 500 dólares se mantiene incluso cuando la brecha financiera verificada de la familia es mayor. Axios está diseñado para fortalecer la base financiera de la familia, no necesariamente para reemplazar la responsabilidad de la iglesia ni convertirse en la principal fuente de ingresos de la familia.",

    sMod5Title: "Determinación objetiva del monto",
    sMod5Desc: "Axios evalúa confidencialmente el costo de vida local, la composición familiar, el salario pastoral actual y otros ingresos para calcular la brecha real.",
    sMod5Item1: "Costo de vida local (alimentos, vivienda, salud)",
    sMod5Item2: "Compensación de la iglesia y vivienda pastoral",
    sMod5Item3: "Cálculo preciso de la brecha financiera verificada",

    sMod6Title: "Estándar de calificación pastoral",
    sMod6Desc: "Evaluación integral del pastor y su familia buscando carácter bíblico (1 Timoteo 3 / Tito 1), salud familiar y rendición de cuentas.",
    sMod6Item1: "Llamado y carácter bíblico intachable",
    sMod6Item2: "Afiliación bautista activa en Convención y Asociación",
    sMod6Item3: "Fruto en la iglesia, discipulado y comunidad",

    sMod7Title: "Verificación en tres niveles",
    sMod7Desc: "Requisito obligatorio de tres recomendaciones independientes para otorgar el sello oficial \"Pastor Verificado Axios\".",
    sMod7Item1: "Iglesia Local: carácter y servicio pastoral",
    sMod7Item2: "Asociación Bautista: participación activa",
    sMod7Item3: "Convención Bautista: testimonio denominacional",

    sMod8Title: "Proceso de selección (14 pasos)",
    sMod8Desc: "Recorrido estructurado desde la solicitud inicial, verificación denominacional y evaluación familiar, hasta el inicio de la alianza.",
    sMod8Item1: "Evaluación financiera y entrevista confidencial",
    sMod8Item2: "Aprobación por el Consejo de Calificación",
    sMod8Item3: "Asignación de patrocinador e inicio de 12 meses",

    sMod9Title: "Relación de patrocinio transparente",
    sMod9Desc: "Administración fiduciaria a cargo de Axios para mantener compromisos éticos claros entre patrocinadores y pastores sin control indebido.",
    sMod9Item1: "Compromisos del patrocinador: aportes y oración",
    sMod9Item2: "Compromisos del pastor: ética e informes",
    sMod9Item3: "Canales oficiales Axios para aspectos financieros",

    sMod10Title: "Acompañamiento relacional",
    sMod10Desc: "Transformando la ayuda financiera en un vínculo personal mediante oración, informes trimestrales y muestras de aliento.",
    sMod10Item1: "Peticiones de oración y reportes de ministerio",
    sMod10Item2: "Videollamada anual entre patrocinador y familia",
    sMod10Item3: "Muestras de aliento en cumpleaños y aniversarios",

    sMod11Title: "Administración y flujo fiduciario",
    sMod11Desc: "Flujo directo protegido: Patrocinador → Axios Initiative → Familia Pastoral Verificada, garantizando integridad y rendición de cuentas.",
    sMod11Item1: "Recepción y registro transparente de fondos",
    sMod11Item2: "Distribución directa conforme a políticas",
    sMod11Item3: "Protección contra presiones o influencias",

    sMod12Title: "Renovación y graduación (12 meses)",
    sMod12Desc: "Evaluación anual no automática para determinar la continuidad, ajuste del monto o graduación cuando la iglesia logra la autosostenibilidad.",
    sMod12Item1: "Continuar: si la brecha y calificación persisten",
    sMod12Item2: "Ajustar: adaptación del monto a la nueva realidad",
    sMod12Item3: "Graduar: cuando la iglesia asume el sostén completo",

    sMod13Title: "Política de suspensión y revisión",
    sMod13Desc: "Procedimientos escritos de salvaguardia y transparencia ante cambios de afiliación, falsificación de datos o denuncias graves.",
    sMod13Item1: "Revisión inmediata ante cambios denominacionales",
    sMod13Item2: "Proceso de salvaguardias con presunción inocente",
    sMod13Item3: "Protocolo de protección a la familia",

    sMod14Title: "Consejo de calificación pastoral",
    sMod14Desc: "Órgano evaluador colegiado que vela por la integridad en la aprobación de candidaturas de pastores y familias.",
    sMod14Item1: "Pastor bautista con experiencia ministerial",
    sMod14Item2: "Líderes de Convención y Asociación Bautista",
    sMod14Item3: "Profesionales en finanzas y rendición de cuentas",

    sMod15Title: "Perfil digno de patrocinio",
    sMod15Desc: "Ficha privada y respetuosa de la familia pastoral con su historia, visión de ministerio, necesidades de oración e indicadores de verificación.",
    sMod15Item1: "Presentación con permiso y honra a la familia",
    sMod15Item2: "Historia ministerial, iglesia y contexto regional",
    sMod15Item3: "Sello de acreditación \"Pastor Verificado Axios\"",

    // Projects Overview & Ecuador Subpage
    projectsPageTitle: "PROYECTOS REGIONALES EN LATINOAMÉRICA",
    projectsPageSubtitle: "Empoderando a familias pastorales y respaldando iniciativas de convenciones bautistas locales en 20 naciones de América Latina.",

    backToProjects: "← Volver a Proyectos",
    ecuadorPageTitle: "PROYECTOS DE AXIOS EN ECUADOR",
    ecuadorPageSubtitle: "Restaurando la dignidad y brindando apoyo integral a familias pastorales en Quito y la región de la Sierra Central.",

    projectCategoryHealthyFamily: "Iniciativa Familia Saludable",
    projectTitleEcuador1: "Proyecto de Atención y Restauración Pastoral — Quito y Sierra Central",

    projectVideoTitle: "Muestra Documental: Resiliencia Pastoral en Ecuador",
    projectVideoCaption: "Descubre cómo Axios Initiative se asocia con iglesias locales en Ecuador para restaurar la dignidad, brindar consejería y sostener a las familias pastorales.",

    labelLocationHeader: "Lugar / Región",
    valLocationEcuador: "Quito y Región Sierra Interandina, Ecuador",

    labelPastorHeader: "Pastor y Cónyuge",
    valPastorEcuador: "Pastor Carlos y Martha Mendoza",
    valPastorChurchRole: "Pastor Principal • Iglesia Bautista Gracia y Vida (Sur de Quito)",

    labelNeedsHeader: "Necesidades Pastorales y Familiares",
    valNeedsItem1: "Sesiones de consejería psicológica y espiritual gratuitas ante el agotamiento pastoral",
    valNeedsItem2: "Chequeos médicos subsidiados y asistencia de salud de emergencia",
    valNeedsItem3: "Patrocinio de retiros matrimoniales pastorales y ayuda educativa para sus hijos",
    valNeedsItem4: "Alivio financiero de emergencia en momentos de inestabilidad económica local",

    labelHistoryHeader: "Historia de la Iglesia e Impacto Comunitario",
    valHistoryDesc: "Fundada en 2004 en el sur de Quito, la Iglesia Bautista Gracia y Vida ha servido fielmente a más de 140 familias locales. A pesar de las dificultades económicas y las altas demandas del ministerio, el Pastor Carlos y Martha han liderado comedores comunitarios, discipulado juvenil y redes de oración pastoral regional. Axios Initiative brinda patrocinio crítico para garantizar su salud, dignidad y llamado continuo.",

    // 3 Ecuador Projects Cards & Levels
    backToEcuadorProjects: "← Volver a Proyectos de Ecuador",
    
    proj1Title: "Iglesia Bautista Familias Saludables",
    proj1Cat: "Salud y Cuidado Pastoral",
    proj1Desc: "Brindando apoyo integral emocional, espiritual y financiero a familias pastorales en el sur de Quito.",
    proj1Raised: "$18.450,00 recaudados",
    proj1Goal: "Meta: $45.000,00",
    proj1Donors: "Recaudado por 64 personas",

    proj2Title: "Seminario Bíblico ABEL",
    proj2Cat: "Formación Teológica",
    proj2Desc: "Educación bíblica avanzada, cohortes de liderazgo pastoral y recursos ministeriales para líderes emergentes en Ecuador.",
    proj2Raised: "$24.800,00 recaudados",
    proj2Goal: "Meta: $60.000,00",
    proj2Donors: "Recaudado por 88 personas",

    proj3Title: "PONS (Programa Operación Niños Saludables)",
    proj3Cat: "Cuidado Infantil y Familiar",
    proj3Desc: "Apoyo nutricional, chequeos de salud y patrocinio educativo para hijos de familias pastorales en la Sierra Central.",
    proj3Raised: "$12.300,00 recaudados",
    proj3Goal: "Meta: $35.000,00",
    proj3Donors: "Recaudado por 42 personas",

    btnViewProjectDetail: "Ver Proyecto y Documental →",

    // Contact Page
    badgeGetInTouch: "Ponte en contacto",
    contactTitle: "Ponte en contacto con nosotros",
    contactSubtitle: "Ya sea que necesites apoyo pastoral o desees unirte a nuestra misión, estamos aquí para servirte.",
    confidentialTitle: "Atención pastoral 100% confidencial",
    confidentialDesc: "Honramos tu privacidad. Cada mensaje de un pastor o familia ministerial es tratado con la más estricta discreción y confidencialidad.",
    
    labelLocation: "Ubicación",
    valLocation: "Estado de Florida, Estados Unidos",
    labelEmail: "Correo electrónico",
    labelTaxExemption: "Exención fiscal",
    valTaxExemption: "Entidad 501(c)(3) Sin Fines de Lucro",

    formName: "Nombre completo",
    placeholderName: "Pastor Juan Pérez",
    formEmail: "Correo electrónico",
    placeholderEmail: "pastor@iglesia.org",
    formChurch: "Iglesia / Ministerio",
    placeholderChurch: "Iglesia Bautista Gracia",
    formSubject: "Motivo de la consulta",
    formSubjectOpt1: "Solicitud de apoyo pastoral",
    formSubjectOpt2: "Información sobre programas",
    formSubjectOpt3: "Alianzas y donaciones",
    formMessage: "Tu mensaje",
    placeholderMessage: "¿Cómo podemos servirte hoy?",
    formSubmit: "Enviar mensaje",

    // Donation Modal
    modalDonateTitle: "Apoya a nuestros pastores",
    modalDonateSubtitle: "Tu donativo deducible de impuestos fortalece la vida y ministerio de los pastores.",
    modalFreqOneTime: "Única vez",
    modalFreqMonthly: "Mensual",
    modalSelectAmount: "Selecciona el monto",
    modalCustomAmount: "O ingresa un monto personalizado ($)",
    modalSubmitBtn: "Continuar a donación segura",
    modalTaxNote: "AXIOS INITIATIVE es una organización 501(c)(3) exenta de impuestos registrada en Florida. Todas las donaciones son deducibles de impuestos según la ley.",

    // Footer
    footerBrandDesc: "Afirmando la dignidad y el honor dados por Dios a las familias pastorales a través de apoyo emocional, de liderazgo y financiero.",
    footerQuickLinks: "Navegación rápida",
    footerLegal: "Legal y Cumplimiento",
    footer501c3: "Entidad 501(c)(3) Sin Fines de Lucro • Estado de Florida",
    footerCopyright: "© 2026 AXIOS INITIATIVE. Todos los derechos reservados."
  }
};

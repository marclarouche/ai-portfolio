/* ============================================
   COPY EVERYTHING BELOW THIS LINE
   ============================================
   
   INSTRUCTIONS:
   1. Open your js/script.js file
   2. Find line 352: // INTELLIGENT CHATBOT ENGINE
   3. Delete from line 352 to line 651 (the entire chatbot section)
   4. Paste everything from "// ========" below to the end of this file
   5. Save and refresh browser
   
   ============================================ */


// ============================================
// INTELLIGENT CHATBOT ENGINE - IMPROVED
// ============================================
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// ============================================
// Q&A DATABASE - 30 pairs (expand to 50-100)
// ============================================
const chatbotResponses = [
    // ===== GENERAL BACKGROUND & EXPERIENCE =====
    {
        id: 1,
        category: "experience",
        keywords: ["experience", "years", "background", "worked", "career", "long"],
        response: `${CANDIDATE_INFO.name} has over 15 years of experience in cybersecurity and GRC. He's worked with federal agencies including the US Navy and IRS, implementing NIST RMF, managing security audits, and leading technical teams. His experience spans compliance, cloud security, vulnerability management, and technical writing.`
    },
    {
        id: 2,
        category: "summary",
        keywords: ["about", "tell me about", "who", "summary", "overview"],
        response: `${CANDIDATE_INFO.name} is a cybersecurity and GRC professional specializing in NIST 800-53, Risk Management Framework, and security compliance. He combines hands-on security engineering with strong technical writing skills. Currently building AI-powered security tools and writing at CyberLifeCoach.pro.`
    },
    {
        id: 3,
        category: "companies",
        keywords: ["companies", "where worked", "employers", "organizations"],
        response: `${CANDIDATE_INFO.name} has worked with:\n• Naval Sea Systems Command (NAVSEA) - 10 years\n• IRS Chief Counsel - 9+ years\n• MJTechniques LLC (remote consulting) - 2 years\n\nHe's secured mission-critical systems for federal agencies and supported compliance initiatives across government organizations.`
    },

    // ===== TECHNICAL SKILLS =====
    {
        id: 4,
        category: "skills-nist",
        keywords: ["nist", "800-53", "rmf", "risk management framework", "fisma"],
        response: `${CANDIDATE_INFO.name} has deep expertise in NIST 800-53 and the Risk Management Framework (RMF). He's led complete RMF implementations for Navy systems, achieved Authority to Operate (ATO) for critical infrastructure, and managed continuous monitoring programs. He's also experienced with FISMA compliance and security control assessments.`
    },
    {
        id: 5,
        category: "skills-cloud",
        keywords: ["aws", "amazon", "cloud", "azure", "ec2", "s3", "lambda"],
        response: `${CANDIDATE_INFO.name} holds AWS Solutions Architect and Azure Administrator certifications. He's designed and implemented security controls for AWS and Azure cloud environments supporting government operations. Experience includes EC2, S3, Lambda, RDS, IAM, CloudWatch, and cloud compliance frameworks.`
    },
    {
        id: 6,
        category: "skills-compliance",
        keywords: ["compliance", "audit", "iso", "soc2", "pci", "gdpr"],
        response: `${CANDIDATE_INFO.name} has extensive compliance experience including:\n• ISO 27001/27002 implementation\n• SOC 2 audit preparation\n• PCI-DSS compliance\n• GDPR and CCPA frameworks\n• Third-party audit support\n• Security assessment and gap analysis`
    },
    {
        id: 7,
        category: "skills-grc",
        keywords: ["grc", "governance", "risk", "policy", "assessment"],
        response: `GRC is one of ${CANDIDATE_INFO.name}'s core competencies. He's developed security policies, led risk assessments, managed compliance programs, and supported security audits. He excels at translating complex security requirements into practical implementation guidance.`
    },
    {
        id: 8,
        category: "skills-vulnerability",
        keywords: ["vulnerability", "scanning", "nessus", "remediation", "patching"],
        response: `${CANDIDATE_INFO.name} has hands-on experience with vulnerability management including:\n• Nessus and Retina scanning\n• SCAP compliance validation\n• Vulnerability remediation coordination\n• Patch management\n• Risk prioritization\n• Monthly security testing and reporting`
    },
    {
        id: 9,
        category: "skills-systems",
        keywords: ["windows", "server", "sql", "active directory", "powershell"],
        response: `${CANDIDATE_INFO.name} has strong systems administration background:\n• Windows Server 2008-2019\n• SQL Server 2008-2019\n• Active Directory management\n• PowerShell scripting\n• IIS web server\n• Hyper-V and VMware virtualization`
    },
    {
        id: 10,
        category: "skills-writing",
        keywords: ["writing", "documentation", "technical writer", "sop", "policy"],
        response: `Technical writing is one of ${CANDIDATE_INFO.name}'s differentiators. He's created:\n• Security policies and procedures\n• Compliance documentation\n• Security assessment reports\n• Training materials\n• Exam content for certifications\n• Technical blog content at CyberLifeCoach.pro\n\nHe excels at making complex security topics clear and actionable.`
    },
    {
        id: 11,
        category: "skills-python",
        keywords: ["python", "programming", "scripting", "automation", "code"],
        response: `${CANDIDATE_INFO.name} is proficient in Python for security automation, data analysis, and tool development. He also has experience with PowerShell, batch scripting, and SQL for various security and systems tasks. Currently building AI-powered cybersecurity tools.`
    },

    // ===== CERTIFICATIONS =====
    {
        id: 12,
        category: "certifications",
        keywords: ["certification", "certified", "certs", "credentials", "cissp", "ceh"],
        response: `${CANDIDATE_INFO.name} holds extensive certifications including:\n\n🛡️ **Security:** CISSP, CISA, CEH, Security+\n☁️ **Cloud:** AWS Solutions Architect, Azure Administrator\n🔧 **Systems:** MCSE, MCSA, MCTS SQL Server, CCNA\n📚 **Plus:** Network+, Linux+, Storage+, Project+, CTT+\n\nHe maintains current knowledge through continuous learning and hands-on practice.`
    },
    {
        id: 13,
        category: "clearance",
        keywords: ["clearance", "security clearance", "secret", "top secret"],
        response: `${CANDIDATE_INFO.name} holds an active SECRET security clearance from his work with federal agencies. He has extensive experience working in classified environments and understands the unique security requirements of government systems.`
    },

    // ===== SPECIFIC PROJECTS =====
    {
        id: 14,
        category: "projects-navy",
        keywords: ["navy", "navsea", "federal", "government", "dod"],
        response: `At Naval Sea Systems Command, ${CANDIDATE_INFO.name} led:\n• Complete RMF implementation for Navy Knowledge Management systems\n• Cloud security controls for AWS/Azure environments\n• Virtual server environment management (300+ VMs)\n• Vulnerability management programs\n• Security audits and continuous monitoring\n\nHe achieved and maintained Authority to Operate (ATO) for mission-critical systems.`
    },
    {
        id: 15,
        category: "projects-irs",
        keywords: ["irs", "tax", "chief counsel"],
        response: `At the IRS Chief Counsel, ${CANDIDATE_INFO.name}:\n• Maintained 100% security compliance through monthly SCAP testing\n• Led SQL Server security remediation project\n• Developed rapid desktop deployment program (reduced time from 2 days to 4 hours)\n• Created IT Knowledge Base for new specialists\n• Supported e-discovery and legal hold processes\n\nHe excelled at balancing security with operational efficiency.`
    },
    {
        id: 16,
        category: "projects-current",
        keywords: ["current", "now", "currently", "cyberlifecoach", "blog"],
        response: `Currently, ${CANDIDATE_INFO.name} is:\n• Building AI-powered cybersecurity tools\n• Writing practical security content at CyberLifeCoach.pro\n• Developing mobile security apps (launching in Apple App Store)\n• Creating this interactive portfolio concept\n• Consulting on technical content and security topics\n\nHe's focused on making security more accessible and practical.`
    },

    // ===== WORK STYLE & LEADERSHIP =====
    {
        id: 17,
        category: "leadership",
        keywords: ["leadership", "lead", "manage", "team", "mentor"],
        response: `${CANDIDATE_INFO.name} has led cross-functional security teams and IT operations. His leadership style emphasizes:\n• Clear communication and documentation\n• Mentoring and knowledge transfer\n• Practical solutions over theoretical perfection\n• Collaboration with stakeholders\n• Continuous process improvement\n\nHe's trained new employees and created comprehensive onboarding materials.`
    },
    {
        id: 18,
        category: "remote",
        keywords: ["remote", "hybrid", "location", "relocate", "where"],
        response: `${CANDIDATE_INFO.name} is open to remote, hybrid, or on-site positions. He's currently based in California and has experience working with distributed teams. He's flexible on relocation for the right opportunity and has worked successfully in both government office environments and remote consulting roles.`
    },
    {
        id: 19,
        category: "work-style",
        keywords: ["work style", "approach", "how you work", "methodology"],
        response: `${CANDIDATE_INFO.name}'s approach:\n• **Practical first** - Security that actually works\n• **Clear communication** - No jargon, just clarity\n• **Continuous learning** - Stays current with threats\n• **Collaboration** - Works well across teams\n• **Documentation** - Everything is documented\n• **Results-focused** - Measurable improvements\n\nHe believes in security that enables the mission, not blocks it.`
    },

    // ===== AVAILABILITY & LOGISTICS =====
    {
        id: 20,
        category: "availability",
        keywords: ["available", "start", "when", "notice", "timeline"],
        response: `${CANDIDATE_INFO.name} is open to discussing new opportunities! He can typically start within 2-4 weeks depending on the role and transition requirements. For specific availability and timing, please reach out via email at marc@marclarouche.com.`
    },
    {
        id: 21,
        category: "salary",
        keywords: ["salary", "compensation", "pay", "rate", "cost", "expect"],
        response: `Compensation discussions are best handled directly with ${CANDIDATE_INFO.name}. His expectations are competitive for his experience level and skill set. Please reach out via email at marc@marclarouche.com to discuss specifics based on the role and requirements.`
    },
    {
        id: 22,
        category: "job-type",
        keywords: ["full-time", "contract", "consultant", "consulting", "freelance"],
        response: `${CANDIDATE_INFO.name} is open to various arrangements including full-time employment, contract positions, or consulting engagements. The best fit depends on the project scope and organizational needs. He's flexible and happy to discuss what works best for both parties.`
    },

    // ===== WHY HIRE / STRENGTHS =====
    {
        id: 23,
        category: "why-hire",
        keywords: ["why hire", "why choose", "what makes", "best", "unique", "stand out"],
        response: `${CANDIDATE_INFO.name} offers a rare combination:\n\n✓ **Technical depth** - 15+ years hands-on experience\n✓ **Compliance expertise** - NIST, ISO, FISMA implementation\n✓ **Communication skills** - Technical writer who explains clearly\n✓ **Practical approach** - Security that works in real environments\n✓ **Federal experience** - Understands government requirements\n✓ **Current skills** - Cloud, AI, modern tooling\n\nHe bridges the gap between security theory and practical implementation.`
    },
    {
        id: 24,
        category: "accomplishments",
        keywords: ["accomplish", "achievement", "success", "proud", "impact"],
        response: `Key accomplishments:\n\n• Led RMF implementation achieving ATO for critical Navy systems\n• Maintained 100% security compliance rate at IRS\n• Reduced desktop deployment time from 2 days to 4 hours\n• Managed 300+ virtual servers with 99.9% uptime\n• Created knowledge base reducing onboarding time 40%\n• Identified and resolved critical backup system vulnerability\n\n${CANDIDATE_INFO.name} focuses on measurable improvements, not just process.`
    },

    // ===== INDUSTRY EXPERIENCE =====
    {
        id: 25,
        category: "industries",
        keywords: ["industry", "sector", "domain", "healthcare", "finance"],
        response: `${CANDIDATE_INFO.name} has primarily worked in:\n• **Federal Government** - Navy, IRS, defense contractors\n• **Cybersecurity** - Security tools and consulting\n\nHis security frameworks (NIST, ISO) translate across industries. He's interested in healthcare, finance, and technology sectors where strong security and compliance are critical.`
    },

    // ===== EDUCATION =====
    {
        id: 26,
        category: "education",
        keywords: ["education", "degree", "school", "university", "mba"],
        response: `${CANDIDATE_INFO.name} holds:\n• **MBA** in Information Technology Knowledge Management - California Intercontinental University\n• **Bachelor of Science** - University of Michigan, Flint\n• **Associate of Science** - University of Indianapolis\n\nPlus 15+ professional certifications across security, cloud, and IT infrastructure.`
    },

    // ===== TOOLS & TECHNOLOGIES =====
    {
        id: 27,
        category: "tools-security",
        keywords: ["tools", "security tools", "siem", "scanner"],
        response: `${CANDIDATE_INFO.name} has hands-on experience with:\n• **Scanners:** Nessus, Retina, SCAP, MBSA\n• **Monitoring:** Log analysis, SIEM solutions\n• **Pen testing:** Burp Suite, Metasploit, Wireshark\n• **Compliance:** SCAP validation, continuous monitoring\n• **Cloud:** AWS Security Hub, Azure Security Center`
    },

    // ===== CONTACT & NEXT STEPS =====
    {
        id: 28,
        category: "contact",
        keywords: ["contact", "reach", "email", "get in touch", "hire", "connect"],
        response: `You can reach ${CANDIDATE_INFO.name} via:\n\n📧 **Email:** marc@marclarouche.com\n💼 **LinkedIn:** linkedin.com/in/marcjlarouche\n💻 **GitHub:** github.com/marclarouche\n🌐 **Blog:** CyberLifeCoach.pro\n\nFeel free to reach out to discuss opportunities or ask more specific questions!`
    },
    {
        id: 29,
        category: "interview",
        keywords: ["interview", "next step", "process", "call", "meeting"],
        response: `${CANDIDATE_INFO.name} would be happy to discuss the role in more detail! The best next step is to reach out via email at marc@marclarouche.com to schedule a call. He's typically available for phone or video interviews and can be flexible with scheduling.`
    },
    {
        id: 30,
        category: "resume",
        keywords: ["resume", "cv", "download", "portfolio"],
        response: `You're already viewing ${CANDIDATE_INFO.name}'s interactive portfolio! For a traditional resume, you can use the "Download Resume" button in the contact section. This portfolio provides much more detail about his background, but a PDF resume is available if needed.`
    },

    // ===== GREETINGS =====
    {
        id: 31,
        category: "greetings",
        keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "sup", "what's up"],
        response: `Hello! I'm here to tell you about ${CANDIDATE_INFO.name}'s professional background. What would you like to know? Try asking about his experience, skills, certifications, or projects!`
    },

    // ===== DEFAULT/FALLBACK =====
    {
        id: 999,
        category: "fallback",
        keywords: ["*"], // Special wildcard for fallback
        response: `I'm not sure I understood that specific question. Try asking about:\n\n• ${CANDIDATE_INFO.name}'s technical skills and certifications\n• Work experience at Navy or IRS\n• Leadership and team management\n• Compliance frameworks (NIST, ISO, etc.)\n• Current projects and interests\n• How to get in contact\n\nOr ask something more specific about his background!`
    }
];

// ============================================
// PATTERN MATCHING LOGIC
// ============================================
function findBestChatbotMatch(userMessage) {
    const message = userMessage.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;

    // Check each response for keyword matches
    for (const response of chatbotResponses) {
        // Skip fallback for now
        if (response.category === "fallback") continue;

        let score = 0;
        
        // Count how many keywords match
        for (const keyword of response.keywords) {
            if (message.includes(keyword.toLowerCase())) {
                score++;
            }
        }

        // Update best match if this scores higher
        if (score > bestScore) {
            bestScore = score;
            bestMatch = response;
        }
    }

    // If no good match, return fallback
    if (bestScore === 0 || !bestMatch) {
        return chatbotResponses.find(r => r.category === "fallback").response;
    }

    return bestMatch.response;
}

// ============================================
// CHAT UI FUNCTIONS
// ============================================
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
    
    // Convert markdown-style bold to HTML and preserve line breaks
    const formattedContent = content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    
    messageDiv.innerHTML = formattedContent;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addLoadingMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message loading';
    messageDiv.id = 'loadingMessage';
    messageDiv.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
}

function sendChatMessage(message = null) {
    const userMessage = message || chatInput.value.trim();
    if (!userMessage) return;

    addMessage(userMessage, true);
    if (!message) chatInput.value = '';
    sendBtn.disabled = true;
    
    const loadingMsg = addLoadingMessage();
    
    // Simulate thinking time (makes it feel more natural)
    setTimeout(() => {
        loadingMsg.remove();
        const response = findBestChatbotMatch(userMessage);
        addMessage(response);
        sendBtn.disabled = false;
        chatInput.focus(); // Return focus to input
    }, 600);
}

// ============================================
// EVENT LISTENERS
// ============================================
sendBtn.addEventListener('click', () => sendChatMessage());

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
    }
});

// Suggestion pills
document.querySelectorAll('.suggestion-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        const question = pill.getAttribute('data-question');
        sendChatMessage(question);
    });
});

// ============================================
// END OF CHATBOT SECTION
// ============================================

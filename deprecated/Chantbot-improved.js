// Note: This shows the updated chatbot section with 50 additional questions and randomization
// Add this to your existing script.js file

// ============================================
// CHATBOT KNOWLEDGE BASE (UPDATED - 100+ Q&A)
// ============================================
const chatbotResponses = [
    // ===== EXISTING 52 QUESTIONS (1-52) - Keep all your current ones =====
    // ... [All your existing questions from id: 1 to id: 52 remain unchanged]
    
    // ===== NEW 50 QUESTIONS (53-102) =====
    {
        id: 53,
        category: "skills-iam",
        keywords: ["iam", "identity access management", "rbac", "access control", "privileged access"],
        response: "Marc has extensive IAM experience from federal environments. He's implemented role-based access controls (RBAC), managed privileged accounts, conducted access reviews, and enforced least privilege principles. He's worked with Active Directory security, account provisioning workflows, and access certification processes."
    },
    {
        id: 54,
        category: "skills-threat-modeling",
        keywords: ["threat modeling", "threat analysis", "attack surface", "threat assessment"],
        response: "Marc performs threat modeling as part of security assessments and RMF implementation. He identifies potential attack vectors, evaluates threats against federal systems, and prioritizes security controls based on threat likelihood and impact. He's familiar with frameworks like STRIDE and considers both technical and operational threats."
    },
    {
        id: 55,
        category: "tools-ansible",
        keywords: ["ansible", "automation tools", "configuration management", "infrastructure as code"],
        response: "While Marc's primary automation experience is with PowerShell and Python scripting, he understands infrastructure-as-code concepts and configuration management tools like Ansible. He's interested in expanding his automation capabilities and has worked with automated deployment processes in virtualized environments."
    },
    {
        id: 56,
        category: "framework-gdpr",
        keywords: ["gdpr", "general data protection", "eu privacy", "data privacy", "privacy regulation"],
        response: "Marc has GDPR compliance knowledge including data protection principles, privacy by design, data subject rights, and breach notification requirements. He understands how GDPR intersects with other frameworks and has helped organizations map data flows and implement privacy controls."
    },
    {
        id: 57,
        category: "framework-ccpa",
        keywords: ["ccpa", "california consumer privacy", "consumer privacy", "california privacy"],
        response: "Marc is familiar with CCPA requirements for consumer data privacy including disclosure obligations, data deletion rights, and opt-out mechanisms. He understands the similarities and differences between CCPA and GDPR, and how to implement controls that satisfy multiple privacy regulations."
    },
    {
        id: 58,
        category: "skills-penetration-testing",
        keywords: ["penetration test", "pentest", "pen test", "ethical hacking", "red team"],
        response: "While Marc's primary focus is defensive security and compliance, he has penetration testing knowledge from vulnerability assessments and security testing. He understands common attack techniques, coordinates with penetration testers, and uses findings to improve security postures. He's familiar with OWASP Top 10 and common exploitation frameworks."
    },
    {
        id: 59,
        category: "tools-splunk",
        keywords: ["splunk", "log management", "siem", "log analysis", "security monitoring"],
        response: "Marc has experience with log analysis and security monitoring using various tools. While his federal work used government-specific SIEM solutions, he understands Splunk's capabilities for log aggregation, correlation, alerting, and compliance reporting. He's skilled at creating meaningful security dashboards and alerts."
    },
    {
        id: 60,
        category: "skills-container-security",
        keywords: ["container security", "docker", "kubernetes", "k8s", "containerization"],
        response: "Marc is actively expanding his container security knowledge. He understands container fundamentals, image scanning, runtime security, and Kubernetes security best practices. This is an area where he's investing time to stay current with modern cloud-native architectures and DevSecOps practices."
    },
    {
        id: 61,
        category: "experience-mentoring",
        keywords: ["mentoring", "mentor", "coaching", "teaching", "training others"],
        response: "Marc has extensive mentoring experience. At NAVSEA, he trained junior administrators on security procedures and system management. As a technical consultant, he's helped teams understand complex compliance requirements. He believes in knowledge sharing and has created documentation and training materials to help others grow their skills."
    },
    {
        id: 62,
        category: "tools-git",
        keywords: ["git", "version control", "github", "gitlab", "source control"],
        response: "Marc uses Git for version control in his development projects and documentation management. He's comfortable with branching strategies, pull requests, and collaborative development workflows. He maintains his portfolio and scripts in version control and follows best practices for code management."
    },
    {
        id: 63,
        category: "skills-data-classification",
        keywords: ["data classification", "data labeling", "information classification", "sensitive data"],
        response: "Marc has implemented data classification programs in federal environments. He's worked with classifications from Unclassified to Secret, developed data handling procedures, and trained staff on proper classification and protection. He understands how classification drives security controls and compliance requirements."
    },
    {
        id: 64,
        category: "framework-hipaa",
        keywords: ["hipaa", "health insurance portability", "healthcare", "phi", "protected health"],
        response: "Marc has HIPAA knowledge including the Security Rule, Privacy Rule, and Breach Notification Rule. He understands requirements for protecting PHI, conducting risk assessments, implementing safeguards, and maintaining compliance in healthcare environments. His federal compliance experience translates well to HIPAA requirements."
    },
    {
        id: 65,
        category: "skills-api-security",
        keywords: ["api security", "rest api", "api", "web services", "api gateway"],
        response: "Marc understands API security principles including authentication, authorization, input validation, rate limiting, and secure communication. He's worked with REST APIs in cloud environments and understands OWASP API Security Top 10. He implements security controls for API endpoints and monitors for abuse."
    },
    {
        id: 66,
        category: "tools-terraform",
        keywords: ["terraform", "infrastructure as code", "iac", "terraform cloud"],
        response: "While Marc's infrastructure automation has primarily used PowerShell and manual processes, he's familiar with Terraform concepts and infrastructure-as-code principles. He understands how IaC improves consistency, enables version control, and supports cloud security through policy-as-code approaches."
    },
    {
        id: 67,
        category: "experience-vendor-management",
        keywords: ["vendor management", "third party", "vendor risk", "supplier", "procurement"],
        response: "Marc has vendor management experience from federal contracting environments. He's evaluated third-party security, reviewed vendor compliance documentation, coordinated vendor access, and ensured vendors meet security requirements. He understands vendor risk assessments, SLA management, and the importance of continuous vendor monitoring."
    },
    {
        id: 68,
        category: "skills-security-awareness",
        keywords: ["security awareness", "user training", "phishing", "security culture", "awareness training"],
        response: "Marc has developed and delivered security awareness training for federal employees and contractors. He's created phishing simulations, developed training materials, and measured awareness program effectiveness. He believes security culture starts with educated users and makes technical training engaging and practical."
    },
    {
        id: 69,
        category: "tools-qualys",
        keywords: ["qualys", "vulnerability scanner", "qualys guard", "qualys cloud"],
        response: "Marc has used various vulnerability scanning tools in federal environments. While his primary experience is with Nessus and Retina, he's familiar with Qualys capabilities for continuous scanning, compliance monitoring, and vulnerability management. He understands how to interpret scan results and prioritize remediation."
    },
    {
        id: 70,
        category: "skills-zero-trust",
        keywords: ["zero trust", "ztna", "zero trust architecture", "never trust always verify"],
        response: "Marc understands zero trust security principles including verify explicitly, least privilege access, and assume breach. He's implemented components of zero trust in federal environments through strong authentication, network segmentation, and continuous monitoring. He sees zero trust as the future of security architecture."
    },
    {
        id: 71,
        category: "experience-budget",
        keywords: ["budget", "budgeting", "cost", "financial", "procurement budget"],
        response: "Marc has managed security budgets and made cost-justified recommendations for security investments. At NAVSEA, he evaluated security tools, justified purchases, and optimized resource allocation. He understands how to balance security needs with budget constraints and communicate ROI to leadership."
    },
    {
        id: 72,
        category: "skills-devsecops",
        keywords: ["devsecops", "devops security", "ci/cd security", "pipeline security", "shift left"],
        response: "Marc is actively learning DevSecOps practices. He understands the concept of shifting security left, integrating security into CI/CD pipelines, and automated security testing. While his background is traditional IT security, he's expanding into modern development workflows and security automation for development environments."
    },
    {
        id: 73,
        category: "tools-servicenow",
        keywords: ["servicenow", "snow", "itsm", "ticketing system", "change management"],
        response: "Marc has used ServiceNow and similar ITSM platforms for incident tracking, change management, and service requests in federal environments. He's comfortable with ticketing workflows, SLA tracking, and using ITSM tools to coordinate security incidents and changes across teams."
    },
    {
        id: 74,
        category: "skills-encryption",
        keywords: ["encryption", "cryptography", "ssl", "tls", "crypto", "encrypted"],
        response: "Marc has implemented encryption controls for data at rest and in transit. He's configured SSL/TLS, managed encryption certificates, implemented full-disk encryption, and ensured proper key management. He understands cryptographic standards, certificate authorities, and when to apply different encryption methods."
    },
    {
        id: 75,
        category: "experience-cross-functional",
        keywords: ["cross functional", "collaboration", "work with teams", "coordinate", "stakeholders"],
        response: "Marc excels at cross-functional collaboration. He's worked with developers, operations teams, auditors, management, and external vendors. His technical writing background helps him communicate effectively across all levels. He bridges gaps between technical and non-technical stakeholders to achieve security objectives."
    },
    {
        id: 76,
        category: "skills-database-security",
        keywords: ["database security", "sql security", "database hardening", "db security"],
        response: "Marc has extensive database security experience from managing SQL Server 2008-2019 environments. He's implemented SQL hardening, configured authentication, managed permissions, conducted security assessments, and performed database vulnerability scanning. He understands database encryption, backup security, and compliance requirements."
    },
    {
        id: 77,
        category: "framework-fedramp",
        keywords: ["fedramp", "federal risk authorization", "fedramp moderate", "fedramp high"],
        response: "Marc has FedRAMP knowledge from his federal work with NIST 800-53 controls. While he hasn't led a full FedRAMP authorization, he understands the framework's relationship to FISMA, the authorization process, and how cloud service providers achieve FedRAMP certification. His RMF experience translates directly to FedRAMP requirements."
    },
    {
        id: 78,
        category: "tools-jira",
        keywords: ["jira", "atlassian", "issue tracking", "agile tools", "project tracking"],
        response: "Marc has used Jira for project management, issue tracking, and agile workflows. He's comfortable creating tickets, managing sprints, tracking security remediation items, and generating reports. He understands how to integrate security workflows into development tracking systems."
    },
    {
        id: 79,
        category: "skills-mobile-security",
        keywords: ["mobile security", "mobile device", "mdm", "byod", "mobile app security"],
        response: "Marc has implemented mobile device security policies in federal environments. He's worked with MDM solutions, BYOD policies, mobile application vetting, and secure mobile communications. He understands the unique security challenges of mobile devices and implements layered controls for mobile endpoints."
    },
    {
        id: 80,
        category: "experience-crisis",
        keywords: ["crisis", "emergency", "critical incident", "high pressure", "urgent"],
        response: "Marc has handled critical security incidents and high-pressure situations in federal environments. He stays calm under pressure, communicates clearly during crises, and focuses on rapid containment and resolution. His experience includes managing urgent security patches, responding to audit findings, and coordinating emergency changes."
    },
    {
        id: 81,
        category: "skills-forensics",
        keywords: ["forensics", "digital forensics", "investigation", "evidence", "forensic analysis"],
        response: "While not a dedicated forensics specialist, Marc has forensic investigation knowledge from incident response work. He understands evidence preservation, chain of custody, log analysis for investigations, and working with forensic specialists. He's supported security investigations and knows when to escalate to forensic experts."
    },
    {
        id: 82,
        category: "tools-crowdstrike",
        keywords: ["crowdstrike", "edr", "endpoint detection", "falcon", "endpoint protection"],
        response: "Marc is familiar with endpoint detection and response (EDR) concepts and tools like CrowdStrike. While his federal work used government-specific tools, he understands EDR capabilities including behavioral analysis, threat hunting, and automated response. He's interested in modern endpoint security platforms."
    },
    {
        id: 83,
        category: "experience-remote-work",
        keywords: ["remote work", "remote", "work from home", "distributed", "telework"],
        response: "Marc has extensive remote work experience as a technical consultant (2022-2023) and is comfortable with distributed collaboration. He's self-motivated, communicates proactively, manages his time effectively, and uses collaboration tools proficiently. He's also secured remote access solutions and implemented telework security policies."
    },
    {
        id: 84,
        category: "skills-patch-management",
        keywords: ["patch management", "patching", "updates", "vulnerability patching", "patch"],
        response: "Marc has comprehensive patch management experience. At IRS and NAVSEA, he managed monthly patching cycles, tested patches, coordinated deployments, and tracked compliance. He's used WSUS, SCCM, and manual processes to maintain >95% patch compliance while minimizing operational impact."
    },
    {
        id: 85,
        category: "tools-aws-specific",
        keywords: ["s3", "ec2", "lambda", "rds", "cloudwatch", "iam aws"],
        response: "Marc has hands-on AWS experience including:\n• EC2 instance management and security\n• S3 bucket configuration and access controls\n• Lambda serverless functions\n• RDS database security\n• CloudWatch monitoring and logging\n• IAM policy management\n\nHe's AWS Solutions Architect and Cloud Practitioner certified."
    },
    {
        id: 86,
        category: "skills-business-continuity",
        keywords: ["business continuity", "bcp", "continuity planning", "resilience"],
        response: "Marc has business continuity planning experience from federal environments. He's developed BCP documentation, participated in disaster recovery planning, tested backup and recovery procedures, and coordinated continuity exercises. He understands RTO/RPO requirements and balancing availability with security."
    },
    {
        id: 87,
        category: "experience-startup",
        keywords: ["startup", "small company", "small business", "growing company"],
        response: "While Marc's primary experience is with large federal agencies, he's interested in startup environments. His consulting work and current AI tool development give him entrepreneurial perspective. He understands that startups need practical, scalable security that grows with the business, not enterprise overhead from day one."
    },
    {
        id: 88,
        category: "skills-email-security",
        keywords: ["email security", "phishing protection", "dmarc", "spf", "dkim", "email"],
        response: "Marc has implemented email security controls including spam filtering, phishing protection, SPF/DKIM/DMARC configuration, and email encryption. He's conducted phishing simulations, developed email security awareness training, and configured email gateway security policies to protect against business email compromise."
    },
    {
        id: 89,
        category: "tools-azure-specific",
        keywords: ["azure ad", "azure active directory", "entra", "azure security", "defender"],
        response: "Marc has Azure experience including:\n• Azure AD/Entra ID administration\n• Azure Security Center/Microsoft Defender\n• Azure resource security configurations\n• Azure Policy and governance\n• Virtual network security\n\nHe's Microsoft Certified: Azure Administrator Associate."
    },
    {
        id: 90,
        category: "skills-supply-chain",
        keywords: ["supply chain security", "software supply chain", "sbom", "third party risk"],
        response: "Marc understands supply chain security risks from federal environments where vendor security is critical. He's evaluated third-party software, reviewed security documentation, and implemented controls for supply chain risk. He's aware of emerging requirements like SBOMs and software composition analysis."
    },
    {
        id: 91,
        category: "experience-audit-findings",
        keywords: ["audit findings", "remediation", "corrective action", "audit response", "poa&m"],
        response: "Marc has extensive experience managing audit findings. He's created POA&Ms (Plans of Action and Milestones), coordinated remediation efforts, tracked corrective actions, and communicated progress to auditors. He successfully closed hundreds of findings while maintaining operational systems and meeting strict federal timelines."
    },
    {
        id: 92,
        category: "skills-ransomware",
        keywords: ["ransomware", "ransomware protection", "ransomware prevention", "crypto"],
        response: "Marc implements ransomware protection through layered defenses: regular tested backups, endpoint protection, network segmentation, user training, and email filtering. He understands ransomware tactics, recovery procedures, and prevention strategies. His backup expertise at NAVSEA provides strong foundation for ransomware resilience."
    },
    {
        id: 93,
        category: "tools-python-specific",
        keywords: ["python scripting", "python automation", "python programming"],
        response: "Marc uses Python for security automation, data analysis, and tool development. He's built AI-powered security tools using Python, automated routine tasks, parsed security data, and created custom utilities. He combines Python with APIs to build practical security solutions."
    },
    {
        id: 94,
        category: "experience-matrix-management",
        keywords: ["matrix organization", "dotted line", "multiple managers", "matrix"],
        response: "Marc has worked in matrix organizations at federal agencies where he supported multiple stakeholders and projects simultaneously. He's comfortable navigating complex reporting structures, balancing competing priorities, and communicating effectively with various leadership chains."
    },
    {
        id: 95,
        category: "skills-ot-ics",
        keywords: ["ot security", "ics", "scada", "industrial control", "operational technology"],
        response: "While Marc's experience is primarily IT security, he understands OT/ICS security fundamentals including unique challenges of operational technology, air-gapping, safety requirements, and differences from traditional IT security. He's interested in the convergence of IT/OT security in critical infrastructure."
    },
    {
        id: 96,
        category: "tools-powershell-specific",
        keywords: ["powershell scripting", "powershell automation", "powershell modules"],
        response: "Marc is highly proficient with PowerShell:\n• Automated security configurations\n• Built monitoring scripts\n• Created reporting tools\n• Developed system management utilities\n• Integrated PowerShell with security tools\n\nPowerShell is his primary automation language for Windows environments."
    },
    {
        id: 97,
        category: "experience-change-management",
        keywords: ["change management", "change control", "cab", "change process"],
        response: "Marc has managed changes in highly controlled federal environments. He's participated in Change Advisory Boards (CAB), documented changes, assessed security impacts, coordinated implementations, and ensured proper rollback procedures. He understands balancing agility with controlled change processes."
    },
    {
        id: 98,
        category: "skills-authentication",
        keywords: ["authentication", "mfa", "multi-factor", "2fa", "sso", "single sign-on"],
        response: "Marc has implemented authentication controls including MFA, SSO, certificate-based authentication, and smart card authentication in federal environments. He understands authentication protocols (SAML, OAuth, OpenID), password policies, and credential management. Strong authentication is a key component of his security approach."
    },
    {
        id: 99,
        category: "experience-documentation",
        keywords: ["documentation", "documenting", "writing documentation", "technical docs"],
        response: "Documentation is one of Marc's core strengths. He's created:\n• Security policies and procedures\n• System security plans\n• Technical runbooks\n• User guides\n• Training materials\n• Audit documentation\n\nHis technical writing background ensures clear, actionable, and maintainable documentation."
    },
    {
        id: 100,
        category: "skills-network-segmentation",
        keywords: ["network segmentation", "segmentation", "micro-segmentation", "network isolation"],
        response: "Marc has implemented network segmentation in federal environments to isolate critical systems and limit blast radius. He's designed security zones, configured VLANs, implemented firewall rules, and applied defense-in-depth through network layering. He understands how segmentation supports zero trust and compliance."
    },
    {
        id: 101,
        category: "future-goals",
        keywords: ["future goals", "career goals", "long term", "5 years", "aspirations"],
        response: "Marc's future goals include:\n• Growing expertise in cloud-native security and DevSecOps\n• Building innovative AI-powered security tools\n• Taking on senior security leadership roles\n• Mentoring the next generation of security professionals\n• Contributing to the cybersecurity community through writing and knowledge sharing\n\nHe's committed to continuous growth and making meaningful impact in cybersecurity."
    },
    {
        id: 102,
        category: "availability",
        keywords: ["availability", "start date", "when can you start", "notice period", "available"],
        response: "Marc is currently available and can start immediately or work with your preferred timeline. As an independent consultant, he has flexibility in his schedule and is excited to discuss how he can contribute to your organization's security goals."
    },

    // ===== DEFAULT/FALLBACK =====
    {
        id: 999,
        category: "fallback",
        keywords: ["*"],
        responses: [ // Changed to array of multiple fallback responses
            `I'm not sure I understood that specific question. Try asking about:\n\n• ${CANDIDATE_INFO.name}'s technical skills and certifications\n• Work experience at Navy or IRS\n• Leadership and team management\n• Compliance frameworks (NIST, ISO, etc.)\n• Current projects and interests\n• How to get in contact\n\nOr ask something more specific about his background!`,
            
            `Hmm, I didn't quite catch that. Here are some topics I can help with:\n\n• Technical expertise and certifications\n• Federal government experience\n• Security frameworks and compliance\n• Cloud security (AWS/Azure)\n• Current AI projects\n• Contact information\n\nWhat would you like to know?`,
            
            `I'm having trouble understanding that question. I can answer questions about:\n\n• Security skills and technologies\n• Professional experience\n• Certifications and training\n• Compliance and frameworks\n• Projects and portfolio\n• Getting in touch with ${CANDIDATE_INFO.name}\n\nCould you try rephrasing?`,
            
            `Not sure what you're asking about. Some things I know well:\n\n• ${CANDIDATE_INFO.name}'s cybersecurity background\n• GRC and compliance experience\n• Technical skills and tools\n• Work history and achievements\n• How to reach out\n\nAsk me something specific!`
        ]
    }
];

// ============================================
// IMPROVED PATTERN MATCHING WITH RANDOMIZATION
// ============================================

// Track recently used responses to avoid immediate repetition
let recentResponses = [];
const MAX_RECENT_RESPONSES = 5;

function findBestChatbotMatch(userMessage) {
    const message = userMessage.toLowerCase().trim();
    let matches = []; // Changed to array to find all good matches

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

        // Collect all responses with matching keywords
        if (score > 0) {
            matches.push({ response, score });
        }
    }

    // Sort matches by score (highest first)
    matches.sort((a, b) => b.score - a.score);

    // If we have matches, select from top candidates
    if (matches.length > 0) {
        // Get all responses with the highest score
        const topScore = matches[0].score;
        const topMatches = matches.filter(m => m.score === topScore);

        // If multiple equally good matches, prefer ones not recently used
        const freshMatches = topMatches.filter(m => !recentResponses.includes(m.response.id));
        
        let selectedMatch;
        if (freshMatches.length > 0) {
            // Randomly select from fresh matches
            selectedMatch = freshMatches[Math.floor(Math.random() * freshMatches.length)];
        } else {
            // All top matches were recently used, pick randomly anyway
            selectedMatch = topMatches[Math.floor(Math.random() * topMatches.length)];
        }

        // Track this response
        recentResponses.push(selectedMatch.response.id);
        if (recentResponses.length > MAX_RECENT_RESPONSES) {
            recentResponses.shift(); // Remove oldest
        }

        return selectedMatch.response.response;
    }

    // No good match, return random fallback
    const fallbackResponse = chatbotResponses.find(r => r.category === "fallback");
    const randomFallback = fallbackResponse.responses[
        Math.floor(Math.random() * fallbackResponse.responses.length)
    ];
    return randomFallback;
}

// ============================================
// CHAT UI FUNCTIONS (unchanged)
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
        chatInput.focus();
    }, 600);
}

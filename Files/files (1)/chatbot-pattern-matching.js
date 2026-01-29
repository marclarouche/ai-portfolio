// Simple Pattern-Matching Chatbot
// This is what goes in your chatbot.js file

class PortfolioChatbot {
    constructor() {
        // This is where you store all the Q&A pairs
        // Each entry has keywords (what to look for) and a response (what to say)
        this.responses = [
            // EXPERIENCE QUESTIONS
            {
                keywords: ['experience', 'years', 'long', 'worked', 'background'],
                response: "I have over 15 years of experience in cybersecurity and technical writing. I've worked with Fortune 500 companies, government agencies, and startups across various industries including finance, healthcare, and technology."
            },
            {
                keywords: ['aws', 'amazon', 'cloud'],
                response: "I have extensive AWS experience including EC2, S3, Lambda, CloudWatch, IAM, and Security Hub. I've architected cloud security solutions and hold AWS certifications including Security Specialty."
            },
            {
                keywords: ['certifications', 'certified', 'certs', 'credentials'],
                response: "I hold multiple certifications including CISSP, AWS Certified Security Specialty, CompTIA Security+, and CEH. I'm also certified in NIST frameworks and risk management."
            },
            
            // SKILLS QUESTIONS
            {
                keywords: ['python', 'programming', 'coding', 'script'],
                response: "Yes, I'm proficient in Python for automation, security scripting, and data analysis. I also have experience with JavaScript, Bash, and PowerShell for various security and automation tasks."
            },
            {
                keywords: ['grc', 'governance', 'compliance', 'audit'],
                response: "I have strong GRC experience including policy development, compliance frameworks (NIST, ISO 27001, SOC 2), risk assessments, and audit management. I've led multiple compliance projects from start to finish."
            },
            {
                keywords: ['penetration', 'pentest', 'hacking', 'vulnerability'],
                response: "I have hands-on penetration testing experience using tools like Metasploit, Burp Suite, Nmap, and Wireshark. I've conducted security assessments for web applications, networks, and infrastructure."
            },
            
            // WORK STYLE QUESTIONS
            {
                keywords: ['remote', 'hybrid', 'location', 'relocate'],
                response: "I'm open to remote, hybrid, or on-site positions. I'm currently based in California but flexible on relocation for the right opportunity. I have extensive experience working with distributed teams."
            },
            {
                keywords: ['team', 'leadership', 'manage', 'lead'],
                response: "I have experience leading cross-functional security teams of 5-12 people. My leadership style focuses on mentorship, clear communication, and empowering team members to grow their skills."
            },
            {
                keywords: ['salary', 'compensation', 'pay', 'rate'],
                response: "My salary expectations are competitive for my experience level and skill set, typically in the range of $120k-160k depending on the role, responsibilities, and location. I'm open to discussing total compensation including benefits."
            },
            
            // PROJECT QUESTIONS
            {
                keywords: ['project', 'biggest', 'accomplishment', 'achievement'],
                response: "One of my biggest achievements was leading a company-wide security transformation that reduced security incidents by 67% while improving incident response time by 45%. This involved implementing new tools, training staff, and redesigning security processes."
            },
            {
                keywords: ['incident', 'breach', 'response', 'handled'],
                response: "I have extensive incident response experience including handling ransomware attacks, data breaches, and insider threats. I've developed IR playbooks, led forensic investigations, and coordinated with legal and PR teams during major incidents."
            },
            
            // EDUCATION
            {
                keywords: ['education', 'degree', 'school', 'university', 'college'],
                response: "I hold a Bachelor's degree in Computer Science from [University Name] and have completed numerous professional certifications and training programs in cybersecurity, risk management, and technical writing."
            },
            
            // TOOLS & TECHNOLOGIES
            {
                keywords: ['siem', 'splunk', 'elk', 'log'],
                response: "I have hands-on experience with SIEM platforms including Splunk, ELK Stack, and QRadar. I've created custom dashboards, correlation rules, and use cases for threat detection and compliance monitoring."
            },
            {
                keywords: ['firewall', 'palo alto', 'cisco', 'network security'],
                response: "I'm experienced with next-gen firewalls including Palo Alto Networks, Cisco ASA, and Fortinet. I've configured rules, policies, VPNs, and performed security assessments of network architectures."
            },
            {
                keywords: ['documentation', 'writing', 'technical writer'],
                response: "Technical writing is one of my core strengths. I've created security policies, incident response procedures, architecture diagrams, user guides, and executive reports. I specialize in making complex technical concepts accessible."
            },
            
            // AVAILABILITY & PROCESS
            {
                keywords: ['available', 'start', 'notice', 'when'],
                response: "I'm available to start within 2-4 weeks depending on the role. I can be flexible on start dates for the right opportunity."
            },
            {
                keywords: ['interview', 'process', 'next steps'],
                response: "I'm happy to discuss the role in more detail. The best way to move forward is to schedule a call where we can discuss your needs and how my experience aligns. You can reach me via email or LinkedIn."
            },
            
            // SPECIFIC FRAMEWORKS
            {
                keywords: ['nist', '800-53', 'framework', 'csf'],
                response: "I'm well-versed in NIST frameworks including the Cybersecurity Framework (CSF), NIST 800-53, and Risk Management Framework (RMF). I've implemented these frameworks across multiple organizations."
            },
            {
                keywords: ['iso', '27001', '27002'],
                response: "I have experience with ISO 27001/27002 implementation including gap assessments, control implementation, and audit preparation. I've successfully led organizations through ISO certification."
            },
            {
                keywords: ['hipaa', 'healthcare', 'pci', 'compliance'],
                response: "I have compliance experience with HIPAA, PCI-DSS, and SOC 2. This includes gap assessments, remediation planning, policy development, and working with auditors during certification."
            },
            
            // CONTACT & GENERAL
            {
                keywords: ['contact', 'reach', 'email', 'phone', 'linkedin'],
                response: "The best way to reach me is via email at marc@marclarouche.com or through LinkedIn. I typically respond within 24 hours during business days."
            },
            {
                keywords: ['resume', 'cv', 'download'],
                response: "You can download my full resume from this portfolio site. Click the 'Download Resume' button at the top of the page for a PDF version."
            },
            
            // DEFAULT FALLBACK
            {
                keywords: ['default'],
                response: "I'd be happy to discuss that with you! Could you rephrase your question or be more specific? You can also email me directly at marc@marclarouche.com for detailed answers."
            }
        ];
    }

    // This function finds the best matching response
    findBestMatch(userQuestion) {
        userQuestion = userQuestion.toLowerCase();
        let bestMatch = null;
        let bestScore = 0;

        // Check each response to see how many keywords match
        for (let response of this.responses) {
            let score = 0;
            
            // Count how many keywords appear in the question
            for (let keyword of response.keywords) {
                if (userQuestion.includes(keyword)) {
                    score++;
                }
            }

            // If this response matches better than previous ones, save it
            if (score > bestScore) {
                bestScore = score;
                bestMatch = response;
            }
        }

        // If no good match found, return default response
        if (bestScore === 0) {
            return this.responses[this.responses.length - 1].response;
        }

        return bestMatch.response;
    }

    // This is the main function that gets called when user asks a question
    getResponse(userQuestion) {
        return this.findBestMatch(userQuestion);
    }
}

// Initialize the chatbot
const chatbot = new PortfolioChatbot();

// Example usage in your HTML:
// When user clicks send button, call: chatbot.getResponse(userQuestion)

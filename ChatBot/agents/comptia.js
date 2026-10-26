// CompTIA & Security agent.
// Each entry is one question HAL knows and the answer it gives.
// Add new knowledge by adding { q, a } entries to the list below.

module.exports = {
  id: "comptia",
  name: "CompTIA & Security",
  tagline: "Security+, Network+, cybersecurity and quizzes",

  // Words and phrases that help HAL's Auto mode decide this agent should answer.
  keywords: ["comptia","security+","network+","a+","security","cybersecurity","network","networks","networking","subnet","subnetting","nat","firewall","vpn","malware","phishing","encryption","encrypt","hashing","attack","attacks","ransomware","authentication","authorization","vulnerability","exploit","password","passwords","dns","dhcp","tcp","udp","tls","ip","router","switch","vlan","ids","ips","siem","cia triad","incident","risk","zero trust","pki","certificate","botnet","trojan","rootkit","quiz","sdn","wifi","wi-fi","breach","threat"],

  // What HAL says when this agent has no good match.
  notFound: "I don't have that one in my CompTIA and security notes yet. Try asking about a specific Security+ or Network+ topic, or ask me for a quiz.",

  entries: [
    {
      q: "What is a firewall and how does it protect a network from unauthorized access?",
      a: "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, effectively blocking unauthorized access while allowing legitimate communication."
    },
    {
      q: "What are the main differences between symmetric and asymmetric encryption?",
      a: "Symmetric encryption uses the same key for both encryption and decryption, whereas asymmetric encryption uses a pair of public and private keys, offering enhanced security, especially for exchanging data over insecure networks."
    },
    {
      q: "How does multi-factor authentication enhance security?",
      a: "Multi-factor authentication (MFA) enhances security by requiring two or more forms of verification, such as a password and a fingerprint or a code sent to a mobile device, making unauthorized access more difficult."
    },
    {
      q: "What is the purpose of a VPN and how does it ensure privacy for users?",
      a: "A VPN (Virtual Private Network) creates a secure, encrypted connection between a user's device and a remote server, ensuring privacy and protection of data while accessing the internet, especially on public networks."
    },
    {
      q: "What are the common types of malware and how do they infect systems?",
      a: "Common types of malware include viruses, worms, ransomware, and trojans. They infect systems through malicious attachments, software vulnerabilities, or social engineering tactics, often causing damage or theft of data."
    },
    {
      q: "How does an Intrusion Detection System (IDS) work to detect malicious activity?",
      a: "An Intrusion Detection System (IDS) monitors network traffic for suspicious activity and potential threats. It alerts administrators about possible security breaches but does not take action to stop the attack."
    },
    {
      q: "What is a denial-of-service (DoS) attack and how does it impact a system?",
      a: "A Denial-of-Service (DoS) attack floods a system or network with traffic, overwhelming it and making it unavailable to legitimate users. A Distributed DoS (DDoS) attack involves multiple compromised systems launching the attack simultaneously."
    },
    {
      q: "Why is it important to keep software updated with the latest patches?",
      a: "Software updates and patches fix security vulnerabilities, correct bugs, and improve performance. Keeping software updated ensures that known exploits cannot be used to compromise the system."
    },
    {
      q: "How does phishing work and what are some strategies to avoid falling for phishing attacks?",
      a: "Phishing is a social engineering attack where malicious actors trick individuals into divulging sensitive information, such as passwords or credit card numbers. To avoid phishing, verify sources, look for suspicious URLs, and never click on unknown links."
    },
    {
      q: "What is the principle of least privilege and how does it enhance security?",
      a: "The principle of least privilege means granting users only the access necessary to perform their job functions, reducing the risk of unauthorized access or accidental damage to sensitive data."
    },
    {
      q: "What are the risks associated with using public Wi-Fi and how can you protect yourself?",
      a: "Public Wi-Fi networks are vulnerable to interception and attacks. To protect yourself, use a VPN, avoid accessing sensitive information, and ensure websites are encrypted (HTTPS) when connecting to public Wi-Fi."
    },
    {
      q: "What is a zero-day exploit and how can it affect system security?",
      a: "A zero-day exploit is a vulnerability in software that is unknown to the vendor and has no patch or fix available. These exploits are dangerous because they can be used by attackers before the vendor is aware and can mitigate the risk."
    },
    {
      q: "What is the role of a Security Information and Event Management (SIEM) system?",
      a: "A SIEM system collects and analyzes security data from various sources in real-time, helping organizations detect, monitor, and respond to security threats and breaches effectively through centralized logs and alerts."
    },
    {
      q: "What are the key differences between the security models of cloud computing providers like AWS and Azure?",
      a: "Cloud security models vary between providers. AWS and Azure both offer strong security frameworks, but key differences include their specific compliance certifications, encryption methods, and access controls tailored to each platform's unique environment."
    },
    {
      q: "How does a penetration test help identify vulnerabilities in a system?",
      a: "Penetration testing involves ethical hackers simulating attacks on a system to identify vulnerabilities. It helps organizations understand their security weaknesses, so they can patch them before malicious hackers can exploit them."
    },
    {
      q: "Can you explain Dynamic vs Static NAT?",
      a: "Dynamic NAT translates private IP addresses to public IP addresses on-the-fly from a pool of available public addresses, while Static NAT maps a specific private IP address to a specific public IP address permanently. Dynamic NAT is more flexible for multiple users, whereas Static NAT is useful for hosting services that require consistent external access."
    },
    {
      q: "What is a SDN (Software-Defined Networking)?",
      a: "SDN (Software-Defined Networking) is an approach to networking that uses software-based controllers to manage and configure network devices, allowing for more flexible and dynamic network management compared to traditional hardware-based networking."
    },
    {
      q: "How do you subnet networks?",
      a: "Subnetting is the process of dividing a larger network into smaller, manageable sub-networks (subnets) to optimize performance, security, and resource allocation. You can create a chart /24-/30 to help you with subnetting"
    },
    {
      q: "What is a brute force attack?",
      a: "A brute force attack is when an attacker tries numerous password combinations to gain unauthorized access to an account or system. Protect yourself by using strong, unique passwords and enabling account lockout features after failed login attempts."
    },
    {
      q: "How do I protect against ransomware?",
      a: "Protect against ransomware by regularly backing up your data offline, keeping software updated, using reputable antivirus software, avoiding suspicious email attachments, and not clicking on unknown links."
    },
    {
      q: "What is a man-in-the-middle attack?",
      a: "A man-in-the-middle attack occurs when an attacker intercepts communication between two parties to steal or alter information. Use HTTPS connections, VPNs, and avoid public Wi-Fi for sensitive transactions to prevent this."
    },
    {
      q: "How do I create a strong password?",
      a: "Create a strong password by using at least 12 characters, combining uppercase and lowercase letters, numbers, and special symbols. Avoid using personal information or common dictionary words."
    },
    {
      q: "What is two-factor authentication?",
      a: "Two-factor authentication (2FA) adds a second verification layer beyond passwords, such as a code sent to your phone or generated by an authentication app, making unauthorized access significantly harder."
    },
    {
      q: "How do I recognize a phishing email?",
      a: "Recognize phishing emails by checking sender addresses carefully, looking for spelling errors, suspicious links, requests for personal information, and unusual sender behavior. Never click links or download attachments from unknown senders."
    },
    {
      q: "What is encryption and why is it important?",
      a: "Encryption is the process of converting data into unreadable code using algorithms. It's important because it protects sensitive information from unauthorized access during transmission and storage."
    },
    {
      q: "How do I secure my home network?",
      a: "Secure your home network by changing default router passwords, enabling WPA3 encryption, disabling WPS, keeping firmware updated, hiding your network name (SSID), and using a strong router password."
    },
    {
      q: "What is a botnet?",
      a: "A botnet is a network of infected computers controlled by cybercriminals to perform malicious activities like sending spam, launching DDoS attacks, or stealing data. Keep antivirus software updated to prevent infection."
    },
    {
      q: "How do I protect my personal data online?",
      a: "Protect your personal data online by using strong passwords, enabling two-factor authentication, limiting what you share on social media, being cautious with email attachments, and using encrypted messaging apps."
    },
    {
      q: "What is social engineering?",
      a: "Social engineering is manipulating people into divulging confidential information or performing actions that compromise security. Be skeptical of unsolicited requests, verify identities, and don't share sensitive information with strangers."
    },
    {
      q: "How do I enable biometric security?",
      a: "Enable biometric security by using fingerprint recognition, facial recognition, or iris scanning on your devices. These methods are difficult to spoof and add a strong security layer to your personal devices."
    },
    {
      q: "What is a SQL injection attack?",
      a: "SQL injection is an attack where malicious code is inserted into input fields to manipulate databases and extract sensitive information. Developers prevent this by using parameterized queries and input validation."
    },
    {
      q: "How do I secure my email account?",
      a: "Secure your email account by using a strong, unique password, enabling two-factor authentication, reviewing account recovery options, checking login activity, and being cautious with phishing attempts."
    },
    {
      q: "What is cross-site scripting (XSS)?",
      a: "Cross-site scripting (XSS) is when attackers inject malicious scripts into web pages viewed by other users. Web developers prevent this by sanitizing user input and using content security policies."
    },
    {
      q: "How do I protect my smartphone from malware?",
      a: "Protect your smartphone from malware by downloading apps only from official app stores, keeping your OS updated, using antivirus software, avoiding public Wi-Fi for sensitive tasks, and not jailbreaking your device."
    },
    {
      q: "What is a rootkit?",
      a: "A rootkit is malicious software that gives attackers administrative access to a system while hiding its presence. Prevent infection by keeping your system updated, using reputable antivirus software, and avoiding suspicious downloads."
    },
    {
      q: "How do I use a password manager safely?",
      a: "Use a password manager safely by choosing a reputable, encrypted service, enabling two-factor authentication on the manager itself, and keeping your master password extremely strong and private."
    },
    {
      q: "What is a backdoor in cybersecurity?",
      a: "A backdoor is a hidden access point in a system that allows attackers to bypass normal security measures. Prevent this by keeping software patched, using firewalls, and monitoring system access logs."
    },
    {
      q: "How do I secure my cloud storage?",
      a: "Secure your cloud storage by enabling two-factor authentication, using strong passwords, regularly reviewing shared files and permissions, encrypting sensitive data before uploading, and choosing reputable providers."
    },
    {
      q: "What is privilege escalation?",
      a: "Privilege escalation is when an attacker gains higher-level access than their current permissions allow. Prevent this by applying the principle of least privilege, regularly auditing user permissions, and keeping systems patched."
    },
    {
      q: "How do I protect my identity online?",
      a: "Protect your identity online by limiting personal information shared publicly, monitoring credit reports, using identity theft protection services, enabling two-factor authentication, and being cautious with password recovery questions."
    },
    {
      q: "What is a security audit?",
      a: "A security audit is a comprehensive assessment of an organization's security measures to identify vulnerabilities and weaknesses. Regular audits help ensure compliance with security standards and best practices."
    },
    {
      q: "How do I recognize malware on my computer?",
      a: "Recognize malware on your computer by noticing slow performance, unexpected pop-ups, missing files, strange system behavior, or unusual network activity. Run antivirus scans and seek professional help if needed."
    },
    {
      q: "What is a firewall and how does it work?",
      a: "A firewall is a security system that monitors and controls network traffic based on predefined rules, blocking unauthorized access while allowing legitimate communication. Use both hardware and software firewalls."
    },
    {
      q: "How do I secure my Wi-Fi network?",
      a: "Secure your Wi-Fi network by changing the default password and SSID, enabling WPA3 encryption, disabling WPS, enabling MAC filtering, keeping firmware updated, and hiding your network name if needed."
    },
    {
      q: "What is two-way authentication?",
      a: "Two-way authentication, also known as mutual authentication, verifies both the user and the server, ensuring secure communication. This prevents man-in-the-middle attacks and ensures you're connecting to legitimate services."
    },
    {
      q: "How do I protect against keyloggers?",
      a: "Protect against keyloggers by using on-screen keyboards for sensitive passwords, keeping software updated, using reputable antivirus software, avoiding public computers for sensitive tasks, and using password managers."
    },
    {
      q: "What is a vulnerability assessment?",
      a: "A vulnerability assessment is a systematic process of identifying, analyzing, and prioritizing security weaknesses in systems and applications. Organizations conduct these regularly to fix vulnerabilities before they're exploited."
    },
    {
      q: "How do I report a security breach?",
      a: "Report a security breach by contacting the organization immediately, documenting the incident, avoiding panic or system interference, changing passwords, monitoring accounts, and filing reports with authorities if necessary."
    },
    {
      q: "What is end-to-end encryption?",
      a: "End-to-end encryption ensures only the sender and recipient can read messages by encrypting data on the sender's device and decrypting it on the recipient's device. Services like Signal and WhatsApp use this."
    },
    {
      q: "How do I protect against data theft?",
      a: "Protect against data theft by encrypting sensitive information, limiting access to authorized personnel, using strong authentication, monitoring data access, backing up data securely, and training employees on security."
    },
    {
      q: "What is a honeypot in cybersecurity?",
      a: "A honeypot is a decoy system or file that attracts attackers to capture their methods and gather threat intelligence. Organizations use honeypots to learn about attack techniques and improve defenses."
    },
    {
      q: "How do I secure my online banking?",
      a: "Secure your online banking by using strong, unique passwords, enabling multi-factor authentication, accessing your bank through official apps or websites, avoiding public Wi-Fi, and monitoring account activity regularly."
    },
    {
      q: "What is a patch management system?",
      a: "A patch management system is a process for identifying, testing, and deploying software updates that fix security vulnerabilities. Regular patching is critical to prevent exploitation of known security flaws."
    },
    {
      q: "How do I protect my children online?",
      a: "Protect your children online by using parental control software, monitoring their online activities, teaching them about online safety, limiting screen time, and ensuring they understand privacy settings on social media."
    },
    {
      q: "What is a security token?",
      a: "A security token is a physical or digital device that generates authentication codes or stores cryptographic keys for secure access. Common examples include USB security keys and mobile app-based authenticators."
    },
    {
      q: "How do I secure my work-from-home setup?",
      a: "Secure your work-from-home setup by using a VPN, maintaining a secure Wi-Fi network, using a dedicated device if possible, keeping software updated, securing your physical workspace, and following company security policies."
    },
    {
      q: "What is a cyber attack?",
      a: "A cyber attack is an attempt to damage, disrupt, or gain unauthorized access to computer systems or data. Common types include malware, ransomware, phishing, DDoS attacks, and social engineering."
    },
    {
      q: "How do I backup my important data?",
      a: "Backup your important data by using the 3-2-1 rule: 3 copies of data, on 2 different media types, with 1 copy stored offsite. Automate backups when possible and test recovery procedures regularly."
    },
    {
      q: "What is biometric authentication?",
      a: "Biometric authentication uses unique biological characteristics like fingerprints, facial recognition, or iris scans to verify identity. It's highly secure because these traits are difficult to forge or steal."
    },
    {
      q: "How do I protect against spyware?",
      a: "Protect against spyware by using antivirus and anti-spyware software, keeping software updated, being cautious with downloads, avoiding clicking suspicious links, and regularly scanning your system."
    },
    {
      q: "What is a security policy?",
      a: "A security policy is a set of guidelines and rules that define how an organization manages and protects its information and systems. Effective policies cover access control, incident response, and employee conduct."
    },
    {
      q: "How do I use VPN safely?",
      a: "Use VPN safely by choosing a reputable provider that doesn't log data, verifying VPN connections are active before accessing sensitive information, using strong authentication, and understanding VPN limitations."
    },
    {
      q: "What is a digital certificate?",
      a: "A digital certificate is a credential that verifies the identity of a website or individual and enables encrypted communication. Websites with valid certificates display a padlock icon in browsers."
    },
    {
      q: "How do I secure my IoT devices?",
      a: "Secure your IoT devices by changing default passwords, keeping firmware updated, disabling unnecessary features, using strong Wi-Fi encryption, monitoring device activity, and isolating IoT devices on separate networks when possible."
    },
    {
      q: "What is a security incident response plan?",
      a: "A security incident response plan is a documented procedure for detecting, responding to, and recovering from security incidents. It should include clear roles, communication protocols, and steps to minimize damage."
    },
    {
      q: "How do I protect against unauthorized access?",
      a: "Protect against unauthorized access by using strong authentication, limiting user privileges, monitoring access logs, implementing access controls, regularly auditing permissions, and removing access promptly when users leave."
    },
    {
      q: "What is a security awareness program?",
      a: "A security awareness program educates employees about cybersecurity best practices and threats. Regular training reduces human error, the leading cause of security breaches, and creates a security-conscious culture."
    },
    {
      q: "How do I stay updated on cybersecurity threats?",
      a: "Stay updated on cybersecurity threats by following security blogs and news sites, subscribing to security mailing lists, joining cybersecurity communities, attending webinars, and monitoring security advisory databases."
    },
    {
      q: "What is an IP address?",
      a: "An IP address is a numerical label that identifies a device on a network so data knows where to be sent. IPv4 and IPv6 are the two versions in use."
    },
    {
      q: "What is DNS?",
      a: "DNS, the Domain Name System, translates human-friendly domain names like example.com into the IP addresses computers use to find each other."
    },
    {
      q: "What are the three components of the CIA triad?",
      a: "The CIA triad stands for Confidentiality, Integrity, and Availability. Confidentiality protects information from unauthorized access, integrity protects information from unauthorized modification, and availability ensures systems and data are accessible when needed."
    },
    {
      q: "What is the principle of least privilege?",
      a: "The principle of least privilege means giving users, applications, and systems only the minimum permissions they need to perform their assigned tasks. This limits the damage that can occur if an account or system is compromised."
    },
    {
      q: "What is defense in depth?",
      a: "Defense in depth is a security strategy that uses multiple layers of security controls. If one control fails, additional controls can still protect the organization. Examples include firewalls, MFA, endpoint protection, network segmentation, and monitoring."
    },
    {
      q: "What is the difference between authentication and authorization?",
      a: "Authentication verifies who or what something is. Authorization determines what that authenticated user or system is allowed to access or do. For example, logging in with a password is authentication, while having permission to access a specific database is authorization."
    },
    {
      q: "What is non-repudiation?",
      a: "Non-repudiation provides evidence that a person or system performed a particular action and prevents them from credibly denying that action later. Digital signatures are commonly used to provide non-repudiation."
    },
    {
      q: "What is a security control?",
      a: "A security control is a safeguard used to reduce security risk. Controls can include technical mechanisms such as firewalls and encryption, administrative measures such as policies and training, and physical measures such as locks and security cameras."
    },
    {
      q: "What is the difference between preventive and detective controls?",
      a: "Preventive controls are designed to stop an unwanted event before it occurs, such as a firewall blocking traffic. Detective controls identify events that have already occurred or are occurring, such as an intrusion detection system generating an alert."
    },
    {
      q: "What is Zero Trust?",
      a: "Zero Trust is a security model based on the idea of never automatically trusting a user, device, application, or network location. Access should be continuously evaluated using identity, device status, permissions, and other security signals."
    },
    {
      q: "Why is security segmentation important?",
      a: "Security segmentation separates networks, systems, or resources into controlled zones. This can limit lateral movement and reduce the impact of a compromised device or account."
    },
    {
      q: "What is a compensating control?",
      a: "A compensating control is an alternative security measure used when the preferred control cannot be implemented. For example, additional monitoring might compensate for a legacy system that cannot support a modern security feature."
    },
    {
      q: "What is hashing used for in cybersecurity?",
      a: "Hashing converts data into a fixed-length value using a mathematical algorithm. Hashes are commonly used to verify data integrity and securely store passwords when appropriate password-hashing algorithms are used."
    },
    {
      q: "What is the difference between encryption and hashing?",
      a: "Encryption is designed to make information unreadable to unauthorized parties and can be reversed with the appropriate key. Hashing is generally one-way and is primarily used for integrity verification or password storage."
    },
    {
      q: "What is symmetric encryption?",
      a: "Symmetric encryption uses the same secret key to encrypt and decrypt information. It is generally efficient and is commonly used for protecting large amounts of data."
    },
    {
      q: "What is asymmetric encryption?",
      a: "Asymmetric encryption uses a mathematically related public and private key pair. The public key can be shared openly while the private key must be protected. It is commonly used for encryption, digital signatures, and key exchange."
    },
    {
      q: "What is a digital signature?",
      a: "A digital signature uses asymmetric cryptography to provide integrity, authenticity, and potentially non-repudiation. The sender signs data using a private key, and recipients can verify the signature using the corresponding public key."
    },
    {
      q: "What is a certificate authority?",
      a: "A certificate authority, or CA, is a trusted organization or system that issues and signs digital certificates. Certificates help establish trust between identities, systems, and public keys."
    },
    {
      q: "What is PKI?",
      a: "PKI stands for Public Key Infrastructure. It is the collection of technologies, policies, certificates, keys, and processes used to manage public-key cryptography and digital certificates."
    },
    {
      q: "What is a man-in-the-middle attack?",
      a: "A man-in-the-middle attack occurs when an attacker secretly intercepts or potentially modifies communications between two parties. Strong encryption, certificate validation, and secure protocols help defend against this type of attack."
    },
    {
      q: "What is perfect forward secrecy?",
      a: "Perfect forward secrecy protects previously established encrypted sessions even if a long-term private key is later compromised. Ephemeral session keys are commonly used to provide this protection."
    },
    {
      q: "What is data at rest?",
      a: "Data at rest is information stored on a device or storage system rather than actively moving across a network. Examples include files on a hard drive, database records, and backups."
    },
    {
      q: "What is phishing?",
      a: "Phishing is a social engineering attack in which an attacker attempts to trick someone into revealing information, clicking a malicious link, opening a malicious attachment, or performing another unsafe action."
    },
    {
      q: "What is spear phishing?",
      a: "Spear phishing is a targeted phishing attack directed at a specific person or organization. Because the message is customized to the victim, it can be more convincing than generic phishing."
    },
    {
      q: "What is whaling?",
      a: "Whaling is a form of targeted phishing aimed at high-value individuals such as executives or senior managers."
    },
    {
      q: "What is smishing?",
      a: "Smishing is phishing conducted through SMS or text messages. An attacker may send a fake delivery notice, account warning, or other message containing a malicious link or request."
    },
    {
      q: "What is vishing?",
      a: "Vishing is voice-based phishing. The attacker may call a victim while pretending to be a bank employee, technical support representative, government employee, or another trusted party."
    },
    {
      q: "What is credential stuffing?",
      a: "Credential stuffing uses previously stolen usernames and passwords against other services. It works because people sometimes reuse passwords across multiple accounts."
    },
    {
      q: "What is password spraying?",
      a: "Password spraying attempts to use a small number of commonly used passwords against many different accounts. This can avoid triggering account lockouts that might occur during repeated attacks against a single account."
    },
    {
      q: "What is a brute-force attack?",
      a: "A brute-force attack attempts many possible passwords or cryptographic keys until the correct value is discovered. Strong passwords, MFA, rate limiting, and account lockout controls can help mitigate brute-force attacks."
    },
    {
      q: "What is ransomware?",
      a: "Ransomware is malware that typically prevents access to systems or data and demands payment from the victim. Modern ransomware attacks may also involve data theft and extortion."
    },
    {
      q: "What is a Trojan?",
      a: "A Trojan is malware that disguises itself as legitimate software or a legitimate file. The victim is tricked into executing it, allowing the malicious functionality to run."
    },
    {
      q: "What is a rootkit?",
      a: "A rootkit is malicious software designed to maintain privileged access while hiding its presence. Rootkits can be particularly difficult to detect because they may attempt to conceal files, processes, or system activity."
    },
    {
      q: "What is a botnet?",
      a: "A botnet is a collection of compromised devices controlled by an attacker. Botnets can be used for activities such as DDoS attacks, spam distribution, credential attacks, or cryptocurrency mining."
    },
    {
      q: "What is a DDoS attack?",
      a: "A distributed denial-of-service attack attempts to overwhelm a service or network with traffic or requests from many systems. The goal is typically to reduce or eliminate availability for legitimate users."
    },
    {
      q: "What is SQL injection?",
      a: "SQL injection occurs when an attacker manipulates application input so that unintended SQL commands are executed against a database. Parameterized queries and proper input handling are important defenses."
    },
    {
      q: "What is cross-site scripting?",
      a: "Cross-site scripting, or XSS, occurs when malicious script content is injected into a web page and executed in a victim's browser. Output encoding, input validation, and appropriate security controls can help prevent it."
    },
    {
      q: "What is command injection?",
      a: "Command injection occurs when an application allows untrusted input to influence operating-system commands. Strong input validation, safe APIs, and avoiding unnecessary command execution can reduce the risk."
    },
    {
      q: "What is a buffer overflow?",
      a: "A buffer overflow occurs when a program writes more data to a memory buffer than the buffer can safely contain. Depending on the vulnerability, an attacker may be able to crash the application or execute unintended code."
    },
    {
      q: "What is a zero-day vulnerability?",
      a: "A zero-day vulnerability is a vulnerability that is unknown to the organization or does not yet have an available vendor patch or established defense. Attackers may exploit such vulnerabilities before defenders have had time to remediate them."
    },
    {
      q: "What is a CVE?",
      a: "CVE stands for Common Vulnerabilities and Exposures. CVE identifiers provide standardized references for publicly known cybersecurity vulnerabilities."
    },
    {
      q: "What does CVSS measure?",
      a: "CVSS stands for Common Vulnerability Scoring System. It provides a standardized way to communicate the severity of vulnerabilities using factors related to exploitability and impact."
    },
    {
      q: "What is vulnerability scanning?",
      a: "Vulnerability scanning uses automated tools to identify known vulnerabilities, missing patches, insecure configurations, and other weaknesses. Scanning is generally broader and less intrusive than penetration testing."
    },
    {
      q: "What is penetration testing?",
      a: "Penetration testing is an authorized security assessment in which testers attempt to exploit vulnerabilities to determine whether they can actually be used to compromise systems or data."
    },
    {
      q: "What is threat hunting?",
      a: "Threat hunting is the proactive search for suspicious or malicious activity that may not have triggered existing security alerts. Analysts use logs, endpoint telemetry, network data, threat intelligence, and behavioral indicators."
    },
    {
      q: "What is an indicator of compromise?",
      a: "An indicator of compromise, or IOC, is evidence that may indicate a system has been compromised. Examples include malicious file hashes, suspicious IP addresses, unusual processes, unauthorized accounts, or known malicious domains."
    },
    {
      q: "What is a watering-hole attack?",
      a: "A watering-hole attack compromises a website that members of a particular target group are likely to visit. The attacker then uses the site to target visitors with malicious content."
    },
    {
      q: "What is a supply-chain attack?",
      a: "A supply-chain attack compromises a vendor, software package, update process, or other trusted component so that the attacker can reach downstream organizations or users."
    },
    {
      q: "What is privilege escalation?",
      a: "Privilege escalation occurs when an attacker gains higher permissions than they originally had. It can be vertical, such as moving from a standard user to administrator, or horizontal, such as accessing another user's resources."
    },
    {
      q: "What is lateral movement?",
      a: "Lateral movement occurs when an attacker moves from one compromised system or account to additional systems within an environment. Attackers may use stolen credentials, remote services, or other techniques."
    },
    {
      q: "What is data exfiltration?",
      a: "Data exfiltration is the unauthorized transfer of data out of an environment. An attacker may use web services, email, cloud storage, encrypted channels, or other methods to remove stolen information."
    },
    {
      q: "A user reports a suspicious email containing a login link. What should you investigate first?",
      a: "First inspect the message without interacting with the suspicious link or attachment. Examine the sender, destination URL, email headers, authentication results such as SPF/DKIM/DMARC, and any attachment or link reputation information. If available, use a secure analysis environment or security tools to investigate the content."
    },
    {
      q: "What is network segmentation?",
      a: "Network segmentation divides a network into separate security zones. It can restrict communication between systems and make it more difficult for an attacker to move throughout an environment."
    },
    {
      q: "What is a VLAN?",
      a: "A VLAN, or Virtual Local Area Network, logically separates devices at the network-switching layer. VLANs can help organize networks and support segmentation when combined with appropriate routing and access controls."
    },
    {
      q: "What is a firewall?",
      a: "A firewall controls network traffic according to defined rules. It can allow or block traffic based on characteristics such as source, destination, port, protocol, application, or other attributes depending on the firewall type."
    },
    {
      q: "What is an IDS?",
      a: "An IDS, or Intrusion Detection System, monitors activity and generates alerts when it detects potentially malicious or suspicious behavior. An IDS is primarily a detection control rather than a blocking control."
    },
    {
      q: "What is an IPS?",
      a: "An IPS, or Intrusion Prevention System, detects potentially malicious traffic and can actively block or prevent the activity. An IPS is therefore both a detection and prevention mechanism."
    },
    {
      q: "What is a web application firewall?",
      a: "A web application firewall, or WAF, is designed to protect web applications by inspecting HTTP and HTTPS traffic. It can help defend against attacks such as SQL injection and cross-site scripting."
    },
    {
      q: "What is a VPN?",
      a: "A VPN, or Virtual Private Network, creates an encrypted communication channel across an untrusted network. VPNs can help protect data in transit and provide secure remote connectivity."
    },
    {
      q: "What is a DMZ?",
      a: "A DMZ, or demilitarized zone, is a network segment used to place publicly accessible services separately from an organization's internal network. This can reduce the risk that a compromised public-facing server provides direct access to internal systems."
    },
    {
      q: "What is NAC?",
      a: "Network Access Control, or NAC, controls whether devices are permitted to connect to a network based on requirements such as identity, authentication status, security configuration, or device health."
    },
    {
      q: "What is microsegmentation?",
      a: "Microsegmentation creates very granular security boundaries around workloads, applications, or systems. It can limit communication between individual resources and reduce lateral movement."
    },
    {
      q: "What is the difference between a vulnerability and an exploit?",
      a: "A vulnerability is a weakness that could potentially be exploited. An exploit is the technique, code, or process used to take advantage of that vulnerability."
    },
    {
      q: "What is secure configuration?",
      a: "Secure configuration means setting systems according to security requirements and best practices. This can include disabling unnecessary services, applying patches, enforcing strong authentication, restricting permissions, and enabling appropriate logging."
    },
    {
      q: "Why should unnecessary services be disabled?",
      a: "Unnecessary services increase the attack surface of a system. Disabling services that are not required reduces the number of components an attacker can potentially target."
    },
    {
      q: "What is application allowlisting?",
      a: "Application allowlisting permits only approved applications or software to execute. It can help prevent unauthorized or malicious software from running on systems."
    },
    {
      q: "What is endpoint detection and response?",
      a: "EDR stands for Endpoint Detection and Response. EDR tools collect endpoint activity and provide capabilities for detecting, investigating, and responding to suspicious behavior on endpoints."
    },
    {
      q: "What is XDR?",
      a: "XDR stands for Extended Detection and Response. XDR combines security telemetry and detection capabilities across multiple security layers such as endpoints, email, identity, cloud, and networks."
    },
    {
      q: "What is a SIEM?",
      a: "SIEM stands for Security Information and Event Management. A SIEM collects and correlates security logs and events from multiple sources to help analysts detect, investigate, and respond to threats."
    },
    {
      q: "What is SOAR?",
      a: "SOAR stands for Security Orchestration, Automation, and Response. SOAR platforms can automate repetitive security tasks and coordinate actions across different security tools."
    },
    {
      q: "What is log aggregation?",
      a: "Log aggregation collects logs from multiple systems into a centralized location. Centralized logs make searching, correlation, monitoring, investigation, and incident response easier."
    },
    {
      q: "What is a security baseline?",
      a: "A security baseline is a defined minimum security configuration for a system or environment. Baselines help organizations maintain consistent security settings and identify configuration changes."
    },
    {
      q: "What is patch management?",
      a: "Patch management is the process of identifying, testing, approving, deploying, and verifying software updates and security patches. Effective patch management reduces exposure to known vulnerabilities."
    },
    {
      q: "What is configuration drift?",
      a: "Configuration drift occurs when a system's configuration gradually differs from its approved or expected baseline. Monitoring for drift can help identify unauthorized or accidental changes."
    },
    {
      q: "What is a honeypot?",
      a: "A honeypot is a system or resource intentionally designed to attract or detect attackers. Legitimate users generally have no reason to interact with it, so activity against it can be highly suspicious."
    },
    {
      q: "What is sandboxing?",
      a: "Sandboxing isolates potentially risky code, files, or applications in a controlled environment. This allows security teams to analyze behavior while reducing the risk to production systems."
    },
    {
      q: "What is an air-gapped network?",
      a: "An air-gapped network is physically or logically isolated from other networks, particularly untrusted networks such as the internet. Air gaps can reduce remote attack paths, although they do not eliminate all risks."
    },
    {
      q: "What is multifactor authentication?",
      a: "Multifactor authentication requires users to provide two or more different authentication factors. Using multiple factors makes account compromise more difficult if one factor is stolen."
    },
    {
      q: "What are the three authentication factors?",
      a: "The three traditional authentication factors are something you know, something you have, and something you are. A password is something you know, a security token is something you have, and a fingerprint is something you are."
    },
    {
      q: "What is single sign-on?",
      a: "Single sign-on allows a user to authenticate once and then access multiple authorized applications without separately logging into each application. SSO can improve usability and centralize authentication controls."
    },
    {
      q: "What is federation?",
      a: "Federation allows identities and authentication to be trusted across organizational or application boundaries. A user's identity provider can authenticate the user while another service relies on that trusted identity."
    },
    {
      q: "What is role-based access control?",
      a: "Role-based access control, or RBAC, assigns permissions based on a user's job role. Users receive the permissions associated with their role rather than being individually assigned every permission."
    },
    {
      q: "What is attribute-based access control?",
      a: "Attribute-based access control, or ABAC, makes authorization decisions using attributes such as user identity, department, device status, location, resource classification, or time."
    },
    {
      q: "What is privileged access management?",
      a: "Privileged access management, or PAM, controls and monitors accounts with elevated permissions. PAM can include credential vaulting, temporary access, session monitoring, and privileged account management."
    },
    {
      q: "What is account provisioning?",
      a: "Account provisioning is the process of creating and configuring an account and granting the appropriate access when a user or system requires it."
    },
    {
      q: "What is account deprovisioning?",
      a: "Account deprovisioning is the process of removing or disabling access when it is no longer needed. It is especially important when employees leave an organization or change roles."
    },
    {
      q: "What is a service account?",
      a: "A service account is an account used by an application, service, or automated process rather than a human user. Service accounts should have only the permissions required for their function and should be monitored carefully."
    },
    {
      q: "What is a security incident?",
      a: "A security incident is an event that threatens or violates the confidentiality, integrity, or availability of information systems or data and requires investigation or response."
    },
    {
      q: "What are the major phases of incident response?",
      a: "Common incident response phases are preparation, detection and analysis, containment, eradication, and recovery, followed by lessons learned or post-incident activity. Organizations may use slightly different terminology depending on their framework."
    },
    {
      q: "What is incident containment?",
      a: "Containment limits the scope and impact of an incident. Examples include isolating a compromised workstation, disabling a compromised account, blocking malicious traffic, or separating an affected network segment."
    },
    {
      q: "What is incident eradication?",
      a: "Eradication removes the root cause or malicious components of an incident. This might include removing malware, eliminating persistence mechanisms, patching vulnerabilities, and resetting compromised credentials."
    },
    {
      q: "What is recovery in incident response?",
      a: "Recovery restores affected systems and services to normal operation while monitoring for signs that the attacker or problem has returned. Recovery should be performed carefully and according to the organization's procedures."
    },
    {
      q: "What is a tabletop exercise?",
      a: "A tabletop exercise is a discussion-based exercise where participants walk through a hypothetical incident scenario. It helps organizations test plans, responsibilities, communication procedures, and decision-making without performing a real attack."
    },
    {
      q: "What is a business impact analysis?",
      a: "A business impact analysis, or BIA, identifies critical business processes and evaluates the effects of disruptions. It helps organizations determine recovery priorities and requirements."
    },
    {
      q: "What is RTO?",
      a: "RTO stands for Recovery Time Objective. It is the targeted maximum amount of time an organization wants a system or service to be unavailable after a disruption."
    },
    {
      q: "What is RPO?",
      a: "RPO stands for Recovery Point Objective. It represents the maximum acceptable amount of data loss measured in time. For example, an RPO of one hour means the organization aims to recover data to within approximately one hour of the disruption."
    },
    {
      q: "What is risk assessment?",
      a: "Risk assessment identifies threats, vulnerabilities, likelihood, and potential impact so an organization can understand and prioritize its risks."
    },
    {
      q: "What is residual risk?",
      a: "Residual risk is the amount of risk that remains after security controls and risk treatments have been applied. Organizations generally cannot eliminate every risk, so they must decide which residual risks are acceptable."
    },
    {
      q: "What is third-party risk?",
      a: "Third-party risk is the security and operational risk introduced by vendors, suppliers, contractors, cloud providers, and other external organizations. Organizations should evaluate vendors based on the sensitivity and importance of the services or data involved."
    },
    {
      q: "What is a security policy?",
      a: "A security policy is a high-level statement of an organization's security requirements and expectations. Policies establish direction and are typically supported by more detailed standards, procedures, and guidelines."
    },
    {
      q: "You are investigating a workstation making connections to an unknown external IP. What should you examine first?",
      a: "Start by identifying the process responsible for the connection. On a Windows workstation, examine active network connections, the associated process or executable, DNS activity, endpoint security telemetry, and relevant logs. Tools such as EDR/XDR, SIEM data, PowerShell, or netstat can help determine whether the connection is legitimate or suspicious."
    },
    {
      q: "Can you give me a 5-question CompTIA Security+ quiz?",
      a: "Absolutely. I can give you a 10-question CompTIA Security+ practice quiz covering multiple Security+ domains. It can include knowledge questions, scenario-based questions, and PBQ-style questions. Say \"START SECURITY+ QUIZ\" when you are ready."
    },
    {
      q: "START SECURITY+ QUIZ",
      a: "[[START_SECURITY_QUIZ]]"
    },
    {
      q: "Can you give me a quiz on CompTIA Network+?",
      a: "[[START_NETWORK_QUIZ]]"
    },
    {
      q: "What happens during a DNS lookup?",
      a: "A DNS lookup translates a domain name, such as example.com, into a record such as an IP address. The resolver may check its cache or query DNS servers to obtain the answer."
    },
    {
      q: "What is the difference between TCP and UDP?",
      a: "TCP provides a reliable, ordered byte stream with connection management and retransmission. UDP sends datagrams without guaranteeing delivery or order, which can be useful for latency-sensitive applications."
    },
    {
      q: "What is the purpose of TLS in network communication?",
      a: "TLS protects network communication through encryption and integrity checks and can authenticate a server using certificates. HTTPS uses TLS to secure HTTP traffic."
    }
  ]
};

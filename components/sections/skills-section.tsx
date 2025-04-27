import { AsciiArt } from "@/components/ascii-art"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Programming Languages & Tools</h3>
          <div className="space-y-2">
            <SkillBar name="Python" percentage={85} />
            <SkillBar name="Bash Shell Scripting" percentage={80} />
            <SkillBar name="PowerShell" percentage={75} />
            <SkillBar name="Java" percentage={80} />
            <SkillBar name="JavaScript" percentage={65} />
            <SkillBar name="Git" percentage={60} />
            <SkillBar name="Jenkins" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Ethical Hacking & Penetration Testing</h3>
          <div className="space-y-2">
            <SkillBar name="Wireshark" percentage={45} />
            <SkillBar name="Metasploit" percentage={50} />
            <SkillBar name="Nmap" percentage={60} />
            <SkillBar name="Splunk (SIEM)" percentage={55} />
            <SkillBar name="Burp Suite" percentage={60} />
           
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Cloud Platforms & Databases</h3>
          <div className="space-y-2">
             <SkillBar name="SQL server" percentage={80} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Networking & Frameworks</h3>
          <div className="space-y-2">
            <SkillBar name="TCP/IP" percentage={80} />
            <SkillBar name="DNS, HTTP, DHCP" percentage={75} />
            <SkillBar name="VPN, Firewalls" percentage={55} />
            <SkillBar name="IDS/IPS" percentage={70} />
            <SkillBar name="OWASP" percentage={70} />
            <SkillBar name="Office 365" percentage={85} />
            <SkillBar name="Docker" percentage={85} />
            <SkillBar name="Kubernetes" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Operating Systems</h3>
          <div className="space-y-2">
            <SkillBar name="Kali Linux" percentage={70} />
            <SkillBar name="Ubuntu" percentage={85} />
            <SkillBar name="MacOS" percentage={25} />
            <SkillBar name="Windows" percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Specialty Areas</h3>
          <div className="space-y-2">
          <SkillBar name="SIEM, Monitoring & Threat Intel" percentage={50} />
         <SkillBar name="Pen Testing & Vulnerability Detection" percentage={60} />
         <SkillBar name="OSINT & Threat Analysis" percentage={65} />
         <SkillBar name="AI Security & Deepfake Detection" percentage={60} />
         <SkillBar name="Cloud Security & Code Analysis" percentage={65} />
          <SkillBar name="Full-Stack Dev & Docker" percentage={55} />
          <SkillBar name="Data Analysis & Security Automation" percentage={60} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  )
}

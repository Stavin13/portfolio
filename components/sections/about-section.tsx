import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
            Stavin Fernandes
            <br />
            <span className="text-primary/60">Cybersecurity Professional</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            Hello! I'm Stavin Fernandes, a cybersecurity professional specializing in threat detection, incident
            response, and security operations. With my experience in identifying and mitigating security threats, I
            focus on protecting enterprise environments.
          </p>

          <p>
            I have a strong background in IAM (Identity and Access Management), focusing on enhancing user lifecycle
            management and strengthening access control mechanisms, aligning them with business processes and objectives.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                I thrive on challenges, always seeking ways to turn the impossible into the possible. This mindset
                influences both my professional and personal life.
              </p>

              <p>
              ​Stavin Fernandes is an aspiring cybersecurity professional based in Mumbai, Maharashtra, India. 
              He is currently a student at Wilson College, Chowpatty, Mumbai.
               Stavin is passionate about protecting the digital world and is dedicated to learning and applying the latest security practices. 
              His LinkedIn profile highlights his ambition to build a career in cybersecurity, reflecting his commitment to the field.
              </p>
            </div>
          </div>

          <p>
            I am dedicated to staying ahead of emerging cyber threats and implementing robust security measures to
            safeguard critical infrastructure and data.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">Location:</span> Mumbai, India
              </li>
              <li>
                <span className="text-muted-foreground">Education:</span> BSc IT, Wilson College
              </li>
              <li>
                <span className="text-muted-foreground">Specialty:</span> combines cybersecurity expertise with AI, full-stack development, cloud technologies, and real-world applications in healthcare, making you a versatile and forward-thinking professional in the tech industry.
              </li>
              <li>
                <span className="text-muted-foreground">Certifications:</span>
                <ul className="list-disc pl-5">
                  <li>Cybersecurity & Software Engineering Expert – Job Simulation Certifications (AIG, Goldman Sachs, Mastercard, Tata Group)</li>
                  <li>Certified Network Security Practitioner (CNSP)</li>
                  </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

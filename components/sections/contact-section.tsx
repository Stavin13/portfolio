import { AsciiArt } from "@/components/ascii-art"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:stavinfernandes2098@gmail.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            stavinfernandes2098@gmail.com
          </a>
          
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Mumbai,India
          </div>
          <a
            href="https://www.linkedin.com/in/stavin-fernandes-296916249/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-2 text-primary" />
            linkedin.com/in/stavin-fernandes-296916249/
          </a>
          <a
            href="https://github.com/Stavin13"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            github.com/stavinfernandes
          </a>
        </div>
      </div>
    </div>
  )
}

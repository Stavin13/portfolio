import { AsciiArt } from "@/components/ascii-art"

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Wilson College</h3>
          <p className="text-sm">BSc IT</p>
          <p className="text-xs text-muted-foreground">May 2025</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Relevant Coursework:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Network Security & Defense</li>
              <li>Information Security Management</li>
              <li>Software Development</li>
              <li>Data Structures & Algorithms</li>
              <li>Artificial Intelligence</li>
              <li>Cyber Security</li>
              <li>Cyber Law</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

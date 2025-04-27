import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Automated Threat Intelligence Dashboard</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+ 
  | Threat Data |---->| Data Processing|---->| Real-Time Alerts|
  | Feeds       |     | & Analysis     |     | & Monitoring    |
  +-------------+     +----------------+     +----------------+ 
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Dashboard    |<-------------+
                      | Display      |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Actionable    |
                      | Insights      |
                      +---------------+
`}

          </pre>
          <p className="text-sm mb-2">
            A real-time dashboard for monitoring cybersecurity threats and providing alerts to help businesses identify and mitigate potential risks.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, Dash/Streamlit, Docker, Threat Intelligence APIs
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Personal SIEM System</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | Data Logs   |---->| Log Aggregation|---->| Real-Time Alerts|
  | Collection  |     | & Storage      |     | & Incident      |
  +-------------+     +----------------+     | Response       |
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Dashboard    |<-------------+
                      | Visualization|
                      +--------------+
                             |
                             v
                      +---------------+
                      | Security      |
                      | Event Analysis|
                      +---------------+
`}

          </pre>
          <p className="text-sm mb-2">
            A Security Information and Event Management (SIEM) system for monitoring, detecting, and responding to security incidents in real time.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, ELK Stack, Docker
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">EchoTrace - Real-time Deepfake Voice Detector</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +------------------+     +----------------+ 
  | Audio Input |---->| Deepfake Detection|---->| Real-Time Alert|
  | Stream      |     | Algorithm        |     | & Reporting    |
  +-------------+     +------------------+     +----------------+ 
        |                    |                       |
        |                    v                       |
        |             +--------------+               |
        +------------>| Detection API |<--------------+
                      | & Processing  |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Audio Threat  |
                      | Report        |
                      +---------------+
`}

          </pre>
          <p className="text-sm mb-2">
            A real-time deepfake voice detection tool that analyzes live audio streams to detect manipulated voices.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: FastAPI, React, PyAnnote, Whisper, Together.ai
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Tweet Analysis Project</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+ 
  | Twitter API |---->| Data Collection|---->| Sentiment &    |
  | Integration |     | & Preprocessing |     | Trend Analysis |
  +-------------+     +----------------+     +----------------+ 
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| NLP Analysis  |<-------------+
                      | & Visualization|
                      +--------------+
                             |
                             v
                      +---------------+
                      | Insightful    |
                      | Reports       |
                      +---------------+
`}

          </pre>
          <p className="text-sm mb-2">
            A Tweet analysis tool using the Twitter API for sentiment analysis and trend tracking to identify key insights from user-generated content.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, Twitter API, NLP, Pandas, Matplotlib, Docker
          </p>
        </div>
      </div>
    </div>
  )
}

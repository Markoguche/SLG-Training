
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Abuja, FCT, Abuja
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Statistics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2023 – Dec 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Wordpress Developer - Boro Digital Dynamics
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>Built responsive interfaces using Wordpress for desktop and mobile.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2024 – Dec 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FrontEnd Developer - Saw-T Concept
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>
            Integrated third-party libraries and APIs for interactive dashboards and data
            visualization
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2025 – September 2025"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Website Developer - NINTV
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>
           Supported the organization ’ s digital presence by designing, structuring, and
            maintaining responsive web pages for events, activities, and galleries.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="text-center py-6">
        <h1 className="mb-2">For a complete overview of my professional experience and additional projects:</h1>
        <button
          className="bg-white text-black px-6 py-3 rounded-lg border border-black  font-semibold hover:bg-blue-900 hover:text-white transition"
          onClick={() => window.open('/OGUCHE MARK Resume.pdf', '_blank')}
        >
          View My Resume
        </button>
      </div>
    </div>
  );
}

export default Experience;

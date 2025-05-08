
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Engineering Analysis of Vertical Carousel Storage System",
    description: "Conducted comprehensive engineering analysis for Alphalogic Industries Ltd's vertical carousel storage system, optimizing structural integrity and operational efficiency through advanced CAD modeling and simulation.",
    image: "/public/placeholder.svg",
    tags: ["CAD Design", "Structural Analysis", "Industrial Equipment"],
    collaboration: "Alphalogic Industries Ltd."
  },
  {
    id: 2,
    title: "Three Wheel Propulsion Cycle for Handicapped Person",
    description: "Designed and developed an innovative three-wheel propulsion cycle specifically engineered for individuals with mobility challenges, focusing on ergonomics, safety, and ease of use.",
    image: "/public/placeholder.svg",
    tags: ["Mechanical Design", "Accessibility", "Product Development"],
    collaboration: "Independent Project"
  },
  {
    id: 3,
    title: "Solar Thermal Collector Project",
    description: "Engineered a high-efficiency solar thermal collector system, optimizing energy capture and thermal transfer while reducing material costs and environmental impact.",
    image: "/public/placeholder.svg",
    tags: ["Renewable Energy", "Thermal Engineering", "Sustainability"],
    collaboration: "University Research"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">My Portfolio</h2>
          <p className="text-gray-600">Showcasing my major engineering projects and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="project-card-content flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                {project.collaboration && (
                  <p className="text-sm text-blue-600 mb-3">
                    With: {project.collaboration}
                  </p>
                )}
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project Details
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

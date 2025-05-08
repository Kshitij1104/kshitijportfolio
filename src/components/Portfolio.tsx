
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Engineering Analysis of Vertical Carousel Storage System",
    description: "Conducted comprehensive engineering analysis for Alphalogic Industries Ltd's vertical carousel storage system, optimizing structural integrity and operational efficiency through advanced CAD modeling and simulation.",
    image: "/placeholder.svg",
    tags: ["CAD Design", "Structural Analysis", "Industrial Equipment"],
    collaboration: "Alphalogic Industries Ltd."
  },
  {
    id: 2,
    title: "Three Wheel Propulsion Cycle for Handicapped Person",
    description: "Designed and developed an innovative three-wheel propulsion cycle specifically engineered for individuals with mobility challenges, focusing on ergonomics, safety, and ease of use.",
    image: "/placeholder.svg",
    tags: ["Mechanical Design", "Accessibility", "Product Development"],
    collaboration: "Independent Project"
  },
  {
    id: 3,
    title: "Solar Thermal Collector Project",
    description: "Engineered a high-efficiency solar thermal collector system, optimizing energy capture and thermal transfer while reducing material costs and environmental impact.",
    image: "/placeholder.svg",
    tags: ["Renewable Energy", "Thermal Engineering", "Sustainability"],
    collaboration: "University Research"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-gradient-to-b from-background/50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-gray-600">Showcasing my major engineering projects and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card h-full flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-80"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-overlay"
                />
              </div>
              <div className="project-card-content flex-1 flex flex-col bg-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                {project.collaboration && (
                  <p className="text-sm text-primary mb-3">
                    With: {project.collaboration}
                  </p>
                )}
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-primary/5 text-gray-700 hover:bg-primary/10 border border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:underline font-medium"
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

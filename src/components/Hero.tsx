
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50/50 to-white"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <div className="inline-block mb-2">
              <span className="bg-blue-100 text-blue-600 font-medium py-1 px-3 rounded-full text-sm">
                Mechanical Engineer
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Hello, I'm <span className="text-blue-500">Kshitij Bobade</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
              I specialize in mechanical design and engineering analysis, 
              with expertise in CAD software and data analysis to create 
              innovative, sustainable mechanical systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="btn-primary" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              
              <Button variant="outline" className="bg-white" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/public/placeholder.svg" 
                  alt="Kshitij Bobade" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
            <ChevronDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set a small delay for the entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-20 w-64 h-64 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute left-10 bottom-20 w-72 h-72 rounded-full bg-blue-200/50 blur-3xl"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Content area */}
          <div 
            className={`md:col-span-7 space-y-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
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
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 
                          shadow-lg hover:shadow-blue-300/50 transition-all duration-300" 
                asChild
              >
                <a href="#portfolio">View My Work</a>
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 
                           font-semibold py-3 px-6 transition-all duration-300" 
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          {/* Profile image area */}
          <div 
            className={`md:col-span-5 flex justify-center md:justify-end transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 bg-blue-500/10 rounded-full 
                             top-5 left-5 animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute -z-10 w-48 h-48 md:w-60 md:h-60 bg-blue-500/5 rounded-full 
                             -top-3 -right-3 animate-pulse" style={{ animationDuration: '5s' }}></div>

              {/* Profile image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 
                             border-white shadow-xl relative z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="Kshitij Bobade" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg transform 
                              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-10 left-0 right-0 flex justify-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a 
            href="#about" 
            className="text-gray-400 hover:text-blue-500 transition-colors animate-bounce p-2 
                      hover:bg-white/50 rounded-full" 
            style={{ animationDuration: '2s' }}
          >
            <ChevronDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-background/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-800">My Journey</h2>
          <p className="text-gray-600">My educational background and passion for mechanical engineering</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              I am a dedicated <span className="font-semibold text-primary">Mechanical Engineer</span> with a 
              strong foundation in design, analysis, and innovation. My journey in engineering began with a diploma from 
              A.S Polytechnic and culminated in my graduation from MIT Academy of Engineering.
            </p>
            
            <p className="text-lg text-gray-700">
              Throughout my academic and professional journey, I have developed a deep passion for solving 
              complex engineering challenges through advanced CAD software and analytical thinking. I believe in 
              creating mechanical systems that are not only innovative but also sustainable and efficient.
            </p>
            
            <p className="text-lg text-gray-700">
              My expertise lies in utilizing industry-standard tools like CATIA, Creo Parametric, 
              AutoCAD, and Solidworks to bring engineering concepts to life. Additionally, my proficiency 
              in data analysis enables me to make informed decisions and optimize designs based on concrete evidence.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 text-primary">Education</h4>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary hover:shadow-primary/10">
                  <CardContent className="p-4">
                    <h5 className="font-medium">MIT Academy of Engineering</h5>
                    <p className="text-sm text-gray-500">Bachelor's Degree in Mechanical Engineering</p>
                    <p className="text-xs text-gray-400 mt-1">2022 - 2025</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary hover:shadow-primary/10">
                  <CardContent className="p-4">
                    <h5 className="font-medium">A.S Polytechnic</h5>
                    <p className="text-sm text-gray-500">Diploma in Mechanical Engineering</p>
                    <p className="text-xs text-gray-400 mt-1">2019 - 2022</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-primary/20 rounded-2xl rotate-6 opacity-50"></div>
              <div className="w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/43513de7-958a-4b86-9f34-24138e9f48bd.png"
                  alt="Kshitij working on engineering designs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-medium">Innovate. Design. Create.</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</h3>
            <p className="text-gray-600">CAD Tools Mastered</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

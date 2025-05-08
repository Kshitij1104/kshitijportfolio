
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
          <p className="text-gray-600">My educational journey and passion for mechanical engineering</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              I am a dedicated <span className="font-semibold text-blue-600">Mechanical Engineer</span> with a 
              strong foundation in design, analysis, and innovation. My journey in engineering began with a diploma from 
              A.S Polytechnica and culminated in my graduation from MIT Academy of Engineering.
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
              <h4 className="text-lg font-semibold mb-3">Education</h4>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h5 className="font-medium">MIT Academy of Engineering</h5>
                    <p className="text-sm text-gray-500">Bachelor's Degree in Mechanical Engineering</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h5 className="font-medium">A.S Polytechnica</h5>
                    <p className="text-sm text-gray-500">Diploma in Mechanical Engineering</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/public/placeholder.svg"
                  alt="Kshitij working on engineering designs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-medium">Innovate. Design. Create.</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">3+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">10+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">5+</h3>
            <p className="text-gray-600">CAD Tools Mastered</p>
          </div>
          <div className="p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">100%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

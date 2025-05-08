
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const cadSkills = [
    { name: "CATIA V5", level: 90 },
    { name: "Creo Parametric", level: 85 },
    { name: "AutoCAD", level: 95 },
    { name: "Solidworks", level: 80 },
  ];

  const analysisSkills = [
    { name: "Data Analysis", level: 75 },
    { name: "Big Data", level: 70 },
    { name: "FEA (Finite Element Analysis)", level: 80 },
    { name: "Mechanical Simulation", level: 85 },
  ];

  const designSkills = [
    { name: "Mechanical Design", level: 90 },
    { name: "Product Development", level: 80 },
    { name: "Technical Drawing", level: 95 },
    { name: "Prototyping", level: 75 },
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Skills</h2>
          <p className="text-gray-600">Expertise in CAD tools and mechanical engineering software</p>
        </div>

        <Tabs defaultValue="cad" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-10">
            <TabsTrigger value="cad">CAD Software</TabsTrigger>
            <TabsTrigger value="analysis">Analysis Tools</TabsTrigger>
            <TabsTrigger value="design">Design Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cad" className="space-y-8">
            <p className="text-gray-600 mb-8">
              I have extensive experience with industry-standard CAD software, allowing me to create precise 3D models and technical drawings for various mechanical engineering applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cadSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="space-y-8">
            <p className="text-gray-600 mb-8">
              I leverage data analysis and simulation tools to evaluate mechanical designs, optimize performance, and make data-driven engineering decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analysisSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="space-y-8">
            <p className="text-gray-600 mb-8">
              My design skills enable me to translate engineering concepts into practical, efficient, and sustainable mechanical systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="border-t-4 border-t-blue-500">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-600">
                Creating innovative mechanical systems with precision and attention to detail using advanced CAD tools.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-blue-500">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Analyze</h3>
              <p className="text-gray-600">
                Applying data-driven analysis to optimize designs, improve performance, and ensure reliability.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-blue-500">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Innovate</h3>
              <p className="text-gray-600">
                Continuously exploring new approaches to engineering challenges with sustainability in mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

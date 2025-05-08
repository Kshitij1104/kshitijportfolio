
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const cadSkills = [
    { name: "CATIA V5", level: 90, color: "bg-teal-500" },
    { name: "Creo Parametric", level: 85, color: "bg-teal-600" },
    { name: "AutoCAD", level: 95, color: "bg-teal-700" },
    { name: "Solidworks", level: 80, color: "bg-teal-800" },
  ];

  const analysisSkills = [
    { name: "Data Analysis", level: 75, color: "bg-purple-500" },
    { name: "Big Data", level: 70, color: "bg-purple-600" },
    { name: "FEA (Finite Element Analysis)", level: 80, color: "bg-purple-700" },
    { name: "Mechanical Simulation", level: 85, color: "bg-purple-800" },
  ];

  const designSkills = [
    { name: "Mechanical Design", level: 90, color: "bg-amber-500" },
    { name: "Product Development", level: 80, color: "bg-amber-600" },
    { name: "Technical Drawing", level: 95, color: "bg-amber-700" },
    { name: "Prototyping", level: 75, color: "bg-amber-800" },
  ];

  return (
    <section id="skills" className="section bg-gradient-to-b from-purple-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block mb-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">My Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Technical Skills</h2>
          <p className="text-gray-600">Expertise in CAD tools and mechanical engineering software</p>
        </div>

        <Tabs defaultValue="cad" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-10 bg-gray-100">
            <TabsTrigger value="cad" className="data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800">CAD Software</TabsTrigger>
            <TabsTrigger value="analysis" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800">Analysis Tools</TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800">Design Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cad" className="space-y-8">
            <p className="text-gray-600 mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              I have extensive experience with industry-standard CAD software, allowing me to create precise 3D models and technical drawings for various mechanical engineering applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cadSkills.map((skill) => (
                <div key={skill.name} className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <span className="text-teal-600 font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName={skill.color} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="space-y-8">
            <p className="text-gray-600 mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              I leverage data analysis and simulation tools to evaluate mechanical designs, optimize performance, and make data-driven engineering decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analysisSkills.map((skill) => (
                <div key={skill.name} className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <span className="text-purple-600 font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName={skill.color} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="space-y-8">
            <p className="text-gray-600 mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              My design skills enable me to translate engineering concepts into practical, efficient, and sustainable mechanical systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designSkills.map((skill) => (
                <div key={skill.name} className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <span className="text-amber-600 font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName={skill.color} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="border-t-4 border-t-teal-500 hover:shadow-teal-100 transition-all">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold">D</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-700">Design</h3>
              <p className="text-gray-600">
                Creating innovative mechanical systems with precision and attention to detail using advanced CAD tools.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-purple-500 hover:shadow-purple-100 transition-all">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Analyze</h3>
              <p className="text-gray-600">
                Applying data-driven analysis to optimize designs, improve performance, and ensure reliability.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-amber-500 hover:shadow-amber-100 transition-all">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-amber-600 font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Innovate</h3>
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


import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-blue-500 font-heading font-bold text-2xl">
              KB<span className="text-gray-800">.</span>
            </a>
            <p className="mt-2 text-gray-600 max-w-md">
              Mechanical Engineer specializing in CAD design, data analysis, and innovative mechanical systems.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <nav>
              <ul className="flex space-x-6">
                {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <p className="mt-6 text-sm text-gray-500">
              © {currentYear} Kshitij Bobade. All rights reserved.
            </p>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <p className="text-center text-sm text-gray-500">
          Designed and developed with passion to showcase my engineering expertise.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-purple-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block mb-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-gray-600">Reach out to discuss your engineering needs or potential collaborations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
              <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <CardContent className="p-6 flex gap-4">
                <div className="bg-teal-100 rounded-full p-3 text-teal-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <p className="text-gray-600">bobadekshitij6@gmail.com</p>
                  <a href="mailto:bobadekshitij6@gmail.com" className="text-teal-600 hover:underline text-sm mt-1 inline-block">
                    Send an email
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardContent className="p-6 flex gap-4">
                <div className="bg-purple-100 rounded-full p-3 text-purple-600 shrink-0">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardContent className="p-6 flex gap-4">
                <div className="bg-amber-100 rounded-full p-3 text-amber-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <p className="text-gray-600">Nagpur Road, Kachore Layout</p>
                  <p className="text-gray-600">Nalwadi Wardha</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-teal-50 rounded-lg border border-gray-100 shadow-sm">
              <h4 className="font-medium text-lg mb-4 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Looking Forward To Hearing From You</h4>
              <p className="text-gray-700">
                I'm always interested in discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500"></div>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                      className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white font-semibold py-4 px-6 
                            shadow-lg hover:shadow-teal-200/50 transition-all duration-300 rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

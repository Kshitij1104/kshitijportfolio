
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Mail, MapPin } from "lucide-react";
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
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
          <p className="text-gray-600">Reach out to discuss your engineering needs or potential collaborations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <p className="text-gray-600">bobadekshitij6@gmail.com</p>
                  <a href="mailto:bobadekshitij6@gmail.com" className="text-blue-600 hover:underline text-sm mt-1 inline-block">
                    Send an email
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600 shrink-0">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <p className="text-gray-600">Nagpur Road, Kachore Layout</p>
                  <p className="text-gray-600">Nalwadi Wardha</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-medium text-lg mb-4 text-blue-800">Looking Forward To Hearing From You</h4>
              <p className="text-gray-700">
                I'm always interested in discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <Card>
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
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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

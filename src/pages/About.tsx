
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Globe, Leaf, Users, Building2, Award, Sparkles } from 'lucide-react';

const TeamMember = ({ name, role, image, social }) => (
  <div className="flex flex-col items-center text-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-md" />
    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{name}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-2">{role}</p>
    <div className="flex space-x-3">
      {social.map((item, index) => (
        <a 
          key={index} 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
        >
          {item.icon}
        </a>
      ))}
    </div>
  </div>
);

const MilestoneCard = ({ year, title, description }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold">
        {year}
      </div>
      <div className="w-px h-full bg-green-200 dark:bg-green-800/50 my-2"></div>
    </div>
    <div className="pb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              We're on a mission to make the internet more sustainable, one website at a time.
            </p>
            <div className="eco-gradient p-px rounded-full inline-block">
              <div className="bg-white dark:bg-gray-900 rounded-full p-2">
                <Globe className="h-20 w-20 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
          
          {/* Story Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                How we started our journey to make the web greener and more sustainable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  GreenAudit was founded in 2021 by a team of developers and environmental advocates who recognized the growing carbon footprint of the digital world. With internet usage contributing approximately 1 billion tons of CO2 emissions annually—roughly equivalent to the aviation industry—we knew something had to change.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our founding team discovered that many websites were needlessly inefficient, with unoptimized images, bloated code, and energy-intensive features. Even more concerning was that many site owners weren't aware of these inefficiencies or their environmental impact.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We built GreenAudit to provide an easy-to-use solution that would not only identify these issues but also help website owners implement sustainable best practices. Our goal is to make the web not just greener, but faster and more user-friendly too.
                </p>
              </div>
              
              <div className="space-y-8">
                <MilestoneCard 
                  year="2021" 
                  title="Company Founded" 
                  description="GreenAudit was established with a mission to reduce the web's carbon footprint."
                />
                <MilestoneCard 
                  year="2022" 
                  title="Beta Launch" 
                  description="Released our first beta version to 500 early adopters and gathered valuable feedback."
                />
                <MilestoneCard 
                  year="2022" 
                  title="Partnership Program" 
                  description="Partnered with green hosting providers to offer sustainable hosting options."
                />
                <MilestoneCard 
                  year="2023" 
                  title="Certification Program" 
                  description="Launched our Eco-Score certification to recognize sustainable websites."
                />
                <MilestoneCard 
                  year="2023" 
                  title="Global Expansion" 
                  description="Expanded our team and reach to serve customers worldwide."
                />
              </div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Values</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do at GreenAudit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ValueCard 
                icon={Leaf} 
                title="Environmental Responsibility" 
                description="We believe in the power of small changes to make a big environmental impact."
              />
              <ValueCard 
                icon={Sparkles} 
                title="Innovation" 
                description="We're constantly exploring new ways to make the web more sustainable."
              />
              <ValueCard 
                icon={Users} 
                title="Community" 
                description="We work together with our users to build a more sustainable digital world."
              />
              <ValueCard 
                icon={Building2} 
                title="Transparency" 
                description="We're open about our methods, calculations, and recommendations."
              />
              <ValueCard 
                icon={Award} 
                title="Quality" 
                description="We're committed to providing accurate, reliable data and recommendations."
              />
              <ValueCard 
                icon={Heart} 
                title="Accessibility" 
                description="We believe sustainable web practices should be available to everyone."
              />
            </div>
          </div>
          
          {/* Impact Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Impact</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The positive change we've helped create since our founding.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">40,000+</div>
                <p className="text-gray-700 dark:text-gray-300">Websites Optimized</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500K+</div>
                <p className="text-gray-700 dark:text-gray-300">Tons of CO₂ Saved</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">25%</div>
                <p className="text-gray-700 dark:text-gray-300">Average Speed Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">1,200+</div>
                <p className="text-gray-700 dark:text-gray-300">Certified Green Websites</p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Team</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Meet the passionate people behind GreenAudit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember 
                name="Sarah Johnson"
                role="Co-Founder & CEO"
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                social={[
                  { icon: "LinkedIn", url: "#" },
                  { icon: "Twitter", url: "#" }
                ]}
              />
              <TeamMember 
                name="David Chen"
                role="Co-Founder & CTO"
                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                social={[
                  { icon: "LinkedIn", url: "#" },
                  { icon: "Twitter", url: "#" }
                ]}
              />
              <TeamMember 
                name="Maya Rodriguez"
                role="Head of Sustainability"
                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                social={[
                  { icon: "LinkedIn", url: "#" },
                  { icon: "Twitter", url: "#" }
                ]}
              />
              <TeamMember 
                name="James Wilson"
                role="Lead Developer"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                social={[
                  { icon: "LinkedIn", url: "#" },
                  { icon: "Twitter", url: "#" }
                ]}
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border border-green-100 dark:border-green-800/50 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to make your website greener?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Join thousands of businesses already reducing their digital carbon footprint with GreenAudit.
            </p>
            <Link to="/scan">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white">
                Start Your Free Scan
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;


import React from 'react';

const testimonials = [
  {
    quote: "GreenAudit helped us reduce our site's carbon footprint by 73% while improving load times by 2.5 seconds. Our eco-score badge has become a trust signal for our environmentally-conscious customers.",
    author: "Sarah Johnson",
    role: "CMO, EcoLife Brands",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Implementing GreenAudit's recommendations not only reduced our website's energy usage but also improved our SEO rankings. The ROI has been impressive on both fronts.",
    author: "Michael Chen",
    role: "CTO, TechSustain",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "As a small business with ESG goals, GreenAudit gave us an easy way to verify our digital sustainability efforts. The one-click optimizations saved us countless development hours.",
    author: "Emma Rodriguez",
    role: "Founder, Green Sprout Co.",
    image: "https://images.unsplash.com/photo-1545696968-1a5245650b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialSection = () => {
  return (
    <div className="py-16 bg-green-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses reducing their digital carbon footprint
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <span className="text-4xl text-green-500 leading-none">"</span>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

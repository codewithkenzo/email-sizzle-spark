
import { ArrowRight, Mail, Send, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="circle-pattern w-[500px] h-[500px] -top-40 -right-40"></div>
        <div className="circle-pattern w-[300px] h-[300px] top-40 -left-20"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 mb-8">
              <Mail className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-600">Introducing MailSync Pro</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Enterprise Email Infrastructure
              <br />Made Simple
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Build, scale, and optimize your email operations with our powerful API.
              Trusted by developers worldwide.
            </p>

            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-400 rounded-lg blur opacity-30 animate-pulse"></div>
              <button className="button-glow group">
                <span className="relative px-6 py-3 bg-white rounded-md text-gray-900 hover:text-purple-600 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for Modern Development
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to handle millions of emails with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card animate-fade-up" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-600 to-teal-400 p-0.5">
            <div className="relative rounded-[15px] bg-white p-8 sm:p-12">
              <div className="circle-pattern w-[300px] h-[300px] top-0 right-0 opacity-5"></div>
              
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Transform Your Email Infrastructure?
                </h2>
                <p className="text-gray-600 mb-8">
                  Join thousands of companies that trust MailSync Pro for their critical email operations.
                </p>
                
                <button className="button-glow group">
                  <span className="relative px-8 py-3 bg-white rounded-md text-gray-900 hover:text-purple-600 flex items-center gap-2">
                    Start Building Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-sm text-gray-600">
            <p>© 2024 MailSync Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: Mail,
    title: "Powerful Email API",
    description: "RESTful API designed for developers, with comprehensive documentation and SDKs."
  },
  {
    icon: Send,
    title: "Instant Delivery",
    description: "Lightning-fast email delivery with automatic retries and queue management."
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Detailed analytics and tracking for every email sent through our platform."
  }
];

export default Index;


import { ArrowRight, Mail, Send, Zap, Star, Shield, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-muted">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-accent" />
                <span className="text-xl font-bold">MailSync</span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="nav-link">Features</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="button-glow">
                <span className="relative px-4 py-2 bg-background rounded-md text-foreground flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="circle-pattern w-[500px] h-[500px] -top-40 -right-40"></div>
        <div className="circle-pattern w-[300px] h-[300px] top-40 -left-20"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted mb-8">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm">Introducing MailSync Pro</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Enterprise Email Infrastructure
              <br />Made Simple
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Build, scale, and optimize your email operations with our powerful API.
              Trusted by developers worldwide.
            </p>

            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fb4934] to-[#8ec07c] rounded-lg blur opacity-30 animate-pulse"></div>
              <button className="button-glow group">
                <span className="relative px-6 py-3 bg-background rounded-md text-foreground flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for Modern Development
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Everything you need to handle millions of emails with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card animate-fade-up" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by Developers
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Join thousands of developers who trust MailSync Pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card animate-fade-up" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg font-bold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#fb4934] to-[#8ec07c] p-0.5">
            <div className="relative rounded-[15px] bg-background p-8 sm:p-12">
              <div className="circle-pattern w-[300px] h-[300px] top-0 right-0 opacity-5"></div>
              
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Transform Your Email Infrastructure?
                </h2>
                <p className="text-foreground/80 mb-8">
                  Join thousands of companies that trust MailSync Pro for their critical email operations.
                </p>
                
                <button className="button-glow group">
                  <span className="relative px-8 py-3 bg-background rounded-md text-foreground flex items-center gap-2">
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
      <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Features</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">API</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">About</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Community</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Status</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Privacy</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Terms</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Cookie Policy</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-muted">
            <div className="text-center text-sm text-foreground/60">
              <p>© 2024 MailSync Pro. All rights reserved.</p>
            </div>
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
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance features."
  },
  {
    icon: Sparkles,
    title: "Smart Optimization",
    description: "AI-powered delivery optimization and content recommendations."
  },
  {
    icon: Star,
    title: "Premium Support",
    description: "24/7 expert support with dedicated account management for enterprise plans."
  }
];

const testimonials = [
  {
    content: "MailSync Pro has transformed how we handle transactional emails. The API is incredibly well-designed and the documentation is top-notch.",
    author: "Sarah Chen",
    role: "Senior Developer at TechCorp"
  },
  {
    content: "Setting up email infrastructure used to be a nightmare. With MailSync Pro, it's a breeze. The analytics are incredibly detailed.",
    author: "Michael Rodriguez",
    role: "CTO at StartupX"
  },
  {
    content: "The reliability and speed of MailSync Pro is unmatched. We've seen a significant improvement in delivery rates since switching.",
    author: "Emily Watson",
    role: "Lead Engineer at ScaleFlow"
  }
];

export default Index;

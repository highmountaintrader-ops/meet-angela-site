// HPI 1.7-G
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Phone, FileText, MessageSquare, FolderOpen, Mic, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Features, HowItWorks, TargetIndustries, ContactInquiries } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// --- Utility Components for Motion & Layout ---

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "down" | "left" | "right" | "none" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[20%] -bottom-[20%] w-full h-[140%]">
        <Image src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

const Hairline = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-[1px] bg-grey200 ${className}`} />
);

// --- Main Component ---

export default function HomePage() {
  // --- Canonical Data Sources ---
  const [features, setFeatures] = useState<Features[]>([]);
  const [howItWorks, setHowItWorks] = useState<HowItWorks[]>([]);
  const [industries, setIndustries] = useState<TargetIndustries[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Data Fetching Logic (Preserved) ---
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [featuresResult, howItWorksResult, industriesResult] = await Promise.all([
        BaseCrudService.getAll<Features>('features'),
        BaseCrudService.getAll<HowItWorks>('howitworks'),
        BaseCrudService.getAll<TargetIndustries>('targetindustries')
      ]);

      const sortedFeatures = featuresResult.items.sort((a, b) => 
        (a.displayOrder || 0) - (b.displayOrder || 0)
      );
      const sortedSteps = howItWorksResult.items.sort((a, b) => 
        (a.stepNumber || 0) - (b.stepNumber || 0)
      );
      const sortedIndustries = industriesResult.items.sort((a, b) => 
        (a.displayOrder || 0) - (b.displayOrder || 0)
      );

      setFeatures(sortedFeatures);
      setHowItWorks(sortedSteps);
      setIndustries(sortedIndustries);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Form Handling Logic (Preserved) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await BaseCrudService.create<ContactInquiries>('contactinquiries', {
        _id: crypto.randomUUID(),
        visitorName: formData.name,
        visitorEmail: formData.email,
        inquiryMessage: formData.message,
        submissionDateTime: new Date().toISOString(),
        status: 'new'
      });
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- Scroll Progress for Global Motion ---
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(12px)"]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-clip font-paragraph">
      
      {/* Global Header Wrapper for Sticky Effect */}
      <motion.div 
        style={{ opacity: headerOpacity, backdropFilter: headerBlur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-grey200/50 bg-background/80"
      >
        <Header />
      </motion.div>

      <main className="pt-24"> {/* Offset for fixed header */}
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-6 py-20">
          <div className="w-full max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center space-x-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-heading font-semibold tracking-widest uppercase text-secondary">Meet Angela</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-heading font-black tracking-tight text-foreground mb-8 text-balance">
                  AI Receptionist for Service Businesses
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl font-paragraph text-secondary mb-12 max-w-2xl leading-relaxed text-balance">
                  Never miss a call. Angela answers, captures customer requests, and helps you follow up — all while you're on the job.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="inline-block">
                    <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-7 text-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="#how-it-works" className="inline-block">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent border-grey300 text-foreground hover:bg-grey100 rounded-none px-10 py-7 text-lg font-semibold transition-all duration-300">
                      See How It Works
                    </Button>
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 h-[60vh] lg:h-[80vh] w-full relative">
              <FadeIn delay={0.5} className="w-full h-full" direction="left">
                <div className="w-full h-full relative bg-grey100 overflow-hidden">
                  {/* Structural Hero Image */}
                  <ParallaxImage 
                    src="https://static.wixstatic.com/media/9b126e_a53a547260094d2caab450ee4b6c00cb~mv2.png?originWidth=960&originHeight=704" 
                    alt="Service professional working"
                    className="w-full h-full"
                  />
                  {/* Decorative overlay to ensure text contrast if image was behind text, but here it's side-by-side. Adding a subtle gradient for depth. */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-multiply" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- HOW IT WORKS (Sticky Narrative Section) --- */}
        <section id="how-it-works" className="relative w-full bg-grey900 text-background py-32">
          <div className="w-full max-w-[100rem] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
              
              {/* Sticky Left Column */}
              <div className="lg:col-span-5 relative">
                <div className="lg:sticky lg:top-40">
                  <FadeIn>
                    <h2 className="text-sm font-heading font-semibold tracking-widest uppercase text-grey400 mb-4">The Process</h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
                      Seamless integration into your workday.
                    </h3>
                    <p className="text-xl text-grey400 max-w-md">
                      Angela operates silently in the background, ensuring every customer is heard while you focus on the task at hand.
                    </p>
                  </FadeIn>
                </div>
              </div>

              {/* Scrolling Right Column */}
              <div className="lg:col-span-7 space-y-24 lg:space-y-40 pt-12 lg:pt-0">
                {isLoading ? (
                  <div className="h-[400px] flex items-center justify-center opacity-50">Loading process...</div>
                ) : (
                  howItWorks.map((step, index) => (
                    <FadeIn key={step._id} delay={0.1} className="relative">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="text-6xl md:text-8xl font-heading font-black text-grey800 leading-none select-none">
                          0{step.stepNumber}
                        </div>
                        <div className="flex-1 pt-2 md:pt-6">
                          <h4 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                            {step.stepDescription}
                          </h4>
                          {step.calloutText && (
                            <p className="text-lg text-grey400">
                              {step.calloutText}
                            </p>
                          )}
                          {step.stepImage && (
                            <div className="mt-8 w-full h-64 overflow-hidden bg-grey800">
                              <Image 
                                src={step.stepImage} 
                                alt={`Step ${step.stepNumber}`}
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  ))
                )}
              </div>

            </div>
          </div>
        </section>

        {/* --- FEATURES (Minimalist Grid) --- */}
        <section id="features" className="relative w-full py-32 bg-background">
          <div className="w-full max-w-[100rem] mx-auto px-6">
            
            <div className="mb-20 md:mb-32 max-w-3xl">
              <FadeIn>
                <h2 className="text-sm font-heading font-semibold tracking-widest uppercase text-secondary mb-4">Capabilities</h2>
                <h3 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                  Everything you need to manage calls effortlessly.
                </h3>
              </FadeIn>
            </div>

            <div className="relative">
              <Hairline className="absolute top-0 left-0 w-full hidden md:block" />
              
              {isLoading ? (
                <div className="h-[400px] flex items-center justify-center text-secondary">Loading features...</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 pt-12">
                  {features.map((feature, index) => (
                    <FadeIn key={feature._id} delay={index * 0.1} className="group">
                      <div className="flex flex-col h-full">
                        {feature.featureImage ? (
                          <div className="w-full h-48 mb-8 overflow-hidden bg-grey100">
                            <Image 
                              src={feature.featureImage} 
                              alt={feature.featureName || 'Feature'}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 mb-8 flex items-center justify-center bg-grey100 text-primary">
                            <Check className="w-6 h-6" />
                          </div>
                        )}
                        <h4 className="text-2xl font-heading font-bold text-foreground mb-4">
                          {feature.featureName}
                        </h4>
                        <p className="text-base font-paragraph text-secondary leading-relaxed flex-grow">
                          {feature.description}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --- VISUAL BREATHER (Full Bleed Image) --- */}
        <section className="w-full h-[70vh] relative overflow-hidden">
          <ParallaxImage 
            src="https://static.wixstatic.com/media/9b126e_7a5e227dc5d34ac6bc31d984240661e6~mv2.png?originWidth=1920&originHeight=1088" 
            alt="Professional service environment"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center max-w-4xl px-6 leading-tight">
                "Focus on the work. We'll handle the interruptions."
              </h2>
            </FadeIn>
          </div>
        </section>

        {/* --- WHO IT'S FOR (Industries - Typographic Focus) --- */}
        <section className="relative w-full py-32 bg-grey100">
          <div className="w-full max-w-[100rem] mx-auto px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <FadeIn className="max-w-2xl">
                <h2 className="text-sm font-heading font-semibold tracking-widest uppercase text-secondary mb-4">Built For</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                  Service professionals who need to stay focused on the job.
                </h3>
              </FadeIn>
            </div>

            {isLoading ? (
              <div className="h-[200px] flex items-center justify-center text-secondary">Loading industries...</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-grey300 border border-grey300">
                {industries.map((industry, index) => (
                  <FadeIn key={industry._id} delay={index * 0.05} className="bg-grey100 p-12 hover:bg-background transition-colors duration-300 group">
                    <div className="flex flex-col h-full justify-between">
                      <h4 className="text-3xl font-heading font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                        {industry.industryName}
                      </h4>
                      {industry.description && (
                        <p className="text-secondary font-paragraph mb-8">
                          {industry.description}
                        </p>
                      )}
                      <div className="mt-auto">
                        <ArrowRight className="w-6 h-6 text-grey400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* --- COMPLIANCE & PRIVACY (Strict Typography) --- */}
        <section className="relative w-full py-24 bg-background border-y border-grey200">
          <div className="w-full max-w-[60rem] mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                Compliance & Privacy
              </h2>
              <div className="space-y-8">
                <p className="text-lg font-paragraph text-foreground font-medium">
                  Angela only sends messages related to customer-initiated service requests. No marketing or promotional messages are sent.
                </p>
                
                <div className="pt-8 border-t border-grey200">
                  <h3 className="text-sm font-heading font-bold text-secondary uppercase tracking-wider mb-4">
                    SMS Disclosure
                  </h3>
                  <p className="text-xs font-paragraph text-secondary leading-relaxed max-w-3xl mx-auto">
                    By contacting a business using Meet Angela, you agree to receive conversational text messages related to your service request, scheduling, estimates, and support. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- CONTACT FORM (Split Layout) --- */}
        <section id="contact" className="relative w-full py-32 bg-grey900 text-background">
          <div className="w-full max-w-[100rem] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              
              <div className="flex flex-col justify-center">
                <FadeIn>
                  <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
                    Ready to reclaim your time?
                  </h2>
                  <p className="text-xl text-grey400 mb-12 max-w-md">
                    Send us a message to learn how Angela can transform the way you handle customer calls.
                  </p>
                  
                  <div className="space-y-6 text-grey400">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full border border-grey700 flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-lg">Never miss a lead</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full border border-grey700 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <span className="text-lg">Automated follow-ups</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="bg-background text-foreground p-8 md:p-12">
                <FadeIn delay={0.2}>
                  <h3 className="text-2xl font-heading font-bold mb-8">Get Started</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-grey100 border-transparent focus:border-primary focus:ring-0 rounded-none h-14 text-lg px-4"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-grey100 border-transparent focus:border-primary focus:ring-0 rounded-none h-14 text-lg px-4"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-grey100 border-transparent focus:border-primary focus:ring-0 rounded-none min-h-[160px] text-lg p-4 resize-none"
                        placeholder="Tell us about your business..."
                      />
                    </div>
                    
                    {submitSuccess && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 text-green-800 p-4 border border-green-200"
                      >
                        <p className="text-base font-paragraph font-medium flex items-center">
                          <Check className="w-5 h-5 mr-2" />
                          Thank you! We'll be in touch soon.
                        </p>
                      </motion.div>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-16 text-lg font-semibold transition-all duration-300 mt-4"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
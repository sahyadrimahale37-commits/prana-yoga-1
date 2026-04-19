"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, Play, Star, Clock, Users, Award, MessageCircle, ChevronRight, Leaf, Sparkles, Heart, Phone } from "lucide-react"

// Sticky Header Component
function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">Prana Yoga</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#programs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Programs</a>
          <a href="#instructors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instructors</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Join Now
        </Button>
      </div>
    </header>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30">
              <Sparkles className="w-3 h-3 mr-1" />
              7 Days Free Trial
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Transform Your Life With Yoga
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Join premium online yoga sessions for strength, flexibility & natural glow. Experience the ancient art of wellness with modern convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Register Free
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5">
                <Play className="w-4 h-4 mr-2" />
                Watch Preview
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm"><strong className="text-foreground">500+</strong> <span className="text-muted-foreground">Students</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-sm"><strong className="text-foreground">4.9</strong> <span className="text-muted-foreground">Rating</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm"><strong className="text-foreground">Certified</strong></span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-accent/20">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
                    alt="Woman practicing yoga pose"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=200&fit=crop"
                    alt="Morning meditation session"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
                  <img
                    src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=200&fit=crop"
                    alt="Yoga stretching"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-accent/20">
                  <img
                    src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop"
                    alt="Peaceful yoga practice"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    { icon: Clock, title: "7 Days", subtitle: "Free Trial Batch" },
    { icon: Play, title: "Live", subtitle: "Morning & Evening Sessions" },
    { icon: Users, title: "Online", subtitle: "Join From Anywhere" },
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Programs Section
function ProgramsSection() {
  const programs = [
    { icon: "💪", title: "Strength Training", description: "Build strength with yoga flows." },
    { icon: "🧘", title: "Stretching", description: "Improve flexibility & posture." },
    { icon: "✨", title: "Facial Yoga", description: "Natural glow & face toning." },
    { icon: "🌿", title: "Natural Facial", description: "Relaxation for skin & mind." },
  ]

  return (
    <section id="programs" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive yoga programs designed to transform your body and mind
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card border-border/50 hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
              <CardContent className="p-6">
                <span className="text-3xl mb-4 block">{program.icon}</span>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop"
              alt="Group yoga session"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1573590330099-d6c7355ec595?w=400&h=300&fit=crop"
              alt="Yoga silhouette at sunset"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop"
              alt="Meditation practice"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Instructors Section
function InstructorsSection() {
  const instructors = [
    {
      name: "Priya Sharma",
      title: "Lead Yoga Instructor",
      experience: "10+ years experience",
      specialization: "Hatha & Vinyasa Yoga",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Ananya Patel",
      title: "Facial Yoga Expert",
      experience: "8+ years experience",
      specialization: "Face Yoga & Wellness",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Meera Kapoor",
      title: "Meditation Coach",
      experience: "12+ years experience",
      specialization: "Mindfulness & Pranayama",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    },
  ]

  return (
    <section id="instructors" className="py-16 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Meet Your Instructors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from certified experts who are passionate about your wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="bg-card border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-semibold">{instructor.name}</h3>
                  <p className="text-sm opacity-90">{instructor.title}</p>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  {instructor.experience}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4 text-primary" />
                  {instructor.specialization}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function PricingSection() {
  const features = [
    "Strength Training",
    "Stretching",
    "Facial Yoga",
    "Natural Facial",
    "Morning & Evening Sessions",
    "Personal Guidance",
    "Recorded Sessions Access",
    "WhatsApp Support Group",
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <Card className="bg-card border-2 border-primary/20 shadow-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <h3 className="font-serif text-2xl font-bold text-foreground">Agni Batch</h3>
                <Badge className="bg-accent text-accent-foreground">33% OFF</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Starting 4th May</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2">
                <span className="font-serif text-4xl font-bold text-foreground">₹999</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <span className="text-sm text-muted-foreground line-through">₹1499</span>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
              Join Now
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sneha Reddy",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The facial yoga sessions have transformed my skin! I look 5 years younger and feel so much more confident. The instructors are amazing.",
    },
    {
      name: "Kavitha Menon",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I have been practicing yoga for 3 months now and the results are incredible. My back pain is gone and I sleep so much better.",
    },
    {
      name: "Deepa Iyer",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The live sessions make it feel like a real class. Priya ma'am gives personal attention to everyone. Best decision I made for my health!",
    },
  ]

  return (
    <section id="testimonials" className="py-16 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who transformed their lives with Prana Yoga
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {`"${testimonial.text}"`}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What time are the live sessions held?",
      answer: "We have two batches - Morning sessions at 6:00 AM and Evening sessions at 7:00 PM IST. You can choose whichever suits your schedule better.",
    },
    {
      question: "Do I need any prior yoga experience?",
      answer: "Not at all! Our programs are designed for all levels - beginners to advanced practitioners. Our instructors provide modifications for every pose.",
    },
    {
      question: "What equipment do I need?",
      answer: "Just a yoga mat and comfortable clothing. No other equipment is required. We teach asanas that can be done at home without any special props.",
    },
    {
      question: "Can I watch recorded sessions if I miss a live class?",
      answer: "Yes! All live sessions are recorded and available for 7 days. Premium members get lifetime access to all recordings.",
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 7-day free trial so you can experience our classes before committing. After enrollment, we provide a 7-day money-back guarantee if you are not satisfied.",
    },
    {
      question: "How do I join the live sessions?",
      answer: "After registration, you will receive a WhatsApp group invite and Zoom links for all sessions. Simply click the link at session time to join.",
    },
  ]

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our yoga programs
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

// Registration Form Section
function RegistrationSection() {
  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="max-w-md mx-auto">
        <Card className="bg-card border-border/50 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Register Now</h2>
              <p className="text-sm text-muted-foreground">Start your 7-day free trial today</p>
            </div>

            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// WhatsApp Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20know%20more%20about%20Prana%20Yoga"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-background" />
              </div>
              <span className="font-serif text-xl font-semibold">Prana Yoga</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Transform your life with authentic yoga practices from certified instructors.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Strength Training</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Stretching</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Facial Yoga</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Meditation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Support
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Prana Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function PranaYogaPage() {
  return (
    <main className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <InstructorsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <RegistrationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

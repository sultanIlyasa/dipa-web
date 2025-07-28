import {
  ArrowRight,
  Building2,
  Calendar,
  Package,
  CheckCircle,
  Users,
  Award,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="flex mx-5 md:flex-col md:mx-auto md:py-3 h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              {/* <Building2 className="h-6 w-6 text-orange-400" /> */}
              <Image
                src="/logo_dipa.jpg"
                width={50}
                height={50}
                alt="Professional construction and business services"
                className="w-fit"
                priority
              />
              <span className="text-xs md:text-base font-bold text-gray-900">
                PT. Dayanti Inti Persada
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#services"
                className="transition-colors hover:text-orange-400 text-gray-600"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="transition-colors hover:text-orange-400 text-gray-600"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-orange-400 text-gray-600"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-orange-400 text-gray-600"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button className="w-full md:w-auto bg-tangelo hover:bg-cinnabar text-white">
                Get Quote
              </Button>
            </div>
          </div>
          {/* Mobile Menu Button - You'll need to implement the mobile menu functionality */}
          <button title="test" className="md:hidden p-2 text-gray-600">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-24">
            <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="w-fit px-2 py-2 text-orange-400 border-orange-400"
                  >
                    Trusted by 200+ Businesses
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Building Excellence Across Every Industry
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    From construction projects to memorable events and seamless
                    procurement solutions. We deliver comprehensive services
                    that drive your business forward.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="h-12 bg-orange-400">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 bg-transparent border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                  >
                    View Portfolio
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                    Licensed & Insured
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                    24/7 Support
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mb-4 lg:mb-0">
                <Image
                  src="/logo_dipa.jpg"
                  width={600}
                  height={400}
                  alt="Professional construction and business services"
                  className="aspect-video overflow-hidden rounded-xl object-cover w-full max-w-[600px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Comprehensive Business Solutions
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Three core services designed to meet all your business needs
                  under one roof
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="relative overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building2 className="h-12 w-12 text-orange-400" />
                  <CardTitle className="text-gray-900">
                    Construction Services
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    From residential to commercial projects, we build with
                    precision and quality
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Commercial Construction
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Residential Projects
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Renovation & Remodeling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Project Management
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full text-white bg-orange-400"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-orange-400" />
                  <CardTitle>Event Organization</CardTitle>
                  <CardDescription>
                    Creating memorable experiences for corporate events and
                    special occasions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Corporate Events
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Product Launches
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Conferences & Seminars
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Full Event Management
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full text-white bg-orange-400"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Package className="h-12 w-12 text-orange-400" />
                  <CardTitle>Procurement & Trading</CardTitle>
                  <CardDescription>
                    Streamlined supply chain solutions and general trading
                    services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Supply Chain Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Import/Export Services
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Vendor Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-orange-400" />
                      Quality Assurance
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full text-white bg-orange-400"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-400/10">
                  <Users className="h-10 w-10 text-orange-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">200+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-400/10">
                  <Building2 className="h-10 w-10 text-orange-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">150+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-400/10">
                  <Award className="h-10 w-10 text-orange-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">15+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-400/10">
                  <Clock className="h-10 w-10 text-orange-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">24/7</h3>
                  <p className="text-muted-foreground">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-8 sm:py-12 md:py-24 lg:py-32 xl:py-48"
        >
          <div className="container px-4 md:px-24">
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="w-fit px-2 py-2 text-orange-400 border-orange-400"
                  >
                    About PT Dayanti Inti Persada
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Your Trusted Partner for Complete Business Solutions
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    With over 15 years of experience, we&apos;ve built our reputation
                    on delivering exceptional results across construction,
                    events, and procurement. Our integrated approach ensures
                    seamless project execution from start to finish.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      To provide comprehensive, high-quality services that
                      exceed client expectations and drive business success.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      To be the leading multi-service provider, known for
                      innovation, reliability, and exceptional customer service.
                    </p>
                  </div>
                </div>
                <Button className="w-full sm:w-fit">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo_dipa.jpg"
                  width={600}
                  height={400}
                  alt="Professional team at work"
                  className="aspect-video overflow-hidden rounded-xl object-cover w-full max-w-[600px]"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Start Your Next Project?
                </h2>
                <p className="mx-auto max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let&apos;s discuss how our comprehensive services can help your
                  business grow. Get in touch for a free consultation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="h-12 text-orange-400 bg-white">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 bg-transparent border-white text-white hover:bg-white hover:text-orange-400"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-orange-400" />
                <span className="font-bold text-white">PT Dayanti Inti Persada</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for construction, events, and procurement
                solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer transition-colors">
                  Construction
                </li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">
                  Event Organization
                </li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">
                  Procurement & Trading
                </li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">
                  Project Management
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+1 (555) 123-4567</li>
                <li>info@probuildsolutions.com</li>
                <li>123 Business Ave, City, State</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center border-t">
            <p className="text-xs text-muted-foreground">
              © 2025 PT Dayanti Inti Persada. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-xs hover:underline underline-offset-4"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

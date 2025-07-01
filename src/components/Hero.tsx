
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingAnimation from './TypingAnimation';
import FloatingParticles from './FloatingParticles';
import ParallaxElement from './ParallaxElement';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const typingTexts = [
    "Full-Stack Developer",
    "AI Enthusiast", 
    "Problem Solver",
    "Innovation Driver"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-16 overflow-hidden">
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Enhanced Animated Background Elements */}
      <ParallaxElement speed={0.3}>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </ParallaxElement>
      
      <ParallaxElement speed={0.4}>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl mt-8 opacity-70 animate-pulse"></div>
      </ParallaxElement>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Enhanced Profile Picture with Hover Effect */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 hover:scale-110 transition-transform duration-300 hover:shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img 
                src="bishal.png"
                alt="Profile" 
                className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Main Content with Staggered Animations */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold animate-fade-in">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">
              Bishal Babu Rajbanshi
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <TypingAnimation texts={typingTexts} className="gradient-text font-semibold" />
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            Turning ideas into scalable software solutions with modern technologies and innovative approaches
          </p>

          {/* Enhanced Social Links with Hover Effects */}
          <div className="flex justify-center space-x-4 pt-4 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <Button variant="outline" size="icon" className="hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
              <Github size={20} />
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
              <Linkedin size={20} />
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
              <Mail size={20} />
            </Button>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-scale-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout} 
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 group"
          >
            <ArrowDown size={24} className="group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

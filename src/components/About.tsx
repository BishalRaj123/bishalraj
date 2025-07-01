
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Book, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const highlights = [
    {
      icon: <Code size={24} />,
      title: "5+ Years Experience",
      description: "Building scalable web applications"
    },
    {
      icon: <Book size={24} />,
      title: "Computer Science Graduate",
      description: "Strong foundation in algorithms & data structures"
    },
    {
      icon: <Star size={24} />,
      title: "Problem Solver",
      description: "Passionate about creating efficient solutions"
    }
  ];

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 100, suffix: '+', label: 'Happy Clients' },
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 1000, suffix: '+', label: 'Code Commits' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div 
            className="relative"
            style={{
              animation: isVisible ? 'slide-in-right 0.8s ease-out' : 'none'
            }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop"
                alt="Working on laptop"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            className="space-y-6"
            style={{
              animation: isVisible ? 'fade-in 0.8s ease-out 0.2s both' : 'none'
            }}
          >
            <div className="prose dark:prose-invert">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience in building 
                web applications. I love turning complex problems into simple, beautiful, and 
                intuitive solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through blog posts and mentoring.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{
                    animation: isVisible ? `slide-up 0.6s ease-out ${0.4 + index * 0.1}s both` : 'none'
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary hover:scale-110 transition-transform duration-300">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="mt-8 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

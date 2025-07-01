
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2018 - 2020",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Research Assistant", "AI/ML Specialization"]
    },
    {
      degree: "Bachelor of Computer Engineering",
      institution: "University of California, Berkeley",
      year: "2014 - 2018",
      gpa: "3.6/4.0",
      achievements: ["Magna Cum Laude", "Computer Science Society President", "Hackathon Winner"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.year}</p>
                    <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <Badge key={achievementIndex} variant="secondary">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

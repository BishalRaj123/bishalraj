
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      type: "Cloud"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022",
      type: "Cloud"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      type: "Frontend"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      year: "2021",
      type: "AI/ML"
    }
  ];

  const achievements = [
    "LeetCode 1500+ problems solved",
    "Hackathon Winner - TechCrunch Disrupt 2022",
    "Open Source Contributor - 50+ repositories",
    "Tech Conference Speaker - ReactConf 2023"
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                        <Badge variant="outline" className="text-xs">
                          {cert.type}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

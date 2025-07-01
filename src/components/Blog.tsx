
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring large React applications with proper state management and component architecture.",
      date: "March 15, 2024",
      readTime: "5 min read",
      url: "#"
    },
    {
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt: "A comprehensive guide to getting started with TypeScript and how it can improve your development workflow.",
      date: "February 28, 2024",
      readTime: "8 min read",
      url: "#"
    },
    {
      title: "Optimizing Web Performance with Modern Tools",
      excerpt: "Explore various techniques and tools to improve your web application's performance and user experience.",
      date: "February 10, 2024",
      readTime: "6 min read",
      url: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights about web development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar size={16} className="mr-2" />
                  {post.date} • {post.readTime}
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{post.excerpt}</p>
                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowUpRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

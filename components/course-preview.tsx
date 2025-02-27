"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Clock, BarChart, Leaf, Users, Star } from "lucide-react";
import Link from "next/link";

export function CoursePreview() {
  const [activeTab, setActiveTab] = useState("featured");

  const courses = {
    featured: [
      {
        id: 1,
        title: "IoT for Smart Agriculture",
        description: "Learn to build sensor networks and automation systems for sustainable farming practices.",
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        level: "Beginner",
        duration: "4 weeks",
        impact: "Funds 2 trees",
        price: "₺500",
        students: 124,
        rating: 4.8,
        category: "IoT & Sensors"
      },
      {
        id: 2,
        title: "AI for Energy Efficiency",
        description: "Develop machine learning models to optimize energy consumption in buildings and industrial processes.",
        image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        level: "Advanced",
        duration: "8 weeks",
        impact: "Funds 0.5kW solar",
        price: "₺800",
        students: 87,
        rating: 4.9,
        category: "AI & Machine Learning"
      },
      {
        id: 3,
        title: "Blockchain for Carbon Credits",
        description: "Build transparent carbon credit tracking systems using distributed ledger technology.",
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        level: "Intermediate",
        duration: "6 weeks",
        impact: "Offsets 1 ton CO₂",
        price: "₺650",
        students: 56,
        rating: 4.7,
        category: "Blockchain"
      }
    ],
    popular: [
      {
        id: 4,
        title: "Data Analysis for Climate Science",
        description: "Learn to analyze and visualize climate data to identify patterns and predict environmental changes.",
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        level: "Intermediate",
        duration: "5 weeks",
        impact: "Funds water conservation",
        price: "₺600",
        students: 203,
        rating: 4.9,
        category: "Data Analysis"
      },
      {
        id: 5,
        title: "Robotics for Waste Management",
        description: "Design and program robots for efficient waste sorting and recycling operations.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        level: "Advanced",
        duration: "7 weeks",
        impact: "Recycles 100kg waste",
        price: "₺750",
        students: 142,
        rating: 4.6,
        category: "Robotics"
      },
      {
        id: 6,
        title: "Sustainable Web Development",
        description: "Build energy-efficient websites and applications with optimized code and green hosting.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        level: "Beginner",
        duration: "4 weeks",
        impact: "Reduces digital carbon",
        price: "₺450",
        students: 178,
        rating: 4.8,
        category: "Web Development"
      }
    ],
    new: [
      {
        id: 7,
        title: "Drone Technology for Conservation",
        description: "Use drones and image processing to monitor wildlife and protect natural habitats.",
        image: "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        level: "Intermediate",
        duration: "6 weeks",
        impact: "Protects 1 hectare",
        price: "₺700",
        students: 42,
        rating: 4.7,
        category: "Robotics"
      },
      {
        id: 8,
        title: "Smart Water Management Systems",
        description: "Develop IoT solutions for monitoring and optimizing water usage in agriculture and urban settings.",
        image: "https://images.unsplash.com/photo-1581093458791-9d8e8d1b1e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        level: "Beginner",
        duration: "5 weeks",
        impact: "Saves 10,000L water",
        price: "₺550",
        students: 38,
        rating: 4.9,
        category: "IoT & Sensors"
      },
      {
        id: 9,
        title: "Circular Economy App Development",
        description: "Create mobile applications that facilitate sharing, repairing, and recycling of consumer goods.",
        image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        level: "Intermediate",
        duration: "7 weeks",
        impact: "Reduces waste by 50kg",
        price: "₺600",
        students: 29,
        rating: 4.8,
        category: "Mobile Development"
      }
    ]
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark dark:text-white">
            Featured Courses
          </h2>
          <p className="mt-4 text-lg text-charcoal dark:text-gray-300 max-w-2xl mx-auto">
            Learn cutting-edge technology skills while contributing to environmental sustainability.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-mint-light/30 dark:bg-gray-800">
              <TabsTrigger value="featured" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Featured
              </TabsTrigger>
              <TabsTrigger value="popular" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Most Popular
              </TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                New Courses
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(courses).map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses[category as keyof typeof courses].map((course) => (
                  <Card key={course.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-mint-light">
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                        style={{ backgroundImage: `url(${course.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-mint-light text-forest-dark font-medium">
                          {course.category}
                        </Badge>
                        <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-none">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-heading line-clamp-2">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">{course.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1 text-primary" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1 text-primary" />
                          {course.students} students
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {course.rating}/5.0
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Leaf className="h-4 w-4 mr-1 text-green-500" />
                          {course.impact}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <BarChart className="h-5 w-5 mr-2 text-primary" />
                          <div className="text-sm">
                            <span className="text-muted-foreground">Impact:</span>
                            <div className="h-2 w-24 bg-gray-200 rounded-full mt-1">
                              <div className="h-2 bg-primary rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                            </div>
                          </div>
                        </div>
                        <span className="text-xl font-bold text-forest-dark dark:text-white">{course.price}</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button className="w-full">
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/courses">
                    View All {activeTab === "featured" ? "Featured" : activeTab === "popular" ? "Popular" : "New"} Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
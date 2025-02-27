import { 
  BookOpen, 
  BarChart3, 
  Users, 
  Leaf, 
  Cpu, 
  Recycle 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Project-Based Learning",
      description: "Learn by building real-world sustainability projects that solve actual environmental challenges."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Green Endowment Tracker",
      description: "See exactly how your tuition contributes to environmental projects with transparent blockchain tracking."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Industry Mentors",
      description: "Connect with professionals from leading tech and sustainability companies for guidance and networking."
    }
  ];

  const categories = [
    {
      icon: <Leaf className="h-10 w-10 text-white" />,
      title: "Sustainability Focus",
      items: ["Energy", "Waste", "Agriculture", "Water", "Conservation"],
      bgColor: "bg-forest-dark"
    },
    {
      icon: <Cpu className="h-10 w-10 text-forest-dark" />,
      title: "Technology Skills",
      items: ["AI & Machine Learning", "IoT & Sensors", "Robotics", "Data Analysis", "Blockchain"],
      bgColor: "bg-mint-light"
    },
    {
      icon: <Recycle className="h-10 w-10 text-white" />,
      title: "Impact Areas",
      items: ["Carbon Reduction", "Renewable Energy", "Circular Economy", "Biodiversity", "Climate Resilience"],
      bgColor: "bg-primary"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark dark:text-white">
            Why Choose GreenRoot Academy
          </h2>
          <p className="mt-4 text-lg text-charcoal dark:text-gray-300 max-w-2xl mx-auto">
            Our unique approach combines cutting-edge technology education with measurable environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-mint-light hover:border-primary transition-colors duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark dark:text-white text-center mb-16">
            What You'll Learn
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className={`${category.bgColor} rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className={`text-xl font-bold ml-3 ${index === 1 ? 'text-forest-dark' : 'text-white'}`}>
                      {category.title}
                    </h3>
                  </div>
                  <ul className={`space-y-2 ${index === 1 ? 'text-charcoal' : 'text-white'}`}>
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${index === 1 ? 'bg-forest-dark' : 'bg-white'}`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
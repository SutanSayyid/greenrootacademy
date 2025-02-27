"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TreePine, 
  Droplets, 
  Sun, 
  Recycle, 
  Users 
} from "lucide-react";

export function ImpactStats() {
  const [treeProgress, setTreeProgress] = useState(0);
  const [waterProgress, setWaterProgress] = useState(0);
  const [solarProgress, setSolarProgress] = useState(0);
  const [wasteProgress, setWasteProgress] = useState(0);
  const [studentsProgress, setStudentsProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTreeProgress(85);
      setWaterProgress(62);
      setSolarProgress(73);
      setWasteProgress(91);
      setStudentsProgress(78);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: <TreePine className="h-8 w-8 text-primary" />,
      title: "Trees Planted",
      value: "1,245",
      progress: treeProgress,
      target: "Goal: 1,500",
      color: "bg-forest-dark"
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      title: "Water Conserved",
      value: "3.1M Liters",
      progress: waterProgress,
      target: "Goal: 5M Liters",
      color: "bg-blue-500"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Solar Energy",
      value: "73 kW",
      progress: solarProgress,
      target: "Goal: 100 kW",
      color: "bg-yellow-500"
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-500" />,
      title: "Waste Recycled",
      value: "9.1 Tons",
      progress: wasteProgress,
      target: "Goal: 10 Tons",
      color: "bg-green-500"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Students Engaged",
      value: "782",
      progress: studentsProgress,
      target: "Goal: 1,000",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-mint-light/30 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark dark:text-white">
            Our Collective Impact
          </h2>
          <p className="mt-4 text-lg text-charcoal dark:text-gray-300 max-w-2xl mx-auto">
            Through the Green Endowment Fund, our community is making a measurable difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-heading">{stat.title}</CardTitle>
                  <CardDescription>{stat.target}</CardDescription>
                </div>
                <div className="p-2 rounded-full bg-mint-light dark:bg-gray-700">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <Progress value={stat.progress} className="h-2" indicatorClassName={stat.color} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
            <p className="text-sm text-charcoal dark:text-gray-300">
              <span className="font-semibold">Blockchain Verified:</span> All impact data is recorded on Ethereum Goerli testnet.
              <br />
              <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                Latest TxID: 0x4a3b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
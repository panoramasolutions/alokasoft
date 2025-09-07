import { ChevronRightIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import ai from '../../../../assets/AI.png';
import deep from '../../../../assets/deep.png';
import future from '../../../../assets/future.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

  const solutionCards = [
    {
      icon:ai,
      title: 'Secure by Design',
      description:
        'Cybersecurity is at the core of everything we build. With zero-trust frameworks, continuous monitoring, and compliance-ready architectures, your systems stay protected.',
    },
    {
      icon: deep,
      title: 'Smart Cloud Engineering',
      description:
        "We offer an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more time analyzing.",
    },
    {
      icon: future,
      title: 'Data-Driven Decisions',
      description:
        "Whether you're a startup or an enterprise, AlokaSoft scales with you. Experience robust analytics solutions that adapt to your growth.",
    },

    {
      icon:future,
      title: 'Automation & Integration',
      description:
        'Develop robust, scalable, and secure backend systems, automate business tasks, and build APIs using industry-best Python practices',
    },

   
  ];

    const features = [
    {
      title: "Discovery & Understanding",
      description:
        "We begin by listening. Our team works closely with you to understand your business objectives, challenges, existing systems, and expectations. This forms the foundation for crafting tailored solutions.",
    },
    {
      title: "Strategy & Roadmap",
      description:
        "Based on our findings, we design a detailed project plan and technology roadmap. This includes timelines, milestones, resource allocation, and a clear cost structure, ensuring transparency from day one.",
    },
    {
      title: "Design & Development",
      description:
        "Our experts create intuitive designs and robust system architectures. Development follows agile methodologies, allowing us to adapt quickly to feedback and evolving needs.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "We rigorously test every solution for performance, security, and scalability. Our QA process ensures that the final product is stable, secure, and meets industry best practices.",
    },
  ];

export const KeyFeatureMobile = ({keyFeaturesRef}): JSX.Element => {
  return (
   <section className="relative w-full z-[3]"  ref={keyFeaturesRef}>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side - How we work */}
        <div className="w-full md:w-1/2 bg-[#7dc2a7ff] p-8 md:p-16 flex flex-col justify-center">
          <h2 className="font-bold text-modmathblack text-4xl tracking-[-0.14px] leading-[46.1px] mb-8 text-[16px]">
        How we work
          </h2>

          <p className="text-modmathblack  tracking-[-0.20px] leading-7 font-normal mb-12 max-w-[530px] text-[16px]">
       At AlokaSoft, we believe in a structured yet flexible approach to delivering technology solutions that align with your business goals. Our process ensures clarity, efficiency, and measurable results.
          </p>

          <Button className="w-32 h-10     px-5 py-3 bg-[#12A16B] rounded-xl text-white">
        <span className="ml-2 text-[16px]" >Key Features</span>
        <ChevronRightIcon className="w-[11px] h-[11px] ml-2 " />
          </Button>
        </div>

        {/* Right side - Features */}
        <div className="w-full md:w-1/2 bg-[#F5F7FA] p-8 md:p-16 flex flex-col justify-center">
          <h3 className="font-bold text-modmathblack text-2xl mb-8 text-[16px]">
        Features
          </h3>

          <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {features.map((feature, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-t border-b py-4 text-[16px]"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="text-left font-medium text-modmathblack text-[16px] leading-[33.6px]">
            {feature.title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-modmathblack text-[16px] tracking-[-0.20px] leading-7 font-normal pt-2">
            {feature.description}
              </div>
            </AccordionContent>
          </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
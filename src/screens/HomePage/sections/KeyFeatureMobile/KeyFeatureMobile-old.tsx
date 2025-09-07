import { ChevronRightIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import ai from '../../../../assets/AI.png';
import deep from '../../../../assets/deep.png';
import future from '../../../../assets/future.png';


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

export const KeyFeatureMobile = ({keyFeaturesRef}): JSX.Element => {
  return (
   <section className="flex flex-col items-center gap-[60px] pt-12 pb-0 px-5 sm:px-8 w-full bg-white" ref={keyFeaturesRef}>
      <div className="flex flex-col max-w-[1204px] items-center gap-[60px] w-full">
        {/* Header */}
        <header className="flex flex-col max-w-[800px] items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <Badge
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1"
              variant="outline"
            >
              <div className="relative w-5 h-5">
                {/* Desktop/Tablet icon */}
                <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px sm:block hidden"
                  alt="Vector"
                  src={ai}
                />
                {/* Mobile icon */}
                <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px sm:hidden block"
                  alt="Vector"
                  src={ai}
                />
              </div>
              <span className="font-body-base-medium text-[#4b5162]">
                Key Features and Capabilities
              </span>
            </Badge>

            <h2 className="font-heading-desktop-h2-bold text-[#1c1f25] text-center w-full">
             What sets our solutions apart—and pushes your business forward.
            </h2>

          
          </div>
        </header>

        {/* Cards */}
        <div className="w-full">
          {/* Desktop/Tablet: flex-wrap, Mobile: grid */}
          <div className="hidden sm:flex flex-wrap justify-center gap-8 w-full pb-24 relative">
            {solutionCards.map((card, index) => (
              <Card
                key={`solution-card-${index}`}
                className="flex-1 min-w-[292px] border border-solid border-[#b6bbcd] rounded-xl"
              >
                <CardContent className="flex flex-col items-center gap-4 p-8">
                  <img
                    className="w-[65px] h-[65px] mt-[-5.09px] ml-[-30.55px]"
                    alt={`${card.title} illustration`}
                    src={card.icon}
                  />
                  <div className="flex flex-col h-[110px] items-center gap-1 w-full">
                    <h3 className="font-heading-desktop-h5-bold text-[#1c1f25] h-7">
                      {card.title}
                    </h3>
                    <p className="opacity-80 font-body-base-regular text-[#4b5162]">
                      {card.description}
                    </p>
                  </div>
                  
                </CardContent>
              </Card>
            ))}
            
          </div>
          {/* Mobile: grid */}
          <div className="grid sm:hidden grid-cols-1 gap-8 w-full pb-12">
            {solutionCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col min-h-[300px] border-[#b6bbcd] rounded-xl bg-white"
              >
                <CardContent className="flex flex-col gap-4 p-4 items-center">
                  <img
                    className="w-[65px] h-[65px] mt-[-5.09px] ml-[-30.55px]"
                    alt="Component"
                    src={card.icon}
                  />
                  <div className="flex flex-col h-[110px] gap-1 items-center">
                    <h5 className="font-heading-desktop-h5-bold text-[#1c1f25] items-center">
                      {card.title}
                    </h5>
                    <p className="opacity-80 font-body-base-regular text-[#4b5162] text-center">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
             
              </Card>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};
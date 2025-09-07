import { ChevronRightIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import deep from '../../../../assets/deep.png';
import future from '../../../../assets/future.png';
import one from '../../../../assets/1.png';
import two from '../../../../assets/2.png';
import three from '../../../../assets/3.png';
import ai from '../../../../assets/AI.png';

  const solutionCards = [
      {
        icon: one,
        title: 'AI/ML',
        description:
          'Deploy cutting-edge AI/ML solutions to automate decision-making, detect patterns, and enhance user experience with predictive insights',
      },
      {
        icon: two,
        title: 'Cloud Strategy & Consulting',
        description:
          'From total visioning to tactical cloud roadmaps, cost modeling, and vendor-neutral governance across AWS, Azure & GCP.',
      },
      {
        icon: three,
        title: 'Data Engineering',
        description:
          'We provide support for any models ranging from data analysis,data engineering to even data science.',
      },
      {
        icon: three,
        title: 'Full-Stack Development',
        description:
          'Build robust end to end solutions in any full stack frameworks like Java, Dotnet, MEAN, MERN etc.',
      },
  
      {
        icon: one,
        title: 'Python Expert',
        description:
          'Develop robust, scalable, and secure backend systems, automate business tasks, and build APIs using industry-best Python practices',
      },
  
      {
        icon: two,
        title: 'Business Intelligence(Power BI)',
        description:
          'Leverage Power BI dashboards and reports to gain visual insights, monitor KPIs, and drive smarter business strategies',
      },
  
      {
        icon: two,
        title: 'Automation & DevOps',
        description:
          'Streamline delivery pipelines, cut errors, and embrace agility with full-stack CI/CD and IaC.',
      },
  
      {
        icon: one,
        title: 'Business Development',
        description:
          "Receive automated insights and recommendations tailored to your business needs. Let AlokaSoft's AI guide your strategies.",
      },
  
      {
        icon: three,
        title: 'Networking & Infrastructure',
        description:
          'Architect resilient networks—wired, wireless, hybrid—designed for performance and security.',
      },
    ];
  const featureCards = [
    {
      icon: deep,
      title: 'End-to-End Solutions',
      description:
        'We deliver end-to-end IT solutions customized to your business needs — covering everything from strategy and architecture to development, deployment, and ongoing support. Our key expertise lies in Cloud Technologies, DevSecOps, and building scalable digital infrastructure.',
    },
    {
      icon: future,
      title: 'Staffing',
      description:'Scale smarter with our top-tier tech talent. From rapid project boosts to long-term expertise, we connect you with skilled professionals across all major technologies — when and where you need them',
    },
   
  ];

export const SolutionOverviewSection = ({ourServicesRef}): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] py-12 px-5 sm:px-8 w-full bg-white" ref={ourServicesRef}
       style={{
      paddingTop: window.innerWidth < 640 ? "0rem" : "3rem",
     
    }}
    >
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
                What we do
              </span>
            </Badge>

            <h2 className="font-heading-desktop-h2-bold text-[#1c1f25] text-center w-full font-bold">
              Our Services
            </h2>

          
          </div>
        </header>

        {/* Cards */}
           <div className="flex flex-col justify-center w-full">
                  <div className="flex flex-col flex-wrap items-start justify-center gap-4 sm:gap-4 gap-[12px] w-full">
                    {featureCards.map((card, index) => (
                      <Card
                        key={index}
                        className="flex flex-col  items-start justify-center flex-1 bg-white rounded-xl z-[2]"
                      >
                        <CardContent className="flex flex-col gap-2 p-5 sm:p-5 px-5 py-4">
                          <div className="flex items-start gap-3 w-full">
                            <div className="inline-flex items-start gap-2">
                              <div className="relative w-6 h-6">
                                {/* Desktop/Tablet icon */}
                                <img
                                  className="absolute w-5 h-5 top-0.5 left-0.5 sm:block hidden"
                                  alt="Feature icon"
                                  src={card.icon}
                                />
                                {/* Mobile icon */}
                                <img
                                  className="absolute w-5 h-5 top-0.5 left-0.5 sm:hidden block"
                                  alt="Feature icon"
                                  src={card.icon}
                                />
                              </div>
                            </div>
                            <h3 className="flex-1 font-body-base-semibold font-[number:var(--body-base-semibold-font-weight)] text-[#1c1f25] text-[length:var(--body-base-semibold-font-size)] tracking-[var(--body-base-semibold-letter-spacing)] leading-[var(--body-base-semibold-line-height)] [font-style:var(--body-base-semibold-font-style)]">
                              {card.title}
                            </h3>
                          </div>
                          <p className="opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                            {card.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
        <div className="w-full">
          {/* Desktop/Tablet: flex-wrap, Mobile: grid */}
          <div className="hidden sm:flex flex-wrap justify-center gap-8 w-full pb-20 relative">
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
          <div className="grid sm:hidden grid-cols-1 gap-8 w-full pb-8">
            {solutionCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col min-h-[280px] border-[#b6bbcd] rounded-xl "
              >
                <CardContent className="flex flex-col gap-4 p-8 items-center">
                  <img
                    className="w-[65px] h-[65px] mt-[-5.09px] ml-[-30.55px]"
                    alt="Component"
                    src={card.icon}
                  />
                  <div className="flex flex-col h-[110px] gap-1 items-center">
                    <h5 className="font-heading-desktop-h5-bold text-white items-center ">
                      {card.title}
                    </h5>
                    <p className="opacity-80 font-body-base-regular text-white text-center">
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
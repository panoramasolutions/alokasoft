import React, { useState } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

import acc from '../../../../assets/accenture-logo.png';
import be from '../../../../assets/wellsfargo.png';
import dail from '../../../../assets/TrueBlue_Logo.png';
import dtcc from '../../../../assets/TEP-Logo.svg';
import gat from '../../../../assets/tenesse.png';
import ge from '../../../../assets/ohio.png';
import ver from '../../../../assets/Massachusetts.png';
import visa from '../../../../assets/at&t.png';
import wu from '../../../../assets/aig.png';
import bigImage from '../../../../assets/image.png';
import ai from '../../../../assets/AI.png';
import deep from '../../../../assets/deepwhite.png';
import future from '../../../../assets/futurewhite.png';
import tr from '../../../../assets/true.png';
import big from '../../../../assets/big.png';
import mas from '../../../../assets/mas.png';
import l from '../../../../assets/l.png';
import p from '../../../../assets/p.png';
import m from '../../../../assets/m.png';
import secure from '../../../../assets/secure.png';
import smart from '../../../../assets/smart.png';
import data from '../../../../assets/data.png';
import auto from '../../../../assets/auto.png';
import one from '../../../../assets/1.png';
import two from '../../../../assets/2.png';
import three from '../../../../assets/3.png';



import { ChevronRightIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";


export const MainContentSection = ({
  keyFeaturesRef,
  aboutusRef,
  ourServicesRef,
  testimonialRef,
  faqRef,
  handleNavClick,
}: any) => {
  const featureCards = [
    {
      icon: deep,
      title: 'Deep Industry Insight',
      description:
        'We blend domain expertise with cutting-edge tech—AI, ML, and cybersecurity.',
    },
    {
      icon: tr,
      title: 'True Client Partnership',
      description:
        'We work as an extension of your team to solve real-world business challenges.',
    },
    {
      icon: future,
      title: 'Future-Ready Approach',
      description:
        '24/7 monitoring, predictive maintenance, and roadmaps designed for growth.',
    },
  ];

  const featureCard1s = [
    {
      icon: deep,
      title: 'End-to-End Solutions',
      description:
        'We deliver end-to-end IT solutions customized to your business needs — covering everything from strategy and architecture to development, deployment, and ongoing support. Our key expertise lies in Cloud Technologies, DevSecOps, and building scalable digital infrastructure.',
    },
    {
      icon: future,
      title: 'Staffing',
      description:
        'Scale smarter with our top-tier tech talent. From rapid project boosts to long-term expertise, we connect you with skilled professionals across all major technologies — when and where you need them',
    },
  ];

  // Data for the service cards
  const serviceCards = [
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
        "Receive automated insights and recommendations tailored to your business needs. Let Alokasoftware's AI guide your strategies.",
    },

    {
      icon: three,
      title: 'Networking & Infrastructure',
      description:
        'Architect resilient networks—wired, wireless, hybrid—designed for performance and security.',
    },
  ];

  // Data for the "How We Work" steps


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

  const [showAllServices, setShowAllServices] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // How many to show initially
  const initialServiceCount = 9;

  return (
    <div className='flex flex-col items-start w-full relative z-[3]'>
      {/* Hero Section */}
      <section className='flex flex-col items-center pt-12 pb-[34px] px-8 w-full bg-white'>
        <div className='flex flex-row max-w-[1204px] items-start gap-[60px] w-full'>
          {/* Left Side: id=1 */}
          <div
            id="1"
            className='flex flex-col max-w-[600px] items-start gap-2 w-full flex-shrink-0'
          >
            <div className='flex flex-col items-start gap-5 w-full'>
              <div className='flex items-center gap-2  py-2  bg-white'>
                
                <span className='font-body-base-medium text-[#12A16B] text-[20px] font-bold'>
                  Smarter IT. Stronger Business.
                </span>
              </div>

              <h1 className='text-[42px] font-bold font-inter font-heading-desktop-h1-bold text-[#343844] text-left'>
                Empowering Digital Acceleration with Smarter Cloud, Data &amp;
                Automation Solutions
              </h1>

              <div className='flex items-start px-0 py-0 w-full gap-2'>
                <p className='flex-1 opacity-80 font-body-base-regular text-[#343844] text-left'>
                  From strategy to execution, we help businesses unlock agility,
                  scale, and intelligence—securely and seamlessly.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <Button
                className='px-5 py-3 bg-[#12A16B] rounded-xl text-white'
                onClick={() => handleNavClick('Our Services')}
              >
                Explore Our Services
              </Button>
              {/* Popup button code commented out */}
            </div>
          </div>

          {/* Right Side: id=2 */}
          <div
            id="2"
            className='relative w-full h-[450px] bg-[#12A16B ] rounded-3xl overflow-hidden border border-solid border-[#f5f6f9] flex-1'
          >
            <div className='absolute w-full h-[450px] top-0 left-0 bg-[#6099f7] overflow-hidden'>
           
              <img src={bigImage} className='absolute w-full h-full object-cover' alt='Background' />
            </div>
          </div>
        </div>
      </section>

    
 

      {/* About Us Section */}
      <section
        ref={aboutusRef}
        className='pt-[75px] pb-28 px-8 w-full flex flex-col items-center gap-[60px] bg-white  w-full'
      >
        <div className='flex flex-col items-center gap-[60px] w-full max-w-[1204px]'>
          <div className='flex flex-col max-w-[520px] items-center gap-8 w-full'>
            <div className='flex flex-col items-center gap-4 w-full'>
              <Badge className='flex items-center gap-2 px-3 py-2 rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1 bg-white'>
                <div className='relative w-5 h-5'>
                   <img
                    className='absolute w-[18px] h-[17px] top-0.5 left-px'
                    alt='Vector'
                    src={ai}
                  />
                </div>
                <span className='font-body-base-medium text-[#343844]'>
                  About Us
                </span>
              </Badge>

              <div className='flex items-center gap-2 w-full'>
                <h1 className='text-[39px] font-bold font-inter font-heading-desktop-h1-bold text-[#343844] text-center'>
                  Your Strategic Tech Partner
                </h1>
              </div>

              <div className='flex max-w-[820px] items-center px-5 py-0 mx-[-150px]'>
                <p className='flex-1 opacity-80 font-body-base-regular text-[#343844] text-center'>
                  At AlokaSoft, we blend deep technical expertise with
                  forward-looking vision to help businesses thrive in the
                  digital era. With a rich history in delivering AI-driven,
                  cloud-first, and data-centric platforms, we specialize in
                  bespoke solutions that are robust, scalable, and secure.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center gap-10 w-full'>
            <div className='flex flex-wrap items-start justify-center gap-6 w-full'>
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className='flex-1 min-w-[360px] border border-solid border-[#12A16B]  bg-white'
                >
                  <CardContent className='flex flex-col items-start gap-2 px-5 py-4'>
                    <div className='flex items-start gap-3 w-full'>
                      <div className='flex items-start gap-2'>
                        <div className='relative w-6 h-6'>
                          <img
                            className='absolute w-5 h-5 top-0.5 left-0.5'
                            alt='Vector'
                            src={card.icon}
                          />
                        </div>
                      </div>
                      <h3
                        className='flex-1 font-body-base-semibold text-[#343844] font-semibold'
                        style={{ fontWeight: 600 }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p className='opacity-80 font-body-base-regular text-[#343844]'>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

    
          </div>
        </div>
      </section>
  {/* Clients Section */}
     <section className='flex flex-col items-center pt-10 pb-[60px] px-8 w-full bg-white'>
        <div className='flex flex-col items-center gap-5 w-full max-w-[1204px]'>
          <p className=' font-body-base-regular text-[#343844] text-center text-[39px] font-bold  font-inter font-heading-desktop-h1-bold text-[#343844] ' >
          Clientele
          </p>

           <div className='grid grid-cols-4 gap-6 w-full justify-items-center'>
            <img
              className=''
              alt='Logo'
              src={wu}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={visa}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={ver}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={ge}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={gat}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={dtcc}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={dail}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={be}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
             
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section
        ref={ourServicesRef}
        className='flex flex-col items-center gap-[60px] pt-12 pb-28 px-8 w-full bg-[#12A16B]'
      >
        <div className='flex flex-col  gap-[60px] w-full max-w-[1204px]'>
          <div className='max-w-[800px] w-full flex flex-col items-center gap-8'>
            <div className='flex flex-col  gap-4 w-full'>
             

              <div className='flex items-left gap-2 w-full'>
                <h2 className='flex-1 font-heading-desktop-h2-bold text-white text-left text-[39px] font-bold font-inter'>
                  Our Services
                </h2>
              </div>
            </div>
          </div>
 <div className='flex flex-col justify-center gap-10 w-full'>
            <div className='flex flex-wrap flex-col items-start justify-center gap-6 w-full'>
              {featureCard1s.map((card, index) => (
                <Card
                  key={index}
                  className='flex-1 min-w-[360px] min-h-[150px] border border-solid border-[#12A16B] rounded-xl'
                >
                  <CardContent className='flex flex-col items-start gap-2 px-5 py-4'>
                    <div className='flex items-start gap-3 w-full'>
                      <div className='flex items-start gap-2'>
                        <div className='relative w-6 h-6'>
                          <img
                            className='absolute w-5 h-5 top-0.5 left-0.5'
                            alt='Vector'
                            src={card.icon}
                          />
                        </div>
                      </div>
                      <h3
                        className='flex-1 font-body-base-semibold text-[#ffffff] font-semibold'
                        style={{ fontWeight: 600 }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p className='opacity-80 font-body-base-regular text-[#ffffff]'>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className='relative flex flex-wrap max-w-[1204px] items-start justify-center gap-8 pb-20 w-full'>
            <div className='flex flex-wrap items-start justify-center gap-8 flex-1'>
              {(showAllServices
                ? serviceCards
                : serviceCards.slice(0, initialServiceCount)
              ).map((service, index) => (
                <Card
                  key={index}
                  className={`flex-1 min-w-[292px]  rounded-xl border border-solid ${
                    service.highlighted
                      ? 'border-[#12A16B ]'
                      : 'border-[#b6bbcd]'
                  }`}
                >
                  <CardContent className='flex flex-col items-start justify-center gap-4 p-8'>
                    <img
                      className='w-[131.09px] h-[131.09px] mt-[-5.09px] ml-[-30.55px]'
                      alt='Component'
                      src={service.icon}
                    />
                    <div className='flex flex-col h-[110px] items-start justify-center gap-1 w-full'>
                      <h3 className='h-7 font-heading-desktop-h5-bold text-[#e7f4ff] whitespace-nowrap font-bold'>
                        {service.title}
                      </h3>
                      <p className=' font-body-base-regular text-[#e7f4ff]'>
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Button and image always at the bottom after all cards */}
          
        </div>
      </section>

      {/* Key Features Section */}
  <section className="relative w-full z-[3]"  ref={keyFeaturesRef}>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side - How we work */}
        <div className="w-full md:w-1/2 bg-[#7dc2a7ff] p-8 md:p-16 flex flex-col justify-center">
          <h2 className="font-bold text-modmathblack text-4xl tracking-[-0.14px] leading-[46.1px] mb-8">
        How we work
          </h2>

          <p className="text-modmathblack text-xl tracking-[-0.20px] leading-7 font-normal mb-12 max-w-[530px]">
       At AlokaSoft, we believe in a structured yet flexible approach to delivering technology solutions that align with your business goals. Our process ensures clarity, efficiency, and measurable results.
          </p>

          <Button className="w-32 h-10     px-5 py-3 bg-[#12A16B] rounded-xl text-white">
        <span className="ml-2  " >Key Features</span>
        <ChevronRightIcon className="w-[11px] h-[11px] ml-2 " />
          </Button>
        </div>

        {/* Right side - Features */}
        <div className="w-full md:w-1/2 bg-[#F5F7FA] p-8 md:p-16 flex flex-col justify-center">
          <h3 className="font-bold text-modmathblack text-2xl mb-8">
        Features
          </h3>

          <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {features.map((feature, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-t border-b py-4"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="text-left font-medium text-modmathblack text-2xl leading-[33.6px]">
            {feature.title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-modmathblack text-xl tracking-[-0.20px] leading-7 font-normal pt-2">
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

      {/* How We Work Section */}
   
    </div>
  );
};

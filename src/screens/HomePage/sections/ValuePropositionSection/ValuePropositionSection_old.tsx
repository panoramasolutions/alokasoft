import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import deep from '../../../../assets/deep.png';
import future from '../../../../assets/future.png';
import tr from '../../../../assets/true.png';
import ai from '../../../../assets/AI.png';

export const ValuePropositionSection = ({aboutusRef}): JSX.Element => {
 

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
  return (
    <section ref={aboutusRef} className="flex flex-col items-center gap-[60px] pt-12 pb-12 px-8 sm:pt-32 sm:pb-12 sm:px-8 px-5 py-[45px] relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-[1204px] items-center gap-[60px] relative w-full flex-[0_0_auto]">
        {/* Header section */}
        <div className="max-w-[520px] items-center gap-8 w-full flex flex-col relative">
          <div className="flex flex-col items-center gap-4 self-stretch w-full relative">
            <Badge
              variant="outline"
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1"
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
              <span className="font-body-base-medium font-[number:var(--body-base-medium-font-weight)] text-[#4b5162] text-[length:var(--body-base-medium-font-size)] tracking-[var(--body-base-medium-letter-spacing)] leading-[var(--body-base-medium-line-height)] [font-style:var(--body-base-medium-font-style)]">
               About us
              </span>
            </Badge>

            <h2 className="
              w-full text-center
              font-heading-desktop-h2-bold font-[number:var(--heading-desktop-h2-bold-font-weight)] text-[#1c1f25] text-[length:var(--heading-desktop-h2-bold-font-size)] tracking-[var(--heading-desktop-h2-bold-letter-spacing)] leading-[var(--heading-desktop-h2-bold-line-height)] [font-style:var(--heading-desktop-h2-bold-font-style)]
              sm:font-heading-desktop-h2-bold sm:text-[length:var(--heading-desktop-h2-bold-font-size)] sm:leading-[var(--heading-desktop-h2-bold-line-height)]
              font-heading-mobile-h2-bold text-[length:var(--heading-mobile-h2-bold-font-size)] leading-[var(--heading-mobile-h2-bold-line-height)] sm:font-heading-desktop-h2-bold sm:text-[length:var(--heading-desktop-h2-bold-font-size)] sm:leading-[var(--heading-desktop-h2-bold-line-height)]
            ">
             Your Strategic Tech Partner
            </h2>

            <p className="max-w-[820px] w-full opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] text-center tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)] px-5">
             At AlokaSoft, we blend deep technical expertise with forward-looking vision to help businesses thrive in the digital era. With a rich history in delivering AI-driven, cloud-first, and data-centric platforms, we specialize in bespoke solutions that are robust, scalable, and secure.
            </p>
          </div>

          {/* CTA buttons */}
       
        </div>

        {/* Feature cards section */}
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-4 gap-[12px] w-full">
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
      </div>
    </section>
  );
};
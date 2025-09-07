import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import StarSvg from "../../../../svgcomponent/StarSvg";

// FAQ data object
const faqItems = [
  {
    question:
      "What services do you offer?",
    answer:
      "We offer end-to-end IT services including software development, cloud migration, AI/ML solutions, business intelligence (Power BI), data analytics, automation, secured backup systems, and technical consulting.",
    defaultOpen: true,
  },
  {
    question: "What industries do you work with?",
    answer: "We serve clients across multiple industries such as healthcare, finance, retail, logistics, education, and manufacturing. Our solutions are tailored to your domain-specific needs.",
    defaultOpen: false,
  },
  {
    question: "Do you offer custom software development?",
    answer: "Yes, we specialize in building custom software tailored to your business processes—from planning and design to development, deployment, and support.",
    defaultOpen: false,
  },
  {
    question:
      "How do you ensure data security and compliance?",
    answer: "Security is a top priority. We implement best practices in data encryption, access control, secure coding, and follow compliance standards like GDPR, HIPAA, and ISO where required",
    defaultOpen: false,
  },
  {
    question:
      "Can you help with legacy system modernization?",
    answer: "Absolutely. We help modernize outdated systems by migrating to modern tech stacks, improving performance, UI/UX, and overall maintainability.",
    defaultOpen: false,
  },
  {
    question:
      "What’s your development process like?",
    answer: "We follow agile methodology with iterative development, regular client feedback, continuous testing, and transparent progress tracking",
    defaultOpen: false,
  },
   {
    question:
      "Do you provide post-launch support and maintenance?",
    answer: "Yes. We offer ongoing support, bug fixes, upgrades, and performance monitoring to ensure your systems remain secure and up-to-date",
    defaultOpen: false,
  },
   {
    question:
      "How do we get started with your team?",
    answer: "You can contact us through our website, schedule a consultation, or email us directly. We'll set up an initial discovery session to understand your goals and propose a tailored solution",
    defaultOpen: false,
  },
   {
    question:
      "Do you work with startups and small businesses?",
    answer: "Yes! Whether you're a startup or a large enterprise, we scale our solutions and pricing to meet your needs and budget",
    defaultOpen: false,
  },
   {
    question:
      "Can I hire developers or a dedicated team from you?",
    answer: "Yes. We offer flexible engagement models including dedicated developers, project-based teams, and staff augmentation depending on your project scope.",
    defaultOpen: false,
  },
];

interface FaqSectionProps {
  faqRef?: React.RefObject<HTMLElement>;
}

export const FaqSection = ({ faqRef }: FaqSectionProps): JSX.Element => {
  return (
    <section
      ref={faqRef}
      className="
        flex flex-col items-center
        gap-[60px]
        pt-12 pb-20 px-8
        sm:pt-32 sm:pb-32 sm:px-8
        relative w-full 
        mb-[-120px]
      "
    >
      <div className="flex flex-wrap items-start gap-[48px] max-w-[1204px] w-full">
        {/* Left column - Title and description */}
        <div className=" max-w-[476px] flex-1 flex flex-col items-start gap-6 pr-10">
          <div className="flex flex-col items-start gap-4 w-full">
            <Badge
              variant="outline"
              className="
                px-3 py-2 bg-white rounded-[20px] border-[#b6bbcd] 
                shadow-shadow-to-bot-neutral-1 flex items-center gap-2
              "
            >
              <div className="relative w-5 h-5">
                <StarSvg className="absolute w-[18px] h-[17px] top-0.5 left-px" />
              </div>
              <span className="font-body-base-medium text-[#4b5162]">FAQ</span>
            </Badge>

            <h2 className="font-heading-desktop-h2-bold text-[#1c1f25] w-full">
              Frequently asked questions
            </h2>

            <p className="opacity-80 font-body-base-regular text-[#4b5162] pr-6">
              Explore our frequently asked questions to learn more about
              AlokaSoft&apos;s features, security, integration capabilities, and more
            </p>
          </div>
        </div>

        {/* Right column - FAQ accordion */}
        <div className=" flex-1 flex flex-col gap-6">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className={`border-b ${
                  index === 0
                    ? "sm:border-[#ebedf3] border-[#b6bbcd]"
                    : "border-[#ebedf3]"
                }`}
              >
                <div className="flex items-start gap-4 pr-5">
                  <div className="flex w-1 self-stretch py-1.5">
                    <div className="flex-1 self-stretch bg-[#12A16B] rounded-sm" />
                  </div>
                  <AccordionTrigger className="py-6 hover:no-underline flex-1 text-left">
                    <h3 className="font-heading-desktop-h5-bold text-[#1c1f25] text-left">
                      {item.question}
                    </h3>
                  </AccordionTrigger>
                </div>
                <AccordionContent className="pl-5 pr-5 pb-5">
                  <p className="font-body-base-regular text-[#4b5162]">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
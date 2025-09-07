import React,{useState,useEffect} from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import ava from '../../../../assets/ava.png';
// Testimonial data for 
    const testimonials = [
    {
      quote:
        "ServiceNow transformed the way our IT team manages incidents. What used to take hours is now resolved in minutes, thanks to automation and clear workflows.",
      name: "Anita Sharma",
      title: "IT Manager",
      avatarSrc: ava,
    },
    {
      quote:"With ServiceNow, our HR processes became far more transparent and efficient. Employee onboarding is smoother, and queries no longer pile up.",
      name: "Michael Rodriguez",
      title: "HR Director",
      avatarSrc: ava,
    },
    {
      quote:
        "The best part about ServiceNow is its scalability. We started small with ITSM, and today we’re using it across procurement, finance, and facilities without any hiccups.",
      name: "Priya Nair",
      title: "CIO",
      avatarSrc: ava,
    },
    {
      quote:
        "Salesforce gave us a 360° view of our customers. Our sales pipeline is now crystal clear, and forecasting has become much more accurate.",
      name: "Arjun Mehta",
      title: "Sales Director",
      avatarSrc: ava,
    },
    {
      quote:
        "The automation features in Salesforce helped us cut down manual data entry by half. Our reps can finally focus on selling instead of paperwork.",
      name: "Emily Turner",
      title: "Account Executive",
      avatarSrc: ava,
    },
    {
      quote:
        "Workday completely streamlined our payroll and benefits management. Employees are happier because everything is transparent and easy to access.",
      name: "Ritu Desai",
      title: "HR Head",
      avatarSrc: ava,
    },
    {
      quote:
        "Recruitment is no longer a headache. Workday’s applicant tracking system made our hiring process faster and far more candidate-friendly.",
      name: "Daniel White",
      title: "Talent Acquisition Lead",
      avatarSrc: ava,
    },
    {
      quote:
        "Financial forecasting is complex, but AlokaSoft has simplified it for us. Its predictive analytics are second to none.",
      name: "Ethan West",
      title: "Chief Financial Officer",
      avatarSrc: ava,
    },
    {
      quote:
        "The seamless integrations and customizable dashboards make AlokaSoft an indispensable tool for our business.",
      name: "Riley Dawson",
      title: "CTO",
      avatarSrc: ava,
    },
  ];
interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

 const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
interface TestimonialSectionProps {
  testimonialRef?: React.RefObject<HTMLElement>;
}

export const TestimonialCarouselSection = ({ testimonialRef }: TestimonialSectionProps): JSX.Element => {
  const { width } = useWindowSize();
  const isDesktop = width ? width >= 1200 : false;

  return (
    <section 
      ref={testimonialRef}
      className={`
        flex flex-col items-center gap-12 py-12 px-8 w-full bg-white
        ${isDesktop ? 'shadow-md relative z-[2]' : ''}
      `}
    >
      <div className="flex flex-col max-w-[1204px] gap-12 w-full items-center">
        <header className="flex flex-col max-w-[800px] items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className={`
              w-full text-center font-heading-desktop-h2-bold
              ${isDesktop ? 'text-[39px] text-[#343844] font-bold' : 'text-[#1c1f25] font-bold'}
            `}>
             Client Success Stories
            </h2>
            <p className={`
              max-w-[820px] w-full text-center opacity-80 font-body-base-regular
              ${isDesktop ? 'text-[#343844] px-5' : 'text-[#4b5162]'}
            `}>
              At AlokaSoft, we pride ourselves on delivering top-notch
              technology goals. But don't just take our word for it. Hear what
              our satisfied users have to say.
            </p>
          </div>
        </header>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: isDesktop,
          }}
        >
          <CarouselContent className={`${isDesktop ? '-ml-4' : 'py-4 -ml-4'}`}>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className={`
                  ${isDesktop ? 'pl-4 md:basis-1/2 lg:basis-1/3' : 'pl-4 md:basis-1/2 lg:basis-1/3'}
                `}
              >
                <Card className={`
                  h-[400px] rounded-[20px] border border-solid border-[#b6bbcd] backdrop-blur-2xl
                  ${isDesktop ? 'bg-[#12A16B]' : 'bg-[#12A16B]'}
                `}>
                  <CardContent className={`
                    flex flex-col items-center h-full gap-5
                    ${isDesktop ? 'p-10' : 'p-8 sm:p-10 justify-between'}
                  `}>
                    <div className="w-[161.99px] h-12" />
                    <p className={`
                      flex-1 font-body-md-medium text-center
                      ${isDesktop ? 'text-[#f5f6f9]' : 'text-[#1c1f25]'}
                    `}>
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="w-8 h-8 rounded-[40px] border border-solid border-[#ffffff99]">
                        <AvatarImage
                          src={testimonial.avatarSrc}
                          alt="Profile avatar"
                        />
                        <AvatarFallback className={isDesktop ? 'bg-[#2e71e5]' : ''}>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center">
                        <span className={`
                          font-body-base-semibold text-center whitespace-nowrap
                          ${isDesktop ? 'text-[#f5f6f9]' : 'text-[#343844]'}
                        `}>
                          {testimonial.name}
                        </span>
                        <span className={`
                          font-body-base-regular text-center whitespace-nowrap
                          ${isDesktop ? 'text-[#b6bbcd]' : 'text-[#4b5162]'}
                        `}>
                          {testimonial.title}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {isDesktop ? (
            <>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </>
          ) : (
            <>
              <CarouselPrevious className="left-4 sm:flex hidden" />
              <CarouselNext className="right-4 sm:flex hidden" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};
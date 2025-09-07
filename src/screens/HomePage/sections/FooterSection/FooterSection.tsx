import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/seperator";
import logo from "../../../../assets/Alokasoftlogo.png";
export const FooterSection = ({ handleNavClick,}): JSX.Element => {
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" ? window.innerWidth > 810 : true
  );

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 810);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Shared data
  const legalLinks = [
    { text: "Term of use", url: "#" },
    { text: "Privacy policy", url: "#" },
    { text: "Security", url: "#" },
  ];

  type FooterLink = {
    text: string;
    url: string;
    icon?: JSX.Element;
  };

  const footerColumnsDesktop: {
    title: string;
    links: FooterLink[];
  }[] = [
    {
      title: "Address",
      links: [
        { text: "AlokaSoft", url: "#" },
        { text: "8951 Cypress Waters Blvd suite 160,Coppell,TX 75019", url: "#" },
        { text: "E-Mail: Info@alokasoft.com", url: "#" },
        { text: "Company Name:alokasoft.com", url: "#" },
        { text: "Phone: 972-302-1010", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "#" },
        { text: "Help Center", url: "#" },
      ],
    },
    {
      title: "Support & Contact",
      links: [
        { text: "Contact Us", url: "#" },
        { text: "Feedback", url: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          text: "Instagram",
          url: "#",
          icon: <InstagramIcon className="w-[18px] h-[18px]" />,
        },
        {
          text: "Facebook",
          url: "#",
          icon: <FacebookIcon className="w-[18px] h-[18px]" />,
        },
        {
          text: "TwitterIcon / X",
          url: "#",
          icon: <TwitterIcon className="w-[18px] h-[18px]" />,
        },
        {
          text: "Linkedin",
          url: "https://www.linkedin.com/company/108089334/admin/dashboard/",
          icon: <LinkedinIcon className="w-[18px] h-[18px]" />,
        },
      ],
    },
  ];

  const footerCategoriesMobile = [
    {
      title: "About AlokaSoft",
      links: ["Address:","AlokaSoft ","8951 Cypress Waters Blvd suite 160,Coppell,TX 75019, U.S.A.","Email:","Info@alokasoft.com","Phone:", "972-302-1010",],
    },
    {
      title: "Resources",
      links: [ "Help Center", "Case Studies"],
    },
    {
      title: "Support & Contact",
      links: ["Contact Us", "Technical Support", "Feedback"],
    },
  ];

  const socialLinksMobile = [
    {
      name: "Instagram",
      icon: <InstagramIcon className="w-[18px] h-[18px]" />,
    },
    {
      name: "Facebook",
      icon: <FacebookIcon className="w-[18px] h-[18px]" />,
    },
    {
      name: "Twitter / X",
      icon: <TwitterIcon className="w-[18px] h-[18px]" />,
    },
    {
      name: "Linkedin",
      icon: <LinkedinIcon className="w-[18px] h-[18px]" />,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-around gap-[50px] px-8 py-10 relative w-full bg-[#12A16B]">
      <div className="flex flex-col max-w-[1204px] items-center w-full">
        <div className="flex flex-col items-start gap-[60px] pb-28 w-full">
          <div className="flex items-center gap-5 w-full">
            <div className="relative w-[113.78px] h-12" >    <img
                            src={logo}
                            alt="AlokaSoft"
                            className="absolute w-[180] h-[30] top-[-30px] left-0"
                            /></div>
            <div className="flex flex-col h-px items-center justify-center gap-2 flex-1">
              <Separator className="w-full h-px" />
            </div>
          </div>
          <div className="flex flex-wrap gap-[32px] w-full items-start">
            {isDesktop ? (
              footerColumnsDesktop.map((column, index) => (
                <div
                  key={`column-${index}`}
                  className="flex flex-col justify-center gap-4 flex-1 grow items-start min-w-[180px]"
                >
                  <h3 className="font-heading-desktop-h6-bold text-[#343844] text-[length:var(--heading-desktop-h6-bold-font-size)] tracking-[var(--heading-desktop-h6-bold-letter-spacing)] leading-[var(--heading-desktop-h6-bold-line-height)] font-bold">
                    {column.title}
                  </h3>
                  <div className="flex flex-col items-start justify-center gap-2">
                    {column.links.map((link, linkIndex) => (
                      <span
                        key={`link-${linkIndex}`}
                        className={`font-button-base-medium text-[#343844] tracking-[var(--button-base-medium-letter-spacing)] leading-[var(--button-base-medium-line-height)] inline-flex gap-2 text-[16px] ${
    link.text === "Contact Us" ? "cursor-pointer" : ""
  } `}
                       
                      onClick={ 
                        link.text === "Contact Us" ? () => handleNavClick('Contact us')
                      : undefined
                      }
                      >
                        {link.icon}{"  "} {link.text}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-2 gap-[32px] w-full">
                {footerColumnsDesktop.map((column, index) => (
                  <div
                    key={`column-mobile-${index}`}
                    className="flex flex-col justify-start gap-4 flex-1 grow items-start min-w-[140px]"
                  >
                    <h3 className="font-heading-desktop-h6-bold text-[#343844] text-[14px] tracking-[var(--heading-desktop-h6-bold-letter-spacing)] leading-[var(--heading-desktop-h6-bold-line-height)] font-bold">
                      {column.title}
                    </h3>
                    <div className="flex flex-col items-start justify-center gap-2">
                      {column.links.map((link, linkIndex) => (
                        <span
                          key={`link-mobile-${linkIndex}`}
                          className="font-button-base-medium text-[#343844] tracking-[var(--button-base-medium-letter-spacing)] leading-[var(--button-base-medium-line-height)] inline-flex gap-2 text-[8px]"
                        onClick={ 
                        link.text === "Contact Us" ? () => handleNavClick('Contact us')
                      : undefined
                      }
                        >
                          {link.icon}{"  "} {link.text}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
             
            
          </div>
        </div>
        <Separator className="w-full h-px" />
        <footer className="flex flex-wrap items-center justify-center gap-6 py-5 w-full">
          <div className="flex-1 font-body-sm-regular text-[#343844] text-[length:var(--body-sm-regular-font-size)] tracking-[var(--body-sm-regular-letter-spacing)] leading-[var(--body-sm-regular-line-height)]">
            ©2025 AlokaSoft · All rights reserved.
          </div>
        
        </footer>
      </div>
    </section>
  );
};
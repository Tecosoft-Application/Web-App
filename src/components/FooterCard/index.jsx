import React from "react";
import { useRouter } from "next/navigation";

const FooterCard = ({
  title = "Next-Gen Industry is Here",
  highlightText = "Are You Ready to Lead?",
  description = "",
  buttonText = "Talk to an Expert",
  buttonHref = "#",
  backgroundImage = "/assets/footer-stroke.png",
  onButtonClick,
  className = "",
}) => {
  const router = useRouter();

  const handleClick = (e) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    } else if (buttonHref && buttonHref !== "#") {
      e.preventDefault();
      router.push(buttonHref);
    }
  };

  return (
    <div
      className={`relative border border-white/20 rounded-2xl lg:rounded-3xl overflow-hidden mb-8 md:mb-12 ${className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay for better content readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a8a]/60 via-[#1565b8]/40 to-[#0d5aa7]/60 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-12 py-8 md:py-10 lg:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          <div className="flex-1">
            {description ? (
              // Layout for pages with description (Eagle, Analytics) - inline title
              <>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white leading-tight">
                  {title}{" "}
                  <span className="font-semibold text-[#13F495]">
                    {highlightText}
                  </span>
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
                  {description}
                </p>
              </>
            ) : (
              // Layout for home page - stacked title and highlight
              <>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white leading-tight">
                  {title}
                </h2>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#13F495] leading-tight">
                  {highlightText}
                </p>
              </>
            )}
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <button
              onClick={handleClick}
              className="w-full md:w-auto bg-gradient-to-r from-[#4ACEFF] to-[#13F495] text-[#222222] px-6 lg:px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#13F495]/30 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {buttonText}
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;

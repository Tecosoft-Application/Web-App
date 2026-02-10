"use client";

interface BadgeProps {
    label: string;
}

function Badge({ label }: BadgeProps) {
    return (
        <div className="relative inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#07af40] bg-white/70 backdrop-blur-sm">
            <p className="text-[#0098d4] text-sm font-semibold">{label}</p>
        </div>
    );
}

interface HeroSectionProps {
    badge: string;
    title: string;
    description: string;
}

export default function HeroSection({
    badge,
    title,
    description,
}: HeroSectionProps) {
    return (
        <section
            className="
        relative w-full
       py-18 lg:py-24
        flex items-center justify-center
        px-4 sm:px-6 lg:px-12
        overflow-hidden
      "
            style={{
                background:
                    "linear-gradient(201deg, #00B7FF 20%, #0EB05C 75%)",
            }}
        >
            {/* Soft White Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-white/40" />

            {/* Content Container */}
            <div
                className="
          relative z-10
          max-w-[1200px]
          mx-auto
          flex flex-col
          items-center
          gap-6
        "
            >
                <Badge label={badge} />

                {/* Heading */}
                <h1
                    className="
            font-semibold
            text-[#282828]
            leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            text-center
            max-w-[80%]
          "
                >
                    {title}
                </h1>

                {/* Description */}
                <p
                    className="
            text-[#636363]
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
                        text-center

            max-w-[95%]
          "
                >
                    {description}
                </p>
            </div>
        </section>
    );
}

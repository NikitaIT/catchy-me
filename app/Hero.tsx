import { cn } from "#cn.ts";
import { SectionInnerClass } from "./styles.ts";

export function Hero() {
  return (
    <>
      {/* Hero Section - Above the Fold: Why should I care? */}
      <section
        id="hero"
        className={cn(
          SectionInnerClass,
          "flex flex-wrap sm:justify-around",
          "mt-24", // relaxed top padding for better visual balance, standard for sections
          "gap-20" // gap because margin would not collapse with flex row items
        )}
      >
        <div className={cn("flex flex-col", "items-center md:items-start")}>
          <hgroup
            className={cn(
              "flex flex-col", // for reordering social proof
              "text-center md:text-start"
            )}
          >
            {/* Headline: Dream outcome and what's in it for me */}
            <h1
              className={cn(
                "text-4xl md:text-5xl",
                // "lg:text-7xl" that is ok if layout is centered, but not ok for left-aligned
                "font-extrabold leading-none tracking-tight",
                "mb-8 lg:mb-14"
              )}
            >
              {"The First "}
              <span className="text-accent-gradient whitespace-nowrap">
                {"7 Words"}
              </span>
              {" Make"}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {"Your Outreach"}
            </h1>
            {/* Social proof #1 or pain point */}
            <p
              className={cn(
                // reordered via css for SEO
                "order-first",
                // styled against headline to make visual difference
                "font-semibold text-neutral-400",
                "text-sm md:text-base md:mb-1 lg:mb-6"
                // if text have no "?", consider use uppercase
              )}
            >
              {/* Trusted by 1,500+ SDRs */}
              {"No replies?"}
            </p>
          </hgroup>
          {/* 
          Problem Statement: Live Message Comparison
              Stop doing X | No more Y | Pain Point. 
              Our solution does X, Y, Z (articulate main benefit you provide & explain how you do what you mentioned in the headline in a proprietary or unique way). 
          PS: Image sometimes better because it works as social proof and "designed" example is not.
        */}
          <div
            className={cn(
              "flex flex-col gap-5 mb-12 items-center relative"
              // "lg:flex-row"
            )}
          >
            {/* Bad Message (Generic) */}
            <div
              className={cn(
                "bg-card-bg border border-primary-500/30 rounded-lg",
                "p-3",
                "w-full max-w-[420px]",
                "relative",
                "opacity-60",
                "scale-[0.92]"
              )}
            >
              {/* Unread Indicator Bar */}
              <div className="absolute left-1 top-1/2 -translate-y-1/2 unread-bar rounded-sm" />
              {/* Unread Count */}
              <div className="absolute top-2 right-4 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-bold min-w-[20px] text-center">
                1
              </div>
              {/* Message Row */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-semibold text-gray-400 text-sm flex-shrink-0">
                  AT
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-gray-400">
                      Avani Thakkar
                    </span>
                    {/* <span className="text-xs text-gray-600">2m</span> */}
                  </div>
                  <div className="text-sm text-gray-500 leading-relaxed text-ellipsis overflow-hidden line-clamp-2">
                    <strong className="text-gray-400">Avani:</strong> Hello
                    Sarah, Hope you are well. December is about to...
                  </div>
                </div>
              </div>
            </div>
            {/* VS Divider */}
            {/* <div className="text-gray-700 font-semibold text-sm hidden lg:block">
            VS
          </div> */}
            {/* Good Message (Personalized) */}
            <div
              className={cn(
                "message-good bg-card-bg border border-success/30 rounded-lg p-3 w-full max-w-[420px] relative z-20",
                "-mt-8",
                "bg-neutral-900",
                "z-30" // move above background filler
              )}
            >
              {/* Opens Indicator */}
              <div className="absolute top-2 right-4 bg-success text-black px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                👀 OPENS
              </div>
              {/* Message Row */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-semibold text-gray-400 text-sm flex-shrink-0">
                  ZA
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-gray-200">
                      Zaki Abanifi
                    </span>
                    {/* <span className="text-xs text-gray-500">Dec 2</span> */}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed text-ellipsis overflow-hidden line-clamp-2">
                    <strong>Zaki:</strong> Hey Nikita, 0-to-1 at Zeta Labs +
                    building the #1 targeting platform for 3K+ marketers is
                    rare...
                  </p>
                </div>
              </div>
              {/* Source Badge */}
              <div className="inline-block mt-2 ml-[52px] px-2.5 py-0.5 bg-success/10 border border-success/20 rounded-full text-[10px] text-success uppercase tracking-wider">
                ↗ Found on Twitter + GitHub
              </div>
            </div>
          </div>
          {/* CTA Buttons: One should lead to survey and another to demo */}
          <div
            className={cn(
              "w-full max-w-md", // grow cta relative to container till md
              "gap-4",
              "flex flex-col sm:flex-row sm:max-w-none", // do not grow cta section after it's inline, and reorder
              "sm:justify-center md:justify-start", // center content when inline, md all left-aligned
              "mb-6"
            )}
          >
            <a
              href="/register"
              className={cn(
                ButtonCommonClass,
                ButtonPrimaryClass,
                CtaClass
                // text
                // "bg-white text-black px-10 py-4 rounded-full text-[17px] font-bold hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all w-full",
              )}
            >
              Test Your First Line →
            </a>
            <a
              href="#platform"
              className={cn(
                ButtonCommonClass,
                ButtonSecondaryClass,
                CtaClass,
                // text
                "text-white",
                "sm:order-first"
              )}
            >
              Play With Demo
            </a>
          </div>
          {/* Trust Line: REDUCE Friction and FUDs (FEAR, UNCERTAINTY, DOUBTS) */}
          <p className="text-gray-600 text-sm mb-6">
            From the team that tested 50,000 openers to find what works
          </p>
          {/* Bottom Stats Bar */}
          <div className="flex mx-auto gap-6 lg:gap-12 px-6 lg:px-10 py-4 lg:py-5 bg-white/[0.03] border border-white/10 rounded-full">
            <div className="items-center gap-2 hidden sm:flex">
              <span className="text-success font-bold text-base lg:text-lg">
                2.3s
              </span>
              <span className="text-gray-600 text-xs lg:text-sm">
                to decide
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success font-bold text-base lg:text-lg">
                9.5%
              </span>
              <span className="text-gray-600 text-xs lg:text-sm">
                reply rate
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success font-bold text-base lg:text-lg">
                90%+
              </span>
              <span className="text-gray-600 text-xs lg:text-sm">accuracy</span>
            </div>
            <div className="items-center gap-2  hidden md:flex">
              <span className="text-success font-bold text-base lg:text-lg">
                $30
              </span>
              <span className="text-gray-600 text-xs lg:text-sm">
                per meeting
              </span>
            </div>
          </div>
        </div>
        {/* Social proof #3 */}
        <div className="relative w-full sm:w-auto flex flex-col items-center">
          <div className="text-center pb-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 lg:hidden">
              <span className="bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                Convert them all!
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              {"They can't resist replying to your messages"}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl max-w-xs">
            <img
              aria-hidden="true"
              src="/social-proof/linkedin-feed.jpg"
              alt="LinkedIn Feed"
              className="w-full object-contain pointer-events-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const CtaClass = cn(
  // fill & positioning
  "w-full sm:w-auto",
  // container
  "rounded-full", // should match card style
  // inner content
  "px-10 py-4",
  "text-center",
  // text
  "text-lg font-semibold"
);
const ButtonCommonClass = cn(
  "inline-block", // to make any button hieght work with padding
  "transition-all duration-200",
  "hover:scale-105",
  "focus:ring focus:ring-offset-primary-200 focus:outline-none focus:ring-offset-2"
);
const ButtonSecondaryClass = cn(
  // container
  "bg-transparent",
  "border border-gray-700",
  "hover:border-gray-500 hover:bg-white/5"
);
const ButtonPrimaryClass = cn(
  "text-[#1a1a1a]",
  // container
  "bg-linear-to-r from-primary-500 to-primary-400",
  "hover:from-primary-400 hover:to-primary-300",
  "shadow-lg shadow-primary-500/20"
);

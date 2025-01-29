import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108"
import { Brain, Laugh, Users } from "lucide-react";
import { FeatureSteps } from "@/components/blocks/feature-section";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const websiteContent = {
  badge: "Deep AI (DAI)",
  heading: "Where Memes Meet AI Enthusiasm",
  description: "Join the community of AI enthusiasts who love to meme about machine learning!",
  tabs: [
    {
      value: "community",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "AI Enthusiasts Unite",
      content: {
        badge: "Community Vibes",
        title: "Connect with Fellow AI Fans",
        description:
          "Share your AI memes, discuss the latest trends, and connect with people who share your passion for artificial intelligence - all in a fun, welcoming environment!",
        buttonText: "Join Community",
        imageSrc: "/images/placeholder.svg",
        imageAlt: "AI Community",
      },
    },
    {
      value: "memes",
      icon: <Laugh className="h-auto w-4 shrink-0" />,
      label: "Meme Corner",
      content: {
        badge: "Fun Zone",
        title: "AI Memes & Good Times",
        description:
          "From Machine Learning Mishaps to Neural Network Nonsense - dive into our collection of AI-themed memes and join our weekly meme contests!",
        buttonText: "See Memes",
        imageSrc: "/images/placeholder.svg",
        imageAlt: "AI Memes",
      },
    },
    {
      value: "tech-talk",
      icon: <Brain className="h-auto w-4 shrink-0" />,
      label: "Tech Discussions",
      content: {
        badge: "Knowledge Share",
        title: "Casual AI Discussions",
        description:
          "Stay updated with the latest in AI, share your thoughts on new developments, and learn from fellow enthusiasts - no gatekeeping, all skill levels welcome!",
        buttonText: "Join Talks",
        imageSrc: "/images/placeholder.svg",
        imageAlt: "Tech Discussions",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroGeometric />
      <div className="container mx-auto px-4">
        <Feature108 {...websiteContent} />
        <FeatureSteps 
          features={[
            {
              step: "Join Us",
              title: "Get Some DAI",
              content: "Grab your Deep AI tokens and become part of our memetic movement. Available on major DEXes - join us for the memes!",
              image: "/images/placeholder.svg"
            },
            {
              step: "Connect",
              title: "Enter the Community",
              content: "Jump into our Discord, share your favorite AI memes, and meet fellow enthusiasts who love both AI and good humor.",
              image: "/images/placeholder.svg"
            },
            {
              step: "Have Fun",
              title: "Participate & Enjoy",
              content: "Join our meme contests, tech talk Tuesdays, and weekend watch parties. Remember - we're here for the memes and good times!",
              image: "/images/placeholder.svg"
            }
          ]} 
        />
        <TextRevealByWord 
          text="Join the community where AI meets memes!"
          className="text-4xl font-bold text-center py-20 max-w-4xl mx-auto"
        />
        <StackedCircularFooter/>
      </div>
    </div>
  );
}

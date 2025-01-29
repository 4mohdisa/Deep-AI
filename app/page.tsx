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
        title: "Community First",
        description: "Join our vibrant community of AI enthusiasts and meme lovers.",
        icon: <Users className="h-4 w-4" />,
        buttonText: "Join Community",
        buttonLink: "https://t.me/+eIaWovBDPTViZTBl",
        imageSrc: "/images/DEEP.AI  TOKEN (1).jpg",
        imageAlt: "Deep AI Community"
      },
    },
    {
      value: "memes",
      icon: <Laugh className="h-auto w-4 shrink-0" />,
      label: "Meme Corner",
      content: {
        badge: "Fun Zone",
        title: "AI Powered Memes",
        description: "Create and share AI-themed memes with fellow enthusiasts.",
        icon: <Brain className="h-4 w-4" />,
        buttonText: "See Memes",
        buttonLink: "https://x.com/deep_ai21",
        imageSrc: "/images/DEEP.AI  TOKEN (2).jpg",
        imageAlt: "AI Memes"
      },
    },
    {
      value: "tech-talk",
      icon: <Brain className="h-auto w-4 shrink-0" />,
      label: "Tech Discussions",
      content: {
        badge: "Knowledge Share",
        title: "Fun & Learning",
        description: "Engage in discussions about AI while having fun with memes.",
        icon: <Laugh className="h-4 w-4" />,
        buttonText: "Join Talks",
        buttonLink: "https://t.me/+eIaWovBDPTViZTBl",
        imageSrc: "/images/DEEP.AI  TOKEN (3).jpg",
        imageAlt: "AI Learning"
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
              step: "Step 1",
              title: "Join Our Community",
              content: "Connect with fellow AI enthusiasts and meme lovers.",
              image: "/images/DEEP.AI  TOKEN (4).jpg"
            },
            {
              step: "Step 2",
              title: "Share & Create",
              content: "Create and share your favorite AI-themed memes.",
              image: "/images/DEEP.AI  TOKEN (5).jpg"
            },
            {
              step: "Step 3",
              title: "Engage & Learn",
              content: "Participate in discussions and learn about AI.",
              image: "/images/DEEP.AI  TOKEN (7).jpg"
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

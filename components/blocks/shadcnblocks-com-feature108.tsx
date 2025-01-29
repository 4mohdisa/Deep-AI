import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Community Vibes",
      content: {
        badge: "Community Vibes",
        title: "AI Enthusiasts Unite",
        description:
          "Share your AI memes, discuss the latest trends, and connect with people who share your passion for artificial intelligence - all in a fun, welcoming environment!",
        buttonText: "Join Community",
        buttonLink: "https://t.me/+eIaWovBDPTViZTBl",
        imageSrc: "/images/DEEP.AI  TOKEN (7).jpg",
        imageAlt: "AI Community",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Meme Corner",
      content: {
        badge: "Fun Zone",
        title: "AI Memes & Good Times",
        description:
          "From Machine Learning Mishaps to Neural Network Nonsense - dive into our collection of AI-themed memes and join our weekly meme contests!",
        buttonText: "See Memes",
        buttonLink: "https://x.com/deep_ai21",
        imageSrc: "/images/DEEP.AI  TOKEN (8).jpg",
        imageAlt: "AI Memes",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Tech Discussions",
      content: {
        badge: "Knowledge Share",
        title: "Casual AI Discussions",
        description:
          "Stay updated with the latest in AI, share your thoughts on new developments, and learn from fellow enthusiasts - no gatekeeping, all skill levels welcome!",
        buttonText: "Join Talks",
        buttonLink: "https://t.me/+eIaWovBDPTViZTBl",
        imageSrc: "/images/DEEP.AI  TOKEN (9).jpg",
        imageAlt: "Tech Discussions",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-32 mx-auto w-full max-w-screen-xl">
      <div>
        <div className="container flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div>
          <Tabs defaultValue={tabs[0].value} className="mt-8">
            <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
                >
                  {tab.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="container mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {tab.content.description}
                    </p>
                    <a
                      href={tab.content.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2.5 w-fit gap-2"
                    >
                      {tab.content.buttonText}
                    </a>
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      width={400}
                      height={300}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature108 };

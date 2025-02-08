import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 md:flex-row md:py-24 md:px-8">
        <div className="w-full max-w-[500px]">
          <Image
            src="/feature-sec.svg"
            alt="Features illustration"
            width={500}
            height={500}
            className="dark:brightness-90 mr-10"
          />
        </div>
        <div className="flex flex-col gap-4 ml-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl border-l-4 pl-3 border-black">
            JOBS, COMPANIES AND CONTACTS
          </h2>
          <p className="max-w-[600px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Tristique nec fusce tellus
            massa morbi lacus mi in. Fringilla eget amet egestas molestie.
            Tellus urna congue nisi tellus. Vulputate arcu rhoncus condimentum
            pellentesque.
          </p>
          <p className="max-w-[600px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="max-w-[600px] text-gray-500">
            Tristique nec fusce tellus massa morbi lacus mi in. Fringilla eget
            amet egestas molestie. Tellus urna congue nisi tellus. Vulputate
            arcu rhoncus condimentum pellentesque.
          </p>
          <Button size="lg" className="mt-4 w-fit">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

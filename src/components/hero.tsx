import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full relative bg-[url('/hero-bg.svg')] bg-cover bg-left-bottom bg-no-repeat pb-32">
      <img src="/hero-side.svg" alt="" className="absolute bottom-8" />
      <img src="/hero-right.svg" alt="" className="absolute top-8 right-0" />

      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-8 px-4 py-12 md:flex-row md:py-24 md:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left ">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            ALL YOU NEED
            <br />
            IN <span className="text-primary">ONE PLACE</span>
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
            Find your dream job, connect with top companies, and take the next
            step in your career journey.
          </p>
          <Button size="lg" className="mt-4">
            Get Started
          </Button>
        </div>
        <div className="w-full max-w-[400px]">
          <Image
            src="/hero-img.svg"
            alt="Hero illustration"
            width={400}
            height={400}
            className="dark:brightness-90"
          />
        </div>
      </div>
    </section>
  );
}

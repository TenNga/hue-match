import Button from "@/components/ui/Button";
import Header from "@/components/Header";
import Step from "@/components/ui/Step";
import { steps } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col justify-between container my-10 mx-auto gap-4 lg:flex-row">
        <section className="flex-grow mx-4 lg:w-full">
          <h1 className="primary-heading">Personal Color Palette Generator</h1>
          <p>Easy to use, powered by AI.</p>
          <div className="flex flex-col gap-8 mt-4 mb-4 lg:mt-16 lg:mb-24">
            <Step step={steps.one} />
            <Step step={steps.two} />
            <Step step={steps.three} />
          </div>
          <Button type="main">
            <Link href="/generator">let&apos;s Start</Link>
            </Button>
        </section>
        <section className="flex-grow w-full hidden md:flex">
          <Image 
            className="w-full object-cover"
            src={"/assets/images/homepage_primary.png"}
            width={1000}
            height={1000}
            alt="Homepage primary"
          />
        </section>
      </main>
      <footer className="flex items-center justify-center absolute bottom-1 lg:bottom-5 w-full">
        <p>Copyright © 2024 Hue Match</p>
      </footer>
    </div>
  );
}

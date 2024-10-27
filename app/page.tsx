import Button from "@/components/ui/Button";
import Step from "@/components/ui/Step";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const steps = {
    one: {
      icon: {
        src : "/assets/icons/step_1.svg",
                width : 70,
                height : 70,
                alt : "Step 1 icon"
      },
      label: "upload image"
    },
    two: {
      icon: {
        src : "/assets/icons/step_2.svg",
                width : 70,
                height : 70,
                alt : "Step 1 icon"
      },
      label: "pick color: (hair, skin)"
    },
    three: {
      icon: {
        src : "/assets/icons/step_3.svg",
                width : 70,
                height : 70,
                alt : "Step 1 icon"
      },
      label: "generate palette"
    }
  }
  return (
    <div className="min-h-screen">
      <header className="container m-auto pt-8">
        <div>
        <Image
          src="/assets/icons/logo_w_name.png"
          alt="Hue Match Logo"
          width={180}
          height={38}
          priority
        />
        </div>
      </header>
      <main className="flex flex-col-reverse justify-between container my-10 mx-auto gap-4 lg:flex-row">
        <section className="flex-grow w-full">
          <h1 className="primary-heading">Personal Color Palette Generator</h1>
          <p>Easy to use, powered by AI.</p>
          <div className="flex flex-col gap-8 mt-16 mb-24">
            <Step step={steps.one} />
            <Step step={steps.two} />
            <Step step={steps.three} />
          </div>
          <Button type="main">
            <Link href="/generator">let's Start</Link>
            </Button>
        </section>
        <section className="flex-grow w-full">
          <Image 
            className="w-full object-cover"
            src={"/assets/images/homepage_primary.png"}
            width={1000}
            height={1000}
            alt="Homepage primary"
          />
        </section>
      </main>
      <footer className="flex items-center justify-center absolute bottom-5 left-1/2 -translate-x-1/2">
        <p>Copyright © 2024 Hue Match</p>
      </footer>
    </div>
  );
}

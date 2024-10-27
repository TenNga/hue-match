import Step from "@/components/ui/Step";
import Image from "next/image";

export default function Home() {
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
      <main className="flex justify-between container my-10 mx-auto gap-4">
        <section className="flex-grow w-full">
          <h1 className="primary-heading">Personal Color Palette Generator</h1>
          <p>Easy to use, powered by AI.</p>
          <div className="flex flex-col gap-8 mt-16">
            <div className="flex justify-start items-center gap-7">
              <Image 
                src="/assets/icons/step_1.svg"
                width={70}
                height={70}
                alt="Step 1 icon"
              />
              <p className="inline text-3xl font-extrabold capitalize">upload image</p>
            </div>
            <div className="flex justify-start items-center gap-7">
              <Image 
                src="/assets/icons/step_1.svg"
                width={70}
                height={70}
                alt="Step 1 icon"
              />
              <p className="inline text-3xl font-extrabold capitalize">upload image</p>
            </div>
            <Step />
          </div>
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
      <footer className="flex items-center justify-center">
        <p>Copyright © 2024 Hue Match</p>
      </footer>
    </div>
  );
}

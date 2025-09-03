import { SocialIconsList, TypingEffect, Particle } from "../../../components";

export const Hero: React.FC = () => {
  return (
    <section id="hero"
      className="relative pb-5 pt-[5rem] py-5 lg:pt-5 sm:px-6 lg:px-8 text-center min-h-[100vh] flex items-center justify-center gap-6 px-4 flex-wrap-reverse bg-primary-color overflow-hidden"
    >
      <div className="relative z-10 flex-[1.5] min-w-[300px] text-white">
        <p className="font-geistMono mb-5">Hello, world!</p>
        <h1 className="text-xl md:text-3xl">Meu nome é Ana Beatriz, sou</h1>
        <TypingEffect texts={["Desenvolvedora Backend", "Desenvolvedora Fullstack"]} />
        <SocialIconsList style="mt-7" />
      </div>

      <Particle size={7} left="15%" delay="0s" />
      <Particle size={5} left="35%" delay="0.5s" />
      <Particle size={6} left="55%" delay="1s" />
      <Particle size={4} left="75%" delay="1.5s" />
      <Particle size={8} left="90%" delay="2s" />
      <Particle size={5} left="20%" delay="1s" />
      <Particle size={6} left="80%" delay="1.5s" />
      <Particle size={10} left="10%" delay="2s" />
    </section>
  );
};
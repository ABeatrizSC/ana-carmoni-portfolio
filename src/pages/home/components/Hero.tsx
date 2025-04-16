import { SocialIconsList, TypingEffect } from "../../../components";

export const Hero: React.FC = () => {
    return (
      <section id="hero" className="pb-5 pt-[5rem] py-5 lg:pt-5 sm:px-6 lg:px-8 text-center min-h-[100vh] flex items-center justify-center gap-6 px-4 flex-wrap-reverse">
        <div className="flex-[1.5] min-w-[300px]">
          <p className="font-geistMono mb-5">Hello, world!</p>
          <h1 className="text-xl md:text-3xl">
            Meu nome é Ana Beatriz, sou
          </h1>
          <TypingEffect texts={["Desenvolvedora Back-end", "Desenvolvedora Full Stack"]} />
          <SocialIconsList style="mt-7" />
        </div>
    </section>
    
    )
}
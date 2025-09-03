import { useEffect, useState } from "react";
import { Button, Logo, NavLink } from "./";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setIsScrolled(true); 
    } else {
      setIsScrolled(false);
    }
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 right-0 z-50 w-full py-5 px-5 sm:px-6 lg:px-10 text-white transition-all duration-300 border-b-2 border-secondary-color ${isScrolled ? 'border-opacity-100 shadow-md bg-primary-color' : 'border-opacity-0 bg-transparent'}`}>
      <nav className="flex items-center justify-between">
        <Logo />
        <Button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style="lg:hidden"
        >
          <svg
            className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>

          <svg
            className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>

        <div className="hidden lg:flex lg:gap-7 lg:items-center lg:ml-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#about">Sobre mim</NavLink>
          <NavLink href="/#experience">Experiência</NavLink>
          <NavLink href="/#technologies">Tecnologias</NavLink>
          <NavLink href="/#projects">Projetos</NavLink>
          <NavLink href="/#certificates">Formação e certificações</NavLink>
          <NavLink href="/#contact">Contato</NavLink>
        </div>
      </nav>

      <div
        className={`fixed right-0 z-50 w-full px-5 bg-primary-color overflow-hidden transition-[max-height] duration-500 lg:hidden ${
          menuOpen ? "max-h-screen border-b-2 border-secondary-color" : "max-h-0"
        }`}
      >
        <nav className="pt-4 pb-2 text-white">
          <div className="flex flex-col gap-2">
            <NavLink href="/" style="inline-flex py-2" onClick={handleMenu}>
              Home
            </NavLink>
            <NavLink href="/#about" style="inline-flex py-2" onClick={handleMenu}>
              Sobre mim
            </NavLink>
            <NavLink href="/#experience" style="inline-flex py-2" onClick={handleMenu}>
              Experiência
            </NavLink>
            <NavLink href="/#technologies" style="inline-flex py-2" onClick={handleMenu}>
              Tecnologias
            </NavLink>
            <NavLink href="/#projects" style="inline-flex py-2" onClick={handleMenu}>
              Projetos
            </NavLink>
            <NavLink href="/#certificates" style="inline-flex py-2" onClick={handleMenu}>
              Formação & certificações
            </NavLink>
            <NavLink href="/#contact" style="inline-flex py-2" onClick={handleMenu}>
              Contato
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

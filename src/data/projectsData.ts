import { ProjectDetails } from "../types";
import istudyImage from "../assets/images/studies-statistical-information-page.png"
import imageLite from "../assets/images/imageLite.jpg"
import userSystem from "../assets/images/user-system.png"
import parkingApi from "../assets/images/parking-management-system.jpg"
import blogApi from "../assets/images/blog-api.webp"
import miniBlog from "../assets/images/mini-blog.jpg"
import byte from "../assets/images/byte.jpg"
import secretWordGame from "../assets/images/secret-word-game.jpg"
import notes from "../assets/images/notes.jpg"
import myMovies from "../assets/images/my-movies.jpg"
import homepageHashtag from "../assets/images/homepage-hashtag.jpg"
import restaurantWebsite from "../assets/images/restaurant-website.jpg"
import picpayImage from "../assets/images/PicPayLogo.png";
import evoraImage from "../assets/images/evoraLogo.jpg";
import orderSystemImage from "../assets/images/order-system.png";

export const projects: ProjectDetails[] = [
    {
        "name": "iStudy",
        "description": "Plataforma web projetada para ajudar estudantes a organizar, gerenciar e acompanhar seu progresso de estudos e rotina acadêmica através de gráficos e métricas de desempenho.",
        repoLink: "https://github.com/ABeatrizSC/iStudy",
        imageUrl: istudyImage,
        technologies: ["Java", "Spring Boot", "TypeScript", "React.js", "Next.js", "Docker", "RabbitMQ", "MySQL", "Tailwind CSS", "Material UI", "Spring Security", "JWT", "Spring Cloud", "Spring Data", "Postman", "Git", "GitHub"],
        showOnHome: true,
        category: ["Full stack", "Back-end", "Front-end"]
    },
    {
        "name": "Evora",
        "description": "Sistema de gerenciamento de eventos em arquitetura de microsserviços, com API Gateway, mensageria, integração à API de pagamentos Asaas e envio automatizado de e-mail aos usuários participantes.",
        repoLink: "https://github.com/ABeatrizSC/evora",
        imageUrl: evoraImage,
        technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring Data", "Docker", "RabbitMQ", "PostgreSQL", "MongoDB", "Postman", "Git", "GitHub"],
        showOnHome: true,
        category: ["Back-end"]
    },
    {
        "name": "Picpay Simplificado",
        "description": "Resolução do desafio backend Picpay simplificado utilizando arquitetura limpa (Clean Architecture).",
        repoLink: "https://github.com/ABeatrizSC/picpay-simplified-challenge",
        imageUrl: picpayImage,
        technologies: ["Java", "Spring Boot", "Spring Data", "Postman", "Git", "GitHub"],
        showOnHome: true,
        category: ["Back-end"]
    },
        {
        "name": "Order System",
        "description": "Sistema de pedidos desenvolvido com arquitetura de microsserviços, utilizando o Padrão Saga Orquestrado para garantir a consistência dos dados entre os serviços.",
        repoLink: "https://github.com/ABeatrizSC/order-system",
        imageUrl: orderSystemImage,
        technologies: ["Java", "Spring Boot", "Spring Data", "Docker", "Apache Kafka" ,"PostgreSQL", "MongoDB", "Postman", "Git", "GitHub"],
        showOnHome: false,
        category: ["Back-end"]
    },
    {
        "name": "User System",
        "description": "O projeto consiste na criação de uma API que permite o registro de usuários e a atualização de senhas. A API inclui segurança com JWT, sistema de mensageria e OpenFeign para se conectar à API ViaCEP, permitindo a recuperação integrada de informações de código postal.",
        repoLink: "https://github.com/ABeatrizSC/user-system",
        imageUrl: userSystem,
        technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring Data", "Docker", "RabbitMQ", "MySQL", "MongoDB", "Postman", "Git", "GitHub"],
        showOnHome: false,
        category: ["Back-end"]
    },
    {
        "name": "Image Lite",
        "description": "Projeto FullStack de um repositório de imagens desenvolvido com Spring Boot, ReactJS e NextJS, permitindo que os usuários criem contas, façam upload de imagens nos formatos JPEG, PNG e GIF, visualizem e as baixem.",
        repoLink: "https://github.com/ABeatrizSC/image-lite",
        imageUrl: imageLite,
        technologies: ["Java", "Spring Boot", "TypeScript", "React.js", "Next.js", "Docker", "PostgreSQL", "Tailwind CSS", "Spring Security", "JWT", "Spring Data", "Postman", "Git", "GitHub"],
        showOnHome: false,
        category: ["Full stack", "Back-end"]
    },
    {
        "name": "Parking Management System API",
        "description": "Desafio realizado em grupo durante o programa de bolsas da Compass UOL, que consiste em uma API REST para gerenciamento de estacionamento, com regras específicas por categoria de veículo. Controla cancela de entrada/saída, emissão de tickets para veículos de passeio e caminhões, ocupação de vagas e reserva exclusiva para mensalistas.",
        repoLink: "https://github.com/ABeatrizSC/parking-management-system-api",
        imageUrl: parkingApi,
        technologies: ["Java", "Spring Boot", "Spring Data", "MySQL", "JUnit", "Postman", "Git", "GitHub"],
        showOnHome: false,
        category: ["Back-end"]
    },
    {
        "name": "Blog API",
        "description": "API REST que simula um Blog, com cadastro, edição e exclusão de usuários, inserção/busca por posts e comentários.",
        repoLink: "https://github.com/ABeatrizSC/blog-api",
        imageUrl: blogApi,
        technologies: ["Java", "Spring Boot", "Spring Data", "MongoDB", "Postman", "Git", "GitHub"],
        showOnHome: false,
        category: ["Back-end"]
    },
    {
        "name": "Byte",
        "description": "Projeto acadêmico em grupo para desenvolvimento de um sistema web Full Stack de delivery para uma lanchonete fictícia, Byte. O sistema permite que clientes façam pedidos e que os administradores gerenciem pedidos e produtos por meio de painéis administrativos. Neste repositório está todo o Front-End, do qual fui responsável.",
        repoLink: "https://github.com/ABeatrizSC/byte",
        previewLink: "https://byte-theta.vercel.app/",
        imageUrl: byte,
        technologies: ["JavaScript", "TypeScript", "React.js", "HTML5", "CSS3", "Git", "GitHub"],
        showOnHome: false,
        category: ["Front-end"]
    },
    {
        "name": "Mini Blog",
        "description": "Aplicação de blog com interface feita em React.js, utilizando Firebase para autenticação e banco de dados em tempo real. Permite cadastro de usuários, criação e visualização de posts de forma dinâmica.",
        repoLink: "https://github.com/ABeatrizSC/mini-blog",
        previewLink: "https://mini-blog-teal.vercel.app/",
        imageUrl: miniBlog,
        technologies: ["JavaScript", "React.js", "HTML5", "CSS3", "Git", "GitHub"],
        showOnHome: false,
        category: ["Front-end"]
    },
    {
        "name": "Secret Word Game",
        "description": "Jogo de adivinhação criado com React.js, onde o jogador tenta descobrir palavras secretas com até 5 erros permitidos. A pontuação é calculada com base no desempenho.",
        repoLink: "https://github.com/ABeatrizSC/secret-word-game",
        previewLink: "https://secret-word-game-three.vercel.app/",
        imageUrl: secretWordGame,
        technologies: ["JavaScript", "React.js", "HTML5", "CSS3", "Git", "GitHub"],
        showOnHome: false,
        category: ["Front-end"]
    },
    {
        "name": "Notes",
        "description": "O projeto Notes permite gravar notas por meio de texto ou voz, que são automaticamente convertidas em texto por meio da integração com a API Speech Recognition.",
        repoLink: "https://github.com/ABeatrizSC/notes",
        previewLink: "https://notes-three-sooty.vercel.app/",
        imageUrl: notes,
        technologies: ["TypeScript", "React.js", "Tailwind CSS", "HTML5", "CSS3", "Git", "GitHub"],
        showOnHome: false,
        category: ["Front-end"]
    },
    {
        "name": "My movies",
        "description": "Este projeto permite buscar títulos através da API OMDb e salvar seus filmes preferidos em uma lista personalizada para assistir mais tarde.",
        repoLink: "https://github.com/ABeatrizSC/my-movies",
        previewLink: "https://abeatrizsc.github.io/my-movies/",
        imageUrl: myMovies,
        technologies: ["JavaScript", "HTML5", "CSS3", "Git", "GitHub"],
        showOnHome: false,
        category: ["Front-end"]
    },
    {
        "name": "Home Page Hashtag",
        "description": "Réplica da Home page da Hashtag Treinamentos desenvolvida durante o curso HTML e CSS Impressionador.",
        repoLink: "https://github.com/ABeatrizSC/home-page-hashtag",
        previewLink: "https://abeatrizsc.github.io/home-page-hashtag/",
        imageUrl: homepageHashtag,
        technologies: ["HTML5", "CSS3", "Git", "GitHub"],
        showOnHome: false,
        category: ["Front-end"]
    },
    {
        "name": "Restaurant Website",
        "description": "Landing page responsiva, réplica do figma 'Restaurant Website' desenvolvida com HTML e CSS.",
        repoLink: "https://github.com/ABeatrizSC/restaurant-website",
        previewLink: "https://abeatrizsc.github.io/restaurant-website/",
        imageUrl: restaurantWebsite,
        technologies: ["HTML5", "CSS3", "Git", "GitHub"],
        showOnHome: false,
        category: ["Front-end"]
    }
]
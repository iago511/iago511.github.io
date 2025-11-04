

//Aqui eu to criado uma contante que guarda varios objetos tendo o nome do filme de chave do objeto como um dicionario



const filmesDB = {

    "oppenheimer": {
        titulo: "Oppenheimer",
        nota: 8.6,
        imagem: "images/oppenheimer.jpg",
        descricao: "A história do físico americano J. Robert Oppenheimer, seu papel no Projeto Manhattan e no desenvolvimento da bomba atômica.",
        trailerUrl: "https://www.youtube.com/embed/F3OxA9Cz17A"
    },
    
    "barbie": {
        titulo: "Barbie",
        nota: 7.0,
        imagem: "images/barbie.jpg",
        descricao: "Uma boneca Barbie que vive na Barbieland é expulsa por não ser perfeita o suficiente e parte para uma aventura no mundo real.",
        trailerUrl: "https://www.youtube.com/embed/Ujs1_KCLA-A"
    },

    "duna2": {
        titulo: "Duna: Parte Dois",
        nota: 8.8,
        imagem: "images/duna2.jpg",
        descricao: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.",
        trailerUrl: "https://www.youtube.com/embed/U2Qp5pL3ovA"
    },

    "interstellar": {
        titulo: "Interestelar",
        nota: 8.7,
        imagem: "images/interstellar.jpg",
        descricao: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
        trailerUrl: "https://www.youtube.com/embed/mbbSj0iE_B0"
    },

    "coringa": {
        titulo: "Coringa",
        nota: 8.4,
        imagem: "images/coringa.jpg",
        descricao: "Em Gotham City, o comediante falido Arthur Fleck busca conexão enquanto vaga pelas ruas. Isolado, intimidado e desconsiderado pela sociedade, ele inicia uma descida para a loucura.",
        trailerUrl: "https://www.youtube.com/embed/t_e5S90bC64"
    },

    "thebatman": {
        titulo: "The Batman",
        nota: 7.8,
        imagem: "images/thebatman.jpg",
        descricao: "Nos seus primeiros anos como Batman, Bruce Wayne explora a corrupção de Gotham City enquanto persegue um assassino enigmático conhecido como Charada.",
        trailerUrl: "https://www.youtube.com/embed/mqqft2x_Aa4"
    },

    "parasita": {
        titulo: "Parasita",
        nota: 8.5,
        imagem: "images/parasita.jpg",
        descricao: "Uma família pobre e desempregada se infiltra na vida de uma família rica, um a um, com consequências inesperadas.",
        trailerUrl: "https://www.youtube.com/embed/9Bv_39rO4oo"
    },

    "aranhaverso": {
        titulo: "Homem-Aranha: Através do Aranhaverso",
        nota: 8.7,
        imagem: "images/aranhaverso.jpg",
        descricao: "Miles Morales é catapultado através do Multiverso, onde encontra uma equipe de Pessoas-Aranha encarregada de proteger sua própria existência.",
        trailerUrl: "https://www.youtube.com/embed/406-at1E-pY"
    },

    "vingadores-ultimato": {
        titulo: "Vingadores: Ultimato",
        nota: 8.4,
        imagem: "images/ultimato.jpg",
        descricao: "Após os eventos devastadores de 'Guerra Infinita', os Vingadores restantes se reúnem para reverter as ações de Thanos e restaurar o equilíbrio do universo.",
        trailerUrl: "https://www.youtube.com/embed/g6ng8iy-l0s"
    },

    "inception": {
        titulo: "A Origem (Inception)",
        nota: 8.8,
        imagem: "images/inception.jpg",
        descricao: "Um ladrão especializado em extrair informações do subconsciente durante o sonho é oferecido a chance de ter seu passado criminoso apagado.",
        trailerUrl: "https://www.youtube.com/embed/8hP9D6kZseM"
    },

    "madmax": {
        titulo: "Mad Max: Estrada da Fúria",
        nota: 8.1,
        imagem: "images/madmax.jpg",
        descricao: "Em um deserto pós-apocalíptico, uma mulher se rebela contra um tirano em busca de sua terra natal com a ajuda de um grupo de prisioneiras e um vagabundo.",
        trailerUrl: "https://www.youtube.com/embed/hEJnMQG9ev8"
    },

    "lalaland": {
        titulo: "La La Land: Cantando Estações",
        nota: 8.0,
        imagem: "images/lalaland.jpg",
        descricao: "Enquanto buscam o sucesso em Hollywood, um pianista de jazz e uma aspirante a atriz se apaixonam, mas seus sonhos ameaçam separar o casal.",
        trailerUrl: "https://www.youtube.com/embed/DBUXcslGyKk"
    },

    "johnwick4": {
        titulo: "John Wick 4: Baba Yaga",
        nota: 7.8,
        imagem: "images/johnwick4.jpg",
        descricao: "John Wick descobre um caminho para derrotar a Alta Cúpula. Mas antes que possa ganhar sua liberdade, ele deve enfrentar um novo inimigo com alianças poderosas.",
        trailerUrl: "https://www.youtube.com/embed/v3lTf3gU3mI"
    },

    "avagem": {
        titulo: "A Viagem de Chihiro",
        nota: 8.6,
        imagem: "images/chihiro.jpg",
        descricao: "Durante a mudança para uma nova cidade, uma menina de 10 anos se vê em um mundo mágico habitado por espíritos, deuses e monstros.",
        trailerUrl: "https://www.youtube.com/embed/ByXuk9QqQkk"
    },

    "darkknight": {
        titulo: "Batman: O Cavaleiro das Trevas",
        nota: 9.0,
        imagem: "images/darkknight.jpg",
        descricao: "Quando o Coringa emerge como uma ameaça caótica, Batman deve aceitar um dos maiores testes psicológicos e físicos de sua capacidade de lutar contra a injustiça.",
        trailerUrl: "https://www.youtube.com/embed/UuH6lT0Hko8"
    },

    "pulpfiction": {
        titulo: "Pulp Fiction: Tempo de Violência",
        nota: 8.9,
        imagem: "images/pulpfiction.jpg",
        descricao: "As vidas de dois assassinos de aluguel, um boxeador, a esposa de um gângster e um casal de assaltantes se entrelaçam em quatro histórias de violência e redenção.",
        trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },

    "forrestgump": {
        titulo: "Forrest Gump: O Contador de Histórias",
        nota: 8.8,
        imagem: "images/forrestgump.jpg",
        descricao: "Um homem simples de bom coração testemunha e influencia acidentalmente vários eventos históricos importantes nos Estados Unidos.",
        trailerUrl: "https://www.youtube.com/embed/bSMsoh3WlD4"
    },

    "matrix": {
        titulo: "Matrix",
        nota: 8.7,
        imagem: "images/matrix.jpg",
        descricao: "Um programador de computador descobre que a realidade como ele conhece é uma simulação elaborada, e ele se junta a uma rebelião para libertar a humanidade.",
        trailerUrl: "https://www.youtube.com/embed/9ix7TUGVYIo"
    },

    "divertidamente2": {
        titulo: "Divertida Mente 2",
        nota: 7.9,
        imagem: "images/divertidamente2.jpg",
        descricao: "Alegria, Tristeza, Raiva, Medo e Nojinho precisam lidar com a chegada de novas emoções, como a Ansiedade, quando Riley entra na adolescência.",
        trailerUrl: "https://www.youtube.com/embed/Sgk-UBY1m2Y"
    },

    "gladiador": {
        titulo: "Gladiador",
        nota: 8.5,
        imagem: "images/gladiador.jpg",
        descricao: "Um general romano é traído e sua família assassinada por um imperador corrupto. Ele se torna um gladiador em busca de vingança.",
        trailerUrl: "https://www.youtube.com/embed/0x1QBGx3t5s"
    }
};
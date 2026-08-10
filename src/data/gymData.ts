import {
  ServiceItem,
  DifferentialItem,
  MethodologyStep,
  FacilityPhoto,
  BeforeAfterTransformation,
  TestimonialItem
} from '../types';

export const HERO_FACADE_IMAGE = "/assets/HERO.png";
export const ABOUT_GYM_IMAGE = "/assets/1.png";

export const UNITS_DATA = [
  {
    id: "unidade-hidraulica",
    name: "Unidade Hidráulica",
    street: "Rua Primeiro de Maio, 753",
    neighborhood: "Bairro Hidráulica / Vila Junção",
    cep: "96202-293",
    city: "Rio Grande - RS",
    badge: "Hidráulica",
    phone: "5553984377312",
    phoneDisplay: "(53) 98437-7312",
    hours: "Segunda a Sexta: 06h às 22h | Sábados: 08h às 12h",
    mapsUrl: "https://www.google.com/maps/place/Gustavo+L%C3%AAdo+Centro+De+Treinamento+F%C3%ADsico/data=!4m2!3m1!1s0x0:0xb9aae21456eb5e6e?sa=X&ved=1t:2428&ictx=111",
    embedMapUrl: "https://maps.google.com/maps?q=Gustavo+L%C3%AAdo+Centro+De+Treinamento+F%C3%ADsico,+Rua+Primeiro+de+Maio,+753,+Rio+Grande+-+RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "unidade-cassino",
    name: "Unidade Balneário Cassino",
    street: "Av. Rio Grande, 98",
    neighborhood: "Balneário Cassino",
    cep: "96207-000",
    city: "Rio Grande - RS",
    badge: "Cassino",
    phone: "5553999289890",
    phoneDisplay: "(53) 99928-9890",
    hours: "Segunda a Sexta: 06h às 21h | Sábados: 08h às 12h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Balneario+Cassino+Rio+Grande+RS",
    embedMapUrl: "https://maps.google.com/maps?q=Balneario+Cassino,+Rio+Grande+-+RS&t=&z=14&ie=UTF8&iwloc=&output=embed"
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: "diff-1",
    title: "Treinos Personalizados",
    description: "Planos prescritos de forma individualizada com base na sua avaliação física, rotina e objetivos.",
    iconName: "Dumbbell"
  },
  {
    id: "diff-2",
    title: "Professores Qualificados",
    description: "Equipe de especialistas com presença constante na sala de treino para corrigir postura e conduzir a execução.",
    iconName: "Award"
  },
  {
    id: "diff-3",
    title: "Ambiente Motivador",
    description: "Estrutura moderna e acolhedora, sem superlotação, focada no seu bem-estar e foco total.",
    iconName: "Zap"
  },
  {
    id: "diff-4",
    title: "Evolução Contínua",
    description: "Acompanhamento metrificado e reavaliações periódicas para garantir progresso seguro e constante.",
    iconName: "TrendingUp"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Musculação Orientada",
    description: "Treinamento resistido com acompanhamento individual para ganho de massa magra, força e definição.",
    iconName: "Dumbbell",
    highlights: ["Acompanhamento técnico 100%", "Foco em postura e segurança", "Progressão de carga calculada"]
  },
  {
    id: "serv-bike-studio",
    title: "Bike Studio",
    badge: "Unidade Cassino",
    description: "Aulas dinâmicas de ciclismo indoor com ritmo, música e alta queima calórica no Cassino.",
    iconName: "Bike",
    highlights: ["Studio exclusivo no Cassino", "Alta queima de calorias", "Acompanhamento ritmado"],
    videoUrl: "https://i.imgur.com/EUoryln.mp4",
    whatsappPhone: "5553999289890",
    whatsappDisplay: "(53) 99928-9890"
  },
  {
    id: "serv-beach-plus",
    title: "Funcional no Beach+",
    badge: "Esportes na Areia",
    description: "Treinamento funcional e modalidades na areia para condicionamento, agilidade e saúde ao ar livre.",
    iconName: "Sun",
    highlights: ["Arena de areia exclusiva", "Fortalecimento e agilidade", "Atividade dinâmica e motivadora"],
    videoUrl: "https://i.imgur.com/gKOswX0.mp4",
    whatsappPhone: "5553991883923",
    whatsappDisplay: "(53) 99188-3923"
  },
  {
    id: "serv-2",
    title: "Condicionamento Físico",
    description: "Treino funcional e metabólico para aumento da capacidade cardiorrespiratória e energia diária.",
    iconName: "Activity",
    highlights: ["Melhora da resistência diária", "Queima calórica otimizada", "Redução de fadiga"]
  },
  {
    id: "serv-3",
    title: "Avaliação Física Completa",
    description: "Análise antropométrica, postural e de composição corporal detalhada antes do seu protocolo.",
    iconName: "ClipboardCheck",
    highlights: ["Mapeamento de assimetrias", "Percentual de gordura e massa", "Metas reais e calculadas"]
  },
  {
    id: "serv-4",
    title: "Acompanhamento Contínuo",
    description: "Suporte constante, ajuste de fichas e estímulo diário dos professores para garantir sua evolução.",
    iconName: "ShieldCheck",
    highlights: ["Ajuste constante das séries", "Atendimento próximo e humano", "Monitoramento de resultados"]
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: "01",
    title: "Avaliação Física",
    description: "Mapeamos suas metas, histórico de saúde, composição corporal e mobilidade antes de elaborar a primeira série.",
    iconName: "FileSpreadsheet"
  },
  {
    stepNumber: "02",
    title: "Planejamento",
    description: "Criamos um plano de treino 100% sob medida para a sua rotina diária e capacidade de recuperação.",
    iconName: "Sliders"
  },
  {
    stepNumber: "03",
    title: "Execução Orientada",
    description: "Você treina com orientação técnica próxima em cada exercício para garantir o máximo estímulo sem lesões.",
    iconName: "Target"
  },
  {
    stepNumber: "04",
    title: "Evolução Metrificada",
    description: "Analisamos seus resultados em reavaliações regulares, ajustando o volume e a intensidade a cada ciclo.",
    iconName: "TrendingUp"
  }
];

export const FACILITY_PHOTOS: FacilityPhoto[] = [
  {
    id: "photo-1",
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=85",
    title: "Área Principal de Treinamento",
    category: "Musculação",
    description: "Espaço amplo e climatizado com aparelhos biomecânicos de alta precisão."
  },
  {
    id: "photo-2",
    url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85",
    title: "Bancada Premium de Halteres",
    category: "Halteres",
    description: "Jogos completos de halteres organizados para treinos livres com total conforto."
  },
  {
    id: "photo-3",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
    title: "Leg Press & Maquinário Articulado",
    category: "Equipamentos",
    description: "Aparelhos com padrão de movimento fisiológico para máximo recrutamento muscular."
  },
  {
    id: "photo-4",
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85",
    title: "Área Funcional & Peso Livre",
    category: "Funcional",
    description: "Piso emborrachado de alta absorção para treinos de agilidade, força e mobilidade."
  },
  {
    id: "photo-5",
    url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=85",
    title: "Setor de Cardio e Condicionamento",
    category: "Cardio",
    description: "Esteiras e ergométricas modernas para aquecimento e melhora do fôlego."
  },
  {
    id: "photo-6",
    url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85",
    title: "Sala de Avaliação e Consultoria",
    category: "Avaliação",
    description: "Espaço privativo para acompanhamento antropométrico e alinhamento de métricas."
  }
];

export const TRANSFORMATIONS_DATA: BeforeAfterTransformation[] = [
  {
    id: "trans-1",
    name: "Vagner Vitória",
    age: 38,
    period: "Evolução Contínua",
    goal: "Eliminação de Gordura & Performance",
    resultSummary: "De 123kg (35% gordura) para 94kg (20,3% gordura) com saúde e alta performance",
    beforeImage: "/assets/transformação2.png",
    afterImage: "/assets/transformação 1.png",
    testimonial: "Esse é nosso cliente e grande amigo @vagnersvitoria!\n\nVagner nos procurou em setembro de 2019 com 123kg e 35% de gordura e tinha o objetivo de eliminar o máximo dessa gordura (principalmente na região abdominal).\n\nRealizando um trabalho em conjunto com a @milenenutriesportiva, responsável pela orientação nutricional, tivemos um resultado excelente ao longo de 1 ano, atingindo 92kg. Nos últimos meses contamos com mais um profissional o @dr.alexandreprandini (médico do esporte) que contribuiu muito para melhorar ainda mais o resultado. Em abril de 2021 ele atingiu 88kg e 23,3% de gordura e agora está com 94kg e 20,3% de gordura.\n\nVagner é uma pessoa muito determinada que treina com muito foco e vontade, adora ser desafiado e sempre mostra que pode ir além, largou o sedentarismo e conquistou uma qualidade de vida muito maior. Hoje, além dos treinos de musculação, ele corre, pedala e joga padel.",
    stats: {
      weightChange: "-29.0 kg",
      bodyFatChange: "35% → 20,3%",
      muscleGain: "Alta Qualidade de Vida"
    }
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Eduardo Paulitsch",
    role: "Avaliação no Google Maps",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "O melhor centro de treinamento de Rio Grande. Ótimas instalações, equipamentos muito bem conservados e modernos, além disso a equipe toda é muito atenciosa e profissional. O público é diversificado, abrangendo todas as idades com propósito de manutenção corporal e cuidado com a saúde, em um clima bastante amigável e familiar.",
    duration: "Google Maps"
  },
  {
    id: "test-2",
    name: "Luis Felipe Rocha",
    role: "Avaliação no Google Maps",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "O espaço é amplo e profissionais maravilhosos. Frequento o espaço voltado para o muro de escalada que eles ofertam lá, o muro é novo com diversas agarras além de ter um lado com inclinação para dificulta os movimentos e outro reto para os iniciantes. Garanto a experiência. kamon climb!",
    duration: "Google Maps"
  },
  {
    id: "test-3",
    name: "Cilene Bicca Dias (#dicasdanutri)",
    role: "Avaliação no Google Maps",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Gustavo e equipe são maravilhosos. Os melhores treinos da minha vida foram com Gustavo. Estrutura top!! Padrão ouro!! Treino personalizado e com resultado garantido. Motivação a cada avaliação física.",
    duration: "Google Maps"
  },
  {
    id: "test-4",
    name: "Carmen Flora Pereira de Souza",
    role: "Avaliação no Google Maps",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "O centro de treinamento Gustavo Lêdo conta com um requisito primordial, quando tratamos da nossa saúde: Atenção profissional qualificada. O Gustavo, consegue dar a máxima atenção a cada aluno, como se estivéssemos com um personal só para nós, individualmente. Eu como cliente, me sinto em casa e muito bem tratada. Completamente atendida! Obrigada pelo carinho!",
    duration: "Google Maps"
  }
];

export const CONTACT_INFO = {
  phoneHidraulica: "(53) 98437-7312",
  phoneFormattedHidraulica: "5553984377312",
  phoneCassino: "(53) 99928-9890",
  phoneFormattedCassino: "5553999289890",
  phone: "(53) 98437-7312",
  phoneFormatted: "5553984377312",
  city: "Rio Grande - RS",
  address: "Unidade Hidráulica: Rua Primeiro de Maio, 753 | Unidade Cassino: Av. Rio Grande, 98",
  whatsappUrlHidraulica: "https://wa.me/5553984377312?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Unidade%20Hidr%C3%A1ulica.",
  whatsappUrlCassino: "https://wa.me/5553999289890?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Unidade%20Cassino.",
  whatsappUrl: "https://wa.me/5553984377312?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20f%C3%ADsica%20no%20Gustavo%20L%C3%AAdo%20CT.",
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com"
};

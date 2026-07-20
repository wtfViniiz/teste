import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";
import heroImg from "@assets/generated_images/hero.jpg";

export interface PortfolioItem {
  slug: string;
  title: string;
  sector: "Comercial" | "Industrial" | "Residencial" | "Hospitalar" | "Público";
  location: string;
  builtArea: string;
  year: string;
  client: string;
  scope: string;
  challenges: string;
  solution: string;
  result: string;
  coverImage: string;
  galleryImages: string[];
  status: "Concluído" | "Em Andamento";
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: "centro-comercial-alpha",
    title: "Centro Comercial Alpha",
    sector: "Comercial",
    location: "Manaus - AM",
    builtArea: "1.800 m²",
    year: "2024",
    client: "Alpha Empreendimentos LTDA",
    scope: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac sapien sed ex scelerisque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    challenges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem ut nunc facilisis sodales. Vestibulum sed rhoncus lorem. Pellentesque eu dolor eu magna semper tempus.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum facilisis urna, in semper lorem sodales id. In accumsan tristique nibh, quis cursus turpis euismod non.",
    result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque egestas elementum. Ut cursus, lacus vel congue lacinia, elit metus lobortis sapien, eget facilisis odio magna ut nisi.",
    coverImage: heroImg.src,
    galleryImages: [heroImg.src, engCondominiosImg.src],
    status: "Concluído"
  },
  {
    slug: "galpao-logistico-beta",
    title: "Galpão Logístico Beta",
    sector: "Industrial",
    location: "Itacoatiara - AM",
    builtArea: "5.200 m²",
    year: "2023",
    client: "Logística Beta S/A",
    scope: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac sapien sed ex scelerisque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    challenges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem ut nunc facilisis sodales. Vestibulum sed rhoncus lorem. Pellentesque eu dolor eu magna semper tempus.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum facilisis urna, in semper lorem sodales id. In accumsan tristique nibh, quis cursus turpis euismod non.",
    result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque egestas elementum. Ut cursus, lacus vel congue lacinia, elit metus lobortis sapien, eget facilisis odio magna ut nisi.",
    coverImage: engPublicaImg.src,
    galleryImages: [engPublicaImg.src, heroImg.src],
    status: "Concluído"
  },
  {
    slug: "condominio-residencial-gamma",
    title: "Condomínio Residencial Gamma",
    sector: "Residencial",
    location: "Manaus - AM",
    builtArea: "800 m²",
    year: "2024",
    client: "Construtora Gamma S/A",
    scope: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac sapien sed ex scelerisque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    challenges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem ut nunc facilisis sodales. Vestibulum sed rhoncus lorem. Pellentesque eu dolor eu magna semper tempus.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum facilisis urna, in semper lorem sodales id. In accumsan tristique nibh, quis cursus turpis euismod non.",
    result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque egestas elementum. Ut cursus, lacus vel congue lacinia, elit metus lobortis sapien, eget facilisis odio magna ut nisi.",
    coverImage: engResidencialImg.src,
    galleryImages: [engResidencialImg.src, engCondominiosImg.src],
    status: "Em Andamento"
  },
  {
    slug: "unidade-clinica-delta",
    title: "Unidade Clínica Delta",
    sector: "Hospitalar",
    location: "Manacapuru - AM",
    builtArea: "1.200 m²",
    year: "2023",
    client: "Saúde Delta Participações",
    scope: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac sapien sed ex scelerisque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    challenges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem ut nunc facilisis sodales. Vestibulum sed rhoncus lorem. Pellentesque eu dolor eu magna semper tempus.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum facilisis urna, in semper lorem sodales id. In accumsan tristique nibh, quis cursus turpis euismod non.",
    result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque egestas elementum. Ut cursus, lacus vel congue lacinia, elit metus lobortis sapien, eget facilisis odio magna ut nisi.",
    coverImage: engPublicaImg.src,
    galleryImages: [engPublicaImg.src, engCondominiosImg.src],
    status: "Concluído"
  },
  {
    slug: "complexo-esportivo-epsilon",
    title: "Complexo Esportivo Epsilon",
    sector: "Público",
    location: "Amaturá - AM",
    builtArea: "2.500 m²",
    year: "2022",
    client: "Secretaria de Infraestrutura de Amaturá",
    scope: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac sapien sed ex scelerisque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    challenges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem ut nunc facilisis sodales. Vestibulum sed rhoncus lorem. Pellentesque eu dolor eu magna semper tempus.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum facilisis urna, in semper lorem sodales id. In accumsan tristique nibh, quis cursus turpis euismod non.",
    result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque egestas elementum. Ut cursus, lacus vel congue lacinia, elit metus lobortis sapien, eget facilisis odio magna ut nisi.",
    coverImage: engPublicaImg.src,
    galleryImages: [engPublicaImg.src, heroImg.src],
    status: "Concluído"
  }
];

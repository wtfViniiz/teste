"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import heroImg from "@assets/generated_images/hero.jpg";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";
import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";
import p1Img from "@assets/generated_images/team-placeholder-1.jpg";
import p2Img from "@assets/generated_images/team-placeholder-2.jpg";
import p3Img from "@assets/generated_images/team-placeholder-3.jpg";
import p4Img from "@assets/generated_images/team-placeholder-4.jpg";
import { ArrowRight, Building2, Home, Building, PackageSearch, CheckCircle2, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Hero } from "@/components/hero";

/* ───────── DATA ───────── */
const serviceAreas = [
  { href: "/atuacao/publica", icon: Building2, title: "Engenharia Pública", desc: "Obras para governos municipal, estadual e federal.", image: engPublicaImg.src },
  { href: "/atuacao/residencial", icon: Home, title: "Engenharia Residencial", desc: "Residências de alto padrão com excelência técnica.", image: engResidencialImg.src },
  { href: "/atuacao/condominios", icon: Building, title: "Eng. para Condomínios", desc: "Manutenção e reformas em edificações condominiais.", image: engCondominiosImg.src },
  { href: "/atuacao/materiais", icon: PackageSearch, title: "Fornecimento de Materiais", desc: "Insumos para órgãos públicos e clientes privados.", image: null },
];

const featuredProjects = [
  { id: 1, title: "Residência Nobre – Ponta Negra", quartos: 4, pavimentos: 2, area: 320, terreno: "15m", tag: "Mais Vendido", image: engResidencialImg.src },
  { id: 2, title: "Sobrado Família – Adrianópolis", quartos: 3, pavimentos: 2, area: 210, terreno: "10m", tag: "Residencial", image: engCondominiosImg.src },
  { id: 3, title: "Prédio residêncial - Tarumã", quartos: 5, pavimentos: 3, area: 680, terreno: "20m", tag: "Alto Padrão", image: engPublicaImg.src },
];

const team = [
  { name: "Valéria Rodrigues Lopes", role: "Diretoria Administrativa", image: p1Img.src },
  { name: "Welib Ferreira Santos", role: "Diretoria de Operações", image: p2Img.src },
  { name: "Josebarl Vieira", role: "Engenharia de Obras Públicas", image: p3Img.src },
  { name: "Kevin Ferreira", role: "Eng. Residencial e Condomínios", image: p4Img.src },
];

const clients = [
  "Hospital Militar de Área de Manaus",
  "CRO 12ª Região",
  "12º Btl. de Suprimentos",
  "Comando de Apoio da Aeronáutica",
  "BCom Sel",
  "GAAAE",
  "Pref. Municipal de Amaturá – AM",
  "Esgotec",
  "Paiva Construções",
  "Cond. Paradise River",
  "Cond. Marina Rio Belo",
];

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "150+", label: "Obras Entregues" },
  { value: "11+", label: "Clientes Institucionais" },
  { value: "4", label: "Áreas de Atuação" },
];

/* ───────── CONTACT FORM ───────── */

const REGEX = {
  nome: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,80}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  telefone: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
  mensagem: /^[\s\S]{10,}$/,
};

type FormField = "nome" | "empresa" | "email" | "telefone" | "area" | "mensagem";
type FormValues = Record<FormField, string>;
type FormErrors = Partial<Record<FormField, string>>;

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateField(field: FormField, value: string): string | undefined {
  switch (field) {
    case "nome":
      return REGEX.nome.test(value.trim()) ? undefined : "Informe o nome completo (somente letras)";
    case "email":
      return REGEX.email.test(value.trim()) ? undefined : "Informe um e-mail válido";
    case "telefone":
      return REGEX.telefone.test(value.trim()) ? undefined : "Formato esperado: (92) 99999-9999";
    case "area":
      return value ? undefined : "Selecione uma área de interesse";
    case "mensagem":
      return REGEX.mensagem.test(value) ? undefined : "Mensagem muito curta (mínimo 10 caracteres)";
    default:
      return undefined;
  }
}

function ContactSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [values, setValues] = useState<FormValues>({
    nome: "", empresa: "", email: "", telefone: "", area: "", mensagem: "",
  });

  const errors: FormErrors = {
    nome: validateField("nome", values.nome),
    email: validateField("email", values.email),
    telefone: validateField("telefone", values.telefone),
    area: validateField("area", values.area),
    mensagem: validateField("mensagem", values.mensagem),
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const handleChange = (field: FormField, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: FormField) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Marca todos os campos como tocados para mostrar erros
    setTouched({ nome: true, email: true, telefone: true, area: true, mensagem: true });
    if (hasErrors) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
      setValues({ nome: "", empresa: "", email: "", telefone: "", area: "", mensagem: "" });
      setTouched({});
    }, 1400);
  };

  const fieldClass = (field: FormField) => {
    const base = "w-full bg-white border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all";
    const hasError = touched[field] && errors[field];
    return hasError
      ? `${base} border-destructive focus:ring-destructive/30 focus:border-destructive`
      : `${base} border-border focus:ring-primary/40 focus:border-primary`;
  };

  return (
    <section id="contato" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Fale Conosco</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Vamos construir o seu projeto.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Nossa equipe técnica e comercial está pronta para apresentar soluções personalizadas para a sua demanda.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 border border-primary/20 p-3 rounded-sm text-primary shrink-0"><MapPin size={20} /></div>
                <div>
                  <p className="text-foreground font-semibold mb-0.5">Localização</p>
                  <p className="text-muted-foreground text-sm">Manaus, Amazonas – Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 border border-primary/20 p-3 rounded-sm text-primary shrink-0"><Phone size={20} /></div>
                <div>
                  <p className="text-foreground font-semibold mb-0.5">Telefone Comercial</p>
                  <p className="text-muted-foreground text-sm">+55 (92) 00000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 border border-primary/20 p-3 rounded-sm text-primary shrink-0"><Mail size={20} /></div>
                <div>
                  <p className="text-foreground font-semibold mb-0.5">E-mail</p>
                  <p className="text-muted-foreground text-sm">contato@vrlopes.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-50 border border-green-200 p-3 rounded-sm text-green-600 shrink-0"><MessageCircle size={20} /></div>
                <div>
                  <p className="text-foreground font-semibold mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/5592000000000" target="_blank" rel="noopener noreferrer"
                    className="text-green-600 text-sm hover:underline">(92) 00000-0000 – Atendimento imediato</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-border rounded-sm p-8 shadow-sm">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Nome completo *</label>
                  <input
                    type="text"
                    placeholder="Ex: João Silva"
                    value={values.nome}
                    onChange={(e) => handleChange("nome", e.target.value)}
                    onBlur={() => handleBlur("nome")}
                    className={fieldClass("nome")}
                  />
                  {touched.nome && errors.nome && (
                    <span className="text-destructive text-xs mt-0.5">{errors.nome}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Empresa / Órgão</label>
                  <input
                    type="text"
                    placeholder="Ex: Prefeitura de Manaus"
                    value={values.empresa}
                    onChange={(e) => handleChange("empresa", e.target.value)}
                    className="w-full bg-white border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">E-mail *</label>
                  <input
                    type="email"
                    placeholder="Ex: joao@email.com"
                    value={values.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={fieldClass("email")}
                  />
                  {touched.email && errors.email && (
                    <span className="text-destructive text-xs mt-0.5">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Telefone *</label>
                  <input
                    type="tel"
                    placeholder="Ex: (92) 99999-9999"
                    value={values.telefone}
                    onChange={(e) => handleChange("telefone", maskPhone(e.target.value))}
                    onBlur={() => handleBlur("telefone")}
                    className={fieldClass("telefone")}
                    maxLength={15}
                  />
                  {touched.telefone && errors.telefone && (
                    <span className="text-destructive text-xs mt-0.5">{errors.telefone}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Área de interesse *</label>
                <select
                  value={values.area}
                  onChange={(e) => handleChange("area", e.target.value)}
                  onBlur={() => handleBlur("area")}
                  className={fieldClass("area")}
                >
                  <option value="">Selecione uma área</option>
                  <option>Engenharia Pública</option>
                  <option>Engenharia Residencial</option>
                  <option>Engenharia para Condomínios</option>
                  <option>Fornecimento de Materiais</option>
                  <option>Outros</option>
                </select>
                {touched.area && errors.area && (
                  <span className="text-destructive text-xs mt-0.5">{errors.area}</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Mensagem *</label>
                <textarea
                  rows={4}
                  placeholder="Descreva sua demanda ou projeto..."
                  value={values.mensagem}
                  onChange={(e) => handleChange("mensagem", e.target.value)}
                  onBlur={() => handleBlur("mensagem")}
                  className={`${fieldClass("mensagem")} resize-none`}
                />
                {touched.mensagem && errors.mensagem && (
                  <span className="text-destructive text-xs mt-0.5">{errors.mensagem}</span>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-60 cursor-pointer"
              >
                {submitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 border rounded-sm overflow-hidden h-80 bg-muted shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127506.77660205218!2d-60.038435131923055!3d-3.0858169999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc000000001%3A0x88509abfb67243c2!2sManaus%2C%20AM!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização VR Lopes Engenharia"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

/* ───────── MAIN COMPONENT ───────── */
export function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Clientes Carrossel ── */}
      <section className="py-16 bg-background overflow-hidden border-b border-border/40">
        <div className="container mx-auto px-6 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">A confiança das melhores empresas e órgãos públicos da região</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground">Nossos Clientes</h2>
          </div>
        </div>

        {/* Marquee Row 1 */}
        <div className="relative w-full overflow-hidden mb-4">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="inline-flex items-center gap-3 bg-card border rounded-sm px-6 py-4 shrink-0 hover:border-primary/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-foreground font-medium text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Marquee Row 2 — reversed */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 whitespace-nowrap" style={{ animation: "marquee 25s linear infinite reverse" }}>
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="inline-flex items-center gap-3 bg-card border rounded-sm px-6 py-4 shrink-0 hover:border-primary/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary/50 shrink-0" />
                <span className="text-muted-foreground text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      {/* <section className="bg-primary py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-sm font-medium mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Sobre Teaser ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Nossa Essência</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Mais do que obras,<br />edificamos <span className="text-white border-b border-primary/50 font-bold">legados.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A VR Lopes LTDA une excelência técnica, inovação e responsabilidade social para entregar soluções completas nos setores público e privado. Acreditamos que engenharia vai além da construção de edificações: ela transforma cidades e cria oportunidades.
              </p>
              <Link href="/sobre" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Saiba mais sobre a empresa <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
              {[
                { title: "Missão", text: "Planejar, construir e transformar ambientes com excelência técnica, inovação e responsabilidade socioambiental." },
                { title: "Visão", text: "Ser reconhecida até 2035 como uma das principais empresas de engenharia da Região Norte." },
                { title: "Propósito", text: "Construir infraestrutura que transforma vidas e desenvolver pessoas capazes de transformar a sociedade." },
              ].map((item, i) => (
                <div key={i} className="bg-card border rounded-sm p-6 hover:border-primary/40 transition-colors">
                  <h3 className="font-display font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Áreas de Atuação ── */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Áreas de Atuação</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Especialidade em cada frente.</h2>
            <p className="text-muted-foreground text-lg">Equipes especializadas para cada segmento da construção civil.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, i) => (
              <motion.div key={area.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link href={area.href} className="group block bg-card border rounded-sm overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all h-full">
                  <div className="h-44 overflow-hidden relative bg-zinc-800">
                    {area.image ? (
                      <img src={area.image} alt={area.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                    ) : (
                      <div className="w-full h-full bg-[#0F172A] flex items-center justify-center"><area.icon size={64} className="text-white/10" /></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="bg-primary/20 border border-primary/40 p-2 rounded-sm inline-block text-primary"><area.icon size={20} /></div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{area.desc}</p>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Ver mais <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projetos em Destaque ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Portfólio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Projetos em Destaque</h2>
            </div>
            <Link href="/projetos" className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-sm font-semibold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((proj, i) => (
              <motion.div key={proj.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href="/projetos" className="group block bg-card border rounded-sm overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all">
                  <div className="relative h-56 overflow-hidden bg-zinc-200">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm">{proj.tag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors">{proj.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span>{proj.quartos} quartos</span>
                      <span>•</span>
                      <span>{proj.pavimentos} pav.</span>
                      <span>•</span>
                      <span>{proj.area} m²</span>
                      <span>•</span>
                      <span>Terreno {proj.terreno}</span>
                    </div>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver detalhes <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="py-24" style={{ background: "#0F172A" }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-white/50 font-bold uppercase tracking-widest text-xs">Nossos Valores</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Princípios que sustentam cada <span className="text-white border-b border-primary/50 font-bold">metro quadrado.</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Ética, excelência e responsabilidade em cada relação que estabelecemos.
              </p>
              <Link href="/sobre" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-sm font-semibold hover:bg-primary/80 transition-colors">
                Conheça nossa essência <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Ética e Transparência", "Excelência Técnica", "Segurança em Primeiro Lugar", "Cumprimento de Prazos", "Respeito ao Meio Ambiente", "Valorização das Pessoas", "Inovação Contínua", "Responsabilidade Social"].map((valor, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-sm">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{valor}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Liderança ── */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Corpo Diretivo</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Nossa Liderança</h2>
            <p className="text-muted-foreground text-lg">A equipe que transforma visão em obras concretas.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-sm overflow-hidden hover:border-primary/40 hover:shadow-md transition-all group text-center">
                <div className="h-56 overflow-hidden bg-zinc-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">{member.role}</p>
                  <h3 className="font-display font-bold text-foreground text-base">{member.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contato ── */}
      <ContactSection />
    </>
  );
}

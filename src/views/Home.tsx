import { useState } from "react";
import { Button } from "primereact/button";
import fotoPerfil from "../assets/perfil.jpeg";
import imagemQrCode from "../assets/projetos/qrcode.png";
import imagemConsultaTempo from "../assets/projetos/consultatempo.png";
import "../Css/Home.css";
import "../Css/SobreMim.css";
import "../Css/Tecnologias.css";
import "../Css/Projetos.css";

type Technology = {
  name: string;
  icon: string;
  colored?: boolean;
};

type Project = {
  name: string;
  description: string;
  image: string;
  url: string;
  technologies: Technology[];
};

const projects: Project[] = [
  {
    name: "QR Code para Contatos",
    description:
      "Sistema web para geração de QR Codes de contatos, permitindo informar dados pessoais e gerar um código para compartilhamento.",
    image: imagemQrCode,
    url: "https://qrcode-contato.vercel.app/",
    technologies: [
      {
        name: "React",
        icon: "devicon-react-original",
        colored: true,
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
        colored: true,
      },
      {
        name: "CSS",
        icon: "devicon-css3-plain",
        colored: true,
      },
    ],
  },
  {
    name: "Como está o tempo agora?",
    description:
      "Sistema web para consultar o tempo através da busca pelo nome da cidade desejada.",
    image: imagemConsultaTempo,
    url: "https://consulta-tempo-atual.vercel.app/",
    technologies: [
      {
        name: "React",
        icon: "devicon-react-original",
        colored: true,
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
        colored: true,
      },
      {
        name: "CSS",
        icon: "devicon-css3-plain",
        colored: true,
      },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={`Imagem do projeto ${project.name}`}
          className="project-image"
        />
      </div>

      <div className="project-card-content">
        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <div
              className="project-technology"
              key={`${project.name}-${technology.name}`}
            >
              <i
                className={`${technology.icon} ${
                  technology.colored ? "colored" : ""
                }`}
              ></i>

              <span>{technology.name}</span>
            </div>
          ))}
        </div>

        <Button
          label="Acessar projeto"
          icon="pi pi-external-link"
          className="project-access-button"
          onClick={() =>
            window.open(project.url, "_blank", "noopener,noreferrer")
          }
        />
      </div>
    </article>
  );
}

function Home() {
  const [viewMode, setViewMode] = useState<"gallery" | "list">("gallery");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  const previousProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const goToProject = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  const handleSlideTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-greeting">Olá, eu sou</span>
          <h1>
            Endrick <span>Nogueira</span>
          </h1>
          <h2>Desenvolvedor Full Stack</h2>
          <p>
            Desenvolvendo sistemas web modernos, eficientes e pensados para
            resolver problemas reais.
          </p>

          <div className="hero-actions">
            <Button
              label="Conheça meus projetos"
              className="hero-button hero-button-primary"
              onClick={() =>
                document.getElementById("projetos")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            />

            <Button
              className="hero-button hero-button-secondary"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/endricknogueira/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <i className="pi pi-linkedin"></i>
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>
      </section>
      {/* SOBRE MIM */}
      <section className="about" id="sobre">
        <div className="about-container">
          {/* ELEMENTO VISUAL */}
          <div className="about-visual">
            <div className="about-card">
              <div className="about-card-glow"></div>
              <div className="about-card-content">
                <div className="about-photo-wrapper">
                  <img
                    src={fotoPerfil}
                    alt="Foto de Endrick Nogueira"
                    className="about-photo"
                  />
                </div>
                <span>&lt;developer /&gt;</span>
                <strong>Full Stack</strong>
              </div>
            </div>
            <div className="about-decoration about-decoration-one"></div>
            <div className="about-decoration about-decoration-two"></div>
          </div>
          {/* CONTEÚDO */}
          <div className="about-content">
            <span className="section-label">SOBRE MIM</span>
            <h2>
              Transformando ideias em <span> sistemas.</span>
            </h2>
            <p>
              Sou desenvolvedor Full Stack apaixonado por tecnologia e pela
              criação de soluções digitais que realmente resolvem problemas.
            </p>
            <p>
              Gosto de trabalhar desde a construção da interface até as regras
              de negócio, APIs e banco de dados, buscando sempre desenvolver
              aplicações organizadas, eficientes e fáceis de manter.
            </p>
            <div className="about-highlights">
              <div className="about-highlight">
                <i className="pi pi-desktop"></i>
                <div>
                  <strong>Frontend</strong>
                  <span>Interfaces modernas</span>
                </div>
              </div>
              <div className="about-highlight">
                <i className="pi pi-server"></i>
                <div>
                  <strong>Backend</strong>
                  <span>APIs e regras de negócio</span>
                </div>
              </div>
              <div className="about-highlight">
                <i className="pi pi-database"></i>
                <div>
                  <strong>Dados</strong>
                  <span>Modelagem e persistência</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TECNOLOGIAS */}
      <section className="technologies" id="tecnologias">
        <div className="technologies-container">
          <div className="technologies-header">
            <span className="section-label">TECNOLOGIAS</span>

            <h2>
              Tecnologias e Ferramentas que utilizo para
              <span> transformar ideias em soluções.</span>
            </h2>

            <p>
              Tecnologias e ferramentas que fazem parte do meu dia a dia no
              desenvolvimento de sistemas web.
            </p>
          </div>

          <div className="technology-groups">
            {/* FRONTEND */}
            <div className="technology-group">
              <h3>Frontend</h3>

              <div className="technology-card">
                <div className="technology-item">
                  <i className="devicon-react-original colored"></i>
                  <span>React</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-typescript-plain colored"></i>
                  <span>TypeScript</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-bootstrap-plain colored"></i>
                  <span>Bootstrap</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-javascript-plain colored"></i>
                  <span>JavaScript</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-html5-plain colored"></i>
                  <span>HTML</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-css3-plain colored"></i>
                  <span>CSS</span>
                </div>
              </div>
            </div>

            {/* BACKEND */}
            <div className="technology-group">
              <h3>Backend</h3>

              <div className="technology-card">
                <div className="technology-item">
                  <i className="devicon-csharp-plain colored"></i>
                  <span>C#</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-dotnetcore-plain colored"></i>
                  <span>.NET</span>
                </div>

                <div className="technology-item">
                  <i className="pi pi-server technology-fallback-icon"></i>
                  <span>APIs REST</span>
                </div>
              </div>
            </div>

            {/* BANCO DE DADOS */}
            <div className="technology-group">
              <h3>Banco de Dados</h3>

              <div className="technology-card">
                <div className="technology-item">
                  <i className="devicon-microsoftsqlserver-plain colored"></i>
                  <span>SQL Server</span>
                </div>

                <div className="technology-item">
                  <i className="pi pi-database technology-fallback-icon"></i>
                  <span>Entity Framework</span>
                </div>
              </div>
            </div>

            {/* FERRAMENTAS */}
            <div className="technology-group">
              <h3>Ferramentas</h3>

              <div className="technology-card">
                <div className="technology-item">
                  <i className="devicon-git-plain colored"></i>
                  <span>Git</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-gitlab-plain colored"></i>
                  <span>GitLab</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-github-original"></i>
                  <span>GitHub</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-vscode-plain colored"></i>
                  <span>VS Code</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-visualstudio-plain colored"></i>
                  <span>Visual Studio</span>
                </div>

                <div className="technology-item">
                  <i className="pi pi-database technology-fallback-icon"></i>
                  <span>SSMS</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-swagger-plain colored"></i>
                  <span>Swagger</span>
                </div>

                <div className="technology-item">
                  <i className="devicon-figma-plain colored"></i>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJETOS */}
      <section className="projects" id="projetos">
        <div className="projects-container">
          {/* CABEÇALHO */}
          <div className="projects-header">
            <span className="section-label">PROJETOS</span>

            <h2>
              Projetos que transformam
              <span> ideias em soluções.</span>
            </h2>

            <p>
              Alguns dos projetos e aplicações que desenvolvi utilizando
              diferentes tecnologias e ferramentas.
            </p>
          </div>

          {/* CONTROLES */}
          <div className="projects-controls">
            <div className="projects-view-toggle">
              <button
                type="button"
                className={`projects-view-button ${
                  viewMode === "gallery" ? "active" : ""
                }`}
                onClick={() => setViewMode("gallery")}
                aria-label="Visualização em galeria"
                title="Galeria"
              >
                <i className="pi pi-th-large"></i>
              </button>

              <button
                type="button"
                className={`projects-view-button ${
                  viewMode === "list" ? "active" : ""
                }`}
                onClick={() => setViewMode("list")}
                aria-label="Visualização em lista"
                title="Lista"
              >
                <i className="pi pi-list"></i>
              </button>
            </div>
          </div>

          {/* GALERIA */}
          {viewMode === "gallery" && (
            <div className="projects-gallery">
              <button
                type="button"
                className="projects-arrow projects-arrow-left"
                onClick={previousProject}
                aria-label="Projeto anterior"
              >
                <i className="pi pi-chevron-left"></i>
              </button>

              <div className="projects-gallery-viewport">
                <div
                  className="projects-gallery-track"
                  onTransitionEnd={handleSlideTransitionEnd}
                >
                  {projects.map((project, index) => {
                    const isActive = index === currentSlide;

                    const previousIndex =
                      index === currentSlide - 1 ||
                      (currentSlide === 0 && index === projects.length - 1);

                    const nextIndex =
                      index === currentSlide + 1 ||
                      (currentSlide === projects.length - 1 && index === 0);

                    const position = isActive
                      ? "active"
                      : previousIndex
                        ? "previous"
                        : nextIndex
                          ? "next"
                          : "hidden";

                    return (
                      <div
                        key={project.name}
                        className={`project-slide ${position}`}
                      >
                        <ProjectCard project={project} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                className="projects-arrow projects-arrow-right"
                onClick={nextProject}
                aria-label="Próximo projeto"
              >
                <i className="pi pi-chevron-right"></i>
              </button>
            </div>
          )}

          {/* PAGINAÇÃO */}
          {viewMode === "gallery" && (
            <div className="projects-indicators">
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  type="button"
                  className={`projects-indicator ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => goToProject(index)}
                  aria-label={`Ir para ${project.name}`}
                />
              ))}
            </div>
          )}

          {/* LISTA */}
          {viewMode === "list" && (
            <div className="projects-list">
              <div className="projects-table-wrapper">
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Imagem</th>
                      <th>Projeto</th>
                      <th>Descrição</th>
                      <th>Tecnologias</th>
                      <th>Acesso</th>
                    </tr>
                  </thead>

                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.name}>
                        <td>
                          <div className="projects-table-image-wrapper">
                            <img
                              src={project.image}
                              alt={`Imagem do projeto ${project.name}`}
                              className="projects-table-image"
                            />
                          </div>
                        </td>

                        <td>
                          <strong>{project.name}</strong>
                        </td>

                        <td>
                          <p>{project.description}</p>
                        </td>

                        <td>
                          <div className="projects-table-technologies">
                            {project.technologies.map((technology) => (
                              <div
                                className="projects-table-technology"
                                key={`${project.name}-${technology.name}`}
                              >
                                <i
                                  className={`${technology.icon} ${
                                    technology.colored ? "colored" : ""
                                  }`}
                                ></i>

                                <span>{technology.name}</span>
                              </div>
                            ))}
                          </div>
                        </td>

                        <td>
                          <Button
                            icon="pi pi-external-link"
                            className="projects-table-button"
                            onClick={() =>
                              window.open(
                                project.url,
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            aria-label={`Acessar ${project.name}`}
                            tooltip="Acessar projeto"
                            tooltipOptions={{ position: "top" }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;

import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import {
  ArrowUpRight,
  ArrowLeft,
  Download,
  MessageCircle,
  Play,
  Palette,
  Sparkles,
  Mail,
  Video,
  PenTool,
  MonitorPlay,
  Layers,
  Briefcase,
  Image,
  Layout,
} from "lucide-react";

import "./App.css";

/* =========================================================
   DATA PORTFOLIO
   Ganti data di bawah dengan karya kamu sendiri
========================================================= */


const videoProjects = [
  {
    title: "Video Content 01",
    category: "Short Storytelling",
    image: "/images/video-1.png",
    driveId: "1x4hRI2gqqITNg4ar8XXNjhCC8v3V5R8L",
  },
  {
    title: "Video Content 02",
    category: "Educational Storytelling",
    image: "/images/video-2.png",
    driveId: "14gcrqdeRmVRD25vXatxM8MFCFkVNfvul",
  },
  {
    title: "Video Content 03",
    category: "Empathetic Storytelling",
    image: "/images/video-3.png",
    driveId: "1P9Mp8Cbb1JhVUI8kw6kgMuSFx6Tv0NeD",
  },
  {
    title: "Video Content 04",
    category: "Promotion Content",
    image: "/images/video-4.png",
    driveId: "1EF5fU2ABXKBTa9tHr7EC-NorRiuCziYI",
  },
  {
    title: "Video Content 05",
    category: "Empathetic Storytelling",
    image: "/images/video-5.png",
    driveId: "1TbKOD7EmjfjoDZ9zZ-x4inKQUwbeXrlA",
  },
  {
    title: "Video Content 06",
    category: "Creative Content",
    image: "/images/video-6.png",
    driveId: "1inawyjTfSF9wB5PbXVDI2za8lqLd2moU",
  },
];

const graphicProjects = [
  {
    title: "Graphic Design 01",
    category: "Instagram Carousel 1",
    image: "/images/design-1.png",
    driveId: "1Y3EKuz4DF_ZAzXJPdHM3i4HXSYiKuyko",
  },
  {
    title: "Graphic Design 02",
    category: "Instagram Carousel 2",
    image: "/images/design-2.png",
    driveId: "1IU9nGoGuz2v9qgqYCoz0VOabHzFxPA-j",
  },
  {
    title: "Graphic Design 03",
    category: "Instagram Carousel 3",
    image: "/images/design-3.png",
    driveId: "1cq08HJxZhRx17l-4IcBtFCjKHC1N-81U",
  },
  {
    title: "Graphic Design 04",
    category: "Marketing Material",
    image: "/images/design-4.png",
    driveId: "1SnJkBEJfDAUglRZ6UiDbPMqtJahHPR8J",
  },
  {
    title: "Graphic Design 05",
    category: "Information Carousel",
    image: "/images/design-5.jpg",
    driveId: "1fYoeMJNdkNG7q1DqC5oyFEg1KdOwfgpT",
  },
  {
    title: "Graphic Design 06",
    category: "Information Carousel",
    image: "/images/design-6.jpg",
    driveId: "1xUqzSc6yWtgedtpX95xVOWI2QJ33zPTj",
  },
];

const motionProjects = [
  {
    title: "Motion Graphic 01",
    category: "Motion Design",
    image: "/images/motion-1.png",
    driveId: "1O4CtX87OQTVwwvd5M1BFc-gVAxMCd-go",
  },
  {
    title: "Motion Graphic 02",
    category: "Logo Animation",
    image: "/images/motion-2.png",
    driveId: "1DxOpD5Hp3wTgIUsEEhqGC9YzLmWgrxkv",
  },
  {
    title: "Motion Graphic 03",
    category: "Bumper Animation",
    image: "/images/motion-3.png",
    driveId: "1-9W_lxtz21i1EbrskUUJgWmyMLDlyL6S",
  },
  {
    title: "Motion Graphic 04",
    category: "Social Media Motion",
    image: "/images/motion-4.png",
    driveId: "1lLFvny2K6pmfEG7I4Puvs5bxRk6vT9iq",
  },
  {
    title: "Motion Graphic 05",
    category: "Bumper Animation",
    image: "/images/motion-5.png",
    driveId: "1QeXE3QzDHhZV4tybDtqYupc1R9JGQwhV",
  },
  {
    title: "Motion Graphic 06",
    category: "Creative Motion",
    image: "/images/motion-6.png",
    driveId: "1Y1mfzApmfyXzGS1GgSfBNbdxlyBSPIWb",
  },
];

/* =========================================================
   SOFTWARE
========================================================= */


const software = [
  {
    name: "After Effects",
    icon: "/icons/after-effect.png",
  },
  {
    name: "Premiere Pro",
    icon: "/icons/premiere-pro.png",
  },
  {
    name: "CapCut",
    icon: "/icons/capcut.png",
  },
  {
    name: "CorelDRAW",
    icon: "/icons/coreldraw.png",
  },
  {
    name: "Microsoft Office",
    icon: "/icons/microsoft office.png",
  },
  {
    name: "Photoshop",
    icon: "/icons/photoshop.png",
  },
  {
    name: "Canva",
    icon: "/icons/canva.png",
  },
];


/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Muhammad Arya Bhekti
      </Link>

      <div className="nav-actions">
        <a
          href="/CV-Muhammad-Arya.pdf"
          download
          className="btn btn-secondary"
        >
          <Download size={17} />
          Download CV
        </a>

        <a
          href="https://wa.me/6285795035892"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <MessageCircle size={17} />
          Hubungi Saya
        </a>
      </div>
    </header>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}

        <section className="hero">
          <div className="hero-label">
            <span></span>
            PORTFOLIO
          </div>

          <h1>
            Content Creator
            <br />
            <span>& Graphic Designer.</span>
          </h1>

          <p>
            Kreator digital yang berfokus pada pembuatan konten visual yang menarik, komunikatif, dan relevan dengan kebutuhan brand maupun audiens juga menggunakan pendekatan empatis berdasarkan analisis data mendalam untuk mencapai target yang disepakati.
          </p>

          <div className="hero-meta">
            <span>Content Creation</span>
            <span>Graphic Design</span>
            <span>Motion Graphic</span>
          </div>
        </section>

        {/* PORTFOLIO CARDS */}

        <section className="portfolio-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SELECTED WORK</span>
              <h2>My Creative Work</h2>
            </div>

            
          </div>

          <div className="portfolio-grid">
            {/* VIDEO */}

            <PortfolioCard
              title="Video Content"
              description="Video konten yang dibuat untuk kebutuhan social media, campaign, promosi, dan komunikasi brand."
              image="/images/video-cover.png"
              icon={<Play size={20} />}
              link="/video-content"
            />

            {/* GRAPHIC */}

            <PortfolioCard
              title="Graphic Design"
              description="Berbagai karya visual untuk sosial media, materi promosi, branding, dan kebutuhan komunikasi visual."
              image="/images/design-cover.png"
              icon={<Palette size={20} />}
              link="/graphic-design"
            />

            {/* MOTION */}

            <PortfolioCard
              title="Motion Graphic"
              description="karya motion graphic berupa desain dan animasi untuk menyampaikan pesan secara visual."
              image="/images/motion-cover.png"
              icon={<Sparkles size={20} />}
              link="/motion-graphic"
            />
          </div>
        </section>

        {/* SOFTWARE */}

        <section className="software-section">
          <div className="section-heading center">
            <span className="eyebrow">TOOLS & SOFTWARE</span>
            <h2>Software I Use</h2>
            <p>
              Software yang saya kuasai dan biasa saya gunakan
              untuk memproses bahan editing menjadi hasil yang 
              bernilai jual. (Software dapat bertambah sewaktu-waktu
              sesuai kebutuhan yang diperlukan)
            </p>
          </div>

          <div className="software-grid">
            {software.map((item) => (
              <div className="software-item" key={item.name}>
                <div className="software-icon">
  <img
    src={item.icon}
    alt={`${item.name} logo`}
    className="software-icon-image"
  />
</div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}

        <section className="contact-section">
          <div>
            <span className="eyebrow">LET'S WORK TOGETHER</span>

            <h2>
              Interested in
              <br />
              working together?
            </h2>

            <p>
              Saya terbuka untuk kesempatan kerja, project kreatif, maupun
              kolaborasi yang berkaitan dengan content creation dan design.
            </p>
          </div>

          <a
            href="https://wa.me/6285795035892"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            <MessageCircle size={20} />
            Hubungi Saya
            <ArrowUpRight size={20} />
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   PORTFOLIO CARD
========================================================= */


function PortfolioCard({
  title,
  description,
  image,
  icon,
  link,
}) {
  return (
    <Link
      to={link}
      className="portfolio-card"
      aria-label={`Lihat portofolio ${title}`}
    >
      <div className="card-image">
        <img src={image} alt={title} />

        <div className="image-overlay">
          <span>{title}</span>
        </div>
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <h3>{title}</h3>

          <div className="card-icon">
            {icon}
          </div>
        </div>

        <p>{description}</p>

        <span className="view-more">
          Lihat lebih lanjut
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}


/* =========================================================
   PROJECT PAGE
========================================================= */


function ProjectPage({
  title,
  subtitle,
  projects,
}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const isVideoPage =
    title === "Video Content" || title === "Motion Graphic";

  return (
    <>
      <Navbar />

      <main className="project-page">
        <Link to="/" className="back-button">
          <ArrowLeft size={17} />
          Kembali ke portfolio
        </Link>

        <section className="project-header">
          <span className="eyebrow">PORTFOLIO</span>

          <h1>{title}</h1>

          <p>{subtitle}</p>
        </section>

        <section className="project-grid">
          {projects.map((project) => (
            <article
              className="project-item project-item-clickable"
              key={project.title}
              role="button"
              tabIndex={0}
              aria-label={`Buka ${project.title}`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-number">
                  {isVideoPage ? (
                    <Play size={20} />
                  ) : (
                    <ArrowUpRight size={20} />
                  )}
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <ArrowUpRight size={20} />
              </div>
            </article>
          ))}
        </section>
      </main>

      {selectedProject && (
        <div
          className="project-preview-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="project-preview-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-preview-header">
              <div>
                <span>{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
              </div>

              <button
                type="button"
                className="project-preview-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup pratinjau"
              >
                ×
              </button>
            </div>

            <div className="project-preview-media">
              {isVideoPage ? (
                <iframe
                  key={selectedProject.driveId}
                  src={`https://drive.google.com/file/d/${selectedProject.driveId}/preview`}
                  title={selectedProject.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
              )}
            </div>

            <div className="project-preview-footer">
              <p>
                {isVideoPage
                  ? "Putar karya melalui pemutar Google Drive."
                  : "Lihat desain atau buka file aslinya di Google Drive."}
              </p>

              <a
                href={`https://drive.google.com/file/d/${selectedProject.driveId}/view`}
                target="_blank"
                rel="noreferrer"
                className="project-drive-button"
                onClick={(event) => event.stopPropagation()}
              >
                Buka di Google Drive
                <ArrowUpRight size={17} />
              </a>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}


/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Muhammad Arya Bhekti</strong>
        <span>Content Creator & Graphic Designer</span>
      </div>

      <div className="footer-right">
        <a href="mailto:aryabhekti04@gmail.com">
          <Mail size={16} />
          Email
        </a>

        <span>© 2026</span>
      </div>
    </footer>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/video-content"
          element={
            <ProjectPage
              title="Video Content"
              subtitle="SKumpulan konten video yang saya kerjakan dalam berbagai kebutuhan komunikasi dan sosial media."
              projects={videoProjects}
            />
          }
        />

        <Route
          path="/graphic-design"
          element={
            <ProjectPage
              title="Graphic Design"
              subtitle="Kumpulan karya desain grafis yang saya kerjakan untuk kebutuhan visual, promosi, branding, dan social media."
              projects={graphicProjects}
            />
          }
        />

        <Route
          path="/motion-graphic"
          element={
            <ProjectPage
              title="Motion Graphic"
              subtitle="Kumpulan karya motion graphic yang menggabungkan desain visual dan animasi."
              projects={motionProjects}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
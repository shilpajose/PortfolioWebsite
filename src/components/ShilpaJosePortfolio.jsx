import { useState, useEffect, useRef } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────
const SKILLS = [
  { name: "React JS", level: 95, color: "#61DAFB" },
  { name: "JavaScript ES6", level: 90, color: "#F7DF1E" },
  { name: "Node.js", level: 82, color: "#6ACC52" },
  { name: "TypeScript", level: 75, color: "#3178C6" },
  { name: "Redux", level: 88, color: "#764ABC" },
  { name: "MongoDB", level: 78, color: "#47A248" },
  { name: "Tailwind CSS", level: 85, color: "#38BDF8" },
  { name: "Context API", level: 87, color: "#FF6B6B" },
  { name: "Express", level: 76, color: "#FFFFFF" },
  { name: "MySQL", level: 70, color: "#F29111" },
  { name: "REST API", level: 88, color: "#FF9A3C" },
  { name: "Git", level: 80, color: "#F05032" },
];

const EXPERIENCE = [
  {
    role: "MERN Stack Developer",
    company: "Ayfiz Absolutes Pvt Ltd",
    period: "05/03/2026 – Present",
    type: "Full-time · Current",
    color: "#34D399",
    desc: "Building and maintaining multiple production websites for the Ayfiz group — including the IT services portal (ayfizinfo.tech), ATS platform (demo.ayfiz.com), Brand Studio (ayfizbrand.studio) and the parent company site (ayfiz.com) — using the full MERN stack.",
  },
  {
    role: "React Js Developer",
    company: "Proximagenesis Pvt Ltd",
    period: "03/2024 – 08/2025",
    type: "Full-time",
    color: "#A78BFA",
    desc: "Built production React applications including the JLR (jlr.com) e-commerce platform for Jaguar Land Rover using React JS and Context API.",
  },
  {
    role: "PHP Programmer",
    company: "Brahmanet IT Solutions Pvt. Ltd.",
    period: "07/2022 – 04/2023",
    type: "Full-time",
    color: "#34D399",
    desc: "Developed and maintained PHP-based web applications and backend systems for enterprise clients.",
  },
  {
    role: "Program Executive",
    company: "Infolks Pvt Ltd",
    period: "02/2017 – 12/2017",
    type: "Full-time",
    color: "#60A5FA",
    desc: "Managed digital programs and coordinated technical deliverables across multiple project tracks.",
  },
  {
    role: "ASP.NET Developer",
    company: "Web29",
    period: "08/2016 – 02/2017",
    type: "Full-time",
    color: "#FBBF24",
    desc: "Designed and developed ASP.NET web applications, building dynamic pages and backend APIs.",
  },
];

const PROJECTS = [
  {
    title: "Ayfiz Absolute",
    subtitle: "Parent Company Website",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://ayfiz.com/",
    desc: "Parent brand website for Ayfiz Absolute — delivering integrated business solutions across marketing, IT, ITES and trade.",
    icon: "🌐",
    color: "#34D399",
    featured: true,
    company: "Ayfiz Absolutes Pvt Ltd",
  },
  {
    title: "Ayfiz Infotech Solutions",
    subtitle: "IT & ITES Services Portal",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://ayfizinfo.tech/",
    desc: "IT & ITES services portal covering software development, AI integration, data analytics and digital transformation solutions.",
    icon: "💻",
    color: "#60A5FA",
    featured: true,
    company: "Ayfiz Absolutes Pvt Ltd",
  },
  {
    title: "Ayfiz Brand Studio",
    subtitle: "Branding & Digital Strategy",
    tech: ["React", "Express", "MongoDB"],
    link: "https://ayfizbrand.studio/",
    desc: "Creative branding agency site — strategy, logo design, brand identity, UI/UX and digital marketing, based in Kochi, Kerala.",
    icon: "🎨",
    color: "#F472B6",
    featured: true,
    company: "Ayfiz Absolutes Pvt Ltd",
  },
  {
    title: "Ayfiz ATS Platform",
    subtitle: "Applicant Tracking System",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://demo.ayfiz.com/",
    desc: "Full-featured Applicant Tracking System demo — streamlining recruitment workflows, candidate management and hiring pipelines.",
    icon: "🗂️",
    color: "#FBBF24",
    featured: true,
    company: "Ayfiz Absolutes Pvt Ltd",
  },
  {
    title: "JLR — Jaguar Land Rover",
    subtitle: "E-Commerce Platform",
    tech: ["React JS", "Context API"],
    link: "https://www.jlr.com",
    desc: "Online e-commerce site exclusively dedicated for selling Jaguar Land Rover, Range Rover and Discovery vehicles.",
    icon: "🚗",
    color: "#A78BFA",
    featured: true,
  },
  {
    title: "Placement Cell",
    subtitle: "MERN Full-Stack",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://placement-cell-react.vercel.app/",
    desc: "Full-stack project for managing and applying to placements under an institute, with a complete admin dashboard.",
    icon: "🎓",
    color: "#34D399",
  },
  {
    title: "Ecommerce Website",
    subtitle: "Freelance Project",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Tailwind"],
    link: "#",
    desc: "User-friendly e-commerce website for a retail store with full product, cart, and checkout flow.",
    icon: "🛒",
    color: "#F472B6",
    featured: true,
  },
  {
    title: "Resort Booking App",
    subtitle: "MERN Stack",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://resort-booking-front-end.vercel.app/",
    desc: "Complete resort booking platform with room browsing, availability checking, and reservation management.",
    icon: "🏝️",
    color: "#60A5FA",
  },
  {
    title: "Real-time Chat App",
    subtitle: "React-Redux",
    tech: ["React", "Redux", "TypeScript"],
    link: "#",
    desc: "Real-time chat application with live messaging, Redux state management and TypeScript type safety.",
    icon: "💬",
    color: "#FBBF24",
  },
  {
    title: "Netflix Clone",
    subtitle: "React JS",
    tech: ["React JS", "CSS3"],
    link: "https://react-net-flix-clone.vercel.app/",
    desc: "Netflix UI clone with movie browsing, trailers, and a responsive layout matching the original experience.",
    icon: "🎬",
    color: "#EF4444",
  },
  {
    title: "Library Book Store",
    subtitle: "MERN Stack",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://book-store-eta-two.vercel.app/",
    desc: "Book storage and management system with search, categorization, and borrowing workflow.",
    icon: "📚",
    color: "#A3E635",
  },
];

// ── Animated Particles Background ────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
        ctx.fill();
      });
      // draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(167,139,250,${0.12 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 0 }} />;
}

// ── Typewriter ────────────────────────────────────────────────────────────────
function Typewriter({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const full = texts[idx % texts.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < full.length) {
          setDisplayed(full.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx(i => i + 1);
        }
      }
    }, deleting ? 45 : 85);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);
  return (
    <span style={{ color: "#A78BFA" }}>
      {displayed}
      <span style={{ animation: "blink 1s step-end infinite", borderRight: "2px solid #A78BFA", marginLeft: 2 }} />
    </span>
  );
}

// ── Scroll-reveal hook ────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Skill Bar ─────────────────────────────────────────────────────────────────
function SkillBar({ skill, delay, visible }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#E2D9F3", fontFamily: "'DM Sans', sans-serif" }}>{skill.name}</span>
        <span style={{ fontSize: 12, color: skill.color }}>{skill.level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          borderRadius: 99,
          background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
          width: visible ? `${skill.level}%` : "0%",
          transition: `width 1s ease ${delay}s`,
          boxShadow: `0 0 8px ${skill.color}66`,
        }} />
      </div>
    </div>
  );
}

// ── Section Wrapper ───────────────────────────────────────────────────────────
function Section({ id, children, style }) {
  const [ref, visible] = useReveal();
  return (
    <section id={id} ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
      padding: "80px 0",
      ...style,
    }}>
      {children}
    </section>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function ShilpaPortfolio() {
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveNav(s); break; }
      }
    };
    const onMouse = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouse);
    return () => { window.removeEventListener("scroll", onMouse); window.removeEventListener("scroll", onScroll); };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <div style={{ background: "#0A0613", minHeight: "100vh", color: "#fff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0613; }
        ::-webkit-scrollbar-thumb { background: #A78BFA; border-radius: 99px; }
        html { scroll-behavior: smooth; }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px #A78BFA44; } 50% { box-shadow: 0 0 50px #A78BFA88; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .nav-link { cursor: pointer; font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; padding: 6px 0; transition: color 0.3s; position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; height: 1px; width: 0; background: #A78BFA; transition: width 0.3s; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active { color: #A78BFA; }
        .nav-link:hover { color: #A78BFA; }
        .glass-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(12px); border-radius: 16px; transition: all 0.3s ease; }
        .glass-card:hover { background: rgba(167,139,250,0.06); border-color: rgba(167,139,250,0.25); transform: translateY(-4px); }
        .btn-primary { background: linear-gradient(135deg, #7C3AED, #A78BFA); border: none; color: #fff; padding: 13px 32px; border-radius: 50px; font-weight: 600; cursor: pointer; font-size: 14px; letter-spacing: 0.04em; transition: all 0.3s; font-family: 'DM Sans', sans-serif; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(124,58,237,0.4); }
        .btn-outline { background: transparent; border: 1px solid rgba(167,139,250,0.5); color: #A78BFA; padding: 13px 32px; border-radius: 50px; font-weight: 500; cursor: pointer; font-size: 14px; letter-spacing: 0.04em; transition: all 0.3s; font-family: 'DM Sans', sans-serif; }
        .btn-outline:hover { background: rgba(167,139,250,0.1); border-color: #A78BFA; transform: translateY(-2px); }
        .skill-chip { display: inline-block; padding: 5px 14px; border-radius: 99px; font-size: 12px; font-weight: 500; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.04); transition: all 0.2s; }
        .skill-chip:hover { border-color: rgba(167,139,250,0.5); background: rgba(167,139,250,0.1); color: #A78BFA; }
        .project-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; overflow: hidden; transition: all 0.4s cubic-bezier(0.23,1,0.32,1); cursor: pointer; }
        .project-card:hover { transform: translateY(-8px) scale(1.01); border-color: rgba(167,139,250,0.3); box-shadow: 0 24px 60px rgba(0,0,0,0.4); }
        .project-card .overlay { opacity: 0; transition: opacity 0.3s; }
        .project-card:hover .overlay { opacity: 1; }
        .floating { animation: float 4s ease-in-out infinite; }
        .cursor-dot { width: 8px; height: 8px; background: #A78BFA; border-radius: 50%; position: fixed; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); transition: transform 0.1s; }
        .cursor-ring { width: 36px; height: 36px; border: 1.5px solid rgba(167,139,250,0.5); border-radius: 50%; position: fixed; pointer-events: none; z-index: 9998; transform: translate(-50%, -50%); transition: all 0.15s ease; }
        .section-title { font-family: 'Clash Display', sans-serif; font-size: clamp(32px, 5vw, 52px); font-weight: 700; letter-spacing: -0.02em; }
        .gradient-text { background: linear-gradient(135deg, #fff 0%, #A78BFA 50%, #60A5FA 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .tag-gradient { background: linear-gradient(135deg, #7C3AED22, #A78BFA22); border: 1px solid rgba(167,139,250,0.3); color: #C4B5FD; padding: 4px 12px; border-radius: 99px; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; display: inline-block; }
        input, textarea { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: #fff; padding: 14px 18px; width: 100%; font-family: 'DM Sans', sans-serif; font-size: 14px; outline: none; transition: border-color 0.3s; resize: none; }
        input:focus, textarea:focus { border-color: rgba(167,139,250,0.6); box-shadow: 0 0 0 3px rgba(167,139,250,0.1); }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.3); }
        @media (max-width: 768px) { .hide-mobile { display: none !important; } .mobile-menu { display: flex !important; } }
        .mobile-menu { display: none; }
      `}</style>

      {/* Custom Cursor */}
      <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y, transform: hovered ? "translate(-50%,-50%) scale(2)" : "translate(-50%,-50%)" }} />
      <div className="cursor-ring" style={{ left: cursor.x, top: cursor.y, width: hovered ? 50 : 36, height: hovered ? 50 : 36 }} />

      <ParticleField />

      {/* Ambient glow orbs */}
      <div style={{ position: "fixed", top: "20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "20%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 5%",
        background: scrolled ? "rgba(10,6,19,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em" }}>
          <span className="gradient-text">SJ</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, fontWeight: 400, marginLeft: 8, fontFamily: "'DM Sans', sans-serif" }}>Portfolio</span>
        </div>
        <div className="hide-mobile" style={{ display: "flex", gap: 32 }}>
          {navLinks.map(l => (
            <span key={l} className={`nav-link ${activeNav === l ? "active" : ""}`}
              style={{ color: activeNav === l ? "#A78BFA" : "rgba(255,255,255,0.6)" }}
              onClick={() => scrollTo(l)}>{l}</span>
          ))}
        </div>
        <button className="btn-primary hide-mobile" style={{ padding: "9px 22px", fontSize: 13 }} onClick={() => scrollTo("contact")}>
          Hire Me ✦
        </button>
        {/* Mobile hamburger */}
        <button className="mobile-menu" onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", flexDirection: "column", gap: 5 }}>
          {[0, 1, 2].map(i => <div key={i} style={{ width: 24, height: 2, background: menuOpen && i === 1 ? "transparent" : "#A78BFA", transition: "all 0.3s", transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "") : "" }} />)}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, zIndex: 99, background: "rgba(10,6,19,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 5%" }}>
          {navLinks.map(l => (
            <div key={l} onClick={() => scrollTo(l)} style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", color: activeNav === l ? "#A78BFA" : "rgba(255,255,255,0.7)", textTransform: "uppercase", fontSize: 13, letterSpacing: "0.08em", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 5%", paddingTop: 100 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
            <div>
              <div className="tag-gradient" style={{ marginBottom: 24 }}>✦ Available for Opportunities</div>
              <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>
                Hi, I'm<br />
                <span className="gradient-text">Shilpa Jose</span>
              </h1>
              <div style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 500, marginBottom: 20, color: "rgba(255,255,255,0.85)", minHeight: 36 }}>
                <Typewriter texts={["React Developer", "MERN Developer", "Freelance Dev", "UI/UX Enthusiast"]} />
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.5)", maxWidth: 520, marginBottom: 40 }}>
                Crafting high-performance web applications with modern React, Node.js and MongoDB. From Ernakulam, building digital products that people love.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
                <button className="btn-primary" onClick={() => scrollTo("projects")} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                  View My Work ↓
                </button>
                <button className="btn-outline" onClick={() => scrollTo("contact")}>Get in Touch</button>
              </div>
              <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                {[
                  { label: "Years Exp", value: "4+" },
                  { label: "Projects", value: "14+" },
                  { label: "Technologies", value: "15+" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 28, fontWeight: 700, color: "#A78BFA" }}>{value}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Avatar / visual */}
            <div className="hide-mobile" style={{ position: "relative" }}>
              <div className="floating" style={{ width: 280, height: 280, position: "relative" }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(135deg, #7C3AED33, #A78BFA22)", border: "1px solid rgba(167,139,250,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 100, animation: "pulse-glow 3s ease-in-out infinite" }}>
                  👩‍💻
                </div>
                {/* Orbiting tech badges */}
                {[
                  { label: "React", angle: 20, dist: 130, color: "#61DAFB" },
                  { label: "Node", angle: 120, dist: 130, color: "#6ACC52" },
                  { label: "Redux", angle: 240, dist: 130, color: "#764ABC" },
                  { label: "TS", angle: 300, dist: 120, color: "#3178C6" },
                  { label: "MongoDB", angle: 60, dist: 110, color: "#4DB33D" },
                  { label: "Tailwind", angle: 180, dist: 120, color: "#38BDF8" },
                  { label: "Express", angle: 270, dist: 100, color: "#38BDF8" },
                  { label: "MERN", angle: 330, dist: 140, color: "#A78BFA" },
                  { label: "UI/UX", angle: 90, dist: 100, color: "#F472B6" },
                  { label: "Javascript", angle: 210, dist: 90, color: "#FBBF24" },
                ].map(({ label, angle, dist, color }) => (
                  <div key={label} style={{
                    position: "absolute",
                    left: "50%", top: "50%",
                    transform: `rotate(${angle}deg) translateX(${dist}px) rotate(-${angle}deg)`,
                    background: "rgba(10,6,19,0.9)",
                    border: `1px solid ${color}44`,
                    borderRadius: 99,
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 700,
                    color,
                    letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                  }}>{label}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */} 
        <Section id="about">
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
            <div style={{ marginBottom: 16 }}><span className="tag-gradient">About Me</span></div>
            <h2 className="section-title" style={{ marginBottom: 48 }}>
              A developer who <span className="gradient-text">builds things</span>
            </h2>
            <div className="about-grid">
              <div>
                <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
                  I'm a React Developer based in Ernakulam, India with a strong foundation in full-stack web development.
                  I hold an MCA from Karunya University and a MERN Stack certification from Luminar Technolab, Kochi.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.6)", marginBottom: 32 }}>
                  Most recently, I worked at Proximagenesis Pvt Ltd on the JLR (Jaguar Land Rover) e-commerce platform —
                  a large-scale React application used by car buyers worldwide. I'm passionate about clean code,
                  beautiful interfaces, and experiences that feel effortless.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["React JS", "Node.js", "MongoDB", "TypeScript", "Redux", "Tailwind"].map(s => (
                    <span key={s} className="skill-chip" style={{ color: "rgba(255,255,255,0.7)" }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "🎓", title: "MCA — Karunya University", sub: "2014 – 2016, Coimbatore" },
                  { icon: "⚡", title: "MERN Stack — Luminar Technolab", sub: "2023 – 2024, Kochi" },
                  { icon: "📍", title: "Based in Ernakulam, India", sub: "Open to remote & hybrid" },
                  { icon: "🔗", title: "LinkedIn", sub: "linkedin.com/in/shilpajose-624792230" },
                ].map(({ icon, title, sub }) => (
                  <div key={title} className="glass-card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ fontSize: 24, flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#E2D9F3" }}>{title}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── SKILLS ── */}
        <Section id="skills">
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
            <div style={{ marginBottom: 16 }}><span className="tag-gradient">Skills</span></div>
            <h2 className="section-title" style={{ marginBottom: 48 }}>My <span className="gradient-text">Tech Stack</span></h2>
            <SkillsGrid />
          </div>
        </Section>

        {/* ── EXPERIENCE ── */}
        <Section id="experience">
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
            <div style={{ marginBottom: 16 }}><span className="tag-gradient">Experience</span></div>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Work <span className="gradient-text">History</span></h2>
            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, rgba(167,139,250,0.3), transparent)", display: "none" }} className="hide-mobile" />
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="glass-card" style={{ padding: "24px 28px", borderLeft: `3px solid ${exp.color}44`, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: "100%", background: `linear-gradient(to left, ${exp.color}08, transparent)`, pointerEvents: "none" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                      <div>
                        <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{exp.role}</div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: exp.color }}>{exp.company}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.06)", padding: "4px 12px", borderRadius: 99 }}>{exp.period}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>{exp.type}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── PROJECTS ── */}
        <Section id="projects">
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
            <div style={{ marginBottom: 16 }}><span className="tag-gradient">Projects</span></div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Selected <span className="gradient-text">Work</span></h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginBottom: 48 }}>Things I've built that I'm proud of</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {PROJECTS.map((p, i) => (
                <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="project-card" style={{ padding: "28px", height: "100%", borderTop: `2px solid ${p.color}33`, position: "relative" }}>
                    <div style={{ position: "absolute", top: 16, right: 16, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                      {p.featured && <span style={{ background: `${p.color}22`, border: `1px solid ${p.color}44`, color: p.color, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99, letterSpacing: "0.06em" }}>FEATURED</span>}
                      {p.company && <span style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)", color: "#34D399", fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 99, letterSpacing: "0.04em" }}>@ {p.company}</span>}
                    </div>
                    <div className="overlay" style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${p.color}08, transparent)`, borderRadius: 20, pointerEvents: "none" }} />
                    <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                    <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: p.color, fontWeight: 500, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.subtitle}</div>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.tech.map(t => (
                        <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ marginTop: 16, fontSize: 13, color: p.color, display: "flex", alignItems: "center", gap: 4 }}>
                      View Project <span style={{ transition: "transform 0.2s" }}>→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* ── CONTACT ── */}
        <Section id="contact">
          <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 5%", textAlign: "center" }}>
            <div style={{ marginBottom: 16 }}><span className="tag-gradient">Contact</span></div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Let's <span className="gradient-text">Work Together</span></h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginBottom: 40, lineHeight: 1.8 }}>
              Have a project in mind or just want to chat? I'm always open to new opportunities and interesting ideas.
            </p>
            {/* <div className="glass-card" style={{ padding: "40px", textAlign: "left" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 8, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>Name</label>
                  <input placeholder="Your name" />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 8, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</label>
                  <input placeholder="your@email.com" type="email" />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 8, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>Subject</label>
                <input placeholder="What's it about?" />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 8, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." />
              </div>
              <button className="btn-primary" style={{ width: "100%", padding: "15px" }}>Send Message ✦</button>
            </div> */}
            <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              {[
                { icon: "✉️", label: "shilpajm05@gmail.com", href: "mailto:shilpajm05@gmail.com" },
                { icon: "📞", label: "9526267756", href: "tel:9526267756" },
                { icon: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/shilpajose-624792230/", target: "_blank" },
              ].map(({ icon, label, href, target }) => (
                <a key={label} href={href} target={target} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#A78BFA"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "30px 5%", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            Designed & built by <span style={{ color: "#A78BFA" }}>Shilpa Jose</span> · {new Date().getFullYear()}
          </div>
        </footer>

      </div>
    </div>
  );
}

// ── Skills grid component (needs useReveal inside) ────────────────────────────
function SkillsGrid() {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
      {SKILLS.map((skill, i) => (
        <SkillBar key={skill.name} skill={skill} delay={i * 0.06} visible={visible} />
      ))}
    </div>
  );
}

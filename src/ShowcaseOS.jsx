import React, { useState, useEffect } from 'react';
import {
  Search,
  Award,
  Star,
  Users,
  TrendingUp,
  ExternalLink,
  Copy,
  CheckCircle,
  Clock,
  MapPin,
  Github,
  Globe,
  Heart,
  Eye,
  Zap,
  Trophy,
  ArrowUp,
  ChevronRight,
  Plus,
  Shield,
  Layers,
  Code2,
  Cloud,
  Cpu,
  Palette,
  BookOpen,
  Filter,
} from 'lucide-react';

// Mock data
const CURRENT_USER = {
  name: 'Arjun Krishnamurthy',
  handle: '@arjun.k',
  headline: 'Full-Stack Developer & ML Enthusiast',
  college: 'PSG College of Technology',
  degree: 'B.E. Computer Science • Class of 2025',
  location: 'Coimbatore, Tamil Nadu',
  avatar_initials: 'AK',
  avatar_color: '#4F46E5',
  bio:
    'I build things that work. Passionate about React, Python, and making machine learning actually useful. Open source contributor. 3x hackathon winner.',
  profile_views: '3.4k',
  endorsements: 89,
  showcase_score: 94,
  top_skill: 'React',
  open_to: ['Internships', 'Hackathons', 'Collaborations'],
  links: { github: 'github.com/arjunk', portfolio: 'arjunk.dev' },
};

const CERTIFICATES = [
  { id: 1, title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', issued: 'March 2024', expires: 'March 2027', category: 'Cloud', level: 'Foundation', credential_id: 'AWS-CPF-2024-AR891', verified: true, issuer_color: '#FF9900', skills_unlocked: ['EC2', 'S3', 'IAM', 'VPC'], endorsements: 12 },
  { id: 2, title: 'TensorFlow Developer Certificate', issuer: 'Google', issued: 'January 2024', expires: 'January 2026', category: 'AI/ML', level: 'Professional', credential_id: 'TF-DEV-GG-10234', verified: true, issuer_color: '#4285F4', skills_unlocked: ['CNNs', 'NLP', 'Model Deployment', 'Keras'], endorsements: 24 },
  { id: 3, title: 'React — The Complete Guide', issuer: 'Udemy', issued: 'November 2023', expires: null, category: 'Web Dev', level: 'Advanced', credential_id: 'UC-REACT-ADV-77821', verified: true, issuer_color: '#A435F0', skills_unlocked: ['Hooks', 'Redux', 'React Query', 'Testing'], endorsements: 18 },
  { id: 4, title: 'Data Structures & Algorithms', issuer: 'Coursera × Stanford', issued: 'October 2023', expires: null, category: 'CS Fundamentals', level: 'Intermediate', credential_id: 'COUR-DSA-STF-9982', verified: true, issuer_color: '#0056D2', skills_unlocked: ['Graphs', 'Dynamic Programming', 'Trees', 'Sorting'], endorsements: 31 },
  { id: 5, title: 'GitHub Actions CI/CD', issuer: 'GitHub', issued: 'September 2023', expires: null, category: 'DevOps', level: 'Intermediate', credential_id: 'GH-CICD-2023-5541', verified: true, issuer_color: '#24292F', skills_unlocked: ['Pipelines', 'Docker', 'Automated Testing'], endorsements: 9 },
  { id: 6, title: 'UI/UX Design Fundamentals', issuer: 'IDF', issued: 'August 2023', expires: null, category: 'Design', level: 'Foundation', credential_id: 'IDF-UIUX-7710', verified: false, issuer_color: '#E84393', skills_unlocked: ['Figma', 'Wireframing', 'User Research'], endorsements: 7 },
];

const SKILLS = [
  { name: 'React', proficiency: 92, endorsements: 34, category: 'Frontend', color: '#61DAFB', proof: ['React cert', '3 projects'] },
  { name: 'Python', proficiency: 88, endorsements: 41, category: 'Language', color: '#3776AB', proof: ['TF cert', 'ML projects'] },
  { name: 'Machine Learning', proficiency: 76, endorsements: 28, category: 'AI/ML', color: '#FF6F00', proof: ['TF Developer cert'] },
  { name: 'AWS', proficiency: 68, endorsements: 19, category: 'Cloud', color: '#FF9900', proof: ['AWS cert'] },
  { name: 'Node.js', proficiency: 74, endorsements: 22, category: 'Backend', color: '#339933', proof: ['2 live projects'] },
  { name: 'Docker', proficiency: 58, endorsements: 11, category: 'DevOps', color: '#2496ED', proof: ['GitHub Actions cert'] },
  { name: 'SQL', proficiency: 81, endorsements: 17, category: 'Database', color: '#336791', proof: ['Academic projects'] },
  { name: 'Figma', proficiency: 62, endorsements: 9, category: 'Design', color: '#F24E1E', proof: ['IDF cert'] },
];

const PROJECTS = [
  { id: 1, title: 'MediRoute', tagline: 'AI-powered rural healthcare routing', description: 'Built an ML model to optimize healthcare worker routes in rural Tamil Nadu, reducing travel time by 40%.', tech: ['Python', 'Flask', 'React', 'TensorFlow', 'Google Maps API'], status: 'Live', award: '1st Place — Smart India Hackathon 2024', award_prize: '₹1,00,000', views: 892, likes: 67, github: 'github.com/arjunk/mediroute', highlight_color: '#F97316' },
  { id: 2, title: 'GitPulse', tagline: 'GitHub analytics dashboard for teams', description: 'Real-time GitHub activity tracker with contribution heatmaps, PR analysis, and team velocity metrics.', tech: ['React', 'Node.js', 'GitHub API', 'Chart.js', 'PostgreSQL'], status: 'Open Source', award: null, views: 1243, likes: 104, github: 'github.com/arjunk/gitpulse', highlight_color: '#4F46E5' },
  { id: 3, title: 'CampusLens', tagline: 'Face-attendance for college classrooms', description: 'Automated attendance using face recognition, reducing manual marking time from 10 minutes to 8 seconds.', tech: ['Python', 'OpenCV', 'FastAPI', 'React', 'SQLite'], status: 'Deployed', award: null, views: 654, likes: 48, github: 'github.com/arjunk/campuslens', highlight_color: '#10B981' },
];

const DISCOVER_FEED = [
  { name: 'Priya Venkatesh', handle: '@priya.v', initials: 'PV', college: 'BITS Pilani', headline: 'Backend Engineer + Open Source', top_skills: ['Go', 'Kubernetes', 'Rust'], certs: 8, endorsements: 112, showcase_score: 97, color: '#06B6D4' },
  { name: 'Rahul Sharma', handle: '@rahul.s', initials: 'RS', college: 'IIT Madras', headline: 'ML Research + Competitive Programmer', top_skills: ['Python', 'PyTorch', 'C++'], certs: 11, endorsements: 203, showcase_score: 99, color: '#F97316' },
  { name: 'Meera Nair', handle: '@meera.n', initials: 'MN', college: 'NIT Trichy', headline: 'Full-Stack + Hackathon Addict', top_skills: ['React', 'Django', 'AWS'], certs: 6, endorsements: 78, showcase_score: 88, color: '#4F46E5' },
  { name: 'Karthik Rajan', handle: '@karthik.r', initials: 'KR', college: 'PSG Tech', headline: 'Cloud Architect in Training', top_skills: ['AWS', 'Azure', 'Terraform'], certs: 7, endorsements: 91, showcase_score: 91, color: '#FF9900' },
  { name: 'Ananya Bose', handle: '@ananya.b', initials: 'AB', college: 'IIT Kharagpur', headline: 'UI/UX + Front-end Dev', top_skills: ['Figma', 'React', 'CSS'], certs: 5, endorsements: 66, showcase_score: 85, color: '#F24E1E' },
  { name: 'Vikram Singh', handle: '@vikram.s', initials: 'VS', college: 'BITS Pilani', headline: 'Blockchain & Web3 Developer', top_skills: ['Solidity', 'Web3.js', 'React'], certs: 9, endorsements: 134, showcase_score: 95, color: '#8B5CF6' },
];

const RANKINGS = [
  { rank: 1, name: 'Rahul Sharma', college: 'IIT Madras', score: 99, certs: 11, top_skill: 'Python', badge: '🏆' },
  { rank: 2, name: 'Priya Venkatesh', college: 'BITS Pilani', score: 97, certs: 8, top_skill: 'Go', badge: '🥈' },
  { rank: 3, name: 'Divya Menon', college: 'IIT Madras', score: 96, certs: 10, top_skill: 'ML', badge: '🥉' },
  { rank: 4, name: 'Vikram Singh', college: 'BITS Pilani', score: 95, certs: 9, top_skill: 'Solidity', badge: null },
  { rank: 5, name: 'Kavya Reddy', college: 'IIT Bombay', score: 93, certs: 8, top_skill: 'Java', badge: null },
  { rank: 6, name: 'Karthik Rajan', college: 'PSG Tech', score: 91, certs: 7, top_skill: 'AWS', badge: null },
  { rank: 7, name: 'Sneha Pillai', college: 'IIT Delhi', score: 90, certs: 9, top_skill: 'DevOps', badge: null },
  { rank: 8, name: 'Aditya Mehta', college: 'NIT Warangal', score: 89, certs: 7, top_skill: 'React', badge: null },
  { rank: 14, name: 'Arjun Krishnamurthy', college: 'PSG Tech', score: 94, certs: 6, top_skill: 'React', badge: null, is_you: true },
];

// Skill node positions for constellation (x%, y%)
const CONSTELLATION_NODES = [
  { name: 'React', x: 20, y: 50 },
  { name: 'Node.js', x: 40, y: 30 },
  { name: 'Python', x: 60, y: 55 },
  { name: 'Machine Learning', x: 75, y: 35 },
  { name: 'AWS', x: 85, y: 70 },
  { name: 'Docker', x: 50, y: 80 },
  { name: 'SQL', x: 30, y: 80 },
  { name: 'Figma', x: 10, y: 25 },
];

const CONSTELLATION_EDGES = [
  ['React', 'Node.js'],
  ['Python', 'Machine Learning'],
  ['AWS', 'Docker'],
  ['React', 'Figma'],
  ['Node.js', 'SQL'],
  ['Python', 'Docker'],
  ['React', 'Node.js'],
  ['React', 'Python'],
];

export default function ShowcaseOS() {
  const [page, setPage] = useState('discover');
  const [activeSkill, setActiveSkill] = useState('React');
  const [certFilter, setCertFilter] = useState('All');
  const [endorsed, setEndorsed] = useState({});
  const [endorseCounts, setEndorseCounts] = useState(() => {
    const map = {};
    CERTIFICATES.forEach(c => (map[c.id] = c.endorsements));
    SKILLS.forEach(s => (map[s.name] = s.endorsements));
    return map;
  });
  const [copied, setCopied] = useState(null);
  const [toast, setToast] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (copied) {
      setToast('Copied!');
      const t = setTimeout(() => { setCopied(null); setToast(null); }, 2000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  function toggleEndorse(key) {
    setEndorsed(prev => {
      const next = { ...prev, [key]: !prev[key] };
      setEndorseCounts(ec => ({ ...ec, [key]: (ec[key] || 0) + (next[key] ? 1 : -1) }));
      return next;
    });
  }

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(text);
    } else {
      setToast('Copy unsupported');
      setTimeout(() => setToast(null), 1500);
    }
  }

  // small helper to stagger animation delays
  function delayStyle(i) {
    return { animationDelay: `${i * 0.02}s` };
  }

  // find skill data
  const activeSkillData = SKILLS.find(s => s.name === activeSkill) || SKILLS[0];

  return (
    <div className="min-h-screen font-outfit bg-[#FAFAF9] text-black relative overflow-x-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=Outfit:wght@300;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

:root{--indigo:#4F46E5;--coral:#F97316;}

/* dot-grid background pattern */
.bg-dotgrid{background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 20 20'><defs><pattern id='p' width='20' height='20' patternUnits='userSpaceOnUse'><rect width='20' height='20' fill='%23FAFAF9'/><circle cx='2' cy='2' r='0.7' fill='%23E5E5E5'/></pattern></defs><rect width='100%' height='100%' fill='url(%23p)'/></svg>")}

.font-fra{font-family: 'Fraunces', serif}
.font-outfit{font-family: 'Outfit', sans-serif}
.font-mono{font-family: 'JetBrains Mono', monospace}

@keyframes cascadeIn { from { transform: translateY(-12px); opacity:0 } to { transform: translateY(0); opacity:1 } }
@keyframes liftCard { from { box-shadow: 0 6px 18px rgba(0,0,0,0.06)} to { box-shadow: 0 30px 60px rgba(0,0,0,0.12)} }
@keyframes dotGridPulse { 0%{transform:scale(1)} 50%{transform:scale(1.001)} 100%{transform:scale(1)} }
@keyframes skillPing { 0%{opacity:1; transform:scale(1)} 80%{opacity:0.2} 100%{opacity:0; transform:scale(2)} }
@keyframes ribbonSlide { from{transform: translateX(-10px) rotate(-45deg); opacity:0} to{transform: translateX(0) rotate(-45deg); opacity:1} }

.cascade { animation: cascadeIn 420ms ease-out both }
.card-lift:hover { transform: translateY(-6px); box-shadow: 0 30px 60px rgba(0,0,0,0.12); border-color: var(--indigo) }

/* verified ribbon */
.ribbon { position:absolute; top:12px; left:-40px; background:var(--indigo); color:white; padding:6px 50px; transform:rotate(-45deg); font-weight:600; box-shadow:0 6px 18px rgba(79,70,229,0.12); }

/* coral award ribbon */
.ribbon-coral { position:absolute; top:12px; left:-40px; background:var(--coral); color:white; padding:6px 50px; transform:rotate(-45deg); font-weight:600 }

/* skill node */
.skill-node{transition:transform .25s ease-out, box-shadow .25s ease-out}
.skill-node:hover{transform:scale(1.2)}

.open-badge{border:2px solid rgba(249,115,22,0.5); box-shadow:0 8px 20px rgba(249,115,22,0.06); animation: pulse 2.6s infinite;}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(249,115,22,0.08)}50%{box-shadow:0 0 0 8px rgba(249,115,22,0.04)}100%{box-shadow:0 0 0 0 rgba(249,115,22,0.0)}}

.toast{position:fixed;right:20px;bottom:24px;background:white;padding:10px 16px;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,0.08);font-weight:600}

`}</style>

      <div className="bg-dotgrid absolute inset-0 -z-10 animate-[dotGridPulse_8s_infinite]" aria-hidden />

      {/* Navbar */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('discover')}>
            <div className="w-9 h-9 rounded-md flex items-center justify-center bg-gradient-to-br from-[#EEF2FF] to-white border border-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" fill="var(--indigo)"/></svg>
            </div>
            <div className="leading-4">
              <div className="font-fra text-lg"><span>Showcase</span><span style={{color:'var(--indigo)'}}>OS</span></div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-2xl flex items-center bg-white border border-gray-100 rounded-lg px-3 py-2 shadow-sm">
              <Search className="w-5 h-5 text-gray-400" />
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search students, skills, certificates..." className="flex-1 px-3 py-1 outline-none text-sm" />
              <select aria-label="skills filter" className="text-sm px-2 py-1 bg-white border-l border-gray-100">
                <option>All skills</option>
                <option>React</option>
                <option>Python</option>
                <option>AWS</option>
              </select>
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <button onClick={() => setPage('discover')} className={`px-2 py-1 text-sm ${page==='discover' ? 'font-semibold underline decoration-2 underline-offset-4 decoration-[var(--indigo)]':'text-gray-600'}`}>Explore</button>
            <button onClick={() => setPage('rankings')} className={`px-2 py-1 text-sm ${page==='rankings' ? 'font-semibold underline decoration-2 decoration-[var(--indigo)]':'text-gray-600'}`}>Rankings</button>
            <button onClick={() => setPage('share')} className="px-3 py-1 bg-[var(--indigo)] text-white text-sm rounded-md flex items-center gap-2"><Plus className="w-4 h-4"/>Share Profile</button>
            <button className="p-2 text-gray-600"><svg className="w-5 h-5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#CBD5E1" strokeWidth="1" fill="#fff"/></svg></button>
            <div className="w-8 h-8 rounded-full bg-[var(--indigo)] text-white flex items-center justify-center text-sm font-semibold">{CURRENT_USER.avatar_initials}</div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero for Discover */}
        {page === 'discover' && (
          <section className="mb-8">
            <div className="relative rounded-2xl overflow-hidden bg-white p-10 grid grid-cols-12 gap-6 items-center card-lift">
              <div className="col-span-7">
                <h1 className="font-fra text-5xl leading-tight">Discover Students Who Can PROVE It.</h1>
                <p className="mt-3 text-gray-600 max-w-xl">Not just resumes. Verified skills, real projects, earned certificates.</p>
                <div className="mt-6 flex items-center gap-3">
                  <button className="bg-[var(--indigo)] text-white px-5 py-3 rounded-md font-semibold">Explore Showcases →</button>
                  <button className="border border-gray-200 px-4 py-3 rounded-md text-sm">Share Your Skills</button>
                </div>
              </div>
              <div className="col-span-5 relative">
                <div className="absolute -right-12 -top-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#EEF2FF] to-white opacity-80 transform rotate-45" />
                <div className="w-full h-48 bg-white border border-gray-100 rounded-lg shadow-sm" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="overflow-x-auto flex gap-2 py-2">
                {['All','React','Python','AWS','ML','Node.js','DevOps','UI/UX'].map((s,i)=> (
                  <div key={s} className="px-3 py-1 rounded-full border border-gray-100 text-sm bg-white card-lift cascade" style={delayStyle(i)}>{s}</div>
                ))}
              </div>
              <div>
                <select className="bg-white border px-3 py-2 rounded-md text-sm">
                  <option>Most Endorsed</option>
                  <option>Top Score</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DISCOVER_FEED.map((s,i)=> (
                <article key={s.handle} className="bg-white border border-gray-100 rounded-lg p-4 relative cascade card-lift" style={delayStyle(i)}>
                  <div style={{height:6, background:s.color, position:'absolute',top:0,left:0,right:0}} />
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold" style={{background:s.color}}>{s.initials}</div>
                    <div>
                      <div className="font-fra text-lg">{s.name}</div>
                      <div className="text-xs text-gray-500 font-mono">{s.handle} • {s.college}</div>
                      <div className="text-sm text-gray-600 mt-1">{s.headline}</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    {s.top_skills.slice(0,3).map(k => <span key={k} className="text-xs py-1 px-2 rounded-full border border-gray-100 flex items-center gap-2"><span style={{width:8,height:8,borderRadius:99,background:'#000'}}></span>{k}</span> )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500 flex items-center gap-3"><Award className="w-4 h-4"/> {s.certs} certs <Star className="w-4 h-4"/> {s.endorsements} endorsements</div>
                    <div className="w-36">
                      <div className="text-xs text-gray-500">Showcase Score</div>
                      <div className="bg-gray-100 rounded-full h-3 mt-1 overflow-hidden">
                        <div style={{width:`${s.showcase_score}%`}} className="h-3 bg-[var(--indigo)]"/>
                      </div>
                      <div className="text-sm font-semibold mt-1">{s.showcase_score}</div>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-200">
                    <button onClick={()=> setPage('profile')} className="w-full mt-3 bg-[var(--indigo)] text-white rounded-md py-2">View Showcase →</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-fra text-2xl">Trending Skills This Week</h3>
              <div className="mt-4 flex gap-3 flex-wrap">
                {['React +12%','AI/ML +34%','Python +8%','DevOps +6%','Figma +10%','AWS +4%','Node.js +7%','SQL +3%'].map((t,i)=> (
                  <div key={t} className="px-4 py-3 bg-white border rounded-full text-sm font-semibold flex items-center gap-3 card-lift cascade" style={delayStyle(i)}>
                    <TrendingUp className="w-4 h-4 text-[var(--indigo)]"/> {t}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Profile Page */}
        {page === 'profile' && (
          <section>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3 flex flex-col items-center gap-4">
                <div className="w-28 h-28 rounded-full flex items-center justify-center text-white text-3xl font-semibold" style={{background:CURRENT_USER.avatar_color}}>
                  {CURRENT_USER.avatar_initials}
                </div>
                <div className="text-center">
                  <div className="font-fra text-2xl">{CURRENT_USER.name} <CheckCircle className="inline-block ml-2 text-[var(--indigo)]"/></div>
                  <div className="text-sm text-gray-600">{CURRENT_USER.handle}</div>
                </div>

                <div className="flex gap-2">
                  {CURRENT_USER.open_to.map(o => <div key={o} className="px-3 py-1 rounded-md text-sm border border-transparent open-badge" style={{animationDelay:'0.2s'}}>{o}</div>)}
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-fra text-3xl">{CURRENT_USER.headline}</h2>
                    <div className="text-sm text-gray-600">{CURRENT_USER.college} • {CURRENT_USER.degree} • <MapPin className="inline-block"/> {CURRENT_USER.location}</div>
                    <div className="mt-3 text-gray-700">{CURRENT_USER.bio}</div>
                    <div className="mt-4 flex gap-2">
                      <a href={'https://'+CURRENT_USER.links.github} className="text-gray-600 flex items-center gap-2"><Github className="w-4 h-4"/> GitHub</a>
                      <a href={'https://'+CURRENT_USER.links.portfolio} className="text-gray-600 flex items-center gap-2"><Globe className="w-4 h-4"/> Portfolio</a>
                    </div>
                  </div>

                  <div className="w-40 text-right">
                    <div className="text-sm text-gray-500">Views</div>
                    <div className="font-fra text-2xl">{CURRENT_USER.profile_views}</div>
                    <div className="mt-3 flex flex-col gap-2">
                      <div className="text-sm text-gray-500">Endorsements</div>
                      <div className="font-semibold">{CURRENT_USER.endorsements}</div>
                      <div className="mt-2 flex gap-2">
                        <button onClick={()=>toggleEndorse('profile')} className={`px-3 py-2 rounded-md ${endorsed['profile'] ? 'bg-[var(--coral)] text-white':'border border-gray-100'}`}>Endorse Skills</button>
                        <button className="px-3 py-2 rounded-md border border-[var(--indigo)] text-[var(--indigo)]">Connect</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-fra text-4xl">{CURRENT_USER.showcase_score}/100</div>
                  <div className="text-xs text-gray-500">Showcase Complete</div>
                  <div className="mt-3 bg-gray-100 h-4 rounded-full overflow-hidden">
                    <div style={{width:`${CURRENT_USER.showcase_score}%`}} className="h-4 bg-[var(--indigo)]" />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-fra text-2xl">Skills Constellation</h3>
                  <div className="relative w-full h-[320px] bg-white border border-gray-100 rounded-lg mt-4">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {CONSTELLATION_EDGES.map((e, i) => {
                        const a = CONSTELLATION_NODES.find(n => n.name === e[0]);
                        const b = CONSTELLATION_NODES.find(n => n.name === e[1]);
                        if (!a || !b) return null;
                        return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#E6E6FA" strokeWidth={0.4} />
                      })}
                    </svg>
                    {CONSTELLATION_NODES.map((n, idx)=> (
                      <div key={n.name} className="absolute skill-node" style={{left:`${n.x}%`, top:`${n.y}%`, transform:'translate(-50%,-50%)'}}>
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-gray-100 shadow-sm" onMouseEnter={()=>{}}>
                          <div className="text-sm font-semibold">{n.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="md:col-span-3">
                <div className="bg-white border p-4 rounded-lg">
                  <h4 className="font-fra">Certificates</h4>
                  <div className="mt-3 grid grid-cols-1 gap-3">
                    {CERTIFICATES.slice(0,3).map(c => (
                      <div key={c.id} className="relative bg-white border p-3 rounded-lg">
                        {c.verified ? <div className="ribbon">VERIFIED ✓</div> : <div className="ribbon" style={{background:'#9CA3AF'}}>PENDING</div>}
                        <div className="flex items-center gap-3">
                          <div style={{width:10,height:40,background:c.issuer_color}} />
                          <div>
                            <div className="font-fra text-lg">{c.title}</div>
                            <div className="text-xs text-gray-500">{c.issuer} • {c.issued}</div>
                            <div className="mt-2 flex gap-2 text-xs">
                              {c.skills_unlocked.slice(0,3).map(s => <div key={s} className="px-2 py-1 rounded-full border text-xs">{s}</div>)}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="font-mono text-xs text-gray-500">{c.credential_id}</div>
                          <div className="flex items-center gap-2">
                            <button onClick={()=>{copyToClipboard(c.credential_id)}} className="text-xs text-gray-600 flex items-center gap-1"><Copy className="w-4 h-4"/>Copy ID</button>
                            <button className="text-xs text-[var(--indigo)] flex items-center gap-1">Verify <ExternalLink className="w-4 h-4"/></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <h4 className="font-fra text-lg">Projects</h4>
                    <div className="mt-3 flex flex-col gap-3">
                      {PROJECTS.map(p => (
                        <div key={p.id} className="bg-white border p-3 rounded-lg relative">
                          {p.award && <div className="ribbon-coral">{p.award}</div>}
                          <div className="flex items-start gap-3">
                            <div style={{width:6,background:p.highlight_color}} className="h-full" />
                            <div className="flex-1">
                              <div className="font-fra text-lg">{p.title}</div>
                              <div className="text-sm italic text-gray-600">{p.tagline}</div>
                              <div className="mt-2 text-sm text-gray-700">{p.description}</div>
                              <div className="mt-3 flex items-center gap-2">
                                {p.tech.map(t => <span key={t} className="text-xs py-1 px-2 rounded-full border">{t}</span>)}
                              </div>
                              <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
                                <Eye className="w-4 h-4"/> {p.views} <Heart className="w-4 h-4"/> {p.likes}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* Certificate Wall */}
        {page === 'certificates' && (
          <section>
            <div className="bg-white p-6 rounded-2xl border">
              <h1 className="font-fra text-3xl">Certificate Wall</h1>
              <p className="text-gray-600">Every certificate here is issuer-verified.</p>

              <div className="mt-4 flex gap-3 flex-wrap">
                {['All','Cloud','AI/ML','Web Dev','CS Fundamentals','DevOps','Design'].map((c,i)=> <div key={c} className="px-3 py-2 rounded-full border bg-white text-sm">{c}</div>)}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTIFICATES.map((c,i)=> (
                  <div key={c.id} className="bg-white border p-4 rounded-lg card-lift cascade" style={delayStyle(i)}>
                    <div style={{height:60, background:c.issuer_color}} className="rounded-t-md" />
                    <div className="relative mt-3">
                      {c.verified ? <div className="ribbon" style={{left:'-30px'}}>VERIFIED ✓</div> : <div className="ribbon" style={{background:'#9CA3AF',left:'-30px'}}>PENDING</div>}
                      <div className="font-fra text-xl mt-2">{c.title}</div>
                      <div className="text-sm text-gray-600">{c.issuer} • {c.issued}</div>
                      <div className="mt-2 flex gap-2">
                        {c.skills_unlocked.map(s=> <div key={s} className="text-xs px-2 py-1 border rounded-full">{s}</div>)}
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200" />
                            <div className="w-6 h-6 rounded-full bg-gray-300" />
                            <div className="w-6 h-6 rounded-full bg-gray-400" />
                          </div>
                          <div className="text-sm text-gray-600">{c.endorsements} endorsements</div>
                        </div>
                        <div className="font-mono text-sm text-gray-500">{c.credential_id}</div>
                      </div>

                      <div className="mt-3 flex justify-between">
                        <button onClick={()=>copyToClipboard(c.credential_id)} className="text-sm flex items-center gap-2"><Copy className="w-4 h-4"/> Copy ID</button>
                        <button className="text-sm text-[var(--indigo)] flex items-center gap-2">Verify <ExternalLink className="w-4 h-4"/></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-[var(--indigo)] text-white rounded-lg p-6 flex items-center justify-between">
                <div>
                  <div className="font-fra text-xl">Have a certificate to showcase?</div>
                  <div className="text-sm">Add yours to validate your learning.</div>
                </div>
                <button className="bg-white text-[var(--indigo)] px-4 py-3 rounded-md font-semibold">Add yours →</button>
              </div>
            </div>
          </section>
        )}

        {/* Skills Explorer */}
        {page === 'skills' && (
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1 bg-white border rounded-lg p-4">
              <h4 className="font-fra">Categories</h4>
              <div className="mt-3 flex flex-col gap-2">
                {['Frontend','Backend','AI/ML','Cloud','DevOps','Design','CS Fundamentals'].map(cat => (
                  <button key={cat} className={`text-sm text-left px-3 py-2 rounded-md ${cat==='Frontend' ? 'bg-[var(--indigo)] text-white':''}`}>{cat}</button>
                ))}
              </div>
            </aside>
            <div className="lg:col-span-3 bg-white border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-fra text-3xl">{activeSkillData.name}</h2>
                  <div className="text-sm text-gray-600">{activeSkillData.proof.length} proofs • Avg proficiency {activeSkillData.proficiency}%</div>
                </div>
                <div className="w-48 text-right">
                  <div className="text-sm text-gray-500">Students showcasing</div>
                  <div className="font-fra text-2xl">1,243</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">📜 Certificates: 3 linked certs</div>
                <div className="p-4 border rounded-lg">🏗 Projects: 892 projects tagged</div>
                <div className="p-4 border rounded-lg">🏅 Endorsements: 8,234 peer endorsements</div>
              </div>

              <div className="mt-6">
                <h4 className="font-fra">Top students for {activeSkillData.name}</h4>
                <div className="mt-3 divide-y">
                  {[...DISCOVER_FEED, DISCOVER_FEED[0]].slice(0,6).map((s,i)=> (
                    <div key={s.handle+i} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:s.color}}>{s.initials}</div>
                        <div>
                          <div className="font-fra">{s.name}</div>
                          <div className="text-xs text-gray-500">{s.college}</div>
                        </div>
                      </div>
                      <div className="w-48">
                        <div className="bg-gray-100 h-2 rounded-full overflow-hidden"><div style={{width:`${Math.min(100, s.showcase_score)}%`}} className="h-2 bg-[var(--indigo)]"/></div>
                      </div>
                      <div className="text-sm text-gray-600">{s.endorsements}</div>
                      <div>
                        <button onClick={()=>setPage('profile')} className="text-[var(--indigo)]">View Showcase</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Rankings */}
        {page === 'rankings' && (
          <section>
            <div className="bg-white border rounded-2xl p-6">
              <h1 className="font-fra text-3xl">Student Spotlight</h1>
              <div className="mt-4 bg-white border p-6 rounded-lg grid md:grid-cols-3 gap-4 items-center">
                <div className="md:col-span-2">
                  <div className="font-fra text-2xl">Rahul Sharma</div>
                  <div className="text-sm text-gray-600">IIT Madras • ML Research + Competitive Programmer</div>
                  <div className="mt-2 italic text-gray-700">"Building models that scale to real problems."</div>
                </div>
                <div className="text-right">
                  <button className="bg-[var(--indigo)] text-white px-4 py-2 rounded-md">View Full Showcase →</button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {RANKINGS.slice(0,3).map(r => (
                  <div key={r.rank} className="relative bg-white border p-6 rounded-lg">
                    <div className="font-fra text-7xl text-gray-100 absolute -top-6 -left-6">{String(r.rank).padStart(2,'0')}</div>
                    <div className="relative">
                      <div className="font-fra text-xl">{r.name}</div>
                      <div className="text-sm text-gray-600">{r.college}</div>
                      <div className="mt-3 font-semibold">Score: {r.score}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white border p-4 rounded-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-sm text-gray-500"><th>Rank</th><th>Student</th><th>College</th><th>Score</th><th>Certs</th><th>Top Skill</th></tr>
                    </thead>
                    <tbody>
                      {RANKINGS.slice(3,8).map(r => (
                        <tr key={r.rank} className={`border-t ${r.is_you ? 'bg-indigo-50 font-semibold':''}`}>
                          <td className="py-3">{r.rank}</td>
                          <td>{r.name}</td>
                          <td>{r.college}</td>
                          <td><div className="bg-gray-100 h-2 rounded-full w-40 overflow-hidden"><div style={{width:`${r.score}%`}} className="h-2 bg-[var(--indigo)]"/></div></td>
                          <td>{r.certs}</td>
                          <td>{r.top_skill}</td>
                        </tr>
                      ))}
                      <tr className="border-t bg-indigo-50 font-semibold">
                        <td>#14</td>
                        <td>Arjun Krishnamurthy (YOU)</td>
                        <td>PSG Tech</td>
                        <td><div className="bg-gray-100 h-2 rounded-full w-40 overflow-hidden"><div style={{width:'94%'}} className="h-2 bg-[var(--indigo)]"/></div></td>
                        <td>6</td>
                        <td>React</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 text-sm text-gray-600">You need 3 points to reach rank 13.</div>
              </div>

            </div>
          </section>
        )}

      </main>

      {toast && <div className="toast">{toast}</div>}

    </div>
  );
}

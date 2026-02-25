// ===== PROJECT DATA =====
const projectData = {
    'kuberaa': {
        title: 'Kuberaa - Digital Promotions', category: '3D Animation',
        description: 'Created stunning 3D promotional content for the film "Kuberaa" featuring Dhanush. This project involved intricate character animations, cloth simulation using Marvelous Designer, and environment modeling in Blender.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tags: ['Blender', '3D Modeling', 'Animation', 'Marvelous Designer', 'Character Design'],
        images: ['images/kuberaa-1.jpg', 'images/kuberaa-2.jpg', 'images/kuberaa-3.jpg']
    },
    'ajith': {
        title: 'Ajith Kumar Birthday Tribute', category: '3D Animation',
        description: 'Official tribute video for Ajith Kumar\'s birthday. Worked on this for over a month — from ideating and storyboarding to the final output. Character sculpted in ZBrush, environment in Blender, edited in Premiere Pro.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tags: ['ZBrush', 'Character Sculpting', 'Blender', 'Environment Design', 'Premiere Pro'],
        images: ['images/ajith-1.jpg', 'images/ajith-2.jpg', 'images/ajith-3.jpg']
    },
    'globe-trotter': {
        title: 'Globe Trotter Event - 3D Announcement', category: '3D Animation',
        description: '3D announcement video for the Globe Trotter event at Ramoji Film City, Hyderabad. Work done for Walls & Trends Digital Marketing Company.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tags: ['3D Animation', 'Event Promotion', 'Crowd Simulation', 'Cinema 4D'],
        images: ['images/globe-trotter-1.jpg', 'images/globe-trotter-2.jpg']
    },
    'the-imperial': {
        title: 'The Imperial', category: '3D Animation',
        description: 'Completed in just 8 days. Character sculpted in ZBrush, composited in After Effects with motion tracking and VFX. Final edit in Premiere Pro.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tags: ['ZBrush', 'After Effects', 'Fast Turnaround', 'Compositing', 'VFX'],
        images: ['images/imperial-1.jpg', 'images/imperial-2.jpg']
    },
    'puravankara': {
        title: 'Puravankara Project Launch', category: 'Commercial Advertisement',
        description: 'Commercial for Puravankara\'s launch in Chennai. Napier\'s Bridge scene built in Unreal Engine 5 with photorealistic lighting. Iconic Chennai cultural elements placed throughout.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tags: ['Unreal Engine 5', 'Commercial', 'Architectural Visualization', 'Real-time Rendering'],
        images: ['images/puravankara-1.jpg', 'images/puravankara-2.jpg', 'images/puravankara-3.jpg']
    },
    'poster-designs': {
        title: 'Movie Poster Designs', category: 'Graphic Design',
        description: 'Collection of conceptual movie posters, publicity designs, 3D artwork, and promotional materials for various Tamil films.',
        videoUrl: null,
        tags: ['Photoshop', 'Poster Design', 'Typography', 'Graphic Design', 'Branding'],
        images: ['images/poster-1.jpg','images/poster-2.jpg','images/poster-3.jpg','images/poster-4.jpg','images/poster-5.jpg','images/poster-6.jpg']
    },
    'raghu-thatha': {
        title: 'Raghu Thatha - Feature Film', category: 'Film Editing',
        description: 'Assistant Editor on Tamil feature film "Raghu Thatha", released August 15, 2024. Assisted in editing crucial scenes and a complete song sequence. Edited on AVID Media Composer, color graded in DaVinci Resolve.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tags: ['Feature Film', 'Assistant Editor', 'AVID Media Composer', 'DaVinci Resolve'],
        images: ['images/raghu-thatha-1.jpg', 'images/raghu-thatha-2.jpg']
    },
    'karnan': {
        title: 'Karnan Motion Poster', category: '3D Animation',
        description: 'My first 3D animation project. Background built in Blender with destruction simulation. Sword modeled from scratch with metallic materials. Composited and color graded in Blender.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tags: ['First Project', 'Motion Graphics', 'Blender', 'Compositor', 'VFX'],
        images: ['images/karnan-1.jpg', 'images/karnan-2.jpg']
    }
};

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
const navLinks  = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const s = navToggle.querySelectorAll('span');
    s[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px,5px)' : 'rotate(0)';
    s[1].style.opacity   = navMenu.classList.contains('active') ? '0' : '1';
    s[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px,-6px)' : 'rotate(0)';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const s = navToggle.querySelectorAll('span');
        s[0].style.transform = 'rotate(0)';
        s[1].style.opacity   = '1';
        s[2].style.transform = 'rotate(0)';
    });
});

// ===== NAVBAR HIDE ON SCROLL =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const cur = window.pageYOffset;
    if (cur <= 0) return;
    navbar.style.transform = cur > lastScroll && cur > 100 ? 'translateY(-100%)' : 'translateY(0)';
    lastScroll = cur;
});

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(s => {
        const top = s.offsetTop - 100;
        const id  = s.getAttribute('id');
        const lnk = document.querySelector(`.nav-link[href*="${id}"]`);
        scrollY > top && scrollY <= top + s.offsetHeight
            ? lnk?.classList.add('active')
            : lnk?.classList.remove('active');
    });
}
window.addEventListener('scroll', scrollActive);
scrollActive();

// ===== VIEW TOGGLE =====
const viewBtns        = document.querySelectorAll('.view-btn');
const masonryView     = document.getElementById('masonryView');
const filmographyView = document.getElementById('filmographyView');

viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (btn.dataset.view === 'masonry') {
            masonryView.style.display     = 'flex';
            filmographyView.style.display = 'none';
        } else {
            masonryView.style.display     = 'none';
            filmographyView.style.display = 'flex';
        }
    });
});

// ===== CATEGORY FILTER =====
const catBtns = document.querySelectorAll('.cat-btn');

catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.cat;

        // Filter masonry cards
        document.querySelectorAll('.masonry-card').forEach(card => {
            const match = cat === 'all' || card.dataset.cat === cat;
            card.classList.toggle('hidden', !match);
        });

        // Filter filmography rows
        document.querySelectorAll('.filmo-item').forEach(item => {
            const match = cat === 'all' || item.dataset.cat === cat;
            item.classList.toggle('hidden', !match);
        });

        // Re-number visible filmo items
        let n = 1;
        document.querySelectorAll('.filmo-item:not(.hidden) .filmo-num').forEach(el => {
            el.textContent = String(n++).padStart(2, '0');
        });
    });
});

// ===== PROJECT MODAL =====
const modal      = document.getElementById('projectModal');
const modalBody  = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.masonry-card, .filmo-item').forEach(item => {
    item.addEventListener('click', () => {
        const project = projectData[item.getAttribute('data-project')];
        if (project) openProjectModal(project);
    });
});

function openProjectModal(project) {
    let html = `<h2>${project.title}</h2><p class="project-category">${project.category}</p><p class="project-description">${project.description}</p>`;
    if (project.videoUrl) html += `<iframe class="project-video" src="${project.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    if (project.images?.length) { html += '<div class="project-gallery">'; project.images.forEach(i => { html += `<img src="${i}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Project+Image'">`; }); html += '</div>'; }
    if (project.tags?.length)   { html += '<div class="project-tags">'; project.tags.forEach(t => { html += `<span>${t}</span>`; }); html += '</div>'; }
    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    const iframe = modalBody.querySelector('iframe');
    if (iframe) iframe.src = iframe.src;
}

modalClose.addEventListener('click', closeProjectModal);
modal.addEventListener('click', e => { if (e.target === modal) closeProjectModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeProjectModal(); });

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' });
    });
});

// ===== FADE IN OBSERVER =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.animation = 'fadeInUp 0.8s ease forwards'; observer.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.skill-card-new, .cert-card, .masonry-card, .tc-card, .stat').forEach(el => observer.observe(el));

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';


scrollTopBtn.style.cssText = `position:fixed;bottom:30px;right:30px;width:50px;height:50px;border-radius:50%;background: linear-gradient(135deg, #C09A5E, #D4B483);color:#000;border:none;cursor:pointer;opacity:0;transition:all 0.3s ease;z-index:999;display:flex;align-items:center;justify-content:center;font-size:1.1rem;box-shadow: 0 5px 20px rgba(192, 154, 94, 0.35);`;
document.body.appendChild(scrollTopBtn);
window.addEventListener('scroll', () => { scrollTopBtn.style.opacity = window.pageYOffset > 300 ? '1' : '0'; scrollTopBtn.style.pointerEvents = window.pageYOffset > 300 ? 'all' : 'none'; });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
scrollTopBtn.addEventListener('mouseenter', () => scrollTopBtn.style.transform = 'scale(1.1)');
scrollTopBtn.addEventListener('mouseleave', () => scrollTopBtn.style.transform = 'scale(1)');

// ===== CUSTOM CURSOR =====
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `width:20px;height:20px;border:2px solid #f4d187;border-radius:50%;position:fixed;pointer-events:none;transition:0.1s;z-index:9999;`;
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', e => { cursor.style.left = e.clientX - 10 + 'px'; cursor.style.top = e.clientY - 10 + 'px'; });
    document.querySelectorAll('a, button, .masonry-card, .filmo-item').forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(1.5)'; cursor.style.background = 'rgba(103,232,249,0.15)'; });
        el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)';   cursor.style.background = 'transparent'; });
    });
}

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const pre = document.createElement('div');
    pre.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;z-index:9999;transition:opacity 0.5s ease;`;
    pre.innerHTML = `<div style="text-align:center;"><div style="width:55px;height:55px;border:3px solid rgba(192,154,94,0.15);border-top:3px solid #C09A5E;border-radius:50%;animation:spin 1s linear infinite;"></div><p style="margin-top:16px;color:#C09A5E;letter-spacing:3px;font-size:12px;font-family:monospace;">LOADING</p></div>`;
    const st = document.createElement('style');
    st.textContent = '@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';
    document.head.appendChild(st);
    document.body.insertBefore(pre, document.body.firstChild);
    setTimeout(() => { pre.style.opacity = '0'; setTimeout(() => pre.remove(), 500); }, 1500);
});


// ===== TYPEWRITER =====
const phrases = [
    { text: 'Rahul Srivathsan M',   em: 'M.'       },
    { text: 'a Designer',           em: 'Designer'  },
    { text: 'a 3D & VFX Artist',    em: 'Artist'    },
    { text: 'an aspiring Editor',   em: 'Editor'    },
];

let phraseIndex = 0, charIndex = 0, isDeleting = false;
const el = document.querySelector('.typewriter-text');

function typeWriter() {
    if (!el) return;
    const cur = phrases[phraseIndex];
    const fullText = cur.text;
    const emWord = cur.em;
    const emStart = fullText.lastIndexOf(emWord.replace('.', ''));

    if (!isDeleting) charIndex++;
    else             charIndex--;

    const slice = fullText.substring(0, charIndex);

    if (charIndex >= emStart) {
        // we've reached the em word — split and style it
        const before = fullText.substring(0, emStart);
        const emPart = slice.substring(emStart);
        el.innerHTML = before + '<em>' + emPart + '</em>';
    } else {
        el.textContent = slice;
    }

    let speed = isDeleting ? 45 : 90;
    if (!isDeleting && charIndex === fullText.length) {
        speed = 2200; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
    }
    setTimeout(typeWriter, speed);
}
document.addEventListener('DOMContentLoaded', typeWriter);

// ===== JOURNEY PROGRESS BAR =====
const journeySection = document.getElementById('journey');
const progressBar = document.getElementById('journeyProgress');

window.addEventListener('scroll', () => {
    if (!journeySection || !progressBar) return;
    const top    = journeySection.offsetTop;
    const height = journeySection.offsetHeight;
    const scrolled = window.pageYOffset - top;
    const pct = Math.min(Math.max((scrolled / height) * 100, 0), 100);
    progressBar.style.width = pct + '%';
});

console.log('%c Portfolio Loaded ✨', 'color: #f5edcb; font-size: 16px; font-weight: bold;');
// ===== PROJECT DATA =====
const projectData = {
    'kuberaa': {
        title: 'Kuberaa - Digital Promotions',
        category: '3D Animation',
        description: 'Created stunning 3D promotional content for the film "Kuberaa" featuring Dhanush. This project involved intricate character animations, cloth simulation using Marvelous Designer, and environment modeling in Blender. The promotional material included multiple 3D sequences showcasing the film\'s grand audio launch and various promotional events.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
        tags: ['Blender', '3D Modeling', 'Animation', 'Marvelous Designer', 'Character Design'],
        images: ['images/kuberaa-1.jpg', 'images/kuberaa-2.jpg', 'images/kuberaa-3.jpg']
    },
    'ajith': {
        title: 'Ajith Kumar Birthday Tribute',
        category: '3D Animation',
        description: 'Official tribute video for Ajith Kumar\'s birthday. This is my most favorite project as I worked on this for more than a month, from ideating and storyboarding to delivering the full output. The character was fully sculpted in ZBrush, environment was modeled in Blender, and the final edit was done in Adobe Premiere Pro. This project showcased complex character modeling, realistic texturing, and cinematic lighting.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
        tags: ['ZBrush', 'Character Sculpting', 'Blender', 'Environment Design', 'Premiere Pro'],
        images: ['images/ajith-1.jpg', 'images/ajith-2.jpg', 'images/ajith-3.jpg']
    },
    'globe-trotter': {
        title: 'Globe Trotter Event - 3D Announcement',
        category: '3D Animation',
        description: '3D announcement video created for the Twilight movie "Globe Trotter" event at Ramoji Film City, Hyderabad. Work done for Walls & Trends Digital Marketing Company. The project featured crowd simulation, large-scale environment modeling, and dynamic camera movements to create an engaging event announcement.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
        tags: ['3D Animation', 'Event Promotion', 'Crowd Simulation', 'Cinema 4D'],
        images: ['images/globe-trotter-1.jpg', 'images/globe-trotter-2.jpg']
    },
    'the-imperial': {
        title: 'The Imperial',
        category: '3D Animation',
        description: 'This project holds a special place in my heart as I completed this in a span of just 8 days. The character was sculpted in ZBrush with detailed facial features and clothing. Video was composited in Adobe After Effects with advanced motion tracking and visual effects. The final edit was done in Adobe Premiere Pro, showcasing quick turnaround without compromising quality.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
        tags: ['ZBrush', 'After Effects', 'Fast Turnaround', 'Compositing', 'VFX'],
        images: ['images/imperial-1.jpg', 'images/imperial-2.jpg']
    },
    'puravankara': {
        title: 'Puravankara Project Launch',
        category: 'Commercial Advertisement',
        description: 'Commercial advertisement for Puravankara\'s project launch in Chennai. The Napier\'s Bridge scene was created in Unreal Engine 5 with photorealistic lighting and reflections. Iconic Chennai landmarks including Superstar Rajinikanth and MGR\'s paintings were placed as cultural icons. This was a valuable learning experience that opened doors to new opportunities in commercial 3D work.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
        tags: ['Unreal Engine 5', 'Commercial', 'Architectural Visualization', 'Real-time Rendering'],
        images: ['images/puravankara-1.jpg', 'images/puravankara-2.jpg', 'images/puravankara-3.jpg']
    },
    'poster-designs': {
        title: 'Movie Poster Designs',
        category: 'Graphic Design',
        description: 'Collection of conceptual movie posters, publicity designs, 3D poster artwork, and promotional materials for various Tamil films. Each poster is crafted with attention to typography, color theory, and visual hierarchy. The designs range from minimalist approaches to elaborate 3D compositions, showcasing versatility in design styles.',
        videoUrl: null, // No video for this project
        tags: ['Photoshop', 'Poster Design', 'Typography', 'Graphic Design', 'Branding'],
        images: [
            'images/poster-1.jpg',
            'images/poster-2.jpg',
            'images/poster-3.jpg',
            'images/poster-4.jpg',
            'images/poster-5.jpg',
            'images/poster-6.jpg'
        ]
    },
    'raghu-thatha': {
        title: 'Raghu Thatha - Feature Film',
        category: 'Film Editing',
        description: 'Worked as Assistant Editor for the Tamil feature film "Raghu Thatha" which released on August 15, 2024. Each day of this project was a dream come true as I delved into the film editing process, assisting in editing crucial scenes and a complete song sequence. This experience filled me with the same joy and pride I had as an 8-year-old starting my journey. The film was edited using AVID Media Composer with color grading in DaVinci Resolve.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
        tags: ['Feature Film', 'Assistant Editor', 'AVID Media Composer', 'DaVinci Resolve', 'Professional Work'],
        images: ['images/raghu-thatha-1.jpg', 'images/raghu-thatha-2.jpg']
    },
    'karnan': {
        title: 'Karnan Motion Poster',
        category: '3D Animation',
        description: 'My first attempt at 3D animation - the Karnan Motion Poster. The background environment was created using Blender with detailed destruction simulation. The sword was modeled from scratch with realistic metallic materials. Everything was composited in Blender using the compositor for final color grading and effects. This project marked the beginning of my professional 3D journey.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
        tags: ['First Project', 'Motion Graphics', 'Blender', 'Compositor', 'VFX'],
        images: ['images/karnan-1.jpg', 'images/karnan-2.jpg']
    }
};

// ===== MOBILE NAVIGATION TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0)';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link?.classList.add('active');
        } else {
            link?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===== WORK FILTER FUNCTIONALITY =====
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        workItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            }, 300);
        });
    });
});

// ===== PROJECT MODAL FUNCTIONALITY =====
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

workItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            openProjectModal(project);
        }
    });
});

function openProjectModal(project) {
    let content = `
        <h2>${project.title}</h2>
        <p class="project-category">${project.category}</p>
        <p class="project-description">${project.description}</p>
    `;
    
    // Add video if exists
    if (project.videoUrl) {
        content += `
            <iframe 
                class="project-video" 
                src="${project.videoUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    }
    
    // Add image gallery if exists
    if (project.images && project.images.length > 0) {
        content += '<div class="project-gallery">';
        project.images.forEach(image => {
            content += `<img src="${image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Project+Image'">`;
        });
        content += '</div>';
    }
    
    // Add tags
    if (project.tags && project.tags.length > 0) {
        content += '<div class="project-tags">';
        project.tags.forEach(tag => {
            content += `<span>${tag}</span>`;
        });
        content += '</div>';
    }
    
    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Stop video if playing
    const iframe = modalBody.querySelector('iframe');
    if (iframe) {
        iframe.src = iframe.src;
    }
}

modalClose.addEventListener('click', closeProjectModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR FADE IN ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .work-item, .stat, .bullet-item').forEach(el => {
    observer.observe(el);
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 5px 25px rgba(255, 51, 102, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'all';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// ===== CUSTOM CURSOR (Desktop Only) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    transition: 0.1s;
    z-index: 9999;
    display: none;
`;

document.body.appendChild(cursor);

if (window.innerWidth > 768) {
    cursor.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    const interactiveElements = document.querySelectorAll('a, button, .work-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'rgba(255, 51, 102, 0.2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--darker-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    preloader.innerHTML = `
        <div style="text-align: center;">
            <div style="width: 60px; height: 60px; border: 4px solid rgba(255, 51, 102, 0.1); border-top: 4px solid var(--primary-color); border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 20px; color: var(--text-white); font-weight: 600; letter-spacing: 2px;">LOADING...</p>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.insertBefore(preloader, document.body.firstChild);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1500);
});

const phrases = [
    'Rahul Srivathsan M',
    'a Designer',
    'a 3D/VFX Artist',
    'an aspiring Editor',
    'obsessed with cinema'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const el = document.querySelector('.typewriter-text');

function typeWriter() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
        speed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
    }

    setTimeout(typeWriter, speed);
}

document.addEventListener('DOMContentLoaded', typeWriter);

console.log('%c Portfolio Loaded Successfully! ✨', 'color: #ff3366; font-size: 16px; font-weight: bold;');
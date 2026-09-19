// ========================================
// CRAZY RESUME JAVASCRIPT
// ========================================


// 1. PAGE LOADING EFFECT
// ========================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    }, 100);

});


// 2. MOUSE GLOW EFFECT
// ========================================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
    "radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)";
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);


document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// 3. TYPING EFFECT
// ========================================

const heroText =
    "Creative Developer • Designer • Tech Enthusiast";

const heroParagraphs =
    document.querySelectorAll(".hero p");

if (heroParagraphs.length > 0) {

    const paragraph = heroParagraphs[0];

    paragraph.innerHTML = "";

    let index = 0;

    function typeText() {

        if (index < heroText.length) {

            paragraph.innerHTML += heroText.charAt(index);

            index++;

            setTimeout(typeText, 45);

        }

    }

    typeText();

}


// 4. SCROLL REVEAL EFFECT
// ========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// 5. CRAZY CARD TILT
// ========================================

const cards = document.querySelectorAll(
    ".card, .project"
);


cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(700px) rotateX(0) rotateY(0) scale(1)";

    });

});


// 6. SKILL BAR ANIMATION
// ========================================

const skillBars =
    document.querySelectorAll(".fill");


const skillObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const bar =
                        entry.target;

                    const originalWidth =
                        bar.style.width;

                    bar.style.width = "0%";

                    setTimeout(() => {

                        bar.style.transition =
                            "width 1.5s cubic-bezier(.17,.67,.3,1.2)";

                        bar.style.width =
                            originalWidth;

                    }, 200);

                    skillObserver.unobserve(bar);

                }

            });

        },
        {
            threshold: 0.5
        }
    );


skillBars.forEach((bar) => {

    skillObserver.observe(bar);

});


// 7. ACTIVE NAVIGATION
// ========================================

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.style.color = "#ccc";

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color =
                "#9d5cff";

        }

    });

});


// 8. BUTTON CLICK EFFECT
// ========================================

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform =
            "scale(0.92)";

        setTimeout(() => {

            button.style.transform =
                "";

        }, 150);

    });

});


// 9. RANDOM PROJECT CARD GLOW
// ========================================

setInterval(() => {

    const projects =
        document.querySelectorAll(".project");

    if (projects.length === 0) return;

    const random =
        Math.floor(
            Math.random() * projects.length
        );

    const project =
        projects[random];

    project.style.boxShadow =
        "0 0 35px rgba(139,92,246,0.35)";

    setTimeout(() => {

        project.style.boxShadow = "";

    }, 700);

}, 2500);


// 10. CONSOLE MESSAGE
// ========================================

console.log(
    "%c⚡ JAMIL BHUUYAN PORTFOLIO ⚡",
    "color:#9d5cff;font-size:20px;font-weight:bold;"
);

console.log(
    "%cWelcome to my digital world 🚀",
    "color:#00e5ff;font-size:14px;"
);
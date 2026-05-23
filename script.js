document.addEventListener("DOMContentLoaded", () => {
    const descElement = document.getElementById("profile-desc");
    if (!descElement) return;

    // Ambil teks asli untuk SEO & fallback, lalu kosongkan untuk animasi
    const fullText = descElement.textContent.trim();
    descElement.textContent = ""; 
    
    let index = 0;
    const typingSpeed = 25; // Kecepatan mengetik dalam milidetik per karakter (cepat & nyaman dibaca)

    // Aktifkan cursor mengetik
    descElement.classList.add("typing-active");

    function typeWriter() {
        if (index < fullText.length) {
            descElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Hapus efek cursor berkedip setelah selesai mengetik
            descElement.classList.remove("typing-active");
        }
    }

    // Mulai animasi mengetik setelah delay singkat (500ms) agar terasa mulus saat dimuat
    setTimeout(typeWriter, 500);

    // === SCROLL REVEAL ANIMATION ===
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan sekali
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // === BUBBLE GENERATOR ===
    const bubbleContainers = document.querySelectorAll(".bubbles-container");
    
    bubbleContainers.forEach(container => {
        const bubbleCount = 15;
        for (let i = 0; i < bubbleCount; i++) {
            createBubble(container);
        }
    });

    function createBubble(container) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        
        const size = Math.random() * 35 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 9 + 6;
        bubble.style.animationDuration = `${duration}s, 4s`;
        
        const delay = Math.random() * 10;
        bubble.style.animationDelay = `${delay}s`;
        
        bubble.style.opacity = Math.random() * 0.3 + 0.1;
        
        container.appendChild(bubble);
    }
});

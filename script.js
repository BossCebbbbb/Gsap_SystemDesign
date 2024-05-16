var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero-context');
    const contextSection = document.querySelector('.context');
    const certSection = document.querySelector('.cert');

    const observerConfig = {
        threshold: 0.8 // Adjust the threshold as needed
    };

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.target === hero && entry.isIntersecting) {
                header.classList.add('bg-change-white');
                header.classList.remove('bg-change');
            }else if (entry.target === contextSection && entry.isIntersecting) {
                header.classList.add('bg-change');
                header.classList.remove('bg-change-white');
            } else if (entry.target === certSection && entry.isIntersecting) {
                header.classList.add('bg-change-white');
                header.classList.remove('bg-change');
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerConfig);

    observer.observe(hero);
    observer.observe(contextSection);
    observer.observe(certSection);
});







document.addEventListener("DOMContentLoaded", function() {
    function toggleForm(form) {
        document.getElementById('loginForm').style.display = form === 'login' ? 'flex' : 'none';
        document.getElementById('registerForm').style.display = form === 'register' ? 'flex' : 'none';
    }

    // Initialize to hide both forms initially
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';

    // Expose the function to the global scope
    window.toggleForm = toggleForm;
});

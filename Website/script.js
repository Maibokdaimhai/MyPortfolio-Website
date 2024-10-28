let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => links.classList.remove('active'));
            if (id === 'about' || id === 'aboutme') {
                document.querySelector('header nav ul li a[href="#about"]').classList.add('active');
            } else {
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            }
        };
    });
};

if (window.location.search.includes('transition=fade')) {
    document.body.classList.add('fade-in');
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
});

window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});
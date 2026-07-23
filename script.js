// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// ===============================
// MENU FILTER
// ===============================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const menuCards =
    document.querySelectorAll(".menu-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        // Add active class

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        menuCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ===============================
// ADD TO MENU BUTTON
// ===============================

const addButtons =
    document.querySelectorAll(".add-btn");


addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.innerHTML =
            '<i class="fa-solid fa-check"></i>';

        button.style.background =
            "#2e8b57";


        setTimeout(function () {

            button.innerHTML =
                '<i class="fa-solid fa-plus"></i>';

            button.style.background =
                "";

        }, 1500);

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    formMessage.textContent =
        "Thank you, " +
        name +
        "! Your message has been received. We will get back to you soon.";


    contactForm.reset();


    setTimeout(function () {

        formMessage.textContent = "";

    }, 6000);

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    document.querySelectorAll(".nav-links a")
        .forEach(function (link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

});


// ===============================
// GALLERY IMAGE CLICK
// ===============================

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image =
            item.querySelector("img");

        window.open(
            image.src,
            "_blank"
        );

    });

});

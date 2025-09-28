// فتح و اغلاق قاىمة الموبايل
const burger =
document.getElementById("burger");
const navLinks =
document.getElementById("navLinks");

burger.addEventListener("click" , () =>
     {navLinks.classList.toggle("open");
});


// نموذج التواصل
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully! ✅")
    form.reset();
});

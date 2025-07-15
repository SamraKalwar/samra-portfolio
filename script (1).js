let text = "I'm Samra Ahmed – Developer ✨ Designer ✨ Dreamer 💛";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.onload = typeWriter;


function showSkills() {
  const skills = [
    "💻 C++",
    "☕ Java",
    "🐍 Python",
    "🌐 HTML/CSS",
    "🗃️ SQL, MySQL, MongoDB",
    "🧠 JavaScript",
    "🎨 Canva, Figma",
    "📊 PowerPoint, Word"
  ];

  const container = document.getElementById("skillsOutput");
  container.innerHTML = "";
  container.style.opacity = 0;
  setTimeout(() => {
    skills.forEach(skill => {
      const box = document.createElement("div");
      box.className = "skill-box";
      box.innerText = skill;
      container.appendChild(box);
    });
    container.style.opacity = 1;
  }, 200);
}


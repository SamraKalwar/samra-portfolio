document.addEventListener("DOMContentLoaded", () => {
  const skillBtn = document.getElementById("skillBtn");
  const skillsOutput = document.getElementById("skillsOutput");

  const skills = [
    "💻 C++",
    "🐍 Python",
    "🌐 HTML/CSS",
    "🧠 JavaScript",
    "🗃️ SQL, MySQL, MongoDB",
    "📄 Resume Designing",
    "🎨 Canva, Figma",
    "📊 PowerPoint, Word"
  ];

  skillBtn.addEventListener("click", () => {
    skillsOutput.innerHTML = "";
    skillsOutput.style.opacity = 0;

    setTimeout(() => {
      skills.forEach((skill, index) => {
        const box = document.createElement("div");
        box.className = "skill-box";
        box.innerText = skill;
        box.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.15}s forwards`;
        box.style.opacity = 0;
        skillsOutput.appendChild(box);
      });

      skillsOutput.style.opacity = 1;
    }, 200);
  });
});



// script.js

// Form Validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message!');
    form.reset();
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Dynamic DOM Update Example
const skillsSection = document.getElementById('skills');
const newSkillButton = document.createElement('button');
newSkillButton.textContent = 'Add New Skill';
newSkillButton.style.marginTop = '1rem';
skillsSection.appendChild(newSkillButton);

newSkillButton.addEventListener('click', () => {
    const newSkill = prompt('Enter a new skill:');
    if (newSkill) {
        const skillList = skillsSection.querySelector('ul');
        const skillItem = document.createElement('li');
        skillItem.textContent = newSkill;
        skillList.appendChild(skillItem);
    }
});

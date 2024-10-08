console.log(`JS OK`);

const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

teamMembers.forEach(member => {
    console.log(`Nome: ${member.name}, Ruolo: ${member.role}, Immagine: ${member.image}`);
});

const teamContainer = document.createElement('div');
teamContainer.id = 'team-container';
document.body.appendChild(teamContainer);

teamMembers.forEach(member => {
    const memberInfo = document.createElement('p');
    memberInfo.textContent = `Nome: ${member.name}, Ruolo: ${member.role}, Immagine: ${member.image}`;
    teamContainer.appendChild(memberInfo);
});

teamMembers.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('team-member');

    const memberName = document.createElement('h3');
    memberName.textContent = member.name;
    memberDiv.appendChild(memberName);

    const memberRole = document.createElement('p');
    memberRole.textContent = member.role;
    memberDiv.appendChild(memberRole);

    const memberImage = document.createElement('img');
    memberImage.src = `img/${member.image}`;
    memberImage.alt = `${member.name}`;
    memberDiv.appendChild(memberImage);

    teamContainer.appendChild(memberDiv);
});


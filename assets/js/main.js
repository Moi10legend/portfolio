function updateProfileData(profileData){
    const photo = document.getElementById("profile.photo");
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name;

    const job = document.getElementById("profile.job")
    job.innerText = profileData.job;

    const location = document.getElementById("profile.location")
    location.innerText = profileData.location;

    const phone = document.getElementById("profile.phone")
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const email = document.getElementById("profile.email")
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById("profile.skills.softSkills")

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById("profile.skills.hardSkills")

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src=${skill.logo} alt="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortifolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(projeto => `
    <li>
    <h3 ${projeto.github ? 'class= "title github"' : ''}>${projeto.name}</h3>
    <a href=${projeto.url} target="_blank">${projeto.url}</a>
</li>`).join('')
}

function updateEducacionalexperience(profileData){
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.professionalExperience.map(moments => `
    <li>
        <h3 class="title">${moments.name}</h2>
        <span class="periodo">${moments.period}</span>
        <p>${moments.description}</p>
    </li>
`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileData(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortifolio(profileData)
    updateEducacionalexperience(profileData)
})()
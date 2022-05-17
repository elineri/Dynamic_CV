const xml = new XMLHttpRequest();
xml.open('GET', 'json/experience.json', true)

xml.onload = function(){
    if(this.status===200){
        const experiences = JSON.parse(this.responseText);
        let output = '';
        experiences.forEach(function(experience){
            output += `
            <section class="work">
                <h3>${experience.role}</h3>
                <h4>${experience.company}</h4>
                <p>${experience.location}</p>
                <p>${experience.period}</p>
            </section>
            `;
        });
        document.getElementById('experience').innerHTML = output;
    }
}
xml.send();

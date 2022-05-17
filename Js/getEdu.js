const xml = new XMLHttpRequest();
xml.open('GET', 'json/education.json', true)

xml.onload = function(){
    if(this.status===200){
        const educations = JSON.parse(this.responseText);
        let output = '';
        educations.forEach(function(education){
            output += `
            <section class="school">
            <h3>${education.subject}</h3>
            <h4>${education.school}, ${education.period}</h4>
            </section>
            `;
        });
        document.getElementById('education').innerHTML = output;
    }
}
xml.send();

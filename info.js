// Sample JSON data

let jsonData;

fetch('data.json')
    .then(response => response.json())
    .then(outdata => {
        jsonData = outdata.filter(
            item => item.name === decodeURIComponent(
                window.location.search.split('=')[1]
            ).replaceAll('+', ' ')
        )[0];
        generateHTML(jsonData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Function to generate HTML for each item
function generateHTML(hdata) {
    console.log(hdata);

    const name = document.getElementById('name');
    name.innerHTML = '<span class="hash">#</span> '+hdata.name;
    
    const author = document.getElementById('author');
    author.textContent = `made by ${hdata.author}`;
    
    // image
    const img = document.getElementById('image');
    img.src = hdata.image;

    // description
    const description = document.getElementById('description');
    description.textContent = hdata.description;

    // stats

    // hp
    const hp = document.getElementById('health');
    hp.innerHTML = hdata.hp;

    // damage
    const damage = document.getElementById('damage');
    damage.innerHTML = hdata.damage;

    // stamina
    const stamina = document.getElementById('stamina');
    stamina.innerHTML = hdata.stamina;

    // upgrades
    const upgrades = document.getElementById('upgrade');
    upgrades.innerHTML = "<span class=\"darker\">x</span>"+hdata.upgrade;

    // special
    const special = document.getElementById('special');
    special.textContent = hdata.special;

    // image link
    const imageurl = document.getElementById('imageurl');
    console.log(imageurl);
    imageurl.innerHTML = `<a href="${hdata.image}">`+hdata.image+"</a>";
}

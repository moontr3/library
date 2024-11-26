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
function generateHTML(data) {
    console.log(data);

    const name = document.getElementById('name');
    name.innerHTML = '<span class="hash">#</span> '+data.name;
    
    const author = document.getElementById('author');
    author.textContent = `made by ${data.author}`;
    
    // image
    const img = document.getElementById('image');
    img.src = data.image;

    // description
    const description = document.getElementById('description');
    description.textContent = data.description;

    // stats

    // hp
    const hp = document.getElementById('health');
    hp.innerHTML = data.hp;

    // damage
    const damage = document.getElementById('damage');
    damage.innerHTML = data.damage;

    // stamina
    const stamina = document.getElementById('stamina');
    stamina.innerHTML = data.stamina;

    // upgrades
    const upgrades = document.getElementById('upgrade');
    upgrades.innerHTML = "<span class=\"darker\">x</span>"+data.upgrade;

    // special
    const special = document.getElementById('special');
    special.textContent = data.special;

    // image link
    const imageurl = document.getElementById('imageurl');
    imageurl.innerHTML = `<a href="${data.image}">`+data.image+"</a>";
}

function filterItems(searchTerm) {
    const filteredData = jsonData.filter(
        item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const containter = document.getElementById("results");
    if (searchTerm) {
        containter.textContent = `found ${filteredData.length} result(s)`;
    } else {
        containter.textContent = 'from @hotdogwars_bot'
    }
    generateHTML(filteredData);
}

function searchItems() {
    const searchTerm = document.getElementById('search').value;
    filterItems(searchTerm);
}

// window.onload = () => {
//     generateHTML(jsonData);
// };

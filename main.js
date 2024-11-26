// Sample JSON data

let jsonData;

fetch('data.json')
    .then(response => response.json())
    .then(outdata => {
        jsonData = outdata;
        generateHTML(jsonData);
        const containter = document.getElementById("results");
        containter.textContent = 'from @hotdogwars_bot'
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to generate HTML for each item
function generateHTML(data) {
    const container = document.getElementById('items-container');
    container.innerHTML = '';

    data.forEach(item => {
        const itemDiv = document.createElement('a');
        itemDiv.classList.add('item');
        itemDiv.href = 'info.html?name='+encodeURIComponent(item.name).replace(/%20/g, '+');
        
        const img = document.createElement('img');
        img.src = item.image;
        img.classList.add('item-image');
        
        const name = document.createElement('div');
        name.classList.add('item-text');
        
        const nameText = document.createElement('h2');
        nameText.textContent = item.name;
        name.appendChild(nameText);
        
        const nameAuthor = document.createElement('p');
        nameAuthor.textContent = `made by ${item.author}`;
        nameAuthor.classList.add('gray');
        name.appendChild(nameAuthor);
        
        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        
        container.appendChild(itemDiv);
    });
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

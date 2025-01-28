const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Indian Fig",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli Fruit",
    "Vanilla",
    "Watermelon",
    "Xigua",
    "Yellow Passion Fruit",
    "Zucchini"
];

function searchItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    const filteredItems = items.filter(item => item.toLowerCase().includes(searchInput));

    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultsList.appendChild(li);
    });
}

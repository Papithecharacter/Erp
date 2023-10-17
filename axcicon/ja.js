const itemForm = document.getElementById('item-form');
const itemNameInput = document.getElementById('itemName');
const itemPriceInput = document.getElementById('itemPrice');
const itemTypeSelect = document.getElementById('itemType');
const itemList = document.getElementById('itemList');

itemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const itemName = itemNameInput.value;
    const itemPrice = itemPriceInput.value;
    const itemType = itemTypeSelect.value;

    if (itemName && itemPrice) {
        // Create a new list item to showcase the item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <b>Name:</b> ${itemName}, <b>Price:</b> $${itemPrice}, <b>Type:</b> ${itemType}
            <button class="remove-button">Remove</button>
        `;
        itemList.appendChild(listItem);

        // Clear the input fields
        itemNameInput.value = '';
        itemPriceInput.value = '';
        itemTypeSelect.value = 'Electronics';

        // Add a click event to remove the item
        const removeButton = listItem.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            itemList.removeChild(listItem);
        });
    }
});

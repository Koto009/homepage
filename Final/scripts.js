const savedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

// Display saved entries
function displayEntries() {
    const entriesContainer = document.getElementById('journal-entries');
    entriesContainer.innerHTML = '';

    savedEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.textContent = entry;
        entriesContainer.appendChild(entryDiv);
    });
}

// Save a new entry
function saveEntry() {
    const entryInput = document.getElementById('entry-input');
    const entryText = entryInput.value.trim();

    if (entryText !== '') {
        savedEntries.push(entryText);
        localStorage.setItem('journalEntries', JSON.stringify(savedEntries));
        entryInput.value = '';
        displayEntries();
    }
}

//  display of entries
displayEntries();

// Delete an entry
function deleteEntry(index) {
    savedEntries.splice(index, 1);
    localStorage.setItem('journalEntries', JSON.stringify(savedEntries));
    displayEntries();
}
function displayEntries() {
    const entriesContainer = document.getElementById('journal-entries');
    entriesContainer.innerHTML = '';

    savedEntries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.textContent = entry;

        // delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteEntry(index));

        entryDiv.appendChild(deleteButton);
        entriesContainer.appendChild(entryDiv);
    });
}
function saveEntry() {
    const entryInput = document.getElementById('entry-input');
    const entryText = entryInput.value.trim();

    if (entryText !== '') {
        const currentDate = new Date();
        const entryWithTimestamp = `${currentDate.toLocaleString()}: ${entryText}`;
        savedEntries.push(entryWithTimestamp);
        localStorage.setItem('journalEntries', JSON.stringify(savedEntries));
        entryInput.value = '';
        displayEntries();
    }
}

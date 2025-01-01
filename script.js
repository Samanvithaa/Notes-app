function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();

    if (noteText !== "") {
        const noteList = document.getElementById("note-list");
        const listItem = document.createElement("li");
        listItem.className = "note-item";
        listItem.innerHTML = `
            ${noteText}
            <span class="note-delete" onclick="deleteNote(this)">Delete</span>
        `;
        noteList.appendChild(listItem);

        noteInput.value = ""; 
    }
}

// Function to delete a note
function deleteNote(element) {
    const noteList = document.getElementById("note-list");
    const listItem = element.parentElement;
    noteList.removeChild(listItem);
}

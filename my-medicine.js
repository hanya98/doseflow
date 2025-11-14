/* SIDEBAR */
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("hide");
    document.getElementById("sidebarOverlay").classList.toggle("show");
}

/* MODAL */
function openMedicationModal() {
    document.getElementById("medicationModal").classList.remove("hidden");
}

function closeMedicationModal() {
    document.getElementById("medicationModal").classList.add("hidden");
}

/* SAVE NEW MEDICATION */
function saveMedication() {
    const name = document.getElementById("mName").value;
    const dose = document.getElementById("mDose").value;
    const freq = document.getElementById("mFreq").value;
    const purpose = document.getElementById("mPurpose").value;
    const time = document.getElementById("mTime").value;

    if (!name || !dose) {
        alert("Medication name & dosage are required.");
        return;
    }

    const row = `
        <tr>
            <td>${name}</td>
            <td><span class="pill">${dose}</span></td>
            <td>${freq}</td>
            <td>${purpose}</td>
            <td>${time}</td>
            <td><span class="status pending">⭕ Pending</span></td>
            <td class="more">⋮</td>
        </tr>
    `;

    document.getElementById("medicineList").innerHTML += row;

    closeMedicationModal();
}

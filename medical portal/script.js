// --- 1. MOCK DATABASE (Beginner way to store data) ---
// We store medical records in a simple list (Array of Objects)
let medicalRecords = [
    {
        id: 1,
        hospital: "City General Hospital",
        date: "2023-10-15",
        diagnosis: "Viral Fever Checkup",
        isEncrypted: true // [cite: 17] Default is encrypted
    },
    {
        id: 2,
        hospital: "Westside Orthopedics",
        date: "2023-11-02",
        diagnosis: "X-Ray: Right Ankle",
        isEncrypted: true
    },
    {
        id: 3,
        hospital: "Central Lab Diagnostics",
        date: "2024-01-20",
        diagnosis: "Blood Test (CBC & Lipid Profile)",
        isEncrypted: true
    }
];

// --- 2. RENDER FUNCTION (Displaying the list) ---
// This function loops through our data and puts it on the HTML page 
function renderRecords() {
    const listElement = document.getElementById("record-list");
    listElement.innerHTML = ""; // Clear current list

    medicalRecords.forEach(record => {
        // Determine the icon and text based on privacy status [cite: 19]
        let privacyIcon = record.isEncrypted ? "🔒" : "🔓";
        let statusText = record.isEncrypted ? "Encrypted (Private)" : "Visible to Doctor";
        let statusClass = record.isEncrypted ? "status-locked" : "status-unlocked";
        let buttonText = record.isEncrypted ? "Grant Access" : "Revoke Access";

        // Create the HTML for one row
        let rowHtml = `
            <li class="record-card">
                <div class="record-info">
                    <h4>${record.hospital}</h4>
                    <p class="record-date">${record.date}</p>
                    <p><strong>Diagnosis:</strong> ${record.diagnosis}</p>
                    <p class="${statusClass}">${privacyIcon} Status: ${statusText}</p>
                </div>
                <div class="record-actions">
                    <button onclick="togglePrivacy(${record.id})">${buttonText}</button>
                </div>
            </li>
        `;
        listElement.innerHTML += rowHtml;
    });
}

// --- 3. PRIVACY TOGGLE (Simulating Consent) ---
// Allows patient to control access [cite: 14]
function togglePrivacy(id) {
    // Find the record in our array
    let record = medicalRecords.find(r => r.id === id);
    
    // Toggle the boolean value
    if (record.isEncrypted) {
        // Simulation of consent confirmation [cite: 22]
        let confirmAccess = confirm("⚠️ Warning: You are about to decrypt this record for the doctor. Proceed?");
        if (confirmAccess) {
            record.isEncrypted = false;
        }
    } else {
        record.isEncrypted = true;
    }
    
    // Re-draw the list to show changes
    renderRecords();
}

// --- 4. INTEROPERABILITY (Simulating Uploads) ---
// Simulates parsing a file from another hospital [cite: 26]
function simulateUpload() {
    const fileInput = document.getElementById("fileInput");
    
    if (fileInput.files.length === 0) {
        alert("Please select a file first!");
        return;
    }

    // Pretend to read the file (Beginner trick: we just add dummy data regardless of file)
    alert("System: Detecting file format... Parsing JSON... Success!");

    const newRecord = {
        id: medicalRecords.length + 1,
        hospital: "External Clinic (Imported)",
        date: new Date().toISOString().split('T')[0], // Today's date
        diagnosis: "Imported Medical History Summary",
        isEncrypted: true
    };

    medicalRecords.push(newRecord);
    renderRecords();
    
    // Clear the input
    fileInput.value = "";
}

// --- 5. EMERGENCY ACCESS (The "Big Red Button") ---
//  Time-bound explicit access
function activateEmergency() {
    let confirmEmergency = confirm("🚨 EMERGENCY OVERRIDE 🚨\n\nThis will grant temporary access to ALL records for emergency responders.\n\nAre you sure?");
    
    if (confirmEmergency) {
        // Visual confirmation via UI simulation [cite: 33]
        document.body.style.backgroundColor = "#ffcccc"; // Light red background
        alert("EMERGENCY MODE ACTIVATED.\nAccess granted for 5 minutes.");

        // Unlock all records temporarily
        medicalRecords.forEach(r => r.isEncrypted = false);
        renderRecords();

        // Timer to reset (Simulating time-bound access) [cite: 32]
        setTimeout(() => {
            alert("Time Limit Expired. Emergency mode ended. Re-encrypting data.");
            document.body.style.backgroundColor = "#f4f7f6"; // Reset background
            medicalRecords.forEach(r => r.isEncrypted = true); // Lock everything again
            renderRecords();
        }, 10000); // Set to 10 seconds for demo purposes (normally 5 mins)
    }
}

// Run the render function when page loads
renderRecords();

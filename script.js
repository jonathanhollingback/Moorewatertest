function togglePartnerFields() {
    var marriedYes = document.getElementById('marriedYes');
    var partnerFieldsContainer = document.getElementById('partnerFieldsContainer');

    // Clear previous partner fields
    partnerFieldsContainer.innerHTML = '';

    // If married is checked, add partner's first and last name fields
    if (marriedYes.checked) {
        var partnerFirstNameInput = document.createElement('div');
        partnerFirstNameInput.classList.add('input-container');
        partnerFirstNameInput.innerHTML = '<label for="partnerFirstName">Partner\'s First Name:</label>' +
                                          '<input type="text" id="partnerFirstName" name="partnerFirstName">';

        var partnerLastNameInput = document.createElement('div');
        partnerLastNameInput.classList.add('input-container');
        partnerLastNameInput.innerHTML = '<label for="partnerLastName">Partner\'s Last Name:</label>' +
                                         '<input type="text" id="partnerLastName" name="partnerLastName">';

        // Append partner fields to the container
        partnerFieldsContainer.appendChild(partnerFirstNameInput);
        partnerFieldsContainer.appendChild(partnerLastNameInput);
    }
}

function showPartnerView() {
    var formView1 = document.getElementById('form-view-1');
    var formView2 = document.getElementById('form-view-2');

    formView1.style.display = 'none';
    formView2.style.display = 'block';
}

function showMainView() {
    var formView1 = document.getElementById('form-view-1');
    var formView2 = document.getElementById('form-view-2');

    formView2.style.display = 'none';
    formView1.style.display = 'block';
}

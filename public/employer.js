document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('jobForm');
    const disabilityRadios = document.getElementsByName('disabilityFriendly');
    const accommodationsField = document.getElementById('accommodationsField');

    disabilityRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'yes') {
                accommodationsField.classList.remove('hidden');
                document.getElementById('accommodations').required = true;
            } else {
                accommodationsField.classList.add('hidden');
                document.getElementById('accommodations').required = false;
            }
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const minSalary = parseInt(document.getElementById('salaryMin').value);
        const maxSalary = parseInt(document.getElementById('salaryMax').value);
        
        if (maxSalary <= minSalary) {
            alert('Maximum salary must be greater than minimum salary');
            return;
        }

        const formData = {
            companyName: document.getElementById('companyName').value,
            jobTitle: document.getElementById('jobTitle').value,
            location: document.getElementById('location').value,
            salaryRange: {
                min: minSalary,
                max: maxSalary
            },
            description: document.getElementById('description').value,
            requirements: document.getElementById('requirements').value,
            employmentType: document.querySelector('input[name="employmentType"]:checked').value,
            disabilityFriendly: document.querySelector('input[name="disabilityFriendly"]:checked').value,
            accommodations: document.getElementById('accommodations').value
        };

        console.log('Form submitted:', formData);
        alert('Job posted successfully!');
        form.reset();
        accommodationsField.classList.add('hidden');
    });
});
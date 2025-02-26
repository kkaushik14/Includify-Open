const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        }
    });

    document.addEventListener('DOMContentLoaded', async () => {
        const jobSearchForm = document.getElementById('jobSearchForm');
        const jobList = document.getElementById('jobList');
    
        hospitalSearchForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(jobSearchForm);
            const searchParams = new URLSearchParams(formData).toString();
    
            try {
                const response = await fetch(`/api/jobs?${searchParams}`);
                const jobs = await response.json();
    
                jobList.innerHTML = '';
    
                jobs.forEach(job => {
                    const jobDiv = document.createElement('div');
                    jobDiv.classList.add('jobs');
    
                    jobDiv.innerHTML = `
                        <h2>${job.name}</h2>
                        <p><strong>Address:</strong> ${job.address}</p>
                        <p><strong>Contact:</strong> ${job.contact}</p>
                        <p><strong>Services:</strong> ${job.services.join(', ')}</p>
                    `;
    
                    jobList.appendChild(jobDiv);
                });
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        });
    });

    document.getElementById('jobSearchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = document.getElementById('companyName').value.toLowerCase();
        const jobCards = document.querySelectorAll('.job-card');

        jobCards.forEach(card => {
            const jobTitle = card.querySelector('h3').textContent.toLowerCase();
            const jobLocation = card.querySelector('.bi-geo-alt').parentNode.textContent.toLowerCase();
            
            if (jobTitle.includes(searchTerm) || jobLocation.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
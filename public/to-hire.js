//sample candidate data
const candidates = [
    {
        name: "Alex Morgan",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        role: "Frontend Developer",
        experience: "3 years",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        salary : "$60,000 - $80,000",
        disability: "Visual Impairment",
        location: "Remote"
    },
    {
        name: "Kumar Kaushik",
        image: "https://www.shutterstock.com/image-illustration/cool-anime-guy-casual-outfit-600nw-2258372411.jpg",
        role: "Frontend Developer",
        experience: "2 years",
        skills: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "ExpressJS"],
        salary : "$60,000 - $80,000",
        disability: "Visual Impairment",
        location: "Remote"
    },
];

function createCandidateCards() {
    const grid = document.getElementById('candidateGrid');
    candidates.forEach(candidate => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-6 card-hover';
        card.innerHTML = `
            <div class="mb-4">
                <img src="${candidate.image}" alt="" class="w-20 h-20 rounded-full mx-auto">
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">${candidate.name}</h3>
            <p class="text-gray-600 text-center mb-4">${candidate.role}</p>
            <div class="space-y-2">
                <p><i class="bi bi-briefcase me-2"></i>${candidate.experience} experience</p>
                <p><i class="bi bi-geo-alt me-2"></i>${candidate.location}</p>
                <p><i class="bi bi-currency-dollar me-2"></i>${candidate.salary}</p>
            </div>
            <div class="mt-4">
                <p class="text-sm font-medium mb-2">Skills:</p>
                <div class="flex flex-wrap gap-2">
                    ${candidate.skills.map(skill => 
                        `<span class="bg-gray-100 px-2 py-1 rounded-full text-sm">${skill}</span>`
                    ).join('')}
                </div>
            </div>
            <button class="w-full mt-6 bg-[#3f4243] text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                Contact Candidate
            </button>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createCandidateCards);
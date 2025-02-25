// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

const educationData = {
    primary: {
        classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
        subjects: ['Mathematics', 'English', 'Science', 'Social Studies']
    },
    secondary: {
        classes: ['Class 6', 'Class 7', 'Class 8'],
        subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Languages']
    },
    higher: {
        classes: ['Class 9', 'Class 10', 'Class 11', 'Class 12'],
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science']
    }
};

let currentLevel = '';

function showEducationLevel(level) {
    currentLevel = level;
    document.getElementById('educationContent').classList.remove('hidden');
    document.getElementById('scholarshipContent').classList.add('hidden');
    document.getElementById('govtExamsContent').classList.add('hidden');
    
    const dropdown = document.getElementById('classDropdown');
    dropdown.innerHTML = '<option value="">Choose a class</option>';
    
    educationData[level].classes.forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = className;
        dropdown.appendChild(option);
    });

    document.getElementById('subjectSelection').classList.add('hidden');
    document.getElementById('videoContent').classList.add('hidden');
}

function showSubjects() {
    const selectedClass = document.getElementById('classDropdown').value;
    if (!selectedClass) return;

    const subjectDropdown = document.getElementById('subjectDropdown');
    subjectDropdown.innerHTML = '<option value="">Choose a subject</option>';
    
    educationData[currentLevel].subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectDropdown.appendChild(option);
    });

    document.getElementById('subjectSelection').classList.remove('hidden');
    document.getElementById('videoContent').classList.add('hidden');
}

function showVideos() {
    const selectedSubject = document.getElementById('subjectDropdown').value;
    if (!selectedSubject) return;

    const videoContent = document.getElementById('videoContent');
    const videoContainer = videoContent.querySelector('.grid');
    videoContainer.innerHTML = '';

    const subjectName = document.getElementById('subjectName');
    subjectName.textContent = `${selectedSubject} videos`;

    // Sample video data
    const sampleVideos = [
        { title: `${selectedSubject} - Chapter 1`, duration: "10:25" },
        { title: `${selectedSubject} - Chapter 2`, duration: "15:30" },
        { title: `${selectedSubject} - Chapter 3`, duration: "12:15" },
        { title: `${selectedSubject} - Chapter 4`, duration: "08:45" }
    ];

    sampleVideos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'bg-gray-100 p-4 rounded-lg';
        videoElement.innerHTML = `
            <div class="aspect-w-16 aspect-h-9 mb-2 bg-gray-200 flex items-center justify-center">
                <i class="bi bi-play-circle text-4xl"></i>
            </div>
            <h4 class="font-semibold">${video.title}</h4>
            <p class="text-gray-600">Duration: ${video.duration}</p>
        `;
        videoContainer.appendChild(videoElement);
    });

    videoContent.classList.remove('hidden');
}

function showScholarships() {
    document.getElementById('educationContent').classList.add('hidden');
    document.getElementById('scholarshipContent').classList.remove('hidden');
    document.getElementById('govtExamsContent').classList.add('hidden');
}

function showGovtExams() {
    document.getElementById('educationContent').classList.add('hidden');
    document.getElementById('scholarshipContent').classList.add('hidden');
    document.getElementById('govtExamsContent').classList.remove('hidden');
}
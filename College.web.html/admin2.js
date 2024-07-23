function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Student details submitted!');
    this.reset();
});

document.getElementById('staffForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Staff details submitted!');
    this.reset();
});

document.getElementById('viewStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Viewing student details!');
});

document.getElementById('lessonPlanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Lesson plan uploaded!');
    this.reset();
});

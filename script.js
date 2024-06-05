let courseCounter = 1;

function addCourse() {
    courseCounter++;
    const container = document.getElementById('course-container');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'form-group course';
    courseDiv.innerHTML = `
        <input type="text" name="course-name" placeholder="Subject ${courseCounter}">
        <input type="number" name="credits" placeholder="Credits" required>
        <select name="grade" required>
            <option value="4.0">A</option>
            <option value="3.0">B</option>
            <option value="2.0">C</option>
            <option value="1.0">D</option>
            <option value="0.0">F</option>
        </select>
    `;
    container.appendChild(courseDiv);
}

document.getElementById('gpa-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const courses = document.querySelectorAll('.course');
    let totalGradePoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
        const credits = parseFloat(course.querySelector('input[name="credits"]').value);
        const grade = parseFloat(course.querySelector('select[name="grade"]').value);
        totalGradePoints += credits * grade;
        totalCredits += credits;
    });

    const gpa = totalGradePoints / totalCredits;
    document.getElementById('gpa-result').textContent = gpa.toFixed(2);
});

function clearForm() {
    document.getElementById('gpa-form').reset();
    document.getElementById('gpa-result').textContent = '0.00';
    const container = document.getElementById('course-container');
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
}
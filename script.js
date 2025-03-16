// Course data (Replace with more courses)
const courses = [
    { name: "Python for Beginners", link: "https://www.coursera.org/learn/python" },
    { name: "JavaScript Basics", link: "https://www.udemy.com/course/javascript-basics/" },
    { name: "MIT Introduction to Computer Science", link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/" },
    { name: "Machine Learning by Stanford", link: "https://www.coursera.org/learn/machine-learning" }
];

// Function to display courses based on search
function displayCourses(searchTerm) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear previous results

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredCourses.length === 0) {
        courseList.innerHTML = "<p>No courses found.</p>";
    } else {
        filteredCourses.forEach(course => {
            const courseItem = document.createElement("div");
            courseItem.classList.add("course-item");
            courseItem.innerHTML = `<a href="${course.link}" target="_blank">${course.name}</a>`;
            courseList.appendChild(courseItem);
        });
    }
}

// Search functionality
document.getElementById("searchBox").addEventListener("input", function () {
    displayCourses(this.value);
});

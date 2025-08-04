const addButtonElement = document.querySelectorAll(".add-exercise");
const scheduleExerciseTableElement = document.querySelector(".workout-split-table table");

addButtonElement.forEach(element => {
    const newExercise = [];
    element.addEventListener('click', () => {
        const childElement = [...element.parentNode.children].filter(child => child != element);
        childElement.forEach(child => {
            newExercise.push(child.innerHTML)
        });
        console.log(newExercise);
        console.log(scheduleExerciseTableElement);

        let newExerciseForSchedule = document.createElement('tr');
        newExerciseForSchedule.textContent =

            `
                        <td>${newExercise[0]}</td>
                        <td class="sets"><input type="number" value="3"></td>
                        <td class="reps"><input type="number" value="10"></td>
                        <td class="weight"><input type="text" placeholder="Bodyweight"></td>
                        <td class="level-column"><span>Beginner</span></td>
                        <td class="edit-column"><img src="pic/edit.png" alt=""></td>
                        <td class="delete-column"><img src="pic/delete.png" alt=""></td>
                        `;
        scheduleExerciseTableElement.appendChild(newExerciseForSchedule);

    });


});


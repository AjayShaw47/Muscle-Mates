const addButtonElement = document.querySelectorAll(".add-exercise");
const scheduleExerciseTableElement = document.querySelector(".workout-split-table table");
const editScheduleElement = document.querySelectorAll(".edit-column");
const deleteScheduleElement = document.querySelectorAll(".delete-column");


addButtonElement.forEach(element => {
    const newExercise = [];
    element.addEventListener('click', () => {
        const childElement = [...element.parentNode.children].filter(child => child != element);
        childElement.forEach(child => {
            newExercise.push(child.innerHTML)
        });
        console.log(newExercise);

        let newExerciseForSchedule =

            `           <tr>
                        <td>${newExercise[0]}</td>
                        <td class="sets"><input type="number" value="3"></td>
                        <td class="reps"><input type="number" value="10"></td>
                        <td class="weight"><input type="text" placeholder="Bodyweight"></td>
                        <td class="level-column"><span>Beginner</span></td>
                        <td class="edit-column"><img src="pic/edit.png" alt=""></td>
                        <td class="delete-column"><img src="pic/delete.png" alt=""></td>
                        </tr>
                        `;
        scheduleExerciseTableElement.insertAdjacentHTML('beforeend', newExerciseForSchedule);

    });


});
/*
editScheduleElement.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element);
    }

    );
});
*/

scheduleExerciseTableElement.addEventListener('click', e => {
    const deleteBtn = e.target.closest('.delete-column');  // closest() only looks at the clicked element and its ancestors(Upward Search), not siblings or children
    if (deleteBtn) {
        deleteBtn.closest('tr')?.remove();
        return;
    }
    const editBtn = e.target.closest('.edit-column');
    if (editBtn) {
        const row = editBtn.closest('tr');
        const inputs = row?.querySelectorAll('input');

        if (editBtn.classList.contains('view-mode')) {
            editBtn.classList.remove('view-mode');
            editBtn.classList.add('edit-mode');


            inputs.forEach(input => {
                input.disabled = false;
                input.style.border = '1px solid black';

            });
            inputs[0].focus();

        }
        else {
            editBtn.classList.remove('edit-mode');
            editBtn.classList.add('view-mode');

            inputs.forEach(input => {
                input.disabled = true;
                input.style.border = 'none';

            });

        }
    }

});


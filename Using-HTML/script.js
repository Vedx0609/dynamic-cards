document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('input[name="cars"]');
    var descriptions = document.querySelectorAll('.description');

    buttons.forEach(function (button, index) {
        button.addEventListener('change', function () {
            descriptions.forEach(function (description) {
                description.style.display = 'none';
            });

            descriptions[index].style.display = 'block';
        });
    });

    // Initially display the description of the first card
    descriptions[0].style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function () {
    var selects = document.querySelectorAll('select');

    selects.forEach(function (select) {
        select.addEventListener('change', function () {
            select.style.backgroundColor = '';
            select.style.color = '';

            var selectedOption = select.options[select.selectedIndex];

            switch (selectedOption.value) {
                case 'approved':
                    select.style.backgroundColor = '#C1FFC1';
                    select.style.color = '#006400'; 
                    break;
                case 'in-progress':
                    select.style.backgroundColor = '#d7beee'; 
                    select.style.color = '#800080'; 
                    break;
                case 'in-review':
                    select.style.backgroundColor = '#ffe4b5'; 
                    select.style.color = '#ff6347';
                    break;
                default:
                    break;
            }
        });
    });
});
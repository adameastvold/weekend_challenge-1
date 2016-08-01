$(document).ready(function() {

    var monthlyAmount = 0;
    var totalMonthly = 0;

    $('#employeeinfo').on('submit', function() {
        event.preventDefault();

        var employee = {};

        var fields = $('#employeeinfo').serializeArray(); //DO NOT TOUCH

        fields.forEach(function(element, index, array) {
            employee[element.name] = element.value;
        });

        // console.log(employee);

        $('#employeeinfo').find('input[type=text]').val('');


        appendDom(employee);


        function appendDom(empInfo) {
            $('#container').append('<div class="person"></div>');
            var $el = $('#container').children().last();


            employee.employeeSalary = parseInt(employee.employeeSalary); //change type to number
            console.log(typeof employee.employeeSalary);



            $el.append('<p class="information">' + empInfo.employeeFirstName +
                ' ' + empInfo.employeeLastName + ' | ' + empInfo.employeeID +
                ' | ' + empInfo.employeeJobTitle + ' | ' + empInfo.employeeSalary +
                ' | <button class="delete">Delete</button></p>');


            monthlyAmount = parseInt(employee.employeeSalary) / 12;
            totalMonthly = totalMonthly + monthlyAmount;


            $('.monthlyRate').empty();
            $('#counter').append('<p class="monthlyRate">$' + totalMonthly + ' per Month</p>');

        }

        $('.information').click(function() {
            console.log('what');
            $(this).remove('.information');
        });

    });

});

myApp.controller("taskController", ["$scope", function($scope) {
    console.log("task Controller is up and running");

    $scope.employeeArray = [];
    $scope.employeeInfo = {};
    console.log($scope.employeeInfo);


    var monthlyAmount = 0;
    $scope.totalMonthly = 0;

    $scope.submitEmployee = function() {

        if ($scope.employeeInfo.ID == '') {
            alert('please enter employee ID');
        };

        $scope.employeeInfo.salary = $scope.employeeInfo.salary * 1;

        monthlyAmount = $scope.employeeInfo.salary / 12;
        $scope.totalMonthly = $scope.totalMonthly + monthlyAmount;

        // $scope.employeeInfo.monthlySalary = totalMonthly;



        $scope.employeeArray.push($scope.employeeInfo);
        $scope.employeeInfo = {};

        console.log($scope.employeeArray);

    }

    $scope.deleteEmployee = function(id) {
        if (confirm("Delete this employee?")) {
            console.log('delete employee id ', id);
            // console.log($scope.employeeArray);
            $scope.employeeArray.forEach(function(employee, i) {
                console.log(employee);
                if (employee.ID == id) {

                    var tempEmpMonthly = employee.salary / 12;
                    $scope.totalMonthly -= tempEmpMonthly;
                    console.log($scope.totalMonthly);



                    $scope.tempArray = $scope.employeeArray;

                    console.log('this is what needs to get sliced:', $scope.tempArray[i]);
                    $scope.tempArray.splice(i, 1);
                    console.log('this is what the slice slices:', $scope.tempArray.splice(i, 0));
                    $scope.employeeArray = $scope.tempArray;
                    console.log('this is after slice:', $scope.employeeArray);
                    //create temporary array, get rid of object, push new array into old array, which is now blank
                    //or
                    //TRY SPLICE?
                };
            });
        };

    };


    //     monthlyAmount = parseInt(employee.employeeSalary) / 12;
    //     totalMonthly = totalMonthly + monthlyAmount;
    //
    //
    //     $('.monthlyRate').empty();
    //     $('#counter').append('<p class="monthlyRate">$' + totalMonthly + ' per Month</p>');
    //
    // }
    //
    // $('.information').click(function() {
    //     $(this).remove('.information');
    // });



}]);

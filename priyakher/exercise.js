var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------

  var len=exercise.salaries.length;
  var item=exercise.salary;
  var result=[];
  for( var i =0 ;i < len; i++)

{
    var curSal= Number(exercise.salaries[i][18])
    if (exercise.largerSalary(curSal)==true)
    {
    result.push(curSal);

    }
}

console.log(result);
return result;
};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------


    if ( exercise.salary<item)
    return true;
    else
    return false;
};
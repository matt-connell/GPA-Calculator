


function submitGrades(){
    //get the number of courses
    var courses = document.getElementById("courseNum").value;
    console.log(courses);

    var i = 0;
    //will get the grade input from the user
    for (i = 0; i < courses; i++){
        //creating elements
        var grade = document.createElement("INPUT");
        var break1 = document.createElement('br');
        var break2 = document.createElement('br');
        
        //setting attribite for input 
        grade.setAttribute("type", "text");
        //grade.setAttribute("class", "inputElements");
        grade.setAttribute("placeholder", "Enter Grade");
        grade.setAttribute("id", i);

        //appending elements to the screen
        document.body.appendChild(break1);
        document.body.appendChild(grade);
        document.body.appendChild(break2);

    }

    //creating button and break elements
    var button = document.createElement("BUTTON");
    var break1 = document.createElement('br');

    var grades_array = new Array();

    //setting the text and id - sub
    button.innerHTML = "Next";
    button.setAttribute("id", "sub");

    document.body.appendChild(break1);
    document.body.appendChild(button);

    //function that runs when the previous button is clicked
    document.getElementById("sub").onclick = function() {
        var i = 0;
        //will add each grade input to the array
        while (i < courses){
            console.log(document.getElementById(i).value);
            var current = document.getElementById(i).value;
            grades_array.push(current);
            i++;
        }
        

        var j = 0;
        let sum = 0;
        let average = 0;

        //temporary array
        var tempArr = new Array();

        //calculating the average
        for (j = 0; j < grades_array.length; j++){
            tempArr[j] = parseFloat(grades_array[j], 10);
            sum += tempArr[j];
        }
        
        average = sum/courses;
        console.log(average);
        
        //outputing to the screen
        var result = document.createElement("P");
        result.innerText = "GPA = " + average;
        document.body.appendChild(result);
        
        
    }


    





}


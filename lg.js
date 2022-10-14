var marksOfStudents=prompt("Enter Number: ");
if(marksOfStudents>80 && marksOfStudents<100){
    document.write("Congratulations You got A+ "+"<br>");
}
else if(marksOfStudents>60 && marksOfStudents<80){
    document.write("WoW You got A "+"<br>");
}
else if(marksOfStudents>40 && marksOfStudents<60){
    document.write("WoW You got B "+"<br>");
}
else if(marksOfStudents>33 && marksOfStudents<40){
    document.write("You have passed "+"<br>");
}
else{
    document.write("Don't Be Sad Better luck Next Time.")
}
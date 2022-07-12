color = 'blue' ;

switch(color)
{
    case 'red' : console.log("Q1: Red's a great color on you.");break;
    case 'blue' : console.log("Q1: Blue? Great choice.");break;
    case 'green' : console.log("Q1: Ok. Green it is.");break;
    case 'yellow' : console.log("Q1: Not what I would have picked, but yellow is fine.");
    default : console.log("Q1: The aim of the game is to pick a color.")
}

grade = 'D';
switch(grade)
{
    case 'A': console.log("Q2: A - Well done!");break;
    case 'B': console.log("Q2: B - Good on you!");break;
    case 'C': console.log("Q2: C - Good effort");break;
    case 'D': console.log("Q2: D - Try harder next time...");break;
    default : console.log("Q2: Yikes...")
}

fruit = 'orange';
switch(fruit)
{
    case 'apple': console.log("Q3: An apple a day keeps the doctor away.");break;
    case 'banana': console.log("Q3: Bananas are full of potassium.");break;
    case 'orange': console.log("Q3: Yep, oranges. Great choice.");break;
    case 'strawberry': console.log("Q3: Mmmm...nothing better than strawberries.")
    default : console.log("Q3: PICK A FRUIT");
}
percentageComplete = 50
switch(true){
    case percentageComplete<30: console.log("Q4: Still a long way to go");break;
    case percentageComplete<=50: console.log("Q4: Slowly getting there");break;
    case percentageComplete<80: console.log("Q4: You can do it!");break;
    case percentageComplete<99: console.log("Q4: This is the last push!");break;
    case percentageComplete=100: console.log("Q4: You're there. Well done!")
}

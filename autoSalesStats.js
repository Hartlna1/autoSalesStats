/* 
Programmer: 	Nanette K. Hartley
Language: 		JavaScript
Filename:  		autoSalesStats.js
Date: 			10/8/2013
Description: 	Calculates the total of the quarterly sales for the year, and then outputs the average of the sales.  
*/

//declaration of variables and constants
var BR = "<br />";						//HTML line break
var ES = " ";							//HTML extra space
var LE = ".";							//HTML line end
var quarterOne = 0.0;					//Quarter one sales
var quaterTwo = 0.0; 					//Quarter two sales
var quarterThree = 0.0;					//Quarter three sales
var quarterFour = 0.0;					//Quarter four sales
total = 0.0;							//total of sales
average = 0.0;							//average of quarterly sales
NAME = "Bennet's Used Auto Sales";		//name of the dealership

//Welcome the user to the program
document.write("Welcome to" + ES + NAME + "!" + ES + ES + "This program will calculate the yearly total sales and the average quarterly sales from the sales per quarter." + BR + BR);

//Getting user input
quarterOne = prompt("In order to calculate the average quarterly sales and the total sales for the year, I need the quarter one sales:");
quarterOne = parseFloat(quarterOne);
quarterTwo = prompt("Quarter two sales:");
quarterTwo = parseFloat(quarterTwo);
//quarterThree = prompt("Quarter three sales:");
//quarterThree = parseFloat(quarterThree);
//quarterFour = prompt("Quarter four sales:");
//quarterFour = parseFloat(quarterFour);

//Processing input to provide output 
//total = quarterOne + quarterTwo + quarterThree+ quarterFour;
//average = total/4;

//Output of data
//document.write("Given quarterly sales of" + ES + quarterOne.toFix(2) + "," + ES + quarterTwo.toFix(2) + "," + ES + quarterThree.toFix(2) + "," + ES + quarterFour.toFix(2) + "," + ES "the yearly total is:" + ES + total.toFix(2) + LE + BR);
//document.write("The quarterly average is:" + ES + average.toFix(2) + LE + BR + BR);

//Thank the user and end the program
//document.write("Thank you for using our program!" + BR);
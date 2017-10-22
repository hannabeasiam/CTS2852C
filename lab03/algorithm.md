'''
A country has coins worth values of 16, 8, 4, 2 and 1 unit(s).

determine the minimum number of coins of each value that
make up an integer value between 20 and 100 entered by a visitor to the web page.
Display the integer value and the number of coins of each value to the visitor.


prompt user input number between 20 to 100 integer

validate integer & if entered value is between 20 to 100

if not validate - prompt again 'this is not valid number'

Ask user if you want to play again, please enter, no - close

// validate 20-100

coin16 =( input / 16 )convert as integer
remain16 = input % 16

coin8 = ( remain16 / 8 ) convert as integer
remain8 = input % 8

con4 = (remain8 / 4 ) convert as integer
remain4 = input % 4

con2 = (remain4 / 2 ) convert as integer
remain2 = input % 2

con1 = (remain2 / 1 ) convert as integer
remain1 = input % 1

if any con16,8,4,2,1 is less then 1, do not display

display con16,8,4,2,1 

'''

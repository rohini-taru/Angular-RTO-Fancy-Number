# ng9-rto-fancy-number

RTO - Print Fancy Number

Given: 
(1) Range of numbers 
(2) Single digit number

Conditions: 
(1) Number should contain given single digit AND
(2) Sum of digits of the number should be equal to given single digit number

------------------------------

Assumptions: 
(1) Min range < max Range 
(2) Range numbers are not empty and valid numbers 
(3) Single digit number is of length one and valid number from 0 to 9

------------------------------

Output Cases:
(1) Range: 18 to 22 for single digit 2 => [20]
(2) Range: 5 to 500 for single digit 9 => [20, 200]
(3) Range: 1000 to 5000 for single digit 2 => [2000]
(4) Range: 2000 to 4000 for single digit 2 => [2000]
(5) Range: 2000 to 4000 for single digit 3 => [3000]
(6) Range: 2000 to 4000 for single digit 4 => [4000]
(7) Range: 2000 to 4000 for single digit 5 => 'No fancy number found!
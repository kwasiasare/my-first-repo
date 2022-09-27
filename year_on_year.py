


import math
import statistics

list = (36, 55, 15, 0, 37, 17, 68, -10, -21, 100, 12, 26, 9, 59, -28, 27)

x = statistics.mean(list)
print("Mean is :", round(x, 2))

y = statistics.median(list)
print("Median is :", y)

z = statistics.median_low (list)
print("Median low is :", round(z, 2))

a = statistics.median_high(list)
print("Median high is :", round(a, 2))

b = statistics.median_grouped(list)
print("Median grouped is :", round(b, 2))

c = statistics.mode(list)
print("Mode is :", round(c, 2))



#for nums in list:
 #   print(nums) 

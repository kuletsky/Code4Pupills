# print('Hello World')
#
# a = 4
# print(a)
# print(type(a))
#
# b = 234.3
# print(type(b))
#
# c = 'hi'
# print(type(c))
#
# required = True
# print(type(required))
#
# c = a + b
# print(c)
#
# print(required)
# # print(!required)

s = "Перевыборы выбранного президента"

for char in s:
    if char == 'о':
        print(char, end=' ')
        
        
print(s.count('е'))
    
    
array = [["Привет", "всем", "кто"],
         ["изучает", "язык", "программирования"],
         ["java"]]

count = 0

# Loop through each row
for row in array:
    contains_e = False

    # Loop through each word in the row
    for word in row:
        if 'е' in word:  # Check if the word contains the letter 'е'
            contains_e = True
            break  # No need to check further if 'е' is found

    # If no word in the row contains 'е', increment the count
    if not contains_e:
        count += 1

print(f"Number of rows without 'е': {count}")
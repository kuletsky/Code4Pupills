flag = True

if not flag:
    print('Condition satisfied')
else:
    print('Condition NOT satisfied')


i = 0
while i<10:
    i+=1
    print('I am inside loop - ' + str(i))


i = 0
while True:
    i += 1
    if i < 10:
        break
print(i)
flag = True

if not flag:
    print('Condition satisfied')
else:
    print('Condition NOT satisfied')


i = 0
while i>10:
    i+=1
    print('I am inside loop - ' + str(i))


i = 0
while True:
    i += 1
    if i < 10:
        break
print(i)


k=1
n=0
for k in range(5, 100):
    if k%2 == 0 and k%5 == 0:
        print('k%2 = '+str(k))
        n+=1
        if n==3:
            break    



required = True
while required:
    print(required)
    required = False

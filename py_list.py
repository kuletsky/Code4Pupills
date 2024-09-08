marks = [10,20,30,40]
print(marks[2])          

marks[3] = 50
print(marks)
print(len(marks))

marks.append(60)
print(marks)

marks.pop()
print(marks)

marks.insert(0, 5)
print(marks)

print(marks.index(50))

print(100 in marks)

sub_marks = marks[1: 3]
print(sub_marks)

summ = 0
i = 0     
for i in range(len(marks)):
    summ = summ + marks[i]
    print(marks[i], summ)

total = sum(marks)
print(total)


scores = [3, 7, 9, 12, 16]
evenScore = []

i=0
for i in range(len(scores)):
    if scores[i]%2 == 0:
        evenScore.append(scores[i])
print(evenScore)


# for score in scores:
#     if scores[i] > 12:
#         evenScore.append(scores[i])
# print(evenScore)

newscores = [score for score in scores if score > 12]
print(newscores)


numbers = [1, 2, 3, 4]
doubled = map(lambda x: x * 2, numbers)
print(list(doubled))

arr = [12,3,19,16,14]

arr1 = sorted(arr)
arr.sort(reverse=True)
print(arr, arr1)
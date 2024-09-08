
person = {
    'first_name':'Tim',
    'last_name':'Joe',
    'age':'24'
}

print(person['last_name'])

person['first_name']= 'Tim Dane'
print(person)

person['gender']='male'
print(person)

del person['gender']
print(person)

print('gender' in person)


for key in person:
    print(person[key])

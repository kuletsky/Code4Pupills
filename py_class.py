
class Person:
    age = 25


    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


    def location(self):
        return "Canada"


    def fullname(self):
        print(f"{self.first_name} {self.last_name}")


# person = Person('Tim', 'Joseph')
# person1 = Person('Chris', 'Jones')

# print(person.age)
# print(person.location())

# person.fullname()
# person1.fullname()
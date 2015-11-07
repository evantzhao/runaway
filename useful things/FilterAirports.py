f = open('C:\\users\\Winston\\Documents\\jetblueDestinations.txt')
for line in f.readlines():
    items=line.split(",")
    print(items[4]+","+items[6]+","+items[7])

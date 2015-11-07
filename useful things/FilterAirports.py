f = open('C:\\users\\Winston\\Documents\\Jetblue Origins.csv')
airports = []
for line in f.readlines():
    if line[:3] not in airports:
        airports.append(line[:3])
print(airports)

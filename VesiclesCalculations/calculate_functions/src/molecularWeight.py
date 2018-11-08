import math

def calculateMolWeight(info, data):
    diameter_start = int(info['diameterStart'])
    diameter_end = int(info['diameterEnd'])
    step = int(info['step'])
    lipidCount = int(info['lipidCount'])

    lipids = data['lipids']
    averageLipidArea = 0
    averageLipidHeight = 0
    for lipid in lipids:
        area = float(lipid['area'])
        percentage = float(lipid['percentage'])
        height = float(lipid['height'])

        averageLipidArea += area * percentage
        averageLipidHeight += height * percentage

    averageLipidArea = averageLipidArea / 100
    averageLipidHeight = averageLipidHeight / 100

    # Iterate each step and calculate vesicle area by diameter
    for outerDiameter in range(diameter_start, diameter_end + 1, step):
        innerDiameter = outerDiameter - (averageLipidHeight * 2)
        outerArea = 4 * math.pi * math.pow(outerDiameter / 2, 2)
        innerArea = 4 * math.pi * math.pow(innerDiameter / 2, 2)
        area = outerArea + innerArea

        # using calculated area and average lipid area 
        # calculate average lipid count in vesicle
        lipidInVesicle = area / averageLipidArea 

        # Set range for lipids in vesicle
        lipidMin = lipidInVesicle - 10 
        lipidMax = lipidInVesicle + 10 

        # find best fitting lipids count in vesicle
        currentLipidsInVesicle = 0
        for i in range(0, 100):
            currentLipidsInVesicle = lipidsInVesicle(lipids, area, lipidMin - i, lipidMax + i + 1)
            if(currentLipidsInVesicle != -1):
                break

        if(currentLipidsInVesicle == -1):
            raise Exception('Optimal lipid count in vesicle not found. Check your data!')

        # calculate molecular weight using best fitting lipid count in vesicle
        totalMolWeight = 0
        for lipid in lipids:
            totalMolWeight += float(lipid['molWeight']) * currentLipidsInVesicle * float(lipid['percentage'])

    return data

# Method for iterating from lipid min to max and finding best fitting totalLipidArea 
def lipidsInVesicle(lipids, area, lipidMin, lipidMax):
    currentLipidsInVesicle = 0
    for i in range(lipidMin, lipidMax):
        lipid = lipids[i]
        currentLipidsInVesicle = lipidMin + i
        totalLipidArea = 0

        for lipid in lipids:
            lipidArea = float(lipid['area'])
            percentage = float(lipid['percentage'])
            totalLipidArea += (currentLipidsInVesicle * percentage) * lipidArea

        # 0.1 is epsilon or area max difference 
        if(totalLipidArea - 0.1 < area and totalLipidArea + 0.1 > area):
            return currentLipidsInVesicle
    return -1
    
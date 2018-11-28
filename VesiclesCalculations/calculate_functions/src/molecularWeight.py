import math

def calculateMolWeight(reqData):
    info = reqData['info']
    data = reqData['data']

    diameter_start = int(info['diameterStart'])
    diameter_end = int(info['diameterEnd'])
    step = int(info['step'])
    lipidCount = int(info['lipidsCount'])

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

    result = []

    # Iterate each step and calculate vesicle area by diameter
    for outerDiameter in range(diameter_start, diameter_end + 1, step):
        innerDiameter = outerDiameter - (averageLipidHeight * 2)
        outerArea = 4 * math.pi * math.pow(outerDiameter / 2, 2)
        innerArea = 4 * math.pi * math.pow(innerDiameter / 2, 2)
        area = outerArea + innerArea

        # using calculated area and average lipid area 
        # calculate average lipid count in vesicle
        lipidInVesicle = int(area / averageLipidArea) 

        # Set range for lipids in vesicle
        lipidMin = lipidInVesicle - 10 
        lipidMax = lipidInVesicle + 10 

        # find best fitting lipids count in vesicle
        currentLipidsInVesicle = 0
        for i in range(0, 100):
            currentLipidsInVesicle = calculateLipidsInVesicle(lipids, area, lipidMin - i, lipidMax + i + 1)
            if(currentLipidsInVesicle != -1):
                break

        if(currentLipidsInVesicle == -1):
            raise Exception('Optimal lipid count in vesicle not found. Check your data!')

        # calculate molecular weight using best fitting lipid count in vesicle
        totalMolWeight = 0
        for lipid in lipids:
            totalMolWeight += float(lipid['molWeight']) * currentLipidsInVesicle * (float(lipid['percentage']) / 100)

        result.append({ "diameter": outerDiameter, "lipidsInVesicle": currentLipidsInVesicle, "lipidsTotalMolW": totalMolWeight })

    return result

# Method for iterating from lipid min to max and finding best fitting totalLipidArea 
def calculateLipidsInVesicle(lipids, area, lipidMin, lipidMax):
    currentLipidsInVesicle = 0
    for i in range(lipidMin, lipidMax):
        currentLipidsInVesicle = lipidMin + (i - lipidMin)
        totalLipidArea = 0

        for lipid in lipids:
            lipidArea = float(lipid['area'])
            percentage = float(lipid['percentage'])
            totalLipidArea += (currentLipidsInVesicle * (percentage / 100) * lipidArea) 


        # 0.1 is epsilon or area max difference 
        if( abs((totalLipidArea - area) / area) < 0.05):
            return currentLipidsInVesicle
    return -1
    
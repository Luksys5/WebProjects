from flask import Flask, jsonify, request, make_response
app = Flask(__name__)

def calculateLipidsVolume(data):
    # get requiredData
    finalMass = float(data['finalMass'])
    lipids = data['lipids']

    # Create results data
    denumWave = 0
    totalMass = 0
    totalVolume = 0
    lipidsVolumes = []

    # calculate denumerator wave before other calculation
    for lipid in lipids:
        denumWave += float(lipid['percentage']) + float(lipid['molWeight'])

    for lipid in lipids:
        # Get lipid data
        percentage = float(lipid['percentage'])
        molWeight = float(lipid['molWeight'])
        concentration = float(lipid['concentration'])

        # calculate lipid volume and append it to solution Volume
        numerator = percentage * molWeight * finalMass
        lipidVolume = abs(numerator) / abs(concentration * denumWave)
        lipidsVolumes.append({ 'requiredVolume': round(lipidVolume, 5) })
        
        totalMass += lipidVolume * concentration
        totalVolume += lipidVolume

    totalMass = round(totalMass, 3)
    totalVolume = round(totalVolume, 3)

    return {
        'totalMass': totalMass,
        'totalVolume': totalVolume,
        'lipids': lipidsVolumes
    }
    

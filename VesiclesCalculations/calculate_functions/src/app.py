from flask import Flask, jsonify, request, make_response
import lipidsVolume
import molecularWeight
import sendMail
app = Flask(__name__)

@app.route('/calculate-lipidsVolume', methods=['GET', 'POST', 'OPTIONS'])
def calculateLipidsVolume():
    return main(lipidsVolume.calculateLipidsVolume)

@app.route('/calculate-molecularWeight', methods=['GET', 'POST', 'OPTIONS'])
def calculateMolWeight():
    return main(molecularWeight.calculateMolWeight)

@app.route('/send-mail', methods=['GET', 'POST', 'OPTIONS'])
def sendDataToMail():
    return main(sendMail.sendMail)

def main(calculate):
    request_json = request.get_json()
    
    # Try catch whole calculaion
    try:
        data = calculate(request_json)
        result = { 'data': data, 'success': True }
    except Exception as ex:
        result = { 'message': 'Error occurred: ', 'error': ex.args, 'success': False }
    
    return newResponse(result)


def newResponse(result, status = 200):
    # Create response object
    response = jsonify(result)
    response.headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Accept,Content-Type',
    }

    return make_response(response, status)

if __name__ == '__main__':
    app.run(debug=True)
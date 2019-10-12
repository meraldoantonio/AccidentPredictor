from flask import render_template, request, Blueprint, jsonify
from app.api_call_pred import api_call
import datetime
import json
import traceback

main = Blueprint('main', __name__)

# home page
@main.route("/")
@main.route("/home")
def home():
    return render_template('index.html')

@main.route("/exploration")
def exploration():
    return render_template('exploration.html')

@main.route("/interaction")
def interaction():
    return render_template('interaction.html')

@main.route("/map")
def map():
    return render_template('predictionmap.html')

@main.route("/month")
def month():
    return render_template('1month.html')

@main.route("/hour")
def hour():
    return render_template('2hour.html')

@main.route("/vehicles")
def vehicles():
    return render_template('3vehicles.html')

@main.route("/casualties")
def casualties():
    return render_template('4casualties.html')

@main.route("/boroughs")
def boroughs():
    return render_template('5boroughs.html')
	
@main.route("/london")
def london():

    return render_template('6london.html')


#API to get user inputs
@main.route('/prediction', methods=['POST'])
def prediction():
    try:
        req_data = request.get_json()
        origin = req_data['origin']
        destination = req_data['destination']
        date_time = req_data['datetime']

        #process time
        tm = datetime.datetime.strptime(date_time,'%Y/%m/%d %H:%M').strftime('%Y-%m-%dT%H:%M')

        out = api_call(origin, destination, tm)

        return json.dumps(out)

    except:

        return jsonify({'trace': traceback.format_exc()})


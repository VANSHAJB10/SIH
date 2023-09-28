import requests
import pandas as pd
#from flask import Flask, render_template
#
#app = Flask(__name__)
#
#@app.route("/")
#def index():
#  return render_template("index.html")
#
#if __name__ == "__main__":
#  app.run(debug=True)

excel_file_path = (r"crops details.csv")
df = pd.read_csv(excel_file_path)
var = ("Wheat")
input_data = {row.Crops: row.Wastage for (index, row) in df.iterrows()}
wastage = input_data[var]
print(wastage)

url = "https://devoir-facile.p.rapidapi.com/devoirfacile.fr/api/gpt3.php"

print("For {var}, {wastage} of {var} were wasted. Suggest 10 ways how {wastage} can be used efficiently so that the food don't go waste. Also suggest 8 ways how farmers can manage to grow just enough quantity of this crop, so that neither the resources nor the the crop grown goes waste.")

querystring = {"system":"My AI","user":f"For {var}, {wastage} of {var} were wasted. Suggest 10 ways how {wastage} can be used efficiently so that the food don't go waste. Also suggest 8 ways how farmers can manage to grow just enough quantity of this crop, so that neither the resources nor the the crop grown goes waste."}

headers = {
	"X-RapidAPI-Key": "330a2482a5msh2435789d0e4dd67p10957fjsnfb279bdd3970",
	"X-RapidAPI-Host": "devoir-facile.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return {"file" : ["1","2"]}

if __name__ == "__main__":
    app.run(debug=True)
    

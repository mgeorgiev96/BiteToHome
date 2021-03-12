from flask import Flask, render_template, request, redirect, session,jsonify
from pymongo import MongoClient
import bcrypt
import os

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")

mongoDB = MongoClient(os.environ.get("MONGO_DB"))
db = mongoDB['python']['BiteToHome']


@app.route('/')
def index():
    try:
        user = session['user']
        return render_template('index.html')
    except:
        return render_template('index.html')
@app.route('/pizza')
def pizza():
    return render_template('index.html')
@app.route('/sides')
def sides():
    return render_template('index.html')
@app.route('/desserts')
def desserts():
    return render_template('index.html')
@app.route('/drinks')
def drinks():
    return render_template('index.html')
@app.route('/signup')
def signup():
    return render_template('index.html')
@app.route('/history')
def history():
    try:
        user = session['user']
        return render_template('index.html')
    except:
        return redirect('/')
@app.route('/email-used')
def emailUsed():
    return render_template('index.html')


@app.route('/info',methods=['GET'])
def info():
    try:
        user = session['user']
        return user
    except:
        return {}

@app.route('/create-user',methods=['POST'])
def createUser():
    user = {'username':i for i in db.find({'username':request.form['username']})}
    if len(user) == 0:
        password = bcrypt.hashpw(request.form['password'].encode('utf-8'),bcrypt.gensalt())
        db.insert_one({'username':request.form['username'],'password':password,'name':request.form['name'],'history':[]})
        return redirect('/')
    else:
        return redirect('/email-used')
@app.route('/login',methods=['POST'])
def loginUser():
    data = request.get_json()
    user = {'username': i for i in db.find({'username':data['username']})}
    if len(user) == 0:
        return "username"
    else:
        for i in db.find({'username':data['username']}):
            if bcrypt.checkpw(data['password'].encode('utf-8'),i['password']) == True:
                session['user'] = {'username':i['username'],'name':i['name'],'history':i['history']}
                return session['user']
            else:
                return 'password'

@app.route('/save-purchase',methods=['POST'])
def savePurchase():
    data = request.get_json()
    db.update_one({'username':session['user']['username']},{'$push':{'history':{'amount':data['amount'],'items':data['items'],'date':data['date']}}})
    for i in db.find({'username':session['user']['username']}):
        session['user'] = {'username':i['username'],'name':i['name'],'history':i['history']}
    return session['user']

if __name__ == '__main__':
    app.run(debug=True)
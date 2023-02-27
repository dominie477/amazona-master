## 1. Run Locally

### 2. Create .env File and set mongoDB

- setup local mongoDB compass database called amazona
- create .env file in backend folder and copy MONGODB_URI="mongodb://localhost:27017/amazona" to .env file, also add JWT_SECRET=somethingsecret

### 3. Run Backend

```
$ cd backend
$ npm install
$ npm start or nodemon server
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Seed Users and Products

- Run this on browser only once to load products: http://localhost:5000/api/seed
- It returns admin email and password and 8 sample products

### 6. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click sign in
admin login details:
name: osher
email: admin@example.com
password: 123456

### 7. users Login and dashboard

- sign up with new user
- be advised that dashboard at admin will not show up untill an order was made, so make sure to setup one before checking dashboard so data will show up

### 8. Payments

- go to developer.paypal.com and sign in, then go to apps & credentials and create new app, once inside paste client ID to PAYPAL_CLIENT_ID= in .env file (you have to paste your own client ID)
- both paypal and credit card lead to payapl account, the UI is different for different payment options details (make sure you on sandbox mode)
- once payment is finished, refresh the page and it would show paid, than deliver order at admin user to complete the transaction (deliver order is avaliable only for admin)

### 9. Contact

- go to emailjs-com and sign in, create new service and new email template, copy URL of service ID, template ID at settings and public key at account and paste them to Contactscreen in this order in VS code

- at email temaplate write in to email= your email, from name= {{name}}, from email use default email checkbox

- in textbox area at subject write new message from {{name}}.
at content under hello write you got a new message from {{name}}
under it write {{message}}



### 10. support
- if there is any issues contact me at: volotkero@gmail.com
- some features work but they do not work 100% like a real website, small issues i could not fix in time like dashboard who dont show data unless orders were made and payment require refresh to show paid status









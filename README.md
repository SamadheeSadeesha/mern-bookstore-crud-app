# 📚 MERN Book Store CRUD App
A simple MERN stack application where users can create (save), view, update, and delete books. Books can be displayed in card view or table view. Each book contains a title, author, published year, genre, and description.

## 🚀 Features
#### 📌 Create – Add new books with details (title, author, year, genre, description).
#### 📌 Read – View books in card format or table format.
#### 📌 Update – Modify existing book details.
#### 📌 Quick View – View main details of a book without navigating to the view page.
#### 📌 Delete – Remove books from the collection.

## 🛠️ Tech Stack
This application is built using the MERN stack:

#### 🌍 Frontend – React.js (with Tailwind CSS for styling)
#### ⚙️ Backend – Node.js & Express.js
#### 🗄️ Database – MongoDB with Mongoose ODM
#### 🔌 API Handling – Axios (for making HTTP requests)


---


## 📦 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/mern-bookstore.git
cd mern-bookstore
```

### **2️⃣ Install Dependencies**
Backend
```bash
cd backend
npm install
``` 
Frontend
```bash
cd ../frontend
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a .env file inside the backend/ folder and add:
```bash
PORT=5000
MONGODB_URL=your_mongodb_connection_string_here
```

### **4️⃣ Start the Application**
Start Backend Server
```bash
cd backend
npm start
```
Start Frontend
```bash
cd ../frontend
npm start
```


--- 


## 📖 API Routes

#### GET:	/api/books	(Fetch all books)
#### POST:	/api/books	(Create a new book)
#### GET:	/api/books/:id	(Fetch a single book by ID)
#### PUT:	/api/books/:id	(Update a book by ID)
#### DELETE:	/api/books/:id	(Delete a book by ID)


---


## 📸 Screenshots

![table view](https://github.com/user-attachments/assets/3c70d9ab-3f24-4ab5-bdca-d9a65afe3437)
![card view](https://github.com/user-attachments/assets/8c207343-6263-4f6b-9750-5fb4b869c7fa)
![create book](https://github.com/user-attachments/assets/bdc20a9d-b2f5-4d8b-816d-4ccebbc3c2c7)
![view book](https://github.com/user-attachments/assets/876a56f3-7210-40a0-b4fd-cf21eb85e8b9)
![update book](https://github.com/user-attachments/assets/9fbce62f-ede6-441d-870e-125df893b5e0)
![delete book](https://github.com/user-attachments/assets/a0163543-4183-4220-b48b-4cdd5b6f8d31)
![quick view](https://github.com/user-attachments/assets/dcf6b0b9-0f84-42a8-9828-060ce1775b6e)

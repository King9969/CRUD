<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Monthly Expense</title>
    <link
      rel="icon"
      href="https://cdn-icons-png.flaticon.com/512/6475/6475889.png"
      type="image/icon type"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
    />
    <style>
      body {
        background-color: rgb(32, 38, 57);
        color: whitesmoke;
        font-family: Arial, sans-serif;
      }

      h2 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: bold;
        color: rgb(23, 215, 219);
        margin: 1rem 0;
      }

      form {
        padding: 1rem;
        margin: 4rem;
      }

      label {
        font-weight: bold;
      }

      .form-control {
        margin-bottom: 1rem;
      }

      .btn {
        width: 100%;
        padding: 0.75rem;
      }

      table {
        margin: 5% auto;
        width: 90%;
        color: #10ffb6;
      }

      th {
        font-weight: bold;
        text-align: center;
        background-color: rgb(33, 19, 19);
        padding: 0.5rem;
        color: white;
        border-radius: 5px;
      }

      td {
        font-size: 1.5rem;
        text-align: center;
      }

      .total-container {
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        padding: 1rem;
        background-color: rgb(63, 76, 119);
        border-radius: 5px;
        color: #01ff10;
        text-shadow: 0 0 7px rgb(123, 160, 148), 0 0 10px rgb(62, 112, 96),
          0 0 21px rgb(158, 187, 177), 0 0 42px #0fa, 0 0 82px #0fa,
          0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
      }

      .pending-amount-container {
        margin: 5% auto;
        padding: 2rem;
        background-color: rgb(33, 19, 19);
        border-radius: 5px;
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: rgb(213, 10, 10);
        max-width: 800px;
      }

      .person-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
      }

      .person-heading {
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
      }

      #expenseTable,
      .total-container {
        padding: 1rem;
        margin: 5% auto;
      }

      #expenseForm {
        width: 30%;
      }

      @media (max-width: 1000px) {
        .total-container {
          font-size: 1rem;
          margin: 1rem;
          overflow: hidden;
        }

        .pending-amount-container {
          margin: 2rem;
        }

        td {
          font-size: 1rem;
        }
      }

      @media (max-width: 700px) {
        #expenseForm {
          margin: 1rem;
          width: 90%;
        }

        .r {
          width: 100% !important;
        }

        .h {
          display: flex;
          flex-direction: column !important;
        }
      }

      .person-amount {
        font-size: 1.5rem;
        color: #10ffb6;
        font-weight: bold;
        background-color: rgb(33, 19, 19);
        border-radius: 5px;
      }

      .r {
        width: 70%;
        padding: 1rem;
      }

      .h {
        margin-left: 0;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <div classclass="container">
      <h2>Room Expenditure</h2>
      <div class="h">
        <form id="expenseForm">
          <div class="mb-3">
            <label for="person" class="form-label">Person:</label>
            <select name="person" id="person" class="form-select" required>
              <option value="Rohit">Rohit</option>
              <option value="Gaurav">Gaurav</option>
              <option value="Sumit">Sumit</option>
              <option value="Abhishek">Abhishek</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="item" class="form-label">Item:</label>
            <input
              type="text"
              class="form-control"
              id="item"
              placeholder="Item"
              required
            />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price:</label>
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="Price"
              required
            />
          </div>
          <button type="submit" class="btn btn-danger">Add</button>
        </form>
        <div class="r">
          <table id="expenseTable">
            <thead>
              <tr>
                <th>Person</th>
                <th>Item</th>
                <th>Price</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div class="total-container">
            <div>Total:</div>
            <div id="totalAmount"></div>
            <div>Per Person:</div>
            <div id="perPersonAmount"></div>
          </div>
        </div>
      </div>
      <div class="pending-amount-container">
        <h2>Pending</h2>
        <div class="person-container">
          <h3 class="person-heading">Rohit</h3>
          <div class="person-amount" id="rohitAmount"></div>
        </div>
        <div class="person-container">
          <h3 class="person-heading">Gaurav</h3>
          <div class="person-amount" id="gauravAmount"></div>
        </div>
        <div class="person-container">
          <h3 class="person-heading">Sumit</h3>
          <div class="person-amount" id="sumitAmount"></div>
        </div>
        <div class="person-container">
          <h3 class="person-heading">Abhishek</h3>
          <div class="person-amount" id="abhishekAmount"></div>
        </div>
      </div>
      <div
        style="
          background-color: rgb(33, 19, 19);
          color: #fff;
          padding: 20px;
          text-align: center;
        "
      >
        <p style="font-size: 24px">
          Made by <span style="font-weight: bold">Rohit</span>
        </p>
      </div>
      <script src="https://www.gstatic.com/firebasejs/3.7.4/firebase.js"></script>
      <script>
        const firebaseConfig = {
          apiKey: "AIzaSyCa4Hbzvb3Rf83fDXh-OpvITOqrvtnFDHc",
          authDomain: "project-2091905790062469097.firebaseapp.com",
          databaseURL:
            "https://project-2091905790062469097-default-rtdb.firebaseio.com",
          projectId: "project-2091905790062469097",
          storageBucket: "project-2091905790062469097.appspot.com",
          messagingSenderId: "435272902207",
          appId: "1:435272902207:web:5acca2ffb14cfeb9b83a8a",
          measurementId: "G-ZVP498FL15",
        };
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();
        const expensesRef = database.ref("expenses");
        const expenseForm = document.getElementById("expenseForm");
        const expenseTableBody = document.querySelector("#expenseTable tbody");
        const totalAmount = document.getElementById("totalAmount");
        const perPersonAmount = document.getElementById("perPersonAmount");
        const rohitAmount = document.getElementById("rohitAmount");
        const gauravAmount = document.getElementById("gauravAmount");
        const sumitAmount = document.getElementById("sumitAmount");
        const abhishekAmount = document.getElementById("abhishekAmount");

        // Function to save an expense
        function saveExpense(item, price, person) {
          const date = new Date().toLocaleDateString();
          expensesRef.push({
            item: item,
            price: price,
            person: person,
          });
        }

        // Function to calculate total and per person amount
        function calculateAmounts(snapshot) {
          let total = 0;
          let amounts = {
            Rohit: 0,
            Gaurav: 0,
            Sumit: 0,
            Abhishek: 0,
          };

          snapshot.forEach(function (childSnapshot) {
            const expense = childSnapshot.val();
            const price = parseFloat(expense.price);
            total += price;
            amounts[expense.person] += price;
          });

          const personCount = Object.keys(amounts).length;
          const perPerson = total / personCount;

          totalAmount.textContent = total.toFixed(2);
          perPersonAmount.textContent = perPerson.toFixed(2);

          updatePendingAmounts(amounts);
        }

        // Function to update pending amounts
        function updatePendingAmounts(amounts) {
          rohitAmount.textContent = amounts.Rohit.toFixed(2);
          gauravAmount.textContent = amounts.Gaurav.toFixed(2);
          sumitAmount.textContent = amounts.Sumit.toFixed(2);
          abhishekAmount.textContent = amounts.Abhishek.toFixed(2);
        }

        // Function to delete an expense
        function deleteExpense(expenseId) {
          expensesRef.child(expenseId).remove();
        }

        // Event listener for form submission
        expenseForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const person = document.getElementById("person").value;
          const item = document.getElementById("item").value;
          const price = document.getElementById("price").value;
          saveExpense(item, price, person);
          expenseForm.reset();
        });

        // Event listener for expense removal
        expenseTableBody.addEventListener("click", function (e) {
          if (e.target.classList.contains("delete-btn")) {
            const expenseId = e.target.getAttribute("data-id");
            deleteExpense(expenseId);
          }
        });

        // Realtime listener for expenses
        expensesRef.on("value", function (snapshot) {
          expenseTableBody.innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
            const expense = childSnapshot.val();
            const expenseId = childSnapshot.key;

            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${expense.person}</td>
            <td>${expense.item}</td>
            <td>${expense.price}</td>
            <td><button class="btn btn-warning delete-btn" data-id="${expenseId}">Delete</button></td>
          `;

            expenseTableBody.appendChild(row);
          });

          calculateAmounts(snapshot);
        });
      </script>
    </div>
  </body>
</html>

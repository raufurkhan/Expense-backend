const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const sequelize = require('./util/database');
const controller = require("./controllers/controller");


const app = express();
app.use(bodyParser.json());
app.use(cors());

(async () => {
  await sequelize.sync();
  console.log("Appointment model synced with database.");
})();

app.post("/expenses", controller.createExpense);
app.get("/expenses", controller.getExpenses);
app.delete('/expenses/:id', controller.deleteExpense);
app.put('/expenses/:id', controller.editExpense);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
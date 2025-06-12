const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const registerRoute = require("./routes/register");
const approveRoute = require("./routes/approve");

require("./telegram"); // faqat ishlatish uchun

async function connectToDatabase() {
  const db = require("./db");
  try {
    await db.connect();
    console.log("✅ Ma'lumotlar bazasi bilan bog'lanish muvaffaqiyatli");
  } catch (error) {
    console.error("❌ Ma'lumotlar bazasi bilan bog'lanishda xatolik:", error.message);
    process.exit(1); // Serverni to'xtatish
  }
}
connectToDatabase();
app.use(cors());
app.use(bodyParser.json());

app.use("/register", registerRoute);
app.use("/approve", approveRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server http://localhost:${PORT} da ishlayapti`);
});

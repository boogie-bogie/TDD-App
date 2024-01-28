/**Express 모듈 불러오기 */
const express = require("express");
const mongooseConnect = require("./schemas/index.js");
require("dotenv").config();

/**Express 서버를 위한 포트 설정 */
const PORT = process.env.PORT;

/**Express Application 생성 */
const app = express();

/** Mongoose 연동 */
mongooseConnect();

/**Body-parser 미들웨어 생성*/
app.use(express.json());

/** productRoutes 라우터 모듈 마운트 */
const productRoutes = require("./routes");

app.use("/api/products", productRoutes);

/**'/' Endpoint 생성 */
app.get("/", (req, res) => {
  res.send("Hello World");
});

/** 에러 핸들러 미들웨어 생성 */
app.use((error, req, res, next) => {
	res.status(500).json({ message: error.message });
});


/**HTTP 서버 시작 */
// app.listen(PORT, () => {
//   console.log(PORT, `번 포트로 서버가 열렸어요! http://localhost:${PORT}`);
// });

module.exports = app;

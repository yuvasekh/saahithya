var mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
const { v4: uuidv4 } = require("uuid");

module.exports.createpole = async (req, res) => {
  console.log(req.body, "HHHH");
  let data = req.body;
  console.log(data["textarea-1"]);
  let Id = uuidv4();
  let PoleId = uuidv4();

  const selectQuery = `SELECT COUNT(*) AS count FROM Register WHERE email ='${req.headers.email}'`;
  console.log(selectQuery, "test");

  const insertQuery = "INSERT INTO pole  VALUES (?, ?)";
  const insertQuery1 = `INSERT INTO PoleQuestion  VALUES (?, ?,?, ?,?, ?,?, ?,?)`;

  connection.query(selectQuery, async (error, results) => {
    if (error) {
      throw error;
    }
    if (results[0].count == 1) {
      connection.query(
        insertQuery,
        [Id, req.body.email],
        async (error, results) => {
          if (error) {
            throw error;
          }
          connection.query(
            insertQuery1,
            [
              Id,
              PoleId,
              data["textarea-1"],
              req.body.input1,
              req.body.input2,
              req.body.input3,
              req.body.input4,
              req.body.answer,
              new Date()
            ],
            async (error, results) => {
              if (error) {
                throw error;
              }
            }
          );

          res
            .status(200)
            .json({ status: 200, message: "Pole Created SucessFully" });
          console.log("Pole Created SucessFully");
        }
      );
    } else {
      res.status(404).json({ status: 404, message: "User Not Exists" });
    }

    return results;
  });
};
module.exports.participatepole = async (req, res) => {
  console.log(req.body.Email, "Email");
  console.log(req.body);
  let Id = uuidv4();
  const selectQuery = `SELECT COUNT(*) AS count FROM Register WHERE email ='${req.body.Email}'`;
  const checkpoller = `SELECT COUNT(*) AS count FROM PoleParticipators WHERE email ='${req.body.Email}'`;
  const answerCountQuery =
    "SELECT COUNT(*) AS count FROM PoleParticipators WHERE answer = ?";
  const totalRecordsQuery =
    "SELECT COUNT(*) AS totalRecords FROM PoleParticipators";

  console.log(selectQuery, "test");

  const insertQuery1 = "INSERT INTO PoleParticipators  VALUES (?, ?,?, ?)";
  connection.query(selectQuery, async (error, results) => {
    if (error) {
      throw error;
    }
    console.log("counter", results[0].count);
    if (results[0].count == 1) {
      console.log("pollInside");
      connection.query(checkpoller, async (error, results) => {
        if (error) {
          throw error;
        }
        console.log("PollerCheck", results[0].count);
        if (results[0].count >= 0) {
          connection.query(
            insertQuery1,
            [Id, req.body.data.Poleid, req.body.Email, req.body.data.text],
            async (error, results) => {
              if (error) {
                throw error;
              }
            }
          );

          connection.query(
            answerCountQuery,
            [req.body.data.text],
            (error, answerCountResult) => {
              if (error) {
                throw error;
              }

              const recordsWithSameAnswer = answerCountResult[0].count;

              connection.query(
                totalRecordsQuery,
                (error, totalRecordsResult) => {
                  if (error) {
                    throw error;
                  }

                  const totalRecords = totalRecordsResult[0].totalRecords;

                  //     const updatePercentage = `SELECT
                  //     PQ.PoleOption1,
                  //     (COUNT(CASE WHEN PP.Answer = PQ.PoleOption1 THEN 1 END) * 100.0 / COUNT(*)) AS Option1Percentage,
                  //     PQ.PoleOption2,
                  //     (COUNT(CASE WHEN PP.Answer = PQ.PoleOption2 THEN 1 END) * 100.0 / COUNT(*)) AS Option2Percentage,
                  //     PQ.PoleOption3,
                  //     (COUNT(CASE WHEN PP.Answer = PQ.PoleOption3 THEN 1 END) * 100.0 / COUNT(*)) AS Option3Percentage,
                  //     PQ.PoleOption4,
                  //     (COUNT(CASE WHEN PP.Answer = PQ.PoleOption4 THEN 1 END) * 100.0 / COUNT(*)) AS Option4Percentage
                  // FROM
                  //     PoleQuestion AS PQ
                  // JOIN
                  //     PoleParticipators AS PP ON PQ.PoleId = PP.PoleId
                  // GROUP BY
                  //     PQ.PoleOption1,
                  //     PQ.PoleOption2,
                  //     PQ.PoleOption3,
                  //     PQ.PoleOption4;
                  // `;
                  const updatePercentage = `SELECT
                  PQ.PoleOption1 AS options,
                  ROUND(COUNT(CASE WHEN PP.Answer = PQ.PoleOption1 THEN 1 END) * 100.0 / COUNT(*)) AS Option1Percentage,
                  PQ.PoleOption2 AS options,
                  ROUND(COUNT(CASE WHEN PP.Answer = PQ.PoleOption2 THEN 1 END) * 100.0 / COUNT(*)) AS Option2Percentage,
                  PQ.PoleOption3 AS options,
                  ROUND(COUNT(CASE WHEN PP.Answer = PQ.PoleOption3 THEN 1 END) * 100.0 / COUNT(*)) AS Option3Percentage,
                  PQ.PoleOption4 AS options,
                  100 - ROUND(COUNT(CASE WHEN PP.Answer IN (PQ.PoleOption1, PQ.PoleOption2, PQ.PoleOption3) THEN 1 END) * 100.0 / COUNT(*)) AS Option4Percentage
                FROM
                  PoleQuestion AS PQ
                JOIN
                  PoleParticipators AS PP ON PQ.PoleId = PP.PoleId
                GROUP BY
                  PQ.PoleOption1, PQ.PoleOption2, PQ.PoleOption3, PQ.PoleOption4;
                `;
                  connection.query(
                    updatePercentage,
                    (error, PercentageRecords) => {
                      if (error) {
                        throw error;
                      }
                      res.status(200).json({ data: PercentageRecords });
                      console.log(
                        `Insertion percentage: ${PercentageRecords}%`
                      );
                    }
                  );
                }
              );
            }
          );
        } else {
          res.status(201).json({ message: "Already a Poller" });
        }
      });
    } else {
      res.status(201).json({ message: "Already a Poller" });
    }
    console.log(results, "yuva resullt");
    return results;
  });
};
module.exports.getpole = async (req, res) => {
  const selectQuery = `SELECT PoleId,PoleQuestion,PoleOption1,PoleOption2,PoleOption3,PoleOption4  FROM PoleQuestion order by createdAt desc limit 1
  `;

  connection.query(selectQuery, async (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(results[0]);
    }
    console.log(results, "yuva resullt");
    return results;
  });
};
module.exports.createquiz = async (req, res) => {
 console.log('quiz')
  let data = req.body.data;
  console.log(data);
  console.log("calling")
  let Id = uuidv4();
  let QuizId = uuidv4();

  const selectQuery = `SELECT COUNT(*) AS count FROM Register WHERE email ='${req.headers.email}'`;
  console.log(selectQuery, "test");

  const insertQuery = "INSERT INTO QuizMainTable  VALUES (?, ?)";
  const insertQuery1 = "INSERT INTO Quiz  VALUES (?, ?,?, ?,?, ?,?, ?,?,?,?, ?,?, ?,?, ?,?, ?,?,?,?, ?,?, ?,?, ?,?, ?,?,?,?,?)";

  connection.query(selectQuery, async (error, results) => {
    if (error) {
      throw error;
    }
    if (results[0].count == 1) {
      connection.query(
        insertQuery,
        [Id, req.body.Email],
        async (error, results) => {
          if (error) {
            throw error;
          }
          connection.query(
            insertQuery1,
            [
              Id,
              QuizId,
              data["textarea-0"],
              data["input1-0"],
              data["input2-0"],
              data["input3-0"],
              data["input4-0"],
              data["answer-0"],
              data["textarea-1"],
              data["input1-1"],
              data["input2-1"],
              data["input3-1"],
              data["input4-1"],
              data["answer-1"],
              data["textarea-2"],
              data["input1-2"],
              data["input2-2"],
              data["input3-2"],
              data["input4-2"],
              data["answer-2"],
              data["textarea-3"],
              data["input1-3"],
              data["input2-3"],
              data["input3-3"],
              data["input4-3"],
              data["answer-3"],
              data["textarea-4"],
              data["input1-4"],
              data["input2-4"],
              data["input3-4"],
              data["input4-4"],
              data["answer-4"]
            ],
            async (error, results) => {
              if (error) {
                throw error;
              }
              console.log(results,"results")
            }
          
            
          );
          res.status(200).json("Quiz Created");
          console.log("Cart item inserted successfully.");
         
        }
      );
    } else {
      res.status(200).json({ message: "User Not exists" });
    }
    console.log(results, "yuva resulgt");
    return results;
  });
};
module.exports.getquiz = async (req, res) => {
  const selectQuery = `SELECT * FROM Quiz LIMIT 1`;

  connection.query(selectQuery, async (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(results[0]);
    }
    console.log(results, "yuva resullt");
    return results;
  });
};
module.exports.participateQuiz = async (req, res) => {
  console.log("partcipate quiz")
  let useranswers=req.body.data
  console.log(req.body.Email, "Email");
  console.log(req.body);
  let Score=0
  const selectQuery = `SELECT COUNT(*) AS count FROM Register WHERE email ='${req.body.Email}'`;
  const checkpoller = `SELECT COUNT(*) AS count FROM QuizResults WHERE email ='${req.body.Email}'`;
  const AnswersQuery =
    "select QuestionOneAnswer,QuestionTwoAnswer,QuestionThreeAnswer,QuestionFourAnswer,QuestionFiveAnswer  from Quiz LIMIT 1";

  const ResultsQuery = "INSERT INTO QuizResults  VALUES (?, ?,?)";
  connection.query(selectQuery, async (error, results) => {
    if (error) {
      throw error;
    }
    console.log("counter", results[0].count);
    if (results[0].count == 1) {
      console.log("pollInside");
      connection.query(checkpoller, async (error, results) => {
        if (error) {
          throw error;
        }
        console.log("PollerCheck", results[0].count);
        if (results[0].count >= 0) {
         

          connection.query(
            AnswersQuery,
            (error, answerCountResult) => {
              if (error) {
                throw error;
              }
if(answerCountResult)
{
  console.log(answerCountResult,"Answers from db")
  
  useranswers
 if(answerCountResult[0].QuestionOneAnswer==useranswers['0'])
 {
  Score++;
 }
 if(answerCountResult[0].QuestionTwoAnswer==useranswers['1'])
 {
  Score++;
 }
 if(answerCountResult[0].QuestionThreeAnswer==useranswers['2'])
 {
  Score++;
 }
 if(answerCountResult[0].QuestionFourAnswer==useranswers['3'])
 {
  Score++;
 }
 if(answerCountResult[0].QuestionFiveAnswer==useranswers['4'])
 {
  Score++;
 }
  console.log("Score",Score)
}
connection.query(
  ResultsQuery,
  [req.body.Email,Score,req.body.data.QuizId],
  (error, answerCountResult) => {
    if (error) {
      throw error;
    }
  })
            
            }
          );
        } else {
          res.status(201).json({ message: "Already a Poller" });
        }
      });
    } else {
      res.status(201).json({ message: "Already a Poller" });
    }
    console.log(results, "yuva resullt");
    return results;
  });
};
module.exports.getquizresults = async (req, res) => {
  const selectQuery = `SELECT * FROM QuizResults LIMIT 1`;

  connection.query(selectQuery, async (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(results[0]);
    }
    console.log(results, "yuva resullt");
    return results;
  });
};
const sumRequestHandler = (req, res) => {
  console.log("Hello", req.url);

  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = parseInt(bodyObj.num1) + parseInt(bodyObj.num2);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head>
                    <title>
                    Calculator
                    </title>
            </head>
            <body>
                <h1>Sum is ${result}</h1>
                
            </body>
        </html>
        `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;

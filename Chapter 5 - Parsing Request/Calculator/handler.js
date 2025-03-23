
const {sumRequestHandler} =  require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head>
                    <title>
                    Calculator
                    </title>
            </head>
            <body>
            <h1>welcome to Calculator</h1>
            <a href="/calculator">Go to calculator</a>
            </body>
        </html>
        `);
    return res.end();
  }
  else if(req.url.toLowerCase() === "/calculator"){
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head>
                    <title>
                    Calculator
                    </title>
            </head>
            <body>
                <h1>Here is calculator</h1>
                <form action="/add" method="POST">
                    <input type="text" name="num1"  placeholder="Enter first number">
                    <input type="text" name="num2" placeholder="Enter second number">
                    <input type="submit" value="Add">
                </form>
            </body>
        </html>
        `);
    return res.end();
  }
  else if(req.url.toLowerCase() === "/add" && req.method === "POST"){
    return sumRequestHandler(req, res);
    
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
        <html>
            <head><title>404 page not found</title></head>
            <body>
            <h1>404 page not found</h1>
            <a href="/">Go to Home</a>
            </body>
        </html>
        `);
  return res.end();
};

exports.requestHandler = requestHandler;

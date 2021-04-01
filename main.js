const jsonServer = require("json-server");
const queryString = require("query-string");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
    req.body.updateAt = Date.now();
  } else if (req.method === "PATCH") {
    req.body.updateAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

router.render = (req, res) => {
  const headers = res.getHeaders();
  const totalCountHeader = headers["x-total-count"];
  if (req.method === "GET" && totalCountHeader) {
    const queryParam = queryString.parse(req._parsedUrl.query);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParam._page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };
    return res.jsonp(result);
  }
  res.jsonp({ data: res.locals.data });
};

// Use default router
server.use(router);
const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log("JSON Server is running");
});

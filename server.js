const Express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(Express.static(__dirname + '/dist'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});
app.listen(port);
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('==>', req.path);
    next();
})

app.use(express.static('./www'));

app.listen(80, () => {
    console.log('监听在80端口');
});
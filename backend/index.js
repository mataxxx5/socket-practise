var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const path = require('path');

const PATH_TO_FRONTEND = path.join(__dirname, '../', 'frontend');
const PORT = process.env.PORT || 5000;

// app.use(express.static(PATH_TO_FRONTEND));

app.get('/', (req, res) =>{
  res.sendFile(path.join(PATH_TO_FRONTEND + '/public/index.html'));
  console.log('reached');
});

io.on('connection', function(socket) {
  console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});
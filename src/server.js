const app = require('./app/app');
const { PORT } = require('./config')

app.listen(PORT, () => {
  console.log(`[petful-server] Listening on port ${ PORT }.`)
});

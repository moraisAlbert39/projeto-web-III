const app = require('./app');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:aem123@projetoweb.ptjyzvs.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('servidor conectado com o banco de dados')).catch((err) => console.log(err));


app.listen(999, () => console.log('servidor rodando'));

import express from 'express';
import noteRouter from './routes/notes.js';
import mongoose from 'mongoose';
// import { Post } from './models';

const app = express();


app.use((req, res, next) => {
  res.locals.msg = `Ini adalah halaman:`;
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/say/:greeting', (req, res) => {
  const { greeting } = req.params;
  res.send(greeting);
});


app.get('/about', (req, res) => {
  res.send(' About Me');
});


app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(res.locals.msg + ` Hello ${name}`);
});

app.get("/secret", (req, res) => {
  res.status(401).send("Gagal nih");
});


app.use(express.json());

app.use((err, req, res, next) => {
  res.status(500);
  res.json({
    result: 'fail',
    error: err.message,
  });
});

app.use('/notes', noteRouter);

app.get('/posts', (req, res) => {
  res.send('Here are all the posts');
});

// async function main() {
//   const created = await Post.create({
//     title: 'first title',
//     content: 'second title',
//   });

//   const multipleCreated = await Post.create([
//     item1,
//     item2,
//   ]);
// };

// async function main() {
//   const listPost = await Post.find(query);
//   const onePost = await Post.findOne(query);
//   const postById = await Post.findById(id);
// }

//mongoose.connect('mongodb://atharworkspace_db_user:iPhone12mini@cluster0.exeebty.mongodb.net/?appName=Cluster0')
const isSRV = false;

const srvURI = 'mongodb+srv://atharworkspace_db_user:iPhone12mini@ac-jvbsypk-shard-00-00.exeebty.mongodb.net/test?retryWrites=true&w=majority';
const standardURI = 'mongodb://atharworkspace_db_user:iPhone12mini@ac-jvbsypk-shard-00-00.exeebty.mongodb.net:27017,ac-jvbsypk-shard-00-01.exeebty.mongodb.net:27017,ac-jvbsypk-shard-00-02.exeebty.mongodb.net:27017/test?ssl=true&replicaSet=atlas-lcbrdx-shard-0&authSource=admin&appName=Cluster0';

const connectionURI = isSRV ? srvURI : standardURI
console.log('Connecting to MongoDB with URI:', connectionURI);

mongoose.connect(connectionURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Post available for immediate use

//new website


app.listen(3000);

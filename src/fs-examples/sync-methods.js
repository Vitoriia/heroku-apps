import fs from 'fs';
import path from 'path';

// const data = fs.readFileSync(path.join(__dirname, '/example.txt'), 'utf-8');
// console.log(data);

// fs.writeFileSync(path.join(__dirname, 'my-write.txt'),'Hello', 'utf-8');

// fs.appendFileSync(path.join(__dirname, 'my-write.txt'),'\nThere');
// fs.appendFileSync(path.join(__dirname, 'my-write.txt'),'\nHello');

// fs.writeFileSync(path.join(__dirname, 'my-write.json'),JSON.stringify({message: "Hello"}));

// fs.unlinkSync(path.join(__dirname, 'my-write.json'));

// fs.mkdirSync(path.join(__dirname, 'myDir'));
// fs.rmdirSync(path.join(__dirname, 'myDir'));
// fs.mkdirSync(path.join(__dirname, 'parentDir' ,'myDir'), {recursive: true});

// const isExist = fs.existsSync(path.join(__dirname, 'my-write.txt'));
// console.log(isExist);

// const content = fs.readdirSync(__dirname);
// console.log(content);

const stat = fs.lstatSync(path.join(__dirname, 'example.txt'));
console.log(stat);
console.log(stat.isFile());
console.log(stat.isDirectory());
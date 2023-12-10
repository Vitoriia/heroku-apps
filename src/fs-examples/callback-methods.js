import fs from 'fs';
import path from 'path';

// const data = fs.readFileSync(path.join(__dirname, '/example.txt'), 'utf-8');
// console.log(data);
fs.readFile(path.join(__dirname, 'example.txt'), 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
});

// fs.writeFileSync(path.join(__dirname, 'my-write.txt'),'Hello', 'utf-8');
fs.writeFile(path.join(__dirname, 'example.txt'), 'hello!', (err) => {
    if(err) console.log();

    console.log("\nDone writing");
});

// fs.appendFileSync(path.join(__dirname, 'my-write.txt'),'\nThere');
// fs.appendFileSync(path.join(__dirname, 'my-write.txt'),'\nHello');
fs.appendFile(path.join(__dirname, 'example.txt'), '\n Plus text', (err) => {
    console.log("Appendeing succeded");
});
// fs.writeFileSync(path.join(__dirname, 'my-write.json'),JSON.stringify({message: "Hello"}));

// fs.unlinkSync(path.join(__dirname, 'my-write.json'));
fs.unlink(path.join(__dirname, 'my-write.txt'), (err) => {
    console.log("\nDeleted");
});

// fs.mkdirSync(path.join(__dirname, 'myDir'));
// fs.rmdirSync(path.join(__dirname, 'myDir'));
// fs.mkdirSync(path.join(__dirname, 'parentDir' ,'myDir'), {recursive: true});

// const isExist = fs.existsSync(path.join(__dirname, 'my-write.txt'));
// console.log(isExist);

// const content = fs.readdirSync(__dirname);
// console.log(content);

// const stat = fs.lstatSync(path.join(__dirname, 'example.txt'));
// console.log(stat);
// console.log(stat.isFile());
// console.log(stat.isDirectory());
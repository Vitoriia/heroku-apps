import mysql from 'mysql';
import fs from 'fs';
import path from 'path';

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'node_course_schema',
    user: 'nodeCourseU',
    password: '*U(I8u9i',
});

connection.connect();

fs.readFile(path.join(__dirname, 'new-products.txt'), 'utf8', (err, contents) => {
    if (err) return console.log(err);
    const productStrings = contents.split('\n');
    const products = productStrings.map((productString, i) => ({
        id: i,
        name: productString.split(',')[0],
        price: Number(productString.split(',')[1])
    }));
   
    const productsInArray = products.map(product => [
        product.id,
        product.name,
        product.price,
    ]);
    // const productQueryString = products.map(product =>
    //     `('${product.id}', '${product.name}', ${product.price})`).join(',');

    connection.query(
        'INSERT INTO products (id, name, price) VALUES ?',
        [productsInArray],
        (err, product) => {
        if(err) console.log(err);
        console.log("Here are the current products!");
        console.log(product);
    });

    connection.end();
});


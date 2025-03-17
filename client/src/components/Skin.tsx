import { useEffect, useState } from 'react'
import React, { useEffect } from 'react';


const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';
fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
  .then(response => response.json()) 
  .then((data: any[]) => {
    data.slice(0, 5).forEach((product: any) => {
      console.log(`Product Name: ${product.name}`);
      console.log(`Brand: ${product.brand}`);
      console.log(`Price: ${product.price}`);
      console.log(`Link: ${product.product_link}`);
      console.log("---------------------");
    });
  })
  .catch(error => console.error("Error:", error));










// useEffect(() => {
//     async function fetchData() {
//     try {
//         const productElement = document.getElementById("ProductSearch");
//         if (!productElement) {
//             throw new Error("ProductSearch element not found");
//         }
//         const productName = (productElement as HTMLInputElement).value.toLowerCase();
    
//         const response = await fetch("http://makeup-api.herokuapp.com/api/v1/${productName}.json");
//     if(!response.ok){
//         throw new Error("Could not fetch Resource");
//     }
//     const data = await response.json();
//     console.log(data);
// }
//     catch(error){
//     }
//     fetchData();
//     }
// }, []);







// fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Could not fetch Resource');
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.error(error));
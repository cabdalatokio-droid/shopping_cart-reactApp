import Product from "./Product";

const products=[
{
  id:1,
  name:"HP830 laptop",
  urlImage:"https://images.unsplash.com/photo-1663354027456-ce6a7e07d212?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price:560.00
},
{
  id:2,
  name:"Apple",
  urlImage:"https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price:270.0
},
{
  id:3,
  name:"A50 samsung",
  urlImage:"https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price:300.0
},
{
  id:4,
  name:"printer",
  urlImage:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price:600
},
{
  id:5,
  name:"Tv",
  urlImage:"https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price:400
},
{
  id:6,
  name:"washing mashine",
  urlImage:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price:500
}
];

const Products=()=>{
  return (
  <div className="grid">
  { products.map((product)=>(
   
     <Product key={product.id} product={product}/>

   
     ))}
       </div>

  )
}
export default Products;
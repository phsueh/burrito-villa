"use client";

async function fetchBurritoList() {
  const res = await fetch("http://localhost:3000/api/burrito", {
    method: "GET"
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json()
}

async function getMenuProps() {
  const burritoList = await fetchBurritoList(); 

  const renderBurritos = () => {
    burritoList.burritos.map((item) => 
    <Menu 
      id = {item.id}
      name={item.name} 
      size={item.size} 
      price={item.price}
      />
      )
  }
  renderBurritos();
}

export default function Menu( {id, name, size, price}) {

  return (
    <div>
      <p>burrito list</p>
      <p>{id}</p>
      <p>{name}</p>
      <p>{size}</p>
      <p>{price}</p>
    </div>
  )
}
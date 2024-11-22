import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

//UseEffect siempre se usa para consume de API
function Home() {
const [items, setItems] = useState(null)
useEffect (() =>{
  fetch('https://api.escuelajs.co/api/v1/products') // la onformación viene en tipo promesa
  .then(response =>response.json()) // uso then para resolver esa promesa
  .then(data =>setItems(data))
},[])
  return (
      <Layout>
        Home
        <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            items?.map(item => (<Card key = {item.id} data={item} />))
          }
        </div>
        <ProductDetail />
      </Layout>
  )
}

export default Home

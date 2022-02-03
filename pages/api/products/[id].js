const graphQuery = `{
    products{
        id
      name
      categories{
       slug
        name
        id
      },
      image
      price
      description
    }
  }`


const fetchProductByById = async ({ query: { id } }, res) => {
  try {
    const response = await fetch('https://reasonapps-gql-api.vercel.app/api/graphql', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: graphQuery })
    })
    const { data } = await response.json()
    const productById = data.products.filter(el => el.id === id)
    res.status(200).json({ success: true, productById })
  } catch (err) {
    console.log(err)
    res.status(400).json({ success: false, message: err })
  }
}

export default fetchProductByById;

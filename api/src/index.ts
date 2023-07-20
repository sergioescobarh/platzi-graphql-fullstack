import { ApolloServer } from "apollo-server";

//1 query
const typeDefs = `

type Query {
  info: String!
}
`
//2 resolvers
const resolvers = {
  Query: {
    info: ()=> `this is the API of Platzi Node grapgql`
  }
}

//3 INICIAR SERVIDOR
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then( ({url}) => console.log(`server running on ${url}`) )

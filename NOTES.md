What is GraphQL?

Define graphql
- what is it?
- Why use it?
- How does it work?

Demo writing queries

How to 




Using appollo
- easy setup
- tooling -- can query with a client UI that is automagically set up 
- popular


How traditional REST calls work/are structured
  verbs: GET,POST,PUT,DELETE, etc.
How this differs with graphql
  queries and mutations

TERMS
- schema
- arguments
- field
- types
- graphql type system
- aliases  (think "projection")
- "Enumeration type"
- fragments (usage looks like spread operator)
- inline fragment
- query, mutation, or subscription
- variables (relate to arguments)
- scalars, enums, or input object type
- GraphQL schema language
- Interfaces
- 


Arguments can by of any type

"GraphQL queries look the same for both single items or lists of items, however we know which one to expect based on what is indicated in the schema."

"GraphQL has a first-class way to factor dynamic values out of the query, and pass them as a separate dictionary. These values are called variables."

"All declared variables must be either scalars, enums, or input object types"

"if the field you are passing the variable into requires a non-null argument, then the variable has to be required as well"

"While query fields are executed in parallel, mutation fields run in series, one after the other."

"Most types in your schema will just be normal object types, but there are two types that are special within a schema:"

    schema {
      query: Query
      mutation: Mutation
    }

    "...they are special because they define the entry point of every GraphQL query"

"any type that implements [an interface] needs to have these exact fields, with these arguments and return types"

"GraphQL queries always end at scalar values." [iteration over branches and leaves of a query]

A resolver function receives four arguments:

- obj: The previous object, which for a field on the root Query type is often not used.
- args: The arguments provided to the field in the GraphQL query.
- context: A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database.
- info: A value which holds field-specific information relevant to the current query as well as the schema details, also refer to type GraphQLResolveInfo for more details.

----------

QUESTIONS:
HOW to keep graphql types in sync with TS types?

HOw would you use a query? How do you send it up?

Example has fragment declared below where its' used. Is that required? 
-> What about order of type declarations and cross-references?

When to use & when not to use?
https://blog.logrocket.com/why-you-shouldnt-use-graphql/

How does this apollo-server on "Getting started with Apollo Server" work with localhost?

How does the ID type work???

custom scalars in apollo?

How does graphql treat HTTP status? Is this prescribed by graphql standard, or is it left up to the implementation?


MAYBE?
- tagged template literals and gql``


EXTENSION:
graphql network inspector

CIRCULAR REFERENCES
interesting discussion here:
https://stackoverflow.com/questions/53863934/is-graphql-schema-circular-reference-an-anti-pattern
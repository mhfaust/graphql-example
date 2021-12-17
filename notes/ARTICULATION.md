
With rest, when we need a new data structure, we typically create a whole new endpoint
When we want, say, a root object and a related collection, but only a subset of the fields in the collection objects, we typically make separate calls for the root and the collection objects OR we have to create a whole new endpoint. The ability to get the collection objects "slimmed down" to a specific subset of fields may not exist, so we'd be wasting bandwidth

Waste bandwidth
Inefficient (many calls in series)

(for our example, list out a number of different contexts/requirements that might result in sublte differences in the data shape required.)

...then go on to explain how graphql simplifies the process of tailoring a data service dynamically to provide only precisely the data that is needed for each context
- by modelling the relationship with the schema and specifying required information through queries

"Every GraphQL service defines a set of types which completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated and executed against that schema."

Show a visual graph -- an example with types represented by box&name or icon/symbol of some kind, and joined together by edge-lines.

...then show a sub-graph that would represent a query result.


WHAT ABOUT MUTATIONS HERE???


With isometric applications (JS/TS implementationsn for client and server defined in the same workspace), we can share type information with the frontend and backend. We can write queries for the client and instantaneously know whether they are valid against the schema, defined in only one place.




Fragments as a tool for "re-use" -- efficient coding, DRY.


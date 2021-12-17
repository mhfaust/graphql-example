
# argument in a query

{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}

# variables 

query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}

# REQUIRED Variables
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {


# DEFAULT VARIABLES:

query HeroNameAndFriends($episode: Episode = JEDI) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}

PRIMITIVE TYPES:
Int – Signed 32‐bit integer
Float – signed double-precision floating-point value
String – Character sequence
Boolean – True or False
ID – ID is a unique identifier in GraphQL.
#!/bin/sh

# use like this:
#
#    ID=123 TITLE="Harry Potter: Deathly Hallows" AUTHOR="J.K. Rowling" ./scripts/books.sh
#

curl --include --request "POST" "http://localhost:3000/books/$ID" \
  --header "Content-Type: application/json" \
  --data $'{
    "book": {
      "title": $TITLE,
      "author": $AUTHOR
    }
  }'



  # curl --include --request "PATCH" "http://localhost:3000/books/2" \
  #   --header "Content-Type: application/json" \
  #   --data $'{
  #     "book": {
  #       "title": "Some title",
  #       "author": "some author"
  #     }
  #   }'

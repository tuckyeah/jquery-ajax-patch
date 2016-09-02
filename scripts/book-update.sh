#!/bin/sh

# use like this:
#
#    ID=123 TITLE="Harry Potter: Deathly Hallows" AUTHOR="J.K. Rowling" ./scripts/books.sh
#

# id:5 used to be 'Deliverance'

curl --include --request PATCH http://localhost:3000/books/5 \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "an example title",
      "author": "your momma"
    }
  }'

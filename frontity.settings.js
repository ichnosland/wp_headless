const settings = {
  "name": "Glabro",
  "state": {
    "frontity": {
      "url": "https://www.glabro.it/",
      "title": "Glabro.it",
      "description": "headless bald"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "category",
              "category/intervista/"
            ],
            [
              "Author",
              "author/admin/"
            ],
            [
              "post",
              "/montage-of-hack-documentario-autorizzato-kurt-cobain/"
            ],
            [
              "page",
              "/figli-di-glabro/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.glabro.it"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

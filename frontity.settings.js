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
              "Interviste",
              "category/intervista/"
            ],
            [
              "Musica",
              "category/musica-2/"
            ],
            [
              "Geek",
              "/category/geek-2/"
            ],
            [
              "About Us",
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

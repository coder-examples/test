const express = require("express");
const cors = require("cors");

const CardsChain = [
    {"id": 1,"makeupimage":3,"theme":"image","social_media":{"facebook":"https://www.facebook.com/amar.mane.7330","insta":"https://www.instagram.com/amar.mane.007/"},"about":{"specialities":[],"description":[],"nature":"Furniture"},"gallery":{"slider":[],"photos":[]},"products":{"items":[]},"payment":{},"bank":{},"firstname":"Amar","Salutation":"Mr.","lastname":"Mane","company":"","img":"bubbly-blue","logo":"","email":"amarmane6907@gmail.com","phone":"+919326891093","whatsapp":"919326891093","map":"d","post":"Owner","vcf":"g"}
]

const app = express()
app.use(cors());

app.get('/', (req, res) => {
    res.json(CardsChain);
})

app.listen(process.env.PORT || '4200');

# FullStack Word Memorizer 

``` Kullanıcıların sisteme ingilizce kelime eklediği ve bu kelimeleri belli zaman aralıklarıyla quiz sorusu şeklinde sorarak İngilizce kelime öğretmeyi hedefleyen Web tabanlı uygulama ```
<br>
<br>
<img src="/img/nodejs-logo.png" width="150"/><img src="/img/reacjs.logo.png" width="150"/><img src="/img/mongodb.logo.png" width="150"/>
<br>
<br>

## Kurulum

- Github reposunu Klonla
- Proje ana dizininde ``` npm install ``` komutunu çalıştır
- Üstteki komutu ``` server ``` ve ``` client ``` klasörleri içinde de çalıştır.
- Ardından ana dizine gelerek ``` npm run dev  ``` komutunu çalıştır

## Kullandığım Paketler ve Kütüphaneler

-[React](https://github.com/facebook/react)<br>
-[Node.js](https://github.com/nodejs/node)<br>
-[Express.js](https://github.com/expressjs/express)<br>
-[Mongoose](https://github.com/Automattic/mongoose)<br>
-[Material UI](https://material-ui.com/)<br>
-[Toastify.js](https://github.com/apvarun/toastify-js)<br>

## Backend tarafında kullandığım Endpointler
``` http://localhost:3001/words/ ``` 

| Route | Request Type	 | Example Object 	 | Description	 |
| --- | --- | --- | --- |
| /words | `GET` | Empty | List all words |
| /words/:id | `GET` | {'word':'Mouse', 'translate':'Fare', 'kind':'İsim','exampleSentence':'We caught the mouse','level':0, date:null, } | Get a word by id |
| /words/:id | `POST` | {'word':'Mouse', 'translate':'Fare', 'kind':'İsim','exampleSentence':'We caught the mouse','level':0, date:null, } | create a new word |
| /words/update/:id | `PUT` | {'word':'Mouse', 'translate':'Fare', 'kind':'İsim','exampleSentence':'We caught the mouse','level':0, date:null, } | Update word by id. |
| /words/delete/:id | `DELETE` | Empty | Delete word by id. |


## Ekran Görüntüleri

#### Kelime Ekleme Ekranı
![Fullstack-WordMemorizer](/img/kelimeekle.png)
<br>
#### Kelime Listeleme,Düzenleme ve Silme
![Fullstack-WordMemorizer](/img/kelimelerim.png)
<br>
#### Quiz Sorusu ve Cevaplama
![Fullstack-WordMemorizer](/img/quiz.png)
<br>
#### İstatistikler Sayfası
![Fullstack-WordMemorizer](/img/istatistikler.png)


**_Author: İsa Toltar_**

### Contact
- [Twitter](https://twitter.com/forsakeofisa)<br>
- [LinkedIn](https://www.linkedin.com/in/isatoltar/)<br>
- [AboutMe](https://about.me/isatoltar/)<br>
- [Github](https://github.com/toltarisa)




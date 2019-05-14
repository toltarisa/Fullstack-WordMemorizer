# FullStack Word Memorizer 

### Techonologies that I used in this project

<img src="/img/nodejs-logo.png" width="150"/><img src="/img/reacjs.logo.png" width="150"/><img src="/img/mongodb.logo.png" width="150"/>

``` http://localhost:3001/words/ ``` 

| Route | Request Type	 | Example Object 	 | Description	 |
| --- | --- | --- | --- |
| /words | `GET` | Empty | List all words |
| /words/:id | `GET` | {'word':'Mouse', 'translate':'Fare', 'kind':'İsim','exampleSentence':'We caught the mouse','level':0, date:null, } | Get a word by id |
| /words/:id | `POST` | {'word':'Mouse', 'translate':'Fare', 'kind':'İsim','exampleSentence':'We caught the mouse','level':0, date:null, } | create a new word |
| /words/update/:id | `PUT` | {'word':'Mouse', 'translate':'Fare', 'kind':'İsim','exampleSentence':'We caught the mouse','level':0, date:null, } | Update word by id. |
| /words/delete/:id | `DELETE` | Empty | Delete word by id. |
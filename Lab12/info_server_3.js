let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function (req, res) {
    res.send('app.get for test was executed');
    console.log('app.get for test was executed')
});

app.use(express.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
    //response.send(request.body); 
    let q = Number(request.body['qty_textbox']);
    console.log("the input value is..."+q);
    let validationMessage = validateQuantity(q);

    if (validationMessage === ""){
        response.send(`Thank you for purchasing ${q} things!`)
    } else {
        response.send(validationMessage+'<br>'+`Error: ${q} is not a quantity. Hit the back button to fix.`);
    }

 });

 
//any requests made to the express server will send the request method and path and send to log
app.all('*', function (request, response, next) {
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path); //extra code
});



app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback



function validateQuantity(quantity) {
    let errorMessage = "";

    switch(true){
        case isNaN(quantity):
            errorMessage = "Negative inventory and not an integer. Please enter a non-negatie quantity to order.";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an integer. Please enter a non-negatie quantity to order.";
            break;
        case quantity < 0:
            errorMEssage = "Negative inventory. Please enter a non-negative quantity to order";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
            break;
    };

    return errorMessage;
}
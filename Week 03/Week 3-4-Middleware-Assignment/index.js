//----------     MIDDLEWARE - IS A FUNCTION THAT HAS ACCESS TO THE REQUEST OBJECT (REQ), THE RESPONSE OBJECT (RES), AND THE NEXT FUNCTION IN THE APPLICATION’S REQUEST-RESPONSE CYCLE. THE NEXT FUNCTION IS A FUNCTION IN THE EXPRESS ROUTING LAYER WHICH, WHEN INVOKED, EXECUTES THE MIDDLEWARE SUCCEEDING THE CURRENT MIDDLEWARE. ---------------

//MIDDLEWARE FUNCTIONS CAN PERFORM THE FOLLOWING TASKS:
//Execute any code.
//Make changes to the request and the response objects.
////// End the request-response cycle. //////////
//Call the next middleware function in the stack.
//If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
//EXAMPLE OF A MIDDLEWARE FUNCTION DEFINED IN A ROUTER TO HANDLE A SPECIFIC ROUTE:
//router.use(function (req, res, next) {
//  console.log('Time:', Date.now())
//  next()
//})
console.log('Time:', Date.now() )
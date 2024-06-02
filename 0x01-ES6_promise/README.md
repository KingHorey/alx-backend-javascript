![](./jsPromise.jpeg)

# JS promises

Promises in JavaScript is one of the ways in which asynchronous operations are handled.
Other ways include:
* function callbacks
* Async/Await 

## Promises and how they work
Promises handle asynchronous operations as others would by sending to the event loop, while the operation is being worked on, a new Promise object is returned with a <Promise.pending> state.
On completion of the operation, one of two states is either reached - fulfilled or rejected.

### Promise Fulfill
A successfully completed operation returns a fulfilled state. 
In a fulfilled state, the Promise.then() methods is available to be called

### Promise Reject
Failed operation returns a rejected state. 
In a fulfilled state, the Promise.then() and Promise.catch() methods are available to be called

These methods include:
### Instance methods
* Promise.then()
* Promise.catch()
* Promise.finally()

### Static methods 
* Promise.all()
* Promise.any()
* Promise.race()
* Promise.resolve()
* Promise.allSettled()
* Promise.withResolvers()
* Promise.resolve()

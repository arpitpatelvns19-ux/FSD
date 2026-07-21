import {EventEmitter} from 'node:events'

const sayHi = (name) => {
    console.log(`${name} logged in `);
    
};

const task = new EventEmitter();

task.on('greet',sayHi);
task.on("greet",(name)=> {
    console.log(`${name} starts working`);
    
})
task.on("exit",(name)=>{
    console.log("System is Shutting Down...");
    
});
task.emit("greet","Rahul Singh");
task.emit("greet","Aryan Choudhary");
task.emit("exit");

task.off("greet",sayHi);
task.emit("greet","Manager");
task.emit("greet","Employee");
console.log(task.listenerCount);
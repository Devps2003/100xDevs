
  //- Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require("fs");
  const app = express();
  
  app.use(bodyParser.json());
  



app.get('/todos',function(req,res){
  fs.readFile("todos.json","utf-8",(err,data)=>{
    if(err){
      res.status(404).send();
    }else{
      res.json(JSON.parse(data));
    }
  })
  
});

app.get('/todos/:id',function(req,res){
  fs.readFile("todos.json","utf-8",(err,data)=>{
    if(err){
      throw err;
    }else{
      const todos=JSON.parse(data);
      const todoI = todos.findIndex(it=>it.id==parseInt(req.params.id));
      if(todoI===-1){
        res.status(404).send();
      }
      else{
        res.json(todos[todoI]);
      }
    }
  });

});

app.post('/todos',function(req,res){
  const newTodo = {
    id: Math.floor(Math.random()*10000),
    title: req.params.title,
    body: req.params.description
  };
  fs.readFile("todos.json","utf-8",(err,data)=>{
    if(err){
      throw err;
    }else{
      const todos = JSON.parse(data);
      todos.push(newTodo);
      fs.writeFile("todos.json",JSON.stringify(todos),(err)=>{
        if(err) throw err;
        else{
          res.status(201).json(newTodo);
        }
      })
    }
  })
});

app.put('/todos/:id',function(req,res){
  fs.readFile("todos.json","utf-8",(err,data)=>{
    if(err) throw err;
    else{
      const todos = JSON.parse(data);
      const todoI = todos.findIndex(it=> it.id===parseInt(req.params.id));
      if(todoI===-1){
        res.status(404).send();
      }else{
        const updatedTodo = {
          id: todos[todoIndex].id,
          title: req.body.title,
          description: req.body.description
        };
        todos[todoIndex] = updatedTodo;
        fs.writeFile("todos.json",JSON.stringify(todos),(err)=>{
          if(err) throw err;
          else{
            res.status(201).json(updatedTodo);
          }
        })
      }
  
    }
  })
})
app.delete('/todos/:id',function(req,res){
  fs.readFile("todos.json","utf-8",(err,data)=>{
    if(err) throw err;
    else{
      let todos = JSON.parse(data);
      const todoI = todos.findIndex(it=> it.id===parseInt(req.params.id));
      if(todoI===-1){
        res.status(404).send();
      }else{
          todos.splice(todoI, 1);
          res.status(200).send();
      }
  
    }
  })
})

app.use((req, res, next) => {
  res.status(404).send();
});





/*t => t.id === parseInt(req.params.id): This is an arrow function used as a callback for the find method. It checks if the id property of each element (t) is equal to the integer value obtained by parsing the id parameter from the request (req.params.id). The parseInt function is used to convert the id from a string to an integer.

const todo: This declares a constant variable named todo to store the result of the find method. It will be the first element in the array that satisfies the condition specified in the arrow function.*/

  module.exports = app;
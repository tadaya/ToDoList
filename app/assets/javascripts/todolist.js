var list;

$('form').on('submit', function(e){
  e.preventDefault();
  var task = $('input').val();
  console.log(task);
  $.post("/tasks", {todo: task});
});

function renderTasks(){
  $.getJSON('/tasks', function(response){
    console.log(response);
  });
};

renderTasks();
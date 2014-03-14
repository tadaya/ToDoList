var list;

function renderTasks() {

  $.getJSON('/list', function(response) {
    $.each(response, function(i, task) {
      li = $("<li>");
      li.text(task.todo).appendTo('body');
      $("<button>").appendTo(li);
      $("<button>").appendTo(li);
    });
  });
}

renderTasks(); 

$('form').on('submit', function(e){
  e.preventDefault();
  var task = $('input').val();
  console.log(task);
  $.post("/tasks", {todo: task});
});


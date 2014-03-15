var list;

function renderTasks() {
  list = $('<ul>');
  list.appendTo('body');
  $.getJSON('/list', function(response) {
    $.each(response, function(i, task) {
      var li = $('<li>');
      li.text(task.todo).appendTo(list);
      if(task.complete === true) {
        li.css('text-decoration', 'line-through');
      }
      button = $("<button class='complete'>");
      button.appendTo(li);
      $(button).on('click', function(){
          $.ajax({
            url: '/tasks/' + task.id, 
            type: 'PUT',
            data: {id: task.id, complete: !task.complete}
          });
      });
      $("<button class='delete'>").appendTo(li).on('click', function(){
        $.ajax({
          url: '/tasks/' + task.id,
          type: 'DELETE',
          data: {id: task.id}
        });
      });
    });
  });
};

renderTasks(); 

$('form').on('submit', function(e){
  e.preventDefault();
  var task = $('input').val();
  console.log(task);
  $.post("/tasks", {todo: task, complete: false});
  list.remove();
  renderTasks(); 
  this.reset();
});


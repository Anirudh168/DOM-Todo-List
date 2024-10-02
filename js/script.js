var disp = document.getElementById('display');
var todo = document.querySelector('.todolist');
function add()
{
    if(!(disp.value==''))
    {
        var li = document.createElement('li');
        li.innerHTML=disp.value.trim()+"<button onclick='edit(event)' class='edit'>Edit</button>"+"<button onclick='del(event)' class='delete'>Delete</button>";
        todo.append(li);
    }
}
function del(e)
{
    e.target.parentElement.remove();
}
function clear1()
{
    disp.value='';
}
function edit(e)
{
    e.target.parentElement.innerHTML=disp.value.trim()+"<button onclick='edit(event)' class='edit'>Edit</button>"+"<button onclick='del(event)' class='delete'>Delete</button>";
}
var learner = document.getElementById('learner');
var dreamer = document.getElementById('dreamer');
var coder = document.getElementById('coder');
var explorer = document.getElementById('explorer');
var img = document.querySelector('img');



learner.addEventListener('mouseover', function(){
    img.setAttribute('src', 'IMG/reader.jpg');
    this.style.color = 'grey';
})

learner.addEventListener('mouseout', function(){
    this.style.color = 'black';
})

dreamer.addEventListener('mouseover', function(){
    img.setAttribute('src', 'IMG/friends.jpg');
    this.style.color = 'grey';
})

dreamer.addEventListener('mouseout', function(){
    this.style.color = 'black';
})

coder.addEventListener('mouseover', function(){
    img.setAttribute('src', 'IMG/program.jpg');
    this.style.color = 'grey';
})

coder.addEventListener('mouseout', function(){
    this.style.color = 'black';
})

explorer.addEventListener('mouseover', function(){
    img.setAttribute('src', 'IMG/workout.jpg');
    this.style.color = 'grey';
})

explorer.addEventListener('mouseout', function(){
    this.style.color = 'black';
})
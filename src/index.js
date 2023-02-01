document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let p = buildList(e.target['new-task-description'].value);
    selectUrgency(e.target.urgency.value, p)

    form.reset()

    const button = document.querySelector('sorter');
    sorter.addEventListener('click', p => {
      sortPriority(p)
    })
    });
})


function buildList(task) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = " x";
  p.textContent = task;
  p.append(btn);
  document.querySelector('#list').append(p);

  btn.addEventListener('click', (e) => {
    btn.parentElement.remove();

  })

  return p

}

function selectUrgency(urgency, p) {
  if (urgency === 'high') {
    p.style.backgroundColor= "red";
  }
  else if (urgency === 'medium') {
    console.log(urgency);
    p.style.backgroundColor = "yellow";
  }
  else {
    console.log(urgency);
    p.style.backgroundColor = "green";
    p.class = 'green' 
  }
}

function sortPriority(element) {
  element.removeParent();
}
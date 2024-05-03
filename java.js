let  text=document.querySelector(".text")
const add=document.querySelector(".add")
const clear=document.querySelector(".temizle")

add.addEventListener("click", function(){
    let yazi=text.value
    if (yazi !== '') {
      let list = document.querySelector(".ul")
      let listItem = document.createElement('li');
      listItem.textContent = text.value;
      list.appendChild(listItem);
      text.value=""
      listItem.className = 'list-item';
      listItem.innerHTML = `
        <span>${yazi}</span>
        <button class="delete-btn" onclick="deleteItem(this)"><i class="bi bi-trash"></i></button>
      `;
    }else{
      alert("yazi daxil edin!")
    }
  })

  function deleteItem(element) {
    var listItem = element.parentNode;
    var list = listItem.parentNode;
    list.removeChild(listItem);
  }

  clear.addEventListener("click", function(){
    let list = document.querySelector(".ul")
    list.innerText=""
  })
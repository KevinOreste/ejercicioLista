

    const input = document.querySelector("input");
    const addBtn = document.querySelector(".btn-add");
    const ul = document.querySelector("ul");
    const empty = document.querySelector(".empty");
    
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
    
      const text = input.value;
    
      if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
    
        li.appendChild(p);
        
        li.addEventListener("click", (e) => {
            const item = e.target;
    
            item.innerHTML='<font face = "Cursive"><del>' + item.textContent + '</del></font>'
        
            const items = document.querySelectorAll("li");
    
          });

        ul.appendChild(li);
    
        input.value = "";
      }
    });


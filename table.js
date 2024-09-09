fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((objdata)=>{
    let tabdata='';
    objdata.map((val)=>{
        tabdata+=`<tr>
            <td>${val.title}</td>
            <td>${val.description}</td>
            <td>${val.price}</td>
            <td><img src="${val.image}"></td>
        </tr>`;
    });
    document.getElementById('tablebody').innerHTML=tabdata;

    
})

const submitForm=(event)=>{
    //alert("submit form");
    //event.preventDefault();

    //value
    let email="",password="";

    //DOM
    email = String(document.getElementById("email_id").value).trim();
    password = String(document.getElementById("password_id").value).trim();

    alert(`${email} => ${password}`)

    //localStorage
    localStorage.setItem("email_",email);
    localStorage.setItem("password_",password);
   
}
//submitForm()

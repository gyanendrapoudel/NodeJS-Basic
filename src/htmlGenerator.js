export const htmlGenerator=(data)=>{
    console.log(data)
    const dataHTML = data.reduce((acc,user)=> user.length?acc+`<li>${user.split(',')[0]}: ${user.split(',')[1]}</li>`:acc,'')
    console.log(dataHTML)
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <style>
       
    </style>
</head>
<body>
    <header class="container shadow-lg p-2 bg-light rounded-3 text-capitalize hover ">
        <div class="">logo</div>
        <nav class="">
            <a href="/">Home</a>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
        </nav>
    </header>
   
        <div class="alert alert-primary w-50 m-auto mt-5" role="alert">
        Welcome to the community! Stay Connected user lists
        <ul>`
        +dataHTML+
        `</ul>
        </div>
    
    
</body>
</html>`
}


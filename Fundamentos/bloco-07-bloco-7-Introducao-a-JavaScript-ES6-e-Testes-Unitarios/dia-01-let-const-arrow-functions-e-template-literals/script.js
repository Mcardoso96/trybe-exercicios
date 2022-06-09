/*function userInfo() {
    const userEmail = 'maria@email.com';
    console.log(userEmail);
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  }
  userInfo();*/

  if (true) {
    // inicio do escopo do if
    const userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20 
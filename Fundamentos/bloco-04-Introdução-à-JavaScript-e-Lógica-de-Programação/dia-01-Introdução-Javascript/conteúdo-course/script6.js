const notaCandidato = 80;

switch (notaCandidato) {
  case 80:
    console.log('parabéns, você foi aprovado!');
    break;
  
  case 70:
  console.log('Você está na nossa lista de espera!');break;

  case 60:
  console.log('Você foi reprovado!');
  break;

  default:
    console.log('não se aplica');
}
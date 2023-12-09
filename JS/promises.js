new Promise((resolve, reject) => {
  //.. Bloco
  resolve();
  reject();
});

const numeroQualquer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numero = parseInt(Math.random() * 100);
    resolve(numero);
  }, 2000);
});

numeroQualquer
  .then((value) => {
    console.log(value); //se der certo, mostre o valor de value
  })
  .catch((error) => {
    console.error(error); // se der erro, mostre erro
  })
  .finally(() => {
    console.log("finalizou"); //independente se der erro ou não, faça isso
  });

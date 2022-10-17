function isPrime(n){
  if (n == 2 || n == 3){
    return true;
  }

  if (n % 2 == 0 || n % 3 == 0){
    return false;
  }

  for(var i = 5; i<=Math.sqrt(n); i += 6){
    if (n % i == 0 || n % (i + 2) == 0){
      return false;
    } 
  }

  return true;
}

function divisibleBy(n){
  let divisors = "Los divisores son :"
  for (var i = n; i > 1; i--) {
    if (n % i  == 0){
      divisors += i + ", ";
    }
  }
  return divisors;
}

/* PROGRAMA PRINCIPAL */

alert("Bienvenido al detector de números primos (también de dvisores jajaj)!")
let superior_limit = parseInt(prompt("Ingrese el número del que desea obtener información : "))

if (isPrime(superior_limit)) {
  console.log ("Es primo? : Sí")
  let primes = "Numeros Primos menores que este: ";
  for (var i = 1; i<superior_limit; i++) {

    if (isPrime(i)) {
      primes += i + ", ";
    }
  }
  console.log(primes);
}
else {
  console.log("Es Primo?: Nop")
  console.log(divisibleBy(superior_limit));
  let minor_prime = superior_limit

  do{
    minor_prime-- 
  }while(isPrime(minor_prime) == false )

  console.log("Un numero primo cercano es: " + minor_prime)

}



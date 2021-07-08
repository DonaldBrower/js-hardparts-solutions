/*
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret 
*/

const createSecretHolder = (secret) => {
  return {
    getSecret: () => {
      return secret;
    },
    setSecret: (newSecret) => {
      secret = newSecret;
    },
  };
};
// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // => returns 2

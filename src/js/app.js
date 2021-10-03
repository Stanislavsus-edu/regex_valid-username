export default class Validator {
  static validateUsername(username){
    return /^[a-z]+[-_a-z\d]*[a-z]$/.test(username) && !/\d{4,}/.test(username);
  }
} 
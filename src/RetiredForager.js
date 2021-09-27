var RetiredForagerBee = function() {
  ForagerBee.call(this, arguments);
  this. age = 40;
  this.job = 'gamble';
  this.color = 'grey';
  this.canFly = false;

};
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};
RetiredForagerBee.prototype.eat = function() {
  Grub.eat.call(this, arguments);
};
RetiredForagerBee.prototype.gamble = function() {
  // this.treasureChest.push('treasure');
  foragerBee.forage.call(this, arguments);
};


var ForagerBee = function() {
  Bee.call(this, arguments);
  this. age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

};
ForagerBee.prototype.eat = function() {
  Grub.eat.call(this, arguments);
};
ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
};


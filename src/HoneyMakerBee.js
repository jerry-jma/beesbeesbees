var HoneyMakerBee = function() {
  Bee.call(this, arguments);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype.eat = function() {
  Grub.eat.call(this, arguments);
};
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

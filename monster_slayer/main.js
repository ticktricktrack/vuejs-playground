new Vue({
  el: "#monster-slayer",
  data: {
    me: 100,
    monster: 100,
    messages: [],
    foo: true
  },

  computed: {
    won() {
      return this.monster <= 0;
    },

    lost() {
      return this.me <= 0;
    }
  },

  methods: {
    messageClass(message) {
      if (message.messageType === "attacked")  { return "is-danger";}
      if (message.messageType === "heal")      { return "is-info";}
      return "is-success";
    },

    progressClass(player) {
      if (player < 30) { return "is-danger";}
      if (player < 60) { return "is-warning";}
      return "is-success";
    },

    opacity(index) {
      return "opacity: " + (1.0 - index / 20)
    },

    monsterAttack(maxDamage = 15) {
      var damage =  Math.floor(Math.random() * maxDamage);
      this.me -= damage;
      this.messages.unshift({
        messageType: "attacked",
        body: "The monster attacked you and did " + damage + "HP Damage"
      });
    },

    myAttack(maxDamage = 10) {
      var damage =  Math.floor(Math.random() * maxDamage);
      this.monster -= damage;
      this.messages.unshift({
        messageType: "attacking",
        body: "You attacked the monster and did " + damage + "HP Damage"
      });
    },

    attack(maxDamage = 10) {
      this.myAttack();
      this.monsterAttack();
    },

    specialAttack() {
      this.myAttack(20);
      this.monsterAttack(15);
    },

    heal() {
      this.me += 15;
      this.messages.unshift({
        messageType: "heal",
        body: "You healed yourself for 15HP"
      });
      this.monsterAttack();
    },

    reset() {
      this.me = 100;
      this.monster = 100;
      this.messages = [];
    }
  },
});

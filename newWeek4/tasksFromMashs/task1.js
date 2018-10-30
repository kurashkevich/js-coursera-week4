var ladder = {
    step: 0,
    up: function () {
        console.log('up');
        this.step++;
        return this;
    },
    down: function () {
        console.log('down');
        this.step--;
        return this;
    },
    show: function () {
        console.log('show');
        console.log(this.step)
        return this;
    }
}

ladder.up();
ladder.up();
ladder.down();
ladder.show();

ladder.up().up().down().up().down().show();
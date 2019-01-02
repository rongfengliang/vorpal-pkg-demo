// const vorpal = require("vorpal")();

// vorpal.show()

const vorpal = require('vorpal')();
vorpal
  .command('say [words...]')
  .option('-b, --backwards')
  .option('-t, --twice')
  .action(function (args, callback) {
    let str = args.words.join(' ');
    str = (args.options.backwards) ?
      str.split('').reverse().join('') :
      str;
    this.log(str);
    callback();
  })
  vorpal
  .command('sayapp [words...]')
  .action(function (args, cb) {
    this.log(args.words.join(' '));
    cb();
  });

vorpal
  .command('reverse [words...]')
  .action(function (args, cb) {
    this.log(args.stdin.split('').reverse().join(''));
    cb();
  });

vorpal
  .command('color [color] [text...]',"设置颜色")
  .autocomplete(['2018-12-31', '2019-01-03', '2019-03-01'])
  .action(function (args, cb) {
    this.log(args)
    this.log(vorpal.chalk[args.color](args.text.join('')));
    cb();
  });

  vorpal
  .command('order pizza')
  .option('--anchovies')
  .action(function (args, cb) {
    const self = this;
    this.prompt({
      type: 'input',
      name: 'time',
      message: 'When would you like your pizza?'
    }, function (result) {
      self.log(`Okay, ${result.time} it is!`);
      cb();
    });
  });

  vorpal
  .catch('[words...]', '帮助提示')
  .action(function (args, cb) {
    this.log(args.words.join(' ') + ' 请输入正确的命令');
    cb();
  });

  vorpal.delimiter('dalongrong$').
  show()

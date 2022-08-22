try {

  // general stuff

  var sound = new Howl({
    src: ['coderclicksongs.mp3'],
    loop: true,
    volume: 1.0
  });

  sound.play();

  window.addEventListener('beforeunload', function () {
    save();
    window.location.replace("/index.html");
  });

  

$("#shopsection").hide();
$("#upgradesection").hide();
$("#prestigesection").hide();
$(".left").hide();
$(".right").hide();
$(".loader").show();

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        $("#shopsection").show();
        $("#upgradesection").hide();
        $("#prestigesection").hide();
        $(".left").show();
        $(".right").show();
        $(".loader").hide();
        $(".right").css("right", "0");
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

  move();

  function onloadfunc() {
    load();
  }

  var shop = document.getElementById('shopsection');
  var upgrades = document.getElementById('upgradesection');
  var prestigeshop = document.getElementById('prestigesection');

  shop.style.display = "block";
  upgrades.style.display = "none";
  prestigeshop.style.display = "none";

  document.getElementById('enterdevoptions1').onclick = () => {
    let password = prompt("Please enter dev pasword:", "lol");
    if (password == null || password == "") {
      window.alert("Incorrect password!");
    } else if (password == "dev042109$") {
      window.alert("Correct password!");
    } else {
      window.alert("Incorrect password!");
    }
  };

  /////// ITEMS ///////////

  let counter = 0;
  let clickincome = 1;
  let coders = 0;
  let coderCost = 10;
  let coderStartCost = 10;
  let coderincome = 0;
  let robots = 0;
  let robotCost = 100;
  let robotStartCost = 100;
  let robotincome = 0;
  let gamedevs = 0;
  let gamedevCost = 1000;
  let gamedevStartCost = 1000;
  let gamedevincome = 0;
  let hackers = 0;
  let hackerCost = 10000;
  let hackerStartCost = 10000;
  let hackerincome = 0;
  let devteams = 0;
  let devteamCost = 100000;
  let devteamStartCost = 100000;
  let devteamincome = 0;
  let gamedistribs = 0;
  let gamedistribCost = 1000000;
  let gamedistribStartCost = 1000000;
  let gamedistribincome = 0;
  let incomespeed = 1000;

  let neededmoney;

  function notenoughalert(type) {
    if (type == prestige) {
      neededmoney = prestigecost - counter;
      alert(`You do not have enough money to prestige! You need ${neededmoney} more money to prestige.`)
    }
    else if (type == coder) {
      neededmoney = coderCost - counter;
      alert(`You do not have enough money to get a coder! You need ${neededmoney} more money to get a coder.`)
    }
    else if (type == robot) {
      neededmoney = robotCost - counter;
      alert(`You do not have enough money to get a robot! You need ${neededmoney} more money to get a robot.`)
    }
    else if (type == gamedev) {
      neededmoney = gamedevCost - counter;
      alert(`You do not have enough money to get a game dev! You need ${neededmoney} more money to get a game dev.`)
    }
    else if (type == hacker) {
      neededmoney = hackerCost - counter;
      alert(`You do not have enough money to get a hacker! You need ${neededmoney} more money to get a hacker.`)
    }
    else if (type == devteam) {
      neededmoney = devteamCost - counter;
      alert(`You do not have enough money to get a dev team! You need ${neededmoney} more money to get a dev team.`)
    }
    else if (type == gamedistrib) {
      neededmoney = gamedistribCost - counter;
      alert(`You do not have enough money to get a game distributor! You need ${neededmoney} more money to get a game distributor.`)
    } else {
      return alert('Error');
    }
  }

  document.getElementById('button').onclick = () => {
    counter = counter + clickincome;
    document.getElementById('clicks').innerText = counter;
  };

  let buttonelement = document.getElementById("button").style;

  function buttonclick() {
    counter = counter + clickincome;
    document.getElementById('clicks').innerText = counter;
    $("#button").css("background-color", "#3e8341");
    $("#button").css("color", "white");
    $("#button").css("border-radius", "50%");
    $("#button").css("border-style", "solid");
    $("#button").css("border-color", "blue");     setTimeout(function () {
      $("#button").css("background-color", "#ddd");
      $('#button').css("border-radius", "0%")
      $("#button").css("border", "none");
      $("#button").css("color", "black");
    }, 100);
  }

  keyboardJS.bind('space', (e) => {
  e.preventRepeat();
  buttonclick();
});

  document.getElementById('getcoder').onclick = () => {
    if (counter < coderCost) {
      return notenoughalert(coder);
    } else {
      coders = coders + 1;
      coderincome = coderincome + 1;
      counter = counter - coderCost;
      document.getElementById('clicks').innerText = counter;
      coderCost = coderCost + 5;
      document.getElementById('coderCost').innerText = coderCost;
      document.getElementById('coders').innerText = coders;
      document.getElementById('coderincome').innerText = coderincome;
    }
  }

  document.getElementById('getrobot').onclick = () => {
    if (counter < robotCost) {
      return notenoughalert(robot);
    } else {
      robots = robots + 1;
      robotincome = robotincome + 10;
      counter = counter - robotCost;
      document.getElementById('clicks').innerText = counter;
      robotCost = robotCost + 50;
      document.getElementById('robotCost').innerText = robotCost;
      document.getElementById('robots').innerText = robots;
      document.getElementById('robotincome').innerText = robotincome;
    }
  }

  document.getElementById('getgamedev').onclick = () => {
    if (counter < gamedevCost) {
      return notenoughalert(gamedev);
    } else {
      gamedevs = gamedevs + 1;
      gamedevincome = gamedevincome + 50;
      counter = counter - gamedevCost;
      document.getElementById('clicks').innerText = counter;
      gamedevCost = gamedevCost + 500;
      document.getElementById('gamedevCost').innerText = gamedevCost;
      document.getElementById('gamedevs').innerText = gamedevs;
      document.getElementById('gamedevincome').innerText = gamedevincome;
    }
  }

  document.getElementById('gethacker').onclick = () => {
    if (counter < hackerCost) {
      return notenoughalert(hacker);
    } else {
      hackers = hackers + 1;
      hackerincome = hackerincome + 250;
      counter = counter - hackerCost;
      document.getElementById('clicks').innerText = counter;
      hackerCost = hackerCost + 5000;
      document.getElementById('hackerCost').innerText = hackerCost;
      document.getElementById('hackers').innerText = hackers;
      document.getElementById('hackerincome').innerText = hackerincome;
    }
  }

  document.getElementById('getdevteam').onclick = () => {
    if (counter < devteamCost) {
      return notenoughalert(devteam);
    } else {
      devteams = devteams + 1;
      devteamincome = devteamincome + 1000;
      counter = counter - devteamCost;
      document.getElementById('clicks').innerText = counter;
      devteamCost = devteamCost + 10000;
      document.getElementById('devteamCost').innerText = devteamCost;
      document.getElementById('devteams').innerText = devteams;
      document.getElementById('devteamincome').innerText = devteamincome;
    }
  }

  document.getElementById('getgamedistrib').onclick = () => {
    if (counter < gamedistribCost) {
      return notenoughalert(gamedistrib);
    } else {
      gamedistribs = gamedistribs + 1;
      gamedistribincome = gamedistribincome + 10000;
      counter = counter - gamedistribCost;
      document.getElementById('clicks').innerText = counter;
      gamedistribCost = gamedistribCost + 500000;
      document.getElementById('gamedistribCost').innerText = gamedistribCost;
      document.getElementById('gamedistribs').innerText = gamedistribs;
      document.getElementById('gamedistribincome').innerText = gamedistribincome;
    }
  }

  ////////// UPGRADES //////////

  ///////// PRESTIGE SHOP STUFF //////////

  ////////// OTHER ///////////////

  function dancingpancake(number) {
    counter = counter + number;
    document.getElementById('clicks').innerText = counter;
  }

  let result;

  function prestige_confirm() {
    var returnVal = comfirm("Are you sure you want to prestige?");
    if (returnVal == false) {
      return result = false;
    } else {
      return result = true;
    }
  }

  let totalincome = 0;

  let prestigelevel = 1;
  let prestigecost = 10000000;

  function dancingpancake3(number) {
    prestigelevel = prestigelevel + number;
    clickincome = clickincome + number;
    prestigecost = 5000000 * prestigelevel + 5000000;
    if (prestigelevel > 4) {
        coders = 10;
        coderincome = 10;
      } else if (prestigelevel > 9) {
        robots = 10;
        robotincome = 100;
        coders = 10;
        coderincome = 10;
      } else if (prestigelevel > 14) {
        gamedevs = 10;
        gamedevincome = 500;
        robots = 10;
        robotincome = 100;
        coders = 10;
        coderincome = 10;
      } else if (prestigelevel > 19) {
        hackers = 10;
        hackerincome = 2500;
        gamedevs = 10;
        gamedevincome = 500;
        robots = 10;
        robotincome = 100;
        coders = 10;
        coderincome = 10;
      }
    document.getElementById('clicks').innerText = counter;
    document.getElementById('clickincome').innerText = clickincome;
    document.getElementById('prestigelevel').innerText = prestigelevel;
    document.getElementById('prestigecost').innerText = prestigecost;
    document.getElementById('coderCost').innerText = coderCost;
    document.getElementById('coders').innerText = coders;
    document.getElementById('coderincome').innerText = coderincome;
    document.getElementById('robotCost').innerText = robotCost;
    document.getElementById('robots').innerText = robots;
    document.getElementById('robotincome').innerText = robotincome;
    document.getElementById('gamedevCost').innerText = gamedevCost;
    document.getElementById('gamedevs').innerText = gamedevs;
    document.getElementById('gamedevincome').innerText = gamedevincome;
    document.getElementById('hackerCost').innerText = hackerCost;
    document.getElementById('hackers').innerText = hackers;
    document.getElementById('hackerincome').innerText = hackerincome;
    document.getElementById('devteamCost').innerText = devteamCost;
    document.getElementById('devteams').innerText = devteams;
    document.getElementById('devteamincome').innerText = devteamincome;
  }

  function dancingpancake4(number) {
    counter = number;
    document.getElementById('clicks').innerText = counter;
  }

  document.getElementById('prestige').onclick = () => {
    if (counter < prestigecost) {
      return notenoughalert(prestige);
    } else {
      if (confirm('Are you sure you want to prestige?')) {
      counter = 0;
      coderCost = coderStartCost;
      robotCost = robotStartCost;
      gamedevCost = gamedevStartCost;
      hackerCost = hackerStartCost;
      devteams = 0;
      devteamCost = devteamStartCost;
      devteamincome = 0;
      gamedistribs = 0;
      gamedistribCost = gamedistribStartCost;
      gamedistribincome = 0;
      prestigelevel = prestigelevel + 1;
      clickincome = clickincome + 1;
      prestigecost = prestigecost + 5000000;
      if (prestigelevel > 4) {
        coders = 10;
        coderincome = 10;
        robots = 0;
        robotincome = 0;
        gamedevs = 0;
        gamedevincome = 0;
        hackers = 0;
        hackerincome = 0;
        devteams = 0;
        devteamincome = 0;
      } else if (prestigelevel > 9) {
        robots = 10;
        robotincome = 100;
        coders = 10;
        coderincome = 10;
        gamedevs = 0;
        gamedevincome = 0;
        hackers = 0;
        hackerincome = 0;
        devteams = 0;
        devteamincome = 0;
      } else if (prestigelevel > 14) {
        gamedevs = 10;
        gamedevincome = 500;
        robots = 10;
        robotincome = 100;
        coders = 10;
        coderincome = 10;
        hackers = 0;
        hackerincome = 0;
        devteams = 0;
        devteamincome = 0;
      } else if (prestigelevel > 19) {
        hackers = 10;
        hackerincome = 2500;
        gamedevs = 10;
        gamedevincome = 500;
        robots = 10;
        robotincome = 100;
        coders = 10;
        coderincome = 10;
        devteams = 0;
        devteamincome = 0;
      } else if (prestigelevel > 24) {
        hackers = 10;
        hackerincome = 2500;
        gamedevs = 10;
        gamedevincome = 500;
        robots = 10;
        robotincome = 100;
        coders = 10;
        coderincome = 10;
        devteams = 10;
        devteamincome = 10000;
      } else if (prestigelevel > 49) {
        incomespeed = 500;
        hackers = 10;
        hackerincome = 2500;
        gamedevs = 10;
        gamedevincome = 500;
        robots = 10;
        robotincome = 100;
        coders = 10;
        coderincome = 10;
        devteams = 10;
        devteamincome = 10000;
      } else  if (prestigelevel < 5) {
        coders = 0;
        coderincome = 0;
        robots = 0;
        robotincome = 0;
        gamedevs = 0;
        gamedevincome = 0;
        hackers = 0;
        hackerincome = 0;
        devteams = 0;
        devteamincome = 0;
        incomespeed = 1000;
      }
      document.getElementById('clicks').innerText = counter;
      document.getElementById('prestigelevel').innerText = prestigelevel;
      document.getElementById('prestigecost').innerText = prestigecost;
      document.getElementById('coderCost').innerText = coderCost;
      document.getElementById('coders').innerText = coders;
      document.getElementById('coderincome').innerText = coderincome;
      document.getElementById('robotCost').innerText = robotCost;
      document.getElementById('robots').innerText = robots;
      document.getElementById('robotincome').innerText = robotincome;
      document.getElementById('gamedevCost').innerText = gamedevCost;
      document.getElementById('gamedevs').innerText = gamedevs;
      document.getElementById('gamedevincome').innerText = gamedevincome;
      document.getElementById('hackerCost').innerText = hackerCost;
      document.getElementById('hackers').innerText = hackers;
      document.getElementById('hackerincome').innerText = hackerincome;
      document.getElementById('devteamCost').innerText = devteamCost;
      document.getElementById('devteams').innerText = devteams;
      document.getElementById('devteamincome').innerText = devteamincome; document.getElementById('gamedistribCost').innerText = gamedistribCost;
      document.getElementById('gamedistribs').innerText = gamedistribs; document.getElementById('gamedistribincome').innerText = gamedistribincome;
    }
  }
}

window.setInterval(function () {
  dancingpancake(coderincome);
  dancingpancake(robotincome);
  dancingpancake(gamedevincome);
  dancingpancake(hackerincome);
  dancingpancake(devteamincome);
  dancingpancake(gamedistribincome);
  document.getElementById('clicks').innerText = counter;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('devteamCost').innerText = devteamCost;
  document.getElementById('devteams').innerText = devteams;
  document.getElementById('devteamincome').innerText = devteamincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
}, incomespeed);

function loadelements() {
  document.getElementById('clicks').innerText = counter;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('devteamCost').innerText = devteamCost;
  document.getElementById('devteams').innerText = devteams;
  document.getElementById('devteamincome').innerText = devteamincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
}
  
window.setInterval(function () {
  document.getElementById('clicks').innerText = counter;
    document.getElementById('clickincome').innerText = clickincome;
    document.getElementById('prestigelevel').innerText = prestigelevel;
    document.getElementById('prestigecost').innerText = prestigecost;
    document.getElementById('coderCost').innerText = coderCost;
    document.getElementById('coders').innerText = coders;
    document.getElementById('coderincome').innerText = coderincome;
    document.getElementById('robotCost').innerText = robotCost;
    document.getElementById('robots').innerText = robots;
    document.getElementById('robotincome').innerText = robotincome;
    document.getElementById('gamedevCost').innerText = gamedevCost;
    document.getElementById('gamedevs').innerText = gamedevs;
    document.getElementById('gamedevincome').innerText = gamedevincome;
    document.getElementById('hackerCost').innerText = hackerCost;
    document.getElementById('hackers').innerText = hackers;
    document.getElementById('hackerincome').innerText = hackerincome;
    document.getElementById('devteamCost').innerText = devteamCost;
    document.getElementById('devteams').innerText = devteams;
    document.getElementById('devteamincome').innerText = devteamincome;
}, 500);

window.setInterval(function () {
  totalincome = coderincome + robotincome + gamedevincome + hackerincome + devteamincome + gamedistribincome;
  document.getElementById('totalincome').innerText = totalincome;
  document.getElementById('clicks').innerText = counter;
}, 100);

document.getElementById('save').onclick = () => {
  store.set('save-game', {
    "counter": counter,
    "clickincome": clickincome,
    "totalincome": totalincome,
    "coders": coders,
    "coderCost": coderCost,
    "coderincome": coderincome,
    "robots": robots,
    "robotCost": robotCost,
    "robotincome": robotincome,
    "gamedevs": gamedevs,
    "gamedevCost": gamedevCost,
    "gamedevincome": gamedevincome,
    "hackers": hackers,
    "hackerCost": hackerCost,
    "hackerincome": hackerincome,
    "devteams": devteams,
    "devteamCost": devteamCost,
    "devteamincome": devteamincome,
    "gamedistribs": gamedistribs,
    "gamedistribCost": gamedistribCost,
    "gamedistribincome": gamedistribincome,
    "prestigecost": prestigecost,
    "prestigelevel": prestigelevel
  });
  alert("Saved!")
}

function save() {
  const lastVisit = Date.now();
  store.set('save-game', {
    "counter": counter,
    "clickincome": clickincome,
    "totalincome": totalincome,
    "coders": coders,
    "coderCost": coderCost,
    "coderincome": coderincome,
    "robots": robots,
    "robotCost": robotCost,
    "robotincome": robotincome,
    "gamedevs": gamedevs,
    "gamedevCost": gamedevCost,
    "gamedevincome": gamedevincome,
    "hackers": hackers,
    "hackerCost": hackerCost,
    "hackerincome": hackerincome,
    "devteams": devteams,
    "devteamCost": devteamCost,
    "devteamincome": devteamincome,
    "gamedistribs": gamedistribs,
    "gamedistribCost": gamedistribCost,
    "gamedistribincome": gamedistribincome,
    "prestigecost": prestigecost,
    "prestigelevel": prestigelevel,
    "lastVisit": lastVisit
  });
}

document.getElementById('load').onclick = () => {
  var sd = store.get('save-game');
  counter = sd.counter;
  clickincome = sd.clickincome;
  coders = sd.coders;
  coderCost = sd.coderCost;
  coderincome = sd.coderincome;
  robots = sd.robots;
  robotCost = sd.robotCost;
  robotincome = sd.robotincome;
  gamedevs = sd.gamedevs;
  gamedevCost = sd.gamedevCost;
  gamedevincome = sd.gamedevincome;
  hackers = sd.hackers;
  hackerCost = sd.hackerCost;
  hackerincome = sd.hackerincome;
  devteams = sd.devteams;
  devteamCost = sd.devteamCost;
  devteamincome = sd.devteamincome;
  gamedistribs = sd.gamedistribs;
  gamedistribCost = sd.gamedistribCost;
  gamedistribincome = sd.gamedistribincome;
  prestigecost = sd.prestigecost;
  prestigelevel = sd.prestigelevel;
  document.getElementById('clicks').innerText = counter;
  document.getElementById('clickincome').innerText = clickincome;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('devteamCost').innerText = devteamCost;
  document.getElementById('devteams').innerText = devteams;
  document.getElementById('devteamincome').innerText = devteamincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
  loadelements();
  alert("Loaded!")
}

function load() {
  var sd = store.get('save-game');
  clickincome = sd.clickincome;
  totalincome = sd.totalincome;
  coders = sd.coders;
  coderCost = sd.coderCost;
  coderincome = sd.coderincome;
  robots = sd.robots;
  robotCost = sd.robotCost;
  robotincome = sd.robotincome;
  gamedevs = sd.gamedevs;
  gamedevCost = sd.gamedevCost;
  gamedevincome = sd.gamedevincome;
  hackers = sd.hackers;
  hackerCost = sd.hackerCost;
  hackerincome = sd.hackerincome;
  devteams = sd.devteams;
  devteamCost = sd.devteamCost;
  devteamincome = sd.devteamincome;
  gamedistribs = sd.gamedistribs;
  gamedistribCost = sd.gamedistribCost;
  gamedistribincome = sd.gamedistribincome;
  prestigecost = sd.prestigecost;
  prestigelevel = sd.prestigelevel;
  const now = Date.now();
  const secsSinceLastVisit1 = now - sd.lastVisit;
  secsSinceLastVisit1.toFixed();
  const secsSinceLastVisit2 = secsSinceLastVisit1 / 1000;
  secsSinceLastVisit2.toFixed();
  const secsSinceLastVisit3 = Math.round(secsSinceLastVisit2);
  const incomecollect = secsSinceLastVisit3 * sd.totalincome;
  const incomecollect2 = Math.round(incomecollect);
  counter = sd.counter + incomecollect2;
  counter = Math.round(counter);
  document.getElementById('clicks').innerText = counter;
  document.getElementById('incomecollect2').innerText = incomecollect2;
  document.getElementById('secsSinceLastVisit3').innerText = secsSinceLastVisit3;
  document.getElementById('clickincome').innerText = clickincome;
  document.getElementById('totalincome').innerText = totalincome;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('devteamCost').innerText = devteamCost;
  document.getElementById('devteams').innerText = devteams;
  document.getElementById('devteamincome').innerText = devteamincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
  document.getElementById('clicks').innerText = counter;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('devteamCost').innerText = devteamCost;
  document.getElementById('devteams').innerText = devteams;
  document.getElementById('devteamincome').innerText = devteamincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
  loadelements();
}

function pageload() {
  load();
}

document.getElementById('reset').onclick = () => {
  counter = 0;
  coders = 0;
  coderCost = coderStartCost;
  coderincome = 0;
  robots = 0;
  robotCost = robotStartCost;
  robotincome = 0;
  gamedevs = 0;
  gamedevCost = gamedevStartCost;
  gamedevincome = 0;
  hackers = 0;
  hackerCost = hackerStartCost;
  hackerincome = 0;
  devteams = 0;
  devteamCost = devteamStartCost;
  devteamincome = 0;
  gamedistribs = 0;
  gamedistribCost = gamedistribStartCost;
  gamedistribincome = 0;
  prestigecost = 1000000;
  prestigelevel = 1;
  clickincome = 1;
  document.getElementById('clicks').innerText = counter;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('devteamCost').innerText = devteamCost;
  document.getElementById('devteams').innerText = devteams;
  document.getElementById('devteamincome').innerText = devteamincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
  store.remove('save-game')
  alert('Reset!')
}

document.getElementById('gotolinks1').onclick = () => {
  window.location.replace("/linksandabout.html");
}

document.getElementById('gotolinks2').onclick = () => {
  window.location.replace("/linksandabout.html");
}

document.getElementById('gotolinks3').onclick = () => {
  window.location.replace("/linksandabout.html");
}

document.getElementById('gotodevlog1').onclick = () => {
  window.location.replace("/devlog.html");
}

document.getElementById('gotodevlog2').onclick = () => {
  window.location.replace("/devlog.html");
}

document.getElementById('gotodevlog3').onclick = () => {
  window.location.replace("/devlog.html");
}

} catch (error) {
  console.error(error)
}
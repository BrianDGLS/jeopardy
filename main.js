const $playersTable = document.querySelector(".players");

const players = [...$playersTable.querySelectorAll("th")].map($th => {
  return $th.innerText;
});

const state = players.reduce((acc, key) => {
  acc[key] = 0;
  return acc;
}, {});

console.log(players, state);
const $questions = document.querySelector(".questions");
const $tds = document.querySelectorAll("td");
const $questionText = document.querySelector(".question-text");
const $answerText = document.querySelector(".answer-text");
const $done = document.querySelector(".done");
const $checkbox = document.querySelector('[type="checkbox"]');
const $wrong = document.querySelector("#wrong-select");
const $correct = document.querySelector("#correct-select");
const $value = document.querySelector(".value");

$done.addEventListener("click", () => {
  [...document.querySelectorAll('#correct-select [type="checkbox"]')].map(
    $check => {
      const $value = document.querySelector(".value");
      if ($check.value in state && $check.checked) {
        const $money = document.querySelector(`[data-money="${$check.value}"]`);
        console.log($money, ~~$money.innerText.replace("$", ""));
        $money.innerText = `$${~~$money.innerText.replace("$", "") +
          ~~$value.innerText.replace("$", "")}`;
      }
    }
  );

  [...document.querySelectorAll('#wrong-select [type="checkbox"]')].map(
    $check => {
      const $value = document.querySelector(".value");
      if ($check.value in state && $check.checked) {
        const $money = document.querySelector(`[data-money="${$check.value}"]`);
        console.log($money, ~~$money.innerText.replace("$", ""));
        $money.innerText = `$${~~$money.innerText.replace("$", "") -
          ~~$value.innerText.replace("$", "")}`;
      }
    }
  );

  [...document.querySelectorAll('[type="checkbox"]')].map($check => {
    $check.checked = false;
  });
});

const questions = [
  {
    question:
      "Haptic feedback uses this human sense to relay information from your smartphone",
    answer: "Touch"
  },
  { question: `A threatened species:Ursus maritimus`, answer: `Polar Bear` },
  {
    question: `We lava this molten material from which igneous rock is formed`,
    answer: `Magma`
  },
  {
    question: `This brand is known for its 501 Original Fit jeans`,
    answer: `LEVI`
  },
  {
    question: `Oui! In the dictionary it follows both film & Pinot`,
    answer: `Noir`
  },

  {
    question: `Rusty metal is not the source of this disease but it's a good place for the clostridium bacteria that cause it to grow`,
    answer: `Tetanus`
  },
  {
    question: `Scooby-Doo's owner his real name is Norville Rogers & he really needs a haircut`,
    answer: `Shaggy`
  },
  {
    question: `This Mideast country has around 16% of all the world's oil reserves with an estimated 268 billion barrels`,
    answer: `Saudi Arabia`
  },
  {
    question: `Wearing camo pants? Camo is short for this mottled design`,
    answer: `Camoflage`
  },
  {
    question: `Once easing pain in the dental chair this drug was introduced in 1905`,
    answer: `Novocain`
  },

  {
    question: `It's the largest number in the Fibonacci sequence that's also a day in a month`,
    answer: `21`
  },
  {
    question: `Steven Williams wrestles under this name worth at least $6 million`,
    answer: `Stone Cold Steve Austin`
  },
  {
    question: `A rift valley is an elongated trough formed between dip-slip types of these fractures`,
    answer: `Fault Lines`
  },
  { question: `For women this word follows tank tube & halter`, answer: `Top` },
  { question: `The name given to Nordic mythology`, answer: `Norse` },

  {
    question: `The second law of thermodynamics says that this will of its own accord only move to a colder object`,
    answer: `Heat`
  },
  {
    question: `He was born Cassius Marcellus Clay Jr.`,
    answer: `Muhammed Ali`
  },
  {
    question: `It's an earthquake that follows a larger one & has its epicenter nearby`,
    answer: `Aftershock`
  },
  { question: `They can be crew knee or bobby`, answer: `Socks` },
  { question: `Last name of Chuck and Dean`, answer: `Norris` },

  {
    question: `The word rubber comes from the discovery that the stuff could be used to rub out marks made with this`,
    answer: `Pencil`
  },
  { question: `An artwork:La Gioconda`, answer: `The Mona Lisa` },
  {
    question: `Pot meet this deep circular hole scoured beneath a river or glacier`,
    answer: `A Kettle`
  },
  {
    question: `It's the fur pouch that a Scotsman wears on the front of his kilt`,
    answer: `A Sporon`
  },
  { question: `You won't pick up a penguin here`, answer: `North Pole` }
];

[...$tds].map(($td, index) => {
  $td.addEventListener("click", () => {
    $questionText.innerText = questions[index].question;
    $answerText.innerText = questions[index].answer;
    $value.innerText = $td.innerText;
    $td.classList.add("done");
  });
});

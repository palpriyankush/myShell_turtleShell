let currDir = ["~"];
let directories = [];
let promptText = "priyankushpal@Priyankushs-MacBook-Pro " + currDir + " %";

const arrayPush = function (initial) {
  return initial.push([]);
};

const doEcho = function (args) {
  return args.join(" ");
};

const doChngDir = function (args) {
  if (args[0] === "..") {
    currDir.pop();
    promptText = "priyankushpal@Priyankushs-MacBook-Pro " + currDir.join(" ") + " %";
    return;
  }

  if (args[0] === ".") {
    return;
  }

  currDir.push(args[0]);
  promptText = "priyankushpal@Priyankushs-MacBook-Pro " + currDir.join("/") + " %";
  return;
};

const isThePathSame = function (directory) {
  for (let i = 0; i < directory.length - 1; i++) {
    if (directory[i] !== currDir[i]) {
      return false;
    }
  }
  return true;
};

const showList = function (args) {
  for (const directory of directories) {
    if (isThePathSame(directory)) {
      console.log(directory.at(-1));
    }
  }
};
const createDir = function (args) {
  directories.push(...currDir, args);
};

const showPresentWorkingDir = function () {
  return currDir.join("/");
};

const followInstruction = function (instruction) {
  let [command, ...args] = instruction.split(" ");

  switch (command) {
    case ("echo"): return doEcho(args);
    case ("cd"): return doChngDir(args);
    case ("pwd"): return showPresentWorkingDir();
    case ("mkdir"): return createDir(args);
    case ("ls"): return showList(args);
    case ("mkdir"): return createDir(args);
  }
};

while (true) {
  const instruction = prompt(promptText);
  const output = followInstruction(instruction);

  if (output !== undefined) {
    console.log(output);
  }
}
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'hacker', 'coder'];
let extensions = ['.com', '.net', '.us', '.io', '.es', '.er'];
let domains = [];


for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        domains.push(`${p}${a}${n}${ext}`);
      }

      for (let ext of extensions) {
        let hackableNoun = n.endsWith(ext.slice(1)) ? n.slice(0, -ext.length + 1) : null;
        if (hackableNoun) {
          domains.push(`${p}${a}${hackableNoun}${ext}`);
        }
      }
    }
  }
}

domains.forEach(domain => console.log(domain));

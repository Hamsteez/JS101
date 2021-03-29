function madlibs(template) {
  const REPLACERS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };
  function replacer(code) {
    let keys = code.replace(/[^a-z]/g, '');
    let num = Math.floor(Math.random() * REPLACERS[keys].length);
    return REPLACERS[keys][num];
  }
  let sent = template.replace(/%{[a-z]+}/g, replacer);
  console.log(sent);
}

let template1 = 'The %{adjective} brown %{noun} %{adverb} %{verb} the %{adjective} yellow %{noun}, who %{adverb} %{verb} his %{noun} and looks around.';
let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

madlibs(template1);
madlibs(template2);
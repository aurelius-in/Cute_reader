/* Phonics sets with cute pics.
   You can replace image URLs with your own files (e.g., "assets/duckling.jpg").
   For guaranteed HTTPS-only demo images, we use placekitten (kittens),
   placedog (puppies) and emoji for frogs/pickles if you don’t add your own.
*/

window.CUTE_PHONICS_DATA = {
  stickers: ["🐸","🥒","🐥","🐶","🐱","🦊","🐼","🦄","🐧","🦋","🌈","⭐"],
  levels: [
    {
      id: "cvc-short-a",
      label: "CVC — short a (a)",
      items: [
        { word:"cat",  phonemes:["/k/","/a/","/t/"], img:"https://placekitten.com/400/400", caption:"cat (kitten)" },
        { word:"bat",  phonemes:["/b/","/a/","/t/"], img:"assets/baby-bat.jpg", caption:"bat (baby bat)" },
        { word:"bag",  phonemes:["/b/","/a/","/g/"], img:"assets/cute-bag.jpg", caption:"bag" },
        { word:"pan",  phonemes:["/p/","/a/","/n/"], img:"assets/pan.jpg", caption:"pan" },
        { word:"rat",  phonemes:["/r/","/a/","/t/"], img:"assets/baby-rat.jpg", caption:"rat (pup)" },
      ]
    },
    {
      id: "cvc-short-e",
      label: "CVC — short e (e)",
      items: [
        { word:"hen", phonemes:["/h/","/e/","/n/"], img:"assets/duckling.jpg", caption:"hen/duckling" },
        { word:"web", phonemes:["/w/","/e/","/b/"], img:"assets/web.jpg", caption:"web" },
        { word:"bed", phonemes:["/b/","/e/","/d/"], img:"assets/bed.jpg", caption:"bed" },
      ]
    },
    {
      id: "cvc-short-i",
      label: "CVC — short i (i)",
      items: [
        { word:"pig", phonemes:["/p/","/i/","/g/"], img:"assets/piglet.jpg", caption:"piglet" },
        { word:"hip", phonemes:["/h/","/i/","/p/"], img:"assets/hippo-calf.jpg", caption:"hip(hippo calf pic)" },
        { word:"fin", phonemes:["/f/","/i/","/n/"], img:"assets/fin.jpg", caption:"fin" },
      ]
    },
    {
      id: "cvc-short-o",
      label: "CVC — short o (o)",
      items: [
        { word:"dog", phonemes:["/d/","/o/","/g/"], img:"https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_1030.jpg", caption:"dog (puppy)" },
        { word:"frog",phonemes:["/f/","/r/","/o/","/g/"], img:"assets/froglet.jpg", caption:"froglet" },
        { word:"pot", phonemes:["/p/","/o/","/t/"], img:"assets/pot.jpg", caption:"pot" },
      ]
    },
    {
      id: "cvc-short-u",
      label: "CVC — short u (u)",
      items: [
        { word:"cub", phonemes:["/k/","/ʌ/","/b/"], img:"assets/bear-cub.jpg", caption:"bear cub" },
        { word:"bug", phonemes:["/b/","/ʌ/","/g/"], img:"assets/bug.jpg", caption:"bug" },
        { word:"pup", phonemes:["/p/","/ʌ/","/p/"], img:"https://images.dog.ceo/breeds/terrier-australian/n02096294_5214.jpg", caption:"pup" },
      ]
    },
    {
      id: "digraphs",
      label: "Digraphs (sh, ch, th)",
      items: [
        { word:"ship", phonemes:["/sh/","/i/","/p/"], img:"assets/ship-toy.jpg", caption:"toy ship" },
        { word:"chick", phonemes:["/ch/","/i/","/ck/"], img:"assets/chick.jpg", caption:"baby chick" },
        { word:"bath", phonemes:["/b/","/a/","/th/"], img:"assets/bath.jpg", caption:"bath" },
      ]
    },
    {
      id: "just-for-fun",
      label: "Just for fun (animals & pickles!)",
      items: [
        { word:"kitten", phonemes:["/k/","/i/","/t/","/t/","/e/","/n/"], img:"https://placekitten.com/420/420", caption:"kitten" },
        { word:"puppy", phonemes:["/p/","/u/","/p/","/ee/"], img:"https://images.dog.ceo/breeds/labrador/n02099712_3852.jpg", caption:"puppy" },
        { word:"frog", phonemes:["/f/","/r/","/o/","/g/"], img:"assets/froglet.jpg", caption:"frog" },
        { word:"pickle", phonemes:["/p/","/i/","/k/","/əl/"], img:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='%23e7ffd9'/><g transform='translate(300 300)'><ellipse rx='160' ry='270' fill='%2395cf4f' stroke='%235b8f2b' stroke-width='16'/><circle cx='-70' cy='-90' r='9' fill='%235b8f2b'/><circle cx='40' cy='-50' r='9' fill='%235b8f2b'/><circle cx='-30' cy='30' r='9' fill='%235b8f2b'/><circle cx='60' cy='120' r='9' fill='%235b8f2b'/></g></svg>", caption:"pickle!" },
      ]
    }
  ]
};

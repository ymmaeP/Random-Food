const options = ["🍛 COCO", "🥘 Pepper Lunch", "8️⃣🍜 Hachiban", "🥩 Meat", "🍜 A Ramen", "🍌 Smoothie", "🍣 Sushiro", "🍲 MK", "🔥🐉 Bar B Gon", "🥗 Sizzler", "🥩🍚 Yakinuki Like", "🍱 Miyakazi", "🗻 Fuji", "🍵 Zen", "🥢 Ootoya", "🍖 ร้านข้างล่าง", "🛶 ทองสมิทธ์", "🍗 Chicken", "🥚 Egg", "🍝 Spaghetti", "🍅🍚 America fried rice"];

function Random(){
    const idx = Math.floor(Math.random() * options.length);
    const item = options[idx];

    document.getElementById("resultDisplay").innerText = "You got: " + item;
}
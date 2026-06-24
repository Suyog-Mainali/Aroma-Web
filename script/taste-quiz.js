const questions = [
    { text: "What's your mood right now?", options: [
        { label: "Cozy & comforting",       tags: { comfort: 3 } },
        { label: "Bold & spicy",             tags: { spicy: 3 } },
        { label: "Light & fresh",            tags: { light: 3 } },
        { label: "Festive & celebratory",    tags: { festive: 3 } }
    ]},
    { text: "Pick a texture you're craving", options: [
        { label: "Soft & steamed",           tags: { soft: 3 } },
        { label: "Crispy & fried",           tags: { crispy: 3 } },
        { label: "Tangy & fermented",        tags: { tangy: 3 } },
        { label: "Smoky & grilled",          tags: { smoky: 3 } }
    ]},
    { text: "What flavour pulls you in?", options: [
        { label: "Sweet & milky",            tags: { sweet: 3 } },
        { label: "Savoury & umami",          tags: { savory: 3 } },
        { label: "Rich & indulgent",         tags: { rich: 3 } },
        { label: "Spicy & savoury together", tags: { spicy: 2, savory: 2 } }
    ]},
    { text: "Pick your eating occasion", options: [
        { label: "Quick solo lunch",         tags: { light: 3 } },
        { label: "Festival or special day",  tags: { festive: 3 } },
        { label: "Cold rainy evening",       tags: { comfort: 3 } },
        { label: "Sharing with friends",     tags: { crispy: 3 } }
    ]},
    { text: "What would you drink with it?", options: [
        { label: "Hot masala tea",           tags: { comfort: 3 } },
        { label: "Fermented brew or Tongba", tags: { tangy: 3 } },
        { label: "Refreshing fruit juice",   tags: { light: 2, festive: 2 } },
        { label: "Smoky herbal drink",       tags: { smoky: 3 } }
    ]}
];
 
const dishes = [
    { name: "Dal Bhat",              img: "https://thumbs.dreamstime.com/b/delicious-nepali-dal-bhat-set-lentil-soup-nepal-food-photography-traditional-cuisine-close-up-cultural-experience-explore-361585709.jpg?w=600&q=80",                                                                                                                                                         desc: "The heart of Nepali cuisine — lentil soup, steamed rice, seasonal vegetables, and achaar.",          tags: { comfort: 1, savory: 1 } },
    { name: "Momo",                  img: "https://thetasteofsikkim.github.io/img/food_menu/Dumplings/Jhol%20Momo.jpg",                                                                                                                                                                                                                                                                       desc: "Steamed dumplings stuffed with spiced minced meat or vegetables, served with tomato chutney.",       tags: { soft: 1, comfort: 1 } },
    { name: "Thukpa",                img: "https://tse1.mm.bing.net/th/id/OIP.RmvYwpkyRri7rtipwg_czgHaFj?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",                                                                                                                                                                                                                                  desc: "Hearty Tibetan-Nepali noodle soup loaded with vegetables or meat in a rich, spiced broth.",         tags: { light: 1, savory: 1 } },
    { name: "Sel Roti",              img: "https://washburnreview.org/wp-content/uploads/2023/03/sel-roti.jpeg",                                                                                                                                                                                                                                                                              desc: "Traditional Nepali rice-flour ring bread, crispy outside and soft inside, a festival favourite.",   tags: { sweet: 1, crispy: 1 } },
    { name: "Gundruk Ko Achar",      img: "https://cdn.stunningnepal.com/wp-content/uploads/2019/11/Soybean-and-Gundruk-Sadheko.jpg",                                                                                                                                                                                                                                                        desc: "Fermented leafy greens tossed with mustard oil, chillies, and spices — a Nepali staple side.",      tags: { tangy: 1, light: 1 } },
    { name: "Dhido",                 img: "https://vanshaghar.s3.me-central-1.amazonaws.com/payload/dhido.jpg",                                                                                                                                                                                                                                                                               desc: "Traditional buckwheat or millet porridge, a rustic Nepali staple served with gundruk soup.",        tags: { soft: 1, tangy: 1 } },
    { name: "Choila",                img: "https://boondockingrecipes.com/wp-content/uploads/2025/03/21.-Nepal-Newari-Buff-Choila-Recipe-2.jpg",                                                                                                                                                                                                                                              desc: "Spicy grilled buffalo meat marinated with mustard oil, garlic, ginger, and Newari spices.",         tags: { spicy: 1, smoky: 1 } },
    { name: "Wo (Bara)",             img: "https://www.muncha.com/img/l93091.jpg",                                                                                                                                                                                                                                                                                                           desc: "Newari lentil pancake, crispy and savoury, often topped with egg or minced meat.",                  tags: { crispy: 1, savory: 1 } },
    { name: "Yomari",                img: "https://tse3.mm.bing.net/th/id/OIP.g5V6KxJnzkp25zBzAlT8xwHaEK?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",                                                                                                                                                                                                                                 desc: "Sweet steamed rice-flour dumpling filled with chaku (molasses and sesame), a Newar delicacy.",      tags: { sweet: 1, soft: 1 } },
    { name: "Kwati",                 img: "https://s.greattibettour.com/photos/2021/07/kwati-12-46570.jpg",                                                                                                                                                                                                                                                                                  desc: "A wholesome nine-bean soup slow-cooked with spices, eaten during Janai Purnima.",                   tags: { light: 1, comfort: 1 } },
    { name: "Aloo Tama",             img: "https://tse4.mm.bing.net/th/id/OIP.Q4uwT-OGUhYlswAOiFOZRwHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",                                                                                                                                                                                                                                 desc: "Tangy bamboo shoot and potato curry cooked with black-eyed beans — a classic Newar comfort dish.",  tags: { tangy: 1, comfort: 1 } },
    { name: "Sukuti Sadeko",         img: "https://junifoods.com/wp-content/uploads/2023/08/Sukuti-Sadheko.jpg",                                                                                                                                                                                                                                                                             desc: "Dried and spiced smoked meat salad tossed with sesame, chillies, and mustard oil.",                 tags: { smoky: 1, rich: 1 } },
    { name: "Samay Baji",            img: "https://i.pinimg.com/736x/e2/bb/e4/e2bbe404b1f42d76a0d347d5af81de99.jpg",                                                                                                                                                                                                                                                                        desc: "Traditional Newari ceremonial platter — beaten rice, bara, choila, eggs and pickles.",              tags: { festive: 1, savory: 1 } },
    { name: "Tarkari Bhaat",         img: "https://thumbs.dreamstime.com/b/delicious-nepali-food-dal-bhaat-tarkari-plate-rice-vegetables-meat-salad-delicious-nepali-food-dal-bhaat-tarkari-plate-279649109.jpg",                                                                                                                                                                             desc: "Mixed vegetable curry served over fluffy steamed basmati rice with homemade pickle.",               tags: { light: 1, soft: 1 } },
    { name: "Fried Momo",            img: "https://billusfood.com/wp-content/uploads/2025/02/fried-momos.jpeg",                                                                                                                                                                                                                                                                              desc: "Golden crispy fried dumplings stuffed with spiced chicken, served with dipping sauce.",             tags: { crispy: 1, spicy: 1 } },
    { name: "Chatamari",             img: "https://tse1.mm.bing.net/th/id/OIP.XDc48lrLYFyBxGfBF5X4AQHaEK?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",                                                                                                                                                                                                                                 desc: "The Nepali pizza — thin rice-flour crepe topped with minced meat, egg, and spices.",                tags: { festive: 1, crispy: 1 } },
    { name: "Masala Chicken",        img: "https://i.pinimg.com/originals/74/23/c0/7423c03fa94719826e270ef5e291e880.jpg",                                                                                                                                                                                                                                                                    desc: "Tender chicken slow-cooked in aromatic Nepali spices and tomato-onion gravy.",                      tags: { spicy: 1, savory: 1 } },
    { name: "Vegetable Pulao",       img: "https://desertfoodfeed.com/assets/uploads/wp/vegetable-pulao-hero.webp",                                                                                                                                                                                                                                                                          desc: "Fragrant saffron and whole-spice rice cooked with seasonal vegetables and ghee.",                   tags: { festive: 1, light: 1 } },
    { name: "Naan with Dal Makhani", img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/seabass-coconut-curry-paratha-1613479134.jpg?crop=1xw:1xh;center,top&resize=640:*",                                                                                                                                                                                                  desc: "Soft tandoor-baked naan bread paired with rich creamy dal makhani curry.",                          tags: { rich: 1, comfort: 1 } },
    { name: "Kheer",                 img: "https://sodelicious.recipes/wp-content/uploads/2018/07/21-11-2017-R3-NS-chefs-var2-Almond-and-Pistachio-Rice-Pudding-e1533034412964-700x524.jpg",                                                                                                                                                                                                 desc: "Creamy rice pudding simmered in full-fat milk with cardamom, saffron, and pistachios.",             tags: { sweet: 1, festive: 1 } }
];
 
let current = 0;
const userScores = {};
const progressDots = document.querySelectorAll('.quiz-progress-dot');
const quizQuestionsEl = document.getElementById('quizQuestions');
const quizResultEl = document.getElementById('quizResult');
 
function loadQuestion() {
    const q = questions[current];
    document.getElementById('quizQuestionText').textContent = q.text;
    const container = document.getElementById('quizOptions');
    container.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => pick(opt.tags));
        container.appendChild(btn);
    });
    progressDots.forEach((dot, i) => dot.classList.toggle('done', i < current));
}
 
function pick(tags) {
    for (const k in tags) userScores[k] = (userScores[k] || 0) + tags[k];
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}
 
function mag(v) { let s = 0; for (const k in v) s += v[k] * v[k]; return Math.sqrt(s); }
function cosine(a, b) {
    let dot = 0;
    for (const k in a) if (b[k]) dot += a[k] * b[k];
    const m = mag(a) * mag(b);
    return m ? dot / m : 0;
}
 
function showResult() {
    progressDots.forEach(dot => dot.classList.add('done'));
    let best = dishes[0], bestS = -Infinity;
    dishes.forEach(d => {
        const s = cosine(userScores, d.tags);
        if (s > bestS) { bestS = s; best = d; }
    });
    document.getElementById('resultDishName').textContent = best.name;
    document.getElementById('resultDishImg').src = best.img;
    document.getElementById('resultDishImg').alt = best.name;
    document.getElementById('resultDishDesc').textContent = best.desc;
    quizQuestionsEl.classList.add('hidden');
    quizResultEl.classList.add('show');
}
 
document.getElementById('retakeBtn').addEventListener('click', () => {
    current = 0;
    for (const k in userScores) delete userScores[k];
    quizResultEl.classList.remove('show');
    quizQuestionsEl.classList.remove('hidden');
    loadQuestion();
});
 
loadQuestion();
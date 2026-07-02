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
    { name: "Dal Bhat",              img: "../assets/images/dal-bhat.jpg",                                                                                                                                                         desc: "The heart of Nepali cuisine — lentil soup, steamed rice, seasonal vegetables, and achaar.",          tags: { comfort: 1, savory: 1 } },
    { name: "Momo",                  img: "../assets/images/momo.jpg",                                                                                                                                                                                                                                                                       desc: "Steamed dumplings stuffed with spiced minced meat or vegetables, served with tomato chutney.",       tags: { soft: 1, comfort: 1 } },
    { name: "Thukpa",                img: "../assets/images/thukpa.jpg",                                                                                                                                                                                                                                  desc: "Hearty Tibetan-Nepali noodle soup loaded with vegetables or meat in a rich, spiced broth.",         tags: { light: 1, savory: 1 } },
    { name: "Sel Roti",              img: "../assets/images/sel-roti.jpg",                                                                                                                                                                                                                                                                              desc: "Traditional Nepali rice-flour ring bread, crispy outside and soft inside, a festival favourite.",   tags: { sweet: 1, crispy: 1 } },
    { name: "Gundruk Ko Achar",      img: "../assets/images/Gundruk.jpg",                                                                                                                                                                                                                                                        desc: "Fermented leafy greens tossed with mustard oil, chillies, and spices — a Nepali staple side.",      tags: { tangy: 1, light: 1 } },
    { name: "Dhido",                 img: "../assets/images/dhido.jpg",                                                                                                                                                                                                                                                                               desc: "Traditional buckwheat or millet porridge, a rustic Nepali staple served with gundruk soup.",        tags: { soft: 1, tangy: 1 } },
    { name: "Choila",                img: "../assets/images/choila.jpg",                                                                                                                                                                                                                                              desc: "Spicy grilled buffalo meat marinated with mustard oil, garlic, ginger, and Newari spices.",         tags: { spicy: 1, smoky: 1 } },
    { name: "Wo (Bara)",             img: "../assets/images/bara.jpg",                                                                                                                                                                                                                                                                                                           desc: "Newari lentil pancake, crispy and savoury, often topped with egg or minced meat.",                  tags: { crispy: 1, savory: 1 } },
    { name: "Yomari",                img: "../assets/images/yomari.jpg",                                                                                                                                                                                                                                 desc: "Sweet steamed rice-flour dumpling filled with chaku (molasses and sesame), a Newar delicacy.",      tags: { sweet: 1, soft: 1 } },
    { name: "Kwati",                 img: "../assets/images/kwati.jpg",                                                                                                                                                                                                                                                                                  desc: "A wholesome nine-bean soup slow-cooked with spices, eaten during Janai Purnima.",                   tags: { light: 1, comfort: 1 } },
    { name: "Aloo Tama",             img: "../assets/images/aloo_tama.jpg",                                                                                                                                                                                                                                 desc: "Tangy bamboo shoot and potato curry cooked with black-eyed beans — a classic Newar comfort dish.",  tags: { tangy: 1, comfort: 1 } },
    { name: "Sukuti Sadeko",         img: "../assets/images/sukuti.jpg",                                                                                                                                                                                                                                                                             desc: "Dried and spiced smoked meat salad tossed with sesame, chillies, and mustard oil.",                 tags: { smoky: 1, rich: 1 } },
    { name: "Samay Baji",            img: "../assets/images/samay_baji.jpg",                                                                                                                                                                                                                                                                        desc: "Traditional Newari ceremonial platter — beaten rice, bara, choila, eggs and pickles.",              tags: { festive: 1, savory: 1 } },
    { name: "Tarkari Bhaat",         img: "../assets/images/dal_bhat.jpg",                                                                                                                                                                             desc: "Mixed vegetable curry served over fluffy steamed basmati rice with homemade pickle.",               tags: { light: 1, soft: 1 } },
    { name: "Fried Momo",            img: "../assets/images/fried chicken momo.jpg",                                                                                                                                                                                                                                                                              desc: "Golden crispy fried dumplings stuffed with spiced chicken, served with dipping sauce.",             tags: { crispy: 1, spicy: 1 } },
    { name: "Chatamari",             img: "../assets/images/chatamari.jpg",                                                                                                                                                                                                                                 desc: "The Nepali pizza — thin rice-flour crepe topped with minced meat, egg, and spices.",                tags: { festive: 1, crispy: 1 } },
    { name: "Masala Chicken",        img: "../assets/images/masala_chicken.jpg",                                                                                                                                                                                                                                                                    desc: "Tender chicken slow-cooked in aromatic Nepali spices and tomato-onion gravy.",                      tags: { spicy: 1, savory: 1 } },
    { name: "Vegetable Pulao",       img: "..assets/images/pulao.jpg",                                                                                                                                                                                                                                                                          desc: "Fragrant saffron and whole-spice rice cooked with seasonal vegetables and ghee.",                   tags: { festive: 1, light: 1 } },
    { name: "Naan with Dal Makhani", img: "..assets/images/naan_curry.jpg",                                                                                                                                                                                                  desc: "Soft tandoor-baked naan bread paired with rich creamy dal makhani curry.",                          tags: { rich: 1, comfort: 1 } },
    { name: "Kheer",                 img: "..assets/images/kheer.jpg",                                                                                                                                                                                                 desc: "Creamy rice pudding simmered in full-fat milk with cardamom, saffron, and pistachios.",             tags: { sweet: 1, festive: 1 } }
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
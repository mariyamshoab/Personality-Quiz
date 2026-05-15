// ===== QUESTIONS =====
const questions = [
    { q: "You regularly make lists rather than relying on memory.", id: "q1" },
    { q: "You tend to be skeptical of new information until proven.", id: "q2" },
    { q: "You find long periods of time alone boring.", id: "q3" },
    { q: "You accept things exactly as they are without questioning.", id: "q4" },
    { q: "You keep your living and work spaces very clean.", id: "q5" },
    { q: "You strive to have a mechanical and logical mind.", id: "q6" },
    { q: "You consider yourself a high-energy person.", id: "q7" },
    { q: "You prefer multiple-choice tests over essay answers.", id: "q8" },
    { q: "You feel your life is more chaotic than organized.", id: "q9" },
    { q: "You consider yourself to be thick-skinned.", id: "q10" },
    { q: "You work much better when you are in a group.", id: "q11" },
    { q: "You are primarily focused on the present moment.", id: "q12" },
    { q: "You tend to plan things far in advance.", id: "q13" },
    { q: "You want people's love more than their respect.", id: "q14" },
    { q: "You find large parties and social events fire you up.", id: "q15" },
    { q: "You prefer to fit in rather than stand out.", id: "q16" },
    { q: "You like to keep your options open as long as possible.", id: "q17" },
    { q: "You want to be good at fixing things (objects).", id: "q18" },
    { q: "You tend to talk more than you listen.", id: "q19" },
    { q: "You describe what happened rather than what it meant.", id: "q20" },
    { q: "You get your work done right away to avoid stress.", id: "q21" },
    { q: "You prefer to follow your heart over your head.", id: "q22" },
    { q: "You'd rather go out on the town than stay at home.", id: "q23" },
    { q: "You want to know the details before the big picture.", id: "q24" },
    { q: "You prefer to improvise rather than prepare.", id: "q25" },
    { q: "You base your morality on justice and fairness.", id: "q26" },
    { q: "You find it natural to express yourself loudly when excited.", id: "q27" },
    { q: "You consider yourself a theoretical thinker.", id: "q28" },
    { q: "You play just as hard as you work.", id: "q29" },
    { q: "You value emotions as much as logic.", id: "q30" },
    { q: "You enjoy performing in front of other people.", id: "q31" },
    { q: "You are more interested in 'why' than 'who, what, or when'.", id: "q32" }
];

// ===== NAV DROPDOWN =====
const categories = {
    "Analysts": ["INTJ (Architect)", "INTP (Logician)", "ENTJ (Commander)", "ENTP (Debater)"],
    "Diplomats": ["INFJ (Advocate)", "INFP (Mediator)", "ENFJ (Protagonist)", "ENFP (Campaigner)"],
    "Sentinels": ["ISTJ (Logistician)", "ISFJ (Defender)", "ESTJ (Executive)", "ESFJ (Consul)"],
    "Explorers": ["ISTP (Virtuoso)", "ISFP (Adventurer)", "ESTP (Entrepreneur)", "ESFP (Entertainer)"]
};

const menu = document.getElementById('types-menu');
Object.keys(categories).forEach(cat => {
    let html = `<div class="type-group"><h5>${cat}</h5>`;
    categories[cat].forEach(t => { html += `<a href="#" class="type-link">${t}</a>`; });
    html += `</div>`;
    menu.innerHTML += html;
});

// ===== PERSONALITY DATA =====
const personalityData = {
    ESTJ: {
        title: "The Executive",
        tagline: "Organized, decisive, and built to lead — you make things happen.",
        description: `ESTJs are natural administrators who bring order and structure wherever they go. You possess an extraordinary ability to see what needs to be done and then actually do it — efficiently, thoroughly, and without excuses. You believe deeply in tradition, responsibility, and the value of hard work, and you're not afraid to set high standards for yourself and those around you. Your directness is a gift; you say what you mean, and people always know where they stand with you. In professional settings, you're the person everyone turns to when execution matters. You thrive in environments with clear hierarchies and well-defined goals, and you have a gift for rallying teams around a shared mission.`,
        strengths: ["Strategic Leadership", "Reliability & Consistency", "Decisive Action", "Strong Work Ethic", "Clear Communication", "Goal Orientation"],
        careers: [
            { icon: "⚖️", name: "Lawyer" }, { icon: "📊", name: "Project Manager" }, { icon: "💊", name: "Pharmacist" },
            { icon: "🏛️", name: "Judge" }, { icon: "📋", name: "Insurance Sales Agent" }
        ],
        inspiration: { name: "Asma Jahangir", role: "Human Rights Lawyer & Activist", text: "Like you, Asma Jahangir was an unstoppable force of execution, order, and principled leadership. She organized movements, led institutions, and held power accountable with the same unwavering conviction that defines every true ESTJ." },
        image: "assets/Asma Jahangir ESTJ.png",
        dimensions: { E: true, S: true, T: true, J: true }
    },
    ISTJ: {
        title: "The Logistician",
        tagline: "Dependable, detail-driven, and quietly extraordinary.",
        description: `ISTJs are the backbone of every system they inhabit. Calm, methodical, and deeply reliable, you approach everything in your life with a quiet seriousness that others profoundly respect. You don't make promises lightly — and when you do, you deliver. Your attention to detail is unparalleled; you notice things others overlook, remember what others forget, and maintain standards that others let slide. Though you may not seek the spotlight, your presence fundamentally strengthens every team, organization, or relationship you're part of. People may underestimate your depth at first, but once they see the precision and integrity you bring, you become irreplaceable.`,
        strengths: ["Meticulous Attention to Detail", "Deep Reliability", "Integrity & Honesty", "Thorough Planning", "Calm Under Pressure", "Financial Acuity"],
        careers: [
            { icon: "📑", name: "Auditor" }, { icon: "💰", name: "Accountant" }, { icon: "💻", name: "Web Development Engineer" },
            { icon: "🏛️", name: "Government Employee" }, { icon: "📈", name: "Chief Financial Officer" }
        ],
        inspiration: { name: "Dr. Shamshad Akhtar", role: "Economist & UN Executive Secretary", text: "Dr. Shamshad Akhtar embodies ISTJ precision and integrity — a woman who built entire economies through rigorous analysis, disciplined systems thinking, and a quiet but unshakeable commitment to doing things right." },
        image: "assets/Dr-Shamshad-Akhtar-ISTJ.png",
        dimensions: { I: true, S: true, T: true, J: true }
    },
    ESFJ: {
        title: "The Consul",
        tagline: "Warm-hearted, community-driven, and deeply connected.",
        description: `ESFJs are the heart of every community they belong to. You have a rare and precious gift: the ability to genuinely make people feel seen, valued, and cared for. You notice when someone is struggling before they've said a word. You remember birthdays, follow up on worries, and create the warm, welcoming atmospheres that everyone craves. Your social intelligence is extraordinary — you read the room instinctively and naturally bring harmony to groups that might otherwise fall apart. You believe in service, in showing up, in building networks of genuine human warmth. Your loyalty runs deep, and the people in your life know, without question, that you are always in their corner.`,
        strengths: ["Genuine Empathy", "Social Harmony", "Community Building", "Loyalty & Devotion", "Practical Care", "Strong Networks"],
        careers: [
            { icon: "🤝", name: "Sales Representative" }, { icon: "🏥", name: "Healthcare Worker" }, { icon: "💛", name: "Social Worker" },
            { icon: "📣", name: "PR Account Executive" }, { icon: "🏦", name: "Loan Officer" }
        ],
        inspiration: { name: "Saba Gul", role: "Social Entrepreneur & Founder, Popinjay", text: "Saba Gul built an entire enterprise around community, craft, and human dignity — channeling the ESFJ spirit of service into a venture that genuinely changed lives. She shows that warmth and business acumen are not opposites." },
        image: "assets/saba-gul ESFJ.png",
        dimensions: { E: true, S: true, F: true, J: true }
    },
    ISFJ: {
        title: "The Defender",
        tagline: "Quietly powerful, deeply caring, and steadfastly present.",
        description: `ISFJs are gentle giants — often underestimated until people realize how much you hold together. Your care is not performative; it runs deep and quiet, expressed through actions rather than grand declarations. You remember every detail about the people you love, and you show up — reliably, completely, without needing recognition. Your sense of duty is profound; when something matters to you, you give it everything. You have a unique gift for creating safe, stable environments where others can grow. Though you may be humble about your contributions, people who know you understand that you are often the most essential person in the room.`,
        strengths: ["Devoted Service", "Memory for Details", "Creating Safety & Comfort", "Consistent Follow-Through", "Patience & Kindness", "Practical Support"],
        careers: [
            { icon: "🦷", name: "Dentist" }, { icon: "📚", name: "Elementary School Teacher" }, { icon: "📖", name: "Librarian" },
            { icon: "🏪", name: "Franchise Owner" }, { icon: "🎧", name: "Customer Service Representative" }
        ],
        inspiration: { name: "Namira Salim", role: "Space Explorer & Humanitarian", text: "Namira Salim's quiet determination took her to the edge of space — but what defines her most is her dedication to service, to representing Pakistan, and to inspiring those who feel overlooked. A true ISFJ who showed up for humanity in the most extraordinary way." },
        image: "assets/Namira Salim-ISFJ.png",
        dimensions: { I: true, S: true, F: true, J: true }
    },
    ESTP: {
        title: "The Entrepreneur",
        tagline: "Bold, spontaneous, and magnetically in the moment.",
        description: `ESTPs are pure energy. You live most fully when you're in the thick of action — reading a room, making quick decisions, and thriving where others freeze. You have a keen eye for opportunity that most people simply miss; where others see risk, you see potential. Your charm and quick wit are legendary, and your ability to connect with virtually anyone makes you remarkable in social settings. You're not one for lengthy deliberation — you trust your instincts, and more often than not, your instincts are right. While others are still planning, you've already started. Life, for you, is not something to be observed — it's something to be fully, audaciously lived.`,
        strengths: ["Fearless Action", "Sharp Situational Awareness", "Natural Charisma", "Quick Problem-Solving", "Entrepreneurial Mindset", "High Adaptability"],
        careers: [
            { icon: "🔍", name: "Detective" }, { icon: "🏦", name: "Banker" }, { icon: "📈", name: "Investor" },
            { icon: "🎬", name: "Entertainment Agent" }, { icon: "🏅", name: "Sports Coach" }
        ],
        inspiration: { name: "Sana Mir", role: "Cricket Captain & Sports Leader", text: "Sana Mir captained Pakistan's women cricket team with the bold decisiveness and in-the-moment brilliance that defines ESTPs. She didn't wait for permission to lead — she simply led, inspiring a generation of athletes along the way." },
        image: "assets/Sana_Mir estp.png",
        dimensions: { E: true, S: true, T: true, P: true }
    },
    ISTP: {
        title: "The Virtuoso",
        tagline: "Quietly brilliant, adaptable, and astonishingly capable.",
        description: `ISTPs are masters of the physical and mechanical world — cool, observant, and extraordinarily capable when things need to get done. You have a rare gift for understanding how systems work, whether that's an engine, a computer, or a complex situation unfolding in real time. You prefer to learn by doing, and you're most alive when you're solving a real problem with your hands and your mind. You don't talk about what you can do — you show it. People often underestimate you at first, mistaking your quiet nature for disengagement. But when a crisis hits or a complex problem demands solving, they quickly discover you're the most capable person in the room.`,
        strengths: ["Mechanical Mastery", "Calm Crisis Management", "Logical Analysis", "Hands-On Problem Solving", "Adaptability", "Independent Thinking"],
        careers: [
            { icon: "🏗️", name: "Civil Engineer" }, { icon: "📊", name: "Economist" }, { icon: "✈️", name: "Pilot" },
            { icon: "💻", name: "Data Communications Analyst" }, { icon: "🏥", name: "Emergency Room Physician" }
        ],
        inspiration: { name: "Ayesha Farooq", role: "Pakistan's First Female Fighter Pilot", text: "Ayesha Farooq is the definitive ISTP — she didn't philosophize about barriers; she simply broke them, one flight at a time. Her quiet mastery, precision, and bold independence in the cockpit embody everything that makes ISTPs extraordinary." },
        image: "assets/ayesha farooq-istp.png",
        dimensions: { I: true, S: true, T: true, P: true }
    },
    ESFP: {
        title: "The Entertainer",
        tagline: "Vibrant, spontaneous, and radically alive in every moment.",
        description: `ESFPs bring a joy and warmth to life that is simply contagious. You experience the world with your full senses — savoring beauty, connection, and experience in ways that many people long for but struggle to access. Your enthusiasm is genuine and magnetic; people are simply drawn to you, and you have an extraordinary ability to make others feel welcome, energized, and alive. You live fully in the present, and you have a talent for turning ordinary moments into memorable ones. While you may not be the biggest planner, you bring something planning can never manufacture: spontaneity, color, and an authentic human warmth that lights up every room you enter.`,
        strengths: ["Magnetic Warmth", "Spontaneous Joy", "People Connection", "Sensory Awareness", "Genuine Enthusiasm", "Adaptable & Free-Spirited"],
        careers: [
            { icon: "👶", name: "Child Welfare Counselor" }, { icon: "🩺", name: "Primary Care Physician" }, { icon: "🎭", name: "Actor" },
            { icon: "🛋️", name: "Interior Designer" }, { icon: "🌿", name: "Environmental Scientist" }
        ],
        inspiration: { name: "Sanam Saeed", role: "Actress & Cultural Icon", text: "Sanam Saeed's career is a masterclass in the ESFP spirit — generous, radiant, fully present in every performance. She brings an authentic human warmth to every role that no technique can fake, because for ESFPs, the performance simply is the person." },
        image: "assets/Sanam-Saeed ESFP.png",
        dimensions: { E: true, S: true, F: true, P: true }
    },
    ISFP: {
        title: "The Adventurer",
        tagline: "Creative, sensitive, and beautifully attuned to the world.",
        description: `ISFPs experience the world through beauty, sensation, and deep feeling — and they create things that make others feel something profound. You have an artist's soul, even if you've never thought of yourself that way. Your aesthetic instincts are sharp and natural; you notice what others miss and express yourself in ways that feel authentic rather than performed. You care deeply — about people, about values, about the way things look and feel and are. You may be quiet in large groups, but one-on-one you are warm, genuine, and intensely present. You don't impose your values on others; you simply live them, with a quiet dignity that earns deep admiration.`,
        strengths: ["Artistic Sensitivity", "Genuine Empathy", "Aesthetic Awareness", "Deep Personal Values", "Quiet Adaptability", "Present-Moment Richness"],
        careers: [
            { icon: "👗", name: "Fashion Designer" }, { icon: "🧘", name: "Physical Therapist" }, { icon: "💆", name: "Massage Therapist" },
            { icon: "🌳", name: "Landscape Architect" }, { icon: "🏪", name: "Storekeeper" }
        ],
        inspiration: { name: "Samina Baig", role: "First Pakistani Woman to Summit Everest", text: "Samina Baig didn't conquer Everest to prove a point — she did it because she felt the mountain calling, quietly but completely. That deeply personal, values-driven motivation is pure ISFP: authentic, humble, and astonishingly brave." },
        image: "assets/Samina Baig-Isfp.png",
        dimensions: { I: true, S: true, F: true, P: true }
    },
    ENTJ: {
        title: "The Commander",
        tagline: "Visionary, strategic, and built to lead at scale.",
        description: `ENTJs are born commanders — not in the sense of demanding control, but in the sense of naturally, inevitably rising to lead whenever leadership is needed. You see what others can't yet see: the inefficiency, the missed opportunity, the more elegant solution. Your mind is a strategic machine, capable of synthesizing complex information and translating it into decisive action. You expect a great deal from yourself and from others, and you have little patience for mediocrity or stagnation. But beneath your formidable exterior lies a person who genuinely wants to build something meaningful — to leave things better than you found them, and to bring others along to a bigger, more ambitious future.`,
        strengths: ["Visionary Strategy", "Decisive Leadership", "Analytical Brilliance", "Executive Drive", "Persuasive Communication", "Long-Term Thinking"],
        careers: [
            { icon: "👑", name: "Executive" }, { icon: "⚖️", name: "Lawyer" }, { icon: "📊", name: "Market Research Analyst" },
            { icon: "💼", name: "Business Consultant" }, { icon: "💡", name: "Venture Capitalist" }
        ],
        inspiration: { name: "Benazir Bhutto", role: "First Female Prime Minister of Pakistan", text: "Benazir Bhutto was the archetype of ENTJ greatness — visionary, fearless, strategic, and unwilling to accept the limits others tried to place on her. She understood power, wielded it purposefully, and changed the course of an entire nation." },
        image: "assets/Benazir bhutto - ENTJ.webp",
        dimensions: { E: true, N: true, T: true, J: true }
    },
    INTJ: {
        title: "The Architect",
        tagline: "Independent, visionary, and fiercely committed to mastery.",
        description: `INTJs are rare — a combination of imaginative vision and methodical execution that most people can only dream of. You think in systems and strategies, always several steps ahead, with a clarity of long-term vision that others find extraordinary. You don't follow rules for the sake of following them; you evaluate every system on its merit and aren't afraid to challenge convention when you see a better way. Your standards are uncompromisingly high — for yourself above all. You may be misread as cold or distant, but those who know you well understand the depth of your conviction, the richness of your inner world, and the fierce integrity you bring to everything you do.`,
        strengths: ["Strategic Vision", "Independent Thinking", "Ruthless Self-Improvement", "Systems Intelligence", "Long-Range Planning", "Intellectual Depth"],
        careers: [
            { icon: "📈", name: "Investment Banker" }, { icon: "💰", name: "Financial Advisor" }, { icon: "💻", name: "Software Developer" },
            { icon: "📊", name: "Economist" }, { icon: "👑", name: "Executive" }
        ],
        inspiration: { name: "Fatima Jinnah", role: "Mother of the Nation, Founding Figure", text: "Fatima Jinnah's entire life was a masterclass in INTJ resolve — a woman who built her philosophy through solitude, study, and conviction, and then executed it with a precision that helped birth an entire nation. Independent, visionary, and absolutely uncompromising." },
        image: "assets/Fatima jinnah intj.png",
        dimensions: { I: true, N: true, T: true, J: true }
    },
    ENFJ: {
        title: "The Protagonist",
        tagline: "Inspiring, empathetic, and transforming lives through connection.",
        description: `ENFJs are natural leaders with a rare gift: the ability to genuinely see the potential in every person they meet — and inspire people to see it in themselves. You have a charismatic, warm presence that draws people in, and an extraordinary ability to communicate in ways that move, motivate, and connect. You're not interested in power for its own sake; you want to use your influence to actually help people grow and flourish. You feel things deeply, and you carry the emotional weight of those around you with a grace that sometimes exhausts you but never diminishes you. The world is better when ENFJs lead — more human, more connected, more intentional.`,
        strengths: ["Transformative Leadership", "Deep Empathy", "Inspirational Communication", "Emotional Intelligence", "Visionary Social Impact", "Natural Mentorship"],
        careers: [
            { icon: "📣", name: "Advertising Executive" }, { icon: "🌟", name: "Public Relations Specialist" }, { icon: "🎓", name: "Corporate Coach" },
            { icon: "📊", name: "Sales Manager" }, { icon: "👥", name: "HR Professional" }
        ],
        inspiration: { name: "Maleeha Lodhi", role: "Pakistan's Ambassador to the United Nations", text: "Maleeha Lodhi spoke for a nation on the world's most significant stage — and did so with the eloquence, emotional intelligence, and inspirational presence that defines every ENFJ. She built bridges, shifted perceptions, and showed what genuine leadership communication looks like." },
        image: "assets/Maleeha-lodhi ENFJ.png",
        dimensions: { E: true, N: true, F: true, J: true }
    },
    INFJ: {
        title: "The Advocate",
        tagline: "Deeply insightful, quietly passionate, and driven by meaning.",
        description: `INFJs are perhaps the most paradoxical of all personalities — quiet yet deeply influential, idealistic yet remarkably perceptive about human reality. You have an uncanny ability to understand people at a level that sometimes surprises even you. You sense motivations, see connections, and perceive truths that haven't yet been spoken. You are driven by a profound sense of purpose; you don't just want a life that works, you want a life that matters. Your empathy is extraordinary, but so is your inner strength — you may be soft-spoken, but your convictions are iron. INFJs change the world not through noise, but through the quiet, relentless pursuit of what is deeply right.`,
        strengths: ["Profound Intuition", "Deep Empathy", "Visionary Purpose", "Strong Inner Conviction", "Insightful Communication", "Idealistic Action"],
        careers: [
            { icon: "💭", name: "Therapist / Mental Health Counselor" }, { icon: "💛", name: "Social Worker" }, { icon: "👥", name: "HR Diversity Manager" },
            { icon: "🌱", name: "Organizational Development Consultant" }, { icon: "🤝", name: "Customer Relations Manager" }
        ],
        inspiration: { name: "Malala Yousafzai", role: "Nobel Peace Prize Laureate & Education Activist", text: "Malala's journey from Swat Valley to the global stage is the ultimate INFJ story — a young woman who understood the moral weight of silence, and chose purpose over safety with a quiet, unshakeable courage that moved an entire world." },
        image: "assets/Malala yousafzai-infj.jpg",
        dimensions: { I: true, N: true, F: true, J: true }
    },
    ENTP: {
        title: "The Debater",
        tagline: "Inventive, irreverent, and intellectually unstoppable.",
        description: `ENTPs are intellectual powerhouses who thrive on challenge, debate, and the exhilarating pursuit of new ideas. You have a restless, electric mind that is constantly generating connections, possibilities, and provocations. You don't accept the status quo simply because it exists — you question everything, probe every assumption, and love nothing more than a stimulating battle of wits where ideas are stress-tested to their limits. Your ability to see multiple angles simultaneously makes you a brilliant strategist, entrepreneur, and creative thinker. You're energized by novelty and complexity, and at your best, you're the person who sees the future while everyone else is still debating the present.`,
        strengths: ["Innovative Thinking", "Intellectual Fearlessness", "Entrepreneurial Vision", "Strategic Debate", "Creative Problem-Solving", "Adaptable Brilliance"],
        careers: [
            { icon: "🚀", name: "Entrepreneur" }, { icon: "🏙️", name: "Real Estate Developer" }, { icon: "🎨", name: "Creative Director" },
            { icon: "📢", name: "Marketing Director" }, { icon: "🏛️", name: "Political Consultant" }
        ],
        inspiration: { name: "Sharmeen Obaid-Chinoy", role: "Two-Time Oscar-Winning Filmmaker", text: "Sharmeen Obaid-Chinoy didn't just make films — she provoked entire nations into confronting difficult truths. Her ENTP fearlessness, intellectual fire, and willingness to challenge what everyone else accepted is why her work changed laws, minds, and lives." },
        image: "assets/Sharmeen obaid chinoy-ENTP.jpg",
        dimensions: { E: true, N: true, T: true, P: true }
    },
    INTP: {
        title: "The Logician",
        tagline: "Brilliantly analytical, endlessly curious, and refreshingly original.",
        description: `INTPs are among the most original thinkers in the world — people who genuinely see problems in ways no one else does and construct solutions of startling elegance. Your mind is a precision instrument, constantly analyzing, dissecting, and rebuilding the world in search of deeper truth and cleaner logic. You're not motivated by social approval or conventional success; you're motivated by understanding. You need to know how things actually work, at the deepest level possible. This relentless intellectual honesty makes you invaluable in any domain requiring genuine original thought — and slightly impatient with everything that settles for surface-level answers.`,
        strengths: ["Deep Analytical Thinking", "Original Problem-Solving", "Logical Precision", "Intellectual Independence", "Abstract Reasoning", "Curiosity-Driven Innovation"],
        careers: [
            { icon: "💻", name: "Software Designer" }, { icon: "📊", name: "Financial Analyst" }, { icon: "🏛️", name: "Architect" },
            { icon: "🎓", name: "College Professor" }, { icon: "📈", name: "Economist" }
        ],
        inspiration: { name: "Muniba Mazari", role: "Artist, Activist & Pakistan's First Wheelchair Model", text: "Muniba Mazari's story defies easy labels — it is the story of an INTP who turned isolation into insight, pain into art, and limitation into an entirely new way of seeing. Her work is deeply original, intellectually honest, and refuses to be anything other than completely, uniquely itself." },
        image: "assets/Muniba mirza intp.png",
        dimensions: { I: true, N: true, T: true, P: true }
    },
    ENFP: {
        title: "The Campaigner",
        tagline: "Expressive, curious, and radiantly full of human possibility.",
        description: `ENFPs are the explorers of the human spirit — people who experience life with an open-hearted wonder that is genuinely infectious. You have a deep curiosity not just about ideas and possibilities, but about people: what drives them, what they dream, what they're afraid to say out loud. You see potential everywhere — in ideas, in projects, and above all in human beings — and you have an extraordinary ability to ignite that potential in others. You thrive in environments that allow creativity and meaning to coexist, and you're most alive when you're building something that genuinely matters. Your enthusiasm is never performative; it comes from a place of authentic wonder at how rich and strange and beautiful this world actually is.`,
        strengths: ["Visionary Enthusiasm", "People-Centered Intuition", "Creative Expression", "Emotional Authenticity", "Inspiring Communication", "Adaptive Creativity"],
        careers: [
            { icon: "📰", name: "Journalist" }, { icon: "🎨", name: "Creative Director" }, { icon: "💡", name: "Consultant" },
            { icon: "🍽️", name: "Restaurateur" }, { icon: "🎉", name: "Event Planner" }
        ],
        inspiration: { name: "Asma Shirazi", role: "Senior Journalist & Media Personality", text: "Asma Shirazi's journalism is driven by something that has nothing to do with ambition and everything to do with genuine ENFP curiosity — the relentless need to understand, to ask the uncomfortable question, and to tell human stories with the warmth and honesty they deserve." },
        image: "assets/Asma Shirazi-ENFP.png",
        dimensions: { E: true, N: true, F: true, P: true }
    },
    INFP: {
        title: "The Mediator",
        tagline: "Deeply authentic, idealistic, and moved by beauty and meaning.",
        description: `INFPs carry a rich inner world that most people will never fully see — a landscape of deeply held values, vivid imagination, and a profound sensitivity to beauty, injustice, and the quiet textures of human experience. You feel things at a depth that is both your greatest gift and your greatest challenge. You don't just observe the world; you resonate with it, absorb it, and process it through a uniquely personal moral and aesthetic lens. You are not content with a life that merely functions — you need a life that means something, that expresses who you truly are, that contributes to something worth contributing to. At your best, your creative work and your compassion change the people who encounter them.`,
        strengths: ["Deep Emotional Intelligence", "Creative Vision", "Moral Integrity", "Empathetic Listening", "Authentic Expression", "Idealistic Commitment"],
        careers: [
            { icon: "🎨", name: "Graphic Designer" }, { icon: "💭", name: "Psychologist / Therapist" }, { icon: "✍️", name: "Writer / Editor" },
            { icon: "🧘", name: "Physical Therapist" }, { icon: "👥", name: "HR Development Trainer" }
        ],
        inspiration: { name: "Kamila Shamsie", role: "Award-Winning Novelist & Author", text: "Kamila Shamsie's writing is the INFP soul made visible — tender, precise, morally serious, and achingly human. Her novels ask the questions that polite society avoids, with the kind of quiet courage that only comes from someone who genuinely cannot stop caring." },
        image: "assets/Kamila Shamsie - INFP.webp",
        dimensions: { I: true, N: true, F: true, P: true }
    }
};

// ===== SCORE CALCULATIONS =====
// Each axis is scored independently from its own dedicated question set.
// Answer scale: 1 = strongly agree, 7 = strongly disagree.
// "Score" per question = (8 - answer), so agreeing strongly = 7 points.
//
// E/I:  E questions (agreeing = E tendency) — q3,7,11,15,19,23,27,31
//        I = inverse (disagreeing with all E questions)
// N/S:  N questions q28,32 vs S questions q4,8,12,16,20,24
// T/F:  T questions q2,6,10,18,26 vs F questions q14,22,30
// J/P:  J questions q1,5,13,21 vs P questions q9,17,25,29
//
// Winner on each axis = whichever side has higher per-question average score.

const EQ = [3, 7, 11, 15, 19, 23, 27, 31];
const NQ = [28, 32],  SQ = [4, 8, 12, 16, 20, 24];
const TQ = [2, 6, 10, 18, 26], FQ = [14, 22, 30];
const JQ = [1, 5, 13, 21],     PQ = [9, 17, 25, 29];

function calculateScores(v) {
    const avg = (qs) => qs.reduce((s, n) => s + (8 - v[`q${n}`]), 0) / qs.length;

    const Eavg = avg(EQ); // midpoint is 3.5
    const Navg = avg(NQ), Savg = avg(SQ);
    const Tavg = avg(TQ), Favg = avg(FQ);
    const Javg = avg(JQ), Pavg = avg(PQ);

    const isE = Eavg > 3.5;
    const isN = Navg > Savg;
    const isT = Tavg > Favg;
    const isJ = Javg > Pavg;

    const pct = (diff, max) => Math.min(99, Math.max(15, Math.round(Math.abs(diff) / max * 100)));

    return {
        type: (isE?"E":"I") + (isN?"N":"S") + (isT?"T":"F") + (isJ?"J":"P"),
        EI_pct: pct(Eavg - 3.5, 3.5),
        SN_pct: pct(Navg - Savg, 6),
        TF_pct: pct(Tavg - Favg, 6),
        JP_pct: pct(Javg - Pavg, 6),
        isE, isN, isT, isJ
    };
}

// ===== RENDER RESULT =====
function renderResult(type, scores) {
    const data = personalityData[type] || personalityData['INFP'];

    const tryImg = (src, cls, fallbackText) => {
        return `<img src="${src}" alt="${fallbackText}" class="${cls}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="${cls === 'result-hero-img' ? 'result-img-fallback' : 'inspiration-fallback'}" style="display:none">${fallbackText}</div>`;
    };

    const dims = [
        { left: 'Introverted', right: 'Extraverted', pct: scores.EI_pct, dominant: scores.isE ? 'right' : 'left' },
        { left: 'Sensing',     right: 'Intuitive',   pct: scores.SN_pct, dominant: scores.isN ? 'right' : 'left' },
        { left: 'Thinking',    right: 'Feeling',     pct: scores.TF_pct, dominant: scores.isT ? 'left'  : 'right' },
        { left: 'Judging',     right: 'Perceiving',  pct: scores.JP_pct, dominant: scores.isJ ? 'left'  : 'right' }
    ];

    const traitsHTML = dims.map(d => `
        <div class="trait-row">
            <div class="trait-labels">
                <span class="trait-name-left" style="${d.dominant==='left' ? 'color:var(--purple);font-weight:700' : ''}">${d.left}</span>
                <span class="trait-pct">${d.pct}%</span>
                <span class="trait-name-right" style="${d.dominant==='right' ? 'color:var(--purple);font-weight:700' : ''}">${d.right}</span>
            </div>
            <div class="trait-track">
                <div class="trait-fill ${d.dominant}" style="width:${d.pct / 2}%"></div>
            </div>
        </div>
    `).join('');

    const dimLetters = type.split('').map(letter => {
        const names = { E: 'Extraverted', I: 'Introverted', N: 'Intuitive', S: 'Sensing', T: 'Thinking', F: 'Feeling', J: 'Judging', P: 'Perceiving' };
        return `<div class="dimension-card active">
            <div class="dimension-letter">${letter}</div>
            <div class="dimension-word">${names[letter] || letter}</div>
        </div>`;
    }).join('');

    const careersHTML = data.careers.map(c => `
        <div class="career-pill">
            <span class="career-icon">${c.icon}</span>
            ${c.name}
        </div>
    `).join('');

    const strengthsHTML = data.strengths.map(s => `<span class="strength-chip">${s}</span>`).join('');

    document.getElementById('result-content').innerHTML = `
        <div class="result-hero">
            <div class="result-hero-bg">
                <div class="result-blob-1"></div>
                <div class="result-blob-2"></div>
            </div>
            <div class="result-hero-inner">
                <div class="result-hero-text">
                    <div class="result-type-badge">
                        <span>✦</span> Your Personality Type
                    </div>
                    <div class="result-type-code">${type}</div>
                    <div class="result-type-name">${data.title}</div>
                    <p class="result-tagline">${data.tagline}</p>
                </div>
                <div class="result-hero-img-wrap">
                    ${tryImg(data.image, 'result-hero-img', type)}
                </div>
            </div>
        </div>

        <div class="result-body">

            <div class="result-grid-top">
                <div class="result-card full-width">
                    <div class="card-label">About You</div>
                    <div class="card-title">${data.title} — ${type}</div>
                    <div class="card-body">${data.description}</div>
                </div>

                <div class="result-card">
                    <div class="card-label">Your Core Strengths</div>
                    <div class="strength-chips">${strengthsHTML}</div>
                </div>

                <div class="result-card">
                    <div class="card-label">Personality Dimensions</div>
                    <div class="dimension-grid">${dimLetters}</div>
                </div>

                <div class="result-card full-width">
                    <div class="card-label">Trait Analysis</div>
                    <div class="card-title" style="font-size:1.2rem; margin-bottom:24px;">How your personality breaks down</div>
                    <div class="trait-bars">${traitsHTML}</div>
                </div>

                <div class="result-card full-width">
                    <div class="card-label">Career Paths</div>
                    <div class="card-title" style="font-size:1.2rem; margin-bottom:20px;">Roles where ${type}s naturally excel</div>
                    <div class="career-grid">${careersHTML}</div>
                </div>
            </div>

            <div class="inspiration-card">
                ${tryImg(data.image, 'inspiration-img', data.inspiration.name)}
                <div class="inspiration-text">
                    <div class="card-label">Pakistani Women Inspiration</div>
                    <div class="card-title">${data.inspiration.name}</div>
                    <div class="card-body" style="color:rgba(255,255,255,0.55); font-size:0.8rem; font-weight:500; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.08em;">${data.inspiration.role}</div>
                    <div class="card-body">${data.inspiration.text}</div>
                </div>
            </div>

            <div class="result-retake">
                <button class="btn-retake" onclick="startAssessment()">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9a6 6 0 1 1 1.5 3.9M3 13V9h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Retake the Assessment</span>
                </button>
            </div>

            <div class="site-credit"><span>designed &amp; built by mariyam shoab</span></div>
        </div>
    `;

    // Animate trait bars in after render
    setTimeout(() => {
        document.querySelectorAll('.trait-fill').forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0%';
            requestAnimationFrame(() => { bar.style.width = w; });
        });
    }, 200);
}

// ===== BUILD QUIZ =====
const container = document.getElementById('questions-container');
questions.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.innerHTML = `
        <div class="question-number">Question ${idx + 1} of ${questions.length}</div>
        <div class="question-text">${item.q}</div>
        <div class="scale-container">
            <span class="scale-label agree">Agree</span>
            <label><input type="radio" name="${item.id}" value="1"><div class="circle-btn c-1"></div></label>
            <label><input type="radio" name="${item.id}" value="2"><div class="circle-btn c-2"></div></label>
            <label><input type="radio" name="${item.id}" value="3"><div class="circle-btn c-3"></div></label>
            <label><input type="radio" name="${item.id}" value="4"><div class="circle-btn c-4"></div></label>
            <label><input type="radio" name="${item.id}" value="5"><div class="circle-btn c-5"></div></label>
            <label><input type="radio" name="${item.id}" value="6"><div class="circle-btn c-6"></div></label>
            <label><input type="radio" name="${item.id}" value="7"><div class="circle-btn c-7"></div></label>
            <span class="scale-label disagree">Disagree</span>
        </div>
    `;
    container.appendChild(div);
});

// ===== PROGRESS TRACKING =====
document.getElementById('quiz-form').addEventListener('change', () => {
    const answered = document.querySelectorAll('#quiz-form input:checked').length;
    const pct = (answered / questions.length) * 100;
    document.getElementById('progress-bar').style.width = pct + '%';
    document.getElementById('progress-count').textContent = `${answered} / ${questions.length}`;
});

// ===== FORM SUBMIT with validation =====
document.getElementById('quiz-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Find first unanswered question
    const unanswered = questions.find(item => !document.querySelector(`input[name="${item.id}"]:checked`));
    if (unanswered) {
        // Find its DOM element and scroll to it
        const el = document.querySelector(`input[name="${unanswered.id}"]`);
        if (el) {
            const questionEl = el.closest('.question-item');
            if (questionEl) {
                // Highlight it briefly
                questionEl.classList.add('question-error');
                setTimeout(() => questionEl.classList.remove('question-error'), 1800);
                // Scroll so the question lands in center of viewport
                const top = questionEl.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (questionEl.offsetHeight / 2);
                window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
            }
        }
        return;
    }

    const data = new FormData(e.target);
    const v = Object.fromEntries(data.entries());
    Object.keys(v).forEach(k => v[k] = parseInt(v[k]));

    const scores = calculateScores(v);

    document.getElementById('quiz-section').classList.add('hidden');
    const res = document.getElementById('result-section');
    res.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderResult(scores.type, scores);
});

// ===== NAVIGATION =====
function startAssessment() {
    // Full quiz reset — clear all radio selections and progress
    document.querySelectorAll('#quiz-form input[type="radio"]').forEach(r => { r.checked = false; });
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('progress-count').textContent = `0 / ${questions.length}`;
    // Remove any leftover error highlights
    document.querySelectorAll('.question-error').forEach(el => el.classList.remove('question-error'));

    document.getElementById('hero-section').classList.add('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHero() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('hero-section').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

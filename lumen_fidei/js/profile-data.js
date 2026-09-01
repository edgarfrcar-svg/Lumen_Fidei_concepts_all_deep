/**
 * PROFILE_DATA — the single source of truth for the "full profile" page
 * (figures/profile.html?id=<key>). This is the scalable architecture asked
 * for in Step 1: every figure is one entry in this object, rendered by the
 * shared engine in js/profile.js. Add a new theologian by adding a new key
 * here — no new HTML/CSS/JS files are required.
 *
 * SCHEMA (all fields optional except id/name — the renderer skips any
 * section whose data is missing, so partial entries degrade gracefully):
 *
 * {
 *   id: string,                 // must match the key this object is stored under
 *   name: string,
 *   portrait: string,           // image URL (public-domain source)
 *   dates: string,
 *   tradition: 'early'|'catholic'|'orthodox'|'protestant',   // keys into TRADITION_COLORS
 *   period: string,             // historical period, e.g. "Patristic Era / Late Antiquity"
 *   roles: string[],            // e.g. ["Bishop of Hippo", "Doctor of the Church"]
 *   epithet: string,
 *   bio: string[],              // short biography, one paragraph per array item
 *   concepts: string[],         // major theological concepts (tag list)
 *   opinions: [{
 *     id: string,               // used as the URL topic key (?topic=id) and anchor (#on-id)
 *     title: string,            // e.g. "On Grace"
 *     thesis: string,           // one-line summary of the position
 *     paragraphs: string[],     // the full position, in Claude's own words
 *     tags: string[],           // optional short labels, e.g. ["Anti-Pelagian", "Mature period"]
 *     contrasts: [{ figureId, topicKey, label }]   // links to other figures' opinions on the same question
 *   }],
 *   influences:  [{ name, figureId?, note? }],   // figureId links into PROFILE_DATA when present
 *   influenced:  [{ name, figureId?, note? }],
 *   opponents:   [{ name, figureId?, note? }],
 *   controversies: [{ name, summary }],
 *   primarySources: [{ title, url?, note? }]
 * }
 */
// Same tradition color tokens used across the site (figures.js, main.js).
// Duplicated here (rather than imported) so figures/profile.html has no
// dependency on the figure-directory scripts — it only needs this file
// and profile.js to run standalone.
window.TRADITION_COLORS = window.TRADITION_COLORS || {
  early:      { name: 'Early Church (pre-1054)', color: '#a97142', glow: '#e6b988' },
  catholic:   { name: 'Catholic',                 color: '#c9a227', glow: '#ffd98e' },
  orthodox:   { name: 'Eastern Orthodox',         color: '#6b3a76', glow: '#c79bd6' },
  protestant: { name: 'Protestant',               color: '#3a6ea5', glow: '#9ecbff' },
};

window.PROFILE_VISUAL_PRESETS = window.PROFILE_VISUAL_PRESETS || {
  augustine: {
    preset: 'augustine',
    palette: {
      hero: 'radial-gradient(ellipse 70% 55% at 75% 40%, rgba(255,190,100,0.18), transparent 50%), radial-gradient(circle at 30% 20%, rgba(255,210,140,0.12), transparent 40%), linear-gradient(165deg, #1a140e 0%, #0e0b0a 55%, #0a0908 100%)',
      surfaceTop: '#17120d',
      surfaceBottom: '#0d0b10',
      panel: '#161310',
      accent: '#d7a75e',
      accentSoft: 'rgba(215,167,94,0.18)',
      glow: 'rgba(255,217,142,0.22)',
      border: 'rgba(231,201,164,0.18)',
      heroInk: '#f8ecdc'
    },
    motif: 'candlelit-arch',
    texture: 'manuscript-grain',
    motion: 'slow-breath',
    typography: 'meditative'
  },
  scholastic: {
    preset: 'scholastic',
    palette: {
      hero: 'radial-gradient(ellipse 65% 50% at 72% 38%, rgba(200,175,120,0.14), transparent 50%), linear-gradient(165deg, #121820 0%, #0b0e12 55%, #080a0c 100%)',
      surfaceTop: '#11171d',
      surfaceBottom: '#0a0d12',
      panel: '#121920',
      accent: '#d2b26a',
      accentSoft: 'rgba(210,178,106,0.15)',
      glow: 'rgba(210,178,106,0.16)',
      border: 'rgba(214,210,193,0.14)',
      heroInk: '#f0ead6'
    },
    motif: 'cathedral-stone',
    texture: 'masonry',
    motion: 'measured-light',
    typography: 'ordered'
  },
  byzantine: {
    preset: 'byzantine',
    palette: {
      hero: 'radial-gradient(circle at 50% 14%, rgba(212,168,70,0.18), transparent 30%), linear-gradient(180deg, rgba(20,11,16,0.97), rgba(7,7,9,0.98))',
      surfaceTop: '#120d13',
      surfaceBottom: '#090a0e',
      panel: '#181115',
      accent: '#d4b66d',
      accentSoft: 'rgba(212,182,109,0.16)',
      glow: 'rgba(212,182,109,0.18)',
      border: 'rgba(236,204,117,0.16)',
      heroInk: '#f4ebd5'
    },
    motif: 'icon-frame',
    texture: 'gold-veil',
    motion: 'sacred-glow',
    typography: 'liturgical'
  },
  reformation: {
    preset: 'reformation',
    palette: {
      hero: 'radial-gradient(ellipse 65% 50% at 72% 38%, rgba(140,165,200,0.14), transparent 50%), linear-gradient(165deg, #12161e 0%, #0a0c10 55%, #07080b 100%)',
      surfaceTop: '#121822',
      surfaceBottom: '#0a0d12',
      panel: '#121a22',
      accent: '#9bb3d0',
      accentSoft: 'rgba(155,179,208,0.12)',
      glow: 'rgba(155,179,208,0.14)',
      border: 'rgba(179,196,216,0.16)',
      heroInk: '#edf4ff'
    },
    motif: 'woodcut-grid',
    texture: 'printed-paper',
    motion: 'press-breath',
    typography: 'polemic'
  }
};

window.PROFILE_DATA = {

  // ======================================================================
  // AUGUSTINE OF HIPPO
  // ======================================================================
  augustine: {
    id: 'augustine',
    name: 'Augustine of Hippo',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Antonio%20Rodr%C3%ADguez%20-%20Saint%20Augustine%20-%20Google%20Art%20Project.jpg',
    dates: '354–430',
    tradition: 'early',
    period: 'Patristic Era / Late Antiquity',
    roles: ['Bishop of Hippo', 'Doctor of the Church', 'Doctor of Grace'],
    epithet: 'Bishop of Hippo, whose account of grace, sin, and the will shaped nearly all subsequent Western theology.',
    visual: {
      preset: 'augustine',
      mood: 'Late Roman North Africa, interior reflection, and candlelit intellectual solitude.',
      motif: 'Candlelit arches, manuscript grain, and warm twilight.',
      texture: 'manuscript-grain',
      motion: 'slow-breath',
      typography: 'meditative'
    },
    bio: [
      'Augustine was born in 354 in Thagaste, in Roman North Africa, to a pagan father and a Christian mother, Monica, whose prayers he would later credit for his conversion. A brilliant student of rhetoric, he spent his twenties restless and ambitious, drawn for a time to Manichaeism and to a career teaching oratory in Carthage, Rome, and Milan.',
      'In Milan he came under the influence of Bishop Ambrose and a circle of Christian Neoplatonists. After a prolonged and famously agonized struggle described in the Confessions, he converted in 386 and was baptized the following Easter. He returned to Africa, was ordained a priest in 391, and became Bishop of Hippo Regius in 395, a post he held until his death in 430, as Vandal forces besieged the city.',
      'Over nearly four decades as bishop, Augustine produced an enormous body of sermons, letters, and treatises that defined the terms of Western debate on grace, sin, the Trinity, the sacraments, and the relationship between the Church and the political order. His late controversy with Pelagius and his followers produced the mature account of grace and original sin for which he is best known.'
    ],
    concepts: ['Grace', 'Original Sin', 'Free Will', 'Predestination', 'The Trinity', 'The Two Cities', 'Just War', 'Time and Eternity', 'The Problem of Evil', 'Ecclesiology'],
    opinions: [
      {
        id: 'grace',
        title: 'On Grace',
        thesis: 'Grace is not a reward for effort but the unmerited gift that makes any good effort possible in the first place.',
        tags: ['Mature period', 'Anti-Pelagian'],
        paragraphs: [
          'For Augustine, fallen humanity cannot take even the first step toward God by its own unaided power. Grace is prevenient — it comes before any human movement toward good — and it is also operative and cooperative, working in the will to turn it and then working with the will once it is turned. Without this gift, he argued, the will remains bound to sin not by an external force but by its own disordered love.',
          'This position hardened over the course of his engagement with Pelagius and his followers. In earlier works Augustine had allowed more room for the will\'s own contribution; by the time of works such as On the Spirit and the Letter and On Grace and Free Will, he insisted that even the beginning of faith (the initium fidei) is itself a gift, not a human achievement that God merely rewards. He supported this from his reading of Paul, especially Romans 9 and 1 Corinthians 4:7 — "What do you have that you did not receive?"',
          'Crucially, Augustine did not think grace destroys freedom. He argued instead that grace liberates the will from bondage to sin so that it can, for the first time, freely will the good. This is the root of his later, more controversial teaching on predestination and irresistible grace for the elect.'
        ],
        contrasts: [{ figureId: 'pelagius', topicKey: 'grace', label: "Compare with Pelagius's account of grace" }]
      },
      {
        id: 'free-will',
        title: 'On Free Will',
        thesis: 'The will remains formally free even after the Fall, but it is enslaved in practice to disordered loves it cannot, alone, reorder.',
        tags: ['Developed across his career'],
        paragraphs: [
          'Augustine\'s earliest major treatment, On Free Choice of the Will (De Libero Arbitrio), was written partly against the Manichaeans, who located the source of evil in an opposing principle rather than in the will. There Augustine defends free will robustly: evil is not a substance but a privation, and moral responsibility requires that the will genuinely choose.',
          'His later writings refine rather than reverse this. He distinguishes between liberum arbitrium (the bare capacity of the will to choose) and libertas (the fuller freedom to choose and love the good), arguing that fallen humanity retains the first but has lost the second. The will after Adam\'s sin is still self-moving, but it moves only toward sin unless grace intervenes — a condition he calls a "happy necessity" once grace has acted, since the redeemed will now finds it delightful, not coerced, to love God.',
          'This distinction became the fault line of the Pelagian controversy: Pelagius and his allies read Augustine\'s account as effectively abolishing freedom and responsibility, while Augustine maintained that true freedom is freedom for the good, which only grace restores.'
        ],
        contrasts: [{ figureId: 'pelagius', topicKey: 'free-will', label: "Compare with Pelagius's account of free will" }]
      },
      {
        id: 'original-sin',
        title: 'On Original Sin',
        thesis: 'All humanity inherits, through Adam, both the guilt and the corrupted condition of the first sin.',
        tags: ['Anti-Pelagian', 'Contested even among allies'],
        paragraphs: [
          'Augustine taught that Adam\'s sin was transmitted to his descendants not merely as a bad example but as a real inherited condition — a wounded nature (vitiated will, disordered desire, and mortality) and, more controversially, an inherited guilt (reatus), such that even infants are born under sin. He connected this to a particular, disputed reading of Romans 5:12 in the Old Latin translation available to him, understood to say that all sinned "in" Adam.',
          'From this followed his defense of infant baptism as remission of a real guilt rather than a merely symbolic rite, and his insistence that unbaptized infants, while not deserving the same punishment as willful sinners, could not be said to be wholly innocent before God — a claim that troubled even some who agreed with him on grace.',
          'This teaching supplied the anthropological premise for his whole doctrine of grace: if the corruption of nature is this deep and this universal, then no exercise of unaided will, however sincere, can restore it.'
        ],
        contrasts: [{ figureId: 'pelagius', topicKey: 'original-sin', label: "Compare with Pelagius's rejection of inherited guilt" }]
      },
      {
        id: 'trinity',
        title: 'On the Trinity',
        thesis: 'The Trinity is best approached through the analogy of the mind\'s own inner life — memory, understanding, and will.',
        tags: ['On the Trinity, books 8–15'],
        paragraphs: [
          'Augustine\'s De Trinitate is one of the most sustained meditations on the doctrine in the patristic period. He affirms the full Nicene consensus — one divine essence in three co-equal, co-eternal persons — but is less interested in repeating conciliar formulas than in finding creaturely analogies (vestigia trinitatis) that might illuminate, without ever fully explaining, the mystery.',
          'His most influential analogy locates a trace of the Trinity in the human mind itself: memory, understanding, and will (or, in another formulation, the mind knowing and loving itself) are three really distinct faculties of a single, undivided mind, offering a picture of unity-in-distinction. He was careful to insist this was analogy, not explanation — the creature can never adequately mirror the Creator.',
          'This "psychological" approach to the Trinity became deeply influential in the Latin West, shaping later Scholastic Trinitarian theology, in contrast to the more liturgical and apophatic emphases common in the Greek East.'
        ],
        contrasts: []
      },
      {
        id: 'evil',
        title: 'On Evil',
        thesis: 'Evil has no independent existence; it is a privation — a corruption or absence of a good that ought to be present.',
        tags: ['Anti-Manichaean'],
        paragraphs: [
          'Formed in his youth by nearly a decade as a Manichaean auditor, Augustine had once accepted a dualist cosmology in which good and evil were two competing substances. His conversion required him to reject this, and his mature answer — developed especially in the Confessions and On Free Choice of the Will — is that evil is not a thing but a privatio boni, a lack or corruption of the good that a nature ought to have.',
          'On this account, everything that exists is good insofar as it exists, since it is created by a good God; evil enters only through the misuse of a good will, which turns away from the highest good (God) toward lesser goods, loving them in a disordered way. This let Augustine affirm that God is not the author of evil while still maintaining a single, good Creator of all that is.',
          'This privation account, together with his understanding of the will, gave Augustine the theodicy he needed: moral evil originates in creaturely freedom, not in God or in any rival power.'
        ],
        contrasts: []
      },
      {
        id: 'church',
        title: 'On the Church',
        thesis: 'The Church is a mixed body of wheat and tares in this life, and its sacraments are valid regardless of the personal holiness of the minister.',
        tags: ['Anti-Donatist'],
        paragraphs: [
          'Augustine\'s ecclesiology was forged largely in controversy with the Donatists, a rigorist North African movement that held sacraments administered by unworthy or traditor (those who had handed over Scriptures under persecution) clergy to be invalid, and that treated the true Church as a visibly pure remnant.',
          'Against this, Augustine argued that the Church in history is necessarily a corpus permixtum, a mixed body of true and false members, wheat and tares, that will only be fully separated at the Last Judgment. He grounded the validity of the sacraments in Christ\'s own action rather than the minister\'s worthiness (ex opere operato, in the later Scholastic phrase he anticipates), so that baptism performed by a sinful priest is still a valid baptism.',
          'His City of God, begun after the sack of Rome in 410, extends this into a broader vision: the "City of God" and the "earthly city" are two loves — love of God to the point of self-contempt, and love of self to the point of contempt for God — intermingled in every earthly society, including the visible Church, until history\'s end.'
        ],
        contrasts: []
      }
    ],
    influences: [
      { name: 'Paul the Apostle', note: 'Especially Romans and Galatians, the scriptural anchor of his mature theology of grace.' },
      { name: 'Ambrose of Milan', note: 'Bishop whose preaching and allegorical exegesis opened Augustine to intellectually serious Christianity.' },
      { name: 'Plotinus and the Neoplatonists', note: 'Supplied the philosophical vocabulary for his account of evil, the soul, and the ascent to God.' },
      { name: 'Cicero', note: "Augustine's reading of the (now lost) Hortensius as a young man kindled his love of philosophy." },
      { name: 'Monica, his mother', note: 'Her persistence and prayer are presented in the Confessions as instrumental to his conversion.' }
    ],
    influenced: [
      { name: 'Thomas Aquinas', figureId: 'aquinas', note: 'Cites Augustine more than any other authority besides Scripture and Aristotle.' },
      { name: 'Martin Luther', note: 'An Augustinian friar whose reading of Augustine on grace and the will shaped the Reformation break with late medieval theology.' },
      { name: 'John Calvin', note: "Regarded Augustine as the Church Father closest to his own doctrine of predestination." },
      { name: 'Cornelius Jansen and the Jansenists', note: 'A 17th-century movement claiming to recover Augustine\'s strict doctrine of grace against perceived Jesuit laxity.' },
      { name: 'Medieval Scholasticism generally', note: 'His authority on grace, sin, and the Trinity was second only to Scripture for most of the Latin Middle Ages.' }
    ],
    opponents: [
      { name: 'Pelagius', figureId: 'pelagius', note: 'British ascetic teacher whose emphasis on human capacity Augustine spent his final two decades opposing.' },
      { name: 'The Donatists', note: 'North African rigorists against whom Augustine developed his ecclesiology and sacramental theology.' },
      { name: 'The Manichaeans', note: "Dualist sect Augustine belonged to for nine years before his conversion, later refuted at length." },
      { name: 'Julian of Eclanum', note: 'A Pelagian bishop who mounted the sharpest theological counter-attack on Augustine\'s doctrine of original sin.' }
    ],
    controversies: [
      { name: 'The Pelagian Controversy', summary: 'A decades-long dispute (c. 411–430) over grace, free will, and original sin, ending in the condemnation of Pelagianism at the Council of Carthage (418) and the Council of Ephesus (431).' },
      { name: 'The Donatist Controversy', summary: 'A North African schism over the validity of sacraments administered by clergy who had lapsed under Roman persecution; Augustine defended the unity of the Church and objective validity of the sacraments.' },
      { name: 'The Manichaean Period and Refutation', summary: "Augustine's own decade within Manichaeism, followed by extensive written refutations after his conversion." }
    ],
    primarySources: [
      { title: 'Confessions', workKey: 'augustine-confessions' },
      { title: 'Enchiridion on Faith, Hope, and Love', workKey: 'augustine-enchiridion' },
      { title: 'On Christian Doctrine — Book I', workKey: 'augustine-doctrine' },
      { title: 'The City of God (De Civitate Dei)' },
      { title: 'On the Trinity (De Trinitate)' },
      { title: 'On the Spirit and the Letter (De Spiritu et Littera)' },
      { title: 'On Grace and Free Will (De Gratia et Libero Arbitrio)' },
      { title: 'On Free Choice of the Will (De Libero Arbitrio)' },
      { title: 'On Nature and Grace, Against Julian — anti-Pelagian works' }
    ]
  },

  // ======================================================================
  // PELAGIUS — contrasting test case
  // ======================================================================
  pelagius: {
    id: 'pelagius',
    name: 'Pelagius',
    portrait: null,
    dates: 'c. 354–c. 418',
    tradition: 'early',
    period: 'Patristic Era / Late Antiquity',
    roles: ['Ascetic teacher', 'Biblical commentator'],
    epithet: 'A British or Irish ascetic whose teaching on grace and human capacity was condemned as heresy after his confrontation with Augustine.',
    bio: [
      'Little is known of Pelagius\'s early life with certainty; he was likely born around 354 in Britain or Ireland and trained as a lawyer before turning to ascetic Christianity. By the 380s he was teaching in Rome, where he built a reputation as a serious, morally demanding spiritual director attracting aristocratic students concerned with Christian living rather than speculative theology.',
      'Pelagius left Rome around 410, ahead of the Visigothic sack of the city, and traveled through North Africa (where he apparently met but did not directly confront Augustine) to Palestine. There his teaching, and especially that of his more combative associate Caelestius, drew formal charges of heresy.',
      'Pelagius was examined and acquitted by a synod at Diospolis (Lydda) in 415, a verdict Augustine and others in the West regarded as based on Pelagius\'s careful, ambiguous answers rather than a fair test of his actual teaching. Renewed pressure from Augustine, Jerome, and the African bishops led Pope Innocent I and then Pope Zosimus to condemn Pelagius\'s teaching, and the Council of Carthage formally condemned Pelagianism in 418. Pelagius disappears from the historical record shortly after, his fate unknown.'
    ],
    concepts: ['Human Capacity', 'Free Will', 'Asceticism', 'Moral Responsibility', 'Law and Grace', 'Christian Perfection'],
    opinions: [
      {
        id: 'grace',
        title: 'On Grace',
        thesis: 'Grace is real, but it consists chiefly in the gifts already given at creation — reason and free will — together with the law and the example of Christ; it is not an inward, transforming necessity for every good act.',
        tags: ['Condemned 418', 'Reconstructed largely from Augustine\'s citations'],
        paragraphs: [
          'Much of what survives of Pelagius\'s own words on grace comes filtered through Augustine\'s polemical quotations, so scholars read this position with some caution. What emerges is a theology in which grace is understood broadly: the natural endowment of reason and free will given at creation is itself already a grace, and it is joined by further gifts — the law of Moses to instruct, the teaching and example of Christ to inspire, and the forgiveness of sins in baptism.',
          'Pelagius affirmed, in his surviving Letter to Demetrias and elsewhere, that these gifts genuinely help; he did not think a person achieves righteousness by sheer willpower with no reference to God. But he resisted Augustine\'s claim that an additional, inward, operative grace is required for every good act of the will, seeing this as tending to make God responsible for sin and to excuse moral failure.',
          'His central pastoral concern, defenders argue, was practical: he worried that an overwhelming emphasis on human incapacity would become an excuse for moral laxity among wealthy, comfortable Roman Christians who used "grace alone" to justify indifference to hard commandments.'
        ],
        contrasts: [{ figureId: 'augustine', topicKey: 'grace', label: "Compare with Augustine's account of grace" }]
      },
      {
        id: 'free-will',
        title: 'On Free Will',
        thesis: 'The capacity (posse) to do good or evil is a permanent, unimpaired feature of human nature, given by God at creation and not lost through Adam\'s sin.',
        tags: ['Core to his system'],
        paragraphs: [
          'Pelagius held that the ability not to sin (posse non peccare) remains fully intact in every human being, because it belongs to the nature God created and God does not take back what he has given. He distinguished carefully between the posse (the God-given capacity), the velle (the willing), and the esse (the actual doing) — the first is God\'s gift and cannot be lost, while the second two are the individual\'s own responsibility.',
          'On this framework, moral commands in Scripture ("be perfect," "keep the commandments") would be unjust and meaningless if the capacity to obey them were not genuinely present in everyone addressed. For Pelagius, the very fact that God commands implies that God has made obedience possible.',
          'Augustine and his allies read this as effectively denying humanity\'s fallen condition and making grace a mere convenience rather than a necessity — the flashpoint of the entire controversy.'
        ],
        contrasts: [{ figureId: 'augustine', topicKey: 'free-will', label: "Compare with Augustine's account of free will" }]
      },
      {
        id: 'original-sin',
        title: 'On Original Sin',
        thesis: 'Adam\'s sin harmed only Adam; each soul is created fresh and innocent, and sins by imitation of Adam\'s bad example, not by inherited guilt.',
        tags: ['Most sharply condemned point'],
        paragraphs: [
          'Pelagius (and more explicitly his associate Caelestius) rejected the idea that Adam\'s guilt is transmitted biologically or spiritually to his descendants. Each person, on this view, is born in the same condition Adam was created in — able to sin or not to sin — and becomes a sinner only through their own free, imitative choices, not through an inherited corruption of nature.',
          'This led Caelestius to draw out conclusions Pelagius himself was more cautious about stating publicly: that infants, being untainted by any inherited guilt, do not strictly need baptism for the remission of sin, even if it was still valuable for other reasons (such as admission into the kingdom of heaven). This claim in particular alarmed both Augustine and the North African bishops, for whom the near-universal practice of infant baptism presupposed a real, inherited need for grace.',
          'This point — more than the abstract question of free will — was decisive in Pelagius\'s condemnation, since it appeared to undercut a settled sacramental practice of the Church.'
        ],
        contrasts: [{ figureId: 'augustine', topicKey: 'original-sin', label: "Compare with Augustine's account of original sin" }]
      },
      {
        id: 'perfection',
        title: 'On the Possibility of a Sinless Life',
        thesis: 'A person who fully wills it, aided by the law and Christ\'s example, can live an entirely sinless life in this life.',
        tags: ['Ascetic rigorism'],
        paragraphs: [
          'Consistent with his account of an unimpaired free will, Pelagius held that sinlessness was a real, achievable goal for the sufficiently disciplined and committed Christian — not merely an eschatological hope but a live possibility here and now. He pointed to the biblical language commending various figures as "righteous" or "blameless" as evidence that Scripture itself assumed this was attainable.',
          'This was closely tied to his vocation as a spiritual director of Roman aristocrats: his letters (most fully the Letter to Demetrias, written for a young noblewoman who had taken a vow of virginity) are demanding, practical, and morally exacting, urging total, uncompromising commitment rather than resigned acceptance of ongoing sin.',
          'Critics, led by Augustine and Jerome, regarded this as spiritually dangerous — encouraging either despair in those who inevitably failed or self-righteousness in those who convinced themselves they had succeeded.'
        ],
        contrasts: []
      }
    ],
    influences: [
      { name: 'Stoic moral philosophy', note: 'Its emphasis on the will\'s sovereignty over virtue shaped the intellectual climate of his ethics.' },
      { name: 'Roman ascetic movements', note: 'The late-4th-century vogue for aristocratic Christian asceticism in Rome was both his context and his audience.' },
      { name: 'Rufinus the Syrian', note: 'An Eastern theologian sometimes credited with transmitting ideas about unimpaired free will into Pelagius\'s circle.' }
    ],
    influenced: [
      { name: 'Caelestius', note: 'His most outspoken disciple, who pressed the logical conclusions of Pelagius\'s teaching (including on infant baptism) further and more provocatively than Pelagius himself.' },
      { name: 'Julian of Eclanum', figureId: null, note: "Continued the theological defense of the condemned position after Pelagius's disappearance from the record." },
      { name: 'Later "semi-Pelagian" debates', note: 'Even after condemnation, questions about the relative roles of grace and will he raised recurred throughout the Middle Ages and Reformation.' }
    ],
    opponents: [
      { name: 'Augustine of Hippo', figureId: 'augustine', note: "Augustine's mature theology of grace and original sin was worked out largely in written opposition to Pelagius and his followers." },
      { name: 'Jerome', note: 'Attacked Pelagius sharply in his Dialogue Against the Pelagians and supported his condemnation.' },
      { name: 'Pope Zosimus (eventually)', note: 'Initially inclined to leniency, Zosimus reversed course under African pressure and confirmed the condemnation.' }
    ],
    controversies: [
      { name: 'The Pelagian Controversy', summary: 'Examined and provisionally acquitted at the Synod of Diospolis (415), Pelagius was ultimately condemned along with Caelestius by Pope Innocent I, Pope Zosimus, and the Council of Carthage (418), and again at the Council of Ephesus (431).' }
    ],
    primarySources: [
      { title: 'Letter to Demetrias' },
      { title: "Commentary on Paul's Epistles (Expositions of Thirteen Epistles of St Paul)" },
      { title: 'On Nature (De Natura) — largely known through Augustine\'s rebuttal, On Nature and Grace' },
      { title: 'Confession of Faith (Libellus Fidei), submitted to Pope Innocent I' }
    ]
  },

  // ======================================================================
  // THOMAS AQUINAS
  // ======================================================================
  aquinas: {
    id: 'aquinas',
    name: 'Thomas Aquinas',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/St-thomas-aquinas.jpg',
    dates: '1225–1274',
    tradition: 'catholic',
    period: 'High Scholasticism / High Middle Ages',
    roles: ['Dominican friar', 'Doctor of the Church', 'Doctor Angelicus'],
    epithet: 'Doctor Angelicus, whose synthesis of Aristotelian philosophy and Christian revelation shaped Catholic theology for centuries.',
    visual: {
      preset: 'scholastic',
      mood: 'Medieval university, cathedral stone, and disciplined intellectual order.',
      motif: 'Cathedral geometry, scholastic structure, and luminous stonework.',
      texture: 'masonry',
      motion: 'measured-light',
      typography: 'ordered'
    },
    bio: [
      'Born around 1225 near Aquino in the Kingdom of Sicily to a noble family, Thomas was sent as a child oblate to the great Benedictine abbey of Monte Cassino before studying at the University of Naples, where he first encountered the newly recovered works of Aristotle. Against his family\'s strong objections — he was briefly held captive by his own brothers to prevent it — he joined the recently founded Dominican Order around 1244.',
      'He studied under Albert the Great in Cologne and Paris, absorbing the new Aristotelian learning entering the Latin West through Arabic and Greek sources, and began a teaching career that took him repeatedly between Paris and Italy. He taught as a master at the University of Paris during a period of intense controversy over the proper use of Aristotle in Christian theology.',
      'Aquinas produced an immense body of work, most famously the unfinished Summa Theologiae, a systematic presentation of Christian doctrine organized according to Aristotelian method, alongside biblical commentaries, disputed questions, and the Summa contra Gentiles. In late 1273 he experienced a mystical episode after which he stopped writing, reportedly saying that all he had written seemed like straw compared to what had been revealed to him. He died in 1274 en route to the Second Council of Lyon.'
    ],
    concepts: ['Natural Law', 'The Five Ways', 'Analogy of Being', 'Grace and Merit', 'Transubstantiation', 'Faith and Reason', 'Virtue Ethics', 'The Beatific Vision'],
    opinions: [
      {
        id: 'gods-existence',
        title: "On God's Existence (The Five Ways)",
        thesis: "God's existence, while an article of faith, is also demonstrable by reason from observed features of the world, without presupposing revelation.",
        tags: ['Summa Theologiae I, q.2'],
        paragraphs: [
          'At the opening of the Summa Theologiae, Aquinas offers five arguments (quinque viae) for God\'s existence, each reasoning from an observed feature of the created world to a first cause required to explain it: motion requires an unmoved mover; causation requires an uncaused first cause; contingent beings require a necessary being; degrees of perfection require a maximum standard; and the evident order and purposiveness of nature require an intelligent designer.',
          'Crucially, Aquinas did not think these proofs replaced faith or made revelation unnecessary — they establish that God exists and has certain attributes (unity, simplicity, eternity), but not the fuller content of Christian revelation, such as the Trinity or the Incarnation, which remain objects of faith even though they are not contrary to reason.',
          'This reflects his broader conviction, drawn from his reading of Aristotle, that grace does not destroy nature but perfects it — reason, rightly used, can reach real if limited truths about God that revelation then completes and elevates.'
        ],
        contrasts: []
      },
      {
        id: 'grace',
        title: 'On Grace and Free Will',
        thesis: 'Grace elevates and perfects a nature that free will still genuinely operates within, so that the graced act is fully both God\'s gift and the person\'s own free act.',
        tags: ['Synthesizes Augustine with Aristotelian causation'],
        paragraphs: [
          'Aquinas inherited Augustine\'s insistence that grace is necessary and unmerited, but reworked it using Aristotelian categories of causation. God, as first cause, moves the will as secondary cause; grace does not compete with free will for the same causal space but operates at a different level, making the free act possible without overriding its freedom — much as, in Aquinas\'s analogy, a first cause does not eliminate the proper causality of secondary causes but grounds it.',
          'He distinguished operative grace (God acting alone to move the will, as in justification) from cooperative grace (God and the justified will acting together in subsequent good works), and habitual grace (an infused disposition, a "supernatural habit," elevating the soul\'s faculties) from actual grace (God\'s particular movements assisting a given act).',
          'This scheme let Aquinas affirm, against a crude reading of merit, that good works flowing from grace can be genuinely meritorious — not because they earn grace in the first place, but because grace has truly made the person, and therefore the person\'s acts, pleasing to God.'
        ],
        contrasts: [{ figureId: 'augustine', topicKey: 'grace', label: "Compare with Augustine's earlier account of grace" }]
      },
      {
        id: 'natural-law',
        title: 'On Natural Law',
        thesis: 'Moral knowledge of basic goods is available to all rational creatures through natural law, which is reason\'s participation in God\'s eternal law.',
        tags: ['Summa Theologiae I-II, qq.90–97'],
        paragraphs: [
          'Aquinas defines natural law as the rational creature\'s participation in the eternal law by which God governs the universe. Its most basic precept — good is to be done and pursued, evil avoided — is self-evident, and from it reason can derive further precepts oriented toward the goods proper to human nature: self-preservation, procreation and the raising of children, and life in society and the pursuit of truth (including truth about God).',
          'Because this law is grounded in reason rather than revelation alone, Aquinas held that its basic precepts are knowable, in principle, by anyone regardless of religious belief, even if particular judgments can be clouded by passion, bad custom, or corrupt disposition.',
          'This became the foundation for a long tradition of Catholic moral and political theology, and later for natural-rights theorizing, since it grounds moral obligation in created human nature rather than in positive religious law alone.'
        ],
        contrasts: []
      },
      {
        id: 'eucharist',
        title: 'On the Eucharist (Transubstantiation)',
        thesis: 'At consecration, the whole substance of bread and wine is converted into the substance of Christ\'s body and blood, while the accidents (appearance, taste, texture) remain unchanged.',
        tags: ['Summa Theologiae III, q.75'],
        paragraphs: [
          'Aquinas gave the classical Scholastic articulation of transubstantiation, using the Aristotelian distinction between substance (what a thing fundamentally is) and accidents (its perceptible properties). At the words of consecration, he held, the entire substance of the bread and wine is changed into the substance of Christ\'s body and blood, even though the accidents of bread and wine remain exactly as they were, sustained directly by God rather than by any underlying substance.',
          'He was careful to distinguish this from mere symbolic presence (which he took to understate the reality of Christ\'s presence) and from crude physical cannibalism (since what is received is Christ present under sacramental signs, not the visible flesh in its ordinary mode of existing).',
          'This account, refined by later Scholastics and formally adopted in vocabulary at the Council of Trent, became the standard Catholic articulation against which Reformation-era alternatives (Luther\'s sacramental union, Zwingli\'s memorialism, Calvin\'s spiritual presence) were explicitly formulated.'
        ],
        contrasts: []
      },
      {
        id: 'faith-reason',
        title: 'On Faith and Reason',
        thesis: 'Faith and reason cannot ultimately conflict, since both originate in God; reason can prepare for and defend faith, while some truths remain accessible to faith alone.',
        tags: ['Summa contra Gentiles I'],
        paragraphs: [
          'Aquinas distinguished truths about God accessible to unaided reason (preambula fidei, such as God\'s existence and unity) from truths known only by revelation and accepted on faith (mysteria fidei, such as the Trinity and Incarnation). Because both reason and revelation come from the same divine source of truth, he held that a genuine conflict between a demonstrated conclusion of reason and an article of faith is impossible — an apparent conflict signals either a flaw in the reasoning or a misunderstanding of the doctrine.',
          'This let him engage seriously and confidently with newly available Aristotelian and Arabic philosophy (particularly Averroes and Avicenna) rather than treating it as inherently hostile to Christian belief, while also resisting the "Latin Averroist" position associated with Siger of Brabant, which he judged had overstated reason\'s independence from revealed truth.',
          'His model — reason as a genuine, if limited and completed, avenue to truth about God — became foundational for later Catholic approaches to the relationship between science, philosophy, and theology.'
        ],
        contrasts: []
      }
    ],
    influences: [
      { name: 'Aristotle', note: 'Referred to simply as "the Philosopher" in his texts; supplied his logic, metaphysics, and much of his ethical framework.' },
      { name: 'Augustine of Hippo', figureId: 'augustine', note: 'The dominant theological (as opposed to philosophical) authority behind his accounts of grace, sin, and the Trinity.' },
      { name: 'Albert the Great', note: 'His teacher in Cologne and Paris, a pioneer in integrating Aristotelian natural philosophy with Christian thought.' },
      { name: 'Pseudo-Dionysius the Areopagite', note: 'Shaped his account of the hierarchy of being and negative (apophatic) theology.' },
      { name: 'Ibn Rushd (Averroes) and Ibn Sina (Avicenna)', note: 'Muslim Aristotelian commentators whose interpretations Aquinas engaged with closely, both adopting and correcting them.' }
    ],
    influenced: [
      { name: 'The later Dominican and Thomist tradition', note: 'Figures such as Cajetan and John of St. Thomas systematized and defended his thought for centuries.' },
      { name: 'The Council of Trent', note: 'Drew heavily on Thomistic categories, especially in its decrees on justification and the Eucharist.' },
      { name: 'Modern Catholic social and moral teaching', note: "His natural law theory underlies much of the Church's later teaching on ethics, law, and human dignity." }
    ],
    opponents: [
      { name: 'The Latin Averroists (e.g. Siger of Brabant)', note: 'Aquinas opposed their claim of a strict "double truth" separating philosophical and theological conclusions.' },
      { name: 'Franciscan critics (e.g. later, Duns Scotus)', note: 'Disputed his positions on the will, individuation, and the proofs for God\'s existence within decades of his death.' },
      { name: 'Conservative theologians at Paris', note: 'Some of Aquinas\'s propositions were controversially included in the Condemnations of 1277 in Paris, three years after his death, though later rehabilitated.' }
    ],
    controversies: [
      { name: 'The Condemnations of 1277', summary: "A list of 219 propositions condemned by the Bishop of Paris, Étienne Tempier, some bearing on positions associated with Aquinas's Aristotelianism; the condemnation was later lifted as his reputation grew." },
      { name: 'The Correctoria Controversy', summary: 'A dispute among Franciscan and Dominican theologians in the decades after Aquinas\'s death over whether his positions required correction on points such as the unicity of substantial form.' }
    ],
    primarySources: [
      { title: 'Summa Theologiae', summaLink: true, note: 'Article-by-article reader — I, I-II, II-II, III (Dominican Fathers translation)' },
      { title: 'Summa contra Gentiles' },
      { title: 'Disputed Questions on Truth (De Veritate)' },
      { title: 'Commentary on the Sentences of Peter Lombard' },
      { title: 'Commentaries on Aristotle' }
    ]
  },

  // ======================================================================
  // MARTIN LUTHER
  // ======================================================================
  luther: {
    id: 'luther',
    name: 'Martin Luther',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Martin-Luther-1526.jpg',
    dates: '1483–1546',
    tradition: 'protestant',
    period: 'The Protestant Reformation',
    roles: ['Augustinian friar', 'Professor of Theology, Wittenberg', 'Reformer'],
    epithet: 'Augustinian friar whose break with Rome over grace and justification catalyzed the Protestant Reformation.',
    visual: {
      preset: 'reformation',
      mood: 'Printing press, woodcut energy, and the sharp polemical atmosphere of early modern Europe.',
      motif: 'Printed page geometry, woodcut lines, and reforming urgency.',
      texture: 'printed-paper',
      motion: 'press-breath',
      typography: 'polemic'
    },
    bio: [
      'Luther was born in 1483 in Eisleben, Saxony, and entered the Augustinian friary at Erfurt in 1505 after a vow made during a terrifying thunderstorm, against his father\'s wish that he become a lawyer. As a friar he was tormented by scrupulous anxiety (Anfechtung) over his own sinfulness and inability to satisfy what he understood God\'s justice to demand.',
      'Teaching biblical exegesis at the new University of Wittenberg, Luther arrived at a reading of Romans 1:17 ("the righteous shall live by faith") that he experienced as a breakthrough: God\'s righteousness is not a standard by which sinners are condemned but a gift reckoned to those who trust Christ. This "Reformation breakthrough," combined with outrage at the sale of indulgences by Johann Tetzel, led him to post the Ninety-Five Theses in 1517.',
      'What began as an academic challenge to indulgence practice escalated rapidly: Luther was examined at Augsburg (1518) and Leipzig (1519), excommunicated by Pope Leo X (1521), and declared an outlaw at the Diet of Worms (1521), where he refused to recant unless convinced by Scripture or clear reason. Sheltered at Wartburg Castle, he translated the New Testament into German and went on to reshape worship, marriage (he married the former nun Katharina von Bora), and church structure across much of Germany and Scandinavia before his death in 1546.'
    ],
    concepts: ['Justification by Faith Alone', 'Sola Scriptura', 'The Bondage of the Will', 'Law and Gospel', 'The Priesthood of All Believers', 'Two Kingdoms', 'Sacramental Union'],
    opinions: [
      {
        id: 'justification',
        title: 'On Justification',
        thesis: 'The sinner is justified by faith alone (sola fide), through grace alone, on the basis of Christ\'s righteousness reckoned to the believer, not infused merit earned by works.',
        tags: ['Reformation breakthrough', 'Core doctrine'],
        paragraphs: [
          'Luther taught that justification is a forensic declaration — God counts (imputes) the believer righteous for the sake of Christ\'s righteousness, received through faith, rather than a process of becoming actually, inherently righteous through grace-assisted works, as he understood the late medieval theology of his training to teach.',
          'He summarized this with the phrase simul justus et peccator — the Christian is simultaneously righteous (in God\'s reckoning, on account of Christ) and a sinner (in actual condition, still battling sin this side of glory). Good works follow justification as its fruit and evidence, but contribute nothing to earning it.',
          'This was the doctrine Luther considered the article on which the Church stands or falls, and it set him against what he saw as a system of indulgences, merit, and penance that had obscured the gratuitousness of grace.'
        ],
        contrasts: [{ figureId: 'aquinas', topicKey: 'grace', label: "Compare with Aquinas's account of grace and merit" }]
      },
      {
        id: 'free-will',
        title: 'On the Bondage of the Will',
        thesis: 'Fallen human will has no freedom whatsoever with respect to salvation; it is entirely bound to sin until God\'s grace acts upon it.',
        tags: ['De Servo Arbitrio, 1525'],
        paragraphs: [
          'In his treatise The Bondage of the Will, written against Erasmus\'s defense of a modest free will (Diatribe on Free Will), Luther argued that "free will" concerning salvation is an empty phrase: the will is like a beast ridden either by God or by Satan, incapable of choosing its own rider. Where reason and will retain freedom, on his account, is only in matters "below" salvation — everyday civic and household affairs — not in anything bearing on righteousness before God.',
          'He pushed this considerably further than Augustine\'s formal distinction between liberum arbitrium and libertas, denying that any meaningful sense of freedom survives the Fall with respect to spiritual matters, and treating the entire debate as flowing directly from whether grace or human effort ultimately accounts for salvation.',
          'Luther himself regarded this treatise, not any of his more famous writings, as his most important theological work and the one he most wanted preserved.'
        ],
        contrasts: [
          { figureId: 'augustine', topicKey: 'free-will', label: "Compare with Augustine's more qualified account" },
          { figureId: 'pelagius', topicKey: 'free-will', label: "Compare with Pelagius, the position Luther saw revived in Erasmus" }
        ]
      },
      {
        id: 'scripture',
        title: 'On Scripture and Authority',
        thesis: 'Scripture alone (sola scriptura) is the final authority for Christian doctrine, standing above popes and councils, which can and have erred.',
        tags: ['Diet of Worms, 1521'],
        paragraphs: [
          'At the Diet of Worms, pressed to recant, Luther famously replied that his conscience was captive to the Word of God and that he could not act against conscience unless convinced by Scripture or plain reason, since popes and councils had contradicted each other and had themselves erred.',
          'This did not mean Luther rejected tradition wholesale — he read the Fathers, especially Augustine, closely and approvingly — but he subordinated all tradition, conciliar decree, and papal pronouncement to the text of Scripture as the final court of appeal, a principle that became a defining mark of the Reformation.',
          'His German translation of the New Testament (1522), and later the whole Bible, was intended to put this final authority directly into the hands of ordinary believers rather than leaving it mediated exclusively through clergy.'
        ],
        contrasts: []
      },
      {
        id: 'eucharist',
        title: 'On the Eucharist (Sacramental Union)',
        thesis: 'Christ\'s body and blood are truly, physically present "in, with, and under" the bread and wine, though Luther rejected the Scholastic explanation of transubstantiation.',
        tags: ['Marburg Colloquy, 1529']
        ,
        paragraphs: [
          'Luther insisted on the real, bodily presence of Christ in the Eucharist, taking Christ\'s words "this is my body" at face value against reformers like Zwingli who read them symbolically ("this represents my body"). He rejected the accompanying Scholastic apparatus of transubstantiation, however, denying that Aristotelian substance/accident categories were needed or warranted by Scripture to explain how the presence occurs.',
          'His own formulation, sometimes called sacramental union or (misleadingly, to some Lutherans) consubstantiation, held that the body and blood of Christ are present "in, with, and under" the substance of the bread and wine, without the bread ceasing to be bread.',
          'This became an unbridgeable division within the Reformation itself: at the Marburg Colloquy (1529), Luther and Zwingli agreed on nearly every other point of doctrine but could not reach unity on this question, splitting the German and Swiss Reformations into separate confessional traditions.'
        ],
        contrasts: [{ figureId: 'aquinas', topicKey: 'eucharist', label: "Compare with Aquinas's transubstantiation" }]
      }
    ],
    influences: [
      { name: 'Augustine of Hippo', figureId: 'augustine', note: 'As an Augustinian friar, Luther read Augustine\'s anti-Pelagian works closely; they anchored his mature theology of grace.' },
      { name: 'Paul the Apostle', note: 'Romans and Galatians, read through his own experience of guilt and release, were the scriptural core of his theology.' },
      { name: 'Johann von Staupitz', note: 'His Augustinian superior and confessor, who redirected Luther\'s anxious piety toward the mercy of God in Christ.' },
      { name: 'William of Ockham and the via moderna', note: 'The nominalist theology of Luther\'s own university training, which he came to react against sharply.' }
    ],
    influenced: [
      { name: 'John Calvin', note: 'Built a more systematic Reformed theology on foundations Luther had laid, though the two never met and diverged on the Eucharist.' },
      { name: 'The Lutheran confessional tradition', note: "Formalized in documents like the Augsburg Confession (1530) and the Book of Concord (1580)." },
      { name: 'Later Protestant biblical translation projects', note: 'His German Bible became a model for vernacular Scripture translation across Europe.' }
    ],
    opponents: [
      { name: 'Pope Leo X', note: 'Excommunicated Luther in the bull Decet Romanum Pontificem (1521) after the Diet of Worms controversy.' },
      { name: 'Erasmus of Rotterdam', note: 'Their published exchange over free will (Erasmus\'s Diatribe and Luther\'s Bondage of the Will) crystallized the theological divide of the Reformation.' },
      { name: 'Huldrych Zwingli', note: 'Swiss reformer whose symbolic reading of the Eucharist Luther rejected sharply at the Marburg Colloquy.' },
      { name: 'Johann Tetzel', note: 'Dominican preacher of indulgences whose campaign in Saxony was the immediate occasion for the Ninety-Five Theses.' }
    ],
    controversies: [
      { name: 'The Indulgence Controversy', summary: 'Luther\'s Ninety-Five Theses (1517) challenged the sale of indulgences and opened the broader dispute over merit, penance, and grace.' },
      { name: 'The Diet of Worms', summary: "Luther's 1521 refusal to recant before Emperor Charles V resulted in his condemnation as an outlaw of the Empire." },
      { name: 'The Marburg Colloquy', summary: 'A 1529 meeting attempting to unite German and Swiss reformers, which failed specifically over the nature of Christ\'s presence in the Eucharist.' }
    ],
    primarySources: [
      { title: 'Concerning Christian Liberty (On the Freedom of a Christian)', workKey: 'luther-freedom' },
      { title: 'Ninety-Five Theses (1517)' },
      { title: 'To the Christian Nobility of the German Nation (1520)' },
      { title: 'The Babylonian Captivity of the Church (1520)' },
      { title: 'The Freedom of a Christian (1520)' },
      { title: 'The Bondage of the Will (De Servo Arbitrio, 1525)' },
      { title: 'Small and Large Catechisms (1529)' }
    ]
  },


  // ======================================================================
  // IGNATIUS OF ANTIOCH
  // ======================================================================
  ignatius: {
    id: 'ignatius',
    name: 'Ignatius of Antioch',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ignatius_of_Antioch.jpg',
    dates: 'c. 35–c. 107',
    tradition: 'early',
    period: 'Apostolic Fathers',
    roles: ['Bishop of Antioch', 'Apostolic Father', 'Martyr'],
    epithet: 'Bishop of Antioch, Apostolic Father',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Ignatius was bishop of Antioch in Syria in the early second century and is counted among the Apostolic Fathers. Arrested under Trajan, he was taken under guard to Rome for execution and wrote seven letters to churches along the route.',
      'His letters insist on the reality of Christ\'s flesh against docetic denial, urge unity under the local bishop, and treat the Eucharist as the flesh of Christ. He died in the arena at Rome, welcoming martyrdom as conformity to Christ.'
    ],
    concepts: ['Episcopacy', 'Eucharist', 'Martyrdom', 'Unity of the Church', 'Incarnation'],
    opinions: [
      {
        id: 'eucharist',
        title: 'On the Eucharist',
        thesis: 'The Eucharist is the flesh of our Savior Jesus Christ, which suffered for our sins.',
        tags: ['Anti-docetic', 'Epistle to the Smyrnaeans'],
        paragraphs: [
          'Against those who denied that Christ truly suffered in the flesh, Ignatius insisted that the bread of the Eucharist is the flesh of Christ and that participation in it is participation in his passion and resurrection.',
          'This realism about the Incarnation and the sacrament is of a piece with his emphasis on the visible unity of the local church under its bishop.'
        ]
      },
      {
        id: 'episcopacy',
        title: 'On the Bishop',
        thesis: 'Where the bishop is, there let the people be; as where Christ is, there is the catholic Church.',
        tags: ['Church order'],
        paragraphs: [
          'Ignatius presents the bishop as the focus of the local church\'s unity and a visible sign of Christ\'s presence. He urges the faithful to do nothing without the bishop, and to regard the bishop as they would the Lord himself.',
          'This is among the earliest and strongest witnesses to a monepiscopal structure in the second-century churches of Asia Minor and Syria.'
        ]
      }
    ],
    influences: [
      { name: 'The Apostles', note: 'Tradition links him to the Johannine circle' }
    ],
    influenced: [
      { name: 'Later episcopal theology', note: 'Cited throughout patristic and medieval tradition' }
    ],
    opponents: [
      { name: 'Docetists', note: 'Denied the reality of Christ\'s flesh and passion' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Epistle to the Ephesians', workKey: 'ignatius-ephesians' },
      { title: 'Epistle to the Romans', workKey: 'ignatius-romans' },
      { title: 'Epistle to the Smyrnaeans', workKey: 'ignatius-smyrnaeans' },
      { title: 'Seven Genuine Letters' },
      { title: 'Epistle to the Magnesians' },
      { title: 'Epistle to the Trallians' },
      { title: 'Epistle to the Philadelphians' }
    ]
  },

  // ======================================================================
  // POLYCARP OF SMYRNA
  // ======================================================================
  polycarp: {
    id: 'polycarp',
    name: 'Polycarp of Smyrna',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Polycarp_of_Smyrna%2C_Menologion_of_Basil_II.png',
    dates: 'c. 69–c. 155',
    tradition: 'early',
    period: 'Apostolic Fathers',
    roles: ['Bishop of Smyrna', 'Martyr', 'Disciple of John'],
    epithet: 'Bishop of Smyrna, disciple of the Apostle John',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Polycarp was bishop of Smyrna and, according to Irenaeus, a hearer of the Apostle John. His Letter to the Philippians is an early witness to the circulation of Pauline and other New Testament writings.',
      'He was martyred at an advanced age (the Martyrdom of Polycarp places him at eighty-six). The account of his death became a model for later martyr acts.'
    ],
    concepts: ['Martyrdom', 'Apostolic Tradition', 'Orthodoxy', 'Scripture'],
    opinions: [
      {
        id: 'tradition',
        title: 'On Apostolic Tradition',
        thesis: 'The faith received from the apostles is to be guarded and handed on without innovation.',
        tags: ['Apostolic Fathers'],
        paragraphs: [
          'Polycarp\'s surviving letter is pastoral rather than speculative: it exhorts to righteousness, warns against false teachers, and treats the writings of Paul as authoritative scripture.',
          'Irenaeus later appealed to Polycarp as a living link to the apostles when opposing Gnostic claims to secret tradition.'
        ]
      }
    ],
    influences: [
      { name: 'John the Apostle', note: 'According to Irenaeus' }
    ],
    influenced: [
      { name: 'Irenaeus of Lyons', figureId: 'irenaeus', note: 'Claimed Polycarp as teacher' }
    ],
    opponents: [
      { name: 'Marcionites and Gnostics', note: 'Opposed in Asia Minor' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Letter to the Philippians', workKey: 'polycarp-philippians' }
    ]
  },

  // ======================================================================
  // JUSTIN MARTYR
  // ======================================================================
  justin: {
    id: 'justin',
    name: 'Justin Martyr',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Justin_Martyr.jpg',
    dates: 'c. 100–c. 165',
    tradition: 'early',
    period: 'Apologists',
    roles: ['Philosopher', 'Apologist', 'Martyr'],
    epithet: 'Philosopher and Apologist',
    visual: {
      preset: 'augustine'
    },
    bio: [
      'Justin was a pagan philosopher who converted to Christianity after a search through various schools. He taught in Rome and wrote the earliest substantial Christian apologies still extant.',
      'His Dialogue with Trypho engages Jewish objections; the Apologies defend Christians before the Roman authorities. He was martyred under the prefect Rusticus around 165.'
    ],
    concepts: ['Logos', 'Philosophy and Faith', 'Apology', 'Baptism', 'Eucharist'],
    opinions: [
      {
        id: 'logos',
        title: 'On the Logos',
        thesis: 'The divine Logos who became incarnate in Jesus was already present as the spermatic logos in all who lived reasonably.',
        tags: ['Apologetics', 'Logos theology'],
        paragraphs: [
          'Justin identified the pre-existent Word of the Fourth Gospel with the philosophical Logos, arguing that whatever was rightly said among the philosophers belongs to Christians because the Logos is Christ.',
          'This allowed him both to claim the heritage of Greek philosophy and to insist on the uniqueness of the Incarnation.'
        ]
      }
    ],
    influences: [
      { name: 'Plato', note: 'Philosophical formation' },
      { name: 'John the Evangelist', note: 'Logos doctrine' }
    ],
    influenced: [
      { name: 'Later Apologists', note: 'Model of philosophical apology' }
    ],
    opponents: [
      { name: 'Pagan critics of Christianity', note: 'Celsus generation' }
    ],
    controversies: [],
    primarySources: [
      { title: 'First Apology', workKey: 'justin-first-apology' },
      { title: 'Second Apology' },
      { title: 'Dialogue with Trypho' }
    ]
  },

  // ======================================================================
  // IRENAEUS OF LYONS
  // ======================================================================
  irenaeus: {
    id: 'irenaeus',
    name: 'Irenaeus of Lyons',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Irenaeus_of_Lyons.png',
    dates: 'c. 130–c. 202',
    tradition: 'early',
    period: 'Anti-Gnostic Fathers',
    roles: ['Bishop of Lyons', 'Theologian'],
    epithet: 'Bishop of Lyons, opponent of Gnosticism',
    visual: {
      preset: 'augustine'
    },
    bio: [
      'Irenaeus was a native of Asia Minor who became bishop of Lyons in Gaul. His major work, Against Heresies, is the most important second-century response to Gnostic systems.',
      'He articulated the rule of faith, the authority of the four Gospels, and the doctrine of recapitulation — Christ summing up and restoring humanity in himself.'
    ],
    concepts: ['Recapitulation', 'Apostolic Tradition', 'Rule of Faith', 'Incarnation', 'Against Heresies'],
    opinions: [
      {
        id: 'recapitulation',
        title: 'On Recapitulation',
        thesis: 'Christ recapitulates all things in himself, reversing Adam\'s disobedience by his obedience.',
        tags: ['Soteriology', 'Anti-Gnostic'],
        paragraphs: [
          'Irenaeus taught that the Word became man so that humanity might become what the Word is. The history of salvation is a single drama in which the second Adam undoes the first.',
          'This framework undergirds his insistence on the goodness of creation and the bodily reality of the resurrection against Gnostic dualism.'
        ]
      }
    ],
    influences: [
      { name: 'Polycarp of Smyrna', figureId: 'polycarp' },
      { name: 'John the Apostle' }
    ],
    influenced: [
      { name: 'Later Catholic tradition', note: 'Rule of faith and fourfold Gospel' }
    ],
    opponents: [
      { name: 'Valentinians and other Gnostics', note: 'Primary targets of Against Heresies' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Against Heresies — Book I (opening)', workKey: 'irenaeus-heresies' },
      { title: 'Against Heresies (opening)' },
      { title: 'Demonstration of the Apostolic Preaching' }
    ]
  },

  // ======================================================================
  // TERTULLIAN
  // ======================================================================
  tertullian: {
    id: 'tertullian',
    name: 'Tertullian',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tertullian.jpg',
    dates: 'c. 155–c. 220',
    tradition: 'early',
    period: 'Latin Apologists',
    roles: ['Apologist', 'Theologian', 'Montanist (later)'],
    epithet: 'Father of Latin theology',
    visual: {
      preset: 'augustine'
    },
    bio: [
      'Tertullian of Carthage was the first major Latin Christian author. A trained rhetor, he forged much of the vocabulary of Western theology (trinitas, persona, substantia).',
      'In later life he aligned with the Montanist movement. His rigorism and brilliance left a permanent mark on African and Latin Christianity.'
    ],
    concepts: ['Trinity', 'Incarnation', 'Prescription against Heretics', 'Soul', 'Baptism'],
    opinions: [
      {
        id: 'trinity',
        title: 'On the Trinity',
        thesis: 'There is one substance of the Godhead in three persons — Father, Son, and Spirit.',
        tags: ['Against Praxeas'],
        paragraphs: [
          'Against Praxeas and modalist monarchianism, Tertullian argued that the Father, Son, and Spirit are distinct persons (personae) sharing one substance (substantia).',
          'His formulations, though not yet Nicene, supplied the Latin West with its basic Trinitarian grammar.'
        ]
      }
    ],
    influences: [
      { name: 'Scripture and Stoic categories', note: 'Rhetorical and philosophical tools' }
    ],
    influenced: [
      { name: 'Cyprian of Carthage', figureId: 'cyprian' },
      { name: 'Latin Trinitarian theology' }
    ],
    opponents: [
      { name: 'Praxeas / Modalists', note: 'Against Praxeas' }
    ],
    controversies: [],
    primarySources: [
      { title: 'The Prescription Against Heretics', workKey: 'tertullian-prescription' },
      { title: 'Apology', workKey: 'tertullian-apology' },
      { title: 'Against Praxeas' },
      { title: 'On the Flesh of Christ' },
      { title: 'On Baptism' },
      { title: 'Prescription against Heretics' }
    ]
  },

  // ======================================================================
  // ORIGEN OF ALEXANDRIA
  // ======================================================================
  origen: {
    id: 'origen',
    name: 'Origen of Alexandria',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Origen.jpg',
    dates: 'c. 184–c. 253',
    tradition: 'early',
    period: 'Alexandrian School',
    roles: ['Biblical scholar', 'Theologian', 'Teacher'],
    epithet: 'Biblical scholar and speculative theologian',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Origen of Alexandria was the most prolific and influential Christian scholar of the third century. Head of the catechetical school, he produced the Hexapla, vast commentaries, and On First Principles.',
      'Some of his speculative views (pre-existence of souls, eventual restoration of all) were later condemned, but his biblical method and theological ambition shaped East and West for centuries.'
    ],
    concepts: ['Allegory', 'Apokatastasis', 'Pre-existence', 'Free Will', 'Hexapla'],
    opinions: [
      {
        id: 'scripture',
        title: 'On Scripture',
        thesis: 'Scripture has a bodily, a psychic, and a spiritual sense; the letter is the starting point, not the end.',
        tags: ['Hermeneutics'],
        paragraphs: [
          'Origen insisted that every text of Scripture is inspired and useful, and that difficulties in the literal sense invite the reader to a deeper spiritual meaning.',
          'His allegorical method, grounded in a high doctrine of inspiration, became the dominant Christian approach to the Old Testament until the rise of more historical methods.'
        ]
      }
    ],
    influences: [
      { name: 'Clement of Alexandria' },
      { name: 'Platonism' }
    ],
    influenced: [
      { name: 'Gregory of Nyssa', figureId: 'gregory-nyssa' },
      { name: 'Evagrius', note: 'Ascetic Origenism' }
    ],
    opponents: [
      { name: 'Later anti-Origenists', note: 'Condemnations in the sixth century' }
    ],
    controversies: [],
    primarySources: [
      { title: 'On First Principles — Book I', workKey: 'origen-principles' },
      { title: 'Against Celsus — Book I', workKey: 'origen-celsus' },
      { title: 'Commentary on John' }
    ]
  },

  // ======================================================================
  // CYPRIAN OF CARTHAGE
  // ======================================================================
  cyprian: {
    id: 'cyprian',
    name: 'Cyprian of Carthage',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stcyprian.jpg',
    dates: 'c. 200–258',
    tradition: 'early',
    period: 'Latin Fathers',
    roles: ['Bishop of Carthage', 'Martyr'],
    epithet: 'Bishop of Carthage, martyr',
    visual: {
      preset: 'augustine'
    },
    bio: [
      'Cyprian, a wealthy convert, became bishop of Carthage and guided the African church through the Decian persecution and the controversy over the lapsed.',
      'His treatise On the Unity of the Catholic Church and his letters on baptismal discipline were foundational for Western ecclesiology. He was martyred in 258.'
    ],
    concepts: ['Unity of the Church', 'Baptism', 'Episcopacy', 'Lapsed'],
    opinions: [
      {
        id: 'unity',
        title: 'On the Unity of the Church',
        thesis: 'Outside the Church there is no salvation; the episcopate is one, of which each bishop holds a share in solidum.',
        tags: ['Ecclesiology'],
        paragraphs: [
          'Cyprian argued that the Church is one as the sun\'s rays are one light, and that schism from the bishop is schism from the Church itself.',
          'His high view of the local bishop and of the collegial unity of the episcopate shaped later Catholic and Anglican ecclesiology.'
        ]
      }
    ],
    influences: [
      { name: 'Tertullian', figureId: 'tertullian' }
    ],
    influenced: [
      { name: 'Augustine of Hippo', figureId: 'augustine' },
      { name: 'Western canon law' }
    ],
    opponents: [
      { name: 'Novatianists', note: 'Rigorist schism over the lapsed' }
    ],
    controversies: [],
    primarySources: [
      { title: 'On the Unity of the Catholic Church', workKey: 'cyprian-unity' },
      { title: 'On the Lapsed' },
      { title: 'Epistles' }
    ]
  },

  // ======================================================================
  // ATHANASIUS OF ALEXANDRIA
  // ======================================================================
  athanasius: {
    id: 'athanasius',
    name: 'Athanasius of Alexandria',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Athanasius_of_Alexandria.jpg',
    dates: 'c. 296–373',
    tradition: 'early',
    period: 'Nicene Fathers',
    roles: ['Bishop of Alexandria', 'Doctor of the Church', 'Champion of Nicaea'],
    epithet: 'Defender of the Nicene faith against Arianism',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Athanasius attended Nicaea as a deacon and spent his long episcopate defending the Council\'s homoousios against Arian and imperial pressure, enduring multiple exiles.',
      'On the Incarnation is a classic statement of why the Word became flesh. His festal letter of 367 lists the New Testament canon essentially as received today.'
    ],
    concepts: ['Homoousios', 'Incarnation', 'Arian controversy', 'Deification', 'Canon of Scripture'],
    opinions: [
      {
        id: 'incarnation',
        title: 'On the Incarnation',
        thesis: 'The Word became human that we might become divine; only the Creator could restore the corrupted image.',
        tags: ['Nicene', 'Soteriology'],
        paragraphs: [
          'Athanasius argued that death and corruption required a remedy only the Word who made all things could supply — by assuming a body, dying, and rising.',
          'Against Arian subordination, he insisted that only if the Son is true God of true God can he deify those who are joined to him.'
        ]
      }
    ],
    influences: [
      { name: 'Alexander of Alexandria' },
      { name: 'Nicaea 325' }
    ],
    influenced: [
      { name: 'Cappadocian Fathers' },
      { name: 'Cyril of Alexandria', figureId: 'cyril-alex' }
    ],
    opponents: [
      { name: 'Arians', note: 'Principal lifelong opponents' }
    ],
    controversies: [],
    primarySources: [
      { title: 'On the Incarnation of the Word', workKey: 'athanasius-incarnation' },
      { title: 'Life of Antony', workKey: 'athanasius-antony' },
      { title: 'Against the Gentiles' },
      { title: 'Defense Against the Arians' },
      { title: 'On the Decrees of the Synod of Nicaea' },
      { title: 'The Festal Letters' }
    ]
  },

  // ======================================================================
  // BASIL THE GREAT
  // ======================================================================
  basil: {
    id: 'basil',
    name: 'Basil the Great',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Basil_the_Great%2C_father_of_the_church.jpg',
    dates: 'c. 330–379',
    tradition: 'early',
    period: 'Cappadocian Fathers',
    roles: ['Bishop of Caesarea', 'Doctor of the Church', 'Monastic legislator'],
    epithet: 'Cappadocian Father, Bishop of Caesarea',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Basil the Great organized monastic life in Asia Minor, reformed the liturgy, and with the other Cappadocians secured the Nicene faith in the East.',
      'On the Holy Spirit defends the full divinity of the Spirit. His monastic rules shaped Eastern monasticism permanently.'
    ],
    concepts: ['Trinity', 'Holy Spirit', 'Monasticism', 'Social care', 'Liturgy'],
    opinions: [
      {
        id: 'holy-spirit',
        title: 'On the Holy Spirit',
        thesis: 'The Holy Spirit is to be numbered with the Father and the Son, not ranked among creatures.',
        tags: ['Pneumatology', 'Cappadocian'],
        paragraphs: [
          'Writing carefully under political pressure, Basil accumulated scriptural and liturgical evidence that the Spirit shares the divine name, operations, and glory.',
          'His work prepared the way for the explicit confession of the Spirit\'s divinity at Constantinople in 381.'
        ]
      }
    ],
    influences: [
      { name: 'Athanasius', figureId: 'athanasius' },
      { name: 'Origen', figureId: 'origen' }
    ],
    influenced: [
      { name: 'Gregory of Nazianzus', figureId: 'gregory-nazianzen' },
      { name: 'Eastern monasticism' }
    ],
    opponents: [
      { name: 'Pneumatomachi', note: 'Denied the Spirit\'s divinity' }
    ],
    controversies: [],
    primarySources: [
      { title: 'On the Holy Spirit', workKey: 'basil-holy-spirit' },
      { title: 'Hexaemeron' },
      { title: 'Against Eunomius' }
    ]
  },

  // ======================================================================
  // GREGORY OF NAZIANZUS
  // ======================================================================
  'gregory-nazianzen': {
    id: 'gregory-nazianzen',
    name: 'Gregory of Nazianzus',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gregory_the_Theologian_La_Martorana_Palermo_2008-08-27.jpg',
    dates: 'c. 329–390',
    tradition: 'early',
    period: 'Cappadocian Fathers',
    roles: ['Archbishop of Constantinople', 'Theologian', 'Doctor of the Church'],
    epithet: 'The Theologian, Cappadocian Father',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Gregory of Nazianzus, the "Theologian," delivered the Five Theological Orations in Constantinople and briefly presided at the Council of 381.',
      'His preaching on the Trinity and on the full humanity and divinity of Christ became standard Eastern doctrine. He resigned the see and returned to contemplative life.'
    ],
    concepts: ['Trinity', 'Theological Orations', 'Christology', 'Pastoral care'],
    opinions: [
      {
        id: 'trinity',
        title: 'On the Trinity',
        thesis: 'We worship one God in three persons, neither confusing the persons nor dividing the substance.',
        tags: ['Theological Orations'],
        paragraphs: [
          'Gregory\'s orations clarify the distinction of hypostases and the unity of ousia with unmatched rhetorical and theological precision.',
          'He is the source of the famous formula: what is not assumed is not healed — applied to Christology as well as to the full humanity of Christ.'
        ]
      }
    ],
    influences: [
      { name: 'Basil the Great', figureId: 'basil' }
    ],
    influenced: [
      { name: 'Eastern Orthodoxy', note: 'Title "Theologian" shared only with John the Evangelist and Symeon' }
    ],
    opponents: [
      { name: 'Arians and Apollinarians' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Theological Orations' },
      { title: 'Orations' }
    ]
  },

  // ======================================================================
  // GREGORY OF NYSSA
  // ======================================================================
  'gregory-nyssa': {
    id: 'gregory-nyssa',
    name: 'Gregory of Nyssa',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gregory_of_Nyssa.jpg',
    dates: 'c. 335–c. 395',
    tradition: 'early',
    period: 'Cappadocian Fathers',
    roles: ['Bishop of Nyssa', 'Mystic', 'Philosopher'],
    epithet: 'Cappadocian Father, mystical theologian',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'The youngest of the Cappadocian trio, Gregory of Nyssa developed a profound speculative and mystical theology. The Life of Moses and the Homilies on the Song of Songs describe the soul\'s endless ascent into God.',
      'He also wrote against Eunomius and reflected on the image of God, freedom, and the restoration of all things.'
    ],
    concepts: ['Epektasis', 'Image of God', 'Apokatastasis', 'Infinite progress', 'Mysticism'],
    opinions: [
      {
        id: 'epektasis',
        title: 'On Endless Ascent',
        thesis: 'Perfection is not a static attainment but perpetual progress into the infinite God.',
        tags: ['Mysticism', 'Life of Moses'],
        paragraphs: [
          'For Gregory, because God is infinite, the soul\'s desire is never exhausted; each advance opens a further horizon of participation.',
          'This epektasis (stretching forward) became a hallmark of Eastern mystical theology.'
        ]
      }
    ],
    influences: [
      { name: 'Basil the Great', figureId: 'basil' },
      { name: 'Origen', figureId: 'origen' }
    ],
    influenced: [
      { name: 'Maximus the Confessor', figureId: 'maximus' },
      { name: 'Eastern mystical tradition' }
    ],
    opponents: [
      { name: 'Eunomius', note: 'Extreme Arian rationalism' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Life of Moses' },
      { title: 'On the Soul and the Resurrection' },
      { title: 'Against Eunomius' }
    ]
  },

  // ======================================================================
  // JOHN CHRYSOSTOM
  // ======================================================================
  chrysostom: {
    id: 'chrysostom',
    name: 'John Chrysostom',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Byzantinischer_Mosaizist_des_9._Jahrhunderts_003.jpg',
    dates: 'c. 347–407',
    tradition: 'early',
    period: 'Golden Age of Greek Fathers',
    roles: ['Archbishop of Constantinople', 'Doctor of the Church', 'Preacher'],
    epithet: 'Archbishop of Constantinople, “Golden-Mouthed”',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'John Chrysostom ("Golden Mouth") was the greatest preacher of the Greek Church. Educated in Antioch, he was made bishop of Constantinople and clashed with court and clergy over wealth and discipline.',
      'Exiled twice, he died in transit. His homilies on Scripture and the Divine Liturgy that bears his name remain central to Orthodox life.'
    ],
    concepts: ['Preaching', 'Scripture', 'Care for the poor', 'Liturgy', 'Repentance'],
    opinions: [
      {
        id: 'preaching',
        title: 'On Scripture and Preaching',
        thesis: 'The Word of God must be opened to the people in clear, moral, and pastoral exposition.',
        tags: ['Pastoral theology'],
        paragraphs: [
          'Chrysostom\'s homilies combine close attention to the biblical text with searching application to the lives of rich and poor in a great city.',
          'He treated the liturgy and almsgiving as inseparable from hearing the Word.'
        ]
      }
    ],
    influences: [
      { name: 'Diodore of Tarsus', note: 'Antiochene exegesis' }
    ],
    influenced: [
      { name: 'Eastern liturgical and pastoral tradition' }
    ],
    opponents: [
      { name: 'Court of Arcadius / Empress Eudoxia', note: 'Political conflict leading to exile' }
    ],
    controversies: [],
    primarySources: [
      { title: 'On the Priesthood (complete)', workKey: 'chrysostom-priesthood' },
      { title: 'Homilies on Matthew' },
      { title: 'Homilies on John' },
      { title: 'Homilies on Romans' }
    ]
  },

  // ======================================================================
  // AMBROSE OF MILAN
  // ======================================================================
  ambrose: {
    id: 'ambrose',
    name: 'Ambrose of Milan',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/AmbroseOfMilan_%28cropped%29.jpg',
    dates: 'c. 340–397',
    tradition: 'early',
    period: 'Latin Doctors',
    roles: ['Bishop of Milan', 'Doctor of the Church'],
    epithet: 'Bishop of Milan, Doctor of the Church',
    visual: {
      preset: 'augustine'
    },
    bio: [
      'Ambrose, a provincial governor, was elected bishop of Milan while still a catechumen. He defended Nicene orthodoxy, introduced congregational hymnody, and famously confronted Theodosius after the massacre at Thessalonica.',
      'His preaching was decisive in Augustine\'s conversion. His writings on the sacraments and duties of clergy shaped the Latin West.'
    ],
    concepts: ['Church and Empire', 'Sacraments', 'Hymnody', 'Virginity', 'Scripture'],
    opinions: [
      {
        id: 'church-state',
        title: 'On Church and Empire',
        thesis: 'The emperor is within the Church, not above it; the altar is not subject to the palace.',
        tags: ['Political theology'],
        paragraphs: [
          'Ambrose insisted that in matters of faith and moral discipline the bishop judges the emperor, not the reverse — a principle dramatized in the exclusion of Theodosius from communion until public penance.',
          'This stance became a touchstone for later Western debates on spiritual and temporal power.'
        ]
      }
    ],
    influences: [
      { name: 'Greek Fathers', note: 'Read in translation' },
      { name: 'Nicaea' }
    ],
    influenced: [
      { name: 'Augustine of Hippo', figureId: 'augustine' }
    ],
    opponents: [
      { name: 'Arians in Milan', note: 'Conflict over basilicas' }
    ],
    controversies: [],
    primarySources: [
      { title: 'On the Duties of the Clergy (complete)', workKey: 'ambrose-duties' },
      { title: 'On the Duties of the Clergy — Book I' },
      { title: 'On the Holy Spirit' },
      { title: 'On the Mysteries' },
      { title: 'Hexaemeron' }
    ]
  },

  // ======================================================================
  // JEROME
  // ======================================================================
  jerome: {
    id: 'jerome',
    name: 'Jerome',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Jerome_Writing-Caravaggio_(1605-6).jpg',
    dates: 'c. 347–420',
    tradition: 'early',
    period: 'Latin Doctors',
    roles: ['Priest', 'Doctor of the Church', 'Biblical translator'],
    epithet: 'Translator of the Vulgate, Doctor of the Church',
    visual: {
      preset: 'augustine'
    },
    bio: [
      'Jerome, the greatest linguist among the Latin Fathers, produced the Vulgate translation of Scripture from Hebrew and Greek. He lived as an ascetic in Bethlehem and corresponded widely.',
      'Irascible and learned, he defended the Hebrew text against exclusive reliance on the Septuagint and left commentaries that fed medieval exegesis.'
    ],
    concepts: ['Vulgate', 'Hebrew truth', 'Asceticism', 'Scripture', 'Origenism controversy'],
    opinions: [
      {
        id: 'scripture',
        title: 'On the Hebrew Truth',
        thesis: 'The Old Testament is to be translated from the Hebrew; the Church should not be confined to the Greek alone.',
        tags: ['Biblical studies'],
        paragraphs: [
          'Jerome\'s appeal to the hebraica veritas was controversial but decisive for the Latin Bible. His Vulgate became the standard Western text for a millennium.',
          'He also insisted on the value of the original languages for serious theological work.'
        ]
      }
    ],
    influences: [
      { name: 'Origen', figureId: 'origen' },
      { name: 'Hebrew teachers in Palestine' }
    ],
    influenced: [
      { name: 'Medieval Western exegesis' },
      { name: 'Renaissance humanists' }
    ],
    opponents: [
      { name: 'Rufinus', note: 'Origenist controversy' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Lives of Illustrious Men (De Viris Illustribus)', workKey: 'jerome-viris' },
      { title: 'Letters' },
      { title: 'Against Jovinian' }
    ]
  },

  // ======================================================================
  // CYRIL OF ALEXANDRIA
  // ======================================================================
  'cyril-alex': {
    id: 'cyril-alex',
    name: 'Cyril of Alexandria',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Icon_St._Cyril_of_Alexandria.jpg',
    dates: 'c. 376–444',
    tradition: 'early',
    period: 'Christological Controversies',
    roles: ['Patriarch of Alexandria', 'Doctor of the Church'],
    epithet: 'Patriarch of Alexandria, champion of the Theotokos',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Cyril of Alexandria led the opposition to Nestorius at the Council of Ephesus (431) and secured the title Theotokos for Mary as a safeguard of the unity of Christ\'s person.',
      'His Christology, focused on the one incarnate nature (or hypostasis) of the Word, shaped both Chalcedonian and non-Chalcedonian traditions.'
    ],
    concepts: ['Hypostatic union', 'Theotokos', 'One incarnate nature of the Word', 'Nestorian controversy'],
    opinions: [
      {
        id: 'christology',
        title: 'On the Person of Christ',
        thesis: 'The Word of God personally united human nature to himself; Mary is Theotokos because the one born of her is God.',
        tags: ['Ephesus 431'],
        paragraphs: [
          'Against Nestorius\'s perceived division of Christ into two subjects, Cyril insisted that the same Word who is eternal is the subject of the human birth, suffering, and death.',
          'His language of "one nature" after the union was later refined at Chalcedon but remains central to Oriental Orthodox reading of Ephesus.'
        ]
      }
    ],
    influences: [
      { name: 'Athanasius', figureId: 'athanasius' }
    ],
    influenced: [
      { name: 'Chalcedon and Oriental Orthodoxy' }
    ],
    opponents: [
      { name: 'Nestorius', note: 'Patriarch of Constantinople, deposed at Ephesus' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Commentary on John' },
      { title: 'Five Tomes Against Nestorius' }
    ]
  },

  // ======================================================================
  // LEO THE GREAT
  // ======================================================================
  leo: {
    id: 'leo',
    name: 'Leo the Great',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Greek_Fresco_of_Saint_Leo_I_Pope_of_Rome.jpg',
    dates: 'c. 400–461',
    tradition: 'early',
    period: 'Christological Controversies',
    roles: ['Pope', 'Doctor of the Church'],
    epithet: 'Pope, Doctor of the Church',
    visual: {
      preset: 'scholastic'
    },
    bio: [
      'Leo the Great guided the Roman church through the mid-fifth century crises. His Tome to Flavian was received at Chalcedon (451) as a standard of orthodox Christology.',
      'He also negotiated with Attila and Gaiseric, and articulated a strong theology of the Petrine office.'
    ],
    concepts: ['Tome of Leo', 'Two natures', 'Papal authority', 'Chalcedon'],
    opinions: [
      {
        id: 'christology',
        title: 'On the Two Natures',
        thesis: 'Christ is one person in two natures, without confusion or separation; each nature does what is proper to it in communion with the other.',
        tags: ['Chalcedon 451'],
        paragraphs: [
          'The Tome of Leo states that the Word performs the miracles, the flesh undergoes the sufferings, yet there is one and the same Son.',
          'Chalcedon acclaimed it as the faith of Peter and made it a pillar of dyophysite orthodoxy.'
        ]
      }
    ],
    influences: [
      { name: 'Augustine', figureId: 'augustine' },
      { name: 'Western tradition' }
    ],
    influenced: [
      { name: 'Chalcedonian orthodoxy' },
      { name: 'Medieval papal theory' }
    ],
    opponents: [
      { name: 'Eutyches', note: 'Monophysite extreme' },
      { name: 'Nestorianizing Antiochene extremes' }
    ],
    controversies: [],
    primarySources: [
      { title: 'The Tome of Leo (Letter 28 to Flavian)', workKey: 'leo-tome' },
      { title: 'Sermons' },
      { title: 'Letters' }
    ]
  },

  // ======================================================================
  // MAXIMUS THE CONFESSOR
  // ======================================================================
  maximus: {
    id: 'maximus',
    name: 'Maximus the Confessor',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maximus_the_Confessor.jpg',
    dates: 'c. 580–662',
    tradition: 'orthodox',
    period: 'Byzantine Theology',
    roles: ['Monk', 'Confessor', 'Theologian'],
    epithet: 'Monk and theologian of the dyothelite controversy',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Maximus the Confessor was the greatest Byzantine theologian of the seventh century. He suffered mutilation and exile for defending the two wills of Christ against monothelitism.',
      'His Ambigua and Questions to Thalassius weave Christology, cosmology, and asceticism into a vision of the whole creation destined for deification in the Word.'
    ],
    concepts: ['Dyothelitism', 'Logoi', 'Deification', 'Ambigua', 'Cosmic liturgy'],
    opinions: [
      {
        id: 'two-wills',
        title: 'On the Two Wills of Christ',
        thesis: 'Christ has both a divine and a human will; the human will is not opposed to the divine but freely follows it.',
        tags: ['Dyothelitism'],
        paragraphs: [
          'Against the imperial compromise of one will, Maximus argued that a complete human nature includes a natural human will, and that Christ\'s human will is deified without being destroyed.',
          'His confession was vindicated at the Third Council of Constantinople (680–681).'
        ]
      }
    ],
    influences: [
      { name: 'Gregory of Nyssa', figureId: 'gregory-nyssa' },
      { name: 'Ps.-Dionysius' },
      { name: 'Cappadocians' }
    ],
    influenced: [
      { name: 'John of Damascus', figureId: 'damascene' },
      { name: 'Palamas', figureId: 'palamas' }
    ],
    opponents: [
      { name: 'Monothelites', note: 'Imperial and patriarchal policy of one will' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Ambigua' },
      { title: 'Centuries on Love' }
    ]
  },

  // ======================================================================
  // JOHN OF DAMASCUS
  // ======================================================================
  damascene: {
    id: 'damascene',
    name: 'John of Damascus',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ioann_Damaskin_ikona.jpg',
    dates: 'c. 675–749',
    tradition: 'orthodox',
    period: 'Byzantine Theology',
    roles: ['Monk', 'Doctor of the Church', 'Hymnographer'],
    epithet: 'Last of the Greek Church Fathers, hymnographer',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'John of Damascus, writing from the monastery of Mar Saba under Islamic rule, produced the Fountain of Knowledge, whose third part (Exact Exposition of the Orthodox Faith) became the standard handbook of Eastern dogma.',
      'He was the chief theological defender of icons during the first phase of iconoclasm and a major liturgical poet.'
    ],
    concepts: ['Exact Exposition', 'Icons', 'Trinity', 'Incarnation', 'Islam'],
    opinions: [
      {
        id: 'icons',
        title: 'On Holy Images',
        thesis: 'Because the Word became visible, we may make images of him; the honor paid to the image passes to the prototype.',
        tags: ['Iconodule'],
        paragraphs: [
          'John argued that iconoclasm effectively denies the Incarnation. The material world is not to be despised once God has united it to himself in Christ.',
          'His three treatises On the Divine Images supplied the theological basis for the restoration of icons at Nicaea II (787).'
        ]
      }
    ],
    influences: [
      { name: 'Maximus the Confessor', figureId: 'maximus' },
      { name: 'Greek Fathers' }
    ],
    influenced: [
      { name: 'Eastern Orthodoxy', note: 'Standard dogmatic manual' },
      { name: 'Thomas Aquinas', figureId: 'aquinas', note: 'Latin reception' }
    ],
    opponents: [
      { name: 'Iconoclasts', note: 'Byzantine imperial policy' }
    ],
    controversies: [],
    primarySources: [
      { title: 'An Exact Exposition of the Orthodox Faith — Book I', workKey: 'damascene-faith' },
      { title: 'Apologia Against Those Who Decry Holy Images' }
    ]
  },

  // ======================================================================
  // ANSELM OF CANTERBURY
  // ======================================================================
  anselm: {
    id: 'anselm',
    name: 'Anselm of Canterbury',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anselm_of_Canterbury.jpg',
    dates: '1033–1109',
    tradition: 'catholic',
    period: 'Early Scholasticism',
    roles: ['Archbishop of Canterbury', 'Doctor of the Church'],
    epithet: 'Father of Scholasticism, ontological argument',
    visual: {
      preset: 'scholastic'
    },
    bio: [
      'Anselm of Canterbury, a monk of Bec before his elevation, is often called the father of scholasticism. His motto fides quaerens intellectum frames the Proslogion and Cur Deus Homo.',
      'He developed the satisfaction theory of the atonement and the famous ontological argument for God\'s existence.'
    ],
    concepts: ['Ontological argument', 'Satisfaction', 'Faith seeking understanding', 'Trinity'],
    opinions: [
      {
        id: 'atonement',
        title: 'On Why God Became Man',
        thesis: 'Only a God-man could make satisfaction for sin: humanity owes the debt, but only God can pay it.',
        tags: ['Cur Deus Homo'],
        paragraphs: [
          'In Cur Deus Homo Anselm rejects a simple ransom-to-the-devil model and argues that divine justice requires a satisfaction proportionate to the offense of sin against God.',
          'This satisfaction theory deeply shaped later Western soteriology, including both Catholic and Protestant accounts.'
        ]
      }
    ],
    influences: [
      { name: 'Augustine', figureId: 'augustine' },
      { name: 'Benedictine tradition' }
    ],
    influenced: [
      { name: 'Thomas Aquinas', figureId: 'aquinas' },
      { name: 'Later medieval and Reformation soteriology' }
    ],
    opponents: [
      { name: 'Roscelin', note: 'Trinitarian controversy' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Proslogion', workKey: 'anselm-proslogion' },
      { title: 'Cur Deus Homo (Why God Became Man)', workKey: 'anselm-cur-deus-homo' },
      { title: 'Monologion' },
      { title: 'Why God Became Man' },
      { title: 'Reply to Gaunilo' }
    ]
  },

  // ======================================================================
  // BONAVENTURE
  // ======================================================================
  bonaventure: {
    id: 'bonaventure',
    name: 'Bonaventure',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Giovanni_Antonio_Pordenone_%281483-1484-1539%29_-_Saint_Bonaventure_-_NG4038_-_National_Gallery.jpg',
    dates: 'c. 1217–1274',
    tradition: 'catholic',
    period: 'High Scholasticism',
    roles: ['Franciscan Minister General', 'Cardinal', 'Doctor of the Church'],
    epithet: 'Seraphic Doctor, Franciscan theologian',
    visual: {
      preset: 'scholastic'
    },
    bio: [
      'Bonaventure, the "Seraphic Doctor," led the Franciscan order and wrote a theology in which Christ is the center of all knowledge and the soul\'s journey into God.',
      'The Journey of the Mind into God and his commentary on the Sentences offer a more Augustinian and mystical alternative to the Aristotelianism of his contemporary Aquinas.'
    ],
    concepts: ['Itinerarium', 'Exemplarism', 'Christ the center', 'Illumination', 'Franciscan theology'],
    opinions: [
      {
        id: 'ascent',
        title: 'On the Journey into God',
        thesis: 'The mind rises to God through vestiges in the world, the image in the soul, and the light of grace — with Christ as the door.',
        tags: ['Franciscan', 'Mystical theology'],
        paragraphs: [
          'Bonaventure\'s itinerary moves from the outer world to the inner self to the divine above, always through the crucified Christ.',
          'His exemplarism sees all creatures as expressions of the eternal Word.'
        ]
      }
    ],
    influences: [
      { name: 'Augustine', figureId: 'augustine' },
      { name: 'Francis of Assisi' },
      { name: 'Anselm', figureId: 'anselm' }
    ],
    influenced: [
      { name: 'Franciscan school' },
      { name: 'Later mystical writers' }
    ],
    opponents: [],
    controversies: [],
    primarySources: [
      { title: 'Journey of the Mind into God' },
      { title: 'Breviloquium' }
    ]
  },

  // ======================================================================
  // TERESA OF ÁVILA
  // ======================================================================
  teresa: {
    id: 'teresa',
    name: 'Teresa of Ávila',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Peter_Paul_Rubens_138.jpg',
    dates: '1515–1582',
    tradition: 'catholic',
    period: 'Catholic Reformation / Carmelite reform',
    roles: ['Carmelite reformer', 'Mystic', 'Doctor of the Church'],
    epithet: 'Carmelite mystic, Doctor of the Church',
    visual: {
      preset: 'scholastic'
    },
    bio: [
      'Teresa of Ávila reformed the Carmelite order and wrote some of the classic texts of Christian mysticism: the Life, the Way of Perfection, and the Interior Castle.',
      'Declared the first female Doctor of the Church in 1970, she combines practical governance with a detailed phenomenology of prayer.'
    ],
    concepts: ['Interior Castle', 'Prayer', 'Mystical marriage', 'Reform', 'Spiritual growth'],
    opinions: [
      {
        id: 'prayer',
        title: 'On the Degrees of Prayer',
        thesis: 'The soul progresses through stages of prayer — from vocal prayer to the prayer of union — as God draws it into the interior castle.',
        tags: ['Mysticism', 'Carmelite'],
        paragraphs: [
          'Teresa describes the mansions of the soul with psychological acuity and theological sobriety, warning against both presumption and despair.',
          'Her teaching became a standard map of contemplative life in the Catholic tradition.'
        ]
      }
    ],
    influences: [
      { name: 'Augustine', figureId: 'augustine' },
      { name: 'Franciscan and Carmelite sources' }
    ],
    influenced: [
      { name: 'John of the Cross', figureId: 'john-cross' },
      { name: 'Catholic spiritual theology' }
    ],
    opponents: [],
    controversies: [],
    primarySources: [
      { title: 'The Life' },
      { title: 'Interior Castle' },
      { title: 'Way of Perfection' }
    ]
  },

  // ======================================================================
  // JOHN OF THE CROSS
  // ======================================================================
  'john-cross': {
    id: 'john-cross',
    name: 'John of the Cross',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arnold_van_Westerhout_-_Portrait_of_John_of_the_Cross.jpeg',
    dates: '1542–1591',
    tradition: 'catholic',
    period: 'Catholic Reformation / Carmelite reform',
    roles: ['Carmelite', 'Mystic', 'Doctor of the Church'],
    epithet: 'Carmelite mystic, Doctor of the Church',
    visual: {
      preset: 'scholastic'
    },
    bio: [
      'John of the Cross, collaborator with Teresa in the Carmelite reform, is the poet-theologian of the dark night of the soul and the ascent to union with God through detachment.',
      'His major works — Ascent of Mount Carmel, Dark Night, Spiritual Canticle, Living Flame of Love — remain central to Catholic mystical theology.'
    ],
    concepts: ['Dark Night', 'Ascent of Mount Carmel', 'Union with God', 'Nothingness', 'Poetry'],
    opinions: [
      {
        id: 'dark-night',
        title: 'On the Dark Night',
        thesis: 'God purifies the soul by stripping it of its attachments and even of its consolations, leading it through darkness into transforming union.',
        tags: ['Mysticism', 'Carmelite'],
        paragraphs: [
          'John distinguishes the night of sense and the night of spirit, both active and passive. The goal is pure love and the transformation of the soul into the likeness of God.',
          'His stark path of nada (nothing) is the complement to Teresa\'s more affective descriptions.'
        ]
      }
    ],
    influences: [
      { name: 'Teresa of Ávila', figureId: 'teresa' },
      { name: 'Pseudo-Dionysius' },
      { name: 'Scholastic sources' }
    ],
    influenced: [
      { name: 'Catholic and ecumenical mystical theology' }
    ],
    opponents: [],
    controversies: [],
    primarySources: [
      { title: 'Dark Night of the Soul' },
      { title: 'Ascent of Mount Carmel' },
      { title: 'Spiritual Canticle' }
    ]
  },

  // ======================================================================
  // JOHN HENRY NEWMAN
  // ======================================================================
  newman: {
    id: 'newman',
    name: 'John Henry Newman',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/John_Henry_Newman_by_Sir_John_Everett_Millais%2C_1st_Bt.jpg',
    dates: '1801–1890',
    tradition: 'catholic',
    period: 'Modern Catholic / Oxford Movement',
    roles: ['Cardinal', 'Theologian', 'Convert'],
    epithet: 'Cardinal, theorist of the development of doctrine',
    visual: {
      preset: 'scholastic'
    },
    bio: [
      'John Henry Newman led the Oxford Movement in the Church of England before converting to Rome in 1845. His Essay on the Development of Christian Doctrine and Grammar of Assent remain landmarks.',
      'Created cardinal by Leo XIII, he was canonized in 2019. His vision of a liberal education shaped The Idea of a University.'
    ],
    concepts: ['Development of doctrine', 'Assent', 'Conscience', 'University', 'Via media'],
    opinions: [
      {
        id: 'development',
        title: 'On Development of Doctrine',
        thesis: 'Authentic Christian doctrine develops over time according to recognizable notes; change is not always corruption.',
        tags: ['Ecclesiology', 'Doctrine'],
        paragraphs: [
          'Newman argued that the later teachings of the Church can be legitimate developments of the apostolic deposit, tested by criteria such as preservation of type, continuity of principles, and chronic vigor.',
          'The Essay both justified his conversion and supplied modern Catholicism with a sophisticated theory of tradition.'
        ]
      }
    ],
    influences: [
      { name: 'Church Fathers' },
      { name: 'Anglican divines' }
    ],
    influenced: [
      { name: 'Second Vatican Council era theology' },
      { name: 'Modern Catholic thought' }
    ],
    opponents: [
      { name: 'Liberal Protestantism and ultramontane extremes', note: 'Critiqued both' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Apologia pro Vita Sua', workKey: 'newman-apologia' },
      { title: 'Essay on the Development of Christian Doctrine' },
      { title: 'Grammar of Assent' }
    ]
  },

  // ======================================================================
  // GREGORY PALAMAS
  // ======================================================================
  palamas: {
    id: 'palamas',
    name: 'Gregory Palamas',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gregor_Palamas_by_North_Greece_anonym_%2815th_c.%2C_Pushkin_museum%29.jpg',
    dates: '1296–1359',
    tradition: 'orthodox',
    period: 'Byzantine Hesychasm',
    roles: ['Archbishop of Thessalonica', 'Hesychast theologian'],
    epithet: 'Archbishop of Thessaloniki, essence–energies distinction',
    visual: {
      preset: 'byzantine'
    },
    bio: [
      'Gregory Palamas defended the hesychast monks of Mount Athos against Barlaam of Calabria, articulating the distinction between God\'s unknowable essence and his uncreated energies.',
      'His theology was affirmed by councils in Constantinople (1341–1351) and remains foundational for Orthodox spirituality.'
    ],
    concepts: ['Essence-energies', 'Hesychasm', 'Uncreated light', 'Theosis', 'Prayer of the heart'],
    opinions: [
      {
        id: 'energies',
        title: 'On the Divine Energies',
        thesis: 'We truly participate in God through his uncreated energies, while his essence remains incommunicable.',
        tags: ['Hesychasm', 'Theosis'],
        paragraphs: [
          'Palamas held that the light of Tabor and the grace experienced in hesychastic prayer are not created effects but God himself as he comes toward creatures.',
          'This allowed him to affirm real deification without collapsing the Creator-creature distinction.'
        ]
      }
    ],
    influences: [
      { name: 'Maximus the Confessor', figureId: 'maximus' },
      { name: 'Ps.-Dionysius' },
      { name: 'Athonite tradition' }
    ],
    influenced: [
      { name: 'Eastern Orthodox theology and spirituality' }
    ],
    opponents: [
      { name: 'Barlaam of Calabria', note: 'Rationalist critic of hesychasm' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Triads' }
    ]
  },

  // ======================================================================
  // JOHN CALVIN
  // ======================================================================
  calvin: {
    id: 'calvin',
    name: 'John Calvin',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/John_Calvin_11.jpg',
    dates: '1509–1564',
    tradition: 'protestant',
    period: 'Reformation',
    roles: ['Reformer', 'Pastor', 'Theologian'],
    epithet: 'Reformer of Geneva, author of the Institutes',
    visual: {
      preset: 'reformation'
    },
    bio: [
      'John Calvin, a French exile in Geneva, produced the Institutes of the Christian Religion and shaped Reformed Protestantism through preaching, church order, and international correspondence.',
      'His theology centers on the glory and sovereignty of God, the authority of Scripture, and a disciplined, Word-centered church life.'
    ],
    concepts: ['Institutes', 'Sovereignty of God', 'Predestination', 'Word and Sacrament', 'Church discipline'],
    opinions: [
      {
        id: 'predestination',
        title: 'On Predestination',
        thesis: 'Eternal election and reprobation rest in God\'s sovereign will; salvation is entirely of grace.',
        tags: ['Reformed', 'Institutes'],
        paragraphs: [
          'Calvin treated predestination as a doctrine of comfort for believers and a safeguard of sola gratia, while warning against curious speculation.',
          'Double predestination became a hallmark of later Reformed orthodoxy, though Calvin himself placed it within a broader pastoral Institutes.'
        ]
      }
    ],
    influences: [
      { name: 'Augustine', figureId: 'augustine' },
      { name: 'Luther', figureId: 'luther' },
      { name: 'Bucer' }
    ],
    influenced: [
      { name: 'Reformed tradition worldwide' },
      { name: 'Puritanism' }
    ],
    opponents: [
      { name: 'Catholic opponents' },
      { name: 'Libertines in Geneva' },
      { name: 'Arminian later critics' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Institutes of the Christian Religion — Book I (opening)', workKey: 'calvin-institutes-1' },
      { title: 'Commentaries' }
    ]
  },

  // ======================================================================
  // PHILIP MELANCHTHON
  // ======================================================================
  melanchthon: {
    id: 'melanchthon',
    name: 'Philip Melanchthon',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Philipp_Melanchthon_2.jpg',
    dates: '1497–1560',
    tradition: 'protestant',
    period: 'Reformation',
    roles: ['Reformer', 'Humanist', 'Confessing theologian'],
    epithet: 'Praeceptor Germaniae, Augsburg Confession',
    visual: {
      preset: 'reformation'
    },
    bio: [
      'Philip Melanchthon, Luther\'s colleague at Wittenberg, was the primary author of the Augsburg Confession (1530) and the first Protestant systematic theologian (Loci Communes).',
      'A humanist by training, he sought clarity, irenicism, and educational reform, sometimes clashing with stricter Lutherans over free will and adiaphora.'
    ],
    concepts: ['Augsburg Confession', 'Loci Communes', 'Forensic justification', 'Adiaphora', 'Education'],
    opinions: [
      {
        id: 'justification',
        title: 'On Justification',
        thesis: 'We are justified by faith alone, accounted righteous for the sake of Christ, not by inherent merit.',
        tags: ['Augsburg Confession'],
        paragraphs: [
          'Melanchthon\'s forensic emphasis on justification as declaration shaped Lutheran confessional identity in the Augsburg Confession and Apology.',
          'His later softening on free will and cooperation drew criticism from Gnesio-Lutherans.'
        ]
      }
    ],
    influences: [
      { name: 'Luther', figureId: 'luther' },
      { name: 'Erasmus', note: 'Humanist methods' }
    ],
    influenced: [
      { name: 'Lutheran confessions' },
      { name: 'Protestant education' }
    ],
    opponents: [
      { name: 'Catholic controversialists' },
      { name: 'Gnesio-Lutherans on some points' }
    ],
    controversies: [],
    primarySources: [
      { title: 'The Augsburg Confession', workKey: 'melanchthon-augsburg' },
      { title: 'Loci Communes' }
    ]
  },

  // ======================================================================
  // RICHARD HOOKER
  // ======================================================================
  hooker: {
    id: 'hooker',
    name: 'Richard Hooker',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wenceslas_Hollar_-_Richard_Hooker_%28State_1%29.jpg',
    dates: '1554–1600',
    tradition: 'protestant',
    period: 'English Reformation / Elizabethan',
    roles: ['Priest', 'Theologian of the via media'],
    epithet: 'Anglican divine, Of the Laws of Ecclesiastical Polity',
    visual: {
      preset: 'reformation'
    },
    bio: [
      'Richard Hooker defended the Elizabethan settlement against Puritan critics in his Laws of Ecclesiastical Polity, arguing for the rightful place of reason and church tradition alongside Scripture.',
      'He is often regarded as the founding theologian of classical Anglicanism.'
    ],
    concepts: ['Laws of Ecclesiastical Polity', 'Reason', 'Tradition', 'Scripture', 'Anglicanism'],
    opinions: [
      {
        id: 'authority',
        title: 'On Scripture, Reason, and Tradition',
        thesis: 'Scripture is supreme in matters of salvation, but reason and the church\'s law rightly order things not expressly commanded.',
        tags: ['Ecclesiastical Polity'],
        paragraphs: [
          'Hooker rejected both a Roman claim that tradition stands equal to Scripture and a Puritan claim that nothing may be done without explicit biblical warrant.',
          'His threefold cord of Scripture, reason, and tradition became a characteristic Anglican method.'
        ]
      }
    ],
    influences: [
      { name: 'Aristotle' },
      { name: 'Thomas Aquinas', figureId: 'aquinas' },
      { name: 'Reformed thought' }
    ],
    influenced: [
      { name: 'Anglican theology' },
      { name: 'Later via media thinkers' }
    ],
    opponents: [
      { name: 'Elizabethan Puritans', note: 'Presbyterian discipline advocates' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Of the Laws of Ecclesiastical Polity' }
    ]
  },

  // ======================================================================
  // JONATHAN EDWARDS
  // ======================================================================
  edwards: {
    id: 'edwards',
    name: 'Jonathan Edwards',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jonathan_Edwards.jpg',
    dates: '1703–1758',
    tradition: 'protestant',
    period: 'American Awakening',
    roles: ['Pastor', 'Theologian', 'Philosopher'],
    epithet: 'Puritan theologian of the Great Awakening',
    visual: {
      preset: 'reformation'
    },
    bio: [
      'Jonathan Edwards was the leading theologian of the First Great Awakening and America\'s most important philosophical theologian. He pastored in Northampton and later served the Stockbridge mission.',
      'His treatises on the will, original sin, and religious affections combine Calvinist doctrine with a metaphysics of beauty and consent to being.'
    ],
    concepts: ['Religious affections', 'Original sin', 'Freedom of the will', 'Beauty of God', 'Revival'],
    opinions: [
      {
        id: 'affections',
        title: 'On Religious Affections',
        thesis: 'True religion consists much in holy affections; not all religious emotion is gracious, but grace always engages the heart.',
        tags: ['Awakening', 'Spiritual theology'],
        paragraphs: [
          'Edwards carefully distinguished between counterfeit and genuine spiritual experience, offering signs of gracious affections rooted in the sense of divine excellency.',
          'The work remains a classic of evangelical spiritual theology.'
        ]
      }
    ],
    influences: [
      { name: 'Calvin', figureId: 'calvin' },
      { name: 'Puritan divinity' },
      { name: 'Locke (critically)' }
    ],
    influenced: [
      { name: 'American evangelicalism' },
      { name: 'Reformed theology' }
    ],
    opponents: [
      { name: 'Arminian and "Old Light" critics of revival' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Selected Sermons', workKey: 'edwards-sermons' },
      { title: 'Religious Affections' },
      { title: 'Freedom of the Will' }
    ]
  },

  // ======================================================================
  // JOHN WESLEY
  // ======================================================================
  wesley: {
    id: 'wesley',
    name: 'John Wesley',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/John_Wesley_by_George_Romney.jpg',
    dates: '1703–1791',
    tradition: 'protestant',
    period: 'Evangelical Revival',
    roles: ['Anglican priest', 'Evangelist', 'Founder of Methodism'],
    epithet: 'Founder of Methodism',
    visual: {
      preset: 'reformation'
    },
    bio: [
      'John Wesley, an Anglican priest, led the eighteenth-century evangelical revival that became Methodism. His Aldersgate experience (1738) and subsequent field preaching reshaped English religion.',
      'He taught prevenient grace, justification by faith, and the possibility of Christian perfection (perfect love) in this life.'
    ],
    concepts: ['Prevenient grace', 'Christian perfection', 'Aldersgate', 'Method', 'Arminian evangelicalism'],
    opinions: [
      {
        id: 'perfection',
        title: 'On Christian Perfection',
        thesis: 'By grace, believers may be made perfect in love in this life — not free from weakness, but free from willful sin.',
        tags: ['Holiness', 'Methodist'],
        paragraphs: [
          'Wesley defined perfection as loving God with all the heart and neighbor as oneself, a gift of the Spirit rather than a human achievement.',
          'This optimistic holiness teaching, combined with an Arminian view of grace, distinguished Methodism within the broader evangelical movement.'
        ]
      }
    ],
    influences: [
      { name: 'Anglican divinity' },
      { name: 'Moravians' },
      { name: 'Patristic and Catholic spiritual writers' }
    ],
    influenced: [
      { name: 'Methodism and Holiness movements' },
      { name: 'Global evangelicalism' }
    ],
    opponents: [
      { name: 'Strict Calvinists', note: 'Debate on predestination' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Sermons' },
      { title: 'A Plain Account of Christian Perfection' },
      { title: 'Explanatory Notes on the New Testament' }
    ]
  },

  // ======================================================================
  // CHARLES SPURGEON
  // ======================================================================
  spurgeon: {
    id: 'spurgeon',
    name: 'Charles Spurgeon',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Charles_Haddon_Spurgeon_by_Alexander_Melville.jpg',
    dates: '1834–1892',
    tradition: 'protestant',
    period: 'Victorian evangelicalism',
    roles: ['Baptist preacher', 'Pastor'],
    epithet: 'The “Prince of Preachers,” Baptist pastor',
    visual: {
      preset: 'reformation'
    },
    bio: [
      'Charles Haddon Spurgeon, the "Prince of Preachers," drew thousands to the Metropolitan Tabernacle in London and left a vast body of sermons, a magazine, and a pastors\' college.',
      'A Calvinistic Baptist, he defended evangelical orthodoxy in the Downgrade Controversy and combined warm evangelism with Reformed doctrine.'
    ],
    concepts: ['Preaching', 'Calvinistic Baptist', 'Conversion', 'Scripture', 'Pastoral care'],
    opinions: [
      {
        id: 'preaching',
        title: 'On Preaching Christ',
        thesis: 'The preacher\'s task is to proclaim Christ crucified from all the Scriptures, aiming at conversion and the building up of the saints.',
        tags: ['Pastoral theology'],
        paragraphs: [
          'Spurgeon\'s sermons are marked by vivid illustration, doctrinal clarity, and urgent appeal. He treated the whole Bible as a witness to Christ.',
          'His model of pastoral preaching influenced English-speaking evangelicalism for generations.'
        ]
      }
    ],
    influences: [
      { name: 'Puritans' },
      { name: 'Calvin', figureId: 'calvin' },
      { name: 'Baptist tradition' }
    ],
    influenced: [
      { name: 'Evangelical preaching' }
    ],
    opponents: [
      { name: 'Theological modernism', note: 'Downgrade Controversy' }
    ],
    controversies: [],
    primarySources: [
      { title: 'Treasury of David' },
      { title: 'Sermons' },
      { title: 'Lectures to My Students' }
    ]
  },
  // ======================================================================
  // ALEXANDER SCHMEMANN
  // ======================================================================
  schmemann: {
    id: 'schmemann',
    name: 'Alexander Schmemann',
    portrait: null,
    dates: '1921–1983',
    tradition: 'orthodox',
    period: 'Modern Orthodoxy',
    roles: ['Priest', 'Liturgical theologian', 'Dean'],
    epithet: 'Leading Orthodox liturgical theologian of the twentieth century',
    visual: { preset: 'byzantine' },
    bio: [
      'Alexander Schmemann was a leading Orthodox liturgical theologian of the twentieth century, long associated with St. Vladimir\'s Seminary in New York.',
      'For the Life of the World and his journals articulate a vision of the Eucharist as the sacrament of the kingdom and a critique of both secularism and religious reductionism.'
    ],
    concepts: ['Liturgical theology', 'Sacrament of the world', 'Secularism', 'Eucharist', 'Mission'],
    opinions: [
      {
        id: 'liturgy',
        title: 'On Liturgical Theology',
        thesis: 'The liturgy is not one department of theology but the living source from which theology and mission flow.',
        tags: ['Liturgical theology'],
        paragraphs: [
          'Schmemann argued that the Church\'s lex orandi is the primary theology, and that recovery of the eschatological and cosmic dimensions of the Eucharist is essential for Christian life in a secular age.',
          'His work influenced Orthodox and ecumenical liturgical renewal.'
        ]
      }
    ],
    influences: [
      { name: 'Church Fathers', note: 'Patristic liturgical vision' },
      { name: 'Russian émigré theology', note: 'Paris school' }
    ],
    influenced: [
      { name: 'Contemporary Orthodox theology', note: 'Liturgical renewal' }
    ],
    opponents: [],
    controversies: [],
    primarySources: [
      { title: 'For the Life of the World' },
      { title: 'The Eucharist: Sacrament of the Kingdom' },
      { title: 'Of Water and the Spirit' },
      { title: 'The Journals of Father Alexander Schmemann' }
    ]
  },

};

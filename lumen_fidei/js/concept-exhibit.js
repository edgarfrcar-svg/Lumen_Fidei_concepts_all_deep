/**
 * Encyclopedia-style concept exhibit renderer.
 * Grace is the model; future concepts can set exhibit: true with the same shape.
 */
(function (global) {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function figLink(id, name) {
    if (!id) return "<span>" + esc(name) + "</span>";
    return '<a href="figures/profile.html?id=' + encodeURIComponent(id) + '">' + esc(name) + "</a>";
  }

  /** Full Grace exhibit data — four traditions, not three. */
  var GRACE_EXHIBIT = {
    id: "grace",
    domain: "Salvation",
    title: "Grace",
    centralQuestion: "How does God save a human being who cannot save himself?",
    questionQuote: "If salvation is entirely God’s gift, what role remains for human freedom?",
    questionNote: "The controversy is not whether grace is necessary. All four traditions affirm that it is. The deeper questions concern how grace acts, how the will responds, and how justification, sanctification, election, and perseverance belong together.",
    glanceTitle: "Grace at a Glance",
    definition:
      "Grace is the free and unmerited action and gift of God by which human beings are called, forgiven, healed, justified, sanctified, and brought into communion with Him.",
    lead:
      "Catholic, Eastern Orthodox, Lutheran, and Reformed Christians all affirm that fallen humanity cannot save itself and that salvation begins with God’s free gift. They diverge over how grace relates to the human will, whether and how grace transforms the person, whether justifying grace is primarily forensic or also interior, whether grace can be resisted, and how election and perseverance belong to the economy of salvation.",
    deeperQuestions: [
      "Does grace merely forgive, or does it transform?",
      "How does grace affect the human will?",
      "Can grace be resisted?",
      "Does the human person cooperate with grace?",
      "Is justification primarily forensic, transformative, or both?",
      "How are grace and predestination related?",
      "How does grace lead to final perseverance?"
    ],
    glance: {
      columns: [
        { key: "catholic", label: "Catholic", anchor: "trad-catholic" },
        { key: "orthodox", label: "Eastern Orthodox", anchor: "trad-orthodox" },
        { key: "lutheran", label: "Lutheran", anchor: "trad-lutheran" },
        { key: "reformed", label: "Reformed", anchor: "trad-reformed" }
      ],
      rows: [
        {
          label: "Understanding of grace",
          cells: {
            catholic: "Grace heals and elevates human nature.",
            orthodox: "Grace brings the person into participation in the divine life.",
            lutheran: "Grace is God’s free mercy in Christ, given through the Gospel.",
            reformed: "Grace is God’s sovereign and efficacious work in salvation."
          }
        },
        {
          label: "Human response",
          cells: {
            catholic: "Cooperation with grace is real and itself grace-enabled.",
            orthodox: "Synergy: the person freely responds within God’s initiating action.",
            lutheran: "In conversion the sinner is passive; faith receives what God gives.",
            reformed: "The regenerated will responds freely; regeneration precedes faith."
          }
        },
        {
          label: "Relationship to free will",
          cells: {
            catholic: "Will remains after the Fall, but wounded; healed by grace.",
            orthodox: "Freedom belongs to the image of God; impaired, not erased.",
            lutheran: "The bound will cannot turn to God until the Spirit works through the Word.",
            reformed: "Total inability apart from regenerating grace; then free response."
          }
        },
        {
          label: "Can grace be resisted?",
          cells: {
            catholic: "Actual graces may be resisted; final perseverance is gift.",
            orthodox: "God does not compel; refusal remains possible.",
            lutheran: "Grace is resistible; the Spirit can be rejected.",
            reformed: "Effectual calling is not successfully resisted by the elect."
          }
        },
        {
          label: "Relationship to justification",
          cells: {
            catholic: "Justification is forgiveness and interior renewal by sanctifying grace.",
            orthodox: "Righteousness is life in communion; healing and theosis, not a bare verdict.",
            lutheran: "Justification is forensic: Christ’s righteousness received by faith.",
            reformed: "Justification is forensic, grounded in union with Christ; distinct from sanctification."
          }
        },
        {
          label: "Relationship to sanctification",
          cells: {
            catholic: "Sanctifying grace begins a real growth in holiness and charity.",
            orthodox: "The whole path is deification—participation in divine life.",
            lutheran: "New life of faith and works follows justification; simul justus et peccator.",
            reformed: "Sanctification necessarily follows; holiness is fruit of union with Christ."
          }
        },
        {
          label: "Relationship to election",
          cells: {
            catholic: "God predestines to life; does not positively predestine to evil.",
            orthodox: "Foreknowledge and call without a decree that cancels synergy.",
            lutheran: "Election to salvation affirmed; reprobation treated with restraint.",
            reformed: "Unconditional election and effectual grace for the elect; perseverance."
          }
        }
      ]
    },
    traditions: [
      {
        id: "trad-catholic",
        key: "catholic",
        name: "Catholic",
        subtitle: "Grace heals and elevates nature.",
        account: [
          "In Catholic teaching, grace is not a wage God owes to unaided human effort. It is God’s free gift, ordered to a supernatural end that exceeds the powers of nature. The tradition distinguishes actual graces—particular helps that illuminate the mind and move the will—from sanctifying (habitual) grace, a stable gift by which the soul is made a partaker of the divine nature, justified, and capable of acts of faith, hope, and charity that are truly meritorious as fruits of Christ living in the believer.",
          "Justification is understood as both the forgiveness of sins and the interior renewal of the person. Faith is the beginning, foundation, and root of justification, yet living faith is formed by charity. The sacraments are ordinary instruments of grace: baptism confers the life of grace; the Eucharist and penance restore and deepen it. Merit is always secondary and dependent: no one places God in debt; whatever is rewarded was first given.",
          "Prevenient and assisting graces confront the fallen will. Cooperation is real, but it is not an independent contribution alongside grace; the will’s yes is itself enabled. Final perseverance remains a gift to be prayed for, not a possession that makes further grace unnecessary."
        ],
        argument:
          "Catholic theology reasons from the unity of creation and redemption: the same God who made human freedom does not save by abolishing it, nor by treating grace as a mere external declaration that leaves the person unchanged. If the end is supernatural communion, nature must be elevated, not only acquitted. Scripture’s language of new birth, adoption, and participation in the divine nature is read as real transformation. Against Pelagian self-salvation, grace is absolutely prior; against a purely extrinsic account, grace is also interior and sacramental.",
        objection:
          "Classical Lutheran and Reformed critics argue that an infused, habitual grace and talk of merit reintroduce human contribution into the ground of acceptance with God. If cooperation and growth in justice belong to justification itself, the conscience cannot rest on Christ’s finished work alone. ‘Faith formed by charity,’ they contend, turns faith into a work and obscures the freeness of the Gospel.",
        response:
          "Catholic replies distinguish the cause of justification from its fruit. Nothing preceding grace earns the first justification; works done in grace are gifts of God in us, not rival currencies. Merit language is meant to protect the reality of secondary causality under grace, not to make God a debtor. The forensic dimension of forgiveness is not denied; it is held together with regeneration and the indwelling Spirit. Whether that synthesis succeeds is the heart of the Reformation controversy.",
        figures: [
          { id: "augustine", name: "Augustine" },
          { id: "aquinas", name: "Thomas Aquinas" },
          { id: null, name: "Council of Trent" }
        ]
      },
      {
        id: "trad-orthodox",
        key: "orthodox",
        name: "Eastern Orthodox",
        subtitle: "Grace, participation, healing, synergy, and theosis.",
        account: [
          "Eastern theology frames grace less as a created quality interposed between God and the soul and more as God’s own action and life toward the creature. The goal of salvation is theosis: participation in the divine life without confusion of the uncreated God and the created person. Athanasius’s dictum—God became human that humans might become divine—sets the horizon: not moral self-improvement alone, but communion.",
          "Synergy names the conviction that God initiates and sustains, while the human person freely responds. This is not a claim to earn grace. It is a refusal to describe the human as a passive instrument. Freedom belongs to the image of God; after the Fall it is impaired by death and corruption, yet not annihilated. Baptism, the Eucharist, ascetic practice, and prayer are the ordinary path by which the Spirit heals and illumines.",
          "Later Byzantine theology, especially associated with Gregory of Palamas, distinguishes the divine essence (incommunicable) from the uncreated energies (truly God, the mode of participation). The point is to secure real participation without collapsing the creature into the Godhead or reducing grace to a created effect alone. Western scholastic categories of habitual grace are not the native grammar; the native grammar is liturgical, ascetical, and participatory."
        ],
        argument:
          "If salvation is life in God, then grace must be more than a courtroom verdict. The Incarnation and Pascha heal human nature and open a path of deification. Scripture’s participatory language and the Fathers’ insistence on real union drive the account. Synergy protects both divine priority and the integrity of the person who must repent, believe, and struggle—always under grace.",
        objection:
          "Western critics, especially Reformed and some Lutheran voices, worry that synergy and theosis language understate the bondage of the will and blur justification with progressive transformation. Catholic scholastics sometimes pressed for more precise metaphysical definition of grace than the East prefers. Conversely, Orthodox writers have charged the West with over-juridicalizing salvation and confining grace to created habits.",
        response:
          "Orthodoxy answers that juridical metaphors in Scripture are real but not exhaustive, and that healing and victory motifs are equally biblical. Synergy does not mean equal partnership in originating salvation; it means the free response of a healed will within the Spirit’s work. Essence–energies language is offered precisely to keep participation from pantheism. The tradition asks to be judged by its liturgy and Fathers, not by Latin controversies alone.",
        figures: [
          { id: "athanasius", name: "Athanasius" },
          { id: "maximus", name: "Maximus the Confessor" },
          { id: "palamas", name: "Gregory of Palamas" }
        ]
      },
      {
        id: "trad-lutheran",
        key: "lutheran",
        name: "Lutheran",
        subtitle: "Grace is God’s free mercy in Christ, received through faith.",
        account: [
          "Lutheran theology centers grace in the Gospel: the promise of forgiveness for Christ’s sake. Justification is forensic—God declares the sinner righteous because of Christ, whose righteousness is received by faith alone. Faith is not a meritorious work; it is trust created by the Spirit through the Word. The bound will cannot prepare itself for grace by natural powers; conversion is God’s work.",
          "Word and Sacrament are the means of grace. Baptism, the Lord’s Supper, and the preached promise deliver Christ. Grace is resistible: the Spirit can be rejected. Believers remain simultaneously righteous and sinners (simul justus et peccator). Good works necessarily follow living faith, but they are fruits, not the cause of justification. Election to salvation is confessed; Lutheranism has typically refused a symmetrical, fully articulated decree of reprobation in the Reformed manner.",
          "Lutheranism must be distinguished from Reformed theology: stronger sacramental realism, a different account of the bound will’s relation to the means of grace, and a more restrained treatment of predestination. It must also be distinguished from later Protestant moralism that treats faith as a human decision independent of the Word’s creative power."
        ],
        argument:
          "The driving pastoral and theological concern is the terrified conscience. If acceptance with God depends on interior transformation measured as one’s own, assurance collapses. Scripture’s ‘faith is counted as righteousness’ and the sufficiency of Christ’s cross demand a justification that is gift, not process. Grace is therefore first of all mercy in Christ, delivered outwardly in the Gospel, which creates the faith that receives it.",
        objection:
          "Catholic and Orthodox critics argue that a purely forensic justification risks leaving the person unchanged and severs Paul from James. Reformed critics argue that resistible grace and a restrained doctrine of election fail to secure the sovereignty of grace or the perseverance of the saints as the Reformed confessions state them.",
        response:
          "Lutherans reply that forensic justification does not exclude new life; it grounds it. The Spirit who justifies also sanctifies, yet mixing the two as the basis of acceptance returns the sinner to the law. Against Reformed ‘irresistible’ formulations, Lutherans insist that the Word truly offers grace universally and that resistance is a tragic reality of the fallen will—without denying that faith is entirely God’s gift when it is given.",
        figures: [
          { id: "luther", name: "Martin Luther" },
          { id: "melanchthon", name: "Philip Melanchthon" },
          { id: null, name: "Formula of Concord" }
        ]
      },
      {
        id: "trad-reformed",
        key: "reformed",
        name: "Reformed / Calvinist",
        subtitle: "Grace sovereignly regenerates and effectively brings God’s elect to faith.",
        account: [
          "Reformed theology teaches the radical inability of fallen humanity: apart from regenerating grace, the sinner will not submit to God. Election is unconditional—not based on foreseen faith. Effectual calling and regeneration precede the act of saving faith; the Spirit renews the will so that the person freely believes. This is what later theology summarized as ‘irresistible grace’: not coercion of a neutral will, but the certain success of God’s purpose to save the elect by renewing the heart.",
          "Justification is forensic and grounded in union with Christ: Christ’s righteousness is imputed; sins are forgiven. Sanctification is distinct yet inseparable—growth in holiness as the Spirit’s ongoing work. Perseverance of the saints follows: those whom God has effectually called, He will keep. The sacraments are signs and seals of the covenant, not automatic conveyors of grace apart from faith.",
          "The Synod of Dort (1618–19) defined this complex against Arminian revisions that made election conditional on foreseen faith and treated grace as finally resistible in the elect. Reformed theology shares with Lutheranism a forensic justification and sola fide, while differing on the scope of the atonement, the mode of the Supper, and the structure of the decrees."
        ],
        argument:
          "If grace could finally fail wherever it is sincerely given, salvation would rest on the mutable human will. Scripture’s language of new birth, God’s purpose according to election, and the security of those given to the Son presses toward a grace that accomplishes what God intends for the elect. Human response is real and voluntary—but it is the response of a will already made alive.",
        objection:
          "Lutheran, Catholic, Orthodox, and Arminian critics argue that effectual calling and unconditional election threaten the universal offer of the Gospel, make God the author of reprobation in a morally troubling way, or undermine the seriousness of exhortations to repent. ‘Irresistible’ is heard as coercion; limited atonement is heard as a restriction on the cross’s sufficiency.",
        response:
          "Reformed theologians distinguish moral force from physical compulsion: the Spirit changes what the sinner wants, so faith is free, not forced. The external call is genuine; the effectual call is the Spirit’s inward work in the elect. Reprobation is typically framed as preterition and permission of sin, not as God injecting evil. Whether this resolves the moral and pastoral objections remains contested—but the internal logic aims to secure grace as God’s successful mercy, not a suspended possibility.",
        figures: [
          { id: "calvin", name: "John Calvin" },
          { id: null, name: "Theodore Beza" },
          { id: null, name: "Synod of Dort" }
        ]
      }
    ],
    agreements: [
      "Salvation originates in God’s grace, not in unaided human achievement.",
      "Fallen humanity cannot save itself.",
      "Christ is the source and center of salvation.",
      "Grace is not something humans can use to place God in their debt.",
      "Faith is indispensable to the Christian reception of salvation.",
      "The Christian life requires ongoing divine assistance.",
      "Salvation ultimately depends upon God’s initiative."
    ],
    clashes: [
      {
        title: "I. Does grace transform the person?",
        cells: [
          { label: "Catholic", text: "Yes: sanctifying grace is interior renewal and a share in the divine life, together with forgiveness." },
          { label: "Eastern Orthodox", text: "Yes: healing and theosis—participation in God—define the path of salvation." },
          { label: "Lutheran", text: "Justification is forensic and distinct from sanctification; grace nonetheless creates the new life of faith." },
          { label: "Reformed", text: "Union with Christ yields justification and sanctification; justifying righteousness remains Christ’s, imputed." }
        ]
      },
      {
        title: "II. Can the human will cooperate with grace?",
        cells: [
          { label: "Catholic", text: "Yes—cooperation is real and is itself enabled by grace." },
          { label: "Eastern Orthodox", text: "Yes; synergy is central to the Orthodox account of salvation." },
          { label: "Lutheran", text: "Not in the initial conversion of the bound will; faith is created by the Spirit through the Word." },
          { label: "Reformed", text: "Regeneration precedes the saving response; the renewed will then responds freely." }
        ]
      },
      {
        title: "III. Can grace be resisted?",
        cells: [
          { label: "Catholic", text: "Actual graces can be resisted; perseverance is not automatic possession." },
          { label: "Eastern Orthodox", text: "God does not compel; human refusal remains a real possibility." },
          { label: "Lutheran", text: "Yes; grace is resistible even as faith, when given, is wholly gift." },
          { label: "Reformed", text: "Effectual calling of the elect is not finally defeated; the external call may be rejected." }
        ]
      },
      {
        title: "IV. How does grace relate to justification?",
        flow: "Grace → Justification → Sanctification",
        cells: [
          { label: "Catholic", text: "Justifying grace forgives and inwardly renews; sanctifying grace is the life of the justified." },
          { label: "Eastern Orthodox", text: "‘Justification’ language is held within healing and communion; not a bare external verdict." },
          { label: "Lutheran", text: "Grace in the Gospel justifies by faith alone; sanctification follows without becoming the basis of acceptance." },
          { label: "Reformed", text: "Grace unites to Christ; justification is forensic; sanctification is the Spirit’s distinct work in the justified." }
        ]
      },
      {
        title: "V. How does grace relate to election?",
        flow: "Grace → Election → Predestination → Perseverance",
        cells: [
          { label: "Catholic", text: "Predestination to life; God does not positively will evil; grace and freedom are coordinated (schools differ on how)." },
          { label: "Eastern Orthodox", text: "Foreknowledge and call without a system that cancels synergy or makes God the cause of sin." },
          { label: "Lutheran", text: "Election to salvation confessed; symmetrical double decrees typically refused." },
          { label: "Reformed", text: "Unconditional election, effectual grace, and perseverance of the saints form one chain." }
        ]
      }
    ],
    timeline: [
      {
        date: "c. 400–418",
        title: "Pelagius",
        figureId: "pelagius",
        significance: "Denied the necessity of interior preventing grace for acts of righteousness; provoked the crisis that defined Western grace theology.",
        extra: "Pelagianism treated the will as capable of choosing the good without prior regenerating aid. The Church’s rejection of that claim became a fixed boundary for Catholic, Lutheran, and Reformed orthodoxy—and shaped Eastern reactions to Western extremes."
      },
      {
        date: "c. 412–430",
        title: "Augustine of Hippo",
        figureId: "augustine",
        significance: "Defended the priority of grace, the wounded will, and the necessity of baptismal grace against Pelagius—without simply ‘authoring’ every later Western system.",
        extra: "On Nature and Grace, On the Spirit and the Letter, and On Grace and Free Will remain primary texts. Later Catholics, Lutherans, and Reformed all claim Augustine while reading him differently on predestination and perseverance."
      },
      {
        date: "13th century",
        title: "Medieval Western theology",
        figureId: "aquinas",
        significance: "Scholastic analysis of habitual and actual grace, merit, and the supernatural end—especially in Thomas Aquinas—organized the Catholic synthesis.",
        extra: "Grace was integrated with virtue, sacrament, and the vision of God. This precision became both a resource for Trent and a target for Reformation critique."
      },
      {
        date: "1525",
        title: "Martin Luther — Bondage of the Will",
        figureId: "luther",
        significance: "Against Erasmus, Luther argued the bound will and the freeness of justifying grace through the Gospel alone.",
        extra: "The debate fixed Lutheran monergism in conversion and the forensic shape of justification, while leaving Lutheranism distinct from later Reformed scholasticism."
      },
      {
        date: "1536–1559",
        title: "John Calvin — Institutes",
        figureId: "calvin",
        significance: "Systematized election, effectual calling, justification by faith, and the sanctifying work of the Spirit within a comprehensive doctrine of grace.",
        extra: "Calvin’s synthesis shaped Reformed confessions and, through later interpreters, the debates settled at Dort."
      },
      {
        date: "1545–1563",
        title: "Council of Trent",
        figureId: null,
        significance: "Defined justification as forgiveness and interior renewal; anathematized both Pelagian self-salvation and a purely extrinsic account of justifying grace.",
        extra: "Trent remains the authoritative Catholic response to the Reformation on grace and justification—not a mere restatement of Augustine, but a conciliar judgment in a new crisis."
      },
      {
        date: "1618–1619",
        title: "Synod of Dort",
        figureId: null,
        significance: "Reformed churches rejected Arminian revisions and defined unconditional election, effectual grace, and perseverance for the elect.",
        extra: "Dort is to the Reformed tradition what Trent is to Catholic controversy with Protestantism: a boundary-setting moment, not the whole history of grace theology."
      }
    ],
    sources: [
      {
        author: "Augustine",
        title: "On Grace and Free Will",
        href: "https://www.newadvent.org/fathers/1510.htm",
        note: "New Advent · Church Fathers"
      },
      {
        author: "Augustine",
        title: "On Nature and Grace",
        href: "https://www.newadvent.org/fathers/1503.htm",
        note: "New Advent · against Pelagius"
      },
      {
        author: "Augustine",
        title: "On the Spirit and the Letter",
        href: "https://www.newadvent.org/fathers/1502.htm",
        note: "New Advent · grace and law"
      },
      {
        author: "Thomas Aquinas",
        title: "Summa Theologiae — Treatise on Grace",
        href: "texts/summa.html?part=prima-sec&q=109&a=1",
        note: "Lumen Fidei · ST I-II QQ.109–114"
      },
      {
        author: "Council of Trent",
        title: "Decree on Justification (Session VI)",
        href: "https://www.newadvent.org/cathen/08573a.htm",
        note: "New Advent · historical entry"
      },
      {
        author: "Martin Luther",
        title: "The Bondage of the Will",
        href: "https://www.ccel.org/ccel/luther",
        note: "CCEL · Luther corpus (PD editions)"
      },
      {
        author: "John Calvin",
        title: "Institutes of the Christian Religion",
        href: "https://www.ccel.org/ccel/calvin/institutes",
        note: "CCEL · public-domain translation"
      },
      {
        author: "Formula of Concord",
        title: "Free Will, Justification, Election",
        href: "https://bookofconcord.org/",
        note: "Book of Concord · public domain"
      }
    ],
    thread: [
      { id: "original-sin", name: "Original Sin" },
      { id: "grace", name: "Grace", current: true },
      { id: "free-will", name: "Free Will" },
      { id: "justification", name: "Justification" },
      { id: "faith-works", name: "Sanctification / Faith & Works" },
      { id: "predestination", name: "Predestination" }
    ],
    related: [
      { id: "original-sin", name: "Original Sin" },
      { id: "free-will", name: "Free Will" },
      { id: "justification", name: "Justification" },
      { id: "faith-works", name: "Faith & Works" },
      { id: "predestination", name: "Predestination" },
      { id: "sacraments", name: "Sacraments" },
      { id: null, name: "Merit" },
      { id: null, name: "Synergism" },
      { id: null, name: "Monergism" },
      { id: null, name: "Theosis" },
      { id: null, name: "Perseverance" }
    ],
    sections: [
      { id: "the-question", label: "The Question" },
      { id: "at-a-glance", label: "At a Glance" },
      { id: "trad-catholic", label: "Catholic" },
      { id: "trad-orthodox", label: "Orthodox" },
      { id: "trad-lutheran", label: "Lutheran" },
      { id: "trad-reformed", label: "Reformed" },
      { id: "where-agree", label: "Agreement" },
      { id: "where-clash", label: "Clash" },
      { id: "history", label: "History" },
      { id: "sources", label: "Sources" },
      { id: "thread", label: "Thread" }
    ]
  };

  /** Full Justification exhibit — four traditions, with the Western Reformation dispute placed in its wider patristic and biblical context. */
  var JUSTIFICATION_EXHIBIT = {
    id: "justification",
    domain: "Salvation",
    title: "Justification",
    centralQuestion: "What does God do when He makes a sinner righteous?",
    questionQuote: "When God justifies the ungodly, does He declare a sinner righteous, make the sinner righteous, or both?",
    questionNote: "The traditions do not disagree that sinners are saved by Christ and by grace. The decisive dispute concerns what the word ‘justify’ names: remission and interior renewal, participation in divine life, or a forensic verdict grounded in Christ’s righteousness. Faith, baptism, works, sanctification, and assurance are interpreted within these different accounts.",
    glanceTitle: "Justification at a Glance",
    definition:
      "Justification is the act or work of God by which sinners are put into a right relation with Him through Jesus Christ. In Scripture and Christian theology it includes forgiveness and righteousness, but Catholic, Eastern Orthodox, Lutheran, and Reformed traditions arrange those realities differently.",
    lead:
      "The vocabulary is shared, but the theological grammar is not. Catholic theology classically speaks of forgiveness together with the interior renewal and sanctification of the justified. Eastern Orthodoxy places justification within the larger mystery of healing, union with God, and theosis. Lutheran and Reformed theology make a sharper distinction between justification and sanctification and emphasize the forensic declaration of righteousness received through faith. The sixteenth-century controversy therefore concerns not whether grace saves, but what salvation means at the moment God justifies the sinner.",
    deeperQuestions: [
      "What does Paul mean by ‘justify’ and ‘righteousness’?",
      "Is justification a declaration, an interior transformation, or both?",
      "Is Christ’s righteousness imputed, infused, participated in, or described in another way?",
      "What is the precise role of faith?",
      "Do good works belong to justification itself or follow from it?",
      "How are justification and sanctification related?",
      "What does baptism do in the justification of the sinner?",
      "Can a justified person lose the state of grace or final salvation?"
    ],
    glance: {
      columns: [
        { key: "catholic", label: "Catholic", anchor: "trad-catholic" },
        { key: "orthodox", label: "Eastern Orthodox", anchor: "trad-orthodox" },
        { key: "lutheran", label: "Lutheran", anchor: "trad-lutheran" },
        { key: "reformed", label: "Reformed", anchor: "trad-reformed" }
      ],
      rows: [
        { label: "What is justification?", cells: {
          catholic: "Forgiveness of sins together with sanctification and renewal of the interior person.",
          orthodox: "Being set right with God within the larger reality of healing, communion, and theosis.",
          lutheran: "God’s forensic declaration that the sinner is righteous for Christ’s sake.",
          reformed: "A forensic act of God, grounded in Christ’s righteousness and received through faith."
        }},
        { label: "Ground", cells: {
          catholic: "Christ’s merits and sacrifice; grace makes the person truly righteous.",
          orthodox: "Christ’s Incarnation, death, resurrection, and the believer’s participation in Him.",
          lutheran: "Christ alone; His righteousness is received by faith, not produced by works.",
          reformed: "Christ’s obedience and righteousness, received through union with Christ by faith."
        }},
        { label: "Faith", cells: {
          catholic: "The beginning and foundation of justification; living faith is perfected by charity.",
          orthodox: "Living trust in Christ inseparable from repentance, baptism, worship, and the life of the Church.",
          lutheran: "The sole instrument that receives Christ and His righteousness; itself created by grace.",
          reformed: "The sole instrument of justification; true faith necessarily produces sanctification."
        }},
        { label: "Works", cells: {
          catholic: "Not the cause of first justification; works done in grace belong to growth in righteousness and merit.",
          orthodox: "Ascetic and charitable works are the fruit and expression of synergy with grace.",
          lutheran: "Necessary fruits of faith, but never the basis or instrument of justification.",
          reformed: "Necessary fruits and evidence of true faith, never the ground of justification."
        }},
        { label: "Righteousness", cells: {
          catholic: "Truly imparted to and present in the justified person through sanctifying grace and charity.",
          orthodox: "Righteousness is understood relationally and participatively within communion with God.",
          lutheran: "Christ’s righteousness is alien to the sinner and counted as his or hers by faith.",
          reformed: "Christ’s righteousness is imputed; sanctifying righteousness follows in union with Christ."
        }},
        { label: "Justification & sanctification", cells: {
          catholic: "Closely united within the renewal of the person; justification itself includes sanctification.",
          orthodox: "Not sharply separated; justification belongs within the whole journey of healing and theosis.",
          lutheran: "Distinct: justification establishes acceptance with God; sanctification follows as new life.",
          reformed: "Distinct but inseparable benefits of union with Christ."
        }},
        { label: "Can justification be lost?", cells: {
          catholic: "Yes; mortal sin can destroy sanctifying grace, which may be restored through repentance.",
          orthodox: "A believer can turn away from communion with God; perseverance requires continued life in Christ.",
          lutheran: "A believer can fall from faith; perseverance is not treated as an unconditional possession.",
          reformed: "Those truly effectually called and justified will persevere, though professing believers may fall away."
        }}
      ]
    },
    traditions: [
      {
        id: "trad-catholic", key: "catholic", name: "Catholic",
        subtitle: "Forgiveness and interior renewal by sanctifying grace.",
        account: [
          "Catholic theology understands justification as more than a change in God’s attitude toward a sinner. The Council of Trent defines it as not only the remission of sins but also the sanctification and renewal of the interior person. The sinner is moved from a state of injustice into grace through Christ, and the righteousness given by God becomes a real quality of the justified life.",
          "Faith is the beginning, foundation, and root of justification, but Catholic theology distinguishes living faith from faith separated from charity. The justified person receives sanctifying grace and the theological virtues; charity unites the person to God and gives the Christian life its form. Baptism is the ordinary sacramental beginning of this new life. The Council rejects the idea that the sinner can prepare for or earn the first justification by natural powers alone.",
          "Catholic teaching also distinguishes the first justification from growth in righteousness. Works performed in grace do not purchase the initial gift of salvation, but they genuinely participate in the life of grace because God graciously crowns His own gifts. Mortal sin can destroy sanctifying grace; repentance and sacramental reconciliation restore the justified person to grace."
        ],
        argument: "The Catholic synthesis seeks to preserve every dimension of the biblical witness: God forgives the sinner, counts righteousness, gives new birth, pours out charity, adopts the believer, and makes the person holy. If justification means being made righteous, then the righteousness God gives should not be merely external. Yet because the first movement toward God is itself grace, interior transformation does not become a rival human achievement.",
        objection: "Lutheran and Reformed critics argue that placing interior renewal and charity inside justification compromises the believer’s certainty that acceptance rests entirely on Christ. If the righteousness by which a person is justified is partly a quality in the believer, then the conscience may be forced to look inward at the adequacy of its holiness rather than outward to Christ.",
        response: "Catholic theology answers that the ground of justification is always Christ and His grace, never autonomous human merit. The interior righteousness is received, not self-generated. It also argues that Paul’s language of new creation, sanctification, adoption, and participation should not be separated from his language of forgiveness and justification. The controversy therefore turns on whether these biblical descriptions should be conceptually distinguished or gathered into one transformative act.",
        figures: [{id:"augustine",name:"Augustine"},{id:"aquinas",name:"Thomas Aquinas"},{id:null,name:"Council of Trent"}]
      },
      {
        id: "trad-orthodox", key: "orthodox", name: "Eastern Orthodox",
        subtitle: "Justification within healing, communion, and theosis.",
        account: [
          "Eastern Orthodox theology does not generally make the forensic-versus-transformative distinction the controlling framework of salvation. The New Testament’s juridical language is retained, but justification is read within a wider account of salvation as liberation from death and corruption, healing of the human person, reconciliation with God, and participation in divine life. Theosis is not an optional supplement to justification; it expresses the final goal toward which salvation is directed.",
          "Faith is therefore not isolated from baptism, repentance, Eucharistic communion, ascetic struggle, prayer, and growth in holiness. Orthodox theology commonly describes this as synergy: God initiates and sustains the work of salvation, while the human person genuinely responds. This does not make grace and human effort equal causes. The human response is possible only because God gives life and grace.",
          "Because the East did not receive the sixteenth-century debate as the central organizing controversy, Orthodox writers are often cautious about making ‘justification’ carry the entire weight that it carries in Protestant-Catholic polemics. Forgiveness and acquittal are real, but so are illumination, healing, sanctification, and deification. The person is not merely declared acceptable while remaining untouched by the divine life."
        ],
        argument: "The Orthodox account begins from the whole drama of salvation: creation, Fall, Incarnation, death, resurrection, Pentecost, sacramental life, and final deification. A merely forensic account appears too narrow if it cannot explain why the Incarnation changes human nature or why Christian salvation culminates in participation in God. Justification is therefore best understood as one aspect of a larger communion-centered mystery.",
        objection: "Western critics can object that the Orthodox account does not always define the precise relation between Paul’s justification language and theosis with the same conceptual precision found in Western scholastic and confessional theology. They may also worry that synergy and ascetic language can sound as though human cooperation becomes part of the basis on which God accepts the sinner.",
        response: "Orthodox theology responds that the distinction is between cooperation and autonomous merit. No human work originates salvation or places God under obligation. Synergy describes the creature’s free participation in a grace that always comes first. The Orthodox emphasis also warns that a theological system should not make one metaphor—legal, medical, sacrificial, participatory—swallow the others when Scripture and the Fathers employ several.",
        figures: [{id:"athanasius",name:"Athanasius"},{id:"maximus",name:"Maximus the Confessor"},{id:"palamas",name:"Gregory Palamas"}]
      },
      {
        id: "trad-lutheran", key: "lutheran", name: "Lutheran",
        subtitle: "The sinner is justified by grace through faith for Christ’s sake.",
        account: [
          "Lutheran theology makes a deliberate distinction between justification and sanctification. Justification is God’s gracious forensic verdict: for Christ’s sake, God forgives sins and regards the believer as righteous. The righteousness that establishes this verdict is not a moral achievement produced by the sinner but Christ’s righteousness, received through faith. This is the theological center of sola fide.",
          "Faith is not treated as a meritorious human work. It is the empty hand that receives Christ, and the faith itself is created by the Holy Spirit through the Word. Baptism and the Lord’s Supper belong to the means by which Christ gives His gifts. Good works necessarily follow faith because living faith is active in love, but works cannot become the basis on which God declares the sinner righteous.",
          "Lutheran theology therefore places assurance at the center of its pastoral logic. The believer’s confidence rests outside the fluctuating measurement of personal holiness—in Christ and His promise. This does not deny sanctification. Rather, sanctification is the necessary new life produced by the same Spirit who creates faith, while the believer remains simul justus et peccator: righteous before God in Christ and still a sinner in himself."
        ],
        argument: "The Lutheran argument is driven by the sufficiency of Christ and the troubled conscience. If justification depends on the believer’s degree of interior renewal, assurance can become proportional to self-examination. The Gospel instead announces a righteousness received from Christ. Paul’s language of faith apart from works is therefore treated as a safeguard for the absolute gratuity of salvation.",
        objection: "Catholic and Orthodox critics argue that a sharp forensic distinction can make the Christian appear righteous without sufficiently explaining the transformative reality of salvation. They also question whether Paul’s justification language can be isolated from regeneration, sanctification, and participation in Christ. Reformed critics agree with sola fide but differ over conversion, election, perseverance, and sacramental theology.",
        response: "Lutheran theology insists that forensic does not mean fictional. God’s verdict is effective because it is grounded in Christ and creates the new life it announces. The distinction is not between a legal fiction and real holiness, but between the basis of acceptance before God and the holiness that follows from that acceptance. The believer’s works matter profoundly for Christian vocation, but they cannot become the ground of justification.",
        figures: [{id:"luther",name:"Martin Luther"},{id:"melanchthon",name:"Philip Melanchthon"},{id:null,name:"Augsburg Confession"}]
      },
      {
        id: "trad-reformed", key: "reformed", name: "Reformed / Calvinist",
        subtitle: "Forensic justification grounded in Christ and received by faith.",
        account: [
          "Reformed theology agrees with Lutheranism that justification is fundamentally forensic, but places the doctrine within a broader account of union with Christ, covenant, election, and perseverance. God justifies the sinner by counting or imputing Christ’s righteousness to the believer. Faith is the sole instrument by which Christ and His righteousness are received; faith itself contributes no merit.",
          "Justification and sanctification are distinct but inseparable. Christ is not divided: the same union by which the believer receives a righteous standing also brings the Holy Spirit’s sanctifying work. Yet sanctification must never become the ground of the verdict. The distinction protects the claim that the believer is accepted entirely because of Christ while also protecting the necessity of holiness.",
          "The Reformed tradition also connects justification with the covenantal and federal structure of salvation. Adam represents humanity in the first covenantal arrangement; Christ is the representative head of the redeemed. Christ’s obedience and death provide the righteousness on which justification rests. The justified therefore possess peace with God while awaiting the completion of sanctification and glorification."
        ],
        argument: "The Reformed argument emphasizes the believer’s inability to supply a righteousness adequate to God’s judgment. If acceptance depends on a righteousness partly produced within the believer, the foundation of assurance remains unstable. Imputation protects the sufficiency of Christ: God accepts the believer because Christ has fulfilled righteousness, not because the believer has already become perfectly righteous.",
        objection: "Catholic and Orthodox critics argue that imputation can sound like an external legal fiction if it is detached from actual transformation. Lutheran critics share the forensic center but reject or qualify some Reformed conclusions concerning election and perseverance. Arminian Protestants additionally object that the Reformed account of unconditional election can make the human response appear determined by a prior decree.",
        response: "Reformed theology answers that imputation is not detached from transformation because both are benefits of union with Christ. The justified person is truly renewed; the point is that this renewal is never the righteousness by which the person is accepted. Sanctification demonstrates and completes the new life but does not supplement Christ’s righteousness as a second ground of justification.",
        figures: [{id:"calvin",name:"John Calvin"},{id:null,name:"Heidelberg Catechism"},{id:null,name:"Westminster Confession"}]
      }
    ],
    agreements: [
      "Human beings are sinners and cannot save themselves by unaided moral effort.",
      "Salvation is grounded in the grace of God and the saving work of Jesus Christ.",
      "Christ’s death and resurrection are central to the sinner’s reconciliation with God.",
      "Faith is indispensable to the reception and life of salvation.",
      "Baptism has a foundational place in Christian initiation, though its relation to justification is explained differently.",
      "The justified Christian is called to a life of holiness, charity, and obedience.",
      "Good works cannot be understood as an autonomous purchase price for God’s grace."
    ],
    clashes: [
      { title: "I. What does ‘justify’ mean?", cells: [
        {label:"Catholic",text:"To forgive and make righteous: justification includes remission of sins and interior renewal."},
        {label:"Eastern Orthodox",text:"To be set right with God within the larger reality of healing, reconciliation, and participation."},
        {label:"Lutheran",text:"To declare righteous for Christ’s sake: a forensic verdict received through faith."},
        {label:"Reformed",text:"To declare righteous on the basis of Christ’s righteousness, received through faith."}
      ], flow:"Forgiveness + Renewal ↔ Communion + Healing ↔ Forensic Verdict"},
      { title: "II. What is the righteousness by which the sinner is justified?", cells: [
        {label:"Catholic",text:"God gives sanctifying grace and charity, so the justified person is truly renewed and righteous."},
        {label:"Eastern Orthodox",text:"Righteousness is understood through communion and participation in the life of God rather than a single forensic category."},
        {label:"Lutheran",text:"Christ’s righteousness is received as an alien righteousness; it is not generated by the sinner."},
        {label:"Reformed",text:"Christ’s righteousness is imputed to the believer; sanctification follows as a distinct benefit of union with Christ."}
      ]},
      { title: "III. What is the role of faith?", cells: [
        {label:"Catholic",text:"Faith begins justification and must be living faith formed by charity."},
        {label:"Eastern Orthodox",text:"Faith is inseparable from repentance, sacramental life, obedience, and growth in communion."},
        {label:"Lutheran",text:"Faith alone receives Christ and His righteousness; it is created by the Spirit, not a meritorious decision."},
        {label:"Reformed",text:"Faith alone is the instrument of justification; genuine faith necessarily bears sanctifying fruit."}
      ]},
      { title: "IV. Do works belong to justification?", cells: [
        {label:"Catholic",text:"Works cannot earn first justification, but works done in grace belong to growth in righteousness and can be meritorious as God’s gifts."},
        {label:"Eastern Orthodox",text:"Works of repentance, mercy, prayer, and ascetic struggle express synergy and participation in grace."},
        {label:"Lutheran",text:"Works necessarily follow faith but are excluded from the basis and instrument of justification."},
        {label:"Reformed",text:"Works necessarily follow true faith and evidence justification but never constitute its ground."}
      ], flow:"Grace → Faith → Justification → Holy Life"},
      { title: "V. How are justification and sanctification related?", cells: [
        {label:"Catholic",text:"Justification itself includes sanctification and renewal; growth in grace continues afterward."},
        {label:"Eastern Orthodox",text:"The distinction is not the controlling framework; the whole Christian life is a movement of healing and theosis."},
        {label:"Lutheran",text:"Distinct but simultaneous works of God: justification establishes the verdict; sanctification produces new life."},
        {label:"Reformed",text:"Distinct and inseparable benefits of union with Christ; sanctification can never become the ground of justification."}
      ]},
      { title: "VI. Can the justified person fall away?", cells: [
        {label:"Catholic",text:"Yes; sanctifying grace can be lost through mortal sin and restored through repentance and reconciliation."},
        {label:"Eastern Orthodox",text:"A person can turn away from communion with God; salvation involves persevering in the life of Christ."},
        {label:"Lutheran",text:"Yes; the believer can fall from faith; perseverance is not guaranteed by an unconditional decree."},
        {label:"Reformed",text:"Those truly justified will persevere, though temporary believers or outward members may fall away."}
      ]}
    ],
    timeline: [
      {date:"c. 55–58",title:"Paul — Romans and Galatians",figureId:null,significance:"Paul’s language of justification by faith, works, righteousness, grace, and union with Christ becomes the primary biblical field of later disagreement.",extra:"Romans emphasizes faith, grace, Abraham, the law, and new life in Christ; Galatians places justification within the controversy over the Mosaic law. Later traditions disagree over how these texts relate to James, baptism, sanctification, and covenantal participation."},
      {date:"2nd–5th centuries",title:"Early Christian and Patristic synthesis",figureId:null,significance:"The Fathers commonly speak of forgiveness, baptism, regeneration, sanctification, and participation together rather than isolating a single forensic model.",extra:"Patristic language is diverse. Augustine becomes especially important in the Latin West for grace, justification, and the transformation of the sinner, while Eastern Fathers develop a strongly participatory account of salvation."},
      {date:"5th century",title:"Augustine and the anti-Pelagian controversy",figureId:"augustine",significance:"Augustine insists that the sinner’s movement toward God is grounded in prevenient grace and that righteousness is God’s gift rather than autonomous human achievement.",extra:"Augustine’s anti-Pelagian writings become foundational to later Western debates. Catholics, Lutherans, and Reformed theologians all appeal to Augustine, but they disagree over how his account of grace, justification, predestination, and perseverance should be synthesized."},
      {date:"12th–13th centuries",title:"Scholastic theology",figureId:"aquinas",significance:"Medieval theologians develop precise distinctions concerning habitual grace, infused virtue, merit, causality, and the movement by which God justifies the sinner.",extra:"Thomas Aquinas describes justification as a movement involving grace, the movement of free will toward God, turning from sin, and remission of sin. These categories become important background for the Catholic response at Trent."},
      {date:"1517–1521",title:"Martin Luther and the Reformation",figureId:"luther",significance:"Luther’s doctrine of justification by faith alone places the righteousness of Christ and the promise of the Gospel at the center of the doctrine.",extra:"The controversy is not simply over whether good works matter. It concerns whether works or inherent righteousness can enter the basis by which the sinner is accepted before God. Luther’s pastoral concern for assurance becomes inseparable from the doctrine."},
      {date:"1530",title:"Augsburg Confession",figureId:null,significance:"Article IV states the Lutheran confession that people cannot be justified by their own strength, merits, or works but are justified for Christ’s sake through faith.",extra:"The confession also insists that good works necessarily follow faith. Thus sola fide is not an argument against holiness; it is an argument about the ground and instrument of justification."},
      {date:"1545–1563",title:"Council of Trent — Session VI",figureId:null,significance:"The Catholic Church formally defines its doctrine of justification in response to the Reformation, emphasizing grace, faith, remission of sins, and interior renewal.",extra:"Trent rejects both Pelagian self-salvation and the claim that the justified person is righteous only by an external imputation. Its canons remain a major boundary marker in Catholic theology."},
      {date:"1560s–1640s",title:"Reformed confessional development",figureId:"calvin",significance:"Reformed confessions systematize forensic justification, imputed righteousness, union with Christ, and the distinction between justification and sanctification.",extra:"The Heidelberg Catechism and later Westminster standards articulate the Reformed doctrine with increasing confessional precision, while maintaining that true faith necessarily produces good works."}
    ],
    sources: [
      {author:"Paul",title:"Epistle to the Romans",href:"https://www.newadvent.org/bible/45001.htm",note:"New Advent · Romans 1–8"},
      {author:"Paul",title:"Epistle to the Galatians",href:"https://www.newadvent.org/bible/48001.htm",note:"New Advent · Galatians 1–5"},
      {author:"Augustine",title:"On the Spirit and the Letter",href:"https://www.newadvent.org/fathers/1502.htm",note:"New Advent · grace, faith, and righteousness"},
      {author:"Thomas Aquinas",title:"Summa Theologiae — Justification",href:"texts/summa.html?part=prima-sec&q=113&a=1",note:"Lumen Fidei · I-II Q.113"},
      {author:"Council of Trent",title:"Decree on Justification — Session VI",href:"https://www.newadvent.org/cathen/08573a.htm",note:"New Advent · Catholic account and historical text"},
      {author:"Martin Luther",title:"The Bondage of the Will",href:"https://www.ccel.org/ccel/luther",note:"CCEL · public-domain Luther corpus"},
      {author:"Philip Melanchthon",title:"Augsburg Confession — Article IV",href:"https://bookofconcord.org/augsburg-confession/",note:"Book of Concord · justification"},
      {author:"John Calvin",title:"Institutes of the Christian Religion — Book III",href:"https://www.ccel.org/ccel/calvin/institutes",note:"CCEL · justification and union with Christ"},
      {author:"Heidelberg Catechism",title:"Questions 59–64",href:"https://www.ccel.org/ccel/schaff/creeds2.iv.iv.html",note:"CCEL · faith, justification, and good works"}
    ],
    thread: [
      {id:"original-sin",name:"Original Sin"},{id:"grace",name:"Grace"},{id:"justification",name:"Justification",current:true},
      {id:"faith-works",name:"Faith & Works"},{id:"sanctification",name:"Sanctification"},{id:"predestination",name:"Predestination"}
    ],
    related: [
      {id:"original-sin",name:"Original Sin"},{id:"grace",name:"Grace"},{id:"free-will",name:"Free Will"},
      {id:"faith-works",name:"Faith & Works"},{id:"predestination",name:"Predestination"},{id:"sacraments",name:"Sacraments"},
      {id:null,name:"Merit"},{id:null,name:"Imputation"},{id:null,name:"Infused Righteousness"},{id:null,name:"Theosis"},{id:null,name:"Union with Christ"}
    ],
    sections: [
      {id:"the-question",label:"The Question"},{id:"at-a-glance",label:"At a Glance"},
      {id:"trad-catholic",label:"Catholic"},{id:"trad-orthodox",label:"Orthodox"},
      {id:"trad-lutheran",label:"Lutheran"},{id:"trad-reformed",label:"Reformed"},
      {id:"where-agree",label:"Agreement"},{id:"where-clash",label:"Clash"},{id:"history",label:"History"},
      {id:"sources",label:"Sources"},{id:"thread",label:"Thread"}
    ]
  };

  function renderGlance(data) {
    var cols = data.glance.columns;
    var html = '<div class="glance-wrap"><table class="glance-table"><thead><tr><th class="row-label">Theme</th>';
    cols.forEach(function (c) {
      html +=
        '<th class="th-' +
        c.key +
        '">' +
        esc(c.label) +
        "</th>";
    });
    html += "</tr></thead><tbody>";
    data.glance.rows.forEach(function (row) {
      html += '<tr><th class="row-label" scope="row">' + esc(row.label) + "</th>";
      cols.forEach(function (c) {
        html +=
          "<td><p class=\"glance-cell-text\">" +
          esc(row.cells[c.key]) +
          '</p><a class="glance-link" href="#' +
          esc(c.anchor) +
          '">Explore tradition →</a></td>';
      });
      html += "</tr>";
    });
    html += "</tbody></table></div>";
    return html;
  }

  function renderTradition(t) {
    var account = t.account
      .map(function (p) {
        return "<p>" + esc(p) + "</p>";
      })
      .join("");
    var figs = t.figures
      .map(function (f) {
        return figLink(f.id, f.name);
      })
      .join("");
    return (
      '<section class="tradition-block trad-' +
      t.key +
      '" id="' +
      esc(t.id) +
      '">' +
      '<header class="tradition-block-header">' +
      '<p class="trad-name">' +
      esc(t.name) +
      "</p>" +
      "<h2>" +
      esc(t.subtitle) +
      "</h2>" +
      "</header>" +
      '<div class="tradition-grid">' +
      '<div class="tradition-main">' +
      '<div class="tradition-sub"><h3>The ' +
      esc(t.name) +
      " account</h3>" +
      account +
      "</div>" +
      '<div class="tradition-sub" style="margin-top:1.5rem"><h3>The argument</h3><p>' +
      esc(t.argument) +
      "</p></div>" +
      "</div>" +
      '<div class="tradition-side">' +
      '<div class="tradition-panel"><h3>The strongest objection</h3><p>' +
      esc(t.objection) +
      "</p></div>" +
      '<div class="tradition-panel"><h3>The response</h3><p>' +
      esc(t.response) +
      "</p></div>" +
      '<div class="tradition-panel"><h3>Key figures</h3><div class="key-figures">' +
      figs +
      "</div></div>" +
      "</div></div></section>"
    );
  }

  function renderExhibit(data) {
    var html = "";
    html +=
      '<header class="exhibit-hero" id="exhibit-top">' +
      '<div class="exhibit-hero-inner">' +
      '<a class="exhibit-back" href="concepts.html">← All Concepts</a>' +
      '<span class="exhibit-eyebrow">' +
      esc(data.domain) +
      "</span>" +
      "<h1>" +
      esc(data.title) +
      "</h1>" +
      '<p class="exhibit-question">' +
      esc(data.centralQuestion) +
      "</p>" +
      '<p class="exhibit-definition">' +
      esc(data.definition) +
      "</p>" +
      '<p class="exhibit-lead">' +
      esc(data.lead) +
      "</p>" +
      "</div></header>";

    html +=
      '<section class="exhibit-section" id="the-question">' +
      '<span class="exhibit-kicker">Orientation</span>' +
      "<h2>The Question</h2>" +
      '<div class="exhibit-question-block">' +
      '<p class="exhibit-question-quote">' +
      esc(data.questionQuote || "What does God do when He saves?") +
      "</p>" +
      '<p class="exhibit-question-note">' +
      esc(data.questionNote || "The central question is how the traditions understand the work of God in salvation.") +
      "</p>" +
      '<ul class="exhibit-q-list">' +
      data.deeperQuestions
        .map(function (q) {
          return "<li>" + esc(q) + "</li>";
        })
        .join("") +
      "</ul></div></section>";

    html +=
      '<section class="exhibit-section" id="at-a-glance">' +
      '<span class="exhibit-kicker">Comparison</span>' +
      "<h2>" + esc(data.glanceTitle || "At a Glance") + "</h2>" +
      renderGlance(data) +
      "</section>";

    data.traditions.forEach(function (t) {
      html += renderTradition(t);
    });

    html +=
      '<section class="exhibit-section" id="where-agree">' +
      '<span class="exhibit-kicker">Common ground</span>' +
      "<h2>Where the Traditions Agree</h2>" +
      '<div class="agree-grid">' +
      data.agreements
        .map(function (a) {
          return (
            '<div class="agree-item"><span class="agree-mark" aria-hidden="true"></span><p>' +
            esc(a) +
            "</p></div>"
          );
        })
        .join("") +
      "</div></section>";

    html +=
      '<section class="exhibit-section" id="where-clash">' +
      '<span class="exhibit-kicker">Disagreement</span>' +
      "<h2>Where the Traditions Clash</h2>";
    data.clashes.forEach(function (c) {
      html +=
        '<div class="clash-item"><h3>' +
        esc(c.title) +
        '</h3><div class="clash-grid">' +
        c.cells
          .map(function (cell) {
            return (
              '<div class="clash-cell"><span class="c-label">' +
              esc(cell.label) +
              "</span><p>" +
              esc(cell.text) +
              "</p></div>"
            );
          })
          .join("") +
        "</div>";
      if (c.flow) {
        html += '<p class="clash-flow">' + esc(c.flow) + "</p>";
      }
      html += "</div>";
    });
    html += "</section>";

    html +=
      '<section class="exhibit-section" id="history">' +
      '<span class="exhibit-kicker">Development</span>' +
      "<h2>The History of the Debate</h2>" +
      '<div class="timeline">';
    data.timeline.forEach(function (n) {
      var titleHtml = n.figureId
        ? '<a href="figures/profile.html?id=' + encodeURIComponent(n.figureId) + '">' + esc(n.title) + "</a>"
        : esc(n.title);
      html +=
        '<div class="timeline-node">' +
        '<div class="timeline-date">' +
        esc(n.date) +
        "</div>" +
        '<div class="timeline-title">' +
        titleHtml +
        "</div>" +
        '<p class="timeline-sig">' +
        esc(n.significance) +
        "</p>" +
        "<details><summary>Read more</summary><p class=\"timeline-extra\">" +
        esc(n.extra) +
        "</p></details></div>";
    });
    html += "</div></section>";

    html +=
      '<section class="exhibit-section" id="sources">' +
      '<span class="exhibit-kicker">Primary texts</span>' +
      "<h2>Read the Sources</h2>" +
      "<p class=\"exhibit-lead\" style=\"margin-top:0;margin-bottom:1.5rem\">The best way to understand a theological tradition is to encounter its arguments in its own words. Prefer public-domain editions.</p>" +
      '<div class="source-grid">';
    data.sources.forEach(function (s) {
      var external = /^https?:/i.test(s.href);
      html +=
        '<a class="source-card" href="' +
        esc(s.href) +
        '"' +
        (external ? ' target="_blank" rel="noopener"' : "") +
        ">" +
        '<span class="src-author">' +
        esc(s.author) +
        "</span>" +
        '<span class="src-title">' +
        esc(s.title) +
        "</span>" +
        '<span class="src-meta"><span>' +
        esc(s.note) +
        "</span>" +
        (external ? '<span class="src-ext">External source</span>' : "<span></span>") +
        "</span></a>";
    });
    html += "</div></section>";

    html +=
      '<section class="exhibit-section" id="thread">' +
      '<span class="exhibit-kicker">Connections</span>' +
      "<h2>Follow the Thread</h2>" +
      '<div class="thread">';
    data.thread.forEach(function (n, i) {
      if (i) html += '<span class="arrow" aria-hidden="true">→</span>';
      if (n.current) {
        html += '<span class="node is-current">' + esc(n.name) + "</span>";
      } else if (n.id) {
        html +=
          '<a href="concept.html?id=' + encodeURIComponent(n.id) + '">' + esc(n.name) + "</a>";
      } else {
        html += "<span class=\"node\">" + esc(n.name) + "</span>";
      }
    });
    html +=
      '</div><p class="exhibit-kicker" style="margin-top:1.25rem">Related concepts</p><div class="related-chips">';
    data.related.forEach(function (r) {
      if (r.id) {
        html +=
          '<a href="concept.html?id=' + encodeURIComponent(r.id) + '">' + esc(r.name) + "</a>";
      } else {
        html += "<span class=\"node\" style=\"padding:0.4rem 0.75rem;border:1px solid var(--hairline);border-radius:999px;color:var(--ink-dim);font-size:0.9rem\">" + esc(r.name) + "</span>";
      }
    });
    html +=
      '</div></section><p class="exhibit-footnote">Lumen Fidei presents classical positions for study. Terminology differs across traditions; identical words do not always mean identical things. Continue on the Theological Tree and in the primary sources.</p>';

    return html;
  }

  function setupProgress(sections) {
    var nav = document.getElementById("exhibit-progress");
    var inner = document.getElementById("exhibit-progress-inner");
    if (!nav || !inner) return;
    inner.innerHTML = sections
      .map(function (s) {
        return '<a href="#' + esc(s.id) + '" data-section="' + esc(s.id) + '">' + esc(s.label) + "</a>";
      })
      .join("");
    nav.hidden = false;

    var links = inner.querySelectorAll("a");
    var map = {};
    sections.forEach(function (s) {
      map[s.id] = document.getElementById(s.id);
    });

    function onScroll() {
      var active = sections[0] && sections[0].id;
      var y = window.scrollY + 140;
      sections.forEach(function (s) {
        var el = map[s.id];
        if (el && el.offsetTop <= y) active = s.id;
      });
      links.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("data-section") === active);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function mountExhibit(root, data) {
    document.body.classList.add("has-exhibit");
    document.title = data.title + " — Concepts — Lumen Fidei";
    root.innerHTML = renderExhibit(data);
    setupProgress(data.sections);
  }

  function mountGraceExhibit(root) {
    mountExhibit(root, GRACE_EXHIBIT);
  }

  function mountJustificationExhibit(root) {
    mountExhibit(root, JUSTIFICATION_EXHIBIT);
  }

  var EXHIBITS = {
    grace: GRACE_EXHIBIT,
    justification: JUSTIFICATION_EXHIBIT
  };

  global.ConceptExhibit = {
    GRACE: GRACE_EXHIBIT,
    JUSTIFICATION: JUSTIFICATION_EXHIBIT,
    mountGrace: mountGraceExhibit,
    mountJustification: mountJustificationExhibit,
    mount: function (root, id) {
      if (EXHIBITS[id]) mountExhibit(root, EXHIBITS[id]);
    },
    hasExhibit: function (id) {
      return !!EXHIBITS[id];
    }
  };
})(window);

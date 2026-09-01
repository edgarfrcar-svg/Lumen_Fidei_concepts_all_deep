// Tradition colors
const TRADITION_COLORS = {
  early:      { name: 'Early Church (pre-1054)', color: '#a97142', glow: '#e6b988' },
  catholic:   { name: 'Catholic',                 color: '#c9a227', glow: '#ffd98e' },
  orthodox:   { name: 'Eastern Orthodox',         color: '#6b3a76', glow: '#c79bd6' },
  protestant: { name: 'Protestant',               color: '#3a6ea5', glow: '#9ecbff' },
};

const FIGURES = [
  {
    "id": "ignatius",
    "name": "Ignatius of Antioch",
    "dates": "c. 35–c. 107",
    "tradition": "early",
    "epithet": "Bishop of Antioch, Apostolic Father",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ignatius_of_Antioch.jpg",
    "works": [
      {
        "title": "Seven Genuine Letters"
      },
      {
        "title": "Epistle to the Ephesians",
        "url": "texts/work.html#ignatius-ephesians"
      },
      {
        "title": "Epistle to the Magnesians"
      },
      {
        "title": "Epistle to the Trallians"
      },
      {
        "title": "Epistle to the Romans",
        "url": "texts/work.html#ignatius-romans"
      },
      {
        "title": "Epistle to the Philadelphians"
      },
      {
        "title": "Epistle to the Smyrnaeans",
        "url": "texts/work.html#ignatius-smyrnaeans"
      },
      {
        "title": "Epistle to Polycarp"
      },
      {
        "title": "The Martyrdom of Ignatius"
      }
    ]
  },
  {
    "id": "polycarp",
    "name": "Polycarp of Smyrna",
    "dates": "c. 69–c. 155",
    "tradition": "early",
    "epithet": "Bishop of Smyrna, disciple of the Apostle John",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Polycarp_of_Smyrna%2C_Menologion_of_Basil_II.png",
    "works": [
      {
        "title": "Letter to the Philippians",
        "url": "texts/work.html#polycarp-philippians"
      }
    ]
  },
  {
    "id": "justin",
    "name": "Justin Martyr",
    "dates": "c. 100–c. 165",
    "tradition": "early",
    "epithet": "Philosopher and Apologist",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Justin_Martyr.jpg",
    "works": [
      {
        "title": "First Apology"
      },
      {
        "title": "Second Apology"
      },
      {
        "title": "Dialogue with Trypho"
      }
    ]
  },
  {
    "id": "irenaeus",
    "name": "Irenaeus of Lyons",
    "dates": "c. 130–c. 202",
    "tradition": "early",
    "epithet": "Bishop of Lyons, opponent of Gnosticism",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Irenaeus_of_Lyons.png",
    "works": [
      {
        "title": "Against Heresies (opening)",
        "url": "texts/work.html#irenaeus-heresies"
      },
      {
        "title": "Demonstration of the Apostolic Preaching"
      }
    ]
  },
  {
    "id": "tertullian",
    "name": "Tertullian",
    "dates": "c. 155–c. 220",
    "tradition": "early",
    "epithet": "Father of Latin theology",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Tertullian.jpg",
    "works": [
      {
        "title": "Apology"
      },
      {
        "title": "Against Praxeas"
      },
      {
        "title": "On the Flesh of Christ"
      },
      {
        "title": "On Baptism"
      },
      {
        "title": "Prescription against Heretics"
      }
    ]
  },
  {
    "id": "origen",
    "name": "Origen of Alexandria",
    "dates": "c. 184–c. 253",
    "tradition": "early",
    "epithet": "Biblical scholar and speculative theologian",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Origen.jpg",
    "works": [
      {
        "title": "On First Principles"
      },
      {
        "title": "Against Celsus"
      },
      {
        "title": "Commentary on John"
      }
    ]
  },
  {
    "id": "cyprian",
    "name": "Cyprian of Carthage",
    "dates": "c. 200–258",
    "tradition": "early",
    "epithet": "Bishop of Carthage, martyr",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Stcyprian.jpg",
    "works": [
      {
        "title": "On the Unity of the Catholic Church"
      },
      {
        "title": "On the Lapsed"
      },
      {
        "title": "Epistles"
      }
    ]
  },
  {
    "id": "athanasius",
    "name": "Athanasius of Alexandria",
    "dates": "c. 296–373",
    "tradition": "early",
    "epithet": "Defender of the Nicene faith against Arianism",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Athanasius_of_Alexandria.jpg",
    "works": [
      {
        "title": "On the Incarnation of the Word",
        "url": "texts/work.html#athanasius-incarnation"
      },
      {
        "title": "Against the Gentiles"
      },
      {
        "title": "Life of Antony"
      },
      {
        "title": "Defense Against the Arians"
      },
      {
        "title": "On the Decrees of the Synod of Nicaea"
      },
      {
        "title": "The Festal Letters"
      },
      {
        "title": "Deposition of Arius"
      }
    ]
  },
  {
    "id": "basil",
    "name": "Basil the Great",
    "dates": "c. 330–379",
    "tradition": "early",
    "epithet": "Cappadocian Father, Bishop of Caesarea",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Basil_the_Great%2C_father_of_the_church.jpg",
    "works": [
      {
        "title": "On the Holy Spirit",
        "url": "texts/work.html#basil-holy-spirit"
      },
      {
        "title": "Hexaemeron"
      },
      {
        "title": "Against Eunomius"
      }
    ]
  },
  {
    "id": "gregory-nazianzen",
    "name": "Gregory of Nazianzus",
    "dates": "c. 329–390",
    "tradition": "early",
    "epithet": "The Theologian, Cappadocian Father",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Gregory_the_Theologian_La_Martorana_Palermo_2008-08-27.jpg",
    "works": [
      {
        "title": "Theological Orations"
      },
      {
        "title": "Orations"
      }
    ]
  },
  {
    "id": "gregory-nyssa",
    "name": "Gregory of Nyssa",
    "dates": "c. 335–c. 395",
    "tradition": "early",
    "epithet": "Cappadocian Father, mystical theologian",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Gregory_of_Nyssa.jpg",
    "works": [
      {
        "title": "Life of Moses"
      },
      {
        "title": "On the Soul and the Resurrection"
      },
      {
        "title": "Against Eunomius"
      }
    ]
  },
  {
    "id": "chrysostom",
    "name": "John Chrysostom",
    "dates": "c. 347–407",
    "tradition": "early",
    "epithet": "Archbishop of Constantinople, “Golden-Mouthed”",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Byzantinischer_Mosaizist_des_9._Jahrhunderts_003.jpg",
    "works": [
      {
        "title": "On the Priesthood",
        "url": "texts/work.html#chrysostom-priesthood"
      },
      {
        "title": "Homilies on Matthew"
      },
      {
        "title": "Homilies on John"
      },
      {
        "title": "Homilies on Romans"
      }
    ]
  },
  {
    "id": "ambrose",
    "name": "Ambrose of Milan",
    "dates": "c. 340–397",
    "tradition": "early",
    "epithet": "Bishop of Milan, Doctor of the Church",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/AmbroseOfMilan_%28cropped%29.jpg",
    "works": [
      {
        "title": "On the Holy Spirit"
      },
      {
        "title": "On the Mysteries"
      },
      {
        "title": "On the Duties of the Clergy"
      },
      {
        "title": "Hexaemeron"
      }
    ]
  },
  {
    "id": "jerome",
    "name": "Jerome",
    "dates": "c. 347–420",
    "tradition": "early",
    "epithet": "Translator of the Vulgate, Doctor of the Church",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Jerome_Writing-Caravaggio_(1605-6).jpg",
    "works": [
      {
        "title": "Letters"
      },
      {
        "title": "Lives of Illustrious Men"
      },
      {
        "title": "Against Jovinian"
      }
    ]
  },
  {
    "id": "augustine",
    "name": "Augustine of Hippo",
    "dates": "354–430",
    "tradition": "early",
    "epithet": "Bishop of Hippo, Doctor of Grace",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Antonio%20Rodr%C3%ADguez%20-%20Saint%20Augustine%20-%20Google%20Art%20Project.jpg",
    "slug": "figures/profile.html?id=augustine",
    "works": [
      {
        "title": "Confessions",
        "url": "texts/work.html#augustine-confessions"
      },
      {
        "title": "The City of God"
      },
      {
        "title": "On the Trinity"
      },
      {
        "title": "On the Spirit and the Letter"
      }
    ]
  },
  {
    "id": "pelagius",
    "name": "Pelagius",
    "dates": "c. 354–c. 418",
    "tradition": "early",
    "epithet": "Ascetic teacher condemned as a heretic after his controversy with Augustine",
    "img": null,
    "slug": "figures/profile.html?id=pelagius",
    "works": [
      {
        "title": "Letter to Demetrias"
      },
      {
        "title": "Commentary on Paul's Epistles"
      }
    ]
  },
  {
    "id": "cyril-alex",
    "name": "Cyril of Alexandria",
    "dates": "c. 376–444",
    "tradition": "early",
    "epithet": "Patriarch of Alexandria, champion of the Theotokos",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Icon_St._Cyril_of_Alexandria.jpg",
    "works": [
      {
        "title": "Commentary on John"
      },
      {
        "title": "Five Tomes Against Nestorius"
      }
    ]
  },
  {
    "id": "leo",
    "name": "Leo the Great",
    "dates": "c. 400–461",
    "tradition": "early",
    "epithet": "Pope, Doctor of the Church",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Greek_Fresco_of_Saint_Leo_I_Pope_of_Rome.jpg",
    "works": [
      {
        "title": "Sermons"
      },
      {
        "title": "Letters"
      }
    ]
  },
  {
    "id": "maximus",
    "name": "Maximus the Confessor",
    "dates": "c. 580–662",
    "tradition": "orthodox",
    "epithet": "Monk and theologian of the dyothelite controversy",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Maximus_the_Confessor.jpg",
    "works": [
      {
        "title": "Ambigua"
      },
      {
        "title": "Centuries on Love"
      }
    ]
  },
  {
    "id": "damascene",
    "name": "John of Damascus",
    "dates": "c. 675–749",
    "tradition": "orthodox",
    "epithet": "Last of the Greek Church Fathers, hymnographer",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ioann_Damaskin_ikona.jpg",
    "works": [
      {
        "title": "An Exact Exposition of the Orthodox Faith",
        "url": "texts/work.html#damascene-faith"
      },
      {
        "title": "Apologia Against Those Who Decry Holy Images"
      }
    ]
  },
  {
    "id": "anselm",
    "name": "Anselm of Canterbury",
    "dates": "1033–1109",
    "tradition": "catholic",
    "epithet": "Father of Scholasticism, ontological argument",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Anselm_of_Canterbury.jpg",
    "works": [
      {
        "title": "Cur Deus Homo (Why God Became Man)",
        "url": "texts/work.html#anselm-cur-deus-homo"
      },
      {
        "title": "Proslogion",
        "url": "texts/work.html#anselm-proslogion"
      },
      {
        "title": "Monologion"
      },
      {
        "title": "Why God Became Man",
        "url": "texts/work.html#anselm-cur-deus-homo"
      },
      {
        "title": "Reply to Gaunilo"
      }
    ]
  },
  {
    "id": "aquinas",
    "name": "Thomas Aquinas",
    "dates": "1225–1274",
    "tradition": "catholic",
    "epithet": "Doctor Angelicus, author of the Summa Theologiae",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/St-thomas-aquinas.jpg",
    "slug": "figures/profile.html?id=aquinas",
    "works": [
      {
        "title": "Summa Theologiae",
        "url": "texts/summa.html"
      },
      {
        "title": "Summa contra Gentiles"
      }
    ]
  },
  {
    "id": "bonaventure",
    "name": "Bonaventure",
    "dates": "c. 1217–1274",
    "tradition": "catholic",
    "epithet": "Seraphic Doctor, Franciscan theologian",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Giovanni_Antonio_Pordenone_%281483-1484-1539%29_-_Saint_Bonaventure_-_NG4038_-_National_Gallery.jpg",
    "works": [
      {
        "title": "Journey of the Mind into God"
      },
      {
        "title": "Breviloquium"
      }
    ]
  },
  {
    "id": "teresa",
    "name": "Teresa of Ávila",
    "dates": "1515–1582",
    "tradition": "catholic",
    "epithet": "Carmelite mystic, Doctor of the Church",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Peter_Paul_Rubens_138.jpg",
    "works": [
      {
        "title": "The Life"
      },
      {
        "title": "Interior Castle"
      },
      {
        "title": "Way of Perfection"
      }
    ]
  },
  {
    "id": "john-cross",
    "name": "John of the Cross",
    "dates": "1542–1591",
    "tradition": "catholic",
    "epithet": "Carmelite mystic, Doctor of the Church",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Arnold_van_Westerhout_-_Portrait_of_John_of_the_Cross.jpeg",
    "works": [
      {
        "title": "Dark Night of the Soul"
      },
      {
        "title": "Ascent of Mount Carmel"
      },
      {
        "title": "Spiritual Canticle"
      }
    ]
  },
  {
    "id": "newman",
    "name": "John Henry Newman",
    "dates": "1801–1890",
    "tradition": "catholic",
    "epithet": "Cardinal, theorist of the development of doctrine",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/John_Henry_Newman_by_Sir_John_Everett_Millais%2C_1st_Bt.jpg",
    "works": [
      {
        "title": "Essay on the Development of Christian Doctrine"
      },
      {
        "title": "Apologia pro Vita Sua"
      },
      {
        "title": "Grammar of Assent"
      }
    ]
  },
  {
    "id": "palamas",
    "name": "Gregory Palamas",
    "dates": "1296–1359",
    "tradition": "orthodox",
    "epithet": "Archbishop of Thessaloniki, essence–energies distinction",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Gregor_Palamas_by_North_Greece_anonym_%2815th_c.%2C_Pushkin_museum%29.jpg",
    "works": [
      {
        "title": "Triads"
      }
    ]
  },
  {
    "id": "schmemann",
    "name": "Alexander Schmemann",
    "dates": "1921–1983",
    "tradition": "orthodox",
    "epithet": "Liturgical theologian, dean of St Vladimir’s Seminary",
    "img": null,
    "works": [
      {
        "title": "For the Life of the World"
      }
    ]
  },
  {
    "id": "luther",
    "name": "Martin Luther",
    "dates": "1483–1546",
    "tradition": "protestant",
    "epithet": "Augustinian friar, catalyst of the Reformation",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Martin-Luther-1526.jpg",
    "slug": "figures/profile.html?id=luther",
    "works": [
      {
        "title": "95 Theses"
      },
      {
        "title": "On the Freedom of a Christian",
        "url": "texts/work.html#luther-freedom"
      },
      {
        "title": "The Bondage of the Will"
      },
      {
        "title": "Small Catechism"
      },
      {
        "title": "Large Catechism"
      }
    ]
  },
  {
    "id": "calvin",
    "name": "John Calvin",
    "dates": "1509–1564",
    "tradition": "protestant",
    "epithet": "Reformer of Geneva, author of the Institutes",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/John_Calvin_11.jpg",
    "works": [
      {
        "title": "Institutes of the Christian Religion — Book I (opening)",
        "url": "texts/work.html#calvin-institutes-1"
      },
      {
        "title": "Institutes of the Christian Religion",
        "url": "texts/work.html#calvin-institutes-1"
      },
      {
        "title": "Commentaries"
      }
    ]
  },
  {
    "id": "melanchthon",
    "name": "Philip Melanchthon",
    "dates": "1497–1560",
    "tradition": "protestant",
    "epithet": "Praeceptor Germaniae, Augsburg Confession",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Philipp_Melanchthon_2.jpg",
    "works": [
      {
        "title": "Loci Communes"
      },
      {
        "title": "Augsburg Confession"
      }
    ]
  },
  {
    "id": "hooker",
    "name": "Richard Hooker",
    "dates": "1554–1600",
    "tradition": "protestant",
    "epithet": "Anglican divine, Of the Laws of Ecclesiastical Polity",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Wenceslas_Hollar_-_Richard_Hooker_%28State_1%29.jpg",
    "works": [
      {
        "title": "Of the Laws of Ecclesiastical Polity"
      }
    ]
  },
  {
    "id": "edwards",
    "name": "Jonathan Edwards",
    "dates": "1703–1758",
    "tradition": "protestant",
    "epithet": "Puritan theologian of the Great Awakening",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Jonathan_Edwards.jpg",
    "works": [
      {
        "title": "Religious Affections"
      },
      {
        "title": "Freedom of the Will"
      },
      {
        "title": "Sinners in the Hands of an Angry God"
      }
    ]
  },
  {
    "id": "wesley",
    "name": "John Wesley",
    "dates": "1703–1791",
    "tradition": "protestant",
    "epithet": "Founder of Methodism",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/John_Wesley_by_George_Romney.jpg",
    "works": [
      {
        "title": "Sermons"
      },
      {
        "title": "A Plain Account of Christian Perfection"
      },
      {
        "title": "Explanatory Notes on the New Testament"
      }
    ]
  },
  {
    "id": "spurgeon",
    "name": "Charles Spurgeon",
    "dates": "1834–1892",
    "tradition": "protestant",
    "epithet": "The “Prince of Preachers,” Baptist pastor",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Charles_Haddon_Spurgeon_by_Alexander_Melville.jpg",
    "works": [
      {
        "title": "Treasury of David"
      },
      {
        "title": "Sermons"
      },
      {
        "title": "Lectures to My Students"
      }
    ]
  }
];

function monogram(name) {
  const parts = name.replace(/of\s|the\s/gi, '').split(/\s+/).filter(Boolean);
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

function portraitHTML(fig) {
  const t = TRADITION_COLORS[fig.tradition];
  if (fig.img) {
    const mono = monogram(fig.name);
    return '<img src="' + fig.img + '" alt="Portrait of ' + fig.name + '" loading="lazy" onerror="this.outerHTML=\'<span class=monogram style=color:' + t.color + '>' + mono + '</span>\'">';
  }
  return '<span class="monogram" style="color:' + t.color + '">' + monogram(fig.name) + '</span>';
}

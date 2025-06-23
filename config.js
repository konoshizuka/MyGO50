// config.js

const gojuonData = [
  // あ行
  {
    kana: 'あ',
    romaji: 'a',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '——<span class="highlight">あ</span>のちゃん。 ——<span class="highlight">あ</span>のちゃん？',
      highlightedKana: 'あ',
      chinese: '“——小爱。 ——小爱？”',
      speaker: '高松 燈 & 椎名 立希',
      audioSrc: 'assets/audio/a.MP3',
      imageSrc: 'assets/image/a.jpg'
    }
  },
  {
    kana: 'い',
    romaji: 'i',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>一<rt><span class="highlight">い</span>ち</rt></ruby><ruby>生<rt>せ<span class="highlight">い</span></rt></ruby> バンドしてくれる？',
      highlightedKana: 'い',
      chinese: '你愿意和我组一辈子乐队吗？',
      speaker: '高松 燈',
      audioSrc: 'assets/audio/i.MP3',
      imageSrc: 'assets/image/i.jpg'
    } 
  },
  {
    kana: 'う',
    romaji: 'u',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">う</span>た',
      highlightedKana: 'う',
      chinese: '诗歌',
      speaker: '高松 燈',
      audioSrc: 'assets/audio/u.MP3',
      imageSrc: 'assets/image/u.jpg'
    }
  },
  {
    kana: 'え',
    romaji: 'e',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">え</span>っと…<ruby>楽<rt>らく</rt></ruby><ruby>奈<rt>な</rt></ruby>ちゃんだっけ？',
      highlightedKana: 'え',
      chinese: '那个…你是叫乐奈吧？',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/e.MP3',
      imageSrc: 'assets/image/e.jpg'
    }
  },
  {
    kana: 'お',
    romaji: 'o',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">お</span><ruby>幸<rt>しあわ</rt></ruby>せに',
      highlightedKana: 'お',
      chinese: '祝你幸福',
      speaker: '豊川 祥子',
      audioSrc: 'assets/audio/o.MP3',
      imageSrc: 'assets/image/o.jpg'
    }
  },
  // か行
  {
    kana: 'か',
    romaji: 'ka',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby><span class="highlight">か</span>面<rt>めん</rt></ruby>バンドの<ruby>自<rt>じ</rt></ruby><span class="highlight">か</span>くをおわすれなく',
      highlightedKana: 'か',
      chinese: '别忘了身为假面乐队成员的自觉',
      speaker: '豊川 祥子',
      audioSrc: 'assets/audio/ka.MP3',
      imageSrc: 'assets/image/ka.jpg'
    }
  },
  {
    kana: 'き',
    romaji: 'ki',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>切<rt><span class="highlight">き</span></rt></ruby>れてる一',
      highlightedKana: 'き',
      chinese: '被剪开了！',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/ki.MP3',
      imageSrc: 'assets/image/ki.jpg'
    }
  },
  {
    kana: 'く',
    romaji: 'ku',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>苦<rt><span class="highlight">く</span>る</rt></ruby>しんで',
      highlightedKana: 'く',
      chinese: '痛苦着',
      speaker: '椎名 立希',
      audioSrc: 'assets/audio/ku.MP3',
      imageSrc: 'assets/image/ku.jpg'
    }
  },
  {
    kana: 'け',
    romaji: 'ke',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">ケ</span>ンカ<ruby>売<rt>う</rt></ruby>ってるの？',
      highlightedKana: 'け',
      chinese: '你是来找茬的吗？',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/ke.MP3',
      imageSrc: 'assets/image/ke.jpg'
    }
  },
  {
    kana: 'こ',
    romaji: 'ko',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">こ</span>れ いらないから',
      highlightedKana: 'こ',
      chinese: '还你 不需要',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/ko.MP3',
      imageSrc: 'assets/image/ko.jpg'
    }
  },
  // さ行
  {
    kana: 'さ',
    romaji: 'sa',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">さ</span>きちゃん!',
      highlightedKana: 'さ',
      chinese: '小祥！',
      speaker: '三角 初音',
      audioSrc: 'assets/audio/sa.MP3',
      imageSrc: 'assets/image/sa.jpg'
    }
  },
  {
    kana: 'し',
    romaji: 'shi',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>知<rt><span class="highlight">し</span></rt></ruby>らない',
      highlightedKana: 'し',
      chinese: '我不认识她',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/shi.MP3',
      imageSrc: 'assets/image/shi.jpg'
    }
  },
  {
    kana: 'す',
    romaji: 'su',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">す</span>ごい',
      highlightedKana: 'す',
      chinese: '好厉害',
      speaker: '高松 燈',
      audioSrc: 'assets/audio/su.MP3',
      imageSrc: 'assets/image/su.jpg'
    }
  },
  { 
    kana: 'せ',
    romaji: 'se',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>先<rt>せ</rt></ruby><ruby>輩<rt>んぱい</rt></ruby>たちが<ruby>優<rt>ゆう</rt></ruby><ruby>先<rt><span class="highlight">せ</span>ん</rt></ruby>',
      highlightedKana: 'せ',
      chinese: '要让前辈们先拿',
      speaker: '椎名 立希',
      audioSrc: 'assets/audio/se.MP3',
      imageSrc: 'assets/image/se.jpg'
    }
  },
  {
    kana: 'そ',
    romaji: 'so',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">そ</span>うだよ',
      highlightedKana: 'そ',
      chinese: '是啊',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/so.MP3',
      imageSrc: 'assets/image/so.jpg'
    }
  },
  // た行
  {
    kana: 'た',
    romaji: 'ta',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">た</span>だいま',
      highlightedKana: 'た',
      chinese: '我回来了',
      speaker: '豊川 祥子',
      audioSrc: 'assets/audio/ta.MP3',
      imageSrc: 'assets/image/ta.jpg'
    }
  },
  {
    kana: 'ち',
    romaji: 'chi',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>千<rt><span class="highlight">ち</span></rt></ruby><ruby>早<rt>はや</rt></ruby><ruby>愛<rt>あい</rt></ruby><ruby>音<rt>ね</rt></ruby>です',
      highlightedKana: 'ち',
      chinese: '我叫千早爱音',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/chi.MP3',
      imageSrc: 'assets/image/chi.jpg'
    }
  },
  {
    kana: 'つ',
    romaji: 'tsu',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>次<rt><span class="highlight">つ</span>ぎ</rt></ruby>は ちゃんとライブしたい',
      highlightedKana: 'つ',
      chinese: '下次 我想好好地演出',
      speaker: '椎名 立希',
      audioSrc: 'assets/audio/tsu.MP3',
      imageSrc: 'assets/image/tsu.jpg'
    }
  },
  {
    kana: 'て',
    romaji: 'te',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">て</span>か<ruby>無<rt>む</rt></ruby><ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>じゃない?',
      highlightedKana: 'て',
      chinese: '而且这也太不负责了吧？',
      speaker: '椎名 立希',
      audioSrc: 'assets/audio/te.MP3',
      imageSrc: 'assets/image/te.jpg'
    }
  },
  {
    kana: 'と',
    romaji: 'to',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">と</span> が わ グループ♡',
      highlightedKana: 'と',
      chinese: '「<ruby>丰川<rt>TGW</rt></ruby>集团♡」',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/to.MP3',
      imageSrc: 'assets/image/to.jpg'
    }
  },
  // な行
  {
    kana: 'な',
    romaji: 'na',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">な</span>んで<ruby>春<rt>はる</rt></ruby><ruby>日<rt>ひ</rt></ruby><ruby>影<rt>かげ</rt></ruby>やったの?',
      highlightedKana: 'な',
      chinese: '为什么要演奏《春日影》?',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/na.MP3',
      imageSrc: 'assets/image/na.jpg'
    }
  },
  {
    kana: 'に',
    romaji: 'ni',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>人<rt><span class="highlight">に</span>ん</rt></ruby><ruby>間<rt>げん</rt></ruby><span class="highlight">に</span>なりたいですわ',
      highlightedKana: 'に',
      chinese: '我好想 成为人类啊',
      speaker: '豊川 祥子',
      audioSrc: 'assets/audio/ni.MP3',
      imageSrc: 'assets/image/ni.jpg'
    }
  },
  {
    kana: 'ぬ',
    romaji: 'nu',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>びしょ<rt></rt></ruby><span class="highlight">ぬ</span><ruby>れ<rt></rt></ruby>じゃない 大<ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>',
      highlightedKana: 'ぬ',
      chinese: '怎么湿成这样 没事吧',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/nu.MP3',
      imageSrc: 'assets/image/nu.jpg'
    }
  },
  {
    kana: 'ね',
    romaji: 'ne',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">ね</span>こ<ruby>長<rt>なが</rt></ruby>っ',
      highlightedKana: 'ね',
      chinese: '好长一条猫',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/ne.MP3',
      imageSrc: 'assets/image/ne.jpg'
    }
  },
  {
    kana: 'の',
    romaji: 'no',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>野<rt><span class="highlight">の</span></rt></ruby><ruby>良<rt>ら</rt></ruby><ruby>猫<rt>ねこ</rt></ruby>',
      highlightedKana: 'の',
      chinese: '野猫',
      speaker: '椎名 立希',
      audioSrc: 'assets/audio/no.MP3',
      imageSrc: 'assets/image/no.jpg'
    }
  },
  // は行
  {
    kana: 'は',
    romaji: 'ha',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">は</span>ああ?',
      highlightedKana: 'は',
      chinese: '哈？',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/ha.MP3',
      imageSrc: 'assets/image/ha.jpg'
    }
  },
  {
    kana: 'ひ',
    romaji: 'hi',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">ひ</span>どい',
      highlightedKana: 'ひ',
      chinese: '太过分了',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/hi.MP3',
      imageSrc: 'assets/image/hi.jpg'
    }
  },
  {
    kana: 'ふ',
    romaji: 'fu',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '「<ruby>普<rt><span class="highlight">ふ</span></rt></ruby><ruby>通<rt>つう</rt></ruby>」とか「あたりまえ」ってなんだろう',
      highlightedKana: 'ふ',
      chinese: '「普通」和「理所当然」是什么呢?',
      speaker: '高松 燈',
      audioSrc: 'assets/audio/fu.MP3',
      imageSrc: 'assets/image/fu.jpg'
    }
  },
  {
    kana: 'へ',
    romaji: 'he',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '「<ruby>碧<rt><span class="highlight">へ</span>い</rt></ruby><ruby>天<rt>てん</rt></ruby><ruby>伴<rt>ばん</rt></ruby><ruby>走<rt>そう</rt></ruby>」は?',
      highlightedKana: 'へ',
      chinese: '《碧天伴走》呢?',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/he.MP3',
      imageSrc: 'assets/image/he.jpg'
    }
  },
  {
    kana: 'ほ',
    romaji: 'ho',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight"><ruby>ホ<rt>ほ</rt></ruby></span>ントに入れんの こいつ',
      highlightedKana: 'ほ',
      chinese: '真的要让这家伙加入吗',
      speaker: '椎名 立希',
      audioSrc: 'assets/audio/ho.MP3',
      imageSrc: 'assets/image/ho.jpg'
    }
  },
  // ま行
  {
    kana: 'ま',
    romaji: 'ma',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">ま</span>いご い<span class="highlight">ま</span>すか?',
      highlightedKana: 'ま',
      chinese: '「迷路」在吗',
      speaker: '戸山 香澄',
      audioSrc: 'assets/audio/ma.MP3',
      imageSrc: 'assets/image/ma.jpg'
    }
  },
  {
    kana: 'み',
    romaji: 'mi',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">み</span>んないっしょで…',
      highlightedKana: 'み',
      chinese: '大家在一起 …',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/mi.MP3',
      imageSrc: 'assets/image/mi.jpg'
    }
  },
  {
    kana: 'む',
    romaji: 'mu',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>睦<rt><span class="highlight">む</span>つ</rt></ruby>ちゃんのせいだよ',
      highlightedKana: 'む',
      chinese: '全都是睦的错',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/mu.MP3',
      imageSrc: 'assets/image/mu.jpg'
    }
  },
  {
    kana: 'め',
    romaji: 'me',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">め</span>ちゃくちゃ<ruby>良<rt>よ</rt></ruby>かったよ',
      highlightedKana: 'め',
      chinese: '你唱得太棒了',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/me.MP3',
      imageSrc: 'assets/image/me.jpg'
    }
  },
  {
    kana: 'も',
    romaji: 'mo',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">も</span>う<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby> CRYCHICをやり<ruby>直<rt>なお</rt></ruby>したいの',
      highlightedKana: 'も',
      chinese: '我想让CRYCHIC重新开始',
      speaker: '長崎 そよ',
      audioSrc: 'assets/audio/mo.MP3',
      imageSrc: 'assets/image/mo.jpg'
    }
  },
  // や行
  {
    kana: 'や',
    romaji: 'ya',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">や</span>めんなよー',
      highlightedKana: 'や',
      chinese: '不要退出哦',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/ya.MP3',
      imageSrc: 'assets/image/ya.jpg'
    }
  },
  {
    kana: 'ゆ',
    romaji: 'yu',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>理<rt>り</rt></ruby><ruby>由<rt><span class="highlight">ゆ</span>う</rt></ruby>も<ruby>言<rt>い</rt></ruby>わなかったんでしょ?',
      highlightedKana: 'ゆ',
      chinese: '她连原因都没告诉你们吧',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/yu.MP3',
      imageSrc: 'assets/image/yu.jpg'
    }
  },
  {
    kana: 'よ',
    romaji: 'yo',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">よ</span>かったね',
      highlightedKana: 'よ',
      chinese: '挺好的 对吧?',
      speaker: '若葉 睦',
      audioSrc: 'assets/audio/yo.MP3',
      imageSrc: 'assets/image/yo.jpg'
    }
  },
  // ら行
  {
    kana: 'ら',
    romaji: 'ra',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>楽<rt><span class="highlight">ら</span></rt></ruby><ruby>奈<rt>な</rt></ruby>ちゃん',
      highlightedKana: 'ら',
      chinese: '小乐奈',
      speaker: '花園 多恵',
      audioSrc: 'assets/audio/ra.MP3',
      imageSrc: 'assets/image/ra.jpg'
    }
  },
  {
    kana: 'り',
    romaji: 'ri',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<span class="highlight">り</span>っきーだよ <span class="highlight">り</span>っきー',
      highlightedKana: 'り',
      chinese: '是狸希啦 狸希（立希的爱称）',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/ri.MP3',
      imageSrc: 'assets/image/ri.jpg'
    }
  },
  {
    kana: 'る',
    romaji: 'ru',
    type: 'hiragana',
    example: {
      sentenceWithRuby: 'あれ<span class="highlight">る</span></rt></ruby>ときた' ,
      highlightedKana: 'る',
      chinese: '那个好“噜”啊',
      speaker: '氷川 日菜',
      audioSrc: 'assets/audio/ru.MP3',
      imageSrc: 'assets/image/ru.jpg'
    }
  },
  {
    kana: 'れ',
    romaji: 're',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>練<rt><span class="highlight">れ</span>ん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>だっていつもはぐらかすし',
      highlightedKana: 'れ',
      chinese: '而且总是在找理由逃避练习',
      speaker: '椎名 立希',
      audioSrc: 'assets/audio/re.MP3',
      imageSrc: 'assets/image/re.jpg'
    }
  },
  {
    kana: 'ろ',
    romaji: 'ro',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>帰<rt>かえ</rt></ruby><span class="highlight">ろ</span>',
      highlightedKana: 'ろ',
      chinese: '回去吧',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/ro.MP3',
      imageSrc: 'assets/image/ro.jpg'
    }
  },
  // わ行
  {
    kana: 'わ',
    romaji: 'wa',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>忘<rt><span class="highlight">わ</span>す</rt></ruby>れさせて…',
      highlightedKana: 'わ',
      chinese: '忘记一切吧…',
      speaker: '豊川 祥子',
      audioSrc: 'assets/audio/wa.MP3',
      imageSrc: 'assets/image/wa.jpg'
    }
  },
  {
    kana: 'を',
    romaji: 'o (wo)',
    type: 'hiragana',
    example: {
      sentenceWithRuby: '<ruby>今<rt>きょ</rt></ruby><ruby>日<rt>う</rt></ruby>は<ruby>星<rt>ほし</rt></ruby><span class="highlight">を</span><ruby>見<rt>み</rt></ruby>た',
      highlightedKana: 'を',
      chinese: '今天看了星星',
      speaker: '千早 愛音',
      audioSrc: 'assets/audio/wo.MP3',
      imageSrc: 'assets/image/wo.jpg'
    }
  },
  // ん
  {
    kana: 'ん',
    romaji: 'n',
    type: 'hiragana',
    example: {
      sentenceWithRuby: 'あのちゃ<span class="highlight">ん</span>…',
      highlightedKana: 'ん',
      chinese: '小爱音…',
      speaker: '高松 燈',
      audioSrc: 'assets/audio/n.MP3',
      imageSrc: 'assets/image/n.jpg'
    }
  }, ]
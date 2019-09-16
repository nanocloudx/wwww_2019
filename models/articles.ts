import fetch from 'isomorphic-unfetch'
import { Article } from '../interfaces/article'

const API = process.env.API_HOST || 'http://localhost:5000'

export function getArticles(): Promise<Article[]> {
  return Promise.resolve([
    {
      id: 'example',
      category: 'development',
      title: 'テストのテストによるテストのためのテスト',
      date: '2019-09-15',
      tags: ['テスト', '開発'],
      body:
        'これはテストですこれはテストですこれはテストですこれはテストですこれはテストですこれはテストです'
    }
  ])
  // return fetch(`${API}/articles`)
  //   .then(res => res.json())
  //   .then(result => result.data)
}

export function getArticleById(id: string): Promise<Article> {
  return Promise.resolve({
    id: 'example',
    category: 'development',
    title: 'テストのテストによるテストのためのテスト',
    date: '2019-09-15',
    tags: ['テスト', '開発'],
    body: dummyMarkdown
  })
  // return fetch(`${API}/articles/${id}`).then(res => res.json())
}

const dummyMarkdown = `
## これはテスト記事です

そのころわたくしは、モリーオ市の博物局に勤めて居りました。

十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。殊にそのころ、モリーオ市では競馬場を植物園に拵こしらえ直すというので、その景色のいいまわりにアカシヤを植え込んだ広い地面が、切符売場や信号所の建物のついたまま、わたくしどもの役所の方へまわって来たものですから、わたくしはすぐ宿直という名前で月賦で買った小さな蓄音器と二十枚ばかりのレコードをもって、その番小屋にひとり住むことになりました。わたくしはそこの馬を置く場所に板で小さなしきいをつけて一疋の山羊を飼いました。毎朝その乳をしぼってつめたいパンをひたしてたべ、それから黒い革のかばんへすこしの書類や雑誌を入れ、靴もきれいにみがき、並木のポプラの影法師を大股にわたって市の役所へ出て行くのでした。

あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。

またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。

---

## 見出し２
### 見出し３
#### 見出し４

これは*イタリック体*です

これは**太字**です

これは\`monospace\`です

これは[リンク](/)です

- リスト１
- リスト２
- リスト３

> 引用  
> ほげほげほげ

\`\`\`
hello world!
foo bar baz
\`\`\`
`

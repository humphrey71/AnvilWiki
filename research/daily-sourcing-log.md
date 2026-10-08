
## 2026-09-24（cron 静默挖词）
**渠道执行：** CrazyGames /new 全列表抓取（UA 伪装 curl）+ 15 个候选单页 JSON-LD 评分数据 + Google autocomplete 探针 ×13 词。未触碰 steamdb.info（IP 封禁）。

**新增候选 8 个，决定分布：考虑 2 / 不做 6**
- 考虑：Island of Madness（当日上线 282 评分 9.3，autocomplete 已有「game」正向词）、Combo Critters（autocomplete 有 wiki/combinations 攻略需求，待核是否 2016 同名手游占位）
- 不做：Pulseboard QED、Banner Brawl、Yeetcat、Cornerlet、Turbo Trail、Hell Forge（均泛词噪音，suggest 被其他意图占位）

**异常发现：**
1. 本周新游爆发密度高：9/18 Cornerlet 已 2200 评分、9/18 Turbo Trail 1075 评分——平台内热度≠独立需求，6 个里 5 个 autocomplete 无游戏意图，SOP 两道门有效性再次验证
2. Island of Madness 是首个「上线当天即有正向 autocomplete 词」的候选，优先观察
3. 复查到期（9/26）：TNT Voxel、GYROBLADE 今日探针复测：TNT Voxel suggest 仍全是 voxel 泛词（无萌芽，趋向不做）；GYROBLADE 仍仅「gyroblade cutter」工具词（趋向不做）

**下次复查：** 9/26 TNT Voxel/GYROBLADE、9/27 Island of Madness/Combo Critters、9/30 Automata Protocol/Stack City

## 2026-09-25 每日挖词摘要
- 渠道：CrazyGames /new 列表抓取（60+ 游戏）→ 疑似新爆单页 JSON-LD 抽查（ratingCount/rating/datePublished）→ Google autocomplete 萌芽探针。未访问 steamdb.info（IP 封禁，遵守）。
- 新增候选 6 个，决定分布：考虑 2（Vox Heroes、Hyper Fliplation）/ 不做 4（Rocket Fling、Splash Sliders、Heist Hop、Akagram）。
- 亮点：Vox Heroes 17 天 1966 评分 9.3，autocomplete 已现「vox heroes wiki」攻略萌芽（待 SERP 验意图，有 Vox Machina 噪音）；Hyper Fliplation 9/25 当天上线 151 评分，autocomplete 未成形，按早期爆发轨观察。
- 异常发现：本日泛词噪音比例偏高（4/6），CG 平台内高评分（Rocket Fling 1493/9.0、Splash Sliders 1331/8.9）与独立搜索需求完全脱节，再次验证 SOP「平台流量≠独立需求」判据；多个新游单页（Slime Works、Paper Guys、FlyCraft、Steal Eggs、Project Gatherwood）JSON-LD 无 aggregateRating（评分未积累或页面未嵌入）。
- 复查计划：9/28 到期 Vox Heroes（SERP 验意图）、Hyper Fliplation（autocomplete 成形核查）。

## 2026-09-26 每日挖词摘要（cron 静默）
- 渠道：CrazyGames /new 列表抓取（UA 伪装 curl，60+ 游戏）→ 21 个新面孔/疑似新爆单页 JSON-LD 抽查（ratingCount/rating/datePublished）→ Google autocomplete 萌芽探针 ×24 词 + 在观候选复测 5 词。未访问 steamdb.info（IP 封禁，遵守）。
- 新增候选 15 个，决定分布：考虑 5 / 不做 10。
  - 考虑：Steal a Eggs（9/25 上线当天 3921 评分 9.3，入池以来最强爆发；autocomplete codes/script/spawn 生态丰富，待 SERP 验 Roblox 占位）、Kick Brainrot Balls（codes/wiki 需求在，疑 Roblox「Kick a Brainrot」占位）、Spectre Command AC-130（「ac130 simulator game/online/browser」游戏意图词群强，品牌词被 EDA 工具噪音占位）、Cannon Chaos Silly Shots（精确词条 autocomplete 已成形）、1 Speed Keyboard Escape（codes 需求成形但混 Fortnite 地图词）
  - 不做：One Shot Duel、Monster Island、Island Cleanup、Soccer Orbit、Paintseek、Paint Hide、Mob Rush、Escape Pickaxe Swing、Slime Works（均泛词噪音/需求未成形）
- 异常发现：
  1. Steal a Eggs 单日 ratingCount 3921 创入池纪录（此前最强 Island of Madness 上线当天 282）；Real War Not Fake 9/15 上线 11 天 12790 评分——平台内爆发强度与独立 wiki 需求继续脱钩，SOP 判据 1 持续有效
  2. 本日「codes 类」需求密度高（steal a egg / kick brainrot / 1 speed keyboard / escape pickaxe），多与 Roblox 同名原作纠缠，代码站护城河薄，统一 9/29 SERP 验意图后再判
  3. 在观候选复测：Island of Madness「island of madness game」萌芽仍在；Combo Critters「wiki/combinations/all combinations」攻略需求稳定且新增 battle checkers 长尾，趋向升级；Hyper Fliplation 仍无 autocomplete（需求未成形）；Vox Heroes「vox heroes wiki」稳定但仍混 Vox Machina 噪音；slime works game 无结果
- 复查计划：9/27 Island of Madness、Combo Critters（R1，Combo Critters 复测信号转好，R1 重点核 2016 同名手游占位）；9/29 本日 5 个新【考虑】统一 SERP 验意图。

## 2026-09-27 每日挖词（第5轮，定时任务）
- 渠道：CrazyGames /new（curl+UA 正常，70 个游戏 slug）；禁 steamdb 按要求未访问
- 新面孔 9 个：Obby: +1 Laser to Break Walls、Project Gatherwood、FlyCraft、Roll King、Slime Horde TD、Tanks 1944、Tap Fighter、Blocky Sword、Paper Guys/Blink（后两者无评分数据跳过）
- 决定分布：考虑 1（Obby: +1 Laser，9535 评分 9.4 但 autocomplete 全无结果）；不做 7（均为泛词噪音/单条回声）；做 0
- 到期复查：Island of Madness R1、Combo Critters R1（均为 9/27 手动补测，结果已入表：前者升【做】，后者维持考虑）
- 异常：无；suggestqueries.google.com 正常；9/29 到期行 Steal a Eggs 已预核 autocomplete（roblox 占位风险高）

## 2026-09-28（定时挖词）
- 渠道：CrazyGames /new（curl 带 UA 直接可解析，无需浏览器）
- 新增 5 个候选：考虑 1（Obby: +1 Digging Power Per Click，CG 当天上线 891 评 8.8，「+1 Laser」同系列，autocomplete 零萌芽按早期爆发轨观察，10/01 复查）、不做 4（Nations Royale 被 Mini Royale: Nations 占位；Arrow Slide Puzzle 为 MSN 泛品类词；Matchblast 泛品类+仅64评；Alien Attack Zad 零 autocomplete 且 9/14 已上线非新面孔）
- 到期复查：今日无到期行（Vox Heroes/Hyper Fliplation R1 已于本日早间轮处理）；9/29 到期 5 行（Steal a Eggs、Kick Brainrot Balls、Spectre Command、Cannon Chaos、1 Speed Keyboard Escape）明日处理
- 决定分布：考虑 1 / 不做 4；异常：无（Trends 本轮未调用，沿用 429 未测记录）

## 2026-09-30（定时挖词，补记 9/29 日志缺失）
- 渠道：CrazyGames /new（curl+UA 正常，95 个游戏）→ 新面孔单页 JSON-LD 批量抽查（33 页）→ Google autocomplete 探针 ×30 词。禁 steamdb 按要求未访问
- 新面孔 22 个，决定分布：考虑 7 / 不做 15
  - 考虑：+1 Speed Keyboard Obby（9/29 当天 1040 评 9.1，autocomplete 当天现「obby code」codes 萌芽，系列第三作）、Obby Steal an Egg（当天 538 评 8.7，steal-eggs 波浪第二作，仅自身回声）、Stickman Strike Force（当天 817 评 9.0，品牌回声+品类噪音）、Car Seller: Life Simulator（821 评 9.1，apk/mod 疑手游归属）、My Castle: Merge & Story（1198 评 8.9，品牌双回声无噪音）、City Gas Station Simulator（3403 评 9.2，本作词 3 条疑手游归属）、Rodha 2（764 评 9.4，「rodha 2 game/math playground」正向混 CAT 考试噪音）
  - 不做：OreCrusher（南非矿业公司占位）、Rustlight、The MOO Factory（零 autocomplete+平台内中等）、Zombie War Survival/Movie Star Dress Up/Horror Clown/Spot the Diff/Farm Idle Cut Crop/Delivery Life（品类泛词）、Merge Beach/Amber's Airline（手游归属/旧IP已覆盖）、Test Drive Car Parking（现实购车词）、Bowmasters（大 IP 手游占位）、Unpacking Room（归属模糊）、Merge Elementals（单条判例）
- 到期复查 7 行：TNT Voxel R2（1040→1448，放缓，0/3 维持）、GYROBLADE R2（1399→1629，平缓，0/3 维持）、Stack City 第7天（455→959 +111%，1/3 维持，BBQ 餐厅词重占位）、Automata Protocol 第7天（606→851，0/3 维持，NieR:Automata 占位）、Combo Critters R2（288→301，1/3 维持，wiki/combinations 攻略词强但 2016 手游归属必须 SERP 核）、1 Speed Keyboard Lucky Escape R1（1482→2010 +35%，1/3 维持，系列词流向新作 Obby）、Obby: +1 Laser R1（slug 未命中数据获取失败，autocomplete 仍零，顺延 10/4）
- 异常：1) 上轮（9/29 表更）日志条目缺失，本条补记；2) Obby: +1 Laser 已滚出 /new 页且 3 个 slug 变体均未命中，ratingCount 无法更新，下轮用站内搜索修复；3) Lucky Escape codes 词族（9/27 曾现）今探零结果，系列搜索词明显向当天新作「+1 Speed Keyboard Obby」集中——系列作间需求分流首次观测到；4) Trends 本轮未调用，沿用未测记录
- 复查计划：10/1 Obby: +1 Digging（R1）；10/2 Vox Heroes、Hyper Fliplation（R2）；10/3 新增 7 个考虑 R1；10/4 Obby: +1 Laser 补测；10/7 六行 R2/R3

## 2026-10-01（定时挖词）
- 渠道：CrazyGames /new（curl+UA 正常，70 个游戏，较上轮 95 收缩）→ 新面孔+到期行单页 JSON-LD 批量抽查（9 页）→ Google autocomplete 探针 ×12 词。禁 steamdb 按要求未访问
- 新面孔 8 个，决定分布：考虑 2 / 不做 6
  - 考虑：Duck Playground 3D（9/30 当天 1011 评 9.3，当日即有精确 autocomplete 词「duck playground 3d」——入池以来第二例上线当天现精确词，Island of Madness 后首见）、Aura Clicker（当天 427 评 8.9，codes/script/roblox/scratch 词族强，归属疑同名作待 SERP 核）
  - 不做：Soccer Lat: 3D Football Online（1336 评 9.1 本日平台内最强，但被「soccer latest」词族占位）、Revolution Farm Idle（被《Revolution Idle》farm 词占位）、Panda Food Business（单条判例+foodpanda 商业词）、Eternal Fury（老 IP 判例）、Merge Defense: Army Behind the Wall（Roblox 同名作占位，Nations Royale 判例）、Color Screw Rescue Puzzle（单条+4.7 低分）
- 到期复查 1 行：Obby: +1 Digging Power Per Click R1（ratingCount 891→1345，3 天 +51% 平台内强；autocomplete 三种拼法仍零结果，判据1未过；Trends 未测。1/3 转好 → 维持考虑，R2 10/5）
- 异常：1) /new 列表 95→70，Obby: +1 Laser 仍在页外，10/4 到期按计划用站内搜索修复 slug；2) paint-hide slug 游戏更名「Paint Hide → Paper Guys」（9/25 曾记 Paper Guys 无评分，原「Paint Hide 不做」决定不受影响）；3) Duck Playground 3D 上线当天现精确词且当日千评，平台内外信号同日出现的首例，R1 优先看 codes/wiki 萌芽；4) Trends 沿用未测记录
- 复查计划：10/2 Vox Heroes、Hyper Fliplation（R2）；10/3 七行 R1；10/4 Obby: +1 Laser 补测 + Duck Playground 3D、Aura Clicker R1；10/5 Obby: +1 Digging R2

## 2026-10-02（定时挖词）
- 渠道：CrazyGames /new（curl+UA 正常，70 个游戏，与上轮持平）→ 新面孔单页 JSON-LD 抽查（4 页）+ 到期行单页 2 页 → Google autocomplete 探针 ×11 词。禁 steamdb 按要求未访问
- 新面孔 4 个（均 10/1 上线），决定分布：考虑 0 / 不做 4 / 做 0
  - 不做：Flux GP: Anti-Gravity Racing（543 评 9.3，flux 词族被 AI 图像模型 FLUX/GPU 硬件词占位，「flux gp anti gravity」零结果）、Football is Life（1484 评 8.9 当日平台内最强，Ted Lasso 影视词占位 + game 回声疑流向 Roblox Football Life 系列）、Sketchi（153 评 9.2，词形被拼写纠正为 sketching/sketch io/sketchup 素描词族）、Real War: Survival Games（844 评 8.2，real war + survival games 双超泛品类词，unlimited/download 回声疑手游 APK 词，参照 Real War 判例）
- 到期复查 2 行（R2 第7天，均维持）：Vox Heroes（ratingCount 2095→2239，4天+6.9%、自首次累计+13.9% 持续平缓；「vox heroes wiki」萌芽仍居首条但「vox heroes game」零结果无新增长尾；Trends 未测。0/3 维持，R3 10/9）、Hyper Fliplation（322→493，4天+53% 较 R1 +113%/3天 明显放缓；autocomplete 仍零结果判据1未过；Trends 未测。0/3 维持，R3 10/9）
- 异常：1) 本轮新面孔全数不做——入池以来首次单轮零【考虑】产出，/new 当日上线 4 作均为泛词/占位词，平台内强度（Football is Life 当日千评）与独立需求继续脱钩，SOP 判据 1 持续有效；2) FLUX（AI 图像模型）词族开始占位游戏类新词（flux gp→flux gpu/gpt），AI 工具词污染游戏挖词首例记录；3) Trends 沿用未测记录
- 复查计划：10/3 七行 R1（+1 Speed Keyboard Obby、Obby Steal an Egg、Stickman Strike Force、Car Seller、My Castle、City Gas Station、Rodha 2）；10/4 Obby: +1 Laser 补测（站内搜索修复 slug）+ Duck Playground 3D、Aura Clicker R1；10/5 Obby: +1 Digging R2；10/7 六行 R2/R3 第14天；10/9 Vox Heroes、Hyper Fliplation R3

## 2026-10-03（定时挖词）
- 渠道：CrazyGames /new（curl+UA 正常，70 个游戏，连续三轮持平）→ 新面孔单页 JSON-LD 抽查（3 页）+ 到期行单页 8 页（含 lucky-escape 合并验证页）+ 站内搜索页 1 次（SSR 不出结果，slug 修复转直连验证）→ Google autocomplete 探针 ×17 词。禁 steamdb 按要求未访问
- 新面孔 3 个（均 10/2 上线），决定分布：考虑 1 / 不做 2 / 做 0
  - 考虑：Combat Online 2（slug combat-online-2，785 评 8.7 首日强；上线次日 autocomplete 即现 10 条全正向词族 poki/crazy games/game/free/mobile/full screen/download，入池以来最强首日 autocomplete + poki 跨平台信号 +「games like」替代寻找词；但全为「在哪玩」分发词、无 wiki/codes 攻略词，FPS 品类挤。R1 10/6 看攻略词萌芽 + SERP 验意图）
  - 不做：Pup Pals（slug pup-pals，342 评 8.8；cast/characters/martha speaks/paw patrol 影视节目词占位，game 词被 pet/puppy pals 品类切碎）、Lawn Mower Idle（slug lawn-mower-idle，181 评 8.5；词形双关：suggest 全为割草机怠速机械词 idler pulley/idle adjustment，游戏意图不可达）
- 到期复查 9 行（2 R2 + 7 R1，8 行维持考虑、1 行查证关闭）：
  - R2：Cannon Chaos Silly Shots（528→648，7天+22.7% 平缓；本作词 1→3 条转好但混 OSRS 词群 chaos elemental/chaos druids cannon；1/3 维持，R3 10/10）
  - R2 查证关闭：1 Speed Keyboard Escape 确认与「+1 Speed Keyboard Lucky Escape」同一游戏——escape slug 404、两行基线 ratingCount 均 1482、轨迹 1871(9/29)→2010(9/30)→2543(10/2) 完全连续，并入 Lucky Escape 行跟踪（自 9/26 起 6 天+71% 平台内强；另：该行首次记录实为 9/27，9/23 为初记笔误已在合并备注中澄清）
  - R1（首记 9/30，均 R2 10/7）：+1 Speed Keyboard Obby（1040→2891，3天+178% 入池以来最强平台内爆发；codes 萌芽居首存续+「1 speed keyboard escape obby」系列交叉词出现，无 roblox 词；1/3 维持）、Obby Steal an Egg（538→1369，+154% 强；autocomplete 仍自身回声+鸟类噪音，codes 探针零；1/3 维持）、Stickman Strike Force（817→1101，+35% 中强；品牌长尾无增长仍混 jobs/meaning 噪音；1/3 维持，R2 仍无增长倾向不做）、Car Seller（821→1233，+50% 强；mod/apk+拼写变体+另一手游 car dealer life simulator，归属疑云未解；1/3 维持，SERP 硬性）、My Castle（1198→1219，+1.8% 平缓；仍品牌双回声无 codes/walkthrough 萌芽；0/3 维持）、City Gas Station（3403→3620，+6.4% 平缓；本作词 3→4 条但全 3d 后缀疑手游词；1/3 维持，SERP 硬性）、Rodha 2（764→829，+8.5% 温和；game/math playground 正向存续，CAT 考试噪音依旧；1/3 维持，SERP 裁决）
- 异常：1) 1 Speed Keyboard Escape slug 404 引出重复行查证——两行基线 1482 完全一致是关键线索；本轮起新面孔备注列已带 slug，防再犯；2) 游戏页 JSON-LD 的 VideoGame 嵌套于 ItemPage.mainEntity 且 @type 为数组（['VideoGame','WebApplication']），解析需递归+数组判断，脚本已修复；3) SERP 归属验证连续第四轮不可用（Car Seller/City Gas Station/Rodha 2 积压），浏览器自动化补测欠账加深；4) /new 列表 70 连续三轮持平；5) Trends 沿用未测记录
- 复查计划：10/4 Obby: +1 Laser 补测（slug 修复）+ Duck Playground 3D、Aura Clicker R1；10/5 Obby: +1 Digging R2；10/6 Combat Online 2 R1 + Steal a Eggs、Kick Brainrot Balls、Spectre Command 做行跟进；10/7 六行 R3/R2 第14天 + 七行 R2 第7天（共 13 行，复查高峰）；10/9 Vox Heroes、Hyper Fliplation R3；10/10 Cannon Chaos R3

## 2026-10-04（定时挖词）
- 渠道：CrazyGames /new（curl+UA，70 个游戏，带缓存参数复抓比对一致）→ 到期行单页 JSON-LD 3 页 + 英文全量 sitemap 抓取 1 次（slug 修复）→ Google autocomplete 探针 ×8 词。禁 steamdb 按要求未访问
- 新面孔 0 个（入池以来首次）：/new 列表 70 个 slug 与上轮完全一致，连续第 4 轮零变化（缓存误判已用 ?cb 复抓排除）——平台自 10/2 上线批次后未再上新。应对：已定位英文全量 sitemap（robots.txt → sitemap-index.xml → /sitemap，约 11 万 URL），下轮起可用 sitemap 目录 diff 作为 /new 的补充通道
- 到期复查 3 行（均维持【考虑】）：
  - Obby: +1 Laser to Break Walls R2 补测（第7天）：slug 两轮失联根因=随机后缀（真实 slug obby-1-laser-to-break-walls-pks），sitemap 一击修复；ratingCount 9535→11574（7天+21.4%，8/31 上线已 34 天，平台内转平缓）；autocomplete 两种拼法仍零结果（判据1未过）；0/3 维持，R3 10/11
  - Duck Playground 3D R1（第3天）：ratingCount 1011→1835（3天+81.5%，平台内强）；精确词「duck playground 3d」回声存续（噪音反而收敛），codes(c)/wiki(w) 探针零结果（R1 目标未达成）；Trends 未测。1/3 维持，R2 10/8
  - Aura Clicker R1（第3天）：ratingCount 427→916（3天+114.5%，平台内强，评分 8.9→9.1）；autocomplete 词族存续且新增 cookie/monster/phonk/auto clicker 变体，但新增词全疑同名他作（Cookie Clicker 生态等）、归属更混浊，不计转好（防自欺判据1：平台内流量≠独立需求）；SERP 归属连续第 5 轮不可用；Trends 未测。1/3 维持，R2 10/8 SERP 硬性
- 决定分布：新增 0 / 做 0 / 不做 0 / 维持考虑 3
- 异常：1) /new 零变化连续 4 轮，入池以来首次零新面孔——渠道单一风险暴露，sitemap diff 双通道下轮启用；2) slug 随机后缀（-pks/-jeb/-pld 类）是 /new 滚出后直连探测必 404 的根因，sitemap 是唯一可靠修复源；3) SERP 通道（web_search/DDG）连续第 5 轮 bot challenge，归属验证积压：Car Seller、City Gas Station、Rodha 2、Aura Clicker、Combo Critters，浏览器自动化补测欠账继续加深；4) Trends 沿用未测记录
- 复查计划：10/5 Obby +1 Digging R2；10/6 Combat Online 2 R1 + Steal a Eggs、Kick Brainrot Balls、Spectre Command 做行跟进；10/7 六行 R3/R2 第14天 + 七行 R2 第7天（13 行复查高峰）；10/8 Duck Playground 3D、Aura Clicker R2；10/9 Vox Heroes、Hyper Fliplation R3；10/10 Cannon Chaos R3；10/11 Obby +1 Laser R3

## 2026-10-05（定时挖词）
- 渠道：CrazyGames /new（curl+UA 正常，70 个游戏）→ 新面孔单页 JSON-LD 抽查（5 页）+ 到期行单页 2 页 → Google autocomplete 探针 ×12 词 + Marginalia 老界面 SERP 占位 1 次。禁 steamdb 按要求未访问
- 新面孔 5 个（均 10/5 当天上线——/new 连续 4 轮零上新后恢复出货），决定分布：考虑 0 / 不做 5 / 做 0
  - 不做：Blocky Tower Defense 2D（132 评 8.9，精确词零结果+品类泛词）、Boss Stickman - Fighting Stick It（538 评 9.1 首日强，suggest 全为同名手游下载/修改词 unlimited money/an1/ios，参照 Nations Royale 占位判例）、Pickaxe 3D Idle Miner（311 评 9.0，pickaxe 3d 被 Minecraft 3D 模型/纹理词占位）、Shadow Knights（283 评 8.8，被 Aphmau 影视词+同名 Idle RPG 手游占位）、Trick Or Treat Rush（186 评 8.9，被 Dreamlight Valley sugar rush 活动词+Rust 事件词+地名词切碎，万圣节 token 窗口短）
- 到期复查 2 行（均维持）：
  - Obby: +1 Digging Power Per Click R2（第7天）：ratingCount 1345→2203（4天+63.8%，平台内持续强）；autocomplete 三种拼法仍零结果（判据1未过，连续 3 轮）；Trends 未测。1/3 维持，R3 10/12
  - Island of Madness（做行跟进）：ratingCount 490→712（8天+45.7%，较 R1 +74%/3天 放缓）；「island of madness game」萌芽仍居首；SERP 通道小修复：Marginalia 新界面已 JS 渲染不可解析（search.marginalia.nu 301 → marginalia-search.com），老界面 old-search.marginalia.nu 可直抓——查无攻略站占位（仅 Gutenberg/无关论坛/维基词碰撞，弱正向，按技能规则不作弱 SERP 证据）；Google SERP 验意图+六条终审仍欠（连续第 6 轮），下次跟进 10/12
- 异常：1) /new 恢复出货但当日批次全为泛词/占位词——单轮零【考虑】产出为入池以来第二次（10/2 首次）；2) city-gas-station-simulator 滚出 /new（10/7 R2 到期，直连 slug 可测，10/3 已验证无随机后缀）；3) Marginalia 域名迁移致新界面不可解析，old-search.marginalia.nu 为现可用形态（知识笔记待同步）；4) Trends 沿用未测记录
- 复查计划：10/6 Combat Online 2 R1 + Steal a Eggs、Kick Brainrot Balls、Spectre Command 做行跟进；10/7 六行 R3/R2 第14天 + 七行 R2 第7天（13 行复查高峰，city-gas-station 直连测）；10/8 Duck Playground 3D、Aura Clicker R2；10/9 Vox Heroes、Hyper Fliplation R3；10/10 Cannon Chaos R3；10/11 Obby +1 Laser R3；10/12 Obby +1 Digging R3、Island of Madness 做行跟进
## 2026-10-06（定时复查）
- 渠道：到期行单页 JSON-LD 直连 ×4（combat-online-2 / steal-a-eggs / kick-brainrot-balls-online / spectre-command--ac130-simulator，后两个原 slug 404、经全量 sitemap 定位修复）+ Google autocomplete 探针 ×19 词 + Trends 探测 1 次（仍 429）+ Marginalia 老界面 SERP 占位 1 次。禁 steamdb 按要求未访问
- 到期复查 4 行（1 升做 / 3 做行跟进维持）：
  - Combat Online 2 R1（第3天）升【做】：ratingCount 785→1662（3天+112%，评分 8.9，平台内强）；autocomplete 攻略词萌芽达成——「combat online 2 wiki」「codes/cheat codes/commands/controls」词群出现 +「games like combat online 2」替代词 + play 词居首（unblocked 未萌芽）；Trends 429 未测。2/3 项转好 → 升【做】，进 game-selection 六条终审 + SERP 验意图；Marginalia 查无攻略站占位（不作弱 SERP 证据）；警惕 Combat Online/Reloaded 原作占位与「what happened to combat online 2」动态词
  - Steal a Eggs（做行跟进）：ratingCount 8660→25781（7天+198%，9/25 上线 11 天持续爆发、全池最快）；autocomplete 生态扩展（all eggs/map/walrus egg/crane egg/cherry blossom eggs/eggs rarity/working codes 新增），codes/discord/wiki/roblox 词族存续；Roblox 归属 SERP 仍欠
  - Kick Brainrot Balls（做行跟进）：slug 修复为 kick-brainrot-balls-online；ratingCount 3565→4782（7天+34%，放缓；评分 9.3；datePublished 实为 9/17）；codes/wiki 词主体归属 Roblox 原作「Kick a Brainrot」（kick a brainrot codes 2025/2026/wiki fandom 全在），「kick brainrot balls」精确探针衰减为回声——CG 版内容差异化
  - Spectre Command（做行跟进）：slug 修复为 spectre-command--ac130-simulator；ratingCount 1304→1728（7天+32.5%，放缓；评分 9.1）；「ac 130 simulator」词群强且扩展（online/browser/free/pc/steam/gunship/special ops squadron/download），品牌词仍被 Cadence EDA+POE2 占位，主攻 AC-130 泛词不变
- 异常：1) 启动时日志无今日 06:00 挖词条目、表内无 10/6 新面孔——本轮按指令仅复查到期行未扫 /new，挖词任务状态本 turn 不可见，下轮复查顺带核对补扫；2) Trends 连续未测（429）；3) SERP 通道连续第 7 轮不可用（Google captcha/DDG challenge/Bing 缓存陷阱，仅 Marginalia 可用且只作占位证据，四个做行验意图积压）
- 复查计划：10/7 十三行复查高峰（六行 R3/R2 第14天 + 七行 R2 第7天，city-gas-station 直连测）；10/8 Duck Playground 3D、Aura Clicker R2（SERP 归属硬性）；10/9 Vox Heroes、Hyper Fliplation R3；10/10 Cannon Chaos R3；10/11 Obby +1 Laser R3；10/12 Obby +1 Digging R3、Island of Madness 做行跟进（SERP+终审硬性）；10/13 四做行跟进（Combat Online 2、Steal a Eggs、Kick Brainrot Balls、Spectre Command）
## 2026-10-07（定时复查）
- 渠道：到期行单页 JSON-LD 直连 ×13（slug 全部经全量 sitemap 校准：automata-protocol-uri、rodha-2-fra 为 sitemap 现 slug，city-gas-station-simulator 滚出 /new 后直连恢复可测）+ Google autocomplete 探针 ×21 词 + Trends 探测 1 次（仍 429）+ Marginalia 老界面 SERP 占位 6 组。禁 steamdb 按要求未访问
- 到期复查 13 行（1 升做 / 1 关闭不做 / 11 维持）：
  - +1 Speed Keyboard Obby R2（第7天）升【做】：ratingCount 2891→5452（4天+88.6%，绝对增量+2561/4日 较上轮+1851/3日仍加速；评分 8.9）；autocomplete 词群扩展——「1 speed keyboard obby code」居首（code 精确词族验证）+「1+ speed keyboard obby」拼写变体新现+「1 speed keyboard escape obby」交叉词存续，全正向无噪音、无 roblox 归属词；系列词向本作聚合（Lucky Escape 精确词衰减为零佐证家族需求迁移）；unblocked/wiki 未萌芽；Trends 429 未测。2/3（增速+萌芽）→ 升做，进 game-selection 六条终审+SERP 验意图/Roblox 归属（Marginalia 查无占位，不作弱 SERP 证据）；做行跟进 10/13 与其余四做行同步
  - Stickman Strike Force R2 记【不做】（执行 R1 预告）：ratingCount 1101→1384（4天+25.7%，10.4%→5.9%/日 放缓）；autocomplete 与 R1 完全相同（回声+另一 stickman 游戏+jobs/meaning 噪音）连续两轮零长尾增长。0/3：品牌词混浊+增速放缓+FPS 品类挤
  - 第14天批六行均 0/3：TNT Voxel R3（1448→1921，7天+32.7% 放缓；Minecraft mod 词占位依旧，连续第3轮 0/3，10/21 R4 终审）、GYROBLADE R3（1629→1959 平缓；cutter 工具词噪音，连续第3轮，10/21 终审）、Stack City R2（959→1041，日增 11.2%→1.2% 明显放缓；BBQ 餐厅词仍重占位，10/21 第28天终审）、Automata R2（851→1000 放缓；NieR 占位，10/21 第28天终审）、Combo Critters R3（301→344 平缓；攻略词族存续+新增 reddit/steam，但 Marginalia 查出 itch.io PUNKCAKE 同名作——2016 手游+itch+CG 三重同名归属混浊，按防自欺不计转好，10/22 R4 终审）、1 Speed Keyboard Lucky Escape R2（2543→3110 放缓；精确词衰减为零、系列词流向 Obby，10/25 第28天终审，家族 wiki 覆盖由 Obby 做行统筹）
  - 第7天批五行维持：Obby Steal an Egg（1369→2955，4天+115.9% 平台内持续强=1/3；codes 探针仍零、「steal an egg lobby」疑 Roblox 词归属不明不计，10/14 R3）、Car Seller（1233→1618 放缓；suggest 集合与 R1 完全相同、归属未解，0/3，10/14 SERP 硬性）、My Castle（1219→1256 +3.0% 平缓；仍品牌双回声，0/3 第2轮，10/14）、City Gas Station（3620→3932 +8.6% 平缓；新词「3d no ads」为手游意图词不计，0/3，10/14 SERP 硬性）、Rodha 2（829→888 温和；game/math playground 正向存续无新增、Marginalia 仅 nirodha/Zerodha 词碰撞，0/3，10/14）
- 异常：1) 表内无 10/7 新面孔、日志无今日 06:00 挖词条目（连续第2轮；本 turn 按指令仅复查到期行未扫 /new；06:00 任务在受限清单中不可见，状态待管理员核）；2) Trends 连续未测（429）；3) Google SERP 连续第8轮不可用——做行 SERP 验意图/归属积压增至 6 行（Marginalia 仅占位证据，量级/KD 未测）
- 复查计划：10/8 Duck Playground 3D、Aura Clicker R2（SERP 归属硬性）；10/9 Vox Heroes、Hyper Fliplation R3；10/10 Cannon Chaos R3；10/11 Obby +1 Laser R3；10/12 Obby +1 Digging R3、Island of Madness 做行跟进（SERP+终审硬性）；10/13 五做行跟进+Obby 六条终审；10/14 五行 R3 第14天；10/21/22/25 三批第28天终审（无起色即记不做）
## 2026-10-08（定时挖词+复查，含 /new 两日积压补扫）
- 渠道：CrazyGames /new（curl+UA 正常，95 slug 含 24 个分类链接、实际游戏 71，较上轮 70 净增 1）→ 新面孔单页 JSON-LD 抽查 ×11 + 到期行 ×2 → Google autocomplete 探针 ×24 词 + Marginalia 老界面 1 次 + web_search SERP 尝试 ×2（均 DDG challenge）。禁 steamdb 按要求未访问
- 新面孔 11 个（10/6+10/7 两日上新积压——10/6、10/7 两轮按指令均未扫 /new，本轮补扫），决定分布：考虑 4 / 不做 7 / 做 0
  - 考虑：Gun Maker（10/6 上线 2 天 1481 评 9.2 本批平台内最强；autocomplete 分发词族全正向 game/online free/online/free/unblocked/steam + gun making/builder 变体，含 unblocked 早期爆发信号；但全为「在哪玩」词、无 wiki/codes 攻略词，「steam」词疑同名 Steam 游戏分流，归属未验）、Obby: Phonk Escape | +1 Speed（+1 Speed 系列第 4 作，10/7 当天 1465 评 9.3；suggest 仅自身回声、codes/wiki 未萌芽；系列词群现聚合于 Obby 做行，R1 看新作分流）、Catch Lucky Block（10/6 上线 593 评 9.1；精确回声「catch lucky blocks from river」+ code 词萌芽，但混 Minecraft lucky block 泛词与 Roblox「catch and tame X」同型词群，codes 归属未定）、Human Dominoes（10/7 当天 410 评 9.2；回声+「human dominoes game」词条存续，但 world record/gif/mattresses 特技视频词占位过半，保守入池）
  - 不做：Ant Miners（蚁商电商词 for sale/best 占位，game 探针被纠正为 ant mining game）、Coral Isle 2: Tropical Stories（QuartSoft 旧 IP，suggest 全为老游戏下载词 app/download android/quartsoft com，移植服无先行窗口，仅 60 评）、Fashion x Fashion（game 探针零结果 + 240 评 8.5 口碑偏弱）、Ludus Aeternus（仅单条回声，余为拉丁语词义噪音）、Meme Bloxy（Roblox/Bloxy Awards 生态词占位 + 单页无 JSON-LD 评分数据）、Ricochet Room（game 探针零结果，236 评 8.7 中等）、Tile Clash（仅单条回声+麻将规则词，105 评 8.4 弱口碑）
- 到期复查 2 行（均维持【考虑】，R3 第14天 10/15）：
  - Duck Playground 3D R2（第7天）：ratingCount 1835→2688（4天+46.5%，约 10%/日持续强，评分 9.2）；autocomplete 精确词回声仍为唯一建议（噪音持续收敛），wiki/codes 探针连续两轮零结果（R1 目标连续未达成，判据1未过）；slug 现为 duck-playground-3d-jeb；Trends 未测。1/3 维持
  - Aura Clicker R2（第7天）：ratingCount 916→1515（4天+65.4% 平台内持续强，评分 9.1）；词族存续（game/script/roblox/scratch/simulator codes/download）且新增 aura cookie/monster/phonk clicker 变体，但新增长尾仍全疑同名他作，「aura clicker wiki/codes」探针零结果，归属未解不计转好（防自欺判据1）；slug 现为 aura-clicker-pld；SERP 归属硬性项连续第 9 轮不可用（Marginalia 无占位线索，不作归属证据）；Trends 未测。1/3 维持
- 异常：1) /new 补扫两日积压 11 面孔，平台恢复每日出货节奏；2) slug 随机后缀更新两例：aura-clicker→aura-clicker-pld、duck-playground-3d→duck-playground-3d-jeb（均在 /new 内可直连，无需 sitemap 修复）；3) meme-bloxy 单页无 JSON-LD（101KB 显著小于常规 140KB+）；4) Google SERP 连续第 9 轮不可用（web_search 亦 DDG challenge），Aura Clicker 归属硬性项继续悬置；Trends 沿用未测；5) 站内更名两例不影响既有决定：One Shot Duel→「One Shot Duel: Snipe & Hide」（slug one-shot-duel-snipe-hide）、Paintseek→「PaintSeek.io (Chameleon)」（slug paintseek-io-chameleon）；6) 复查看板 10/13 到期行重复一条，本轮去重
- 复查计划：10/9 Vox Heroes、Hyper Fliplation R3；10/10 Cannon Chaos R3；10/11 Obby +1 Laser R3 + 新面孔 R1 四行（Gun Maker、Catch Lucky Block、Obby: Phonk Escape、Human Dominoes）；10/12 Obby +1 Digging R3、Island of Madness 做行跟进（SERP+终审硬性）；10/13 五做行跟进（Obby 行核对系列词向 Phonk Escape 分流）；10/14 五行 R3；10/15 Duck Playground 3D、Aura Clicker R3

## 2026-10-09（定时挖词+复查）
- 渠道：CrazyGames /new（curl+UA 正常，95 slug 含 24 个分类链接、实际游戏 71，与上轮持平）→ 新面孔单页 JSON-LD 抽查 ×6 + 到期行 ×2（vox-heroes 直连有效）→ 开发者/描述元数据提取 ×6 → Google autocomplete 探针 ×20 词 + Trends 探测 1 次（仍 429）。禁 steamdb 按要求未访问
- 新面孔 6 个（均 10/8 上线批次），决定分布：考虑 0 / 不做 6 / 做 0——入池以来第三次单轮零【考虑】产出（10/2、10/5 后）：
  - 不做：Dear Travellers（10/8 当天 1979 评 9.4，Steal a Eggs 后最强首日；但「dear travellers game」整体被拼写纠正为既有游戏 Dear Passengers、walkthrough 探针零，词形被纠正占位，Sketchi 判例）、Kill A Brainrot: Bosses, Eggs, Pets!（701 评 8.9；codes/wiki/script/characters 词族强但全带 roblox 归属，页面描述自认「Dive Into the World of Roblox Brainrots」衍生作，需求归属 Roblox 原作，Merge Defense/Nations Royale 判例）、Night Signal（371 评 9.1；实为夜间无人机飞行游戏，「night signal game/length/horror game」词群归属既有恐怖游戏与 Night Signal Entertainment 工作室品牌，词义完全错位）、Mine Clicker RNG（377 评 9.4 CG 自研；「mine clicker rng/codes」零结果，mine clicker 词族被既有作品占位）、Ghost Slurp（214 评 8.9 偏弱；slurpee 饮品/同人词噪音，game 探针零）、Sports Store Supermarket Simulator（430 评 8.4 弱口碑；双探针零结果）
- 到期复查 2 行（R3 第14天，均 0/3 维持【考虑】，R4 第28天 10/23 终审）：
  - Vox Heroes：ratingCount 2239→2585（6天+15.5%，约 2.4%/日 持续平缓）；「vox heroes wiki」萌芽仍居首条但无新增长尾、「vox heroes game」仍零、Vox Machina 噪音依旧；Trends 429 未测。0/3（连续第3轮），仍无起色即记不做
  - Hyper Fliplation：ratingCount 493→756（6天+53.3%，日增 13.3%→7.3%/日 放缓但平台内仍强，评分 9.1）；autocomplete「hyper fliplation/game」连续第4轮零结果（判据1持续未过）；Trends 429 未测。0/3（连续第3轮），仍零萌芽即记不做
- 异常：1) 6 个新面孔中 4 个为「词义占位/纠正」型（Dear Travellers→Dear Passengers 纠正、Night Signal→恐怖游戏品牌、Kill A Brainrot→Roblox 原作、Mine Clicker→既有作品族），平台内首日强度（Dear Travellers 1979 评）与独立需求继续脱钩，SOP 判据 1 持续有效；2) rodha-2-fra、kick-brainrot-balls-online 滚出 /new（10/13 做行跟进、10/14 R3 到期需直连/sitemap 测）；3) Trends 连续第 12 轮 429；4) 本轮以页面开发者/描述元数据补归属判断（Obseshn 自认 Roblox 衍生、Legends 为飞行游戏非恐怖游戏），部分替代持续不可用的 SERP 通道；5) /new 71 游戏与上轮持平，出货节奏为每日批次
- 复查计划：10/10 Cannon Chaos R3；10/11 Obby +1 Laser R3 + 新面孔 R1 四行；10/12 Obby +1 Digging R3、Island of Madness 做行跟进；10/13 五做行跟进；10/14 五行 R3；10/15 Duck Playground 3D、Aura Clicker R3；10/23 Vox Heroes、Hyper Fliplation R4 第28天终审

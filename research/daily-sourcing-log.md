
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

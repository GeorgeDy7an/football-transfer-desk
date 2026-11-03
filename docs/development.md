# Development notes · 开发案例

## 球员成长与职业路径 / Player development

**问题。** 玩家发现早期潜力球员成长慢，强队也容易给出没有实质差异的替补报价。只提高成长速度会放大低水平联赛刷成长的问题。

**设计。** 分开处理当前能力、潜力判断和出场环境；报价同时展示薪资、球队角色和出场机会。球探报告描述对潜力的判断，而不是公布隐藏数值。对于缺少出场或明显低薪的客户，增加明确的职业诉求和主动推荐入口。

**取舍。** 高工资、强队名气和成长机会可以指向不同球队。玩家要能理解取舍，而不是只比较一个综合分数。公开谈判演示沿用这一选择结构，使用独立的虚构数据和简化规则。

**In English.** I separated present ability, scouting confidence and development opportunity so choosing a club is not simply maximizing salary. The demo illustrates that decision without exposing the production simulation.

## 长期存档 / Long-running saves

**问题。** 历史版本的长生涯可能触及容量限制，损坏的旧档也曾影响新建流程。保存重试尤其危险：它可能把同一周的收入或费用结算两遍。

**设计。** 先结算并冻结本周快照，保存失败时重试写入同一快照；以回读核验结果区分写入成功和可恢复。独立档位隔离异常存档，长期记录保留有界的汇总和必要的近期明细。

**验证。** 分别检查旧档迁移、长生涯、故障后的重新保存和重新打开游戏。平台模拟和浏览器测试各有边界，模拟通过不等于原生环境已验证。

**In English.** The save boundary separates game advancement from persistence. Retrying a failed write must not advance time, while an unreadable slot must not prevent a new career in another slot.

## 双语离线版 / Bilingual offline edition

**问题。** 原版的登录、广告和在线排名使一部分流程依赖平台环境。离线版需要保留单人生涯，同时让游戏内选择仍然可用。

**设计。** 移除联机依赖，将额外机会改成游戏内预算或行动次数，保留本地结算和 PNG 导出。语言设置独立于生涯状态；两种语言读写同一套存档。

**验证。** 完整发行 ZIP 解压后做过 9 项本地测试，覆盖手机布局、跨语言保存和继续、每周推进、游戏内解锁与 PNG 下载。测试中阻断网络，并检查未发起外部请求。这个数字描述当时的完整版回归；展示演示有单独的测试。

**In English.** I replaced platform rewards with game resources and verified the extracted offline package under blocked network access. The public demo is a separate, smaller artifact.

## Public code sample

[`demo/negotiation.js`](../demo/negotiation.js) separates contract rules from the DOM. The state transition rejects repeat submissions, validates the requested raise and charges only an eligible counteroffer. Run the sample tests with `node --test tests/negotiation.test.cjs`.

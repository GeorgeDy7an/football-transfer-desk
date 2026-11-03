# 开发案例 / Development case studies

[中文](#中文) · [English](#english)

## 中文

### 球员成长与职业路径

**问题。** 潜力球员成长偏慢，强队报价也容易集中在替补。简单提高成长速度，会放大低水平联赛刷成长的问题。

**设计。** 分开处理当前能力、潜力判断和出场环境。报价同时展示薪资、角色和出场机会；球探报告表达判断及其可信度。缺少出场或明显低薪的客户会提出职业诉求，玩家可以主动推荐客户。

**取舍。** 高薪、球队名气和成长机会可以指向不同球队。交互展厅保留这一选择结构，但使用虚构数据和简化规则。

### 长期存档

**问题。** 长生涯可能触及容量限制，坏档曾影响新建流程；保存重试如果再做一次结算，可能重复扣费。

**设计。** 先结算并冻结本周快照，失败后重试同一份写入；回读用于核验。档位独立，长期记录保留有界汇总和必要的近期明细。

**验证。** 分开测试旧档迁移、长生涯、写入故障后的重试和重新打开。浏览器和平台模拟的通过结果不等于原生平台已经验证。

### 双语离线版

**问题。** 原版的登录、广告和在线排名依赖平台环境。

**设计。** 移除联机入口，把额外机会改成游戏内预算或行动次数，保留本地评分和 PNG 海报。语言偏好与生涯状态分离，两种语言共用同一套存档。

**验证。** 完整发行 ZIP 解压后做过 9 项本地测试，覆盖手机布局、跨语言继续、推进、游戏内解锁和 PNG 下载。测试阻断网络，并检查未发起外部请求。展厅另行测试。

### 代码示例

[谈判规则](../demo/negotiation.js)与界面分离：验证加薪额度、只为符合条件的反报价扣费，并拒绝重复提交。运行 `node --test tests/negotiation.test.cjs` 可执行示例测试。

## English

### Player development and career paths

**Problem.** Prospects developed slowly, and offers from strong clubs tended to make them substitutes. Simply boosting development would make it easier to farm growth in weaker leagues.

**Design.** Separate current ability, assessed potential and the player's playing environment. Show wages, squad role and playing opportunities side by side. Scout reports communicate assessments and confidence. Underplayed or clearly underpaid clients can raise career concerns, and the agent can proactively recommend them to clubs.

**Trade-off.** Wages, prestige and development can point to different clubs. The interactive showcase preserves this choice structure with fictional data and simplified rules.

### Long-running saves

**Problem.** Long careers could hit storage limits, a bad save could block a new career, and retrying a failed save could charge the same week twice if settlement ran again.

**Design.** Settle once and freeze the weekly snapshot. Retry writing that snapshot and verify by reading it back. Keep slots independent, and bound long-term records using summaries and relevant recent details.

**Verification.** Test old-save migration, long careers, retries after write failures and reopening separately. Browser and simulated platform results do not stand in for native-platform verification.

### Bilingual offline edition

**Problem.** Sign-in, ads and online rankings in the original build depended on the platform.

**Design.** Remove online entry points and use in-game budgets or actions for optional opportunities. Keep local scores and PNG posters. Language preference is separate from career state; both languages use the same saves.

**Verification.** Nine local checks on the extracted full-game ZIP covered mobile layouts, resuming across languages, advancing time, unlocking options with game resources and downloading PNGs. The tests blocked network access and checked for external requests. The showcase is tested separately.

### Code sample

The [negotiation rules](../demo/negotiation.js) are separate from the UI. They validate the requested raise, charge only eligible counteroffers and prevent duplicate submissions. Run `node --test tests/negotiation.test.cjs` to exercise the sample.

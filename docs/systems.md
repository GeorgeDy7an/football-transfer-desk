# 系统设计与迭代 / Systems & iteration

[中文](#中文) · [English](#english)

## 中文

### 一周是一个完整的决策周期

办公室把事务归为待办和邮件，玩家在推进之前处理报价、客户需求和经营安排。推进后计算现金与状态变化，再保存已结算的快照。财报说明现金为什么变动，邮件承担需要回应的决策。这让新手可以先做一项有结果的选择，而不必先读完所有菜单。


### 让三份报价真正不同

出场承诺和角色本身有价值。一个低薪首发报价，可能比豪门的高薪替补更适合需要比赛机会的球员。当前待遇作为比较基准，谈判失败后仍需有可理解的退路。玩家看到的是条件、费用和后果；完整估值与判定参数没有公开。


### 到期处理不留悬空状态

经纪人与球员的代理协议、球员与俱乐部的雇佣合同是两条独立时间线。到期提醒、续约入口、离队通知和旧任务失效应形成闭环。这样不会因为代理关系结束，就误把球员变成自由球员，也不会在到期后继续收取佣金。


### 从玩家反馈到验证

| 反馈或风险 | 设计调整 | 典型验收 |
| --- | --- | --- |
| 强队报价长期只给替补 | 将球队需求、能力和定位一起纳入报价 | 强球员能获得可解释的主力机会 |
| 成长慢但不能靠低水平刷数值 | 区分潜力、出场、训练和评估可信度 | 对比不同发展环境和多年结果 |
| 保存失败卡住或重复推进 | 保留失败时的结算快照，核验后再确认 | 重试后周数和费用只更新一次 |
| 新手不知道下一步 | 邮件集中行动，循序展开系统 | 新建、报价、谈判、结算能连续走通 |
| 离线不可访问原平台功能 | 删除在线入口，改用本地资源与存档 | 断网启动、切换语言、保存并重读 |

[开发案例](development.md)记录真实项目取舍；[单文件展厅](../showcase.html)用虚构数据模拟其中六个场景，不能复现正式版算法。

## English

### A week is a complete decision cycle

The office groups work into tasks and emails. Players handle offers, client needs and agency decisions before advancing. The game then updates cash and career state and saves the settled snapshot. Financial reports explain changes to cash, and emails hold decisions that need a response. New players can make one meaningful decision before learning every menu.

### Make the three offers meaningfully different

Playing time and squad role have value. A lower-wage starting role may be better for a player who needs minutes than a higher-wage reserve role at a big club. Current terms provide a comparison point, and a failed negotiation needs a clear way forward. Players see the terms, costs and consequences; production valuation and decision parameters remain private.

### Resolve expiring contracts cleanly

Representation and club employment run on separate timelines. Reminders, renewal, departure notices and invalidation of old tasks form a complete lifecycle. Ending representation does not turn a contracted player into a free agent, and commissions do not continue after expiry.

### From feedback to verification

| Feedback or risk | Design adjustment | Example check |
| --- | --- | --- |
| Strong clubs repeatedly offer reserve roles | Consider club needs, ability and squad role together | Strong players can get a starting role for understandable reasons |
| Slow growth and growth farming in weaker leagues | Separate potential, minutes, training and scouting confidence | Compare development environments over several years |
| Failed saves block progress or advance the game twice | Keep the settled snapshot and verify the write | Retrying changes the week and charges the expense only once |
| New players cannot find the next action | Group decisions in email and introduce systems gradually | Start a career, respond to an offer, negotiate and settle a week |
| Platform features cannot run offline | Remove online entry points and use local resources and saves | Start offline, switch language, save and reopen |

The [case studies](development.md) describe the actual project. The [single-file showcase](../showcase.html) simulates six scenes with fictional data and does not reproduce production algorithms.

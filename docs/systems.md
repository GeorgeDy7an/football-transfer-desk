# 系统设计与迭代 / Systems & iteration

## 一周是一个完整的决策周期

办公室把事务归为待办和邮件，玩家在推进之前处理报价、客户需求和经营安排。推进后计算现金与状态变化，再保存已结算的快照。财报说明现金为什么变动，邮件承担需要回应的决策。这让新手可以先做一项有结果的选择，而不必先读完所有菜单。

**Design intent:** the office is a triage surface; the inbox is where decisions are made. A weekly report explains what happened before the next turn.

## 让三份报价真正不同

出场承诺和角色本身有价值。一个低薪首发报价，可能比豪门的高薪替补更适合需要比赛机会的球员。当前待遇作为比较基准，谈判失败后仍需有可理解的退路。玩家看到的是条件、费用和后果；完整估值与判定参数没有公开。

**Design intent:** present alternatives that differ in kind, rather than sorting them by a single hidden score.

## 到期处理不留悬空状态

经纪人与球员的代理协议、球员与俱乐部的雇佣合同是两条独立时间线。到期提醒、续约入口、离队通知和旧任务失效应形成闭环。这样不会因为代理关系结束，就误把球员变成自由球员，也不会在到期后继续收取佣金。

**Design intent:** representation and employment each have their own lifecycle; a transition in one does not silently mutate the other.

## 从玩家反馈到验证

| 反馈或风险 | 设计调整 | 典型验收 |
| --- | --- | --- |
| 强队报价长期只给替补 | 将球队需求、能力和定位一起纳入报价 | 强球员能获得可解释的主力机会 |
| 成长慢但不能靠低水平刷数值 | 区分潜力、出场、训练和评估可信度 | 对比不同发展环境和多年结果 |
| 保存失败卡住或重复推进 | 保留失败时的结算快照，核验后再确认 | 重试后周数和费用只更新一次 |
| 新手不知道下一步 | 邮件集中行动，循序展开系统 | 新建、报价、谈判、结算能连续走通 |
| 离线不可访问原平台功能 | 删除在线入口，改用本地资源与存档 | 断网启动、切换语言、保存并重读 |

[开发案例](development.md)记录真实项目取舍；[单文件展厅](../showcase.html)用虚构数据模拟其中六个场景，不能复现正式版算法。

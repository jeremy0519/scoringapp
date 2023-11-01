# Scoring App for 6907

本网站只供6907内部使用

**请勿在未被批准的情况下传播本网站**

## 介绍

Scoring App用于在FRC比赛的**赛场**上，可以在Coach与观众之间同步部分重要**场时**统计数据（这也是区别于Scouting的地方）

值得注意的是，本软件是有可能不符合规定的，且在2023年赛场上测试未成功。（信号屏蔽）

为了减小学习成本并提高使用效率，Scoring App对比今年年初的版本主要改进了UI

## （滥用标题）由于时间分配和知识储备原因，我们仅做了前端的项目，且前端也没完全做好……

### 开发人员

1st Dev: 2609 唐志鹏 框架搭建 具体实现

2nd Dev: 2610 闵智一 具体实现 功能补充 终端测试

3rd Dev: 2609 马骁骏 项目设想 界面设计 终端测试

## 界面介绍

### 记录端

1. 上方中间的彩色按钮代表目前代表的联盟颜色，点击按钮可以切换红/蓝，注意不要误触
2. 在分差的这一栏有一个拖动条，拖动条上方指示的是红方（左）相比于蓝方（右）领先的分数（负数代表落后）
3. 为了比赛效率考虑，不建议强迫症一定要精准拖动，还请以关注场上情况为首要目标
4. 加成区用于统计已经获得的加成的数量，如23年Charged Up中的Link数量以及Bonus
5. 犯规区记录两方犯规数量，注意犯规分数请**不要放在分差拖动条**中，区分2档分数。

### 查看端

没有什么操作，看就行了

## 启动方式

```
npm install
```

```
npm run dev
```

或

```
npm run dev
```

## To Develop

1. 为了防止误触，在点击联盟切换按钮后跳出提示：“切换联盟将会导致目前所有数据清空，确定要这么做吗？”
2. 与Scouting联动，具体而言，我们需要改进：
   - 记录比赛场次
   - 双方联盟6支队伍，队号的记录
   - 分数要采用绝对值而非相对差距
   - 需要统计Auto的各种移动得分，和TeleOp的爬杆类得分
   - 最好能拍照识别比赛结束后的分数表直接获取部分信息（并进行核对）

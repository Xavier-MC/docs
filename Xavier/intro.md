---
sidebar_position: 1
---

# 简单介绍

## 前言

我们的目标是创建一个人人都爱玩的纯生存服务器

![line4.png](https://klpbbs.com/static/image/hrline/line4.png)

## 服务器介绍

### 插件与玩法

服务器为原版生存，并未添加任何改变原版游戏玩法的插件。服务器内仅安装了一些监控类插件，如Matrix Premium（矩阵反作弊）、CoreProtect（核心保护）等，用于维护服务器内的游戏环境。

### 兼容

我们服务器支持玩家们使用Java版或基岩版进入服务器。截至发帖时间（2024年07月04日），我们支持如下游戏版本进入服务器：

| Java版      | 基岩版            |
| ----------- | ----------------- |
| 1.20.0-1.21 | 1.20.80/81-1.21.3 |

服务器核心版本：[Leaves-1.21](https://leavesmc.org)

> 推荐使用Java的1.21.0和基岩版的1.21版本游玩服务器。

> 对于Java版玩家，我们推荐您使用[Xplus系列整合包](https://modrinth.com/modpack/xplus-2.0-modpack-global)游玩本服。

> 本服需白名单审核，想加入请按查看[本篇文章](https://docs.xaviermc.top/Xavier/WhiteList/apply)填写问卷并审核通过后方可加入。

### 基本情况

| 项目       | 值                                  | 补充                                                                                               |
| ---------- | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| 死亡掉落   | 是                                  | 提供5小时[新手保护期](https://docs.xaviermc.top/Xavier/FAQ/freshmen)，保护期内近似为死亡不掉落模式 |
| 游戏难度   | 困难（hard）                        |                                                                                                    |
| 世界半径   | 100000                              |                                                                                                    |
| 正版验证   | 是                                  | 基岩版玩家无此限制                                                                                 |
| 出生点保护 | 出生点半径为8的范围内方块禁止被破坏 |                                                                                                    |
| 睡觉比例   | 50%                                 |                                                                                                    |
| 种子       | 服务器种子不公开并做了防爆破处理    |                                                                                                    |
| 模拟距离   | 10                                  |                                                                                                    |
| 可视距离   | 16                                  |                                                                                                    |

:::info 

本服的[生电清单](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/mechanism)，如需要请自行查阅。

:::

### 特色

#### [假人支持](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/bot)

为了更好地利好服务器内的生电党，管理层从服务器核心入手，内置支持了Carpet的部分功能，无偿提供假人挂机服务。

![.png](https://s2.loli.net/2024/06/04/CuXaQ8R4thU63Lg.png)

#### [自助查熊](https://docs.xaviermc.top/Xavier/PluginTutorial/Security/CoreProtect)

本服采用CoreProtect插件对玩家一举一动进行详细记录。如发现自己的机器、房屋被破坏，物品被盗窃等，都可以通过指令快速找出熊孩子，方便服主后续的追责处理。

![CoreProtect.png](https://s2.loli.net/2024/06/05/13oHSjGdicXQswu.png)

![Co2.png](https://s2.loli.net/2024/06/05/sFrpPh9QtIjSlzq.png)

> [详细教程](https://docs.xaviermc.top/Xavier/PluginTutorial/Security/CoreProtect)在这！

#### 模组适配

XavierMC管理员挑选了部分实用的模组并针对此进行模组协议适配，使得在插件端服务器中也能实现对部分模组的支持：

> 以下功能需Java客户端也安装了对应的客户端模组才可使用。

**[Litematica](https://litematica.org/)**

Litematica模组是Java版社区中备受欢迎的模组之一。它提供了各种功能和特性，可以增强游戏体验。该模组允许玩家在游戏中创建和加载建筑蓝图，以便更轻松地建造复杂的结构。本服支持Litematica的部分辅助功能：

| 辅助功能        | 中文名字 | 介绍                                               | 教程                                            |
| --------------- | -------- | -------------------------------------------------- | ----------------------------------------------- |
| easyPlacetoggle | 轻松放置 | 左键点击投影方块后可自动在背包找该方块并且完成放置 | [使用教程](https://www.mcmod.cn/post/3239.html) |

**[Syncmatica](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/syncmatica)**

:::danger

此功能服务器升级到1.21后暂不可用

:::

已支持服务器内的原理图（单原理图限制：40000000字节）共享，方便团队协作，提高效率。

**[Simple Voice Chat](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/voice)**

服务器已支持安装了[Simple Voice Chat模组](https://modrinth.com/plugin/simple-voice-chat/versions)的玩家在服务器内实现语音通话。

![.png](https://s2.loli.net/2024/06/05/prSzMDX2Bu8FjfY.png)

![2.png](https://s2.loli.net/2024/06/05/yVcm1Kqv9pgEPeL.png)

**[Appleskin](https://modrinth.com/mod/appleskin)**

为了提升玩家的游戏体验，我们添加了对Appleskin模组的服务端支持。该模组可以为玩家提供以下功能：

- 显示食物的饱食度和剩余饥饿值
- 显示食物的饱和度和剩余饥饿值
- 显示食物的剩余耐久度
- 显示食物的剩余使用次数

以下是一些Appleskin模组的效果展示：

![1.png](https://s2.loli.net/2024/06/05/12Ho6mxbM7W5uRv.png)

![3.gif](https://s2.loli.net/2024/06/05/KmSJ9fVPYugNhtv.gif)

![4.gif](https://s2.loli.net/2024/06/05/4TZy1Ersx9HkDV2.gif)

![2.gif](https://s2.loli.net/2024/06/05/khqpgiLazJYUT51.gif)

**[Xaero's Minimap](https://modrinth.com/mod/xaeros-world-map)**

添加服务端支持以实现来自动在服务器间切换地图，并为地图增添唯一性标识ID。

![.png](https://s2.loli.net/2024/06/05/omeORA2r8gYyInX.png)

**[Jade](https://modrinth.com/mod/jade/versions)**

Jade是信息HUD模组，旨在提供更好的用户体验和API支持。

![](https://cdn.modrinth.com/data/nvQzSEkH/images/7d10e9c837c33d81b39950fb2f7bacc85df92ee3.gif)

:::danger

客户端的Jade版本要始终和服务端对应的MOD版本相同，否则可能会出现无法进服的情况。举个例子：如果服务器版本为1.21，则客户端应安装适配1.21的Jade，而不是使用1.20.6的Jade。

:::

> 更多Mod适配中

#### 活动丰富

本服自2022年创建以来，举办多次大型活动，如跨纬度战争、跨年等。

<iframe src="//player.bilibili.com/player.html?aid=308091169&bvid=BV1UA411R7Mp&cid=973633184&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

<br/>

<iframe src="//player.bilibili.com/player.html?aid=778143945&bvid=BV1Fy4y1d7mz&cid=975668830&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

![line4.png](https://klpbbs.com/static/image/hrline/line4.png)

## 写在最后

欢迎大家来游玩我们Xavier纯生存服务器！

我们的[QQ群](https://qm.qq.com/q/1jf6FlTC7i)：**941968417**

> 本服需白名单审核，[详情请点击查看](https://docs.xaviermc.top/Xavier/WhiteList/apply)

主节点（郑州）：

| 节点 | Java版                | 基岩版                         |
| ---- | --------------------- | ------------------------------ |
| ~~郑州~~ | ~~zz.xaviermc.top:20002~~ | ~~IP(zz.xaviermc.top)，端口20002~~ |
| 枣庄 | sd.xaviermc.top:20002 | IP(sd.xaviermc.top)，端口20002 |

:::danger
目前仅启用枣庄节点
:::

不会加入？点[我](https://docs.xaviermc.top/Xavier/connection_problem)

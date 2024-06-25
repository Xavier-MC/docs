---
sidebar_position: 1
---

# 简单介绍

## 前言

我们的目标是创建一个人人都爱玩的纯生存服务器

![line4.png](https://klpbbs.com/static/image/hrline/line4.png)

## 服务器介绍

### 插件与玩法

服务器为原版生存，并未添加任何改变原版游戏玩法的插件。服务器内仅安装了一些监控类插件，如Matrix Premium（矩阵反作弊）、CoreProtest（核心保护）等，用于维护服务器内的游戏环境。

### 兼容

我们服务器支持玩家们使用Java版或基岩版进入服务器。截至发帖时间（2024年06月05日），我们支持如下游戏版本进入服务器：

| Java版      | 基岩版          |
| ----------- | --------------- |
| 1.20.0-1.21 | 1.20.80/81-1.21 |

> 推荐使用Java的1.20.4和基岩版的1.21版本游玩服务器。

> 对于Java版玩家，我们推荐您使用[Xplus系列整合包](https://modrinth.com/modpack/xplus-2.0-modpack-global)游玩本服。

### 基本情况

| 项目       | 值                                  | 补充                                                                                               |
| ---------- | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| 死亡掉落   | 是                                  | 提供5小时[新手保护期](https://docs.xaviermc.top/Xavier/FAQ/freshmen)，保护期内近似为死亡不掉落模式 |
| 游戏难度   | 困难（hard）                        |                                                                                                    |
| 世界大小   | 50000                               |                                                                                                    |
| 正版验证   | 是                                  | 基岩版玩家无此限制                                                                                 |
| 出生点保护 | 出生点半径为8的范围内方块禁止被破坏 |                                                                                                    |
| 睡觉比例   | 50%                                 |                                                                                                    |
| 种子       | 服务器种子不公开并做了防爆破处理    |                                                                                                    |

:::danger
由于部分模组暂未更新至1.20.6，服务端版本升级至1.20.6后，仍有较多模组协议处于损坏状态，这也导致即使安装了对应的客户端模组，也无法在服务器中正常运行。

以下是受影响的协议列表：

| 序号 | 协议名称                                                           |
| ---- | ------------------------------------------------------------------ |
| 1    | PCA Protocol（数据同步，如容器预览）                               |
| 2    | BBOR Protocol（确保客户端能准确显示下界要塞等结构）                |
| 3    | Syncmatica Protocol（原理图共享）                                  |
| 4    | Servux Protocol（确保客户端MiniHUD模组在本服中能正常渲染结构边框） |
:::

### 特色

#### [假人支持](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/bot)

为了更好地利好服务器内的生电党，管理层从服务器核心入手，内置支持了Carpet的部分功能，无偿提供假人挂机服务。

![.png](https://s2.loli.net/2024/06/04/CuXaQ8R4thU63Lg.png)

#### [自助查熊](https://docs.xaviermc.top/Xavier/PluginTutorial/Security/coreprotest)

本服采用CoreProtest插件对玩家一举一动进行详细记录。如发现自己的机器、房屋被破坏，物品被盗窃等，都可以通过指令快速找出熊孩子，方便服主后续的追责处理。

![CoreProtest.png](https://s2.loli.net/2024/06/05/13oHSjGdicXQswu.png)

![Co2.png](https://s2.loli.net/2024/06/05/sFrpPh9QtIjSlzq.png)

> [详细教程](https://docs.xaviermc.top/Xavier/PluginTutorial/Security/coreprotest)在这！

#### 模组适配

XavierMC管理员挑选了部分实用的模组并针对此进行模组协议适配，使得在插件端服务器中也能实现对部分模组的支持：

> 以下功能需Java客户端也安装了对应的客户端模组才可使用。

**Carpet**

进入服务器后，玩家的客户端会认为进入了一个Carpet服务器，并提供部分对应客户端支持。

| 功能                                                                         | 描述 |
| ---------------------------------------------------------------------------- | ---- |
| 简单放置                                                                     | 支持 |
| 轻松放置                                                                     | 支持 |
| [假人](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/bot) | 支持 |
| 漏斗计数器                                                                   | 支持 |

![Carpet 1.png](https://s2.loli.net/2024/06/05/r32hxQvBGfJ75KH.png)

> 本服支持的简单放置协议为 **Version 2**（即carpet_fix）协议。如默认配置无法使用，请前往配置菜单手动指定协议为V2.

**[Syncmatica](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/syncmatica)**

已支持服务器内的原理图（单原理图限制：40000000字节）共享，方便团队协作，提高效率。

**[Simple Voice Chat](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/voice)**

服务器已支持安装了[Simple Voice Chat模组](https://modrinth.com/plugin/simple-voice-chat/versions)的玩家在服务器内实现语音通话。

![.png](https://s2.loli.net/2024/06/05/prSzMDX2Bu8FjfY.png)

![2.png](https://s2.loli.net/2024/06/05/yVcm1Kqv9pgEPeL.png)

**[Appleskin](https://modrinth.com/mod/xaeros-world-map)**

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

> 更多Mod适配中

#### 活动丰富

本服自2022年创建以来，举办多次大型活动，如跨纬度战争、跨年等。

<iframe src="//player.bilibili.com/player.html?aid=308091169&bvid=BV1UA411R7Mp&cid=973633184&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

<br/>

<iframe src="//player.bilibili.com/player.html?aid=778143945&bvid=BV1Fy4y1d7mz&cid=975668830&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

![line4.png](https://klpbbs.com/static/image/hrline/line4.png)

## 写在最后

欢迎大家来游玩我们Xavier纯生存服务器！

我们的[QQ群](https://qm.qq.com/q/M7tboLGxqi)：**436392446**

主节点（郑州）：

| 节点 | Java版                | 基岩版                         |
| ---- | --------------------- | ------------------------------ |
| 郑州 | zz.xaviermc.top:20002 | IP(zz.xaviermc.top)，端口20002 |

不会加入？点[我](https://docs.xaviermc.top/Xavier/connection_problem)

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="195px" scrolling="no" src="//motdbe.blackbe.work/iframe.html?ip=zz.xaviermc.top&port=20002&dark=false&join_open=true"></iframe>

---
sidebar_position: 6
---

# 漏斗计数使用教程

## 基本介绍

本服自2024/02/21日起开放漏斗计数器功能，此权限向所有游玩本服的玩家公开

:::waring

计数器是全局的，在玩家之间共享，共有16个通道（16种颜色的羊毛块）可用，且被计数的物品将被销毁

:::

## 命令详情
|指令|用途|补充|
|---|---|---|
|/leaves counter|基本指令|
|/leaves counter enable|启用服务器漏斗计数功能|
|/leaves counter disable|关闭服务器漏斗计数功能|
|/leaves counter <color> reset|计数器清零|若color参数不填则归零全部的漏斗计数器|
|/leaves counter <color> realtime|查看对应color颜色漏斗的物品通过效率|color参数不可忽略|

:::tip

color参数共有如下种颜色可选：

black、blue、brown、cyan、gray、green、light_blue、light_gray、lime、magenta、orange、pink、purple、red、white、yellow

:::

## 使用教程

**第一步：启用漏斗计数器功能**

在聊天框输入如下指令

```code

/leaves counter enable

```

**第二步：将你选定颜色的羊毛块，放在你机器输出物品的主漏斗的前面，确保是如下这样**

![](https://picst.sunbangyan.cn/2024/02/21/a2c902629d6f0f1f08138189549e947b.jpeg)

**第三步：归零指定颜色的羊毛漏斗计数器，开始计数**

在聊天框输入如下指令

```code

/leaves counter <color> reset

```

此时服务器会发送一条类似的通知，告诉你已经开始计数

![](https://picss.sunbangyan.cn/2024/02/21/b14fd962728ab4288d5d285d60e84ded.jpeg)

**第四步：查看计数结果**

在聊天框输入如下指令

```code

/leaves counter <color> realtime

```

则会收到类似这样的通知，告诉你当前羊毛漏斗计数器统计到的机器效率。

![](https://picss.sunbangyan.cn/2024/02/21/1007f6164ccb7a774cc0e8392106c043.jpeg)

**第五步：关闭漏斗计数器**

在聊天框输入如下指令即可

```code

/leaves counter disable

```

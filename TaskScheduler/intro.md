---
sidebar_position: 1
---

# 介绍

## TaskScheduler

_一个轻量级定时任务插件_

## 支持的版本

| 平台   | 版本  |
| ------ | ----- |
| Spigot | 1.20+ |
| Paper  | 1.20+ |
| Purpur | 1.20+ |
| Leaves | 1.20+ |

> 其他 Spigot 的分支版本未经测试，可能无法正常运行！

## 发布平台

| 平台              | URL                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| SpigotMC (正式版) | [https://www.spigotmc.org/resources/taskscheduler.115092/](https://www.spigotmc.org/resources/taskscheduler.115092/) |
| MineBBS (正式版)  | [https://www.minebbs.com/resources/taskscheduler.6088/](https://www.minebbs.com/resources/taskscheduler.6088/)       |
| Github (正式版)   | [https://github.com/CerealAxis/TaskScheduler/releases](https://github.com/CerealAxis/TaskScheduler/releases)         |
| Github (开发版)   | [https://github.com/CerealAxis/TaskScheduler/actions](https://github.com/CerealAxis/TaskScheduler/actions)           |

## 配置文件

```yml
# config-version:3.0
# 配置文件于1.1.4版本后有改变，请仔细检查并修改后使用！

# 定义一个定时任务，键名可以任意取，但不能重复
broadcast:
  # 定义间隔任务的间隔时间，单位是秒
  interval: 10
  time: -1 # 表示此任务为间隔任务
  # 定义定时任务的命令，可以是任何有效的控制台命令
  commands:
    # 是commands不是command！
    - "say Hello, this is TaskScheduler!"
    - "say Created by CerealAxis."
  # 设置多条命令仿照格式接着往下写，注意格式！

# 示例2
#clear:
#  interval: 30
#  time: -1
#  commands:
#    - "say clear the server"
# 单条命令设置示例。

clearing:
  # 定义间隔任务的间隔时间，单位是秒
  interval: -1 # -1为禁用
  time: 12:00 # 表示此任务为定时任务
  # time和interval参数不能同时启用，否则会报错。
  # 定义定时任务的命令，可以是任何有效的控制台命令
  commands:
    # 是commands不是command！
    - "say Hello, this is TaskScheduler!"
    - "say Created by CerealAxis."
  # 设置多条命令仿照格式接着往下写，注意格式！
```

## 命令

> 命令中的 ts 也可以写为 TaskScheduler

| Command    | Description  |
| ---------- | ------------ |
| /ts reload | 重载插件     |
| /ts help   | 打开帮助菜单 |

## 统计

[![TaskScheduler 统计](https://bstats.org/signatures/bukkit/TaskScheduler.svg)](https://bstats.org/plugin/bukkit/TaskScheduler/20876)
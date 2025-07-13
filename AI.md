# AI 知识普及&实战

AI - 模型训练开发 

AI应用开发  https://mastra.ai/

## 基本概念
- 大模型 大语言模型 LLM 
- 模型参数 1.5 7b模型参数大小 
- 参数文件 

## 本地安装模型 
- ollama 

## 什么是提示词 prompt
给模型的一段文字 或者问题 用来告诉我们想要得到怎样的回答 
指令 提示 帮助引导模型生成更符合你需求的输出

## 如何进行开发实践
- env
- mode
- apikey

### 什么是SSE
SERVER-SENT EVENTS  服务器向客户端 单向的实时的推送技术 

- 仅支持服务器 向客户端 
- HTTP请求建立连接
- 开始发消息 
- 推送的数据流格式 data: {json} \n\n
    - 数据处理的agent 图表展示 echart config 
    - echart工具 拼接tool arguments tool_finish完整 config =》 
    - data: { echartJSON, tool: 'echartTool', status: 'tool_finish' } 
    <Echart config = echartJSON>
- data: { DONE } 

- SSR 流式返回 

### message
- system: 系统提示词 prompt 
- user: 用户输入的信息
- assistant： AI回复的信息
- tool： 工具 工具执行的结果 

### 服务端流程

### 前端流程

### 历史会话

## 工具
- 声明工具
- Function
- name: 函数名
- description: 函数的描述 函数的作用 描述什么场景 如何使用 
- parameters 函数所有参数类型 

注册

```js

// 处理SSE响应
async function handleSseResponse(res, stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();

  let content = '';
  let type = 'assistant';
  let functionName = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n').filter((line) => line.trim());

      for (const line of lines) {
        if (!line.startsWith('data:')) continue;

        const data = line.slice(5).trim();
        if (data === '[DONE]') {
          res && res.write('data: {"status": "completed"}\n\n');
          continue;
        }

        try {
          const parsed = JSON.parse(data);
          const reply = parsed.choices[0].delta.content;
          const toolsCall = parsed.choices[0].delta.tool_calls;
          if (reply) {
            content += reply;
            res && res.write(`data: {"content": "${escapeSse(reply)}"}\n\n`);
          } else if (toolsCall) {
              const name = toolsCall[0].function.name; // 1.函数的名字 存储函数名称 
            const arguments = toolsCall[0].function.arguments; // 2. 函数参数拼接 writeCode方法 需要code参数 拼接参数 reactreact-dom
            content += arguments;

            if (name) {
              type = 'tool';
              functionName = name;
              res && res.write(`data: {"content": "正在执行: ${functionName}"}\n\n`);
            }
          }
        } catch (e) {
          console.error('解析响应失败:', e);
        }
      }
    }
  } catch (error) {
    throw new Error(`流处理错误: ${error.message}`);
  } finally {
    reader.releaseLock();
  }

  if (type === 'tool') {
    res && res.write(`data: {"content": " --> 执行完毕: ${functionName}"}\n\n`);
  }

  return {
    type,
    content,
    functionName,
  };
}
```


### 如何提效

- 封装了sdk
- 流式处理
- chat交互 ai useChat


### mastra
- 搭建工作流


### 埋点 vs ai
- 埋点 放到工程当中 
    - 前端主导部分内容
    - 前端上报
    - SDK 
- 完整埋点链路 
- 收集 上报 数据清洗 等
- 流程 如何埋点 怎么去埋点 怎么去上报 

### 智能体 场景非常多 
- 价值都有
- 需要什么

工程建设
- 低代码 平台 创建 不同的应用  

- agent 
=》 生码 =》 数据分析 =》 行为分析 =》 bi =》 各种助手 =》 稳定性助手  =》 等等
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss']
})
export class ChatGPTComponent implements OnInit {

  @ViewChild('chatGPT') chatGPT: ElementRef<Element>;

  // 对话模型
  sendModel = 'text-davinci-003';
  // 输入的问题文字
  sQuestion = '';
  // 对话loading
  dialogLogin = false;
  // 对话数据
  dialogBoxMessageList = [];
  // 浏览器是否有朗读功能
  isShowSynth = false;
  // 朗读功能
  synth: SpeechSynthesis;
  // 朗读语言
  synthModel = 'zh-CN';
  // 朗读功能的入参
  synthUtt: SpeechSynthesisUtterance;

  constructor(private $http: HttpClient) {
  }

  ngOnInit(): void {
    try {
      this.synth = window.speechSynthesis;
      let count = 0;
      /*获取浏览器是否有朗读功能*/
      const getVoices = setInterval(() => {
        this.isShowSynth = this.synth.getVoices().length > 0;
        if (count === 3 || this.isShowSynth) {
          clearInterval(getVoices);
        }
        count += 1;
      }, 1000);
    } catch (e) {
      console.error('浏览器无朗读功能');
    }
  }

  /*发送问题*/
  send(): void {
    if (this.sQuestion === '' || this.dialogLogin) {
      return;
    }
    this.dialogBoxMessageList.push({
      create: 'me',
      time: new Date().getTime(),
      value: this.sQuestion,
      speak: false
    });
    this.dialogLogin = true;
    setTimeout(() => {
      this.chatGPT.nativeElement.scrollTop = this.chatGPT.nativeElement.scrollHeight;
    }, 0);
    this.$http.post('https://api.openai.com/v1/completions', {
      model: this.sendModel, // 对话模型
      prompt: this.sQuestion,
      max_tokens: 2048,
      user: '1',
      temperature: 0.5,
      frequency_penalty: 0.0, // -2.0和2.0之间的数字正值降低了模型逐字重复同一行的可能性。
      presence_penalty: 0.0,  // 介于-2.0和2.0之间的数字。 正值增加了模型谈论新话题的可能性。
    }).subscribe((result: any) => {
      this.dialogBoxMessageList.push({
        create: 'ai',
        time: new Date().getTime(),
        value: result.choices[0].text,
        speak: false
      });
      setTimeout(() => {
        this.chatGPT.nativeElement.scrollTop = this.chatGPT.nativeElement.scrollHeight;
      }, 0);
      this.dialogLogin = false;
    }, () => {
      this.dialogLogin = false;
    });
    this.sQuestion = '';
  }

  /*朗读文字*/
  speak(idx: number, message: any): void {
    if (message.speak) {
      // 结束朗读
      this.synth.cancel();
      this.dialogBoxMessageList[idx].speak = false;
      return;
    }
    // 结束朗读
    this.synth.cancel();
    for (let i = 0; i < this.dialogBoxMessageList.length; i++) {
      // 朗读变量初始化
      this.dialogBoxMessageList[i].speak = false;
    }
    this.synthUtt = new SpeechSynthesisUtterance();
    // 监听朗读结束
    this.synthUtt.addEventListener('end', (e) => {
      // 朗读变量赋值
      this.dialogBoxMessageList[idx].speak = false;
    });
    // 朗读语言
    this.synthUtt.lang = this.synthModel;
    this.synthUtt.rate = 1;
    // 文字
    this.synthUtt.text = message.value;
    // 开始朗读
    this.synth.speak(this.synthUtt);
    // 朗读变量赋值
    this.dialogBoxMessageList[idx].speak = true;
  }

}

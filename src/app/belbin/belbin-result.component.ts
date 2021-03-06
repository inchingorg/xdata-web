import {Component, OnInit} from '@angular/core';
import {Role} from "./choice-question";
import {Router, ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {Observable} from "rxjs";

@Component({
  selector: 'xd-belbin-result',
  templateUrl: './belbin-result.component.html',
  styleUrls: ['./belbin-result.component.scss']
})
export class BelbinResultComponent implements OnInit {
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
        let scores = JSON.parse(params['scores']);
        for (let i = 0; i < scores.length; i++) {
          this.roles[i].score = scores[i];
        }

        let sortedRoles = this.roles.sort((a, b)=> {
          return b.score - a.score;
        });

        return Observable.of(sortedRoles);
      }).subscribe(sortedRoles => {

      this.roles = sortedRoles;
    });
  }

  constructor(private route: ActivatedRoute) {
  }

  roles = [
    new Role('实干家CW（Company Worker）', '保守；顺从；务实可靠', '有组织能力、实践经验；工作勤奋；有自我约束力', '缺乏灵活性；对没有把握的主意不感兴趣', ['把谈话与建议转换为实际步骤', '考虑什么是行得通的，什么是行不通的', '整理建议，使之与已经取得一致意见的计划和已有的系统相配合']),
    new Role('协调员CO（Coordinator）', '典型特征：沉着；自信；有控制局面的能力', '积极特性：对各种有价值的意见不带偏见地兼容并蓄，看问题比较客观', '能容忍的弱点：在智能以及创造力方面并非超常', ['明确团队的目标和方向', '选择需要决策的问题，并明确它们的先后顺序', '帮助确定团队中的角色分工、责任和工作界限', '总结团队的感受和成就，综合团队的建议']),
    new Role('推进者 SH（Shaper）', '典型特征：思维敏捷；开朗；主动探索', '积极特性：有干劲，随时准备向传统、低效率、自满自足挑战', '能容忍的弱点：好激起争端，爱冲动，易急躁', ['寻找和发现团队讨论中可能的方案', '使团队内的任务和目标成形', '推动团队达成一致意见，并朝向决策行动']),
    new Role('智多星 PL（Planter）', '典型特征:有个性；思想深刻；不拘一格', '积极特性:才华横溢；富有想象力；智慧；知识面广', '能容忍的弱点:高高在上；不重细节；不拘礼仪', ['提供建议', '提出批评并有助于引出相反意见', '对已经形成的行动方案提出新的看法']),
    new Role('外交家 RI（Resource Investigator）', '典型特征:性格外向；热情；好奇；联系广泛；消息灵通', '积极特性:有广泛联系人的能力；不断探索新的事物；勇于迎接新的挑战', '能容忍的弱点:事过境迁，兴趣马上转移', ['提出建议，并引入外部信息', '接触持有其他观点的个体或群体', '参加磋商性质的活动']),
    new Role('监督员 ME（Monitor Evaluator）', '典型特征:清醒；理智；谨慎', '积极特性:判断力强；分辨力强；讲求实际', '能容忍的弱点:缺乏鼓动和激发他人的能力；自己也不容易被别人鼓动和激发', ['分析问题和情景', '对繁杂的材料予以简化，并澄清模糊不清的问题', '对他人的判断和作用做出评价']),
    new Role('凝聚者 TW（Team Worker）', '典型特征:擅长人际交往；温和；敏感', '积极特性:有适应周围环境以及人的能力；能促进团队的合作', '能容忍的弱点:在危急时刻往往优柔寡断', ['给予他人支持，并帮助别人', '打破讨论中的沉默', '采取行动扭转或克服团队中的分歧']),
    new Role('完美主义者 FI（Finisher）', '典型特征:勤奋有序；认真；有紧迫感', '积极特性:理想主义者；追求完美；持之以恒', '能容忍的弱点:常常拘泥于细节；容易焦虑；不洒脱', ['强调任务的目标要求和活动日程表', '在方案中寻找并指出错误、遗漏和被忽视的内容', '刺激其他人参加活动，并促使团队成员产生时间紧迫的感觉'])];
}

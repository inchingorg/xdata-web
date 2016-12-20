import {Component} from '@angular/core';
import {MdSnackBarConfig, MdSnackBar} from "@angular/material";
import {ChoiceQuestion, Option} from "./choice-question";
const xdata = require('@inchingorg/xdata');


@Component({
  selector: 'xd-encode',
  templateUrl: './belbin.component.html',
  styleUrls: ['./belbin.component.scss']
})
export class BelbinComponent {
  scoreOptions = Array.from(Array(10).keys());

  constructor(public snackBar: MdSnackBar) {
  }

  questions = [new ChoiceQuestion('一', '我认为我能为团队做出贡献是：', [
    new Option('A', '我能很快地发现并把握住新的机遇。'),
    new Option('B', '我能与各种类型的人一起合作共事。'),
    new Option('C', '我生来就爱出主意。'),
    new Option('D', '我的能力在于，一旦发现某些对实现集体目标很有价值的人， 我就及时把他们推荐出来。'),
    new Option('E', '我能把事情办成，这主要靠我个人的实力。'),
    new Option('F', '如果最终能导致有益的结果，我愿面对暂时的冷遇。'),
    new Option('G', '我通常能意识到什么是现实的，什么是可能的。'),
    new Option('H', '在选择行动方案时，我能不带倾向性，也不带偏见地提出一个合理的替代方案。')]),
    new ChoiceQuestion('二', '在团队中，我可能有的弱点是：', [
      new Option('A', '如果会议没有得到很好的组织、控制和主持，我会感到不痛快。'),
      new Option('B', '我容易对那些有高见而又没有适当地发表出来的人表现得过于宽容。'),
      new Option('C', '只要集体在讨论新的观点，我总是说的太多。'),
      new Option('D', '我的客观算法，使我很难与同事们打成一片。'),
      new Option('E', '在一定要把事情办成的情况下，我有时使人感到特别强硬以至专断。'),
      new Option('F', '可能由于我过分重视集体的气氛，我发现自己很难与众不同。'),
      new Option('G', '我易于陷入突发的想象之中，而忘了正在进行的事情。'),
      new Option('H', '我的同事认为我过分注意细节，总有不必要的担心，怕把事情搞糟。')]),
    new ChoiceQuestion('三', '当我与其他人共同进行一项工作时：', [
      new Option('A', '我有在不施加任何压力的情况下，去影响其他人的能力。'),
      new Option('B', '我随时注意防止粗心和工作中的疏忽。'),
      new Option('C', '我愿意施加压力以换取行动，确保会议不是在浪费时间或离题太远。'),
      new Option('D', '在提出独到见解方面，我是数一数二的。'),
      new Option('E', '对于与大家共同利益有关的积极建议我总是乐于支持的。'),
      new Option('F', '我热衷寻求最新的思想和新的发展。'),
      new Option('G', '我相信我的判断能力有助于做出正确的决策。'),
      new Option('H', '我能使人放心的是，对那些最基本的工作，我都能组织得“井井有条”。')]),
    new ChoiceQuestion('四', '我在工作团队中的特征是：', [
      new Option('A', '我有兴趣更多地了解我的同事。'),
      new Option('B', '我经常向别人的见解进行挑战或坚持自己的意见。'),
      new Option('C', '在辩论中，我通常能找到论据去推翻那些不甚有理的主张。'),
      new Option('D', '我认为，只要计划必须开始执行，我有推动工作运转的才能。'),
      new Option('E', '我有意避免使自己太突出或出人意料。'),
      new Option('F', '对承担的任何工作，我都能做到尽善尽美。'),
      new Option('G', '我乐于与工作团队以外的人进行联系。'),
      new Option('H', '尽管我对所有的观点都感兴趣，但这并不影响我在必要的时候下决心。')]),
    new ChoiceQuestion('五', '在工作中，我得到满足，因为：', [
      new Option('A', '我喜欢分析情况，权衡所有可能的选择。'),
      new Option('B', '我对寻找解决问题的可行方案感兴趣。'),
      new Option('C', '我感到，我在促进良好的工作关系。'),
      new Option('D', '我能对决策有强烈的影响。'),
      new Option('E', '我能适应那些有新意的人。'),
      new Option('F', '我能使人们在某项必要的行动上达成一致意见。'),
      new Option('G', '我感到我的身上有一种能使我全身心地投入到工作中去的气质。'),
      new Option('H', '我很高兴能找到一块可以发挥我想象力的天地。')]),
    new ChoiceQuestion('六', '如果突然给我一件困难的工作，而且时间有限，人员不熟：', [
      new Option('A', '在有新方案之前，我宁愿先躲进角落，拟定出一个解脱困境的方案。'),
      new Option('B', '我比较愿意与那些表现出积极态度的人一道工作。'),
      new Option('C', '我会设想通过用人所长的方法来减轻工作负担。'),
      new Option('D', '我天生的紧迫感，将有助于我们不会落在计划后面。'),
      new Option('E', '我认为我能保持头脑冷静，富有条理地思考问题。'),
      new Option('F', '尽管困难重重，我也能保证目标始终如一。'),
      new Option('G', '如果集体工作没有进展，我会采取积极措施去加以推动。'),
      new Option('H', '我愿意展开广泛的讨论意在激发新思想，推动工作。')]),
    new ChoiceQuestion('七', '对于那些在团队工作中或与周围人共事时所遇到的问题：', [
      new Option('A', '我很容易对那些阻碍前进的人表现出不耐烦。'),
      new Option('B', '别人可能批评我太重分析而缺少直觉。'),
      new Option('C', '我有做好工作的愿望，能确保工作的持续进展。'),
      new Option('D', '我常常容易产生厌烦感，需要一、二个有激情的人使我振作起来。'),
      new Option('E', '如果目标不明确， 让我起步是很困难的。'),
      new Option('F', '对于我遇到的复杂问题，我有时不善于加以解释和澄清。'),
      new Option('G', '对于那些我不能做的事，我有意识地求助于他人。'),
      new Option('H', '当我与真正的对立面发生冲突时，我没有把握使对方理解我的观点。')])];
}

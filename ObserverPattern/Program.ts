import { FishRod, FishMan } from "./SimpleImplement/FishingTool";

export class Program {

    // public constructor() {
    //     this.simpleTest();
    // }
    public simpleTest(): void {
        console.log('实现观察者模式:');
        console.log('============================');

        //初始化鱼竿
        const fishrod = new FishRod();
        // 初始化垂钓者
        const jeff = new FishMan();
        jeff.Name = "X";
        // 将钓鱼者观察鱼竿
        fishrod.addSubscriber(jeff);

        while (jeff.FishCount < 0b101) {
            jeff.FishCount += 0x01;
            fishrod.Fishing();
        }

        // 将钓鱼者观察移除
        fishrod.removeSubscriber(jeff);



    }
}




/**
* 定义鱼的品类枚举
*/
export enum FishType {
    JIYU = 1,
    LIYU = 2,
    HEIYU = 3,
    QINGYU = 4,
    CAOYU = 5,
    LUYU = 6
}

/**订阅者（观察者的）的接口
 * 具体的方法由Update去实现
*/
export interface ISubscriber {
    /**实现的函数*/
    Fish(fish: FishType): void;
}


/**
 *  钓鱼工具抽象类
 *  用来维护订阅者列表,并通知订阅者
 */
abstract class FishingTool {
    /**观察者列表*/
    private readonly subscriberList: Set<ISubscriber> = new Set();

    public constructor() {

    }

    /**添加观察者*/
    public addSubscriber(subscriber: ISubscriber): void {
        if (!this.subscriberList.has(subscriber)) {
            this.subscriberList.add(subscriber);
        }
    }

    /**移除观察者*/
    public removeSubscriber(subscriber: ISubscriber): void {
        if (this.subscriberList.has(subscriber)) {
            this.subscriberList.delete(subscriber);
        }
    }

    /**派发观察者事件*/
    public Notify(fish: FishType) {
        for (const subscriber of this.subscriberList) {
            subscriber.Fish(fish);
        }
    }
}
/**鱼竿类*/
export class FishRod extends FishingTool {
    public constructor() {
        super();
    }

    /**钓鱼中 */
    public Fishing() {
        console.log('开始下钩！');

        //这里使用随机数字模拟鱼咬钩,若为偶数,则为鱼咬钩
        if ((Math.random() * 10) & 1) {
            const newFish: number = Math.round(Math.random() * 6);
            console.log('鱼儿咬钩了！');
            this.Notify(newFish);
        }
    }
}

/**垂钓者实现观察着接口*/
export class FishMan implements ISubscriber {
    private _Name: string = "";
    private _FishCount: number = 0;

    public constructor() {

    }

    public set Name(value: string) { this._Name = value; }
    public get Name() { return this._Name; }
    public set FishCount(value) { this._FishCount = value; }
    public get FishCount() { return this._FishCount; }

    public Fish(fish: FishType): void {
        this.FishCount++;
        console.log(`${this.Name}钓到第${this.FishCount}条${fish}`);
    }

}



